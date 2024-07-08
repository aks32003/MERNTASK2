function reverseNumber(num) {
    // Convert the number to a string
    let numStr = num.toString();
    
    // Split the string into an array of characters
    let numArr = numStr.split('');
    
    // Reverse the array of characters
    let reversedArr = numArr.reverse();
    
    // Join the array back into a string
    let reversedStr = reversedArr.join('');
    
    // Convert the string back to a number
    let reversedNum = parseInt(reversedStr);
    
    return reversedNum;
  }
  
  // Sample Data
  let x = 32243;
  console.log(reverseNumber(x)); // Expected Output: 34223
  