$(function () {

    let flag = 0;

    $('.fa-chevron-left').on('click', function () {
        if (flag == 0) {
            $('.card1').removeClass('top').addClass('left');
            $('.card2').removeClass('left').addClass('back');
            $('.card3').removeClass('right').addClass('top');
            $('.card4').removeClass('back').addClass('right');
            flag = 3;
        } else if (flag == 3) {
            $('.card1').removeClass('left').addClass('back');
            $('.card2').removeClass('back').addClass('right');
            $('.card3').removeClass('top').addClass('left');
            $('.card4').removeClass('right').addClass('top');
            flag = 2;
        } else if (flag == 2) {
            $('.card1').removeClass('back').addClass('right');
            $('.card2').removeClass('right').addClass('top');
            $('.card3').removeClass('left').addClass('back');
            $('.card4').removeClass('top').addClass('left');
            flag = 1;
        } else if (flag == 1) {
            $('.card1').removeClass('right').addClass('top');
            $('.card2').removeClass('top').addClass('left');
            $('.card3').removeClass('back').addClass('right');
            $('.card4').removeClass('left').addClass('back');
            flag = 0;
        }
    })

    $('.fa-chevron-right').on('click', function () {
        if (flag == 0) {
            $('.card1').removeClass('top').addClass('right');
            $('.card2').removeClass('left').addClass('top');
            $('.card3').removeClass('right').addClass('back');
            $('.card4').removeClass('back').addClass('left');
            flag = 1;
        } else if (flag == 1) {
            $('.card1').removeClass('right').addClass('back');
            $('.card2').removeClass('top').addClass('right');
            $('.card3').removeClass('back').addClass('left');
            $('.card4').removeClass('left').addClass('top');
            flag = 2;
        } else if (flag == 2) {
            $('.card1').removeClass('back').addClass('left');
            $('.card2').removeClass('right').addClass('back');
            $('.card3').removeClass('left').addClass('top');
            $('.card4').removeClass('top').addClass('right');
            flag = 3;
        } else if (flag == 3) {
            $('.card1').removeClass('left').addClass('top');
            $('.card2').removeClass('back').addClass('left');
            $('.card3').removeClass('top').addClass('right');
            $('.card4').removeClass('right').addClass('back');
            flag = 0;
        }
    })

})//end of function