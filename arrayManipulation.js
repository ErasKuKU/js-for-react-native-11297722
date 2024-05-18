function processArray (array){
   
    let result = array.map(num => (num % 2 === 0) ? num * num : num * 3);
 
     return result;
 }
 
 const array = [2,3,5,7,8]
 const result = processArray(array)
 console.log(result)