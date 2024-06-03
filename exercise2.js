const employees = [
    { name: 'Max Müller', city: 'Berlin', position: 'Software Engineer', salary: 60000 },
    { name: 'Anna Meier', city: 'Munich', position: 'Project Manager', salary: 90000 },
    { name: 'Lukas Schmidt', city: 'Hamburg', position: 'Designer', salary: 75000 },
    { name: 'Sophie Schneider', city: 'Cologne', position: 'Developer', salary: 55000 },
    { name: 'Emma Fischer', city: 'Berlin', position: 'Product Owner', salary: 95000 },
    { name: 'Paul Weber', city: 'Frankfurt', position: 'Scrum Master', salary: 80000 }
];

// Task 1
const berlinEmployees = employees.filter((item) => {
    return item.city === "Berlin";
})
console.log(berlinEmployees);

// Task 2

    function namesToUpperCase (item) {
     return item.name.toUpperCase();
    }
    const employeesNames = employees.map(namesToUpperCase);
console.log(employeesNames);

// Task 3
const averageSalary = employees.reduce((acc, employee) =>  acc + employee.salary,0)
 

 const totalAverageSalary = averageSalary / employees.length


console.log(totalAverageSalary);


// Task 4

const employeesBySalary = [...employees].sort((a,b) => {
    return b.salary - a.salary;
})
console.log(employeesBySalary);


