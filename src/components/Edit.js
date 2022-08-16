import React, { useState, useEffect } from 'react'

import array from './array';
// import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Edit() {

	const [name, setname] = useState('');
	const [lastName, setlastName] = useState('');
	const [email, setemail] = useState('');
	const [id, setid] = useState('');

	let navigate = useNavigate()

	var index = array.map(function (e) { return e.id; }).indexOf(id);


	const handelSubmit = (e) => {
		e.preventDefault();

		let a = array[index]
		a.name = name
		a.lastName = lastName
		a.email = email

		// redirecting to main page
		navigate('/')
	}



	useEffect(() => {
		setid(localStorage.getItem('id'))
		setname(localStorage.getItem('Name'))
		setlastName(localStorage.getItem('lastName'))
		setemail(localStorage.getItem('email'))

	}, [])

	return (
		<div>
			<form>



				<input value={name}
					onChange={e => setname(e.target.value)}
					type="text" placeholder="Enter Name" /><br></br>

				<input value={lastName}
					onChange={e => setlastName(e.target.value)}
					type="text" placeholder="last Name" />

				<br></br>
				<input value={email}
					onChange={e => setemail(e.target.value)}
					type="text" placeholder="Enter Email" /><br></br>
				<button
					onClick={e => handelSubmit(e)}
					type="submit" >
					Update
				</button>


			</form>
		</div>
	)
}

export default Edit
