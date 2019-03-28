var array = [10,4,5,7,6,9,3,8,11,2,12,13];

function findNumberInUnsortedArray(arr) {
	
  var count = arr.length + 1;
  var sum = 0;
  var expected = count * (count + 1) / 2;
  
  for(var i = 0, l = arr.length; i < l; i++) {
  	sum += arr[i];
  }
  
  return expected - sum;
  
}

var result = findNumberInUnsortedArray(array);

console.log('Missing Number:', result);