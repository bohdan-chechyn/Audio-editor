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
            this.id = randomString();
        }
        this.containerId = 'row-' + this.id;
        this.container = '<div class="row" id="row-' + this.id + '"></div>';  
    },
    
    redraw: function() {
        
    },
    
    addSample: function(sample, index) {
        if (index == undefined) {
            index = this.samples.length;
        }
        var width = sample.duration * Row.WIDTH_COEF;
        var container = '<div class="sample" style="width: ' + width + 'px"></div>';
        $(this.container).append(container);
        this.samples.push(container);
    }
    
}

Row.WIDTH_COEF = 1;