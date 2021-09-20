const Palindrome = (str) => {
    const isPalindrome = str.split('').reverse().join('');
    console.log(str===isPalindrome ? str + " is a palindrome" : str + " not a palindrome");
}






(function(str){
    let reversed = "";
    for(let x of str){
      reversed = x + reversed;
    }
    console.log(str===reversed ? str + " is a palindrome" : str + " not a palindrome");
})("balik kilab");