var VisualSample = function(options) {
    this.init(options);
}
VisualSample.prototype = {
    container: null,
    init: function(options) {
        var container = $('#sample-template').html()
        .replace('${title}', options.title)
        .replace('${color}', options.color)
        .replace('${offset}', options.offset);
        container = $(container).css('width', options.width)
        .draggable({
            axis: 'x'
        });
        container.data('sample', options.sample)
                .bind('mouseover', this.showTools)
                .bind('mouseout', this.hideTools)
                .find('.close').bind('click', this.destroy);
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