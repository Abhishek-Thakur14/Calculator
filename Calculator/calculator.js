
var first = document.getElementById('outputBox');
first.value=null;
var second='';
// let buttons = document.querySelectorAll('button');

function Delete(){
    first.value=first.value.slice(0,-1);
    second=second.slice(0,-1);
}
function Data(operr){
    // console.log(operr);
    second+=operr;
    // console.log(second);
    first.value=second;

}

function Process()
{
    second=eval(second).toString();
    // console.log(second);
    first.value=second;
}

function Clear()
{
    second='';
    first.value='';
}
