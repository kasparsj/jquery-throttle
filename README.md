# jquery-throttle
jQuery plugin for requestAnimationFrame based event throttling

## Installation

```bash
bower install jquery-throttle
```

## Usage

Use in the same way as you would use jQuery's .on() and .off():

```javascript
$(window).throttle("resize", function() {
    // your code here
});
$(window).removeThrottle("resize");
```

If you're developing a plugin, check if jquery.throttle is available, and fallback to jQuery.on().

```javascript
if (typeof($(window).throttle) == "function") {
    $(window).throttle("resize", function() {
        // your code here
    });
}
else {
    $(window).on("resize", onResize);
}
```
