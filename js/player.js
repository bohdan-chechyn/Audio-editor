(function() {
    
function AudioSample(audio, offset) {
    this.offset = Number(offset) || this.offset;
    this.audio = audio;
}

AudioSample.prototype = {
    offset: 0,
    
    getParams: function() {
        return {offset: this.offset / 1000, src: this.audio.currentSrc.replace(location.href, ''), volume: this.audio.volume};
    }
}

function Player() {
    this.samples = [];
}

var $mixForm;

Player.prototype = {
    addSample: function(audio, offset) {
        var sample = new AudioSample(audio, offset);
        this.samples.push(sample);
        return sample;
    },
    
    play: function() {
        this.samples.forEach(function(sample) {
            sample.timeoutId = setTimeout(HTMLAudioElement.prototype.play.bind(sample.audio), sample.offset);
        });
    },
    
    stop: function() {
        this.samples.forEach(function(sample) {
            clearTimeout(sample.timeoutId);
            sample.timeoutId = undefined;
            sample.audio.pause();
            sample.audio.currentTime = 0;
        });
    },
    
    getParams: function() {
        return this.samples.map(function(sample) { return sample.getParams() });
    },
    
    requestMix: function() {
        console.log(this.getParams());
        $mixForm = $mixForm || $('<form method="POST" action="mix.php" style="display:none"><input name="samples" /></form>').appendTo(document.body);
        $mixForm.find('input').val(JSON.stringify(this.getParams()));
        $mixForm.submit();
    }
}

window.Player = Player;

})();