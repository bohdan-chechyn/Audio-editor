Util = {
    randomString: function() {
    
    },
    bind: function(func, object) {
        var args = Array.prototype.slice.apply(arguments, [2]);
        return function() {
            var newArgs = args.concat(Array.prototype.slice.apply(arguments, [0]));
            return func.apply(object, newArgs);
        };
    }
}