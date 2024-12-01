//when we  require any module ((require("./path"))).
//all the code of the module  is wrapped inside a function (IEFE).
//IIFE - IMMEDIATELY INVOKE FUNCTION EXPERIENCE

console.log("This is a module");
(function (){
    console.log("this iief");
    
})();
