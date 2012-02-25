var VisualSample = function(options) {
    this.init(options);
}
VisualSample.prototype = {
    container: null,
    init: function(options) {
        var container = $('#sample-template').html()
        .replace('${width}', options.width)
        .replace('${offset}', options.offset);
        container = $(container);
        container.id = options.sampleId;
        container.data('sample', options.sample);
        container.bind('mouseover', this.showTools);
        container.bind('mouseout', this.hideTools);
        container.find('.close').bind('click', this.destroy);
        this.container = container;
    },
    
    showTools: function() {
        $(this).find('.tools').show();
    },
    
    hideTools: function() {
        $(this).find('.tools').hide();
    },
    
    destroy: function() {
        $(this).parents('.sample').fadeOut(600, function(){
            $(this).remove();
        });
    }
}