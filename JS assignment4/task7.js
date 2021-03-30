var word = "The quick brown fox jumps over the lazy dog";

var found = word.match(/the/gi);
console.log("Text: The quick brown fox jumps over the lazy dog. There are "+found.length +" occurrence(s) of word 'the'");