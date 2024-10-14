let input = document.getElementById("mySearch");
input.addEventListener("keyup", function () {
  let filter = input.value.toUpperCase();
  let ul = document.getElementById("menu");
  let li = ul.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});

// function filterMenu() {
//   let input = document.getElementById("mySearch");
//   let filter = input.value.toUpperCase();
//   let ul = document.getElementById("menu");
//   let li = ul.getElementsByTagName("li");

//   for (i = 0; i < li.length; i++) {
//     let a = li[i].getElementsByTagName("a")[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
