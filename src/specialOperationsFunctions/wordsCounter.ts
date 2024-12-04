//a list of words that appear in every report
//don't add a value
const transparentWords = [
    "the", "a", "an", 
    "I", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them", 
    "my", "your", "his", "its", "our", "their", 
    "and", "or", "but", "if", "so", "because", 
    "in", "on", "at", "with", "from", "by", "to", "of", "for", "about", "as", 
    "into", "like", "through", "over", "after", "before", "between", "under", 
    "since", "without", "within", "upon", "towards", "along", 
    "then", "there", "here", "now", "just", "very", "too", "also", "not", 
    "never", "always", "sometimes", "often", 
    "is", "am", "are", "was", "were", "be", "been", "being", "have", "has", 
    "had", "do", "does", "did", "will", "shall", "should", "can", "could", 
    "would", "might", "must", 
    "go", "get", "make", "say", "know", "see", "come", "think", "take", 
    "want", "give", "find", "tell", "ask", "work", "call", "try", "need", 
    "feel", "leave", "put", 
    "this", "that", "these", "those", "all", "some", "any", "many", "much", 
    "few", "more", "most", "no", "none", 
    "yes", "no", "who", "what", "when", "where", "why", "how"
];
  

//This function retuens an object with the words 
//and their frenquency in the text
//e.g. { 'quantum': 3}
export const wordsCounter = (text: string) => {
    const wordCounts:{[key: string]: number}={};
    const words = text.toLowerCase().split(/\s+/);
    words.forEach(word => {
    //Remove ".,!?;:][+" from the words
        word=word.replace(/[.,!?;:]+$/, "")
        if (wordCounts[word]) {
            wordCounts[word] += 1;
        } else {
            wordCounts[word] = 1;
        }
    });
    // Filter to keep only words with frequency >= 3 
    //and important words
    const frequentWords: { [key: string]: number } = {};
    Object.entries(wordCounts).forEach(([word, count]) => {
        if (count >= 3 && transparentWords.indexOf(word)==-1) {
            frequentWords[word] = count;
        }
    });
    return frequentWords;
}