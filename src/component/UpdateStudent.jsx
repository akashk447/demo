

import axios from 'axios';
import React, { useState,useEffect } from 'react';
import {Navigate, useNavigate,useParams} from 'react-router-dom'
const UpdateStudent = () => {
    let { id } = useParams();
  const navigate =useNavigate();
  useEffect(() => {
    loadStudents();
  }, []);
  const [student,setStudent]=useState({
    sname:"",fname:"", mname:"",dob:"",mobile:"",email:"",gender:"",course:""
  });


  const  loadStudents=async ()=>{
    const students =  await axios.get(`http://127.0.0.1:8000/api/view-student/${id}`);
      // console.log(data.data)
      if(students.data.status===200){
        //   alert("something went wrong")
        setStudent(students.data.data)
         console.log(student)
      } 
      else{
          
      }
    }
  
  const addInput =(e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
  }

    
  
//   const postsubmit = async(e)=>{
//     const config = {
//       headers:{'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'}
//     }
//       e.preventDefault();
//       // alert(student.fname);
//       const res = await axios.post("http://127.0.0.1:8000/api/add",student,config);
//       if(res.data.status==200){
//         // alert(res.data.message);
//         navigate('/show-students')
//       }
//       setStudent({
//         sname:"",
//     fname:"",
//     mname:"",
//     dob:"",
//     mobile:"",
//     email:"",
//     gender:"",
//     course:"",
// onSubmit={postsubmit}
//       })
//   }

  return (
      <>
    <div className="row">
        
        <div className="col-md-7  text-center">
        <form className="form-horizontal">
        <div className="card">   
                  <div className="card-body">
                    <h4 className="card-title">Personal Info</h4><hr/>
                        <div className="form-group row">
                        <label
                            
                            className="col-sm-3 text-end control-label col-form-label"
                            >Name of the student</label
                        >
                        <div className="col-sm-9">
                            <input
                            type="text"
                            className="form-control"
                            id="sname"
                            name="sname"
                            value={student.sname}
                            onChange={addInput}
                            placeholder="First Name Here"
                            />
                        </div>
                        </div>
                        <div className="form-group row">
                        <label
                           
                            className="col-sm-3 text-end control-label col-form-label"
                            >Father's Name</label
                        >
                        <div className="col-sm-9">
                            <input
                            type="text"
                            className="form-control"
                            id="fname"
                            value={student.fname}
                            onChange={addInput}
                            name="fname"
                            placeholder="Father's Name Here"
                            />
                        </div>
                        </div>
                        <div className="form-group row">
                        <label
                            
                            className="col-sm-3 text-end control-label col-form-label"
                            >Mother's Name</label
                        >
                        <div className="col-sm-9">
                            <input
                            type="text"
                            className="form-control"
                            id="mname"
                            value={student.mname}
                            onChange={addInput}
                            name="mname"
                            placeholder="Mother's Name Here"
                            />
                        </div>
                        </div>
                        <div className="form-group row">
                        <label
                            
                            className="col-sm-3 text-end control-label col-form-label"
                            >Date Of Birth</label
                        >
                        <div className="col-sm-9">
                            <input
                            type="date"
                            className="form-control"
                            id="dob"
                            value={student.dob}
                            onChange={addInput}
                            name="dob"
                            
                            />
                        </div>
                        </div>
                        <div className="form-group row">
                        <label
                           
                            className="col-sm-3 text-end control-label col-form-label"
                            >Gender</label
                        >
                        <div className="col-sm-9 text-left py-2">
                    
                        <input
                          type="radio"
                          
                          id="customControlValidation1"
                          name="gender"
                          value="M"
                          onChange={addInput}
                          required
                        />
                        <label
                          className="form-check-label mb-0"
                          
                          >Male</label
                        >
                        &nbsp;
                        <input
                          type="radio"
                          
                          id="customControlValidation1"
                          name="gender"
                          value="F"
                          onChange={addInput}
                          required
                        />
                        <label
                          className="form-check-label mb-0"
                          
                          >Female</label
                        >
                      
                        </div>
                        </div>
                        <div className="form-group row">
                        <label
                            
                            className="col-sm-3 text-end control-label col-form-label"
                            >Mobile Number</label
                        >
                        <div className="col-sm-9">
                            <input
                            type="text"
                            className="form-control"
                            maxLength="10"
                            id="mobile"
                            value={student.mobile}
                            onChange={addInput}
                            name="mobile"
                            placeholder="Mobile Number Here"
                            />
                        </div>
                        </div>
                        <div className="form-group row">
                        <label
                            
                            className="col-sm-3 text-end control-label col-form-label"
                            >Email ID</label
                        >
                        <div className="col-sm-9">
                            <input
                            type="text"
                            className="form-control"
                            
                            id="email"
                            value={student.email}
                            onChange={addInput}
                            name="email"
                            placeholder="Email Id Here"
                            />
                        </div>
                        </div>
                        <div className="form-group row">
                        <label
                            
                            className="col-sm-3 text-end control-label col-form-label"
                            >Select Course</label
                        >
                        <div className="col-sm-9">
                        <select className="form-control" id="sel1" name="course" onChange={addInput}>
                        <option selected="true" disabled="disabled">Choose Course</option>  
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="REACT JS">REACT JS</option>
                            <option value="LARAVEL">LARAVEL</option>
                      </select>
                        </div>
                        </div>
                        
                   </div>
                        
        </div>
        <div className='text-center'>
        <input type="submit" value="Submit Data"  className='btn btn-primary mr-2'/>
        <input type="button" value="Reset Field" className='btn btn-secondary mr-2'/>
        <input type="button" value="Cancel" className='btn btn-danger mr-2'/>
    </div>
        </form>
        </div>
        <div className="col-md-5">
        <div className="card">
                <form className="form-horizontal">
                  <div className="card-body">
                    <h4 className="card-title text-center">Live Preview Data</h4><hr/>
                    <div className="form-group row">
                    <div className="col-md-5">
                      <label
                       
                        >Name of the student : </label
                      ><label
                       
                        >Father's Name : </label
                      ><br/><label
                       
                        >Mother's Name : </label
                      ><br/>
                      <label
                       
                        >Date Of Birth: </label
                      ><br/>
                    <label
                       
                        >Gender : </label
                      ><br/>
                      <label
                       
                        >Mobile Number : </label
                      ><br/>
                      <label
                       
                        >Email Id : </label
                      ><br/><label
                       
                        >Course : </label
                      ><br/>
                      </div>
                    <div className="col-md-7">

                      <label
                        id="fname"
                        style={{"color":"green"}}
                        >{student.sname} </label
                      ><br/>
                      <label
                       
                        >{student.fname} </label
                      ><br/><label
                       
                        >{student.mname} </label
                      ><br/>
                      <label
                       
                        >{student.dob} </label
                      ><br/>
                    <label
                       
                        >{student.gender=="M"?"Male":"Female" }</label
                      ><br/>
                      <label
                       
                        >{student.mobile} </label
                      ><br/>
                      <label
                       
                        >{student.email} </label
                      ><br/><label
                       
                        >{student.course}</label
                      ><br/>
                    
                      </div>
                     
                    </div>
                   </div>
                 </form>
        </div>
        </div>
     
        
    </div>
    
    </>
  )
}

export default UpdateStudent;