/**
 * Created by nick on 8/11/15.
 */

$(document).ready(function() {

    /* Introduction header */
    $('#intro-cont').mouseenter(function() {
        $('#intro-pop').fadeIn(400);
    });

    $('#intro-pop').mouseleave(function() {
        $('#intro-pop').fadeOut(400);
    });

    $('h1, #howto-cont, #cond-cont, #ack-cont, #bugs-cont, #blank-cont').mouseenter(function() {
        $('#intro-pop').fadeOut(400);
    });

    /* How-to header */
    $('#howto-cont').mouseenter(function() {
        $('#howto-pop').fadeIn(400);
    });

    $('#howto-pop').mouseleave(function() {
        $('#howto-pop').fadeOut(400);
    });

    $('h1, #intro-cont, #cond-cont, #ack-cont, #bugs-cont, #blank-cont').mouseenter(function() {
        $('#howto-pop').fadeOut(400);
    });

    /* Current conditions header */
    $('#cond-cont').mouseenter(function() {
        $('#cond-pop').fadeIn(400);
    });

    $('#cond-pop').mouseleave(function() {
        $('#cond-pop').fadeOut(400);
    });

    $('h1, #intro-cont, #howto-cont, #ack-cont, #bugs-cont, #blank-cont').mouseenter(function() {
        $('#cond-pop').fadeOut(400);
    });

    /* Acknowledgements header */
    $('#ack-cont').mouseenter(function() {
        $('#ack-pop').fadeIn(400);
    });

    $('#ack-pop').mouseleave(function() {
        $('#ack-pop').fadeOut(400);
    });

    $('h1, #intro-cont, #howto-cont, #cond-cont, #bugs-cont, #blank-cont').mouseenter(function() {
        $('#ack-pop').fadeOut(400);
    });

    /* Bug reports header */
    $('#bugs-cont').mouseenter(function() {
        $('#bugs-pop').fadeIn(400);
    });

    $('#bugs-pop').mouseleave(function() {
        $('#bugs-pop').fadeOut(400);
    });

    $('h1, #intro-cont, #howto-cont, #cond-cont, #ack-cont, #blank-cont').mouseenter(function() {
        $('#bugs-pop').fadeOut(400);
    });

});
