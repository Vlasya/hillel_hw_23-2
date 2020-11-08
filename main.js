
async function getPromise(){
	let random = new Promise((resolve) =>{
		setTimeout(() =>resolve (Math.floor(Math.random() * (100 - 1)) + 1),2000)
	});
	let randomNumber = await random
	
	return  randomNumber
}

Promise
	.all([
		getPromise(),
		getPromise(),
		getPromise()
	])
	.then(
		runAfter => console.log(runAfter)
	)
