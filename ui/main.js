console.log('Loaded!');
var imageele = document.getElementById('image');
marginLeft=0;
function moveRight() {
    marginLeft += 100;
    imageele.style.marginLeft = marginLeft='px' ;
}
imageele.onclick = function () {
    var interval =setInterval(moveRight,100);
    
   
};


//alert('Hi,this is main.js');
//var element = document.getElementById('main-text');
//element.innerText = `
//The main.js file is getting executed now`;
