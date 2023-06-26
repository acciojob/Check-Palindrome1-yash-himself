// complete the given function

function palindrome(str){
	let s="";
	while (str.includes(" ")) {
	s=	str.replace(" ","");
	}

let n=s.length;
	s.toLowerCase();
	let f = true;
	for (let i = 0; i < n; i++) {
		if (s.charAt(i)!==s.charAt(n-i-1)) {
			return  false;
		}
	}
	return true;
}
module.exports = palindrome
