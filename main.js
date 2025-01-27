let nem1 = +prompt("enter the number 1")
let nem2 = +prompt("enter the number 2")
let x = prompt("enter + - * / ** %")
let demo = document.getElementById("demo")


function jam(n1,n2) {
    if(!isNaN(n1 * n2)){
        return n1 + n2;
    }else{
        return "erorr"
    }
}
function tafrigh(n1,n2) {
    if(!isNaN(n1 * n2)){
        return n1 - n2;
    }else{
        return "erorr"
    }
}
function zarb(n1,n2) {
    if(!isNaN(n1 * n2)){
        return n1 * n2;
    }else{
        return "erorr"
    }
}
function taghsim(n1,n2) {
    if(!isNaN(n1 * n2)){
        return n1 / n2;
    }else{
        return "erorr"
    }
}
function tavan(n1,n2) {
    if(!isNaN(n1 * n2)){
        return n1 ** n2;
    }else{
        return "erorr"
    }
}
function baghimande(n1,n2) {
    if(!isNaN(n1 * n2)){
        return n1 % n2;
    }else{
        return "erorr"
    }
}

switch(x) {
    case '+':
        demo.innerText = jam(nem1,nem2)
        break;
    case '-':
        demo.innerText = tafrigh(nem1,nem2)
        break;
    case '*':
        demo.innerText = zarb(nem1,nem2)
        break;
    case '/':
        demo.innerText = taghsim(nem1,nem2)
        break;
    case '**':
        demo.innerText = tavan(nem1,nem2)
        break;
    case '%':
        demo.innerText = baghimande(nem1,nem2)
        break;
    default:
        demo.innerText = "erorr"

}