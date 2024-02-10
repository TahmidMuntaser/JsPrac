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

    // this keyword:

    // method -> obj
    // function -> global or window

    const video = {
        title: 'a', //property name
        tags: ['a', 'b', 'c'], 
        // play: function(){
        //     console.log(this); // rep video object
        // }

        showTags(){ // foreach bcoz we use array
            this.tags.forEach(function(tag){
                console.log(this.title,tag); // rep window object
            }, this) // for each has two parameters
        }
    }

    video.showTags();

    // play is a method

    video.stop = function(){
        console.log(this); // rep video object
    }
    // video.play();
    video.stop();

    // regualr function -> global or window
    function videoPlay(title){
        console.log(this); 
    }

    videoPlay(); // rep window object

    // window.alert('hello');


    function Video(title){
        this.title = title;
        console.log(this); // this rep local obj
    }
    const v = new Video('uuu'); // new creates an empty obj



