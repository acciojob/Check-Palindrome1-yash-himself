// complete the given function

function palindrome(str){
	
	

let n=str.length;
	let s=str.toLowerCase();
	let f = true;
	for (let i = 0; i < n; i++) {
		if (s.charAt(i)!==s.charAt(n-i-1)) {
			f=  false;
			break;
		}
	}
	return f;
}
module.exports = palindrome
