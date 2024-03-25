class University {
  Department = null;
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.Department = [];
    this.Student = [];
    this.Profrssor = [];
  }
  addDepartment(Department) {
    this.Department.push(Department);
  }
  addStudent(Student) {
    this.Student.push(Student);
  }
  addProfrssor(Profrssor) {
    this.Profrssor.push(Profrssor);
  }
  removeDepartment(Department) {
    this.Department.pop(Department);
  }
  removeStudent(Student) {
    this.Student.pop(Student);
  }
  getDepartments() {
    return this.Department;
  }
  getStudents() {
    return this.Student;
  }
  getProfrssor() {
    return this.Profrssor;
  }
  toString() {
    let Student = ["Alice", "Bob"];
    for (let i = 0; i < Student.length; i++);

    let Department = ["Computer Science, Software Engineering"];
    for (let i = 0; i < Department.length; i++);

    let Profrssor = ["Dr. Worachet Uttha", "Dr. Udsanee Pakdeetrakulwong"];
    for (let i = 0; i < Department.length; i++);
    return `University: ${this.name} \n location: ${this.location} \n Department: ${Department} \n Students: ${Student} \n Profrssor: ${Profrssor}`;
  }
}

class Department {
  name = "";
  constructor(name) {
    this.name = name;
  }
  addCourse(course) {
    this.course.push(course);
  }
  removeCourse(course) {
    this.course.pop(course);
  }
  addStudent(student) {
    this.student.push(student);
  }
  removeStudent(student) {
    this.student.pop(student);
  }
  addProfrssor(profrssor) {
    this.profrssor.push(profrssor);
  }
  getCourse() {
    return this.course;
  }
  getStudents() {
    return this.student;
  }
  setStudents() {
    this.student = student;
  }
  toString() {
    return `Departname: ${this.name}`;
  }
}

class Course {
  code = "";
  title = "";
  constructor(code, title) {
    this.code = code;
    this.title = title;
  }
  addStudent(student) {
    this.students.push(student);
  }
  removeStudent(student) {
    this.students.pop(student);
  }
  setProfrssor() {
    this.profrssor = profrssor;
  }
  getProfrssor() {
    return this.profrssor;
  }
  getStudents() {
    return this.students;
  }
  toString() {}
}

class Person {
  name = "";
  address = "";
  email = "";
  constructor(name, address, email) {
    this.name = name;
    this.address = address;
    this.email = email;
  }
  toString() {
    return `name: ${this.name} address: ${this.address} email: ${this.email}`;
  }
}

class Profrssor extends Person {
  constructor(staffId, name, address, email) {
    super(name, address, email);
    this.staffId = staffId;
  }
  teachCourse(Course) {}
  stopTeachingCouse(Course) {}
  getCourses() {
    return this.course;
  }
  toString() {
    return `Profrssor: ${this.staffId} name: ${this.name} address: ${this.address} email: ${this.email}`;
  }
}

class Student extends Person {
  toString() {
    return `Student: ${this.name} studentId: ${this.studentId} year: ${this.year} address: ${this.address} email: ${this.email}`;
  }
}
const main = () => {
  const university = new University(
    "Nakron Pathom Rajabhat University",
    "85 Malaiman Road, Nakhon pathom, Thailand"
  );
  console.log(university.toString(this));

  const Person2 = new Person("Bob", "Thailand", "BobPaza@gmail.com");
  //console.log(student2.toString());

  const department = new Department("Computer Science, Software Engineering");
  //console.log(department.toString());

  const student1 = new Student(
    "Alice",
    "S001",
    2,
    "Thailand",
    "Alice@gmail.com"
  );
  //console.log(student1.toString());

  const profrssor1 = new Profrssor("P001","Dr. Worachet Uttha","House", "Worachet@gmail.com")
  //console.log(profrssor1.toString());

  const profrssor2 = new Profrssor("P002","Dr. Udsanee Pakdeetrakulwong","House", "Udsanee@gmail.com")
  //console.log(profrssor2.toString());
};

main();