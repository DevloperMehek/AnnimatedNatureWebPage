var data = [
    { left: "https://media.istockphoto.com/id/512212328/photo/shivering-beautifful-woman-while-snowing.jpg?s=612x612&w=0&k=20&c=Um8Ssi8CG5rIKGwCjYvZVVDVtU3uzqXyguj4MZo60QA=", right: "https://media.istockphoto.com/id/1419168216/photo/portrait-of-a-happy-man-and-woman-on-a-romantic-winter-vacation.jpg?s=612x612&w=0&k=20&c=icJYT5zw29fTj51bZVlONfmlZkYRQ30bMjaJs1Senj4=", center: "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60s" },
    { left: "https://images.unsplash.com/photo-1524253860834-0e02422248bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTd8fHN1bW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", center: "https://images.unsplash.com/photo-1572246538688-3f326dca3951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3VtbWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", right: "https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1bW1lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" },
    { left: "https://media.istockphoto.com/id/1171880735/photo/young-girl-with-colorful-umbrella-checking-rain.jpg?s=612x612&w=0&k=20&c=AHxo1_tSps3832RHA21rTZxr5L6jPFP0824hJs8HCQ4=", center: "https://media.istockphoto.com/id/615425152/photo/beautiful-landscape-of-shimla.jpg?s=612x612&w=0&k=20&c=9hsbbiU4A1bmzAHwfXevwQ6X0bXTxMkWb-GHjXRvfhc=", right: "https://media.istockphoto.com/id/1354250483/photo/young-boy-standing-in-front-of-a-waterfall.jpg?s=612x612&w=0&k=20&c=Eo7R8q1PtS83uWLs-R3nYwkon1Cn2_aJZ58Ogp45Nwk=" }
]


var winter = document.querySelector("#winter");
var summer = document.querySelector("#summer");
var mosoon = document.querySelector("#mosoon");



var clutter1 ="";
var clutter2 ="";
var clutter3 ="";

winter.addEventListener("click", function () {
    winter.style.color = "#fff";
    summer.style.color = "transparent";
    monsoon.style.color = "transparent";
    clutter2 ="";
    clutter3 ="";
    clutter1 =
        `
        <img id="left" src="${data[0].left}" alt="">
        <img id="center" src="${data[0].center}" alt="">
        <img id="right" src="${data[0].right}" alt="">
        ` 

    document.querySelector("#imgBox").innerHTML =clutter1;
    gsap.to("#center", {
        ease: Expo.easeInout,
        width: "250px",
        duration: 2,
        transformOrigin: "50% 50% 0px",
        rotate:"10deg"
    })
    gsap.to("#left", {
        delay: 2,
        ease: Expo.easeInout,
        width: "150px",
        left: "10%",
        duration: 2,
        transformOrigin: "50% 50% 0px",
        rotate:"-10deg"
    })
    gsap.to("#right", {
        delay: 2,
        ease: Expo.easeInout,
        width: "150px",
        left: "75%",
        duration: 2,
        transformOrigin: "50% 50% 0px",
        rotate:"-10deg"
    })

})



summer.addEventListener("click", function () {
    summer.style.color = "#fff";
    monsoon.style.color = "transparent";
    winter.style.color = "transparent";
    clutter1 ="";
    clutter3 ="";
    clutter2 =
        `
    <img id="left" src="${data[1].left}" alt="">
    <img id="center" src="${data[1].center}" alt="">
    <img id="right" src="${data[1].right}" alt="">
    `

    document.querySelector("#imgBox").innerHTML = clutter2
    gsap.to("#center", {
        ease: Expo.easeInout,
        width: "250px",
        duration: 2,
        transformOrigin: "50% 50% 0px",
        rotate:"10deg"
    })
    gsap.to("#left", {
        delay: 2,
        ease: Expo.easeInout,
        width: "150px",
        left: "10%",
        duration: 2,
        transformOrigin: "50% 50% 0px",
        rotate:"-10deg"
    })
    gsap.to("#right", {
        delay: 2,
        ease: Expo.easeInout,
        width: "150px",
        left: "75%",
        duration: 2,
        transformOrigin: "50% 50% 0px",
        rotate:"-10deg"

    })
    
})

monsoon.addEventListener("click", function () {
    monsoon.style.color = "#fff";
    winter.style.color = "transparent";
    summer.style.color = "transparent";
    clutter2 ="";
    clutter1 ="";
    clutter3 =
        `
    <img id="left" src="${data[2].left}" alt="">
    <img id="center" src="${data[2].center}" alt="">
    <img id="right" src="${data[2].right}" alt="">
    `

    document.querySelector("#imgBox").innerHTML = clutter3
    gsap.to("#center", {
        ease: Expo.easeInout,
        width: "250px",
        duration: 2,
        transformOrigin: "50% 50% 0px",
        rotate:"10deg"
    })
    gsap.to("#left", {
        delay: 2,
        ease: Expo.easeInout,
        width: "150px",
        left: "10%",
        duration: 2,
        transformOrigin: "50% 50% 0px",
        rotate:"-10deg"
    })
    gsap.to("#right", {
        delay: 2,
        ease: Expo.easeInout,
        width: "150px",
        left: "75%",
        duration: 2,
        transformOrigin: "50% 50% 0px",
        rotate:"-10deg"
    })
    
})



