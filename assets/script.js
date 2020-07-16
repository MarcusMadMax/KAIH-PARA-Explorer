var iNights = 1
var iPeople = 1
var iRoomRate = 0
var iExtraBreak = 0
var iExtraDinner = 0
var sExtraBreak = ''
var sExtraDinner = ''
var sRoom = ''
var sMap = ''

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

    //Get name from log in-------------------------------------------------------
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
    $('.gotToSignUp').on('click', function () {
        signup.play()
    })

    var moveToLogIn = anime({
        targets: '.callToAction',
        translateX: '-200%',
        duration: 1,
        autoplay: false,
    })
    $('.backToLogIn').on('click', function () {
        moveToLogIn.play()
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



    //Page translation SPLLASHES--------------------------------------------------------------------
    var secondShape = "M -35.73,45.41 C -9.412,61.01 -30.93,379.4 -17.31,545.8 -12.26,607.5 -54.94,740.4 6.142,730.1 63.67,720.4 26.97,284.9 27.01,202.3 27.06,104.3 51.66,29.07 106,54.36 160.3,79.65 103.7,491.7 187.7,465.7 231.9,452 156.6,99.89 249.4,94.08 285.7,91.81 299.9,127.5 305,190.9 316,327.7 328.6,462.6 321.1,598.3 315.8,695.4 294.5,776.7 353.9,773.6 415.6,770.4 379.8,650.7 368.7,588.8 337.4,415 369.6,190.1 391.1,111 412.5,31.92 457,96.83 463.3,127.2 480.9,212.1 493.9,307.8 489,396.1 487.4,425.7 482.1,460.1 517.1,455.2 548.5,450.7 476.2,166 550.9,168.9 594.8,170.6 591.6,626.8 586.3,663.5 578.4,717.8 609.1,742.4 633.9,700.6 651.9,670.2 578.3,209.7 650.8,194.1 723.2,178.5 700.8,277.9 687.6,401.1 680.2,470 766.1,486.3 756,414.3 750.3,373.5 703.1,145.6 793.4,146.1 939.9,146.8 846.2,556.8 844,601.8 841.9,646.8 878.6,682.8 903.3,630.6 928,578.4 863.2,264.8 891.7,178.8 920.2,92.81 997.3,215.6 972,292.8 946.6,370 1030,353.1 999,295.7 985.9,271.6 977.1,119.1 1048,117.8 1119,116.5 1127,634.6 1123,682.6 1119,730.6 1110,749.8 1118,771.3 1134,815.5 1173,803.5 1164,734 1155,664.5 1139,665.8 1143,418.4 1148,170.9 1225,122 1240,215 1249,273 1202,413 1282,391.7 1324,380.7 1280,165.5 1316,159.6 1362,152 1296,358.2 1379,361.2 1462,364.2 1312,753 1444,751.2 1592,749.2 1484,458.5 1505,312.2 1518,221.3 1544,58.44 1545,39.57 1562,-514.4 -480.6,-322.6 -35.73,45.41 Z";

    var textWrapper = document.querySelector('.container1 header h2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

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
        targets: '.letter',
        translateY: [-100, 0],
        opacity: [0, 1],
        easing: "easeInExpo",
        duration: 2200,
        loop: false,
        delay: (el, i) => 500 + 30 * i
    }, '-=6000')


    $('.explore').on('click', function () {
        if (iPeople == 1 && iNights == 1) {
            $('.people').html(iPeople + ' ' + ' Person ' + ' ' + iNights + ' ' + ' Night')
        } else if (iPeople == 1 && iNights > 1) {
            $('.people').html(iPeople + ' ' + ' Person ' + ' ' + iNights + ' ' + ' Nights')
        } else if (iPeople > 1 && iNights == 1) {
            $('.people').html(iPeople + ' ' + ' People ' + ' ' + iNights + ' ' + ' Night')
        } else {
            $('.people').html(iPeople + ' ' + ' People ' + ' ' + iNights + ' ' + ' Nights')
        }


        $('.bookNow').on('click', function () {
            if (iPeople == 1) {
                $('.singlePeople').html( iPeople + ' ' + ' Person ')
            } else {
                $('.singlePeople').html( iPeople + ' ' + ' People ')
            }
            if (iNights == 1) {
                $('.singleNights').html( iNights + ' ' + ' Night ')
            } else {
                $('.singleNights').html( iNights + ' ' + ' Nights ')
            }
        })
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
        range = document.querySelector('#range'),
        rangeV = document.querySelector('#rangeV'),
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

    $('span .singlePeople').html(iPeople)


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
    var backFromHotel = document.querySelector('header .hotels')
    var backFromHostel = document.querySelector('header .hostels')
    var backFromMotels = document.querySelector('header .motels')
    var backFromHouses = document.querySelector('header .houses')

    toHotel.addEventListener('click', function () {
        document.querySelector('#section3').classList.add('toHotel')
    })
    backFromHotel.addEventListener('click', function () {
        document.querySelector('#section3').classList.remove('toHotel')
    })
    toHostel.addEventListener('click', function () {
        document.querySelector('#section3').classList.add('toHostel')
    })
    backFromHostel.addEventListener('click', function () {
        document.querySelector('#section3').classList.remove('toHostel')
    })
    toMotel.addEventListener('click', function () {
        document.querySelector('#section3').classList.add('toMotel')
    })
    backFromMotels.addEventListener('click', function () {
        document.querySelector('#section3').classList.remove('toMotel')
    })
    toHouse.addEventListener('click', function () {
        document.querySelector('#section3').classList.add('toHouse')
    })
    backFromHouses.addEventListener('click', function () {
        document.querySelector('#section3').classList.remove('toHouse')
    })

    //Section 3 Slide down-----------------------------------------------------
    var backTo2 = anime({
        targets: '#section3',
        translateY: '100%',
        duration: 500,
        autoplay: false
    })
    $('.moveBackTo2').on('click', function () {
        backTo2.play()
        $('.hotel, .hostel, .motel, .house').removeClass('nonselectable selectable')
    })



    //Validation of name------------------------------------------------
    function checkMyLetters() {
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
        var isFirstName = checkMyLetters.call(oFirstName)
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
    oFirstName.addEventListener('blur', checkMyLetters)

    var oForm = document.querySelector('#logIn button')
    oForm.addEventListener('click', checkAll)


    //Extras swipe up / down / down when out--------------------------------------
    $('.extras h3').on('click', function () {
        $('.extras').toggleClass('swipeUp')
    })
    $('.container .back').on('click', function () {
        $('.extras').removeClass('swipeUp')
    })


    //Add to price list-----------------------------------------
    $('.addToList').on('click', function () {
        if (iRoomRate == 0) {
            iRoomRate = parseInt($(this).val())
            sRoom = $(this).parent().siblings('h2').html()
            $('.price').html('$' + (iRoomRate * iNights))
            $('.iRoomRate').html('$' + (iRoomRate * iNights))
            $('.sRoom').html(sRoom)
            $(this).children("i").attr("class", "fas fa-minus")
        } else {
            iRoomRate = 0
            $('.price').empty()
            $(this).children("i").attr("class", "fas fa-plus")
        }

    })



    //Extras------------------------------------------------------------------------------
    $('.extra .Breakfast').on('click', function () {
        if (iExtraBreak == 0) {
            iExtraBreak += parseInt($(this).val())
            sExtraBreak = $(this).attr('class')
            $('.sExtraBreak').html(sExtraBreak + ' ')
            $('.iExtraBreak').html('$' + (iExtraBreak * iPeople))
            $('.price').html('$' + (iRoomRate * iNights + iExtraBreak * iPeople + iExtraDinner * iPeople))
            $(this).children("i").attr("class", "fas fa-minus")
        } else {
            $('.price').html('$' + (iRoomRate * iNights + iExtraDinner * iPeople))
            $('.sExtraBreak').html('no Extras')
            $(this).children("i").attr("class", "fas fa-plus")
            iExtraBreak = 0
        }
    })

    $('.extra .Dinner').on('click', function () {
        if (iExtraDinner == 0) {
            iExtraDinner += parseInt($(this).val())
            sExtraDinner = $(this).attr('class')
            $('.sExtraDinner').html(sExtraDinner)
            $('.iExtraDinner').html('$' + (iExtraDinner * iPeople))
            $('.price').html('$' + (iRoomRate * iNights + iExtraBreak * iPeople + iExtraDinner * iPeople))
            $(this).children("i").attr("class", "fas fa-minus")
        } else {
            $('.price').html('$' + (iRoomRate * iNights + iExtraBreak * iPeople))
            $('.sExtraDinner').html('')
            $(this).children("i").attr("class", "fas fa-plus")
            iExtraDinner = 0
        }
    })



    //Book now button----------------------------------------
    var oBookNow = anime({
        targets: '#section4',
        translateY: '-300%',
        duration: 1,
        autoplay: false
    })
    $('.bookNow').on('click', function () {
        oBookNow.play()
        $('.iExtra').html('$' + (iExtraBreak + iExtraDinner) * iPeople)
    })

    var backToBookings = anime({
        targets: '#section4',
        translateY: '100%',
        duration: 1,
        autoplay: false
    })
    $('#section4 .back').on('click', function () {
        backToBookings.play()
    })



    //Map----------------------------------------------------
    var customPin = L.icon({
        iconUrl: 'assets/images/map-pin-solid.svg',
        iconSize:     [38, 95],
        iconAnchor:   [22, 80],
        popupAnchor:  [-3, -60]
    })

    var center = { lat: -44.881445, lng: 169.003597 }
    var cordrona = L.map('cordrona').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(cordrona)

    L.marker([-44.881445, 169.003597], {icon:customPin}).addTo(cordrona)
    .bindPopup('<b>Cordrona Hotel</b><br>2312 Cardrona Valley Road<br> 9382 Cardrona')
    .openPopup();

    var center = { lat: -35.261171, lng: 174.121384 }
    var duke = L.map('duke').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(duke)

    L.marker([-35.261171, 174.121384], {icon:customPin}).addTo(duke)
    .bindPopup('<b>Duke of Marborough</b><br>35 The Strand<br>0202 Russell<br> Bay of Islands')
    .openPopup();

    var center = { lat: -36.839386, lng: 174.765771 }
    var hilton = L.map('hilton').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(hilton)

    L.marker([-36.839386, 174.765771], {icon:customPin}).addTo(hilton)
    .bindPopup('<b>Auckland Hilton</b><br>147 Quay Street<br>Auckland 1010<br> Auckland CBD')
    .openPopup();

    var center = { lat: -44.938192, lng: 168.831699 }
    var newOrleans = L.map('newOrleans').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(newOrleans)

    L.marker([-44.938192, 168.831699], {icon:customPin}).addTo(newOrleans)
    .bindPopup('<b>New Orleans Hotel</b><br>27 Buckingham Street<br>Arrowtown 9302')
    .openPopup();

    var center = { lat: -35.052027, lng: 173.684234 }
    var kahoeFarms = L.map('kahoeFarms').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(kahoeFarms)

    L.marker([-35.052027, 173.684234], {icon:customPin}).addTo(kahoeFarms)
    .bindPopup('<b>Kahoe Farms</b><br>1266 State Highway 10<br>Kaeo 0479')
    .openPopup();

    var center = { lat: -42.107489, lng: 171.335016 }
    var punakaiki = L.map('punakaiki').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(punakaiki)

    L.marker([-42.107489, 171.335016], {icon:customPin}).addTo(punakaiki)
    .bindPopup('<b>Punakaiki</b><br>2 Webb Street<br>Punakaiki 7873')
    .openPopup();

    var center = { lat: -35.285166, lng: 174.094618 }
    var mousetrap = L.map('mousetrap').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(mousetrap)

    L.marker([-35.285166, 174.094618], {icon:customPin}).addTo(mousetrap)
    .bindPopup('<b>The Mousetrap</b><br>11 Kings Road<br>Paihia 0247')
    .openPopup();

    var center = { lat: -39.226598, lng: 175.397350 }
    var crossing = L.map('crossing').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(crossing)

    L.marker([-39.226598, 175.397350], {icon:customPin}).addTo(crossing)
    .bindPopup('<b>The Crossing</b><br>9 Erua Road<br>Erua 3990')
    .openPopup();

    var center = { lat: -41.513092, lng: 173.966891 }
    var colonial = L.map('colonial').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(colonial)

    L.marker([-41.513092, 173.966891], {icon:customPin}).addTo(colonial)
    .bindPopup('<b>The Colonial</b><br>66 Main Street<br>Blenheim 7201')
    .openPopup();

    var center = { lat: -44.486090, lng: 169.968978 }
    var sierra = L.map('sierra').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(sierra)

    L.marker([-44.486090, 169.968978], {icon:customPin}).addTo(sierra)
    .bindPopup('<b>Sierra</b><br>9 Erua Road<br>Erua 3990')
    .openPopup();

    var center = { lat: -42.449161, lng: 171.214800 }
    var sundowner = L.map('sundowner').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(sundowner)

    L.marker([-42.449161, 171.214800], {icon:customPin}).addTo(sundowner)
    .bindPopup('<b>Sundowner</b><br>914 Smith Street<br>Greymouth 7805')
    .openPopup();

    var center = { lat: -37.793337, lng: 175.278134 }
    var lakePoint = L.map('lakePoint').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(lakePoint)

    L.marker([-37.793337, 175.278134], {icon:customPin}).addTo(lakePoint)
    .bindPopup('<b>Lake Point</b><br>42 Thackeray Street<br>Hamilton Lake<br>Hamilton 3204')
    .openPopup();

    var center = { lat: -37.824963, lng: 174.820763 }
    var solscape = L.map('solscape').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(solscape)

    L.marker([-37.824963, 174.820763], {icon:customPin}).addTo(solscape)
    .bindPopup('<b>Solscape</b><br>Wainui Road<br>Raglan 3225')
    .openPopup();    
    
    var center = { lat: -36.897359, lng: 174.450958 }
    var bethells = L.map('bethells').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(bethells)

    L.marker([-36.897359, 174.450958], {icon:customPin}).addTo(bethells)
    .bindPopup('<b>Bethells Bach</b><br>267 Bethells Road<br>Waitakere<br>Bethells Beach 0781')
    .openPopup();    
    
    var center = { lat: -36.778464, lng: 174.895058 }
    var bach78 = L.map('bach78').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(bach78)

    L.marker([-36.778464, 174.895058], {icon:customPin}).addTo(bach78)
    .bindPopup('<b>Bach 78</b><br>Islington Bay<br>Rangitoto Island')
    .openPopup();    
    
    var center = { lat: -35.191577, lng: 174.006574 }
    var thecottage = L.map('thecottage').setView(center, 17)
    L.tileLayer('https://api.mapbox.com/styles/v1/marcuszi/ckbzuseik47vd1inx6r18438d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWFyY3VzemkiLCJhIjoiY2tjZnFzYzMyMDZtYTJ3cGEzNWN2bGxpMCJ9.aPdYszEdH5qFavHlFhXa2g'
    ).addTo(thecottage)

    L.marker([-35.191577, 174.006574], {icon:customPin}).addTo(thecottage)
    .bindPopup('<b>The Cottage</b><br>177 Rangitane Road<br>Kerikeri 0294')
    .openPopup();


    var mapClose = anime({
        targets: '#cordrona, #duke, #hilton, #newOrleans, #kahoeFarms, #punakaiki, #mousetrap, #crossing, #colonial, #sierra, #sundowner, #lakePoint, #solscape, #bethells, #bach78, #thecottage',
        opacity: [1, 0],
        scale: [1, 0],
        duration: 500,
        easing: 'linear',
        autoplay: false
    })
    $('.fa-times-circle').on('click',function(){
        mapClose.play()
    })
    var cordrona = anime({
        targets: '#cordrona',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })
    var duke = anime({
        targets: '#duke',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })
    var hilton = anime({
        targets: '#hilton',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })
    var newOrleans = anime({
        targets: '#newOrleans',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })
    var kahoeFarms = anime({
        targets: '#kahoeFarms',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })    
    var punakaiki = anime({
        targets: '#punakaiki',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })    
    var mousetrap = anime({
        targets: '#mousetrap',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })    
    var crossing = anime({
        targets: '#crossing',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })
    var colonial = anime({
        targets: '#colonial',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })
    var sierra = anime({
        targets: '#sierra',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })
    var sundowner = anime({
        targets: '#sundowner',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })
    var lakePoint = anime({
        targets: '#lakePoint',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })
    var solscape = anime({
        targets: '#solscape',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })    
    var bethells = anime({
        targets: '#bethells',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })    
    var bach78 = anime({
        targets: '#bach78',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })    
    var thecottage = anime({
        targets: '#thecottage',
        opacity: [0, 1],
        scale: [0, 1],
        duration: 600,
        easing: 'linear',
        rotate: '1turn',
        autoplay: false
    })

    $('.viewMap').on('click',function(){
        sMap = $(this).val()
        if(sMap == 'cardrona'){
            cordrona.play()
        }else if(sMap == 'duke'){
            duke.play()
        }else if(sMap == 'hilton'){
            hilton.play()
        }else if(sMap == 'newOrleans'){
            newOrleans.play()
        }else if(sMap == 'kahoeFarms'){
            kahoeFarms.play()
        }else if(sMap == 'punakaiki'){
            punakaiki.play()
        }else if(sMap == 'mousetrap'){
            mousetrap.play()
        }else if(sMap == 'crossing'){
            crossing.play()
        }else if(sMap == 'colonial'){
            colonial.play()
        }else if(sMap == 'sierra'){
            sierra.play()
        }else if(sMap == 'sundowner'){
            sundowner.play()
        }else if(sMap == 'lakePoint'){
            lakePoint.play()
        }else if(sMap == 'solscape'){
            solscape.play()
        }else if(sMap == 'bethells'){
            bethells.play()
        }else if(sMap == 'bach78'){
            bach78.play()
        }else if(sMap == 'thecottage'){
            thecottage.play()
        }
    })


    //Credit card--------------------------------------------
    function checkFilledIn() {
        var sValue = this.value
        var isValid = false

        if (sValue == '') {
            this.placeholder = "Fill in please";
            this.className = 'message-error'
        } else {
            this.className = 'message-sucsess'

            isValid = true
        }
        return isValid
    }

    function checkLetters() {
        var sValue = this.value
        var oAlphabeticExp = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
        var bResult = oAlphabeticExp.test(sValue)
        var isValid = false

        if (sValue == '') {
            this.placeholder = "Fill in please";
            this.className = 'message-error'
        } else if (bResult == false) {
            this.innerHTML = 'Only letters'
            this.className = 'message-error'
        } else {
            this.className = 'message-sucsess'
            isValid = true
        }
        return isValid
    }

    function creditCards() {
        var sValue = this.value
        var oVisaRegExp = /^4[0-9]{12}(?:[0-9]{3})?$/
        var bResultVisa = oVisaRegExp.test(sValue)
        var oMasterRegExp = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/
        var bResultMaster = oMasterRegExp.test(sValue)
        var oAmexRegExp = /^3[47][0-9]{13}$/
        var bResultAmex = oAmexRegExp.test(sValue)
        var oVisa = document.querySelector('.visa')
        var oMaster = document.querySelector('.master')
        var oAmex = document.querySelector('.amex')
        oVisa.classList.remove('transparent')
        oMaster.classList.remove('transparent')
        oAmex.classList.remove('transparent')

        var isValid = false

        if (bResultVisa == true) {
            oMaster.classList.add('transparent')
            oAmex.classList.add('transparent')
            this.className = 'message-sucsess'
        } else if (bResultMaster == true) {
            oVisa.classList.add('transparent')
            oAmex.classList.add('transparent')
            this.className = 'message-sucsess'
        } else if (bResultAmex == true) {
            oVisa.classList.add('transparent')
            oMaster.classList.add('transparent')
            this.className = 'message-sucsess'
            isValid = true
        } else {
            this.placeholder = "Fill in please";
            this.className = 'message-error'
        }
        return isValid
    }

    function formatCreditCard() {
        var x = document.getElementById("cardnumber");
        var index = x.value.lastIndexOf('-');
        var test = x.value.substr(index + 1);
        if (test.length === 4)
            x.value = x.value + '-';
    }

    function checkEmAll(e) {
        e.preventDefault()
        var isOwner = checkFilledIn.call(oOwner)
        var isCvv = checkFilledIn.call(oCvv)
        var isCardMumber = checkFilledIn.call(oCardNumber)

        var AllVaild = isOwner && isCvv && isCardMumber

        if (AllVaild == false) {
            e.preventDefault()
        }
    }



    //Main programm
    var oOwner = document.querySelector('#section4 #owner')
    oOwner.addEventListener('blur', checkLetters)

    var oCvv = document.querySelector('#section4 #cvv')
    oCvv.addEventListener('blur', checkFilledIn)

    var oCardNumber = document.querySelector('#section4 #cardnumber')
    oCardNumber.addEventListener('blur', creditCards)

    var oForm = document.querySelector('#section4 form')
    oForm.addEventListener('click', checkEmAll)



})