function twoSum(numbers, target) {
	// เริ่มเขียนโค้ดตรงนี้จ้า
	let resultSum =[]
	for(let i=0;i<numbers.length;i++){
		for( let j=i;j<=numbers.length-1;j++){
			if(numbers[i]+numbers[j] === target){
				resultSum.push(i,j)
				return resultSum
			}
		}
	}	
};
console.log(twoSum([2,7,11,15],9)); 

