var num = process.argv[2];
console.log(typeof num);
num = parseInt(num);

console.log(num);
console.log(typeof num);
function show(){
	var i, no, fact=1;
	no=num;
	var fact=f(no);
	function f(no) {
		if(no<1)
			return 1;
		else
			return(no*f(no-1));
 	}
	return (fact);
}
console.log(show());

