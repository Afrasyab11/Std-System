// import React, { useState } from 'react'
import './Home.css'
import { useNavigate, Link } from 'react-router-dom'
import './create.css'
import array from './array';
import { useState } from 'react';




const Home = () => {

  const [employee, setEmployee] = useState(array);
  // var array = [];
  let navigate = useNavigate();
  const Update = (id, name, lastName, email) => {
    localStorage.setItem('Name', name)
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('email', email)
    localStorage.setItem('id', id)
  }

  function setID() {
    // array.push({ id: 1, name: "Muhammad", lastName: "Afrasyab", email: "makust7@gmail.com" });
    if (localStorage.getItem("create") != undefined && localStorage.getItem("create") != null && localStorage.getItem("create") == 1) {

      setEmployee(JSON.parse(localStorage.getItem("e")));
      localStorage.setItem("create", 0);
    }
  }

  setID();

  const deleted = (id) => {

    var index = array.map(
      function (e) { return e.id; }).indexOf(id);
    array.splice(index, 1)
    navigate('/')
  }


  return (
    <>

      <div className='Create' >
        <button className='create' type='button' > Create </button>
        {/* <Link className='create' to='/Create'>Create</Link> */}
      </div>
      <div>

        <table >
          <thead>
            <tr>
              <th>Name</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Operations</th>
            </tr>
          </thead>
          {/* Table data will be stored in below cells */}
          <tbody>

            {
              employee && employee.length > 0 ?
                employee.map((item, i) => (

                  <tr key={i}>
                    <th>{item.name}</th>
                    <th>{item.lastName}</th>
                    <th>{item.email}</th>
                    <td className='btn-actions'><Link to='/Edit-Emp'><button onClick={() =>
                      Update(item.id, item.name, item.lastName, item.email)}>Edit</button></Link>
                      <button onClick={() => deleted(item.id)}>Delete</button> </td>
                  </tr>
                )) :
                "data is not available"}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home;