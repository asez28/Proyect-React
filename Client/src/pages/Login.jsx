import Swal from "sweetalert2";
import React, { useEffect, useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import { login } from '../config/firebase';
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import { useRedirectActiveUser } from '../hooks/useRedirectActiveUser';
import { CardHome } from "../components/cards";

const Login = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

  const {user} = useUserContext()
  useRedirectActiveUser(user, "/home")

  const handleSubmit = async(e) => {
    e.preventDefault()

    try {
        const credentialUser = await login({email, password});
    }catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
    });
    }
  }
    
  return (
    <>
    <h1 className="text-center m-2 text-uppercase">Login</h1>
    <div className="container d-flex">
    <CardHome/>
    <div className='mt-2 d-flex'>
    <div className=' m-2'>
    <img className='imagen2' src= {"https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=740&t=st=1693775785~exp=1693776385~hmac=6fcaad1bb00bbb34828b8bffede88983d906a5a6b39767ae66f4a9a1d8f8178d"} />
    </div>
    <form onSubmit={handleSubmit} className='mt-2 col-6'>
      <MDBInput className='mb-4' type='email' label='Email address' value={email} onChange={(e => setEmail(e.target.value))} />
      <MDBInput className='mb-4' type='password'  label='Password' value={password} onChange={(e => setPassword(e.target.value) )} />
      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
        </MDBCol>
      </MDBRow>
      <div className='d-flex justify-content-center'>
      <MDBBtn  className='m-2' type='submit'>
        Sign in
      </MDBBtn>
      <NavLink  className='btn btn-success m-2' to="/register">Register</NavLink>
      </div>
    </form>
    </div>
    </div>
    </>
  );
}

export default Login;