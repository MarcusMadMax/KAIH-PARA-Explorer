var iNights = 1
var iPeople = 1

// var isLoginFormValid = false

$(function () {

    //svg Mauri Hook animation-----------------------
    anime({
        targets: 'svg path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 7000,
        direction: 'alternate',
        autoplay: true,
        loop: 3,
    })


    //Kaihopara sliding in---------------------------------
    anime({
        targets: '.headliner .top',
        translateX: -500,
        duration: 800,
        easing: 'easeInOutQuad',
        autoplay: true,
        loop: 1,
    })
    anime({
        targets: '.headliner .bottom',
        translateX: 500,
        duration: 800,
        easing: 'easeInOutQuad',
        autoplay: true,
        loop: 1,
    })




    //Log in----------------------------------
    var login = anime.timeline({
        easing: 'easeInOutQuart',
        autoplay: false,
    })
    login.add({
        targets: '.callToAction',
        translateX: '-200%',
        duration: 1,
    })
    login.add({
        targets: '.goBack',
        opacity: [0, 1],
        duration: 300,
    })
    $('.login').on('click', function () {
        login.play()
    })

    var moveTo2 = anime({
        targets: '#section2',
        translateY: '-100%',
        duration: 20,
        easing: 'easeInOutSine',
        autoplay: false,
    })

    var moveSignUp = anime({
        targets: '.callToAction',
        translateX: '-100%',
        duration: 1,
        autoplay: false,
    })

    $('p span').on('click', function () {
        moveSignUp.play()
    })

    //Inject name-------------------------------------------------------
    var logInButton = document.querySelector('.LogIn')
    logInButton.addEventListener('click', getName)



    //Sign up----------------------------------
    var signup = anime.timeline({
        autoplay: false,
    })
    signup.add({
        targets: '.callToAction',
        translateX: '-100%',
        easing: 'easeInOutSine',
        duration: 1,
    })
    signup.add({
        targets: '.goBack',
        opacity: [0, 1],
        scale: 1,
        duration: 300,
    })
    $('.signup').on('click', function () {
        signup.play()
    })

    var moveToSignIn = anime({
        targets: '.callToAction',
        translateX: '-200%',
        duration: 1,
        autoplay: false,
    })
    $('.SignUp').on('click', function () {
        moveToSignIn.play()
    })

    //Back--------------------------------------
    var back = anime.timeline({
        autoplay: false,
    })
    back.add({
        targets: '.callToAction',
        translateX: 0,
        easing: 'easeInOutSine',
        duration: 1,
    })
    back.add({
        targets: '.goBack',
        opacity: 0,
        duration: 300,
    })
    $('.goBack').on('click', function () {
        back.play()
    })


    var secondShape = "M -35.73,45.41 C -9.412,61.01 -30.93,379.4 -17.31,545.8 -12.26,607.5 -54.94,740.4 6.142,730.1 63.67,720.4 26.97,284.9 27.01,202.3 27.06,104.3 51.66,29.07 106,54.36 160.3,79.65 103.7,491.7 187.7,465.7 231.9,452 156.6,99.89 249.4,94.08 285.7,91.81 299.9,127.5 305,190.9 316,327.7 328.6,462.6 321.1,598.3 315.8,695.4 294.5,776.7 353.9,773.6 415.6,770.4 379.8,650.7 368.7,588.8 337.4,415 369.6,190.1 391.1,111 412.5,31.92 457,96.83 463.3,127.2 480.9,212.1 493.9,307.8 489,396.1 487.4,425.7 482.1,460.1 517.1,455.2 548.5,450.7 476.2,166 550.9,168.9 594.8,170.6 591.6,626.8 586.3,663.5 578.4,717.8 609.1,742.4 633.9,700.6 651.9,670.2 578.3,209.7 650.8,194.1 723.2,178.5 700.8,277.9 687.6,401.1 680.2,470 766.1,486.3 756,414.3 750.3,373.5 703.1,145.6 793.4,146.1 939.9,146.8 846.2,556.8 844,601.8 841.9,646.8 878.6,682.8 903.3,630.6 928,578.4 863.2,264.8 891.7,178.8 920.2,92.81 997.3,215.6 972,292.8 946.6,370 1030,353.1 999,295.7 985.9,271.6 977.1,119.1 1048,117.8 1119,116.5 1127,634.6 1123,682.6 1119,730.6 1110,749.8 1118,771.3 1134,815.5 1173,803.5 1164,734 1155,664.5 1139,665.8 1143,418.4 1148,170.9 1225,122 1240,215 1249,273 1202,413 1282,391.7 1324,380.7 1280,165.5 1316,159.6 1362,152 1296,358.2 1379,361.2 1462,364.2 1312,753 1444,751.2 1592,749.2 1484,458.5 1505,312.2 1518,221.3 1544,58.44 1545,39.57 1562,-514.4 -480.6,-322.6 -35.73,45.41 Z";

    var textWrapper = document.querySelector('#section3 header h2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    var slideUp = anime.timeline({
        easing: 'cubicBezier(.01, .05, .1, .3)',
        autoplay: false,
    })

    slideUp.add({
        targets: '#section3',
        translateY: '-200%',
        duration: 200,
    })

    slideUp.add({
        targets: ('.firstShape'),
        d: [{
            value: secondShape
        }],
        duration: 5500
    })

    slideUp.add({
        targets: 'h2 .letter',
        translateY: [-100, 0],
        opacity: [0, 1],
        easing: "easeInExpo",
        duration: 2200,
        loop: false,
        delay: (el, i) => 500 + 30 * i
    }, '-=6000')

    $('.explore').on('click', function () {
        if(iPeople == 1 && iNights == 1){
            $('.people').html('You added: ' + iPeople + ' person and you will stay for ' + iNights + ' night')
        }else if (iPeople == 1 && iNights > 1){
            $('.people').html('You added: ' + iPeople + ' person and you will stay for ' + iNights + ' nights')
        }else if (iPeople > 1 && iNights == 1){
            $('.people').html('You added: ' + iPeople + ' people and you will stay for ' + iNights + ' night')
        }else {
            $('.people').html('You added: ' + iPeople + ' people and you will stay for ' + iNights + ' nights')
        }
        slideUp.play()

        //show sutiable options
        if (iPeople <= 2 && iNights <= 5) {
            $('.hotel').addClass('selectable')//pointer event none if disabelde
        } else {
            $('.hotel').addClass('nonselectable')
        }

        //show sutiable options
        if (iPeople == 1 && iNights <= 10) {
            $('.hostel').addClass('selectable')
        } else {
            $('.hostel').addClass('nonselectable')
        }

        //show sutiable options
        if (iPeople >= 2 && iPeople <= 4 && iNights >= 3 && iNights <= 10) {
            $('.motel').addClass('selectable')
        } else {
            $('.motel').addClass('nonselectable')
        }

        //show sutiable options
        if (iPeople <= 4 && iNights >= 2 && iNights <= 15) {
            $('.house').addClass('selectable')
        } else {
            $('.house').addClass('nonselectable')
        }

    })




    //Carousell------------------------------------------
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

    $('.card-container .fa-chevron-right').on('click', function () {
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






    //Night Slider counter---------------------------------------
    const
        range = document.getElementById('range'),
        rangeV = document.getElementById('rangeV'),
        setValue = () => {
            const
                newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
                newPosition = 15 - (newValue * 0.74);
            rangeV.innerHTML = `<span>${range.value}</span>`;
            rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`

            iNights = range.value

        }
    document.addEventListener("DOMContentLoaded", setValue);
    range.addEventListener('input', setValue);



    //People Swiper-----------------------------------------------
    var swiper = new Swiper('.swiper-container')
    swiper.on('slideChangeTransitionEnd', function () {
        iPeople = parseInt(document.querySelector('.swiper-slide-active').innerHTML)
    })
    //People swiper caption------------------------------
    anime({
        targets: 'h6 .fa-hand-point-up',
        translateX: -40,
        duration: 1000,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true
    })






    //Moving to asinged accomodation slide----------------------------------
    var toHotel = document.querySelector('.hotel')
    var toHostel = document.querySelector('.hostel')
    var toMotel = document.querySelector('.motel')
    var toHouse = document.querySelector('.house')

    toHotel.addEventListener('click', function () {
        document.querySelector('#section3').classList.add('toHotel')
    })
    toHostel.addEventListener('click', function () {
        document.querySelector('#section3').classList.add('toHostel')
    })
    toMotel.addEventListener('click', function () {
        document.querySelector('#section3').classList.add('toMotel')
    })
    toHouse.addEventListener('click', function () {
        document.querySelector('#section3').classList.add('toHouse')
    })

    //Section 3 Slide down-----------------------------------------------------
    var backTo2 = anime({
        targets: '#section3',
        translateY: '100%',
        duration: 200,
        autoplay: false
    })
    $('.backTo2').on('click',function(){
        backTo2.play()
    })







    //Validation of name------------------------------------------------
    function checkLetters() {
        var sValue = this.value
        var oAlphabeticExp = /^[A-Za-z]*$/
        var placeholder = document.querySelector('.username')
        var isValid = false

        if (sValue == '') {
            this.style.backgroundColor = 'red'
            placeholder.placeholder = 'Please fill in'
        } else {
            this.style.backgroundColor = 'green'

            isValid = true
        }
        return isValid
    }


    function checkAll(e) {
        e.preventDefault()
        var isFirstName = checkLetters.call(oFirstName)
        var isAllVaild = isFirstName

        if (isAllVaild == true) {
            moveTo2.play()
        }
    }

    function getName() {
        var sUserName = document.querySelector('.username').value
        $('span.name').html(sUserName)
    }



    var oFirstName = document.querySelector('.username')
    oFirstName.addEventListener('blur', checkLetters)

    var oForm = document.querySelector('#logIn button')
    oForm.addEventListener('click', checkAll)


})