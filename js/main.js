// 고정 메뉴
let fixed_menu = document.querySelector(".fixed_menu");
let scroll_location;

document.addEventListener("scroll", ()=> {
    scroll_location = document.documentElement.scrollTop;

    if (scroll_location === 0) {
      fixed_menu.style.backgroundColor = `#fff`;
    } else if (scroll_location < 600) {
      fixed_menu.style.backgroundColor = `#fff`;
    } else if (scroll_location < 3800) {
      fixed_menu.style.backgroundColor = `#e6eeed`;
    } else if (scroll_location < 8650) {
      fixed_menu.style.backgroundColor = `#fff`;
    } else if (scroll_location < 9700) {
      fixed_menu.style.backgroundColor = `#e6eeed`;
    } else if (scroll_location < 10800) {
      fixed_menu.style.backgroundColor = `#fff`;
    } else {
      fixed_menu.style.backgroundColor = `#e6eeed`;
    }
});

// 위로가기 버튼
let top_button = document.querySelector("#top");

top_button.addEventListener("click", e=> {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

// 이미지슬라이드
let imageslide;
let prev;
let next;
let locate;
let page_width;

imageslide = document.querySelector(".imgslide_group");
prev = document.querySelector(".imgslide_prev");
next = document.querySelector(".imgslide_next");
locate = -100;
page_width = 100;

imageslide.style.left = `${locate}vw`;

function imgslide_ani() {
  if (locate === -1000) {
    locate = 0; 
    imageslide.style.left = `${locate}vw`; 
    imageslide.style.transition = `0s`;
  } else {
    locate = locate - 100; 
    imageslide.style.left = `${locate}vw`; 
    imageslide.style.transition = `1s`;
  }
}
let slide_ani = setInterval(imgslide_ani, 5000);

prev.addEventListener("mouseup", ()=> {
  imageslide.style.animationName = "none";
  if (locate !== 0) {
      locate = locate + 100; 
      imageslide.style.left = `${locate}vw`; 
      imageslide.style.transition = `1s`;
  }
  clearInterval(slide_ani);
  slide_ani = setInterval(imgslide_ani, 5000);
})

prev.addEventListener("mousedown", ()=> {
  if (locate === 0) {
      locate = -1000; 
      imageslide.style.left = `${locate}vw`; 
      imageslide.style.transition = `0s`;
  }
})

next.addEventListener("mouseup", ()=> {
  imageslide.style.animationName = "none";
  if (locate !== -1000) {
      locate = locate - 100; 
      imageslide.style.left = `${locate}vw`; 
      imageslide.style.transition = `1s`; 
  }
  clearInterval(slide_ani);
  slide_ani = setInterval(imgslide_ani, 5000);
})

next.addEventListener("mousedown", ()=> {
  if (locate === -1000) {
      locate = 0; 
      imageslide.style.left = `${locate}vw`; 
      imageslide.style.transition = `0s`;
  }
})

// 방 탭메뉴
let room1 = document.querySelector(".room1");
let room2 = document.querySelector(".room2");
let room_button = document.querySelectorAll(".room_button");
let isometric2F = document.querySelector(".isometric2F");

room_button[0].addEventListener("mouseup", ()=> {
  room1.style.display = "block";
  room2.style.display = "none"
  isometric2F.style.display = "none";
  room_button[0].style.background = "linear-gradient(#98cfcb 0%, #b6d4d2 80%)";
  room_button[1].style.background = "#ddd";
})
room_button[1].addEventListener("mouseup", ()=> {
  room1.style.display = "none"
  room2.style.display = "block";
  isometric2F.style.display = "block";
  room_button[0].style.background = "#ddd";
  room_button[1].style.background = "linear-gradient(#98cfcb 0%, #b6d4d2 80%)";
})

// checkbox radio버튼처럼 바꾸기
let faq_qustion = document.querySelectorAll(".faq_qustion");

function doOpenCheck(chk){
  let obj = document.getElementsByName("faq");
  for(var i=0; i<obj.length; i++){
      if(obj[i] != chk){
          obj[i].checked = false;
      }
  }
}
let click_count = [0, 0, 0, 0];
let faq_height = ["600px", "400px", "400px", "450px"];
let faq_height2 = []

let faq = document.querySelector(".faq");
for (let i = 0; i < faq_qustion.length; i++) {
  faq_qustion[i].addEventListener("click", e=> {
    if (window.innerWidth > 767) {
      faq.style.height = "670px";
    } else {
      faq.style.height = faq_height[i];
      click_count[i] += 1;
      if (click_count[i] % 2 == 0) {
        faq.style.height = "320px";
      }
    }
  })
}

// 아이소매트릭 부분
let map_marker = document.querySelectorAll(".map_marker");
let room_imgslide_mobile = document.querySelectorAll(".room_imgslide_mobile");

for (let i = 0; i < map_marker.length; i++) {
  map_marker[i].addEventListener("click", e=> {
    for (let j = 0; j < room_imgslide_mobile.length; j++) {
      room_imgslide_mobile[j].style.display = "none";
    }
    room_imgslide_mobile[i].style.display = "block";
  })
}

for (let i = 0; i < map_marker.length; i++) {
  let map_marker_img = map_marker[i].querySelector("img:nth-of-type(1)");
  let map_marker_text = map_marker[i].querySelector("span");

  map_marker[i].addEventListener("mouseover", e=> {
    map_marker_img.style.top = "-7px";
    map_marker_img.setAttribute("src", "images/map_marker_click.png");
    // map_marker_text.style.color = "#89c5c1";
  })
  map_marker[i].addEventListener("mouseout", e=> {
    map_marker_img.style.top = "0px";
    map_marker_img.setAttribute("src", "images/map_marker.png");
    // map_marker_text.style.color = "#000";
  })
}

if (window.innerWidth > 1199) {
  new daum.roughmap.Lander({
    "timestamp" : "1662456601561",
    "key" : "1bmwp",
    "mapWidth" : "1200",
    "mapHeight" : "500"
  }).render();
} else {
	new daum.roughmap.Lander({
		"timestamp" : "1662512015173",
		"key" : "2bn2j",
		"mapWidth" : "380",
		"mapHeight" : "280"
	}).render();
}