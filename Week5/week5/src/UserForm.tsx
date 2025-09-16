import React, { useState } from "react";
import type { FormEvent } from "react";
import './UserForm.css'

interface FormData {
    name: string;
    email: string;
}

const UserForm: React.FC = () => {
   const [formData, setFormData] = useState<FormData>({name: '',email: ''})


   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name , value } = event.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value,
    }));
   };

   const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Form submitted with data', formData);
    setFormData({name: '' , email: ''})
    alert(`ชื่อ ${formData.name} อีเมล ${formData.email}`)
   }

   const handleClear = () => {
    setFormData({name: '' , email: ''})
   }

    return(
        <div className="form-container">
            <h2>User Form Exercise</h2>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <label>ชื่อ</label>
                    <input type="text"  name="name" placeholder="กรอกชื่อของคุณ" value={formData.name} onChange={handleChange}  />
                    <label>อีเมล</label>
                    <input type="email" name="email" placeholder="กรอกอีเมลของคุณ" value={formData.email} onChange={handleChange}/>
                </div>
                <div className="all-btn">
                    <button type="submit" className="btn-submit">submit</button>
                    <button type="button" className="btn-clear" onClick={handleClear}>Clear</button>
                </div>
            </form>
            
            <div className="output">
                <h3>ข้อมูลปัจจุบัน</h3>
                <p>
                    <strong>ชื่อ: </strong> 
                    {formData.name ? formData.name : "ยังไม่ได้กรอก"}</p>
                <p>
                    <strong>อีเมล: </strong> 
                    {formData.email ? formData.email : "ยังไม่ได้กรอก"}</p>
            </div>
        </div>
    )
}

export default UserForm