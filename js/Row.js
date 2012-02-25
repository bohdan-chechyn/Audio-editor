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
        this.container = '<div class="row" id="row-' + this.id + '"></div>';  
    },
    
    redraw: function() {
        
    },
    
    addSample: function(sample, offset) {
        l(sample)
        var width = Math.round(sample.duration * Row.WIDTH_COEF);
        offset = offset * Row.PIXEL_PER_SECOND;
        var container = '<canvas class="sample" style="width: ' + width + 'px; left: ' + offset + 'px"></canvas>';
        container = $(container);
        container.data('sample', sample);
        $('#row-' + this.id).append(container);
        
        this.samples.push(container);
    }
    
}

Row.WIDTH_COEF = 3;
Row.PIXEL_PER_SECOND = 3;