

let sentence = "I am a student of pw skills and i am learnig javascript. javascript is not tough programing language as i used to thought  "
 

function CountTheOccurences(para){ 
  const words = para.split(" ")
 const map = new Map();
  for (let word of words){
  
    if (map.has(word)){
  map.set(word, map.get(word) + 1)
  }
  else { map.set(word, 1)
       }}
return map
  }
  
console.log(CountTheOccurences(sentence))