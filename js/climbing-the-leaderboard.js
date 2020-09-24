
scores = ("28 25 22 15 14 12 6 4").split(" ").map(r=>Number(r))
alice = ("5 5 6 14 19 20 23 25 29 29").split(" ").map(r=>Number(r))
  
scores = [...new Set(scores)]
var jump = 0
var positions = []
for( let a of alice){
    for( let s=scores.length-jump-1;s>-1;s--){
        if(a < scores[s] ){
            break;
        }
        if(a >= scores[s]|| s == 0 ){
            jump = scores.length - s
        }
    }
    positions.push( (scores.length-jump+1))
}
console.log(positions)

 /**
//Not optimized one
var positions = []
for ( let el of alice){
	var s = [...scores]
	s.push(el)
	s = s.sort(function(a, b){return b-a})
	r.push(s.indexOf(el)+1)
}
console.log(r)
**/
 