// $:제이쿼리
// document : 문서(<body> ~ </body>를 가르킴)
// ready() : 문서가 준비되면 ... 이라는 뜻의 이벤트
// function() {} 함수, ready 이벤트가 발생괴는 문장들
$(document).ready(function () {
    // header 영역의 모바일 버전 글로벌 내비게이션
    // 메뉴 버튼 클릭하면 메뉴 영역이 오른쪽에서 나타남
$(".mobile_menu_btn").click(function() {
    $(".mobile_menu").animate({
        // (원래) : -100vw -> 0
        "right":0
    });
    $(".mobile_menu i").addClass("active");
});

    // 모바일 메뉴의 x(닫기)버튼을 클릭하면 메뉴영역이 오른쪽으로 
    $(".close_btn i").click(function() {
        $(".mobile_menu").animate({
            "right":"-100vw"
        });
        $(".mobile_menu i").removeClass("active");
    });

    // 모바일 아코디언 메뉴
    $('header .mobile_menu_box nav ul li a').click(function () {
        $(this).next().slideToggle();
        // 화살표 방향 변경(글로벌 내비게이션)
        $(this).toggleClass("active");
        return false;
    });

    //$(".sitemap_list > ul > li > a") : 선택자
    //click() : 클릭이벤트
    $(".sitemap_list > ul > li > a").click(function () {
        //만약 클릭한 a태그에 active클래스가 추가되어 있지 않다면
        if ($(this).attr("class") != "active") {
            //not(this) : 클릭한 메뉴 이외의 객체들
            //slideUp() : 객체를 접음.
            $(".sitemap_list > ul > li > a").next().slideUp();
            //$(this) : 클릭이벤트가 발생한 객체를 가리킴
            //next() : 클릭이벤트가 발생한 객체의 다음 형제객체
            $(this).next().slideDown();
            //removeClass("active") : active 클래스를 제거함
            $(".sitemap_list > ul > li > a").removeClass("active");
            //addClass("active") : active 클래스를 추가함
            $(this).addClass("active");
            //a태그를 클릭할 때 맨 위로 이동하는 것을 방지함.
            return false;

            //클릭한 a태그에 active가 이미 추가되어 있는 상태라면    
        } else {
            //다시 클릭한 주메뉴의 서브메뉴 들어감
            $(this).next().slideUp();
            //다시 클릭한 주메뉴에서 active클래스 제거
            $(this).removeClass("active");
            //a태그를 클릭할 때 맨 위로 이동하는 것을 방지함.
            return false;
        }
    });
    // swiper slide
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true, // 마지막-> 처음, 부자연
        // 자동 슬라이드
        autoplay: {
            delay: 2000      // 2초(1/1000초)
        },
    });
    // swiper 슬라이드 버튼
    $('.fa-pause').click(function () {
        // 클릭한 객체((.fa-pause)를 숨김
        $(this).hide();
        // .fa-play 객체를 보임(인라인요소 + 불록요소)
        $('.fa-play').css('display', 'inline-block');
        // swiper 자동 슬라이드 멈춤
        swiper.autoplay.stop();
    });
    $('.fa-play').click(function () {
        // 클릭한 객체((.fa-play)를 숨김
        $(this).hide();
        // .fa-pause 객체를 보임(인라인요소 + 불록요소)
        $('.fa-pause').css('display', 'inline-block');
        // swiper 자동 슬라이드 시작
        swiper.autoplay.start();
    });
});