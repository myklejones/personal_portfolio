function Teacher(name, subject){
    this.name = name;
    this.subject = subject;
    this.teaches = function (){
            console.log(this.name + " teaches " + this.subject);
        }
    
}

// Teacher.prototype.teaches = function (){
//     console.log(this.name + " teaches " + this.subject);
// }

