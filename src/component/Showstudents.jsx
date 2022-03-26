import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, NavLink,useNavigate} from 'react-router-dom'
const Showstudents = () => {
  const navigate = useNavigate();
  useEffect(() => {
    loadStudents();
  }, []);
  const [student,setStudents]=useState([]);
  const [viewstudent,setViewStudents]=useState([]);
//loading studnet data

  const  loadStudents=async ()=>{
  const students =  await axios.get('https://api.ak-webservices.com/api/get');
    // console.log(data.data)
    if(students.data.status===200){
      setStudents(students.data.message)
      console.log(student)
    } 
  }

  const viewStudent = async(e,id)=>{
    e.preventDefault();
    const students =  await axios.get('http://127.0.0.1:8000/api/view-student/'+id);
    if(students.data.status===101){
        navigate("/");
    } 
    else{
      const vstu = students.data.data;
      const modal = 
      (<div className="modal fade" id={`stud${vstu.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Details for : {vstu.sname}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
                <div className="modal-body">
                      {vstu.sname}<br/>
                      {vstu.fname}<br/>
                      {vstu.mname}<br/>
                      {vstu.dob}<br/>
                      {vstu.mobile}<br/>
                      {vstu.email}<br/>
                      {vstu.gender}<br/>
                      {vstu.course}<br/>
                </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Edit Student</button>
            </div>
          </div>
        </div>
      </div>)
      setViewStudents(modal)
    }
    
    
  
    }
  //deleting id
  const deleteStudent = async(e,id)=>{
      // alert("fsdff");
      
      const delStudent = await axios.delete(`http://127.0.0.1:8000/api/delete/${id}`)
      if(delStudent.data.status===200){
        // toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {timeOut: 5000})
        loadStudents();
      }
  }

  return (
      <>
      {viewstudent}
    <h3 className='text-center'>Students List</h3>
    <hr></hr>
    <table className="table table-hover table-sm">
    <thead className='table-primary'>
      <tr>
        <th>Student Name</th>
        <th>Father's Name</th>
        <th>Mother's Name</th>
        <th>DOB</th>
        <th>Mobile</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Course</th>
        <th scope="col" className="text-align-center">Action</th>
      </tr>
    </thead>
    <tbody>
     
    {
                  student.map((user,index)=>(
                    // <>
                    <tr>
                        {/* <th scope="row">{index+1}</th> */}
                        <td>{user.sname}</td>
                        <td>{user.fname}</td>
                        <td>{user.mname}</td>
                        <td>{user.dob}</td>
                        <td>{user.mobile}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.course}</td>
                        <td>
                          <button className="btn btn-success mr-2" data-toggle="modal" data-target={`#stud${user.id}`} data-backdrop="static" onClick={(e) => { viewStudent(e, user.id); } }>view</button>
                          <Link className="btn btn-primary mr-2" to={'/update-student/' + user.id}>Edit</Link>
                          <button className="btn btn-danger mr-2" onClick={(e) => { deleteStudent(e, user.id); } }>Delete</button>
                        </td>

                      </tr>
                  ))
              }
    
      
      
    </tbody>
  </table>
    </>
  )
}

export default Showstudents