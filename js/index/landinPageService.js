let indexService = document.querySelector('.indexService');


let pcNavElementListSer =document.querySelectorAll('.pcNavElement');
let pcNavSer = document.querySelector('.pcNav');
let navDotListSer = document.querySelectorAll('.navDot');
let hamburgerBoxSer = document.querySelector('.hamburgerBox');

let mobileNavSer = document.querySelector('.mobileNav');
let pcNavElementTextList = document.querySelectorAll('.pcNavElementText');

//navLogo
let navLogoWSer = document.querySelector('.navLogoW');
let navLogoBSer = document.querySelector('.navLogoB');


// nav change color height
let navChangeColorH=false;
//text opacity

let indexServiceTitleBox = document.querySelector('.indexServiceTitleBox');
// serving Content
let servingBoxList = document.querySelectorAll('.servingBox');

let landingVideoTl5 = gsap.timeline({
    scrollTrigger:{
        trigger:indexService,
        start:'-1% top',
        end:'-1% 80%',
        scrub:true,
        // markers:true,
        onEnter:landinPageService_in ,

        onEnterBack: landinPageService_out,

    }
});

let landingVideoTl6 = gsap.timeline({
    scrollTrigger:{
        trigger:indexService,
        start:'10% top',
        end:'10% 80%',
        scrub:true,
        markers:true,
        onEnter:landinPageServiceContent_in ,

        onEnterBack: landinPageServiceContent_Out,

    }
});

function landinPageService_in(){
    indexService.classList.add('indexBackWhite');

    hamburgerBoxSer.classList.add('hamburgerBoxChangeColorW');

    //text opacity
    indexServiceTitleBox.classList.add('textOpacity');

    //dot changeColor
    navDotListSer.forEach((e) => {
        e.classList.add("navDotChangeColorW");
    });
    //navLogo ChangeColor
    navLogoWSer.classList.remove('navLogoOpacity');
    navLogoBSer.classList.add('navLogoOpacity');
    //nav text ChangeColor
    pcNavElementTextList.forEach((e) => {
        e.classList.add('textChangeColorB');
    })

    // nav change color height
    navChangeColorH=true;
};
function landinPageService_out(){
    indexService.classList.remove('indexBackWhite');



    hamburgerBoxSer.classList.remove('hamburgerBoxChangeColorW');

    //text opacity
    indexServiceTitleBox.classList.remove('textOpacity');

        //dot changeColor
        navDotListSer.forEach((e) => {
            e.classList.remove("navDotChangeColorW");
        });
        //navLogo ChangeColor
        navLogoWSer.classList.add('navLogoOpacity');
        navLogoBSer.classList.remove('navLogoOpacity');
        //nav text ChangeColor
        pcNavElementTextList.forEach((e) => {
            e.classList.remove('textChangeColorB');
        })

    // nav change color height
    navChangeColorH=false;
}

function landinPageServiceContent_in(){


    //servinContent display
    servingBoxList.forEach((e) => {
        e.classList.add("servingBoxDisplay");
    });


};
function landinPageServiceContent_Out(){


    //servinContent display
    servingBoxList.forEach((e) => {
        e.classList.remove("servingBoxDisplay");
    });



};


let hamburgerBoxToggleSer =false;

hamburgerBoxSer.addEventListener("click",()=>{

    if(navChangeColorH){
        if(!hamburgerBoxToggleSer){


            hamburgerBoxToggleSer=true;
      
    
            hamburgerBoxSer.classList.remove('hamburgerBoxChangeColorW');
            //dot changeColor
            navDotListSer.forEach((e) => {
                e.classList.remove("navDotChangeColorW");
            });
            //navLogo ChangeColor
            navLogoWSer.classList.add('navLogoOpacity');
            navLogoBSer.classList.remove('navLogoOpacity');

            //nav text ChangeColor
            pcNavElementTextList.forEach((e) => {
                e.classList.remove('textChangeColorB');
            })
    
    
        }else{
            hamburgerBoxToggleSer=false;
    
            hamburgerBoxSer.classList.add('hamburgerBoxChangeColorW');
            //dot changeColor
            navDotListSer.forEach((e) => {
                e.classList.add("navDotChangeColorW");
            });
            //navLogo ChangeColor
            navLogoWSer.classList.remove('navLogoOpacity');
            navLogoBSer.classList.add('navLogoOpacity');

            //nav text ChangeColor
            pcNavElementTextList.forEach((e) => {
                e.classList.add('textChangeColorB');
            })
        }
    }

})