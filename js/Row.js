var Row = function(id) {
   this.init(id);
}

Row.prototype = {
    id: null,
    container: null,
    samples: [],
    
    init: function(id) {
        this.samples = [];
        this.id = id;
        this.containerId = 'row-' + this.id;
        this.container = $('#one-row-template').html()
        .replace('${id}', this.containerId);  
    },
    
    redraw: function() {
        
    },
    
    addSample: function(sample, offset) {
        var sampleId = 'sample-' + this.samples.length;
        var width = Math.round(sample.duration * Row.WIDTH_COEF);
        offset = Math.round(offset);
       
        var visualSample = new VisualSample({ sample: sample
                                            , width: width
                                            , offset: offset
                                            , title: $(sample).attr('data-name')
                                            , color: $(sample).attr('data-color')
                                            , sampleId: sampleId});
        
        $('#row-' + this.id + ' .sample_row').append(visualSample.container);
        this.samples.push(visualSample);
    }
    
}

Row.WIDTH_COEF = 40;
Row.PIXEL_PER_SECOND = 100;