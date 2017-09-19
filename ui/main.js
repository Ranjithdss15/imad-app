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
    

var commentsop = document.getElementById('commentsoutput');
var submitclick = document.getElementById('commentsubmit');
   submitclick.onclick = function() {

    var commentsip = document.getElementById('commentsinput');
    commentsipvalue=commentsip.value;
    if(commentsipvalue!=='')
    {
        var request =new XMLHttpRequest();
        request.onreadystatechange =function() {
            if(request.readyState === XMLHttpRequest.DONE) {
                if(request.status ===200){
                    var list = ' ';
                var comments =  request.responseText;
                comments=JSON.parse(comments);
          for(var temp=0;temp<comments.length;++temp) {
             list += ('<li>' + comments[temp]);
              commentsop.innerHTML = list.toString();
              commentsip.value="";
            }
            } 
            }
        };
            request.open('GET','http://ranjithdss15.imad.hasura-app.io/submit-comment?comment='+commentsipvalue,true);
            request.send(null);
    }
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

var Submitelement= document.getElementById("Submit");
Submit.onclick = function() {
    var request =new XMLHttpRequest();
    request.onreadystatechange =function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status ===200){
            alert("Registration done!");
            }    
            else if (request.status ===403) {
              alert("Forbidden");
             } 
            else if (request.status ===500){
                alert("Internal server Error");
            } 
        }
    };
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pwrd").value;
    request.open('POST','http://ranjithdss15.imad.hasura-app.io/register',true);
        request.send(JSON.stringify({username:username,password:password}));
        

};

