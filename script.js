// complete the given function

function palindrome(str){
	while (str.includes(" ")) {
		str.replace(" ","");
	}
let n=str.length;
	for (let i = 0; i < n; i++) {
		if (str.charAt(i)!=str.charAt(n-i-1)) {
			return  false;
		}
	}
	return true;
}
module.exports = palindrome
