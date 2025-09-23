import Nav from './components/Nav'
import './App.css'

function App() {


  return (
    <div>
      <Nav />
      <div className="bg-gray-100 h-screen p-12 pt-24 flex flex-col ">
        <h1 className='font-bold text-3xl'>เนื้อหาหลักของเว็บ</h1>
        <p className='pt-6 text-lg'>
          นี่คือส่วนของเนื้อหาหลักของเว็บที่อยู่ภายใต้ Navigation Bar ลองปรับขนาดหน้าจอเพื่อดู
          การทำงานของ Responsive
        </p>
      </div>
    </div>
  )
}

export default App
