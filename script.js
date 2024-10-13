function valueSetters(){
    gsap.set("#nav a",{y:"-100%",opacity:0});
    gsap.set("#home span .child",{y:"100%"});
    gsap.set("#home .row img",{opacity:0});

    document.querySelectorAll("#Visual>g").forEach(function (e) {
        const paths = e.querySelectorAll('path, polyline');
        paths.forEach(function(path) {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length + 'px';
            path.style.strokeDashoffset = length + 'px';
        });
    });
}


function revealToSpan(){
    document.querySelectorAll(".reveal").forEach(function(elem){
    console.log("script is workng");
    var parent=document.createElement("span");
    var child=document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML=elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML="";
    elem.appendChild(parent);
});
}

function loaderAnimation(){
    var tl=gsap.timeline();


tl.from("#loader .child span",{
    x:150,
    opacity:0,
    delay:.3,
    duration:1.5,
    stagger:.1,
    ease:Power3.easeInOut,
})
.to("#loader .parent .child span",{
    y: "-100%",
    stagger:0.1,
    duration: 0.6,
    ease: Expo.easeInOut
})
.to("#loader .parent .child",{
    y: "-100%",
    stagger:0.1,
    delay:-0.8,
    duration: 0.3,
    ease: Expo.easeInOut
})
.to("#loader",{
    height:0,
    duration:1,
    ease:Expo.easeOut,
})
.to("#green",{
    height:"100%",
    delay:-1,
    top:0,
    duration:1,
    ease:Expo.easeOut,
})
.to("#green",{
    height:"0%",
    delay:-0.7,
    duration:1,
    ease:Expo.easeOut,
    onComplete:function(){
        animateHomepage();
    }
})
}

function animateSvg() {
    

    gsap.to("#Visual>g>g>path:not(#dot_path), #Visual>g>g>polyline", {
        strokeDashoffset: 0,
        duration: 1,
        ease: "Power2.inOut",
        stagger:0.2,
        onComplete: function() {
            // After the letters are done, animate the dot
            const dotPath = document.querySelector('#dot_path');
            const dotLength = dotPath.getTotalLength();
            dotPath.style.strokeDasharray = dotLength + 'px';
            dotPath.style.strokeDashoffset = dotLength + 'px';
            
            // Animate the dot to appear
            gsap.to(dotPath, {
                strokeDashoffset: 0,
                duration: 1,
                ease: Expo.easeInOut,
                delay: 0.1 
            });
        }
    });
}

function animateHomepage(){

    var tl=gsap.timeline();
    tl.to("#nav a",{
        y:0,
        opacity:1,
        stagger:0.05,
        ease:Expo.easeInOut
    }).to("#home span .child",{
        y:0,
        stagger:0.1,
        ease:Expo.easeInOut,
        duration:1,
    }).to("#home .row img",{
        opacity:1,
        ease:Expo.easeInOut,
        onComplete:function(){
            animateSvg();
        }
    })
}

revealToSpan();
valueSetters();
loaderAnimation();

