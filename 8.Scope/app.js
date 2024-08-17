/*
Global Scope : Her Yerden Erisim Olan Variable- Degisken
Function Scope: Function ve Method icindeki degisken variable
Block Scope: Function-Method icindeki if-while etc nin icinde olusturulan variable

*/











var degisken=10;
console.log(degisken);

var a=5;
var b=3;
//while(a<b){
    //console.log("esit")
//};
if(true){
console.log(a)
};

function method1(){
     var sayi=100;
    console.log(sayi);

};

method1();

function method2(){
    if(true){
        var a=5;
    }
}