// AudioContext Shim
window.AudioContext = (function(){
  return  window.AudioContext ||
          window.webkitAudioContext;
})();

var ctx = new AudioContext();
var sq = new Sequencer(ctx);

// Create scale
sq.addOscillator(55, 'sine');
sq.addOscillator(110, 'sine');
sq.addOscillator(220, 'sine');
sq.addOscillator(440, 'sine');
sq.addOscillator(880, 'sine');
sq.addOscillator(1760, 'sine');

var sequenceA = [
    [2, 1000]
];
var sequenceB = [
    [0, 80],
    [1, 80],
    [2, 80],
    [3, 80],
    [4, 80],
    [3, 80],
    [2, 80],
    [1, 80],
    [0, 80]
];

// Gather Elements
var elem = {
    btn1 : document.getElementById('btn1'),
    btn2 : document.getElementById('btn2'),
    btn3 : document.getElementById('btn3'),
    txt1 : document.getElementById('txt1')
};

// Bind Elements
elem.btn1.addEventListener('click', function(){
    sq.play(sequenceA);
});
elem.btn2.addEventListener('click', function(){
    sq.play(sequenceB);
});
elem.btn3.addEventListener('click', function(){
    var customSequence = JSON.parse(elem.txt1.value);
    console.log(customSequence);
    sq.play(customSequence);
});

// Add Default Sequence to textarea
elem.txt1.value = JSON.stringify(sequenceB, null, 4);
