;(function(window,document,$,undefined){ //항상 밑에서 위로 보기(업데이트 항목은 위로 써줌)

    // var brando = 객체(host)
    // 객체 안에 property가 있으면 객체함수(리터럴함수=익명함수) = 메소드처럼 쓸 수 있게 됨
    var brando = {
        init:           function(){ 
            var that=this;
                that.headerFn();
                that.section01Fn();
                that.section234Fn();
                /* 
                that.section234Fn(); 
                 =  that.section02Fn();
                    that.section03Fn();
                    that.section04Fn();
                */
                that.section05Fn();
                that.section06Fn();
                that.section07Fn();
                that.section08Fn();
                that.section09Fn();
                that.section09GalleryFn();
                that.section10Fn();
                that.section11Fn();
                that.section12Fn();
                that.section13Fn();
                that.section14Fn();
                that.footerFn();
        },//브란도에서 최초 실행될 js

        headerFn:       function(){
            var winW = $(window).width();
            var url = null; 
            var t = 0;

            var smoothBtn = $(".smooth-btn"); //웹 전체 공통 클래스
            var htmlBody = $("html,body");
            var mobileBtn = $("#header .mobile-btn");
            var window_ = $(window);
            var header = $("#header");
            var goTop = $(".goTop"); //웹 전체 공통 클래스
            var mobileMenu= $("#header .mobile-menu");

            smoothBtn.on({ 
                click : function(event){
                    var that = $(this);
                    
                    event.preventDefault();
                    url = that.attr("href");
                    htmlBody.stop().animate({ scrollTop: $( url ).offset().top },800) 
                    //mobileMenu.hide();
                    mobileMenu.stop().animate({ right:-100+"%" },400);
                    mobileBtn.removeClass("addClose");
                }
            });

            //scrolling
            window_.scroll(function(){
                if( window_.scrollTop()>=30 ){
                    header.addClass("addMobile")
                    goTop.addClass("addGotop")
                }
                else{
                    header.removeClass("addMobile")
                    goTop.removeClass("addGotop")
                }
            });

            //resize
            var winW = 0;

            window_.resize(function(){
                winW = window_.width();
                if( winW>990 ){
                    t=0;
                    mobileBtn.removeClass("addClose");
                    //mobileMenu.stop().slideUp(0);
                    //mobileMenu.stop().animate({ right:-100+"%" },400);
                }
                else{ 
                    t=1; 
                }
            });

            //btn-click
            mobileBtn.on({
                click : function(event){
                    var that = $(this);
                    
                    event.preventDefault();
                    that.toggleClass("addClose");
                    
                    if(t=0){
                        t=1;
                        mobileMenu.stop().animate({right:0},400);
                    }
                    if(t=1){
                        t=0;
                        mobileMenu.stop().animate({right:-100+"%"},400);
                    }
                    console.log(t)
                }
            });
        },//헤더의 js

        section01Fn:    function(){
            
            var n = $("#section01 .slide").length-1; // 슬라이드 전체 갯수, 슬라이드 추가/삭제할때마다 변경하기 싫어서, index번호는 0부터 시작하니까 -1해주기
            var cnt = 0;

            var slide = $("#section01 .slide")
            var arrowDownBtn = $("#section01 .arrow-down-btn")
            var section01 = $("#section01")
            var hungry = $("#section01 .hungry")
            var window_ = $(window) // var window라고 쓰면 예약 식별자인 window가 됨으로 _붙여줌
            var htmlBody = $("html,body")
            var section02 = $("#section02")
            
            //console.log( "섹션1 객체", section01 )

            var winH = 969;
            var imgH =hungry.height();
            var imgTop = (winH-imgH)/2;
    
            setTimeout(resizeFn,100);

            function resizeFn(){                
                winH = window_.height();
                section01.css({ height:winH });
                
                imgH = hungry.height();
                imgTop = (winH-imgH)/2;
               hungry.css({ top:imgTop });
            };

            //Smooth Scrolling Event
            arrowDownBtn.on({
                click : function(){
                    htmlBody.stop().animate({ scrollTop : section02.offset().top},700);
                }
            });

            window_.resize(function(){
                resizeFn();
            });

            setInterval(nextCountFn,3000);
            
            //메인 NEXT 슬라이드
            function mainNextSlideFn(){
                slide.css({ zIndex:1 }).stop().animate({opacity:1},0);
                slide.eq(cnt==0? n:cnt-1).css({ zIndex:2 });
                slide.eq(cnt).css({ zIndex:3 }).stop().animate({opacity:0},0).animate({opacity:1},800);
                //console.log("next",cnt);
                }

            //메인 PREV 슬라이드
            function mainPrevSlideFn(){
                slide.css({ zIndex:1 }).stop().animate({opacity:1},0);
                slide.eq(cnt).css({ zIndex:2 });
                slide.eq(cnt==n? 0:cnt+1).css({ zIndex:3 }).stop().animate({opacity:1},0).animate({opacity:0},800);
                //console.log("prev",cnt);
                }

            //PREV 슬라이드
            function prevCountFn(){
                cnt--;
                if(cnt<0){cnt=n};
                mainPrevSlideFn();
            }

            //NEXT 슬라이드
            function nextCountFn(){
                cnt++;
                if(cnt>n){cnt=0};
                mainNextSlideFn();
            }

            section01.swipe({
                swipeLeft : function(){
                    if( !slide.is(":animated") ){
                        nextCountFn();
                    }
                },
                swipeRight : function(){
                    if( !slide.is(":animated") ){
                        prevCountFn();
                    }
                }
            })

        },

        section234Fn:    function(){
         
            var window_ = $(window)
            var contentWrap = $(".section234 .content-wrap")
            var textWrap = $(".section234 .text-wrap")
            var textWrapH3 = $('.section234 .text-wrap h3')
            var textWrapH4 = $('.section234 .text-wrap h4')
            var textWrapP = $('.section234 .text-wrap p')
            var section234 = $(".section234")
            var section0204ContentWrap = $("#section02 .content-wrap, #section04 .content-wrap")
            var section03ContentWrap= $("#section03 .content-wrap")

            var rl = (windowWidth-boxWidth)/2;
            var windowWidth = window_.width(); //1170
            var windowHeight = window_.height(); //969
            var section234Height = windowHeight; 
            var boxTop = (windowHeight-boxHeight)/2; //(969-550)/2 = 209.5
            var boxWidth = contentWrap.width(); //450
            var boxHeight = boxWidth * 1.22222;
            //            = contentWrap.height(); //550
            var fontSizeH3 = rateH3 * textW;
            var rateH3 = 0.096551724
            var textW = textWrap.width();
            var fontSizeH4 = rateH4 * textW;   
            var rateH4 = 0.037931034
            var fontSizeP = rateP * textW;     
            var rateP = 0.048275862 

            setTimeout(resizeFn,100);

            function resizeFn(){
                
                rl = (windowWidth-boxWidth)/2;
                windowWidth = window_.width();
                windowHeight = window_.height();
                section234Height = windowHeight;
                boxWidth = contentWrap.width();
                boxHeight = boxWidth * 1.22222;

                if(windowHeight < boxHeight+60){
                    section234Height = boxHeight+60;
                    boxTop = 30;
                }
                else{
                    section234Height = windowHeight;
                    boxTop = (windowHeight-boxHeight)/2;
                }
                
                textW = textWrap.width();
                fontSizeH3 = rateH3 * textW;
                fontSizeH4 = rateH4 * textW;  
                fontSizeP = rateP * textW;    

                textWrapH3.css({ fontSize:fontSizeH3 });
                textWrapH4.css({ fontSize:fontSizeH4 });
                textWrapP.css({ fontSize:fontSizeP });

                contentWrap.css({ top:boxTop, height:boxHeight });
                section234.css({ height:section234Height });
            
                if( windowWidth <= 1170 ){
                    section0204ContentWrap.stop().animate({ right:rl-15 },300);
                    section03ContentWrap.stop().animate({ left:rl-15 },300);  
                }
                else{
                    section0204ContentWrap.stop().animate({ right:0 },100);
                    section03ContentWrap.stop().animate({ left:0 },100);
                }
            };
            
            window_.resize(function(){
                resizeFn();
            });


        },
        section05Fn:    function(){
            
        },
        section06Fn:    function(){
            
        },
        section07Fn:    function(){
            
        },
        section08Fn:    function(){
            
        },
        section09Fn:    function(){
            var fileName = null;
            var endNum = null;
            var fileNum = null;
            var winH = 0;
            var imgWrap = $("#section09 .img-wrap")
            var galleryImgBtn = $("#section09 .gallery-img-btn")
            var modal = $("#section09 .modal")
            var imgWrapImg = $("#section09 .img-wrap img")
            var arrowRightAndImgBtn = $("#section09 .arrow-right-btn, #section09 .img-btn")
            var arrowLeftBtn= $("#section09 .arrow-left-btn")
            var closeBtnAndImgWrap = $("#section09 .close-btn, #section09 .img-wrap")
            
            setTimeout(resizeFn,100);

            function resizeFn(){
                winH = $(window).innerHeight();
                imgWrap.css({lineHeight : winH + "px"});
                //console.log(winH); -> lineHeight 설정 안 됨 
                //ㄴ> background-position과 lineHeight는 꼭 뒤에 px 단위 써줘야됨
                    //ㄴ> 안 쓰면 줄 높이가 엄청 크게 잡힘
            }
            $(window).resize(function(){
                resizeFn();
            });

            //모달창 구현
            galleryImgBtn.on({
                click : function(e){
                    var that = $(this)
                    e.preventDefault();
                    //모달창에 띄울 파일의 번호를 추출
                    fileName = that.find("img").attr("src");
                    endNum = fileName.indexOf(".jpg");
                    fileNum = Number(fileName.slice(endNum-2, endNum));
                    // console.log(fileName, fileNum);
                    modalMainSlideFn();
                }
            })
            //모달창 메인 슬라이드
            function modalMainSlideFn(){
                modal.stop().fadeIn(300);
                imgWrapImg.stop().fadeOut(0).attr("src","./img/restaurant-img" + fileNum + ".jpg").fadeIn(1000);
            }
            closeBtnAndImgWrap.on({
                click : function(e){
                    e.preventDefault();
                    modal.stop().fadeOut(300);
                }
            })

            arrowRightAndImgBtn.on({
                click : function(e){
                    e.stopPropagation();
                    fileNum++;
                    fileNum>32? fileNum=25:fileNum;
                    modalMainSlideFn();
                }
            })
            arrowLeftBtn.on({
                click : function(){
                    fileNum--;
                    if(fileNum<25){fileNum=32} // 롤링되게
                    modalMainSlideFn();                    
                }
            })
        },
        section09GalleryFn: function(){
            
            var gallery = $(".gallery")
            var galleryLi = $(".gallery li")
            var galleryBtn = $(".gallery-btn")
            var window_ = $(window)
            
            // 초기값 변수
            var hRate = 600/800; 
            
            var cols = 4;
            var n = galleryLi.length; //8
            var rows = Math.ceil(n/cols);
            var winW = window_.innerWidth();
            
            var imgW = winW/cols;
            var imgH = imgW*hRate;

            gallery.removeClass("addZoom");
            gallery.css({ height:imgH*rows });
            
            //배열 두 개 필요
            var hide = [];// 초기값
            var show = [0, 1, 2, 3, 4, 5, 6, 7];// 초기값

            setTimeout(galleryFn,100);

            function galleryFn(){
                if(winW > 1200){//(1201~)
                    cols = 4;
                }
                else if( winW <= 1200 && winW > 980 ){ //1200이하  980초과 (981~1200)
                    cols = 3;
                }
                else if( winW <= 980 && winW > 760){ //(761~980)
                    cols = 2;
                }
                else if( winW <= 760 && winW >= 0){ //0~760
                    cols = 1;
                }
                n =  show.length; //배열 show의 이미지 갯수
                rows = Math.ceil(n/cols);
                
                winW = window_.innerWidth();
                imgW = winW/cols;
                imgH = imgW*hRate;

                //console.log("hide",hide);
                //console.log("show",show);
                
                //갤러리 숨김 hide();
                for(var i=0;i<hide.length;i++){
                    galleryLi.eq(hide[i]).hide(); 
                }
                //갤러리 보이기 show();
                var cnt = -1;
                
                for(i=0;i<rows;i++){ 
                    for(j=0;j<cols;j++){ 
                        cnt++; //0 1 2 3 4 5 6 7
                        if(cnt>=show.length){break;}
                        
                        galleryLi.removeClass("addZoom2");//모든 li 칸 초기화
                        galleryLi.eq(show[cnt]).show().stop().animate({ top:(imgH*i), left:(imgW*j), width:imgW, height:imgH },300,function(){
                            galleryLi.addClass("addZoom2");// 화면이 늘어난 다음에 스케일
                        });
                    }
                }
                gallery.addClass("addZoom");
            } //갤러리 메인 함수 끝

            window_.resize(function(){
                galleryFn();
            })

            // 갤러리 버튼 이벤트 0-4 (5개)
            galleryBtn.each(function(index){
                var that = $(this);
                that.on({
                    click : function(e){
                        e.preventDefault();

                        galleryBtn.removeClass("addNav");
                        that.addClass("addNav");

                        switch(index){
                            case 0 :
                                hide = [];
                                show = [0,1,2,3,4,5,6,7];
                                break;
                            case 1 :
                                hide = [0,2];
                                show = [1,3,4,5,6,7];
                                break;
                            case 2 :
                                hide = [1,3,4,5];
                                show = [0,2,6,7];
                                break;
                            case 3 :
                                hide = [0,2,5];
                                show = [1,3,4,6,7];
                                break;    
                            default:
                                hide = [0,1,3,6];
                                show = [2,4,5,7];
                        }
                        galleryFn(); //메인함수 호출 실행;
                    }   
                })
            })
        },
        section10Fn:    function(){

            var window_ = $(window);
            var winW = window_.innerWidth();
            var slideW = 975;//975 = 기본값 -> 창 넓이에 따라 바뀜
            var cnt = 0;
            var slideWrap = $("#section10 .slide-wrap")
            var slide = $("#section10 .slide")
            var nextBtn = $("#section10 .next-btn")
            var prevBtn = $("#section10 .prev-btn")

            setTimeout(resizeFn,100);

            function resizeFn(){
                winW = window_.innerWidth();
                if( winW>975 ){
                    slideW = 975;
                }
                else{
                    slideW = winW;
                }

                slide.css({width:slideW}); //slide랑 wrapping 둘 다 넓이가 같이 변화해야함, 하고 나서 텍스트 길이 조정
                slideWrap.css({width:slideW*3});
                slideWrap.stop().animate({ left:-slideW*cnt },500);//창 너비가 바뀌면서 재 조정됨 = 초기화
                mainSlideFn();
            }

            window_.resize(function(){
                resizeFn();
            })

            function mainSlideFn(){
                //콜백이 필요없는 완전 단순한 슬라이드
                // slideWrap.stop().animate({ left:-975*cnt },600);를 창 넓이에 따라 바뀌게 반응형으로 바꿀 예정
                //console.log(slideW);//return값 확인용(밑에 left값 적용되나 보게)
                slideWrap.stop().animate({ left:-slideW*cnt },600);
            }

            function prevSlideFn(){
                cnt--;
                if(cnt<0){cnt=0;}
                mainSlideFn();
            }
            function nextSlideFn(){
                cnt++;
                if(cnt>2){cnt=2;}
                mainSlideFn();
            }

            prevBtn.on({
                click:function(e){
                    e.preventDefault();
                    if( !$(this).is(":animated") ){
                        prevSlideFn();
                    }
                    if(cnt<0){
                        slideWrap.stop().animate({ left:-975*0},0);
                        return false;
                    }
                }
            })
            nextBtn.on({
                click:function(e){
                    e.preventDefault();
                    if( !$(this).is(":animated") ){
                        nextSlideFn();
                    }
                    if(cnt>2){
                        slideWrap.stop().animate({ left:-975*2 },0);
                        return false;
                    }
                   // console.log(cnt);
                }
            })

            //터치 스와이프
            slideWrap.swipe({
                swipeLeft:function(){
                    nextSlideFn();
                },
                swipeRight:function(){
                    prevSlideFn();
                }
            })
        },
        section11Fn:    function(){
            // 화면이 줄어들면 좌측 li 박스 높이가 ul 높이에 맞춰 줄어들어야 함
            // 좌측 li 박스 높이에 따라 우측 li 박스도 따라감
            var window_ = $(window);
            var blog = $(".blog")// 4개 배열처리 each메소드 활용
            var blogList = $(".blog li") //첫번째의 li
            var blogListImgH = blogList.eq(0).innerHeight(); //첫번째의 li의 높이
            var fontRateH3 = 0.039711191; //폰트 비율
            var fontRateP = 0.072202166; //폰트 비율
            var blogListImgW = blogList.eq(0).innerWidth(); //첫번째의 li의 너비
            var fontSizeH3 = fontRateH3 * blogListImgW; //너비에 따라서 글자 크기가 바뀜, 폰트사이즈 반응형 계산
            var fontSizeP = fontRateP * blogListImgW; //폰트사이즈 반응형 계산

            // 12px까지는 줄어들어도 괜찮
            fontSizeH3>12?fontSizeH3=12:fontSizeH3;
            fontSizeH3<8?fontSizeH3=8:fontSizeH3;

            fontSizeH3>20?fontSizeH3=20:fontSizeH3;
            fontSizeH3<15?fontSizeH3=15:fontSizeH3;

            // {position:relative;float:left;width:50%;} /* 좌측 박스 높이로 우측 박스 js 사용하여 높이 설정 */

            setTimeout(resizeFn,100);

            function resizeFn(){

                blogListImgW = blogList.eq(0).innerWidth(); //첫번째의 li의 너비
                blogListImgH = blogList.eq(0).innerHeight();
                fontSizeH3 = fontRateH3 * blogListImgW; //너비에 따라서 글자 크기가 바뀜
                fontSizeP = fontRateP * blogListImgW; 

                    blog.each(function(idx){
                        blog.eq(idx).children("li").eq(1).css({height:blogListImgH});
                        blog.eq(idx).find("h3").css({fontSize : fontSizeH3});
                        blog.eq(idx).find("p").css({fontSize : fontSizeP});
                    });
            }

            window_.resize(function(){                
                resizeFn();
            })
        },
        section12Fn:    function(){
            var window_ = $(window);
            var h3 = $("#section12 h3");
            var h2 = $("#section12 h2");
            var container = $("#section12 .title-wrap");

            var containerW = container.innerWidth();
            var fontSizeH3 = containerW * 0.01754386;
            var fontSizeH2 = containerW * 0.035087719;

            setTimeout(resizeFn,100);

            function resizeFn(){
                containerW = container.innerWidth();
                fontSizeH3 = containerW * 0.01754386;
                fontSizeH2 = containerW * 0.035087719;

                if(fontSizeH3<13){fontSizeH3=13};
                if(fontSizeH2<25){fontSizeH2=25};
                h3.css({fontSize : fontSizeH3});
                h2.css({fontSize : fontSizeH2});
            };

            //반응형 함수
            window_.resize(function(){
                resizeFn();
            })
        },
        section13Fn:    function(){
            var window_ = $(window);
            var sec12Top = $("#section12").offset().top-500;
            var t=0;
            var h2 = $("#section13 h2");
            var cnt = [0,0,0,0];
            var setId = [null,null,null,null];
            var num = [780,987,350,166];
            var seconds = 10;
            var mSeconds = [];
            for(var idx=0; idx<num.length; idx++){
                mSeconds[idx] = (seconds/num[idx])*1000;
            }
            // console.log(num.length = 배열의 길이, 총 4개니까 4 나옴)
            
            // h2.eq(0).text("780");
            // h2.eq(1).text("987");
            // h2.eq(2).text("350");
            // h2.eq(3).text("166");

            //setTimeout(countFn,100); -> 이걸 패럴럭스로 바꿔줌!

            window_.scroll(function(){
                if(window_.scrollTop() > sec12Top){
                    if(t==0){        // 초기화 되라고 토글 변수 사용해줌
                        t=1;
                        countFn();
                    }
                    else{
                        t=0;
                        cnt = [0,0,0,0];
                    }
                }
            });

            function countFn(){
                h2.each(function(idx){
                    setId[idx] = setInterval(function(){
                        cnt[idx]++;
                        if(cnt[idx]>num[idx]){
                            clearInterval(setId[idx]);
                        }
                        else{
                            h2.eq(idx).text(cnt[idx]);
                        }
                    },mSeconds[idx]);
                });
            }


            
        },
        section14Fn:    function(){
        },
        footerFn:       function(){
        }
    }; 

//위에서 함수를 만들고 밑에서 함수를 실행한다.

    brando.init();

})(window,document,jQuery);