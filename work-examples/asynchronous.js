//#Asynchronous
[1,2,3,4].forEach(function(i){
	console.log('Here we are processing synchronous calls')
	delay();
});

//Asynchronous
function asyncForEach(array, cb){
	array.forEach(function(){
		setTimeout(cb, 0);
	})
}

asyncForEach([1,2,3,4], function(i){

	console.log("Here we are processing asynchronous calls", i);
	delay();
})
