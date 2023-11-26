let generateNumber = (max, min) => Math.floor(Math.random()*(max-min))+1;
let sumTwoNumbers = (n1, n2) => n1+n2;
let setElement = (id, val)=> document.getElementById(id).innerHTML=val;
let setElementInEnd = (id, val)=>{
    span=document.getElementById(id);
    txt=document.createTextNode(val);
    span.appendChild(txt);
}

let isPrime=(num)=>{    
    let flag = true;
    for(let i=2; i<num;i++){
        if(num%i == 0){
            flag=false;
            break;
        }
    }
    return flag;
}

let divisors=(num)=>{
    var divisors = new Array();
    for (let i=1; i<=num**0.5;i++){
        if (num % i == 0){
            divisors.push(i)
            if (num / i != i) { divisors.push(num / i) }
        }
    }
    divisors.sort(function(a,b){
        return a-b;
});
    divisors.forEach(element => {
        setElementInEnd("divisors", `${element} `)
    });
    setElement("divisorsCount", divisors.length)
}

window.onload=()=>{
    // найти сумму двух чисел
    let n1 = setElement("num1", generateNumber(1000,1)) 
    let n2 = setElement("num2", generateNumber(1000,1)) 
    setElement("sum_result", sumTwoNumbers (n1, n2))
    
    // проверка число простое или нет
    let num = setElement("num", generateNumber(1000,1))   
    if(isPrime(num)){
        setElement("prime_result", "простое")
    }else{
        setElement("prime_result", "имеет делители")
    }
    // делители числа
    let divisors_num = setElement("divisors_num", generateNumber(10000,1))
    if(isPrime(divisors_num)){
        setElement("divisors", ` только [1, ${divisors_num}], следовательно это простое числое`)
    }
    else{
        divisors(divisors_num)
    }
}








