var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var Pool = require('pg').Pool;



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
var counter = 0;
app.get('/counter', function (req, res) {
    counter+=1;
    res.send(counter.toString());
    });
    
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var pool = new Pool(config);
app.get('/testdb', function (req, res) {
 
/*pool.query('SELECT * FROM test', function (err, res) {
    if (err) {
    //console.log(err.stack);
    res.status(502).send(err.toString());
    alert("Error");
  console.log(err, res);
    }
  pool.end();
});
*/


 pool.query('SELECT name FROM test', function(err, result) {
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

var comments=[];
app.get('/submit-comment/', function (req, res) {
    var comment= req.query.comment;
    comments.push(comment);
    res.send(JSON.stringify(comments));
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
    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/button_start-me.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'button_start-me.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
