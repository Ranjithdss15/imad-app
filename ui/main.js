console.log('Loaded!');
var imageele = document.getElementById('b1');
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
var b1element=document.getElementById('image');
b1element.onclick = function () {
      alert('Started');
}
    

/*b1element
  
   var b1color=document.getElementsByClassName('body');
  b1color.style.bgcolor= '#f90053';
    
};*/
//alert('Hi,this is main.js');
//var element = document.getElementById('main-text');
//element.innerText = `
//The main.js file is getting executed now`;
