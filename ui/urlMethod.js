console.log("URL method loaded");



var shortenvar = document.getElementById('shorten');
shortenvar.onclick = function() {
    var urlvar = document.getElementById("url").value;
    var extvar = document.getElementById("ext").value;
    
    
    if(urlvar!=='' && extvar!=='')
    {
        var request =new XMLHttpRequest();
        request.onreadystatechange =function() {
            if(request.readyState === XMLHttpRequest.DONE) {
                if(request.status ===200){
                    var extensionIn =  request.responseText;
                    output.innerHTML = extensionIn.toString();
            console.log(urlvar);
            } 
            }
        };
            request.open('GET','http://ranjithdss15.imad.hasura-app.io/urls/'+urlvar,true);
            request.send(null);
            
            
                 var request2 =new XMLHttpRequest();
        request.onreadystatechange =function() {
            if(request2.readyState === XMLHttpRequest.DONE) {
                if(request2.status ===200){
                    var extensionIn =  request.responseText;
                    output.innerHTML = extensionIn.toString();
            console.log(urlvar);
            } 
            }
        };
            request2.open('GET','http://ranjithdss15.imad.hasura-app.io/urls/'+urlvar,true);
            request2.send(null);
            
            
}
   else
   {
       alert("Enter both of the values");
       
   }
};





   /*
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
*/