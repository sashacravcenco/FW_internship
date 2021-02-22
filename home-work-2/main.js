// function isAObject(value);  boolean, try with null //

function isAnObject(value) {
    return typeof value === 'object';
}

isAnObject(value);

// function aWithouB(objA, objB);  return object a without keys existing in object B //

function aWithoutB(objA, objB) {
    const keys1 = Object.keys(objA);

    for (let key of keys1) {
        if (objA[key] === objB[key]) {
            delete objA[key];
        } 
    }
    return objA;    
}
aWithoutB(objA, objB);


// function isEmptyObject(obj); make sure works when nonObject used.  //

function isEmptyObject(obj) {
    return obj.constructor === Object && Object.keys(obj).length === 0;
}
isEmptyObject(obj);

//не объект возвращает false //

// function isEqual(objA, objB); boolean, if objA have same values as objA //

function isEqual(objA, objB) {
    const keys1 = Object.keys(objA);
    const keys2 = Object.keys(objB);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (objA[key] !== objB[key]) {
            return false;
        } 
    }
    return true;
}

isEqual(objA, objB);


// function intersections(objA, objB);  object, return common keys between objA and objB //

function intersections(objA, objB) {
    let result = {};
    const keys1 = Object.keys(objA);

    for (let key of keys1) {
        if (objA[key] === objB[key]) {
            result[key] = objA[key];
        } 
    }
    return result;
}
intersections(objA, objB);

// function getValueByPath(obj, path);  any, obj by the path from the given obj //

function getValueByPath(obj, path) {
    let  pathSplit = path.split('.')
    let result = obj;
   for (let key of pathSplit) {
       const startIndexOfArray = key.indexOf("[");
       const lastIndexOfArray = key.indexOf("]");
       if (startIndexOfArray > 0 && lastIndexOfArray > 0) {
            result = result[key.slice(0, startIndexOfArray)][key.slice(startIndexOfArray + 1, lastIndexOfArray)]
       } else {
            result = result[key];
       }
       
   }
   return result;
}


// 1. Find if key contains array symbol []
// 2, Get the indexOf those symbols 
// 3. If key contains array symbos [] get their indexes
// 4. obj[key][0]