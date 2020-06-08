function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById('openNav').style.visibility = "visible";
}


function activeme(x) {
  console.log(x);
  let y = $(".sideNav");
  for (let i = 0; i < y.length; i++) {
    if (y[i].classList.contains('active')) {
      $(y[i]).removeClass('active')
    }
  }
  $(x).addClass("active")

}