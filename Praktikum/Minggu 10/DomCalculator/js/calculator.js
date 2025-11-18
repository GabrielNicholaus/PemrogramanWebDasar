var answer;
function init()
{
    answer = document.getElementById("ans").firstChild;
    comp("uin");
}

function comp(id)
{
    var element = document.getElementById(id);
    var res  = eval(element.value);
    answer.data = res;
}