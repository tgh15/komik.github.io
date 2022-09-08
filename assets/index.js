let page = document.querySelector("#pages");
let count = 0;

let pages = ["pages/front.png", "pages/1.png"];

window.onload = changePage();

function changePage() {
  page.src = pages[count];
}

function prev() {
  if (count <= 0) {
    return false;
  }
  count -= 1;
  console.log(count);
  changePage();
}
function next() {
  if (count >= pages.length - 1) {
    return false;
  }
  count += 1;
  console.log(count);
  changePage();
}
