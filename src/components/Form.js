import './form.css'
import { useState } from 'react'


const Form = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [conformPassword, setconformPassword] = useState('');
    const [message, setmessage] = useState("")
    const [error, setError] = useState("")
    const [required, setrequired] =useState("")


    const EmailValidation = (e) => {
        setemail(e.target.value)
        const RegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (RegEx.test(email)) {
            setmessage("")
        } else if (!RegEx.test(email)) {
            setmessage("email is not valid")
        }

    }
    const passworValidation = (e) => {
        setconformPassword(e.target.value)
       
        if (password === conformPassword) {
            setError("")
        } else if(password !== conformPassword) {

            setError("password dosn't match")
        }
    }
    function clearFields() {
        
        let event =[setname (""),setemail (""),setpassword (""),setconformPassword ("")]
     
    }

    const submit = (event) => {

        let data = { name, email, password, conformPassword }
        if (name !=="" && email !=="" && password !=="" && conformPassword !== "") {
            alert("are you sure to submit data")
            console.log(data)
            clearFields (event);
            
           
        }
        else {

            setrequired("all feild required")

        }
    }

    return (
        <div>
            <form className='user-form'  >
                <h3 className='user-register'>Registration</h3>
                <div className='user-name'>
                    <input type="{text}" placeholder="Enter Name" value={name} onChange={e => setname(e.target.value)} ></input><br></br>
                {required}
                </div>
                <div className='user-email'>
                    <input type="{text} " placeholder="Enter Email" value={email} onChange={EmailValidation}></input><br></br>
                    {required} {message}
                </div>
                <div className='user-password'>
                    <input type='text' placeholder="Enter password" value={password} onChange={e => setpassword(e.target.value)} ></input><br></br>
                    {required} 
                </div >
                <div className='user-conformPassword'>

                    <input type='text' placeholder='Confirm Password' value={conformPassword} onChange={passworValidation}></input><br></br>
                    {required} {error}
                </div><br></br>
                <div className='submit'>
                    <button onClick={submit} type='button'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Form