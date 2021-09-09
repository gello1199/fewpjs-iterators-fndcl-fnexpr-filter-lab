// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(array, string) {
    const driversList = array.filter(driver => driver.toLowerCase() === string.toLowerCase())
    return driversList
    // debugger
}

function fuzzyMatch(array, query) {
    return array.filter(driver => {
        debugger
         return driver.toLowerCase().indexOf(query.toLowerCase()) === 0
        })  
}

// function filterItems(arr, query) {
//     return arr.filter(function(el) {
//       return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//     })
//   }


function matchName(object, string) {
    const stringName = object.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
    return stringName
}

// const result = words.filter(word => word.length > 6);