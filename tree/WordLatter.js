/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
 var ladderLength = function(beginWord, endWord, wordList) {
    if(wordList.length === 0) return 0;
    
    let dictionary = buildDictionary(wordList)
    console.log('dictionary ' + JSON.stringify(dictionary))
    let queue = [];
    queue.push([beginWord, 1]);
    
    let visited = new Map();
    console.log('wordlist ' + wordList.length)
    while(queue.length > 0){
        let current = queue.pop();
        let curWord = current[0];
        let curLevel = current[1];
        
        for(let i=0; i< beginWord.length; i++ ){
            const newWord = curWord.substring(0, i) + '*' + curWord.substring(i + 1, beginWord.length);
            console.log('newWord ' + newWord)
            let possibilities = dictionary[newWord] ? dictionary[newWord] : []
            for(let w of possibilities) {
            //possibilities.forEach(w =>{
                console.log('curLevel   ' + curLevel)
                if(w == endWord){
                    console.log('curLevel   ' + curLevel + ' w ' + w+' endword ' + endWord)
                    return curLevel + 1;
                }
                //console.log('visited' + JSON.stringify(visited))
                console.log('visited   ' + Array.from(visited.keys()))

                if(!visited.has(w)){
                    visited.set(w, true);
                    queue.push([w, curLevel + 1]);
                }
            }
        }
    }
    
    return 0;
};

var buildDictionary = function (wordList){
    
    //let dictionary = {};
    let dictionary = new Map();
    for(let word of wordList){
        for(let i=0; i<word.length; i++){
            let newWord = word.substring(0, i) + '*' + word.substring(i + 1, word.length);
            let possibilities = dictionary[newWord] ? dictionary[newWord] : []
            possibilities.push(word)
            dictionary.set(newWord, possibilities); 
        }
    }
    return dictionary;
}