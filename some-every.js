
hasOddNumber([1,2,2,2,2,2,4])

function hasOddNumber(arr) {
    return arr.some(function(odd){
        return odd % 2 !== 0;
    })
}


hasAZero(3332123213101232321) // true

function hasAZero(num) {
    return num.toString().split('').some(function(val){
        return val === '0';
      })
}


   
hasOnlyOddNumbers([1,2,3,5,7]) // false
function hasOnlyOddNumbers(arr) {
    return arr.every(function(odd){
        return  (odd % 2) == 1
    })
}

hasNoDuplicates([1,2,3]) // true

function hasNoDuplicates(arr) {
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
      });
    
}


var arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {title: "Instructor", first: 'Matt', last:"Lane"}, 
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]
hasCertainKey(arr,'isCatOwner') // false

function hasCertainKey(arr, key) {
    return arr.every(function(val){
        return key in val
    })
}

var arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
    {title: "Instructor", first: 'Matt', last:"Lane"}, 
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]
hasCertainValue(arr,'title','Instructor') // true

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(val){
        return val[key] === searchValue;
      })
}
