# CE306 REACT Typescript WEEK5

## Workshop 1
### Counter
```javascript
interface CounterProps {
    initialCount ?: number;
}
```
- รับ prop เป็น number แบบ optional
```javascript
const Counter: React.FC<CounterProps> = ({initialCount = 0}) => {
    const [count, setCount] = useState<number>(initialCount);
```
- ถ้าไม่ส่งค่าอะไรมา กำหนดให้ default เป็น 0
- ใช้ useState ไว้เก็บและแก้ไขค่า count ให้ส่งค่าเป็นprop(initialCount) และ typeเป็น number
```javascript
    <button className="btn-increase" onClick={() => setCount(count + 1)}>+ เพิ่ม</button>
    <button className = 'btn-decrease' onClick={() => setCount(count - 1)}>- ลบ</button>
    <button className="btn-reset" onClick={() => setCount(0)}> Reset </button>
```
- เมื่อ click แต่ละปุ่ม อัปเดตค่า count ตามที่กำหนด

## Workshop 2
### UserForm
```javascript
const UserForm: React.FC = () => {
   const [formData, setFormData] = useState<FormData>({name: '',email: ''})
```
- ใช้useState เก็บค่า input ไว้ใน formData
- Function
    - ``` handleChange ``` อัปเดตค่า input แบบ real time
    - ``` handleSubmit ``` เมื่อกดปุ่ม submit
        - ป้องกันการ refresh หน้า
        - รีเซ็ตค่า input
        - ขึ้น alert ชื่อกับอีเมล
    - ``` handleClear ``` รีเซ็ตค่า input