((function ($) {

    /* Wrap low level functions */
    $.extend({

        feyenoord: function (url, options) {
            return $.ajax(url, options);
        },

        feyenoordSetup: function (target, settings) {
            return $.ajaxSetup(target, settings);
        },

        feyenoordPrefilter: function (prefilters) {
            return $.ajaxPrefilter(prefilters);
        },

        feyenoordTransport: function (transport) {
            return $.ajaxTransport(transport);
        }

    });

    /* Wrap global event handlers */
    $.each([
        'Start',
        'Stop',
        'Complete',
        'Error',
        'Success',
        'Send'
    ], function (i, type) {
        jQuery.fn['feyenoord' + type] = function (fn) {
            return this.on( 'ajax' + type, fn);
        };
    });

})(jQuery));