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

revealToSpan();

var tl=gsap.timeline();


tl.from(".child span",{
    x:150,
    opacity:0,
    delay:.3,
    duration:1.5,
    stagger:.1,
    ease:Power3.easeInOut,
})
.to(".parent .child span",{
    y: "-100%",
    stagger:0.1,
    duration: 0.6,
    ease: Expo.easeInOut
})
.to(".parent .child",{
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
})