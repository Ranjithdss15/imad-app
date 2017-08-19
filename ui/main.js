console.log('Loaded!');
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


//alert('Hi,this is main.js');
//var element = document.getElementById('main-text');
//element.innerText = `
//The main.js file is getting executed now`;
