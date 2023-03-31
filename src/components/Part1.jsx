import React from 'react'

const Part1 = () => {

    //1)find duplicate and same values in two array
    var fullWordList = ['1','2','3','4','5'];
    var wordsToRemove = ['1','2','3'];

    for(let i=0; i< fullWordList.length; i++){
        for(let j=0; j< wordsToRemove.length; j++){
            if(fullWordList[i] == wordsToRemove[j]) console.log(wordsToRemove[j],"1) Duplicate");
        }
    }

    // 2)longest-chain-of-letters-in-word-javascript
    const word = '00000111110101001111100001001'
    
    let lettersArr = word.split('');
    let currSeq = [];
    let maxSeq = [];

    for(let i=0; i< lettersArr.length; i++){
        let el = lettersArr[i];
        currSeq = [el];

        for(let j= i+1; j<lettersArr.length; j++){
            if(lettersArr[i] == lettersArr[j]){
                currSeq.push(lettersArr[i]);
            } else{
                break;
            }
        }
        if(currSeq.length > maxSeq.length){
            maxSeq = currSeq;
        }
    }

    let newWord = maxSeq.join('');
    console.log(newWord,"2) longest word");

    // 3) 
    let obj1 = { "greeting": "hello" };
    let obj2 = obj1;
    obj1["greeting"] = "Bye";
    console.log(obj1, "3)");
    console.log(obj2, "3)"); //objects are passed and assigned by reference so both references to the same object.

    // 4) 
    console.log("7" > 7, "4)") //JavaScript will convert the string to a number hence it will return false
    console.log("2">"21", "4)") //JavaScript will convert the string to a number hence it will return false
    console.log("KL">"S", "4)") //compares only first character and its not same so hence false

    // 5) 
    function average(a, b) {
        return a + b / 2;
    }
    console.log(average(2, 1),"5) Average value");

  return (
    <h1>Please check console log for Part 1 answers</h1>
  )
}

export default Part1