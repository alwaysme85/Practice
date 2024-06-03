// Task 1

const marksTodos = [
    {
      title: "read more about js",
      completed: true,
    },
    {
      title: "call a friend",
      completed: false,
    },
    {
      title: "make dinner",
      completed: true,
    },
    {
      title: "watch a movie",
      completed: false,
    },
    {
      title: "go to the grocery shop",
      completed: true,
    },
  ];  //Task A
  function allCompletedTasks (todo) {
     if( todo.completed = true) {
        return todo ;
     } else {
        return false;
     }
        
     
    
    
  };
     const completedTodos = marksTodos.map(allCompletedTasks);
     console.log(completedTodos);
     console.log(marksTodos);

     // Task B
       

     // Task C
      function addedId (marksTodos,index) {
        return {...marksTodos, id: index +1}
      }
     const todosId = marksTodos.map(addedId);
     console.log(todosId);
     //console.log(marksTodos); 
            
     

  // Task 2

const numOne = [4,46,32,112,54,5];
const numTwo = [12,33,46,98,66,101];
const numThree = [76,7,53,90,20,78];
const numFour = [1,88,102,122,42,2];


// Task A

const sortedNumOne = numOne.sort((a,b) => {
    return a-b;
})
console.log(sortedNumOne);

const sortedNumTwo = numTwo.sort((a,b) => {
    return a-b;
})
console.log(sortedNumTwo);

const sortedNumThree = numThree.sort((a,b) => {
    return a-b;
})
console.log(sortedNumThree);

const sortedNumFour = numFour.sort((a,b) => {
    return a-b;
})
console.log(sortedNumFour);

// Task B

const biggerFirstNumber = numOne.reduce((index, max) => {
    return index > max ? index : max;

    
}, 0)
console.log(biggerFirstNumber);

const biggerSecondNumber = numTwo.reduce((index, max) => {
    return index > max ? index : max;

    
}, 0)
console.log(biggerSecondNumber);

const biggerThirdNumber = numThree.reduce((index, max) => {
    return index > max ? index : max;

    
}, 0)
console.log(biggerThirdNumber);

const biggerFourthNumber = numFour.reduce((index, max) => {
    return index > max ? index : max;

    
}, 0)
console.log(biggerFourthNumber);

// Task C

const sumNumOne = numOne.reduce((acc, number) => {
    return acc + number;
}, 0)
console.log(sumNumOne);

const sumNumTwo = numTwo.reduce((acc, number) => {
    return acc + number;
}, 0)
console.log(sumNumTwo);

const sumNumThree = numThree.reduce((acc, number) => {
    return acc + number;
}, 0)
console.log(sumNumThree);

const sumNumFour = numFour.reduce((acc, number) => {
    return acc + number;
}, 0)
console.log(sumNumFour);

// Task 3

let people = [
    { firstname: "John", lastname: "Smith", age: 16 },
    { firstname: "David", lastname: "Bowie", age: 23 },
    { firstname: "Bryan", lastname: "Molko", age: 18 },
    { firstname: "Britney", lastname: "Spears", age: 17 },
    { firstname: "Aimme", lastname: "Winehouse", age: 27 },
    { firstname: "Kurt", lastname: "Cobain", age: 21 },
    { firstname: "Justin", lastname: "Bieber", age: 12 },
  ];


   const adultsPeople = people.filter((item) => {
   return  item.age > 18;
  })
  console.log(adultsPeople);

  // Task 4

  let groceries = [
    {item: "tomatoes" , price: 1.50},
    {item: "milk" , price: 0.90},
    {item: "cheese" , price: 3.20},
    {item: "potatoes" , price: 2.10},
    {item: "pasta" , price: 0.70},
    {item: "bread" , price: 1.80}
  ];


const totalPrice = groceries.reduce((acc, item) => {
    return acc + item.price;
},0)
console.log(totalPrice);