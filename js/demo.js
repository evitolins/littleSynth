// Requires Sequencer, Oscillator & getFrequency

// AudioContext Shim
window.AudioContext = (function(){
  return  window.AudioContext ||
          window.webkitAudioContext;
})();

var initialized = false;
var ctx;
var sq;
var sq2;

var init = function () {
    if (!initialized) { initialized = true;}
    else return;

    ctx = new AudioContext();
    sq = new Sequencer(ctx);

    // Create scale of octaves
    sq.addOscillator(55, 'sine');
    sq.addOscillator(110, 'sine');
    sq.addOscillator(220, 'sine');
    sq.addOscillator(440, 'sine');
    sq.addOscillator(880, 'sine');
    sq.addOscillator(1760, 'sine');

    sq2 = new Sequencer(ctx);
    // Create C major scale
    sq2.addOscillator(getFrequency("C4"), 'triangle');
    sq2.addOscillator(getFrequency("D4"), 'triangle');
    sq2.addOscillator(getFrequency("E4"), 'triangle');
    sq2.addOscillator(getFrequency("F4"), 'triangle');
    sq2.addOscillator(getFrequency("G4"), 'triangle');
    sq2.addOscillator(getFrequency("A4"), 'triangle');
    sq2.addOscillator(getFrequency("B4"), 'triangle');
    sq2.addOscillator(getFrequency("C5"), 'triangle');
 
};


var sequenceA = [
    [0, 1000],
    [1, 1000],
    [2, 1000],
    [3, 1000],
    [4, 1000],
    [5, 1000]
];
var sequenceB = [
    [0, 80],
    [undefined, 20],
    [1, 80],
    [undefined, 20],
    [2, 80],
    [undefined, 20],
    [3, 80],
    [undefined, 20],
    [4, 80],
    [undefined, 20],
    [3, 80],
    [undefined, 20],
    [2, 80],
    [undefined, 20],
    [1, 80],
    [undefined, 20],
    [0, 80]
];

// Fun "retro" sound
var sequenceC = [
    [[0, 2, 4], 100],
    [undefined, 20],
    [[0, 2, 4], 100],
    [undefined, 20],
    [[0, 2, 4], 100],
    [undefined, 20],
    [[1, 3, 6], 100],
    [undefined, 20],
    [[1, 3, 6], 100],
    [undefined, 20],
    [[1, 3, 6], 100],
    [undefined, 20],
    [[2, 4, 7], 100],
    [undefined, 20],
    [[2, 4, 7], 100],
    [undefined, 20],
    [[2, 4, 7], 500],
    [undefined, 20]
];

// "Mary Had a Little Lamb" (with grand finale)
var sequenceD = [
    [2, 300], [undefined, 20],
    [1, 300], [undefined, 20],
    [0, 300], [undefined, 20],
    [1, 300], [undefined, 20],
    [2, 300], [undefined, 20],
    [2, 300], [undefined, 20],
    [2, 450], [undefined, 20],
    [1, 300], [undefined, 20],
    [1, 300], [undefined, 20],
    [1, 450], [undefined, 20],
    [2, 300], [undefined, 20],
    [4, 300], [undefined, 20],
    [4, 450], [undefined, 20],
    [2, 300], [undefined, 20],
    [1, 300], [undefined, 20],
    [0, 300], [undefined, 20],
    [1, 300], [undefined, 20],
    [2, 300], [undefined, 20],
    [2, 300], [undefined, 20],
    [2, 300], [undefined, 20],
    [2, 300], [undefined, 20],
    [1, 300], [undefined, 20],
    [1, 300], [undefined, 20],
    [2, 300], [undefined, 20],
    [1, 300], [undefined, 20],
    [[0], 30], [undefined, 10],
    [[0, 2], 30], [undefined, 10],
    [[0, 2, 4], 30], [undefined, 10],
    [[0, 2, 4, 7], 1000]
];


// Gather Elements
var elem = {
    btn1 : document.getElementById('btn1'),
    btn2 : document.getElementById('btn2'),
    btn3 : document.getElementById('btn3'),
    btn4 : document.getElementById('btn4'),
    txt1 : document.getElementById('txt1')
};

// Bind Elements
elem.btn1.addEventListener('click', function(){
    init();
    sq.play(sequenceA);
});
elem.btn2.addEventListener('click', function(){
    init();
    sq.play(sequenceB);
});
elem.btn3.addEventListener('click', function(){
    init();
    sq2.play(sequenceC);
});
elem.btn4.addEventListener('click', function(){
    init();
    var customSequence = JSON.parse(elem.txt1.value);
    sq2.play(customSequence);
});

// Add Default Sequence to textarea
elem.txt1.value = JSON.stringify(sequenceD, null, 4);
