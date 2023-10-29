function reverseWords(sentence) {
    // Split the sentence into an array of words
    var words = sentence.split(' ');

    // Reverse each word in the array
    var reversedWords = words.map(function(word) {
        // Reverse the characters of each word
        return word.split('').reverse().join('');
    });

    // Join the reversed words back into a sentence
    var reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Example usage
var inputSentence = "Hello World, I am Rudraksh Paliwal and i have submitted the assignment";
var reversedSentence = reverseWords(inputSentence);

console.log(reversedSentence);