// 1. Write a JavaScript function that returns the function name.

1. 
let showFuncName = () => {
    return showFuncName.name;
}

showFuncName();

2. 
function showFuncName() {
    console.log(arguments.callee.name);
}

showFuncName();

/* 2. Write a function that receives a random nr of string arguments and returns a story 
generated with the help of these arguments and other custom text. */





/* 3. Extend the default values functionality (for function parameters) to set to default 
not only the undefined values but also the null values (but not other falsy values) */



// 4. Write a function that behaves differently depending on the nr of arguments being passed */ 

function compare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = true;
    } else if (nameA < nameB) {
      comparison = false;
    }
    return comparison;
  }
  
  arr.sort(compare);

  arr.sort((a, b) => a.name.localeCompare(b.name));