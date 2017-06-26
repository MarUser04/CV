var css=document.getElementById('css');

var sass=document.getElementById('sass');

var pug=document.getElementById('pug');

var js=document.getElementById('js');

var git=document.getElementById('git');

var photoshop=document.getElementById('photoshop');

var ingles= document.getElementById('ingles');

var skills= [css, sass, pug, js, git, photoshop, ingles];

var porcentaje= ["60%", "55%","55%", "50%","65%", "40%", "70%"];
var nombres= ["CSS", "SASS", "Pug", "JavaScript", "GIT", "Photoshop", "Ingles"];

var cont=0;


var skillDelay= setInterval(function(){

    skills[cont].style.width=porcentaje[cont];


    skills[cont].innerText= nombres[cont] +" " +porcentaje[cont];

    cont++;

    if(cont===skills.length){

    clearInterval(skillDelay);
    }
},250);



