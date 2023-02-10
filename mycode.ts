type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string;
}

let course1 = {
    courseNumber: "371",
    courseName: "Web Application Programming",
    semesterTaken: "Winter"
}
let course2 = {
    courseNumber: "360",
    courseName: "Information Management and Science",
    semesterTaken: "Winter"
}
let course3 = {
    courseNumber: "320",
    courseName: "Visualization of Data and Information",
    semesterTaken: "Winter"
}

const myCourses: Array<Course> = [course1, course2, course3];

