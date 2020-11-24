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
            var url = null; 
            $(".smooth-btn").on({ 
                click : function(event){ 
                    event.preventDefault();
                    url = $(this).attr("href");
                   $("html,body").stop().animate({ scrollTop: $( url ).offset().top },800) 
                   $(".mobile-btn").removeClass("addClose");
                }
            });

            //scrolling
            $(window).scroll(function(){
                if( $(window).scrollTop()>=30 ){
                    $("#header").addClass("addMobile")
                    $(".goTop").addClass("addGotop")
                }
                else{
                    $("#header").removeClass("addMobile")
                    $(".goTop").removeClass("addGotop")
                }
            });

            //resize
            var winW = 0;

            $(window).resize(function(){
                winW = $(window).width();
                if( winW>990 ){
                    $(".mobile-menu").stop().slideUp(0);
                }
            });

            //btn-click
            $(".mobile-btn").on({
                click : function(event){
                    event.preventDefault();
                    $(this).toggleClass("addClose");
                    $(".mobile-menu").stop().slideToggle(300);
                }
            });


        },//헤더의 js

        section01Fn:    function(){
            
            var n = $(".slide").length-1; // 슬라이드 전체 갯수, 슬라이드 추가/삭제할때마다 변경하기 싫어서, index번호는 0부터 시작하니까 -1해주기
            var cnt = 0;
            
            var winH = 969;
            var imgH = $(".hungry").height();
            var imgTop = (winH-imgH)/2;
    
            setTimeout(resizeFn,100);

            function resizeFn(){                
                winH = $(window).height();
                $("#section01").css({ height:winH });
                
                imgH = $(".hungry").height();
                imgTop = (winH-imgH)/2;
                $(".hungry").css({ top:imgTop });
            };

            //Smooth Scrolling Event
            $(".arrow-down-btn").on({
                click : function(){
                    $("html,body").stop().animate({ scrollTop : $("#section02").offset().top},700);
                }
            });

            $(window).resize(function(){
                resizeFn();
            });

            setInterval(nextCountFn,3000);
            
            //메인 NEXT 슬라이드
            function mainNextSlideFn(){
                $(".slide").css({ zIndex:1 }).stop().animate({opacity:1},0);
                $(".slide").eq(cnt==0? n:cnt-1).css({ zIndex:2 });
                $(".slide").eq(cnt).css({ zIndex:3 }).stop().animate({opacity:0},0).animate({opacity:1},800);
                //console.log("next",cnt);
                }

            //메인 PREV 슬라이드
            function mainPrevSlideFn(){
                $(".slide").css({ zIndex:1 }).stop().animate({opacity:1},0);
                $(".slide").eq(cnt).css({ zIndex:2 });
                $(".slide").eq(cnt==n? 0:cnt+1).css({ zIndex:3 }).stop().animate({opacity:1},0).animate({opacity:0},800);
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

            $("#section01").swipe({
                swipeLeft : function(){
                    if( !$(".slide").is(":animated") ){
                        nextCountFn();
                    }
                },
                swipeRight : function(){
                    if( !$(".slide").is(":animated") ){
                        prevCountFn();
                    }
                }
            })

        },

        section234Fn:    function(){
         
            var rl = (windowWidth-boxWidth)/2;
            var windowWidth = $(window).width(); //1170
            var windowHeight = $(window).height(); //969
            var section234Height = windowHeight; 
            var boxTop = (windowHeight-boxHeight)/2; //(969-550)/2 = 209.5
            var boxWidth = $(".content-wrap").width(); //450
            var boxHeight = boxWidth * 1.22222;
            //            = $(".content-wrap").height(); //550
            var fontSizeH3 = rateH3 * textW;
            var rateH3 = 0.096551724
            var textW = $(".text-wrap").width();
            var fontSizeH4 = rateH4 * textW;   
            var rateH4 = 0.037931034
            var fontSizeP = rateP * textW;     
            var rateP = 0.048275862 

            setTimeout(resizeFn,100);

            function resizeFn(){
                
                rl = (windowWidth-boxWidth)/2;
                windowWidth = $(window).width();
                windowHeight = $(window).height();
                section234Height = windowHeight;
                boxWidth = $(".content-wrap").width();
                boxHeight = boxWidth * 1.22222;

                if(windowHeight < boxHeight+60){
                    section234Height = boxHeight+60;
                    boxTop = 30;
                }
                else{
                    section234Height = windowHeight;
                    boxTop = (windowHeight-boxHeight)/2;
                }
                
                textW = $(".text-wrap").width();
                fontSizeH3 = rateH3 * textW;
                fontSizeH4 = rateH4 * textW;  
                fontSizeP = rateP * textW;    

                $('.text-wrap h3').css({ fontSize:fontSizeH3 });
                $('.text-wrap h4').css({ fontSize:fontSizeH4 });
                $('.text-wrap p').css({ fontSize:fontSizeP });

                $(".content-wrap").css({ top:boxTop, height:boxHeight });
                $(".section234").css({ height:section234Height });
            
                if( windowWidth <= 1170 ){
                    $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:rl-15 },300);
                    $("#section03 .content-wrap").stop().animate({ left:rl-15 },300);  
                }
                else{
                    $("#section02 .content-wrap, #section04 .content-wrap").stop().animate({ right:0 },100);
                    $("#section03 .content-wrap").stop().animate({ left:0 },100);
                }
            };
            
            $(window).resize(function(){
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
            
            setTimeout(resizeFn,100);

            function resizeFn(){
                winH = $(window).innerHeight();
                $(".img-wrap").css({lineHeight : winH + "px"});
                //console.log(winH); -> lineHeight 설정 안 됨 
                //ㄴ> background-position과 lineHeight는 꼭 뒤에 px 단위 써줘야됨
                    //ㄴ> 안 쓰면 줄 높이가 엄청 크게 잡힘
            }
            $(window).resize(function(){
                resizeFn();
            });

            //모달창 구현
            $(".gallery-img-btn").on({
                click : function(e){
                    e.preventDefault();
                    //모달창에 띄울 파일의 번호를 추출
                    fileName = $(this).find("img").attr("src");
                    endNum = fileName.indexOf(".jpg");
                    fileNum = Number(fileName.slice(endNum-2, endNum));
                    // console.log(fileName, fileNum);
                    modalMainSlideFn();
                }
            })
            //모달창 메인 슬라이드
            function modalMainSlideFn(){
                $(".modal").stop().fadeIn(300);
                $(".img-wrap img").stop().fadeOut(0).attr("src","./img/restaurant-img" + fileNum + ".jpg").fadeIn(1000);
            }
            $(".close-btn, .img-wrap").on({
                click : function(e){
                    e.preventDefault();
                    $(".modal").stop().fadeOut(300);
                }
            })

            $(".arrow-right-btn, .img-btn").on({
                click : function(e){
                    e.stopPropagation();
                    fileNum++;
                    fileNum>32? fileNum=25:fileNum;
                    modalMainSlideFn();
                }
            })
            $(".arrow-left-btn").on({
                click : function(){
                    fileNum--;
                    if(fileNum<25){fileNum=32} // 롤링되게
                    modalMainSlideFn();                    
                }
            })
        },
        section09GalleryFn: function(){
            $(".gallery").removeClass("addZoom");
            $(".gallery").css({ height:imgH*rows });
            
            // 초기값 변수
            var hRate = 600/800; 

            var cols = 4;
            var n = $(".gallery li").length; //8
            var rows = Math.ceil(n/cols);
            var winW = $(window).innerWidth();

            var imgW = winW/cols;
            var imgH = imgW*hRate;
            
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
                
                winW = $(window).innerWidth();
                imgW = winW/cols;
                imgH = imgW*hRate;

                console.log("hide",hide);
                console.log("show",show);
                
                //갤러리 숨김 hide();
                for(var i=0;i<hide.length;i++){
                    $(".gallery li").eq(hide[i]).hide(); 
                }
                //갤러리 보이기 show();
                var cnt = -1;
                
                for(i=0;i<rows;i++){ 
                    for(j=0;j<cols;j++){ 
                        cnt++; //0 1 2 3 4 5 6 7
                        if(cnt>=show.length){break;}
                        
                        $(".gallery li").removeClass("addZoom2");//모든 li 칸 초기화
                        $(".gallery li").eq(show[cnt]).show().stop().animate({ top:(imgH*i), left:(imgW*j), width:imgW, height:imgH },300,function(){
                            $(".gallery li").addClass("addZoom2");// 화면이 늘어난 다음에 스케일
                        });
                    }
                }
                $(".gallery").addClass("addZoom");
            } //갤러리 메인 함수 끝

            $(window).resize(function(){
                galleryFn();
            })

            // 갤러리 버튼 이벤트 0-4 (5개)
            $(".gallery-btn").each(function(index){
                $(this).on({
                    click : function(e){
                        e.preventDefault();

                        $(".gallery-btn").removeClass("addNav");
                        $(this).addClass("addNav");

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
            var cnt = 0;
            
            function mainSlideFn(){
                $(".slide-wrap").stop().animate({left:-945.030*cnt},0,function(){
                    if(cnt>2){cnt=2}
                    if(cnt<0){cnt=0}
                    $(".slide-wrap").eq(cnt).stop().animate({left:-945.030*cnt},300)
                    console.log(cnt)
                })
            }
            function prevSlideFn(){
                cnt--;
                mainSlideFn();
            }
            function nextSlideFn(){
                cnt++;
                mainSlideFn();
            }

            $(".prev-btn").on({
                click:function(e){
                    e.preventDefault();
                    if(!$(this).is(":animated")){
                        prevSlideFn();
                    }
                }
            })
            $(".next-btn").on({
                click:function(e){
                    e.preventDefault();
                    if(!$(this).is(":animated")){
                        nextSlideFn();
                    }
                }
            })

        },
        section11Fn:    function(){
            
        },
        section12Fn:    function(){

        },
        section13Fn:    function(){
            
        },
        section14Fn:    function(){
            
        },
        footerFn:       function(){
            
        }
    }; 

//위에서 함수를 만들고 밑에서 함수를 실행한다.

    brando.init();

})(window,document,jQuery);