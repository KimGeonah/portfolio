  
 //[자바스크립트] 페이지의 높이 반환 ----------------------------------------------
window.onscroll = function() {
  let scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
}  



 //[자바스크립트] 풀페이지 기능 ----------------------------------------------

$(function(){

  $('.wrap section').mousewheel(function(event, delta){

      if(delta > 0) {//스크롤을 위로 움직임
          let prev = $(this).prev().offset().top
          $('html, body').stop().animate({
              scrollTop:prev
          },500)
      }else if(delta <0){//스크롤을 아래로 움직임
          let next = $(this).next().offset().top
          $('html, body').stop().animate({
              scrollTop:next
          },500)
      }

  })

})






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
  strings: ['&lt;h1&gt; Geonah World &lt;/h1&gt;'],
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


//[바닐라] about 취미 : swiper  -----------------------------------------------


var hobbySwiper = new Swiper(".hobby_swiper", {
  observer:true,
  observeParents:true,
  slidesPerView: 3,
  autoplay: {
    delay:300,
    disableOnInteraction: false
  },
  initialSlide:0,
  spaceBetween: 20,

  
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
    delay: 1500,
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
  if (scrollTop >= 4965) {
    $("#progress01").animate({ width: "90%" }, 1500);
    $("#progress02").animate({ width: "90%" }, 1500);
    $("#progress03").animate({ width: "70%" }, 1500);
    $("#progress04").animate({ width: "40%" }, 1500);
    $("#progress05").animate({ width: "70%" }, 1500);
    $("#progress06").animate({ width: "90%" }, 1500);
  } else {
    $("#progress01, #progress02, #progress03, #progress04, #progress05, #progress06").stop().css("width", "0%");
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


//[제이쿼리] works : 탭1 모달창1   -----------------------------------------------



const body = document.querySelector('body');


const url01 = document.querySelector('.url_01')
const modal01 = document.querySelector('#modal_01')
const back01 = document.querySelector('#background_01')
const close01= document.querySelector('#close_01')


//기획서 버튼 클릭시 작동되는 탭
url01.addEventListener('click', function() {
  modal01.style.display = 'block';
  back01.style.display = 'block';
  body.style.overflow = 'hidden';
  swiper01.slideTo(0);


});


//기획서 닫기 클릭시 작동
close01.addEventListener('click', function() {
  modal01.style.display = 'none';
  back01.style.display = 'none';
  body.style.overflowY = 'auto';

  //나갔다 들어올때 active 첫번재 이동
  $('#modal_01 .modal_menu .menu').removeClass('active');
  $('#modal_01 .modal_menu .menu').eq(0).addClass('active');
  $('#modal_01 .modal_tap').css('display', 'none').removeClass('active');
  $('#modal_01 .modal_tap').eq(0).css('display', 'block').addClass('active');
});




  
//[바닐라] 탭메뉴1번 모달창 : swiper 3개  -----------------------------------------------

var swiper01 = new Swiper(".swiper01", {
  initialSlide:0,
  grabCursor:true,

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
  initialSlide:0,
  grabCursor:true,

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
  initialSlide:0,
  grabCursor:true,

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





//[제이쿼리] works : 탭1 모달창2   -----------------------------------------------
const modal02 = document.querySelector('#modal_02')
const url02 = document.querySelector('.url_02')
const back02 = document.querySelector('#background_02')
const close02= document.querySelector('#close_02')




//코드리뷰 버튼 클릭시 작동되는 탭
url02.addEventListener('click', function() {
  modal02.style.display = 'block';
  back02.style.display = 'block';
  body.style.overflow = 'hidden';

});



//코드리뷰 닫기 클릭시 작동
close02.addEventListener('click', function() {
  modal02.style.display = 'none';
  back02.style.display = 'none';
  body.style.overflowY = 'auto';

    //나갔다 들어올때 active 첫번재 이동
  $('#modal_02 .modal_menu .menu').removeClass('active');
  $('#modal_02 .modal_menu .menu').eq(0).addClass('active');
  $('#modal_02 .modal_tap').css('display', 'none').removeClass('active');
  $('#modal_02 .modal_tap').eq(0).css('display', 'block').addClass('active');
});











//[바닐라] 모달창1 : 탭메뉴 -----------------------------------------------




 //모달 메뉴를 클릭할때
$('#modal_01 .modal_menu .menu').click(function() {
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
}else{
  swiper01.slideTo(0);
}

});






//[바닐라] 모달창2 : 탭메뉴 -----------------------------------------------




 //모달 메뉴를 클릭할때
 $('#modal_02 .modal_menu .menu').click(function() {

  //메뉴전체에서 일단 active를 지우고
  $('#modal_02 .modal_menu .menu').removeClass('active');
  //선택된 메뉴만 active시킨다
  $(this).addClass('active');

  //그리고 선택된 메뉴에 해당하는 인덱스를 찾아서
  let index = $(this).index();


  $('#modal_02 .modal_tap').css('display', 'none').removeClass('active');
  $('#modal_02 .modal_tap').eq(index).css('display', 'block').addClass('active');

});











//[바닐라]  AOS  -----------------------------------------------

AOS.init();


