  (function(c) {
            "function" === typeof define && define.amd ? define(["jquery"], c) : "object" === typeof module && module.exports ? module.exports = c(require("jquery")) : c(jQuery)
        })(function(c) {
            var v = {
                    minHeight: 0,
                    elements: [],
                    percentage: !0,
                    userTiming: !1,
                    pixelDepth: !1,
                    nonInteraction: !0,
                    gaGlobal: !1,
                    gtmOverride: !1,
                    trackerName: !1,
                    dataLayer: "dataLayer"
                },
                m = c(window),
                g = [],
                p = !1,
                f = 0,
                n, t, k, h;
            c.scrollDepth = function(a) {
                function u(b, c, d, q) {
                    var l = a.trackerName ? a.trackerName + ".send" : "send";
                    if (h) h({
                        event: "ScrollDistance",
                        eventCategory: "Scroll Depth",
                        eventAction: b,
                        eventLabel: c,
                        eventValue: 1,
                        eventNonInteraction: a.nonInteraction
                    }), a.pixelDepth && 2 < arguments.length && d > f && (f = d, h({
                        event: "ScrollDistance",
                        eventCategory: "Scroll Depth",
                        eventAction: "Pixel Depth",
                        eventLabel: (250 * Math.floor(d / 250)).toString(),
                        eventValue: 1,
                        eventNonInteraction: a.nonInteraction
                    })), a.userTiming && 3 < arguments.length && h({
                        event: "ScrollTiming",
                        eventCategory: "Scroll Depth",
                        eventAction: b,
                        eventLabel: c,
                        eventTiming: q
                    });
                    else {
                        if (n && (window[k](l, "event", "Scroll Depth", b, c, 1, {
                                    nonInteraction: a.nonInteraction
                                }),
                                a.pixelDepth && 2 < arguments.length && d > f && (f = d, window[k](l, "event", "Scroll Depth", "Pixel Depth", (250 * Math.floor(d / 250)).toString(), 1, {
                                    nonInteraction: a.nonInteraction
                                })), a.userTiming && 3 < arguments.length)) window[k](l, "timing", "Scroll Depth", b, q, c);
                        t && (_gaq.push(["_trackEvent", "Scroll Depth", b, c, 1, a.nonInteraction]), a.pixelDepth && 2 < arguments.length && d > f && (f = d, _gaq.push(["_trackEvent", "Scroll Depth", "Pixel Depth", (250 * Math.floor(d / 250)).toString(), 1, a.nonInteraction])), a.userTiming && 3 < arguments.length &&
                            _gaq.push(["_trackTiming", "Scroll Depth", b, q, c, 100]))
                    }
                }

                function w(a, e, d) {
                    c.each(a, function(a, b) {
                        -1 === c.inArray(a, g) && e >= b && (u("Percentage", a, e, d), g.push(a))
                    })
                }

                function x(a, e, d) {
                    c.each(a, function(a, b) {
                        -1 === c.inArray(b, g) && c(b).length && e >= c(b).offset().top && (u("Elements", b, e, d), g.push(b))
                    })
                }

                function y(a, c) {
                    var b, e, l, g = null,
                        f = 0,
                        k = function() {
                            f = new Date;
                            g = null;
                            l = a.apply(b, e)
                        };
                    return function() {
                        var d = new Date;
                        f || (f = d);
                        var h = c - (d - f);
                        b = this;
                        e = arguments;
                        0 >= h ? (clearTimeout(g), g = null, f = d, l = a.apply(b, e)) : g ||
                            (g = setTimeout(k, h));
                        return l
                    }
                }

                function r() {
                    p = !0;
                    m.on("scroll.scrollDepth", y(function() {
                        var b = c(document).height(),
                            e = window.innerHeight ? window.innerHeight : m.height();
                        e = m.scrollTop() + e;
                        b = {
                            "25%": parseInt(.25 * b, 10),
                            "50%": parseInt(.5 * b, 10),
                            "75%": parseInt(.75 * b, 10),
                            "100%": b - 5
                        };
                        var d = +new Date - z;
                        g.length >= a.elements.length + (a.percentage ? 4 : 0) ? (m.off("scroll.scrollDepth"), p = !1) : (a.elements && x(a.elements, e, d), a.percentage && w(b, e, d))
                    }, 500))
                }
                var z = +new Date;
                a = c.extend({}, v, a);
                c(document).height() < a.minHeight ||
                    (a.gaGlobal ? (n = !0, k = a.gaGlobal) : "function" === typeof ga ? (n = !0, k = "ga") : "function" === typeof __gaTracker && (n = !0, k = "__gaTracker"), "undefined" !== typeof _gaq && "function" === typeof _gaq.push && (t = !0), "function" === typeof a.eventHandler ? h = a.eventHandler : "undefined" === typeof window[a.dataLayer] || "function" !== typeof window[a.dataLayer].push || a.gtmOverride || (h = function(b) {
                        window[a.dataLayer].push(b)
                    }), c.scrollDepth.reset = function() {
                        g = [];
                        f = 0;
                        m.off("scroll.scrollDepth");
                        r()
                    }, c.scrollDepth.addElements = function(b) {
                        "undefined" !=
                        typeof b && c.isArray(b) && (c.merge(a.elements, b), p || r())
                    }, c.scrollDepth.removeElements = function(b) {
                        "undefined" != typeof b && c.isArray(b) && c.each(b, function(b, d) {
                            var e = c.inArray(d, a.elements),
                                f = c.inArray(d, g); - 1 != e && a.elements.splice(e, 1); - 1 != f && g.splice(f, 1)
                        })
                    }, r())
            };
            return c.scrollDepth
        });