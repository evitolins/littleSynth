// Requires "Oscillator" class

var Sequencer = function (ctx) {
    this.ctx = ctx;
    this.scale = [];
};

Sequencer.prototype.addOscillator = function (freq, type) {
    this.scale.push(new Oscillator(this.ctx, freq || 440, type || 'sine'));
};

Sequencer.prototype.play = function (sequence) {
    var timePassed = 0,
        i,
        note,
        delay;
    for (i = 0; i < sequence.length; i++) {
        note = sequence[i][0];
        delay = sequence[i][1];
        if (this.scale[note] !== undefined) {
            this.scale[note].pulse(timePassed, delay);
            timePassed = timePassed + delay;
        }
    }
};