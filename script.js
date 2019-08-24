window.addEventListener('scroll', function() {
	var navbar = document.getElementById("navbar");
	var sticky = navbar.offsetTop;
	
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
    navbar.classList.remove("sticky");
	}
});


function init() {
   rotation(0);
}

function rotation(prevIndex) {
  var i, myIndex;
  myIndex = prevIndex;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(rotation, 3000, myIndex);
}
