  //[자바스크립트] 페이지의 높이 반환 ----------------------------------------------
  window.onscroll = function () {
    let scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop);
  }



  //[자바스크립트] 풀페이지 기능 ----------------------------------------------

  $(function () {

    $('.wrap section').mousewheel(function (event, delta) {

      if (delta > 0) { //스크롤을 위로 움직임
        let prev = $(this).prev().offset().top
        $('html, body').stop().animate({
          scrollTop: prev
        }, 500)
      } else if (delta < 0) { //스크롤을 아래로 움직임
        let next = $(this).next().offset().top
        $('html, body').stop().animate({
          scrollTop: next
        }, 500)
      }

    })

  })






  //[제이쿼리] header 메뉴별 페이지 이동 ----------------------------------------------

  // 1. LOGO 클릭
  $(function () {
    const btn = $('.logo')
    btn.click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1000, )
    })
  })


  //2. CONTACT 클릭
  $(function () {
    const btn = $('.contact_btn a')
    btn.click(function () {
      $('html, body').animate({
        scrollTop: $(document).height() - window.innerHeight
      }, 1000)
    })
  })







  //3. 각각 lnb 클릭(easeOutBounce)
  $(function () {
    const btn = $('.lnb ul li')
    const page = $('.page')

    let index = 0
    let top = 0

    btn.click(function () {
      index = $(this).index()
      top = page.eq(index).offset().top

      $('html, body').stop().animate({
        scrollTop: top
      }, 1000, 'easeOutBounce')
    })
  })




  //[바닐라] intro page : 타이핑효과  ---------------------------------------

  const typed = new Typed('.typing', {
    strings: ['&lt;h1&gt; Geonah World &lt;/h1&gt;'],
    typeSpeed: 100,
    loop: true,
  });






  //[제이쿼리] scroll 버튼 -----------------------------------------------


  $('#up').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  })


  $('#down').click(function () {
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 1000);
  })





  //[바닐라] about : 탭메뉴 -----------------------------------------------


  const tapMenu = document.querySelectorAll('.tapmenu');
  const tap = document.querySelectorAll('.tap');
  const text = document.querySelectorAll('.text');

  // 탭메뉴 초기값 css
  tapMenu.forEach((menu, index) => {
    if (menu.classList.contains('active')) {
      text[index].style.top = '-500px';
    }
  });

  tapMenu.forEach((menu, index) => {
    menu.addEventListener('click', () => {
      tapMenu.forEach(menu => {
        menu.classList.remove('active');
        text.forEach(element => {
          element.style.top = '0';
        });
      });
      menu.classList.add('active');
      text[index].style.top = '-500px';

      tap.forEach(content => content.classList.remove('active'));
      tap[index].classList.add('active');
    });
  });


  //[바닐라] about 취미 : swiper  -----------------------------------------------


  var hobbySwiper = new Swiper(".hobby_swiper", {
    observer: true,
    observeParents: true,
    slidesPerView: 3,
    autoplay: {
      delay: 300,
      disableOnInteraction: false
    },
    initialSlide: 0,
    spaceBetween: 20,


  });





  //[바닐라] 프로필 : swiper  -----------------------------------------------

  const swiper = new Swiper('.swiper', {
    // 카드효과
    effect: "cards",

    //잡는효과
    grabCursor: true,

    loop: true,

    //자동 재생 여부, 
    autoplay: {
      delay: 1500,
      // 드래그로 슬라이더 넘겼을 때 autoplay가 멈추지 않는다.
      disableOnInteraction: false
    }




  });


  //스와이퍼 마우스 올리고 내릴때 멈춤/작동
  $('.swiper').hover(function () {
    swiper.autoplay.stop();
  }, function () {
    swiper.autoplay.start();
  });






  //[제이쿼리] skils : 프로그레스바  -----------------------------------------------


  $(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop >= 4965) {
      $("#progress01").animate({
        width: "90%"
      }, 1500);
      $("#progress02").animate({
        width: "90%"
      }, 1500);
      $("#progress03").animate({
        width: "70%"
      }, 1500);
      $("#progress04").animate({
        width: "40%"
      }, 1500);
      $("#progress05").animate({
        width: "70%"
      }, 1500);
      $("#progress06").animate({
        width: "90%"
      }, 1500);
    } else {
      $("#progress01, #progress02, #progress03, #progress04, #progress05, #progress06").stop().css("width", "0%");
    }
  });




  //[제이쿼리] 작품 : 전체 탭메뉴  -----------------------------------------------


  $(document).ready(function () {
    $('.works_tapmenu li span').click(function () {
      let index = $(this).parent().index();
      $('.works_tapmenu li').removeClass('active');
      $(this).parent().addClass('active');

      $('.works_tapmenu li i').removeClass('fas').addClass('far');
      $(this).find('i').removeClass('far').addClass('fas');


      $('.works_taps ul .works_tap').removeClass('active');
      $('.works_taps ul .works_tap').eq(index).addClass('active');


    });
  });



  // ----------------------------------------------------------------------------------------------
  // ----------------------------------- #modal_01  -----------------------------------------------
  // ----------------------------------------------------------------------------------------------


  //[제이쿼리] 작품 : 탭메뉴(1) - #modal_01 켜기    -----------------------------------------------



  const body = document.querySelector('body');

  const url01 = document.querySelector('.tap01 .url_01')
  const modal01 = document.querySelector('.tap01 #modal_01')
  const back01 = document.querySelector('.tap01 #background_01')
  const close01 = document.querySelector('.tap01 #close_01')


  //기획서 버튼 클릭시 모달창 켜짐
  url01.addEventListener('click', function () {
    modal01.style.display = 'block';
    back01.style.display = 'block';
    body.style.overflow = 'hidden';
    swiper01.slideTo(0);
  });


  //기획서 닫기 클릭시 모달창 꺼짐
  close01.addEventListener('click', function () {
    modal01.style.display = 'none';
    back01.style.display = 'none';
    body.style.overflowY = 'auto';

    //나갔다 들어올때 active 첫번재 이동
    $('.tap01 #modal_01 .modal_menu .menu').removeClass('active');
    $('.tap01 #modal_01 .modal_menu .menu').eq(0).addClass('active');
    $('.tap01 #modal_01 .modal_tap').css('display', 'none').removeClass('active');
    $('.tap01 #modal_01 .modal_tap').eq(0).css('display', 'block').addClass('active');
  });





  //[바닐라] 작품 : 탭메뉴(1) - #modal_01 내부 탭메뉴 -----------------------------------------------



  //모달 메뉴를 클릭할때
  $('#modal_01 .modal_menu .menu').click(function () {
    //메뉴전체에서 일단 active를 지우고
    $('#modal_01 .modal_menu .menu').removeClass('active');
    //선택된 메뉴만 active시킨다
    $(this).addClass('active');

    //그리고 선택된 메뉴에 해당하는 인덱스를 찾아서
    let index = $(this).index();


    $('#modal_01 .modal_tap').css('display', 'none').removeClass('active');
    $('#modal_01 .modal_tap').eq(index).css('display', 'block').addClass('active');


    //탭메뉴의 스와이퍼 첫페이지시작
    if (index == 0) {
      swiper01.slideTo(0);
    } else if (index == 1) {
      swiper02.slideTo(0);
    } else if (index == 2) {
      swiper03.slideTo(0);
    } else {
      swiper01.slideTo(0);
    }

  });



  //[바닐라] 작품 : 탭메뉴(1) - #modal_01 swiper  -----------------------------------------------

  var swiper01 = new Swiper(".swiper01", {
    initialSlide: 0,
    grabCursor: true,

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,


  });


  var swiper02 = new Swiper(".swiper02", {
    initialSlide: 0,
    grabCursor: true,

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,

  });


  var swiper03 = new Swiper(".swiper03", {
    initialSlide: 0,
    grabCursor: true,

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,

  });










  // ----------------------------------------------------------------------------------------------
  // ----------------------------------- #modal_02  -----------------------------------------------
  // ----------------------------------------------------------------------------------------------









  //[제이쿼리] 작품 : 탭메뉴(1) - #modal_02 켜기    -----------------------------------------------

  
  const url02 = document.querySelector('.tap01 .url_02')
  const modal02 = document.querySelector('.tap01 #modal_02')
  const back02 = document.querySelector('.tap01 #background_02')
  const close02 = document.querySelector('.tap01 #close_02')




  //코드리뷰 버튼 클릭시 작동되는 탭
  url02.addEventListener('click', function () {
    modal02.style.display = 'block';
    back02.style.display = 'block';
    body.style.overflow = 'hidden';
  });



  //코드리뷰 닫기 클릭시 작동
  close02.addEventListener('click', function () {
    modal02.style.display = 'none';
    back02.style.display = 'none';
    body.style.overflowY = 'auto';

    //나갔다 들어올때 active 첫번재 이동
    $('.tap01 #modal_02 .modal_menu .menu').removeClass('active');
    $('.tap01 #modal_02 .modal_menu .menu').eq(0).addClass('active');
    $('.tap01 #modal_02 .modal_tap').css('display', 'none').removeClass('active');
    $('.tap01 #modal_02 .modal_tap').eq(0).css('display', 'block').addClass('active');
  });





  //[바닐라] 작품 : 탭메뉴(1) - #modal_02 내부 탭메뉴 -----------------------------------------------


  //모달 메뉴를 클릭할때
  $('#modal_02 .modal_menu .menu').click(function () {

    //메뉴전체에서 일단 active를 지우고
    $('#modal_02 .modal_menu .menu').removeClass('active');
    //선택된 메뉴만 active시킨다
    $(this).addClass('active');

    //그리고 선택된 메뉴에 해당하는 인덱스를 찾아서
    let index = $(this).index();


    $('#modal_02 .modal_tap').css('display', 'none').removeClass('active');
    $('#modal_02 .modal_tap').eq(index).css('display', 'block').addClass('active');

  });







  // ----------------------------------------------------------------------------------------------
  // ----------------------------------- #modal_03  -----------------------------------------------
  // ----------------------------------------------------------------------------------------------




  //[제이쿼리] 작품 : 탭메뉴(2) - #modal_03 켜기    -----------------------------------------------



  const url03 = document.querySelector('.tap02 .url_01')
  const modal03 = document.querySelector('.tap02 #modal_03')
  const back03 = document.querySelector('.tap02 #background_03')
  const close03 = document.querySelector('.tap02 #close_03')


  //기획서 버튼 클릭시 작동되는 탭
  url03.addEventListener('click', function () {
    modal03.style.display = 'block';
    back03.style.display = 'block';
    body.style.overflow = 'hidden';
    swiper04.slideTo(0);
  });

  

  //기획서 닫기 클릭시 작동
  close03.addEventListener('click', function () {
    modal03.style.display = 'none';
    back03.style.display = 'none';
    body.style.overflowY = 'auto';

    //나갔다 들어올때 active 첫번재 이동
    $('.tap02 #modal_03 .modal_menu .menu').removeClass('active');
    $('.tap02 #modal_03 .modal_menu .menu').eq(0).addClass('active');
    $('.tap02 #modal_03 .modal_tap').css('display', 'none').removeClass('active');
    $('.tap02 #modal_03 .modal_tap').eq(0).css('display', 'block').addClass('active');
  });



 



  //[바닐라] 작품 : 탭메뉴(2) - #modal_03 내부 탭메뉴 -----------------------------------------------




  //모달 메뉴를 클릭할때
  $('#modal_03 .modal_menu .menu').click(function () {
    //메뉴전체에서 일단 active를 지우고
    $('#modal_03 .modal_menu .menu').removeClass('active');
    //선택된 메뉴만 active시킨다
    $(this).addClass('active');

    //그리고 선택된 메뉴에 해당하는 인덱스를 찾아서
    let index = $(this).index();


    $('#modal_03 .modal_tap').css('display', 'none').removeClass('active');
    $('#modal_03 .modal_tap').eq(index).css('display', 'block').addClass('active');


    //탭메뉴의 스와이퍼 첫페이지시작
    if (index == 0) {
      swiper04.slideTo(0);
    } else if (index == 1) {
      swiper05.slideTo(0);
    } else if (index == 2) {
      swiper06.slideTo(0);
    } else if (index == 3) {
      swiper07.slideTo(0);
    } else {
      swiper04.slideTo(0);
    }

  });








  //[바닐라] 작품 : 탭메뉴(2) - #modal_03 swiper  -----------------------------------------------

  var swiper04 = new Swiper(".swiper04", {
    initialSlide: 0,
    grabCursor: true,

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,


  });


  var swiper05 = new Swiper(".swiper05", {
    initialSlide: 0,
    grabCursor: true,

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,

  });


  var swiper06 = new Swiper(".swiper06", {
    initialSlide: 0,
    grabCursor: true,

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,

  });


  var swiper07 = new Swiper(".swiper07", {
    initialSlide: 0,
    grabCursor: true,

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,

  });




  // ----------------------------------------------------------------------------------------------
  // ----------------------------------- #modal_04  -----------------------------------------------
  // ----------------------------------------------------------------------------------------------





  //[제이쿼리] 작품 : 탭메뉴(2) - #modal_04 켜기    -----------------------------------------------

  
  const url04 = document.querySelector('.tap02 .url_02')
  const modal04 = document.querySelector('.tap02 #modal_04')
  const back04 = document.querySelector('.tap02 #background_04')
  const close04 = document.querySelector('.tap02 #close_04')




  //코드리뷰 버튼 클릭시 작동되는 탭
  url04.addEventListener('click', function () {
    modal04.style.display = 'block';
    back04.style.display = 'block';
    body.style.overflow = 'hidden';
  });



  //코드리뷰 닫기 클릭시 작동
  close04.addEventListener('click', function () {
    modal04.style.display = 'none';
    back04.style.display = 'none';
    body.style.overflowY = 'auto';

    //나갔다 들어올때 active 첫번재 이동
    $('.tap02 #modal_04 .modal_menu .menu').removeClass('active');
    $('.tap02 #modal_04 .modal_menu .menu').eq(0).addClass('active');
    $('.tap02 #modal_04 .modal_tap').css('display', 'none').removeClass('active');
    $('.tap02 #modal_04 .modal_tap').eq(0).css('display', 'block').addClass('active');
  });





  //[바닐라] 작품 : 탭메뉴(1) - #modal_04 내부 탭메뉴 -----------------------------------------------


  //모달 메뉴를 클릭할때
  $('#modal_04 .modal_menu .menu').click(function () {

    //메뉴전체에서 일단 active를 지우고
    $('#modal_04 .modal_menu .menu').removeClass('active');
    //선택된 메뉴만 active시킨다
    $(this).addClass('active');

    //그리고 선택된 메뉴에 해당하는 인덱스를 찾아서
    let index = $(this).index();


    $('#modal_04 .modal_tap').css('display', 'none').removeClass('active');
    $('#modal_04 .modal_tap').eq(index).css('display', 'block').addClass('active');

  });


  // ----------------------------------------------------------------------------------------------
  // ----------------------------------- #modal_05  -----------------------------------------------
  // ----------------------------------------------------------------------------------------------




  //[제이쿼리] 작품 : 탭메뉴(3) - #modal_05 켜기    -----------------------------------------------



  const url05 = document.querySelector('.tap03 .url_01')
  const modal05 = document.querySelector('.tap03 #modal_05')
  const back05 = document.querySelector('.tap03 #background_05')
  const close05 = document.querySelector('.tap03 #close_05')


  //기획서 버튼 클릭시 작동되는 탭
  url05.addEventListener('click', function () {
    modal05.style.display = 'block';
    back05.style.display = 'block';
    body.style.overflow = 'hidden';
    swiper08.slideTo(0);
  });

  

  //기획서 닫기 클릭시 작동
  close05.addEventListener('click', function () {
    modal05.style.display = 'none';
    back05.style.display = 'none';
    body.style.overflowY = 'auto';

    //나갔다 들어올때 active 첫번재 이동
    $('.tap03 #modal_05 .modal_menu .menu').removeClass('active');
    $('.tap03 #modal_05 .modal_menu .menu').eq(0).addClass('active');
    $('.tap03 #modal_05 .modal_tap').css('display', 'none').removeClass('active');
    $('.tap03 #modal_05 .modal_tap').eq(0).css('display', 'block').addClass('active');
  });



 



  //[바닐라] 작품 : 탭메뉴(3) - #modal_05 내부 탭메뉴 -----------------------------------------------




  //모달 메뉴를 클릭할때
  $('#modal_05 .modal_menu .menu').click(function () {
    //메뉴전체에서 일단 active를 지우고
    $('#modal_05 .modal_menu .menu').removeClass('active');
    //선택된 메뉴만 active시킨다
    $(this).addClass('active');

    //그리고 선택된 메뉴에 해당하는 인덱스를 찾아서
    let index = $(this).index();


    $('#modal_05 .modal_tap').css('display', 'none').removeClass('active');
    $('#modal_05 .modal_tap').eq(index).css('display', 'block').addClass('active');


    //탭메뉴의 스와이퍼 첫페이지시작
    if (index == 0) {
      swiper08.slideTo(0);
    } else if (index == 1) {
      swiper09.slideTo(0);
    }  else {
      swiper08.slideTo(0);
    }

  });








  //[바닐라] 작품 : 탭메뉴(3) - #modal_05 swiper  -----------------------------------------------

  var swiper08 = new Swiper(".swiper08", {
    initialSlide: 0,
    grabCursor: true,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,


  });


  var swiper09 = new Swiper(".swiper09", {
    initialSlide: 0,
    grabCursor: true,

    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    observer: true,
    observeParents: true,

  });


 





  // ----------------------------------------------------------------------------------------------
  // ----------------------------------- #modal_06  -----------------------------------------------
  // ----------------------------------------------------------------------------------------------





  //[제이쿼리] 작품 : 탭메뉴(3) - #modal_06 켜기    -----------------------------------------------

  
  const url06 = document.querySelector('.tap03 .url_02')
  const modal06 = document.querySelector('.tap03 #modal_06')
  const back06 = document.querySelector('.tap03 #background_06')
  const close06 = document.querySelector('.tap03 #close_06')




  //코드리뷰 버튼 클릭시 작동되는 탭
  url06.addEventListener('click', function () {
    modal06.style.display = 'block';
    back06.style.display = 'block';
    body.style.overflow = 'hidden';
  });



  //코드리뷰 닫기 클릭시 작동
  close06.addEventListener('click', function () {
    modal06.style.display = 'none';
    back06.style.display = 'none';
    body.style.overflowY = 'auto';

    //나갔다 들어올때 active 첫번재 이동
    $('.tap03 #modal_06 .modal_menu .menu').removeClass('active');
    $('.tap03 #modal_06 .modal_menu .menu').eq(0).addClass('active');
    $('.tap03 #modal_06 .modal_tap').css('display', 'none').removeClass('active');
    $('.tap03 #modal_06 .modal_tap').eq(0).css('display', 'block').addClass('active');
  });





  //[바닐라] 작품 : 탭메뉴(3) - #modal_06 내부 탭메뉴 -----------------------------------------------


  //모달 메뉴를 클릭할때
  $('#modal_06 .modal_menu .menu').click(function () {

    //메뉴전체에서 일단 active를 지우고
    $('#modal_06 .modal_menu .menu').removeClass('active');
    //선택된 메뉴만 active시킨다
    $(this).addClass('active');

    //그리고 선택된 메뉴에 해당하는 인덱스를 찾아서
    let index = $(this).index();


    $('#modal_06 .modal_tap').css('display', 'none').removeClass('active');
    $('#modal_06 .modal_tap').eq(index).css('display', 'block').addClass('active');

  });




  //[바닐라]  AOS  -----------------------------------------------

  AOS.init();