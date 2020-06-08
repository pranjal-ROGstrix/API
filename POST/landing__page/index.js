
  $('.count').counterUp({
    delay: 100,
    time: 2000
  })

  window.onscroll = function () {
    scrollFunction();

  };

  
  function scrollFunction() {
    let btn = document.getElementById('myBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };
  function topFunction () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0 ;
  }
