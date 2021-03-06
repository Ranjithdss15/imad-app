var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyparser = require('body-parser');
app.use(bodyparser.json());

var config = {
  user: 'ranjithdss15',
  host: 'db.imad.hasura-app.io',
  database: 'ranjithdss15',
  password: process.env.DB_PASSWORD,
  port: 5432,
};

/*var config = {

  PGHOST: 'db.imad.hasura-app.io',
  PGUSER: 'ranjithdss15',
  PGDATABASE: 'ranjithdss15',
  PGPORT: '5432',  
  PGPASSWORD: process.env.DB_PASSWORD

};*/

var articlesTree = {
 'articleone': {
        title:'The first article',
        articlenum:'Hello World this is my first article',
        date:'16 Aug, 2017',
        heading3:' This is the heading..',
        para:`
                <p>This is the content of the first article.
            This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.</p>
            <p>This is the content of the first article.
            This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.</p>
            `
                 },
  'articletwo': {
        title:'The Second article',
        articlenum:'Hello World this is my Second article',
        date:'16 Aug, 2017',
        heading3:' This is the heading..',
        para:`
                <p>This is the content of the Second article.
            This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.</p>
            <p>This is the content of the first article.
            This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.</p>
            `
                 },
 'articlethree':{
        title:"The Third article",
        articlenum:"Hello World this is my first article",
        date:"16 Aug, 2017",
        heading3:" This is the heading..",
        para:`
                <p>This is the content of the Third article.
            This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.</p>
            <p>This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.This is the content of the Third article.</p>
            `
                 },
};
function createTemplate(data) {
    var title = data.title;
    var date =   data.date;
    var articlenum = data.articlenum;
    var para = data.para;
    var heading3 = data.heading3;
    
var htmlTemplate = `
    <html>
<head>
       <title> ${title} </title>
       <meta name="viewport" content="width=device-width initial-scale=1">
       <link href="/ui/style.css" rel="stylesheet" />
</head> 
<body class= "margin-page">
    <div class="container">
      ${articlenum}
      </br>
         Welcome to my article which is linked to server.js
       <div>
       <a href="/">Home</a> 
       <hr>
         </div>
         <div>
       ${date}
         </div>
        <h3>
            ${heading3}
        </h3>
        <div>
        ${para}
    </div>
</body>
</html>
`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
//app.get('/article-one', function (req, res) {
//    res.send(createTemplate(articleOne))
//});
app.get('/shortURLs', function(req, res){
    res.sendFile(path.join(__dirname,'ui','URLshortner.html'));
});
app.get('/Maps', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'gmaps.html'));
});
  
var counter = 0;
app.get('/counter', function (req, res) {
    counter+=1;
    res.send(counter.toString());
    });
    
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/urlMethod.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'urlMethod.js'));
});


var pool = new Pool(config);
app.get('/testdb', function (req, res) {


 pool.query('SELECT * FROM test order by "Name"', function(err, result) {
  if (err) {
    //console.log(err.stack);
    res.status(500).send(err.toString());
    alert("Error");
 //res.alert("Error");
  } else {
   // console.log(res.rows[0]);
  res.send(JSON.stringify(result.rows));
  }
});
});

//http://ranjithdss15.imad.hasura-app.io/submit-comment?comment=comment3
var comments=[];
app.get('/submit-comment/', function (req, res) {
    var comment= req.query.comment;
    comments.push(comment);
    res.send(JSON.stringify(comments));
    });
    
    function hash(passwordinput,salt) {
    var hashreturned =crypto.pbkdf2Sync(passwordinput,salt, 100000, 512, 'sha512');
       return ["pbkdf2","100000",salt,hashreturned.toString('hex')].join('$');
    }
    
    
    
     
    app.get('/surl', function (req, res) {

 //  var extension = req.params.extension;
 
    pool.query('SELECT * FROM test order by "shorturls"', function(err,res) {
         if (err) {
    res.status(500).send(err.toString());
    alert("Error");

  } else {
  res.send("Register");
  }
     });
});
    
    
    
    
    app.post('/register', function (req, res) {
    console.log("regiteration module");
    username = req.body.username;
    password = req.body.password;
    console.log("r1");
    var salt = crypto.randomBytes(128).toString('hex');
   var dbcred = hash(password,salt);
    console.log("r2");
     pool.query('INSERT INTO "cred" (username,password) VALUES ($1,$2)', [username,dbcred], function(err,res) {
         console.log("r3");
         if (err) {
    //console.log(err.stack);
    res.status(500).send(err.toString());
    alert("Error");
 //res.alert("Error");
  } else {
   // console.log(res.rows[0]);
  res.send("Register");
  }
  
     });
    });
    
     app.post('/login', function (req, res) {
    username = req.body.username;
    password = req.body.password;
    var salt = crypto.randomBytes(128).toString('hex');
   var dbcred = hash(password,salt);
     pool.query('SELECT * FROM "cred" WHERE "username" = $1 AND "password" = $2', [username,dbcred], function(err,res) {
         if (err) {
    //console.log(err.stack);
    res.status(500).send(err.toString());
    alert("Error");
 //res.alert("Error");
  } else {
  res.send("Register");
  }
     });
    });
    
    
    
    
        
 var pool = new Pool(config);
app.get('/actualurls/', function (req, res) {
var query1 =req.query.urlIn;
 pool.query('INSERT INTO "shorturls" (urls) VALUES ($1)', [query1], function(err, result) {
  if (err) {
    res.status(500).send(err.toString());
    alert("Error");
  } 
   else {
      pool.query('SELECT "extension" FROM "shorturls" WHERE urls = ($1)', [query1], function(err, result) {
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
});
    
    
    
    
    
 var pool = new Pool(config);
app.get('/urls/:extensionIn', function (req, res) {
var var1 =req.params.extensionIn;
 pool.query('INSERT INTO "shorturls" (extension) VALUES ($1)', [var1], function(err, result) {
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
});

  
  



    
    
app.get('/password/:passwordinput', function (req, res) {
    var hashreturned = hash(req.params.passwordinput,'This-is-a-unknow-value');
     res.send(hashreturned);
  /*   var username = "ranjith123";
         pool.query('INSERT INTO "cred" (username,password) VALUES ($1,$2)', [username,hashreturned], function(err,res) {
         console.log("r3");
         if (err) {
    //console.log(err.stack);
    res.status(500).send(err.toString());
    alert("Error");
 //res.alert("Error");
  } else {
   // console.log(res.rows[0]);
  res.send("Register");
  }
     });*/
});

app.get('/:articleName', function (req, res) {
    //articleTree= article-one
    //articleOne=articleTree
    var articleName = req.params.articleName;
    res.send(createTemplate(articlesTree[articleName]));
});
//app.get('/article-two', function (req, res) {
//     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
//});
app.get('/ui/URLshortnercss.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'URLshortnercss.css'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/URLshortner_bg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'URLshortner_bg.jpg'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
