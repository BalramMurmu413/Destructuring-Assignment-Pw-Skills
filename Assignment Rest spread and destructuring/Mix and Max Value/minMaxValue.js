function minMax(num){
    return {min: Math.min(...num),
           max: Math.max(...num)
  }}
  
  let arr = [1,2,4,7,6,3,12,]
  
  console.log(minMax(arr));