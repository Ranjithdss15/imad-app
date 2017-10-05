console.log("URL method loaded");



var Pool = require('pg').Pool;

var config = {
  user: 'ranjithdss15',
  host: 'db.imad.hasura-app.io',
  database: 'ranjithdss15',
  password: process.env.DB_PASSWORD,
  port: 5432,
};


var shortenvar = document.getElementById('shorten');
shortenvar.onclick = function() {
    var urlvar = document.getElementById("url").value;
    var extvar = document.getElementById("ext").value;
    
     var pool = new Pool(config); 
     
     pool.query('INSERT INTO "shorturls" (extension) VALUES ($1)', [extvar], function(err, result) {
  if (err) {
    res.status(500).send(err.toString());
    alert("Error");
  } 
   else {
      pool.query('SELECT "urls" FROM "shorturls" WHERE extension = ($1)', [var1], function(err, result) {
  if (err) {
    res.status(500).send(err.toString());
    alert("Error");
  } else {
   // console.log(res.rows[0]);
  res.send(JSON.stringify(result.rows));
  }
      }); 
  }
  
 });
    
    
    
    
    
    /*
    
    if(urlvar!=='' && extvar!=='')
    {
        var request =new XMLHttpRequest();
        request.onreadystatechange =function() {
            if(request.readyState === XMLHttpRequest.DONE) {
                if(request.status ===200){
                    var extensionIn =  request.responseText;
                    output.innerHTML = extensionIn.toString();
            console.log(extensionIn);
            } 
            }
        };
            request.open('GET','http://ranjithdss15.imad.hasura-app.io/urls/'+extvar,true);
            request.send(null);
            
            
                 var request2 =new XMLHttpRequest();
        request.onreadystatechange =function() {
            if(request2.readyState === XMLHttpRequest.DONE) {
                if(request2.status ===200){
                    var urlIn =  request.responseText;
                    output2.innerHTML = urlIn.toString();
            console.log(urlIn);
            } 
            }
        };
            request2.open('GET','http://ranjithdss15.imad.hasura-app.io/actualurls?urlIn='+urlvar,true);
            request2.send(null);
            
            
}
   else
   {
       alert("Enter both of the values");
       
   } */
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