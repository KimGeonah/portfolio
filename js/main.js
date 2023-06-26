

//[제이쿼리] header페이지 이동 : easeOutBounce  -----------------------------------------------




//LOGO 클릭
$(function(){
  const btn = $('.logo')
  btn.click(function(){
      $('html, body').animate({
        scrollTop:0
      },1000,)
    })
  })


  //CONTACT 클릭
  $(function(){
    const btn = $('.contact_btn a')
    btn.click(function(){
        $('html, body').animate({
          scrollTop: $(document).height() - window.innerHeight
        },1000)
      })
    })
  


//lnb 클릭
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
