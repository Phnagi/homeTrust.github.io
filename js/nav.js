let pcNavElementList =document.querySelectorAll('.pcNavElement');
let pcNav = document.querySelector('.pcNav');
let navDotList = document.querySelectorAll('.navDot');
let hamburgerBox = document.querySelector('.hamburgerBox');

let mobileNav = document.querySelector('.mobileNav');


//navLogo
let navLogoW = document.querySelector('.navLogoW');
let navLogoB = document.querySelector('.navLogoB');

reLoadNav();
window.addEventListener('resize',reLoadNav)

function reLoadNav(){
    if(window.innerWidth < 850){
        pcNavElementList.forEach((e) => {
            e.style.display="none";
        });
        pcNav.style.justifyContent="flex-end"
    }else{
        pcNavElementList.forEach((e) => {
            e.style.display="block";
        });
        pcNav.style.justifyContent="space-between"
    }
}

let navDotAniHandle=true;
let hamburgerBoxToggle=false;

hamburgerBox.addEventListener("click",()=>{
    if(!hamburgerBoxToggle){
        hamburgerBoxToggle=true;
        navDotAniHandle=false;

        mobileNav.classList.add('mobileNavAct')
        // hamburgerBox.classList.add('hamburgerBoxChangeColorW');
        //dot changeColor
        // navDotList.forEach((e) => {
        //     e.classList.add("navDotChangeColorW");
        // });
        //navLogo ChangeColor
        // navLogoW.classList.remove('navLogoOpacity');
        // navLogoB.classList.add('navLogoOpacity');
    }else{
        hamburgerBoxToggle=false;
        navDotAniHandle=true;

        mobileNav.classList.remove('mobileNavAct')
        // hamburgerBox.classList.remove('hamburgerBoxChangeColorW');
        //dot changeColor
        // navDotList.forEach((e) => {
        //     e.classList.remove("navDotChangeColorW");
        // });
        //navLogo ChangeColor
        // navLogoW.classList.add('navLogoOpacity');
        // navLogoB.classList.remove('navLogoOpacity');

    }
})


hamburgerBox.addEventListener("mouseover",()=> {

    if(navDotAniHandle){
        let DotTimes =0;
        navDotList.forEach((e) => {
            e.style.animation=`bounce 1s ${DotTimes}s`;
            DotTimes+=0.2;
        });
    }


})
hamburgerBox.addEventListener("mouseleave",()=> {

    if(navDotAniHandle){
        let DotTimes =0;
        navDotList.forEach((e) => {
            e.style.animation=`none`;
            DotTimes+=0.2;
        });
    }

})