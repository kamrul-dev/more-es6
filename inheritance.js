// generally class name start with capital letter

class TeamMember {
    name;
   
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}


class Support extends TeamMember {
    groupSupportTime;
    designation = 'support web dev';
    constructor(name, address, time){
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends TeamMember {
    designation = 'Care web dev';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember {
   codeEditor;
   designation = 'Neptune App dev';
   constructor(name, address, editor){
       super(name, address)
       this.codeEditor = editor;
   }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}

const kamrul = new Support('Kamrul', 'BD', 11);
const hasan = new Support('Hasan', 'Dubai', 4);
const sharuk = new Support('srk', 'Dubai', 9);
const khan = new Support('khan', 'Dubai', 11);

const alia = new StudentCare('Alia Bhat', 'Mumbai');
const kajol = new NeptuneDev('kajol', 'Mumbai', 'Android Studio');
kajol.releaseApp('1.4.5');

console.log(kajol);
// console.log(alia);

// console.log(kamrul);