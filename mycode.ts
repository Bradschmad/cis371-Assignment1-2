type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string;
}

let course1 = {
    courseNumber: "CIS 371",
    courseName: "Web Application Programming",
    semesterTaken: "Winter"
}
let course2 = {
    courseNumber: "CIS 360",
    courseName: "Information Management and Science",
    semesterTaken: "Winter"
}
let course3 = {
    courseNumber: "CIS 320",
    courseName: "Visualization of Data and Information",
    semesterTaken: "Winter"
}

const myCourses: Array<Course> = [course1, course2, course3];

const tArea4 = document.getElementById("area4-table");
const table = document.createElement("table");

const thead = document.createElement("tr");

const tr1 = document.createElement("th");
const tr2 = document.createElement("th");
const tr3 = document.createElement("th");

tr1.innerText = "Course Number";
tr2.innerText = "Course Name";
tr3.innerText = "Semester Taken";

thead.appendChild(tr1);
thead.appendChild(tr2);
thead.appendChild(tr3);

table.appendChild(thead);

for (let c of myCourses) {
    const row = document.createElement("tr");
    for (let key in c) {
        const  cell = document.createElement("td");
        cell.innerText = c[key];
        row.appendChild(cell);
    }
    table.appendChild(row);
}
tArea4.appendChild(table);