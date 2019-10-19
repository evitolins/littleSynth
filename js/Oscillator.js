// Produces an HTML5 Oscillator for a given AudioContext obj

var Oscillator = function (ctx, freq, type) {
    this.ctx = ctx;
    this.osc = this.ctx.createOscillator();
    this.osc.type = type || 'sine';
    this.osc.frequency.value = freq || 440;
    this.osc.start(0);
    this.volume = this.ctx.createGain();
    this.volume.gain.value = 0;
    this.osc.connect(this.volume);
    this.volume.connect(this.ctx.destination);
};

Oscillator.prototype.setFreq = function (freq) {
    this.osc.frequency.value = freq || 440;
};

Oscillator.prototype.setType = function (type) {
    this.osc.type = type || 'sine';
};

Oscillator.prototype.play = function () {
    this.volume.gain.value = .2;
};

Oscillator.prototype.stop = function () {
    //http://alemangui.github.io/blog//2015/12/26/ramp-to-value.html
    this.volume.gain.setTargetAtTime(0, this.ctx.currentTime, 0.015);
    this.volume.gain.value = 0;
};

Oscillator.prototype.pulse = function(start, length) {
    var fadeSec = 0.005;
    var curTime = this.ctx.currentTime;
    // var curTime = timestamp;
    var startSec = curTime + (start/1000);
    var endSec = curTime + (start/1000) + (length/1000);
    this.volume.gain.setTargetAtTime(1.0, startSec, fadeSec);
    this.volume.gain.setTargetAtTime(0, endSec, fadeSec);
};