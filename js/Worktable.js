var Worktable = function() {
    this.init();
}

Worktable.prototype = {
    rows: [],
    container: null,
    init: function() {
        this.container = $('.worktable .rows');
        $('.controls .addRow').bind('click', Util.bind(this.createRow, this));
    },
    
    addSample: function() {
        
    },
    
    getRows: function() {
        
    },
    
    createRow: function(id) {
        var row = new Row(id);
        this.rows.push(row);
        
        $(this.container).append(row.container);
    },
    
    getRows: function() {
        
    }
    
    
}