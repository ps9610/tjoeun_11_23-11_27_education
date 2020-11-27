;(function(window,document,$,undefined){

    var brando = {
        init:       function(){
            var that = this;

                that.headerFn();
                that.section01Fn();
                that.section234Fn();
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

        },
        headerFn:   function(){
            var winW = $(window).width();
            var url = null;  
            var t=0;  
            
                //Smooth Scrolling Event : <a href= #해시태그 가져와서 부드럽게 해당 섹션으로 이동
                $('.smooth-btn').on({
                    click:  function(event){
                        event.preventDefault();
                        url = $(this).attr('href');
                        $('html,body').stop().animate({scrollTop: $( url ).offset().top  }, 600);
                        $('.mobile-menu').hide();
                        $('.mobile-btn').removeClass('addClose');                        
                    }
                });

                

                $(window).scroll(function(){
                    if( $(window).scrollTop() >= 30 ) {
                        $('#header').addClass('addMobile');
                        $('.goTop').addClass('addGotop');
                    }
                    else{
                        $('#header').removeClass('addMobile');
                        $('.goTop').removeClass('addGotop');
                    }
                });


                $(window).resize(function(){
                    winW = $(window).width();                    
                    if( winW>990 ){
                        t=0;
                        $('.mobile-btn').removeClass('addClose');
                        $('.mobile-menu').stop().slideUp(0);
                    }
                    else{
                        t=1; 
                    }
                });

                $('.mobile-btn').on({
                    click:  function(event){
                        event.preventDefault();
                        $(this).toggleClass('addClose');
                        if(t==0){
                            t=1;
                            $('.mobile-menu').stop().animate({right:0},400);
                        }
                        else{
                            t=0;
                            $('.mobile-menu').stop().animate({right:-100+'%'},400);
                        }
                        
                        
                    }
                });

        },
        section01Fn: function(){
            var cnt = 0;
            var n = $('.slide').length-1;  //3=4-1
            var winH = 969;
            var imgH = $('.hungry img').height();
            var imgTop = (winH-imgH)/2;

                setTimeout(resizeFn,100);
                function resizeFn(){
                    winH = $(window).height();
                           $('#section01').css({ height:winH });
                           imgH = $('.hungry').height();
                           imgTop = (winH-imgH)/2;
                           $('.hungry').css({ top:imgTop });
                }

                $(window).resize(function(){
                    resizeFn();
                });

                //Smooth Scrolling Event
                $('.arrow-down-btn').on({
                    click:  function(){
                        $('html,body').stop().animate({ scrollTop: $('#section02').offset().top }, 1000);
                    }
                });


                /////////////////////////////////////////////////////////
                // 페이드 인아웃 효과 슬라이드
                /////////////////////////////////////////////////////////
                //메인 다음 슬라이드
                //포인트 : 현재 슬라이드 위에 다음 슬라이드가 서서히 나타난다.
                function mainNextSlideFn(){
                    $('.slide').css({zIndex:1});
                    //현재슬라이드 에]첫번째
                    $('.slide').eq(cnt==0?n:cnt-1).css({zIndex:2});
                    //다음슬라이드 예]두번째
                    $('.slide').eq(cnt).css({zIndex:3}).animate({opacity:0},0).animate({opacity:1},1000); 
                                                    //페이드 인 효과   
                }

                
                //메인 이전 슬라이드
                //포인트 : 현재 슬라이드를 사라지게하면 이전 슬라이드 보인다.
                function mainPrevSlideFn(){
                    $('.slide').css({zIndex:1}).animate({opacity:1},0); //초기화
                    //이전 슬라이드
                    $('.slide').eq(cnt).css({zIndex:2});
                    //현재 슬라이드를 사라지게하면 이전 슬라이드가 보인다.
                    $('.slide').eq(cnt==n?0:cnt+1).css({zIndex:3}).animate({opacity:1},0).animate({opacity:0},1000);
                }

                //다음 카운트 함수
                function nextCountFn(){
                    cnt++; //0 1 2
                    if(cnt>n){cnt=0;}
                    mainNextSlideFn();
                }
                //이전 카운트 함수
                function prevCountFn(){
                    cnt--; //2 1 0 2 1 0
                    if(cnt<0){cnt=n;}
                    mainPrevSlideFn();
                }


                $('#section01').swipe({
                    swipeLeft:  function(){
                        if( !$('.slide').is(':animated') ){
                            nextCountFn(); //다음카운트
                        }
                    },
                    swipeRight: function(){
                        if( !$('.slide').is(':animated') ){
                            prevCountFn(); //이전카운트
                        }
                    }
                });


                setInterval(nextCountFn,3000);




        },
        section234Fn: function(){

            var winH = $(window).height();  //969
            var sectionH = winH;
            var boxW = $('.content-wrap').width();  //450
            var boxH = boxW * 1.222222222; //550
            var boxTop = (winH-boxH)/2;  // 209.5.=(969-550)/2
            var winW = $(window).width();  //969
            var x = (winW-boxW)/2;

            var rateH3 = 0.096551724;
            var rateH4 = 0.037931034;
            var rateP  = 0.048275862;

            var textW = $('.text-wrap').width();
            var fontSizeH3 = rateH3 * textW;
            var fontSizeH4 = rateH4 * textW;
            var fontSizeP = rateP * textW;


                setTimeout(resizeFn,100);

                function resizeFn(){
                    //창높이기준으로 섹션높이 변경
                    winH = $(window).height();  //969
                    sectionH = winH;  //창너비가 세션높이
                    //박스너비에 따라서 비율로 높이 변경
                    boxW = $('.content-wrap').width();  //450
                    boxH = boxW * 1.222222222; //550   
                    //창너비의 따라서 X(LEFT RIGHT) 위치 가운데 정렬 계산 
                    winW = $(window).width();  //969
                    x = (winW-boxW)/2;                                     
                    // boxTop = (winH-boxH)/2;  // 209.5.=(969-550)/2
                    //박스높이보다 창높이가 작을 때 섹션높이는 박스 높이로 설정 됨.
                    //그러니 박스의 탑값은 창높이랑 박스높이랑 같기 때문에 30으로 설정한다.
                    if( winH < (boxH + 60) ){
                        sectionH = boxH + 60;
                        boxTop = 30;
                    }
                    else{
                        sectionH = winH;
                        boxTop = (winH-boxH)/2;
                    }            


                    //폰트 사이즈 반응형                    
                    textW = $('.text-wrap').width();
                    fontSizeH3 = rateH3 * textW;
                    fontSizeH4 = rateH4 * textW;
                    fontSizeP = rateP * textW;

                    $('.text-wrap h3').css({ fontSize:fontSizeH3 });
                    $('.text-wrap h4').css({ fontSize:fontSizeH4 });
                    $('.text-wrap p').css({ fontSize:fontSizeP });

                    //박스 탑, 박스 높이
                    $('.content-wrap').css({ top:boxTop, height:boxH });
                    
                    //섹션의 높이
                    $('.section234').css({ height:sectionH });                
                    
                    if( winW <= 1170 ){
                        $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({ right:x-15 },300);
                        $('#section03 .content-wrap').stop().animate({ left:x-15 },300);   
                    }
                    else{
                        $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({ right:0 },200);
                        $('#section03 .content-wrap').stop().animate({ left:0 },200);    
                    }




                }
               
                $(window).resize(function(){
                    resizeFn();
                });

        },    
        section05Fn: function(){

        },
        section06Fn: function(){

        },
        section07Fn: function(){

        },
        section08Fn: function(){

        },
        section09Fn: function(){
            var fileName = null;
            var endNum  = null;
            var fileNum  = null;
            var winH = $(window).innerHeight();
                

                setTimeout(resizeFn,100);

                function resizeFn(){
                    winH = $(window).innerHeight();
                     
                    //lineHeight, backgroundPosition등은 반드시 'px' 단위를 넣어준다.
                    $('.img-wrap').css({ lineHeight:winH + 'px' });
                }    


                $(window).resize(function(){
                    resizeFn();
                });


                $('.gallery-img-btn').on({
                    click:  function(event){
                        event.preventDefault();
                        
                        //파일번호
                        fileName = $(this).find('img').attr('src');
                        endNum  = fileName.indexOf('.jpg'); //search()
                        fileNum = Number(fileName.slice(endNum-2,endNum));

                        //모달창 메인 슬라이드
                        modalSlidefn();
                    }
                });

                function modalSlidefn(){
                    $('.modal').stop().fadeIn(300);
                    $('.img-wrap  img').stop().fadeOut(0).attr('src','./img/restaurant-img' + fileNum + '.jpg').fadeIn(1000);
                }


                $('.close-btn, .img-wrap').on({
                    click:  function(){
                        $('.modal').stop().fadeOut(300);  
                    }
                });


                $('.arrow-right-btn, .img-btn').on({
                    click:  function(event){
                        event.stopPropagation();

                        fileNum++;
                        if(fileNum>32){
                            fileNum=25;
                        }
                        modalSlidefn();
                    }
                });

                $('.arrow-left-btn').on({
                    click:  function(){
                        fileNum--;
                        if(fileNum<25){
                            fileNum=32;
                        }
                        modalSlidefn();
                    }
                });



        },
        section09GalleryFn: function(){

            var hRate = 600/800; //이미지높이/이미지너비 초기 고정된 값 상수 값(const)
            var winW = $(window).innerWidth();
            var cols = 4; //칸수 해상도별 변수 사용 예정
            var n = $('.gallery li').length; //8
            var rows = Math.ceil(n/cols); //줄수=올림(갤러리갯수/칸수)            
            var imgW = winW/cols; //창너비/칸수
            var imgH = imgW*hRate; //이미지너비*이미지높이비율값

            var hide = []; //초기 값 감추기(hidden) 없음 
            var show = [0,1,2,3,4,5,6,7]; //초기 값은 8개 보이기(show)

                setTimeout(galleryFn,100);
                
                function galleryFn(){
                    
                    winW = $(window).innerWidth();
                    
                    if( winW > 1200 ){
                        cols = 4; //칸수 해상도별 변수 사용 예정
                    }
                    else if( winW <= 1200 &&  winW > 980 ){ //981~1200
                        cols = 3; //칸수 해상도별 변수 사용 예정
                    }
                    else if( winW <= 980 &&  winW > 760){ // 761~980
                        cols = 2; //칸수 해상도별 변수 사용 예정
                    }
                    else if( winW <= 760 && winW >=0 ){ //0~760
                        cols= 1; //칸수 해상도별 변수 사용 예정
                    }
                   
                    // n = $('.gallery li').length; //목록의 갯수
                    n = show.length; //클릭한 버튼 내용 보이기 이미지 갯수
                    rows = Math.ceil(n/cols); //줄수=올림(갤러리갯수/칸수)

                    imgW = winW/cols; //창너비/칸수
                    imgH = imgW*hRate; //이미지너비*이미지높이비율값
                    
                        $('.gallery').removeClass('addZoom');
                        $('.gallery li').removeClass('addZoom2');

                        $('.gallery').css({ height:imgH*rows }) //이미지높이*줄수

                        //갤러리 숨김 hide();                        
                        for(var i=0; i<hide.length; i++){
                            $('.gallery li').eq(hide[i]).hide();
                        }
                      

                        //갤러리 보이기 show();
                        var cnt=-1;
                        for(i=0;i<rows;i++){
                            for(j=0;j<cols;j++){
                                cnt++; //0 1 2 3 4 5 ..
                                if(cnt>=show.length) //보이는 갯수에 따라서 변경
                                break;     
                                $('.gallery li').eq(show[cnt]).show().stop().animate({ top:(imgH*i), left:(imgW*j), width:imgW, height:imgH },300, function(){
                                    $('.gallery li').addClass('addZoom2');
                                });
                            }
                        }  

                        $('.gallery').addClass('addZoom');  

                } //갤러리 메인 함수 끝


                $(window).resize(function(){
                    galleryFn();
                });

                //갤러리 버튼 이벤트 0 ~ 4(5개)
                $('.gallery-btn').each(function(index){

                    $(this).on({
                        click:  function(event){
                            event.preventDefault();

                            $('.gallery-btn').removeClass('addNav');
                            $(this).addClass('addNav');

                            switch(index){
                                case 0:
                                    hide = [];
                                    show = [0,1,2,3,4,5,6,7];
                                    break;
                                case 1:
                                    hide = [0,2];
                                    show = [1,3,4,5,6,7]
                                    break;
                                case 2:
                                    hide = [1,3,4,5];
                                    show = [0,2,6,7];
                                    break;
                                case 3:
                                    hide = [0,2,5];
                                    show = [1,3,4,6,7];
                                    break;
                                default:
                                    hide = [0,1,3,6];
                                    show = [2,4,5,7];
                            }

                            galleryFn(); //갤러리 메인함수 호출 실행

                        }
                    });

                });

        },
        section10Fn: function(){
            var cnt=0;
            //슬라이드 좌우이동 구현
            //첫번째에서는 좌측으로 더이상 이동 안함 0
            //세번째에서는 우측으로 더이상 이동 안함 2
            
            //1 메인함수
            function mainSlideFn(){
                $('.s10slide-wrap').stop().animate({left:(-975*cnt)},1000,'easeOutExpo');
            }

            //2-1 다음
            function nextCountFn(){
                cnt++;
                    if(cnt>2)
                    cnt=2;
                    mainSlideFn();
            }
            //2-2 이전
            function prevCountFn(){
                cnt--;
                    if(cnt<0)
                    cnt=0;
                    mainSlideFn();
            }
            
            //3-1 다음 클릭 이벤트
            $('.next-btn').on({
                click:  function(){
                    nextCountFn();
                }
            });
            //3-2 이전 클릭 이벤트
            $('.prev-btn').on({
                click:  function(){
                    prevCountFn();
                }
            });

            //터치 스와이프
            $('.s10slide-wrap').swipe({
                swipeLeft:function(){
                    nextCountFn();
                },
                swipeRight:function(){
                    prevCountFn();
                }
            });


        },
        section11Fn: function(){
            //반응형으로 제작    
            //좌측의 li 박스 높이를 이용 
            //우측의 li 박스 높이를 설정


        },
        section12Fn: function(){

        },
        section13Fn: function(){

        },        
        section14Fn: function(){

        }        
    };

    brando.init();


})(window,document,jQuery);