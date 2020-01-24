function openNav() {
  var element = document.querySelector(".drawer-menu");

  if (element.classList.contains('show')) {
    document.querySelector(".drawer-menu").classList.remove("show");
  } else {
    document.querySelector(".drawer-menu").classList.add("show");
  }
  // if (document.querySelector(".drawer-menu").style.display === "none") {

  // } else {
  //   document.querySelector(".drawer-menu").style.display = "none";
  // }
}
