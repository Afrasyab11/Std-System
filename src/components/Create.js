import React, { useState } from 'react'
import './Createform.css'
import array from './array';

import { useNavigate } from 'react-router-dom'
// import { v4 as uuid } from 'uuid';
const Create = () => {

  const [name, setname] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const navigate = useNavigate();
  const [employee,setEmployee]= useState(array);
//   const [user, setuser] = useState({
//     name:"",
//     lastName:"",
//     email:""
//   });
// <Home data= {user} />
  const handelSubmit = (e) => {

    e.preventDefault();
    // console.log(user)
    
  //  const array = { name, lastName, email };
    // <Home data={array} />
   
    // console.log(array)

    // const ids = uuid() 
    // let uniqueid = ids.slice(0,8) 


    let a = name, b=lastName, c= email
    employee.push({name:a, lastName:b,email:c});
    localStorage.setItem("e",JSON.stringify(employee));
    localStorage.setItem("create",1);
    navigate("/")
  }

  return (
    <div>
      <form className='form'>
        <label className='fname'>First Name</label>
        <input className='Ename' type="text" placeholder="Enter First Name" value={name}  onChange={e => setname(e.target.value)} ></input> <br></br><br></br>
        <label className='lname'>Last Name</label>
        <input className='elast' type="text" placeholder="Enter Last Name" value={lastName}  onChange={e => setlastName(e.target.value)} ></input><br></br><br></br>
        <label className='email'>Email</label>
        <input className='Eemail' type="email" placeholder="Enter Email" value={email}  onChange={e => setemail(e.target.value)} ></input><br></br><br></br>
        <button className='button' type='submit' onClick={ handelSubmit} >Submit</button>

      </form>
    </div>
  )
}

export default Create