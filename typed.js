var ele = document.querySelector('#typed');
var start="";
var end="Akshay Dhiman";

var idx = 1;
var pointer = 0;
setInterval(function(){

    if(pointer == 13  || pointer == -1){
        idx = idx *-1;
    }

    start = end.substring(0, pointer);
    ele.textContent = start;

    pointer = pointer +idx;
},200);

