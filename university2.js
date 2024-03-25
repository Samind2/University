class University {
  department = null;
  constructor(nam, location) {
    this.name = nam;
    this.location = location;
    this.student = [];
    this.profrssor = [];
  }
  addDepartment(department) {
    this.department.push(department);
  }
  addStudent(student) {
    this.student.push(student);
  }
  addProfrssor(profrssor) {
    this.profrssor.push(profrssor);
  }
  removeDepartment(department) {
    this.department.pop(department);
  }
  removeStudent(student) {
    this.student.pop(student);
  }
  getDepartments() {
    return this.department;
  }
  getStudents() {
    return this.student;
  }
  toString() {
    return `University: ${this.name} location: ${this.location} departments: ${this.department} students: ${this.student} profrssors: ${this.profrssor}`;
  }
}

class Department {
  Course = null;
  constructor(name) {
    this.name = name;
    this.course = [];
    this.student = [];
    this.profrssor = [];
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
  toString() {
    return `University: ${this.name} location: ${this.location} departments: ${this.departments} students: ${this.student} profrssors: ${this.profrssor}`;
  }
}

class Course {
  code = "";
  title = "";
  constructor(code, title) {
    this.code = code;
    this.title = title;
    this.students = [];
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
  toString() {}
}

class Profrssor extends Person {
  constructor(staffId, name, address, email) {
    super(name, address, email)
    this.staffId = staffId;
  }
  teachCourse() {}
  stopTeachingCouse() {}
  getCourses() {}
  toString() {}
}

class Student extends Person {
  constructor(name, studentId, year, address, email) {
    super(name, address, email)
    this.studentId = studentId;
    this.year = year
  }
  toString() {
    return `Student: ${this.name} studentId: ${this.studentId} year: ${this.year} address: ${this.address} email: ${this.email}`;
  }
}

const main = () => {
  const university = new University(
    "Nakron Pathom University",
    "85 Malaiman Road, Nakhon pathom, Thailand",
    "Computer Science",
    "Alice, Bob",
    "Dr. Worachet Uttha, Dr. Udsanee Pakdeetrakulwong"
  );
  console.log(university.toString());

  const student = new Student("Alice", "S001", 2, "Thailand", "Alice@gmail.com");
  console.log(student.toString());
};

main();
