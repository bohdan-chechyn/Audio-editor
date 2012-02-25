Util = {
    randomString: function() {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var string_length = 16;
        var s = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            s += chars.substring(rnum,rnum+1);
        }
        return s; 
    },
    bind: function(func, object) {
        var args = Array.prototype.slice.apply(arguments, [2]);
        return function() {
            var newArgs = args.concat(Array.prototype.slice.apply(arguments, [0]));
            return func.apply(object, newArgs);
        };
    }
}