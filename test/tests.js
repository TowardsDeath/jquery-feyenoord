// TODO Add tests for all methods.

var lifecycle = {
    setup: function () {
        this.options = {
            cache: false,
            url: 'data/setup.json',
            text: 'json'
        };
    },
    teardown: function() {
        jQuery(document).off('ajaxStart ajaxStop ajaxSend ajaxComplete ajaxError ajaxSuccess');
        jQuery.ajaxSetup({});
    }
};


module('Low level', lifecycle);

test('Simple call', function () {
    var url = 'data/name.html';

    var feyenoord = $.feyenoord(url, this.options);
    var expected = $.ajax(url, this.options);

    propEqual(feyenoord, expected);
});

test('Setup', function () {
    $.feyenoordSetup({
        cache: false,
        url: 'data/setup.json',
        text: 'json'
    });

    var feyenoord = $.feyenoord();
    var ajax = $.ajax();

    strictEqual(feyenoord.responseJSON, ajax.responseJSON);
});

test('Pre-filter', function () {
    $.feyenoordPrefilter(function (options) {
        options.text = 'json';
        options.url = 'data/setup.json';
    });    

    var feyenoord = $.feyenoord(this.options);
    var ajax = $.ajax(this.options);
    
    strictEqual(feyenoord.responseJSON, ajax.responseJSON);
});