 // Constructor Function

  // -> camel notation: oneTap
  // -> pascal notation: OneTapa

    function Student(firstName, lastName, dob) {
        // no return keyword here
        // using this keyword
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
        this.getBirthYear = function(){
            return this.dob.getFullYear(); 
        }

        this.getFullName = function(){
            return `${this.firstName} ${this.lastName}`;
        }
            
    }

    //instantiate obj
    const student1 = new Student('John', 'Vhon', '4-3-1980');
    console.log(student1);
    console.log(student1.dob);
    console.log(student1.getBirthYear());
    console.log(student1.getFullName());
