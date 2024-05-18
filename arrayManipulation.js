function processArray (array){
   
    let result = array.map(num => (num % 2 === 0) ? num * num : num * 3);
 
     return result;
 }
 
 const array = [2,3,5,7,8]
 const result = processArray(array)
 console.log(result)

 function formatArrayStrings(strArr, result) {
    // Iterate over the arrays and modify each string based on its corresponding number
    for (let i = 0; i < strArr.length; i++) {
      // If the number is even, capitalize the entire string
      if (result[i] % 2 === 0) {
        strArr[i] = strArr[i].toUpperCase();
      }
      // If the number is odd, convert the string to lowercase
      else {
        strArr[i] = strArr[i].toLowerCase();
      }
    }
  
    // Return the modified string array
    return strArr;
  }

  const strArr = ['kofi','Ama','Yaw','Abena','Kwame']
  const modifiedNames = formatArrayStrings(strArr, result)
  console.log(modifiedNames)