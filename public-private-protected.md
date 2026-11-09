in typescript, public, private ,protected all are called access modifier, they can secure your data.
the short explanation in bellow;-
public: Members can be accessed from anywhere. It is the default modifier.
private: Members can be accessed only within the class where they are defined.
protected: Members can be accessed within the class and its subclasses.

using this modifier i can write a  program like bellow-
class Employee{
    protected name:string;
    private baseSalary:number;

    constructor(name:string,baseSalary:number){
        this.name = name;
        this.baseSalary= baseSalary;
    }
    getDetails():string{
        return `"Employee: ${this.name}, Base Salary: ${this.baseSalary}"`

    }
}
class Manager extends Employee{
    private department:string;

    constructor(name:string,baseSalary:number,department:string){
        super(name,baseSalary)
        this.department=department;
    }
    getRoleInfo(){
        return `"Manager of ${this.department}: ${this.name}"`
    }
}
const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted")
            }, 1000)
        } else {
            reject(new Error("Access Denied: Must be 18 or older"))
        }
    })

}
