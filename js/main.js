  
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


document.querySelector('.url_01').addEventListener('click', function() {
  document.getElementById('modal1').style.display = 'block';
});
document.querySelector('.url_02').addEventListener('click', function() {
  document.getElementById('modal2').style.display = 'block';
});
document.getElementById('close1').addEventListener('click', function() {
  document.getElementById('modal1').style.display = 'none';
});
document.getElementById('close2').addEventListener('click', function() {
  document.getElementById('modal2').style.display = 'none';
});

//[바닐라] 프로필 : swiper / AOS  -----------------------------------------------

AOS.init();
