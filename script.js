// Change images in website

function updateDisplay(e) {
  console.log(e);
  for (const child of e.children) {
    console.log(child.innerHTML);
  }
}

function toggleMenu() {
    var menu = document.getElementById("menuItems");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

const imageURLs = ["https://www.vinylmeplease.com/cdn/shop/products/everything_i_know_about_love_store.jpg?q=60&auto=format&w=926",
    "https://squarecatvinyl.com/cdn/shop/files/Screenshot_2023-08-11_at_11.17.55_AM_022b6110_thumbnail_1024.webp?v=1696525110"
];


const albumImg = document.getElementById('albumImg');
let idx = 0;
function changeAlbumImage() {
    console.log(idx);
    idx = (idx + 1) % imageURLs.length;
    albumImg.src = imageURLs[idx];
}