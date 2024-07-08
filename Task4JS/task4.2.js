function sortString(str) {
    // Convert the string to an array of characters
    let charArray = str.split('');
    
    // Sort the array of characters
    let sortedArray = charArray.sort();
    
    // Join the sorted array back into a string
    let sortedStr = sortedArray.join('');
    
    return sortedStr;
  }
  
  // Sample Data
  let exampleString = 'webmaster';
  console.log(sortString(exampleString)); // Expected Output: 'abeemrstw'
  