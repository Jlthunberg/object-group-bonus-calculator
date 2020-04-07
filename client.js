const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

function bonusCalculator(employee){
  let employeeBonus = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  };

  let percentage = ratingPercentage(employee.reviewRating);
  let seniorBonus = seniorEmployee(employee.employeeNumber, employee.reviewRating);
  let totalPercent = percentage + seniorBonus;
// (totalPercent / 100) * employees.annualSalary
 
 
  if(Number(employee.annualSalary) > 65000) {
    totalPercent -= 1;
  }  

  if(totalPercent > 13){
    totalPercent = 13;
  }
  if(totalPercent < 0){
    totalPercent = 0;
  }
  
  employeeBonus.bonusPercentage = totalPercent;
  employeeBonus.totalBonus = Math.round((totalPercent / 100) * Number(employee.annualSalary));
  employeeBonus.totalCompensation = employeeBonus.totalBonus + Number(employee.annualSalary);

  console.log(totalPercent);
  
  return employeeBonus;
}

function ratingPercentage(rating){
  let percentage = 0;
  if(rating <= 2){
    percentage = 0;
  } else if (rating === 3){
    //do this thing 4% bonus
    percentage = 4;
  } else if (rating === 4){
    //do this thing 6%
    percentage = 6;
  } else if (rating === 5){
    //do this thing 10%
    percentage = 10;
  }
  return percentage;
}

function seniorEmployee(number, rating){
  let addPercentage = 0;  
  if(rating <= 2 ) {
    //do this thing exit fn
    return addPercentage;
  } else if( number.length === 4){
    //do this thing give additional 5%
    addPercentage = 5;
  }
  else{
    addPercentage = 0;
  }
  return addPercentage;
}

for (let i = 0; i < employees.length; i++) {
  console.log(bonusCalculator(employees[i]));
  
}

