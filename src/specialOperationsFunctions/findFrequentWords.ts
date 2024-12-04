
const getIdsForWord = (
    wordsFrequencyByIdObject: { [id: string]: { [word: string]: number } },
    word: string
): string[] => {
    return Object.keys(wordsFrequencyByIdObject).filter(id => word in wordsFrequencyByIdObject[id]);
    //returns a list of IDs for a given word
    //e.g getIdsForWord(wordsFrequencyByIdObject, 'quantum'); // Output: ['1', '2']
};
export const findMostFrequentWordInReports=(
    wordsFrequencyByIdObject:{ [id: string]: { [word: string]: number } }
)=>{
    let words = new Set<string>();
    Object.values(wordsFrequencyByIdObject).forEach(innerObj => {
    Object.keys(innerObj).forEach(word => words.add(word));
    });
    const wordsArray =Array.from(words);//remove redandunt words
    const listOfIds=wordsArray
    .map(word => getIdsForWord(wordsFrequencyByIdObject,word))
    //list of arrays with ids having common words
    return listOfIds.reduce((maxList, currentList) => 
        currentList.length > maxList.length ? currentList : maxList, [])
    //returns the longuest list of IDs having most 
    //words in common
}   