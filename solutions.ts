function multiplyValue(num_1:number,num_2:number=2):number{
    return num_1 * num_2;
}
const processInput =(value:string | number | boolean)=>{
    const valueType= typeof value;
    if(valueType === 'string'){
        const result = String(value).trim().toLowerCase();
        return result;
    }
    if(valueType === 'number'){
        const result:number = Number(value)*10;
        return result;
    }
    if(valueType === 'boolean'){
        if(value){
            return 'Active';
        }else{
            return "Inactive"
        }
    }
   
}
const formatCoordinate =(address:readonly[number,number,string])=>{
    return `Location: ${address[2]} (${address[0]}, ${address[1]})`;
}
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}
export interface Course{
    title:string,
    students:number,
    isPublished :boolean
}
const getPopularCourses=(courses:Course[],minStudents:number)=>{
   
    const result = courses.filter(course=>{
        if(course.students >= minStudents && course.isPublished){
            return true
        }           
        else return false
    })
   return result
}
function pluckValues<T, K extends keyof T>(items: T[],key: K): T[K][] {
    return items.map(item => item[key]);
}
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
