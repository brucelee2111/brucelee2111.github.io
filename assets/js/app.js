
// SlideShow
var index = 0;
changeImage = function () {
    var imgs = 
        ["./assets/img/Section_Hero/a.jpg"
        ,"./assets/img/Section_Hero/1.jpg"
        ,"./assets/img/Section_Hero/2.jpg"
        ,"./assets/img/Section_Hero/3.jpg"
        ,"./assets/img/Section_Hero/4.jpg"];
    if(imgs[index]){
        document.querySelector(".hero-img").src = imgs[index];
        index++;
        if(index == 4){
            index = 0;
        }
    }
}
setInterval(changeImage, 2000)
document.querySelector(".hero-img").onload = changeImage()


//  Item

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "flex";  
}


var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  
  if (n > slides.length) {slideIndex2 = 1}    
  if (n < 1) {slideIndex2 = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex2-1].style.display = "flex";  
}