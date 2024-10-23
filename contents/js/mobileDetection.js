'use strict';
var avia_is_mobile = !1;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && 'ontouchstart' in document.documentElement) {
    avia_is_mobile = !0;
    document.documentElement.className += ' avia_mobile ';
} else {
    document.documentElement.className += ' avia_desktop ';
}
document.documentElement.className += ' js_active ';

(function() {
    var e = ['-webkit-', '-moz-', '-ms-', ''],
        n = '';
    for (var t in e) {
        if (e[t] + 'transform' in document.documentElement.style) {
            document.documentElement.className += ' avia_transform ';
            n = e[t] + 'transform';
        }
        if (e[t] + 'perspective' in document.documentElement.style) {
            document.documentElement.className += ' avia_transform3d ';
        }
    }
    if (typeof document.getElementsByClassName == 'function' && typeof document.documentElement.getBoundingClientRect == 'function' && avia_is_mobile == !1) {
        if (n && window.innerHeight > 0) {
            setTimeout(function() {
                var e = 0,
                    o = {},
                    a = 0,
                    t = document.getElementsByClassName('av-parallax'),
                    i = window.pageYOffset || document.documentElement.scrollTop;
                for (e = 0; e < t.length; e++) {
                    t[e].style.top = '0px';
                    o = t[e].getBoundingClientRect();
                    a = Math.ceil((window.innerHeight + i - o.top) * 0.3);
                    t[e].style[n] = 'translate(0px, ' + a + 'px)';
                    t[e].style.top = 'auto';
                    t[e].className += ' enabled-parallax ';
                }
            }, 50);
        }
    }
})();
