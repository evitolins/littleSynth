littleSynth
===============================================================================
Create sounds and music using the HTML5 WebAudio API.


Getting Started
---------------
__Immediately play 440hz "A" for 1 second__

```javascript
var ctx = new AudioContext();
var osc = new Oscillator(ctx, 440);
osc.pulse(0, 1000);
```

__Play 3 notes in sequence__

```javascript
var ctx = new AudioContext();
var sq = new Sequencer(ctx);
sq.addOscillator(110, 'square');
sq.addOscillator(220, 'square');
sq.addOscillator(440, 'square');
var sequence = [[0, 100], [1, 100], [2, 100]];
sq.play(sequence);
```


Classes
-------
__Oscillator (ctx, freq, type)__

Oscillator create a OscillatorNode with simple methods to manipulate and play
it's sound.  Because an OscillatorNode can only use native methods native
start() & stop() once, the effect of playing is achieved using a gainNode.

- setFreq (freq)
- setType (type)
- play ()
- stop ()
- pulse (start, length)


__Sequencer (ctx)__

Sequencer allows user to build a scale of notes, and play sequences based on
it's defined scale.

- addOscillator (freq, type)
- play (sequence)

Using `addOscillator`, you can build your own custom scale of notes.  This method
essentially pushes an Oscillator instance of specified settings to the Sequencer's
internal chord array.

> This is sorta messy, and will probably be reworked in future versions.

Sequences are built with a simple, multi-dimensional array.  Each step consists
of 2 indexes `[note, duration]`.  The sequencer also supports chords by supplying
an array of notes in the first index `[[note, note, note], duration]`.

The following example plays a single note using the first oscillator, for 500ms.
Then plays a 3 note chord for 1s.

```
[
    [0, 500],
    [[0, 2, 4], 1000]
]
```


### References

- https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
- http://blog.chrislowis.co.uk/2013/06/05/playing-notes-web-audio-api.html
- http://www.html5rocks.com/en/tutorials/webaudio/intro/
- https://github.com/pendragon-andyh/WebAudio-PulseOscillator
- https://github.com/kevincennis/TinyMusic
- https://github.com/stewdio/beep.js
- https://github.com/gregjopa/music.js
- https://gist.github.com/stuartmemo/3766449
- https://github.com/janesconference/nu.js/blob/master/nu.js
