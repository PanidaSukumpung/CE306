//import { useState } from 'react'
import './App.css'
import type { SkillTagProps } from './components/SkillTag'
import UserProfileCard from './components/UserProfileCard'


function App() {
  const users = [{
    id: '1234',
    name: 'Ann',
    avatarUrl : "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww",
    email: 'Ann@gmail.com',
    isOnline: true,
    skills:[
      {skillName: 'Python' , level : 'Advanced'},
      {skillName: 'Java' , level : 'Intermediate'},
    ]as SkillTagProps[],
  },
  {
    id: '3334',
    name: 'Alex',
    avatarUrl : "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    email: 'Alex@gmail.com',
    isOnline: false,
    skills:[
    {skillName: 'Python' , level : 'Advanced'},
    {skillName: 'Java' , level : 'Intermediate'},
    {skillName: 'Java' , level : 'Intermediate'},
    ]as SkillTagProps[],
  },
  {
    id: '2121',
    name: 'Buck',
    avatarUrl : "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
    email: 'Buck@gmail.com',
    isOnline: false,
    skills:[
    {skillName: 'Python' , level : 'Advanced'},
    {skillName: 'Java' , level : 'Beginner'},
    {skillName: 'SQL' , level : 'Intermediate'},
    ]as SkillTagProps[],
  },
  {
    id: '5444',
    name: 'Daniel',
    avatarUrl : "https://plus.unsplash.com/premium_photo-1690579805307-7ec030c75543?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D",
    email: 'Daniel@gmail.com',
    isOnline: true,
    skills:[
    {skillName: 'C++' , level : 'Beginner'},
    {skillName: 'HTML' , level : 'Intermediate'},
    {skillName: 'CSS' , level : 'Intermediate'},
    ]as SkillTagProps[],
  },
  {
    id: '9763',
    name: 'Lara',
    avatarUrl : "https://media.istockphoto.com/id/1389348844/photo/studio-shot-of-a-beautiful-young-woman-smiling-while-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=anRTfD_CkOxRdyFtvsiPopOluzKbhBNEQdh4okZImQc=",
    email: 'Lara@gmail.com',
    isOnline: true,
    skills:[
    {skillName: 'Node.js' , level : 'Advanced'},
    {skillName: 'React' , level : 'Advanced'},
    {skillName: 'Typescript' , level : 'Advanced'},
    ]as SkillTagProps[],
},
]

  const handleViewDetails = (id: string | number) => {
  console.log("User clicked:", id);
  alert(`User ID: ${id}`);
};


  return (
   <div style={{margin:12}}>

    <h1>User Profile</h1>
    <div className='container'>
      {users.map((user) => (
        <UserProfileCard
          key={user.id}
          {...user}
          onViewDetails={handleViewDetails}
        />
      ))}
    </div>

   </div>
   
  )
}

export default App
