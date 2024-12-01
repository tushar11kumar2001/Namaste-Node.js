//Modules protected their variables and functions from leaking..

function sum(a,b){
   console.log("sum :",a+b);
}

module.exports = { sum };