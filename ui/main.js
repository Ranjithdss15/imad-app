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
    
var comments = document.getElementById('commentinput');

var list = ' ';
var submitclick = document.getElementById('commentsubmit');
submitclick.onclick = function() {
    var listcomments = document.getElementById('commentsoutput');
   listcomments.innerHTML = "Comments here";
/*var comments1 = [ 'name1', 'name2','name3','name4'];
for(var temp=0;temp<comments1.length;temp++) {
    list = '<li>' + comments1[temp] + '<li>';
    
}
listcomments.innerHTML = list;
*/
};
var b1element= document.getElementById("b1");
b1element.onclick = function() {
     alert('Started');
    var interval1 =setInterval(function1,50);
};
function function1() {
     
       var interval =setInterval(b1color,50);
        var b1color=document.querySelector("body");
        b1color.style.backgroundColor= '#66ff33';
}

var blikeele  = document.getElementById("blike");
blikeele.onclick = function() {
    //alert('Liked');
    var request =new XMLHttpRequest();
    request.onreadystatechange =function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status ===200){
            var counter =  request.responseText;
            var span=document.getElementById('count');
            span.innerHTML = counter.toString();
           
        } 
        }
    };

    
    



        
        request.open('GET','http://ranjithdss15.imad.hasura-app.io/counter',true);
        request.send(null);

};


