console.log('Loaded!');

//window.onload = function(){
var imageele = document.getElementById('image');
marginLeft=0;
function moveRight() {
    marginLeft += 50;
    imageele.style.marginLeft = marginLeft+'px' ;
    if(marginLeft== '300px')
    'break';
    }
imageele.onclick = function () {
    var interval =setInterval(moveRight,50);
    };
var b1element= document.getElementById("b1");
b1element.onclick = function() {
    var interval1 =setInterval(function1,5);
};
function function1() {
      alert('Started');
       var interval =setInterval(b1color,50);
        var b1color=document.querySelector("body");
        b1color.style.backgroundColor= '#66ff33';
}


