let email = "steve18@gmail.com";

function validate(input){
    if(input.includes("@") && input.includes(".")){
        return "valid";
    }
    else{
        return "invalid";
    }
}

console.log(validate(email));


let num = 45;


function sumDigit(input){
    let lastDigit=0;
    let sum = 0;  
    while(input!=0){
        lastDigit = input % 10;
        sum = sum + lastDigit;
        input = (input - lastDigit)/10;
    }
    return sum;
}



console.log(sumDigit(num));

let arr = [22,3,4,63,2,6,8,4,33,344,123];


let ans = arr.sort(
    function(a,b){
        return a-b;
    }
);

console.log(ans);

