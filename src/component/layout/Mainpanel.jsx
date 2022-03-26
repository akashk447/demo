import React,{useState,useEffect} from 'react'
import { Routes,Route,useNavigate } from 'react-router-dom'
import AddStudent from '../AddStudent'
import Editstudent from '../Editstudent'
import Showstudents from '../Showstudents'
import UpdateStudent from '../UpdateStudent'
import NotFound from './NotFound'
const Mainpanel = () => {
  const navigate = useNavigate();
  
  return (
    <>
   
    <div className="page-wrapper">
     
     <div className="container-fluid">
     
         
          <Routes>
           <Route exact path="/" element={<Showstudents/>}/>
           <Route exact path="/show-students" element={<Showstudents/>}/>
           <Route exact path="/add-student" element={<AddStudent/>}/>
           <Route exact path="/edit-student" element={<Editstudent/>}/>
           <Route exact path="/update-student/:id" element={<UpdateStudent/>}/>
           <Route path="*"  element={<NotFound/>}/>
           </Routes>
 


    
     </div>
 
     <footer className="footer text-center">
       All Rights Reserved by Ak Web Services. Designed and Developed by
       <a href="https://www.ak-webservices.com"> Akash Kumar  </a>.
     </footer>
    
   </div>
    </>
  )
}

export default Mainpanel