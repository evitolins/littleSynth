littleSynth
===============================================================================
Create sounds and music using the HTML5 WebAudio API.


Getting Started
---------------
__Immediately play 440hz "A" for 1 second__

```javascript
var ctx = new AudioContext();
var osc = new Oscillator(ctx, 444);
osc.pulse(0, 1000);
```


Classes
-------
__Oscillator (ctx, freq, type)__

- setFreq (freq)
- setType (type)
- play ()
- stop ()
- pulse (start, length)


### References

- https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
- http://blog.chrislowis.co.uk/2013/06/05/playing-notes-web-audio-api.html
- http://www.html5rocks.com/en/tutorials/webaudio/intro/
- https://github.com/pendragon-andyh/WebAudio-PulseOscillator
