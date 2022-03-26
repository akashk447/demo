import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom'
const Editstudent = () => {
    useEffect(() => {
        loadStudents();
      }, []);
      const [page,setPage]=useState([]);
     
    //loading studnet data
    
      const  loadStudents=async ()=>{
      const students =  await axios.get('http://127.0.0.1:8000/api/get');
        // console.log(data.data)
        
          
          setPage(students.data.sname)
          console.log(page)
        
      }
    return(
        <>
            <ReactPaginate
                previousLabel={"Prev"}
                nextLabel={"Next"}
                breakLabel={"---"}
                pageCount={10}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
            />
        </>
    )
}

export default Editstudent