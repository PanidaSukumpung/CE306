# CE306 JavaScript Exersices


## Workshop3_1 : การตัดคะแนนของนักศึกษา

### โจทย์
ตัดคะแนนของนักศึกษา โดยใช้เฉพาะ if เท่านั้น เกณฑ์คือ
- 80-100 = A
- 70-79 = B
- 60-69 = C
- 50-59 = D
- น้อยกว่า 50 = F


### การทำงานของโค้ด
``` javascript 
let score = 71; 
```
กำหนดตัวแปรชื่อ score เป็นคะแนนของนักศึกษา เพื่อนำไปตัดเกรด

``` javascript
if (score >= 80 && score <= 100) {
    console.log("A");
} if (score >= 70 && score < 80) {
    console.log("B");
} if (score >= 60 && score < 70) {
    console.log("C");
} if (score >= 50 && score < 60) {
    console.log("D");
} if (score < 50) {
    console.log("F");
}
```
- กำหนดเงื่อนไข ```if``` โดยกำหนดช่วงคะแนนและให้```console.log```แสดงเกรดตามที่โจทย์กำหนด
- ใช้ ```&&``` ในเงื่อนไข เพื่อจำกัดช่วงของคะแนน
- ในที่นี้ ```score``` หรือคะแนนของนักศึกษาคือ 71 ซึ่งไม่ตรงกับเงื่อนไขแรก จึงไม่แสดงผล ```A ```และเลื่อนไปตรวจสอบเงื่อนไขถัดไป ซึ่งตรงกับเงื้อนไขนี้ console จึงแสดงผล

```javascript
B
```

---

## Workshop3_2 : การคํานวณราคา

### การทำงานของโค้ด
```javascript
let productPrice = 1000;
let discountPercent = 10;
let totalPrice = productPrice * (100-discountPercent) /100;
```
- ```productPrice``` = ราคาสินค้า
- ```discontPercent``` = เปอร์เซ็นต์ส่วนลด
- ```totalPrice``` = ราคาสินค้าหลังหักส่วนลด โดยคำนวณจาก 1000 * (100-10) /100 = 900

ตรวจสอบราคาสินค้าหลังหักส่วนลด(totalPrice)
```javascript
if (totalPrice <= 0) {
    console.log(`Price: 0`);
}
```
ถ้า ```totalPrice``` น้อยกว่าหรือเท่ากับ 0 ให้แสดงผลเป็น ```Price:0```

```javascript
else if (totalPrice <= 500) {
    console.log(`Price: ${totalPrice + 50}`);
}
```
ถ้า ```totalPrice``` น้อยกว่าหรือเท่ากับ 500 ให้บวกเพิ่ม 50 บาทจาก ```totalPrice``` แล้วแสดงผล

```javascript
else {
    console.log(`Price: ${totalPrice * 90 /100}`);
}
```
- ถ้าราคามากกว่า 500 ให้ลดเพิ่มอีก 10% จาก ```totalPrice``` แล้วแสดงผล
- ซึ่งจากกำหนดตัวแปรข้างบน ```totalPrice = 900``` เข้าเงื่อนไข else -> 900 * 90/100 แสดงผลเป็น
```
Price: 810
```

---

## Workshop3_3: Workshop 3.3: สร้างโปรแกรมแสดงข้อมูลของนักศึกษา

### การทำงานของโค้ด
```javascript
let students = [{name: "Kiwi", grade: "A"},
                {name: "Lisa" , grade: "C"},
                {name: "Som" , grade: "D"}]
```
- กำหนดตัวแปร ```students``` เป็น array ของ object โดยเก็บข้อมูล name , grade 
```javascript
students.forEach(function(student , index){
    console.log(`Student ${index + 1}: ${student.name}, Grade: ${student.grade}`);
}) 
function showStudentCount() {
    console.log(`Total students: ${students.length}`);
}
showStudentCount()

```
- ใช้ forEach วนลูปการแสดงข้อมูลของ students
- โดยใช้ index + 1 เพื่อเริ่มตั้งแต่ Student 1 และบวก1 ไปเรื่อย ๆ
- ฟังก์ชัน showStudentCount แสดงจำนวนข้อมูลทั้งหมดของ students โดยใช้ students.length

