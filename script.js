$('input').focus(function() {
    $(this).after(`<span class="hint">${$(this).parent().data('hint')}</span>`);
});
$('input').blur(function() {
    $(this).next('.hint').remove();
});
$('input#phone').keydown(function(e) {
    if ((e.which > 57 || e.which < 48) && e.which !== 8)
        return false;
})
$(function() {
    $('.counter').setCountDownTimer({
        time: "00:30:00",
        countDownText:'Оставшееся время: ',
        afterCountText:'Акция закончилась!',
        button: $('#orderBtn'),
    });
})
$(".scrollBtn").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#orderForm").offset().top
    }, 1500);
});