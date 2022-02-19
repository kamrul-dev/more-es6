// generally class name start with capital letter
class Support{
    name;
    designation = 'support web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}
const kamrul = new Support('Kamrul', 'BD');
const hasan = new Support('Hasan', 'Dubai');
const sharuk = new Support('srk', 'Dubai');
const khan = new Support('khan', 'Dubai');
kamrul.startSession();
hasan.startSession();
console.log(kamrul, hasan, sharuk, khan);
// console.log(kamrul);
// console.log(hasan);