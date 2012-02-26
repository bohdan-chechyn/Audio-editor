var Worktable = function() {
    this.init();
}

Worktable.prototype = {
    rows: [],
    container: null,
    dragger: null,
    init: function() {
        this.container = $('.worktable .rows');
        $('.controls .addRow').bind('click', Util.bind(this.createRow, this));
    },
    getRow:function(index) {
        if (this.rows[index] != undefined)
            return this.rows[index];
        else 
            return null;
    },   
    getRows: function() {
        return this.rows;
    },
    createRow: function() {
        var row = new Row(this.rows.length);
        this.rows.push(row);
        $(this.container).append(row.container);
        return row;
    },
    
    setFilesDragger: function(fd) {
        this.dragger = fd;
    }
}