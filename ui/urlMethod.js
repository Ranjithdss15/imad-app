console.log("URL method loaded");



var test = document.getElementById('shorten');
test.onclick = function() {
    alert("Loaded");
    
    
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
