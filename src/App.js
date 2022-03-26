

import React,{useState,useEffect} from 'react';

import Header from './component/layout/Header';
import Mainpanel from './component/layout/Mainpanel';
import Sidepanel from './component/layout/Sidepanel';
import './app.css';
import loader1 from './loader.gif';
function App() {
  const [loader2,setLoader]=useState(false);
  useEffect(()=>{
    setLoader(true)
    setTimeout(()=>{
        setLoader(false)
    },3000)
  },[]);
  return (
    <React.Fragment>
        {/* {loader2?
        <>
        <div className="loader">
        <img  src={loader1} alt="hkjhk" srcSet="" />
        </div>
        </>
        
        :
        } */}
        <>
        <Header/>
        <Sidepanel/>
        <Mainpanel/>
        </>

        
    </React.Fragment>
  );
}

export default App;
