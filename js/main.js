  
 //[자바스크립트] 페이지의 높이 반환 ----------------------------------------------
window.onscroll = function() {
  let scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
}  





//[제이쿼리] header 메뉴별 페이지 이동 ----------------------------------------------

// 1. LOGO 클릭
$(function(){
  const btn = $('.logo')
  btn.click(function(){
      $('html, body').animate({
        scrollTop:0
      },1000,)
    })
  })


  //2. CONTACT 클릭
  $(function(){
    const btn = $('.contact_btn a')
    btn.click(function(){
        $('html, body').animate({
          scrollTop: $(document).height() - window.innerHeight
        },1000)
      })
    })
  


//3. 각각 lnb 클릭(easeOutBounce)
$(function(){
    const btn = $('.lnb ul li')
    const page = $('.page')
  
    let index = 0
    let top = 0
  
    btn.click(function(){
      index = $(this).index()
      top = page.eq(index).offset().top
  
      $('html, body').stop().animate({
        scrollTop:top
      },1000,'easeOutBounce')
    })
}) 



//[바닐라] intro page : 타이핑효과  -----------------------------------------------

const typed = new Typed('.typing', {
  strings: ['&lt;h1&gt; Hello! World &lt;/h1&gt;'],
  typeSpeed: 100,
  loop: true,
});


  



//[제이쿼리] scroll 버튼 -----------------------------------------------


$('#up').click(function(){
  $('html, body').animate({
      scrollTop : 0
    }, 1000);
})


$('#down').click(function(){
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


//[바닐라] 프로필 : swiper  -----------------------------------------------

 const swiper = new Swiper('.swiper', {
  // 카드효과
  effect:"cards",

  //잡는효과
  grabCursor: true,
  
   loop:true,

   //자동 재생 여부, 
  autoplay:{
    delay: 1000,
    // 드래그로 슬라이더 넘겼을 때 autoplay가 멈추지 않는다.
    disableOnInteraction: false  } 




}); 


//스와이퍼 마우스 올리고 내릴때 멈춤/작동
$('.swiper').hover(function() {
  swiper.autoplay.stop();
}, function(){
  swiper.autoplay.start();
}); 






//[제이쿼리] skils : 프로그레스바  -----------------------------------------------


$(window).scroll(function() {
  let scrollTop = $(window).scrollTop();
  if (scrollTop >= 5200) {
    $("#progress01").animate({ width: "90%" }, 1500);
    $("#progress02").animate({ width: "90%" }, 1500);
    $("#progress03").animate({ width: "70%" }, 1500);
    $("#progress04").animate({ width: "40%" }, 1500);
    $("#progress05").animate({ width: "70%" }, 1500);
    $("#progress06").animate({ width: "90%" }, 1500);
  }
});


//[제이쿼리] works : 탭메뉴  -----------------------------------------------

$(document).ready(function() {
  $('.works_tapmenu li span').click(function() {
      var index = $(this).parent().index();
      $('.works_tapmenu li').removeClass('active');
      $('.works_tapmenu li i').removeClass('fas').addClass('far');
      $(this).parent().addClass('active');
      $(this).find('i').removeClass('far').addClass('fas');
      $('.works_tap li').removeClass('active');
      $('.works_tap li').eq(index).addClass('active');
  });
});


//[제이쿼리] works : 모달창   -----------------------------------------------


const url01 = document.querySelector('.url_01')
const url02 = document.querySelector('.url_02')

const modal01 = document.querySelector('#modal_01')
const modal02 = document.querySelector('#modal_02')

const back01 = document.querySelector('#background_01')
const back02 = document.querySelector('#background_02')

const close01= document.querySelector('#close_01')
const close02= document.querySelector('#close_02')

const body = document.querySelector('body');

url01.addEventListener('click', function() {
  modal01.style.display = 'block';
  back01.style.display = 'block';
  body.style.overflow = 'hidden';
});
url02.addEventListener('click', function() {
  modal02.style.display = 'block';
  back02.style.display = 'block';
  body.style.overflow = 'hidden';
});

close01.addEventListener('click', function() {
  modal01.style.display = 'none';
  back01.style.display = 'none';
  body.style.overflowY = 'auto';

  //나갔다 들어올때 active 첫번재 이동
  $('.modal_menu .menu').removeClass('active');
  $('.modal_menu .menu').eq(0).addClass('active');
  $('.modal_tap').css('display', 'none').removeClass('active');
  $('.modal_tap').eq(0).css('display', 'block').addClass('active');
});
close02.addEventListener('click', function() {
  modal02.style.display = 'none';
  back02.style.display = 'none';
  body.style.overflowY = 'auto';

    //나갔다 들어올때 active 첫번재 이동
  $('.modal_menu .menu').removeClass('active');
  $('.modal_menu .menu').eq(0).addClass('active');
  $('.modal_tap').css('display', 'none').removeClass('active');
  $('.modal_tap').eq(0).css('display', 'block').addClass('active');
});





//[바닐라] 모달창 : 탭메뉴 -----------------------------------------------




 //모달 메뉴를 클릭할때
$('.modal_menu .menu').click(function() {

  //메뉴전체에서 일단 active를 지우고
  $('.modal_menu .menu').removeClass('active');
  //선택된 메뉴만 active시킨다
  $(this).addClass('active');

  //그리고 선택된 메뉴에 해당하는 인덱스를 찾아서
  let index = $(this).index();


  $('.modal_tap').css('display', 'none').removeClass('active');
  $('.modal_tap').eq(index).css('display', 'block').addClass('active');
  
  //탭메뉴의 스와이퍼 첫페이지시작
  if (index == 0) {
    swiper01.slideTo(0);
  } else if (index == 1) {
    swiper02.slideTo(0);
  } else if (index == 2) {
    swiper03.slideTo(0);
  }
});





//[바닐라] 모달창 : swiper  -----------------------------------------------





var swiper01 = new Swiper(".swiper01", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop:true,
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper02 = new Swiper(".swiper02", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop:true,
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper03 = new Swiper(".swiper03", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop:true,
  grabCursor:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});












//[바닐라]  AOS  -----------------------------------------------

AOS.init();


