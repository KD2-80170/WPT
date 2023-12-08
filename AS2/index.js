var addBtn = document.getElementById("1");
var subBtn = document.getElementById("2");
var mulBtn = document.getElementById("3");
var divBtn = document.getElementById("4");
var resetBtn = document.getElementById("5");

var num1Ele=document.getElementById("num1");
var num2Ele=document.getElementById("num2");
var resultEle=document.getElementById("result");
function calc(opr) {

    console.log("Add btn clicked " + opr)
    var num1 = Number(num1Ele.value);
    var num2 = Number(num2Ele.value);
    // debugger;
    var result = 0;
    switch (opr) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
    }

   resultEle.value=result;
    resultEle.value=result;
//    setTimeout(clear,1000);
}
//    clear();
    
function clear()
{
    num1Ele.value="";
    num2Ele.value="";
    resultEle.value="";
    resultEle.style.color="black";

}


addBtn.addEventListener("click", function () {
    calc(1);
});

subBtn.addEventListener("click", function () {
    calc(2);
});

mulBtn.addEventListener("click", function () {
    calc(3);
});

divBtn.addEventListener("click", function () {
    calc(4);
});


resetBtn.addEventListener("click",function()
{
    clear();
})
