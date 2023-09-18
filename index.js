const words = ["level", "radar", "text", "river", "madam", "sales", "mom"];
let palindromeCount = 0;

for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let isPalindrome = true;
    for(let j = 0; j < word.length / 2; j++) {
        if(word[j] !== word[word.length - j - 1] ) {
            isPalindrome = false;
        } 
    }
    if (isPalindrome) {
        palindromeCount++;
        console.log("This word is Palindrome:", words.indexOf(words[i])+1 + "." , words[i]);
    } else {
        console.log("This word not Palindrome:",  words.indexOf(words[i])+1 + "." , words[i]);
    }
}
console.log("Count of palindrome words:", palindromeCount);
console.log("Count of non-palindrome words:", words.length-palindromeCount);