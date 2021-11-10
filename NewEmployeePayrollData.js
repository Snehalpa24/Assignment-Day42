class EmployeePayrollData{
    id;
    salary;
    gender;
    startDate;
    constructor(...params){
        this.id=params[0];
        this.name=params[1];
        this.salary=params[2];
        this.gender=params[3];
        this.startDate=params[4];
    }

    get name(){return this._name;}
    set name(name){
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$');

        if(nameRegex.test(name))
        {
            //console.log("validate");
        this._name=name;
        }
        else throw 'Name is incorrect';
    }
    toString(){
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{3,}$'); 
        if(nameRegex.test(this.name))

        return "id="+ this.id +",name="+this.name+", salary="+this.salary+",Gender="+this.gender+", startdate="+this.startDate;
        else throw "Name is incorrect ";
    }
}
let EmployeePayRollData=new EmployeePayrollData(1,"Mark",3000);
console.log(EmployeePayRollData.toString());
//EmployeePayRollData.id[0];
try{
let EmployeePayRollData1=new EmployeePayrollData(1,"msrk",4000,"F",new Date());
console.log(EmployeePayRollData1.toString());
}catch(e){
    console.log(e);
}