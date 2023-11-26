function calculateColor(num1, num2, operation, r, color_r){

    let c1=+document.getElementById(num1).value;
    let c2=+document.getElementById(num2).value;
    
    let op=document.getElementById(operation).value;
    
    let result;

    switch(op){
        case '+':
            result=c1+c2;
            break;
        case '-':
            result=c1-c2;
            break;
        case '*':
            result=c1*c2;
            break;
        case '/':
            result=c1/c2;
            break;
        default:
            document.getElementById(r).innerHTML="ошибка: неизвестная операция";
            return false;           

    }
    document.getElementById(r).innerHTML=result;
    let colorString = "#" + result.toString(16).padStart(6,'0');
    document.getElementById(color_r).style.backgroundColor=colorString;
    return false;

}

function convertToColor(num, color_num){
    let c1=+document.getElementById(num).value;
    let colorString = "#" + c1.toString(16).padStart(6,'0');
    document.getElementById(color_num).style.backgroundColor=colorString;
    return true;
}

function colorsGenerate(num1, num2, operation, color1, color2){
    document.getElementById(num1).value = Math.floor(Math.random()*(1000-1))+1;
    document.getElementById(num2).value = Math.floor(Math.random()*(1000-1))+1;
    const operations = ['+', '-', '*', '/']
    document.getElementById(operation).value = operations[Math.floor(Math.random() * operations.length | 0)];
    convertToColor(num1, color1)
    convertToColor(num2, color2)
}