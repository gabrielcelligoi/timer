//taking arguments from command line
const args = process.argv;

//function to exclude the index 1 and 2 from original args
const excludeIndex1And2 = (arr) => {
  let result = [];
  for (let i = 2; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

//arguments to use on the code
const usefullArgs = excludeIndex1And2(args);

//function to call the alarm by the time especified in command line
const timer = (arr) => {
  for (let num of arr) {
    if (num > 0 && !isNaN(num)) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, num * 1000);
    }
  }
};

timer(usefullArgs);