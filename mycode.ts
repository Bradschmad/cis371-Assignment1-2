//Area 4
type Course = {
    courseNumber: string,
    courseName: string,
    semesterTaken: string
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
tArea4?.appendChild(table);


//Area6
type Company = {
    name: string,
    abbreviation: string,
    url: string
}

let company1 = {
    name: "Ford",
    abbreviation: "FRD",
    url: "https://www.ford.com/"
}
let company2 = {
    name: "GMC",
    abbreviation: "GMC",
    url: "https://www.gmc.com/"
}

const companies: Array<Company> = [company1, company2];

const lArea6 = document.getElementById("area6-list");

const list = document.createElement("ul");

for (let c of companies) {
    const item = document.createElement("li");
    const link = document.createElement("a");

    link.innerText = c.abbreviation;
    link.href = c.url;

    item.appendChild(link);
    list.appendChild(item);
}
lArea6?.appendChild(list);


//Area 8
type SocialMedia = {
    icon: string,
    url: string
}

let icon1 = {
    icon: "images/facebook.png",
    url: "https://www.facebook.com/"
}
let icon2 = {
    icon: "images/twitter.png",
    url: "https://twitter.com/?lang=en"
}
let icon3 = {
    icon: "images/youtube.png",
    url: "https://www.youtube.com/"
}
let icon4 = {
    icon: "images/github.png",
    url: "https://github.com/"
}
let icon5 = {
    icon: "images/steam.png",
    url: "https://store.steampowered.com/"
}

const icons: Array<SocialMedia> = [icon1, icon2, icon3, icon4, icon5];

const lArea8 = document.getElementById("area8-flexbox");

const flexbox = document.createElement("div");
flexbox.id = "flexbox"