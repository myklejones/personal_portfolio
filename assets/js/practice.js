function Employee(name,dob){
    this.name = name 
    this.dob = dob 
    this.clockedIn = false 
}

Employee.prototype.clockIn = function (){
    this.clockedIn = true
    console.log(this.name, 'has clocked In')
}

Employee.prototype.clockOut = function (){
    this.clockedIn = false 
    console.log(this.name, 'has clocked out')
}

function Manager(...args){
    console.log('parameters',args)
    Employee.apply(this, args)
    this.shiftLaead = `${this.name} is manager on duty`
}

Manager.prototype = Object.create(Employee.prototype)

Manager.prototype.writeUp = function (){

}

var employeeOne = new Employee('mike', '01/09/1991')
console.log(employeeOne)
employeeOne.clockIn()
var managerOne = new Manager('mr.Walker', '02/14/1989')

console.log(managerOne)


















