let calculated;

function myfunction (){
let x = document.getElementById('screen').value;
let y = eval(x);
document.getElementById('screen').value = y;
return y;
calculated = true;
}

function display(dis)
{
    document.getElementById('screen').value += dis;
}

function clr()
{
    document.getElementById('screen').value = '';
}

function bcks(){
    let st = document.getElementById('screen').value
    st = st.substring(0,st.length-1);
    document.getElementById('screen').value = st;
}

function numPress(num){
    var current = document.getElementById('screen').value;
    current = current + num;
    document.getElementById('screen').value = current;
}

