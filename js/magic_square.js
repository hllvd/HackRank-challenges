

function nextCell(actualPosArg = [],n=1){
	var actualPos = [...actualPosArg]
	var serializeSquare =[[0,0],[0,1],[0,2],[1,2],[2,2],[2,1],[2,0],[1,0]];
	var seri = serializeSquare
	for( var i in serializeSquare){
		var el = serializeSquare[i]
		if(JSON.stringify(el) === JSON.stringify(actualPos)){
			var nextIndex = (i == serializeSquare.length-1)?serializeSquare[0]:serializeSquare[(Number(i)+1)] ;
			if ( i == serializeSquare.length-1){
				if ( n > 1 ){
					n--;
					return nextCell(nextIndex,n);
				}
				return nextIndex
			}
			if ( n > 1 ){
					n--;
					return nextCell(nextIndex ,n);
			}
			return nextIndex
		}
	}
	return actualPos
}



function rotateSquare(arr =[]){
	 
	var newArr = [...arr]
	var a = [[0,0,0],[0,0,0],[0,0,0]]
	for(var i in newArr){
		var row = arr[i]
		for(var j in row){
			var el = arr[i][j]
			var pos = [Number(i),Number(j)]
			var newPos = nextCell(pos,2)
			a[(newPos[0])][(newPos[1])] = el
			
		}
	}
	return a;
}

function reflectionSquare(arr=[]){
	var left = arr.map(function(el){return (el[0])})
	var right = arr.map(function(el){return (el[2])})
	return arr.map(function(el,index){
		for (var i in el){
			el[0]=right[index]
		}
		for (var i in el){
			el[2]=left[index]
		}	
		return el
	})
	return false;
}
function squarePossibilities(){
	var squarePoss = []
	for( var i=0; i<8; i++){
		var lastSquare = (squarePoss.length==0)?[[4,9,2],[3,5,7],[8,1,5]]:squarePoss[squarePoss.length-1]
		var out = (i==4)?reflectionSquare(([[4,9,2],[3,5,7],[8,1,5]])):rotateSquare(lastSquare)
		squarePoss.push(out)
		
	}
	return squarePoss
}

function main(){
	var min_effort = 100
	var arr = [[2,7,6],[9,5,1],[4,3,8]]
	var all_possibilities = squarePossibilities()
	for (var i in all_possibilities){
		var elChecker = all_possibilities[i]
		var acumu_effort = 0
			for( var r in elChecker){
				var row_1 = elChecker[r]
				var row_2 = arr[r]
				for(var index in row_1){
					acumu_effort = acumu_effort + Math.abs( Number(row_1[index]) - Number(row_2[index]))
				}
			}
		console.log(acumu_effort)
		min_effort = (min_effort<acumu_effort)?min_effort:acumu_effort
		 
		
	}
	return min_effort
	
}

s = [[4,9,2],[3,5,7],[8,1,5]]