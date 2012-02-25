var Row = function(id) {
   this.init(id);
}

Row.prototype = {
    id: null,
    container: null,
    samples: [],
    
    init: function(id) {
        if (id != undefined) {
            this.id = id;
        } else {
            this.id = Util.randomString();
        }
        this.containerId = 'row-' + this.id;
        this.container = '<div class="row" id="row-' + this.id + '"><img src="img/play.png"></div>';  
    },
    
    redraw: function() {
        
    },
    
    addSample: function(sample, offset) {
        var sampleId = 'sample-' + this.samples.length;
        var width = Math.round(sample.duration * Row.WIDTH_COEF);
        offset = offset * Row.PIXEL_PER_SECOND;
        
        var visualSample = new VisualSample({ sample: sample
                                            , width: width
                                            , offset: offset
                                            , sampleId: sampleId});
        
        $('#row-' + this.id).append(visualSample.container);
        this.samples.push(visualSample);
    }
    
}

Row.WIDTH_COEF = 3;
Row.PIXEL_PER_SECOND = 3;