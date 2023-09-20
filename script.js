function decimalToBinary(num) {
  
	let n = num, ans="";
	while(n!==0){
		rem = n%2;
		n = Math.floor(n/2);
		ans = rem+ans;
	}
	return ans;
  
}

window.decimalToBinary = decimalToBinary;
