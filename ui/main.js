console.log('Loaded!');
alert('Hi,this is main.js');
var element = document.getElementById('main-text')

element.innerText('Hi this is the editted html')

element.innerText = `
first line
second line
<br>
third line`