ผลลัพธ์
```
Student 1: Kiwi, Grade: A
Student 2: Lisa, Grade: C
Student 3: Som, Grade: D
Total students: 3
```
---

## Workshop3_4: คำนวณผลรวมของราคาสินค้าพร้อมส่วนลด

### การทำงานของโค้ด
```javascript
let products = [
  { price: 300, discount: 5 },
  { price: 1000, discount: 20 },
  { price: 700, discount: 5 },
  { price: 1500, discount: 25 },
  { price: 550, discount: 10 },
];
let totalPrice = 0;
```
- ประกาศตัวแปร products เป็น array ของ object แต่ละ object เก็บ price และ discount
- กำหนดตัวแปร totalPrice = 0 เพื่อเก็บผลรวมของราคาสินค้าหลังหักส่วนลด

```javascript
function calculateTotal() {
  products.forEach(function (product, index) {
    let priceAfter = (product.price * (100 - product.discount)) / 100;
    totalPrice += priceAfter;
  });
  console.log(`Total price after discount: $${totalPrice}`);
}

calculateTotal();
```
- ฟังก์ชัน calculateTotal()
    - ใช้ forEach วนลูปทุกสินค้า
    - คำนวณราคาหลังหักส่วนลด (price * (100 - discount)/100) และเก็บไว้ใน priceAfter
    - บวกเข้า totalPrice เพื่อเก็บผลรวมของราคาสินค้าหลังหักส่วนลด
    - เมื่อออกจากลูป ให้แสดงผลราคารวมหลังส่วนลด(totalPrice)

ผลลัพธ์
```
Total price after discount: $3370
```

---

## Workshop3_5: สร้างโปรแกรมคัดครองนักเรียนที่ผ่านเกณฑ์

### การทำงานของโค้ด
```javascript
let students = [{name: "Lana", score: 67 },
    {name: "Nook", score: 31 },
    {name: "Bunny", score: 84 },
    {name: "Cookie", score: 45 },
    {name: "Riena", score: 90 },
    {name: "Megan", score: 50},]
```
- กำหนดตัวแปร ```students``` เป็น array ของ object โดยเก็บข้อมูล name , score

```javascript
function filterPassedStudents(students) {
    students.forEach(function(student){
        if(student.score >= 50 && student.score <=100 ) {
            console.log(`Student ${student.name} passed with score ${student.score}`);
        }
    })
}
filterPassedStudents(students);
```
- ฟังก์ชัน filterPassedStudents(score)
    - รับ parameter
    - ใช้ forEach ลูปข้อมูลใน students
        - เงื่อนไข ```if``` เช็คว่า score ใน student ของแต่ละคน อยู่ในช่วง 50-100 ไหม
        - ถ้าเข้าเงื่อนไขให้แสดงว่าผ่านเกณฑ์ ให้แสดงผล "Student (name) passed with score (score)"

ผลลัพธ์
```
Student Lana passed with score 67
Student Bunny passed with score 84
Student Riena passed with score 90
Student Megan passed with score 50
```

# CE306 REACT Typescript

## Components
### SkillTag
รับ props:
- skillName : string (ชื่อสกิล)
- level (optional): "Beginner" | "Intermediate" | "Advanced"
ส่งออกเป็น: skill tag

### UserProfileCard
รับ props:
- id, name, avatarUrl, email, isOnline, skills, onViewDetails
- แสดงข้อมูลผู้ใช้ + skills + ปุ่ม "View Details"
- import SkillTag มาแสดงใน card

## App

- เก็บข้อมูลผู้ใช้ user เป็น array
- ส่ง props ไป UserProfileCard
- ฟังก์ชัน handleViewDetails จะแสดง alert เมื่อกดปุ่ม