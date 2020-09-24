n = 25
var acu= BigInt(1)
for( var i=2;i<n+1;i++){
	acu = acu * BigInt(i);
}
console.log(acu.toString())