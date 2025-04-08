window.addEventListener("load" , ()=>{
    const grid = new Isotope("section", {
        itemSelectior: "article" ,
        columnWidth: "article" ,
        transitionDuration: "0.5s"
    });
    const btns = document.querySelectorAll("main ul li");

    for(let el of btns){
        el.addEventListener("click", e=>{
            e.preventDefault();

            const sort = e.currentTarget.querySelector("a").getAttribute("href");

            grid.arrange({
                filter : sort
            });

            for(let el of btns){
                el.classList.remove("on");
            }

            e.currentTarget.classList.add("on");
        })
    }
});

let close2 = document.querySelector(".close2");
let button = document.querySelectorAll(".button");
let skill = document.querySelector(".skill");
let article = document.querySelectorAll("article");
let slide_wrap = document.querySelector(".slide_wrap");
let main = document.querySelector("main");
let content = document.querySelectorAll(".content");
let detail = document.querySelectorAll(".detail");

let close_function = function close_content() {
    for (let j = 0; j < content.length; j++) {
        content[j].style.display = "none";
    }
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", e=> {
        skill.style.display = "none"
        skill.style.opacity = "0";
    })
}
button[5].addEventListener("click", e=> {
    skill.style.display = "block"
    skill.style.opacity = "1";
})

let close_button = document.querySelector(".close");

for (let i = 0; i < detail.length; i++) {
    detail[i].addEventListener("click", e=> {
        slide_wrap.style.left = "0%";
        for (let j = 0; j < content.length; j++) {
            content[j].style.display = "none";
        }
        content[i].style.display = "block";
        close_button.style.display = "block";
        content_wrap.scrollTo({top: 0});
    })
}
close_button.addEventListener("click", e=> {
    slide_wrap.style.left = "-100%";
    close_button.style.display = "none";
    content_wrap.scrollTo({top: 0});
})

let content_wrap = document.querySelector(".content_wrap");

close2.addEventListener("click", e=> {
    slide_wrap.style.left = "-100%";
    main.style.display = "block";
    close_button.style.display = "none";
    content_wrap.scrollTo({top: 0});
    // window.scrollTo(0, 1000);
    // let close_function = function close_content() {
    //     for (let j = 0; j < content.length; j++) {
    //         content[j].style.display = "none";
    //     }
    // }
})