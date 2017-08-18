var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articlesTree = {
 'articleonee': {
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
  'articleTwo': {
        title:"The Second article",
        articlenum:"Hello World this is my first article",
        date:"16 Aug, 2017",
        heading3:" This is the heading..",
        para:`
                <p>This is the content of the Second article.
            This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.</p>
            <p>This is the content of the first article.
            This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.</p>
            `
                 },
 'articleThree':{
        title:"The Third article",
        articlenum:"Hello World this is my first article",
        date:"16 Aug, 2017",
        heading3:" This is the heading..",
        para:`
                <p>This is the content of the first article.
            This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.</p>
            <p>This is the content of the first article.
            This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.This is the content of the first article.</p>
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
app.get('/:articleName', function (req, res) {
    //articleTree= article-one
    //articleOne=articleTree
    var articleName = req.params.articleName;
    res.send(createTemplate(articlesTree[articleName]));
});
//app.get('/article-two', function (req, res) {
//     res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
//});
    
//app.get('/article-three', function (req, res) {
// res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
//});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
