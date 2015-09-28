// requires requestAnimationFrame polyfill
;(function($) {

    var callbacks = {};

    $.fn.throttle = function(type, callback) {
        this.each(function() {
            $.throttle(type, callback, this);
        });
    };

    $.fn.removeThrottle = function(type) {
        this.each(function() {
            $.removeThrottle(type, this);
        });
    };

    $.throttle = function(type, callback, elem) {
        var elem = elem || window,
            throttleEvent = type+".throttle";
        registerCallback(type, callback);
        $(elem).off(throttleEvent).on(throttleEvent, function(event) {
            throttleFunc(type, event);
        });
    };

    $.removeThrottle = function(type, elem) {
        var elem = elem || window;
        $(elem).off(type+".throttle");
        unregisterCallback(type);
    };

    function registerCallback(type, callback) {
        if (typeof callbacks[type] == "undefined")
            callbacks[type] = [];
        callbacks[type].push(callback);
    }

    function unregisterCallback(type) {
        delete callbacks[type];
    }

    var running = false;
    function throttleFunc(type, event) {
        if (running) { return; }
        running = true;
        requestAnimationFrame(function() {
            for (var i=0; i<callbacks[type].length; i++) {
                callbacks[type][i](event);
            }
            running = false;
        });
    };

})(jQuery);
