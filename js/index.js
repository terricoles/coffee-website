console.log("Hello!");

let courseTitle = "Intro to web development";
let courseLength = "8 weeks";

console.log(courseTitle);
console.log(courseLength);

let firstName = "Terri";
let lastName = "Coles";
let age = "38";

console.log(firstName);
console.log(lastName);
console.log(age);

let courseAttendees = ["Anskey", "Terri", "Kat", "Annagray"]

console.log(courseAttendees);
console.log(courseAttendees[0]);

let mySkillz = ["bustin' out trap kits", "make you tapes of the rhymes i say", "workin' on my game"]
console.log(mySkillz);

mySkillz[0] = "busting out trap kits";
mySkillz[3] = "on a crazy mission to rap bob mack";

let course = {
    title: "Intro to data science",
    duration: "8 weeks",
    attendees: ["Anskey", "Terri", "Kat", "Annagray"]
}

console.log(course);
console.log(course.title);

let me = {
    name: firstName + " " + lastName,
    age: "38",
    skills: [mySkillz]
}

console.log(me);

me.nickname = "T";
me.skills[4] = "rapping";