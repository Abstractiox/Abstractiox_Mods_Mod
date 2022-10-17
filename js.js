function goto1() {
    location.replace("/ModWebstite_Abstractiox/modspage.html")
}

function goto2() {
    location.replace("/ModWebstite_Abstractiox/index.html")
}

function Graphics_Card_OverclockerDownload() {
    location.replace("/ModWebstite_Abstractiox/index.html")
}
function goto2() {
    location.replace("/ModWebstite_Abstractiox/index.html")
}
function goto2() {
    location.replace("/ModWebstite_Abstractiox/index.html")
}
function goto2() {
    location.replace("/ModWebstite_Abstractiox/index.html")
}








var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}