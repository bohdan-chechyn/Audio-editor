var Row = function(id) {
   this.init(id);
}

Row.prototype = {
    id: null,
    container: null,
    samples: [],
    
    init: function(id) {
        this.id = id;
        this.containerId = 'row-' + this.id;
        this.container = '<div class="row" id="row-' + this.id + '"><img src="img/play.png"></div>';  
    },
    
    redraw: function() {
        
    },
    
    addSample: function(sample, offset) {
        var sampleId = 'sample-' + this.samples.length;
        var width = Math.round(sample.duration * Row.WIDTH_COEF);
        offset = Math.round(offset);
        l(width)
        var visualSample = new VisualSample({ sample: sample
                                            , width: width
                                            , offset: offset
                                            , title: $(sample).attr('data-name')
                                            , sampleId: sampleId});
        
        $('#row-' + this.id).append(visualSample.container);
        this.samples.push(visualSample);
    }
    
}

Row.WIDTH_COEF = 5;
Row.PIXEL_PER_SECOND = 100;