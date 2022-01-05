const multiplicar$Por5 = (function(){
	return function(arg){
  	return (arg*5);
  }
})();

// for(let i= 0; i<10; i++){
//   console.log(multiplicar$Por5);
//   console.log(multiplicar$Por5(i+1));
// }

console.log(multiplicar$Por5(10)); //esperado que retorne 50
console.log(multiplicar$Por5(12)); //esperado que retorne 60
console.log(multiplicar$Por5(7)); //esperado que retorn 35
