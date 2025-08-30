let students = [{name: "Lana", score: 67 },
    {name: "Nook", score: 31 },
    {name: "Bunny", score: 84 },
    {name: "Cookie", score: 45 },
    {name: "Riena", score: 90 },
    {name: "Megan", score: 50},

]
function filterPassedStudents(students) {
    students.forEach(function(student){
        if(student.score >= 50 && student.score <=100 ) {
            console.log(`Student ${student.name} passed with score ${student.score}`);
        }
    })
}
filterPassedStudents(students);