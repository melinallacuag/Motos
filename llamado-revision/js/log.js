// Avoid 'console' errors in browsers that lack a console.
(function() {var method; var noop = function noop() {}; var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn']; var length = methods.length; var console = (window.console = window.console || {}); while (length--) {method = methods[length]; if (!console[method]) {console[method] = noop; } } }());

//Log Function
window.log = function(){log.history = log.history || []; log.history.push(arguments); arguments.callee = arguments.callee.caller; if(this.console) console.log( Array.prototype.slice.call(arguments) ); };