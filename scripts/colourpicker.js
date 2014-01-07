// The next line is used by to stop JSHint moaning...
/*global $:false, $SCRIPT_ROOT: false, devel: true */

function make_hex_2_characters(hex_in) {
    "use strict";
    if (hex_in.length == 1) {
        return "0" + hex_in.toUpperCase();
    }
    else {
        return hex_in.toUpperCase();
    }
}

function get_rgb_value() {
    "use strict";
    var red_value = $('#red-slider').slider("value");
    var green_value = $('#green-slider').slider("value");
    var blue_value = $('#blue-slider').slider("value");
    var red_value_hex = red_value.toString(16);
    var green_value_hex = green_value.toString(16);
    var blue_value_hex = blue_value.toString(16);
    return "#" + make_hex_2_characters(red_value_hex) + make_hex_2_characters(green_value_hex) + make_hex_2_characters(blue_value_hex);
}

function update_swatch_and_rgbvalue() {
    "use strict";
    var full_rgb = get_rgb_value();
    $("#swatch").css({backgroundColor: full_rgb});
    $("#rgb-value").html(full_rgb);
}

$(function() {
    "use strict";
    $(document).ready(function() {
        $('#red-slider, #green-slider, #blue-slider').slider({
            range: true,
            min: "0",
            max: 255,
            slide: update_swatch_and_rgbvalue,
            change: update_swatch_and_rgbvalue
        });
        $('#red-value').html("0")
        $('#green-value').html("0")
        $('#blue-value').html("0")
    });
});

