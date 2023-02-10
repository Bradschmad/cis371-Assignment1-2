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

const tArea4 = document.getElementById("area4-table");
tArea4.innerText = "Yo"
const table = document.createElement("table");

//tArea4.appendChild(table);

const thead = document.createElement("th");

const tr1 = document.createElement("td");
const tr2 = document.createElement("td");
const tr3 = document.createElement("td");
tr1.innerText = "Yo";
tr2.innerText = "Yo";
tr3.innerText = "Yo";
thead.appendChild(tr1);
thead.appendChild(tr2);
thead.appendChild(tr3);
table.appendChild(thead);
tArea4.appendChild(table);

/*
for (let c of myCourses) {
    let i: keyof Course
    const row = document.createElement("tr");
    for (i in c) {
        const  cell = document.createElement("td");
        cell.innerText = "Yo";
        row.appendChild(cell);
    }
    table.appendChild(row);
}
*/
