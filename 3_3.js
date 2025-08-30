let students = [{name: "Kiwi", grade: "A"},
                {name: "Lisa" , grade: "C"},
                {name: "Som" , grade: "D"}
]
students.forEach(function(student , index){
    console.log(`Student ${index + 1}: ${student.name}, Grade: ${student.grade}`);
}) 

function showStudentCount() {
    console.log(`Total students: ${students.length}`);
}
showStudentCount()