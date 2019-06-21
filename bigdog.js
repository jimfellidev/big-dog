// Image Modal

var modal = document.getElementById("myModal");
var i;
var captionText = document.getElementById("caption")
var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");

for(i=0;i< img.length;i++) {
    img[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
}

var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
   modal.style.display = "none";
}