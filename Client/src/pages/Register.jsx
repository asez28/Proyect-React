import Swal from "sweetalert2";
import React, { useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';
import { register } from '../config/firebase';
import {  addDoc, collection } from 'firebase/firestore';
import { useUserContext } from '../context/UserContext';
import { useRedirectActiveUser } from '../hooks/useRedirectActiveUser';

 const Register = () => {

  const [firstName, setName] = useState('');
  const [lastName, setLastName ] = useState('');
  const [phone, setPhone] = useState('');
  const [urlImage , setImage] = useState('');
  const [country , setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user} = useUserContext();
  useRedirectActiveUser(user, '/')

  const handelRegister = async(e) => {
     e.preventDefault()

    if(!firstName.trim() || !lastName.trim() || !phone.trim() || !country.trim() || !city.trim() || !address.trim() || !email.trim() || !password.trim()) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'All fields are required',
        showConfirmButton: false,
        timer: 1500
      })
      return; 
    }
     try {
        const credentialUser = await register({email, password, firstName, lastName, phone, urlImage, country, city , address })
     } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
    });
     }
    
  }

  return (
    <div className='container d-flex'>
    <div className='col-5'>
    <img className='imagen3' src={'https://www.allen.ac.in/ace2324/assets/images/register.png'} />
    </div>
    <form onSubmit={handelRegister}>
    <h1 className='text-center'>Register</h1>
      <MDBRow className='mb-4 m-2'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First name' value={ firstName } onChange={ e => setName(e.target.value)}/>
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last name' value={lastName} onChange={ e => setLastName(e.target.value)}/>
        </MDBCol>
      </MDBRow>
      <MDBRow>
      <MDBCol className='mb-4 m-2'>
      <MDBInput type='number' label='Phone' value={phone} onChange={ e => setPhone(e.target.value)}></MDBInput>
      </MDBCol>
      <MDBCol className='mb-4 m-2'>
      <MDBInput label='URL IMAGE' value={urlImage} onChange={ e => setImage(e.target.value)}></MDBInput>
      </MDBCol>
      </MDBRow>
      <MDBRow>
      <MDBCol className='mb-4 m-1'>
       <MDBInput type='Text' label='Country' value={country} onChange={ e => setCountry(e.target.value)}></MDBInput>
      </MDBCol>
      <MDBCol className='mb-4 m-1'>
      <MDBInput type='Text' label='City' value={city} onChange={ e => setCity(e.target.value)}></MDBInput>
      </MDBCol>
      <MDBCol className='mb-4 m-1'>
      <MDBInput type='Text' label='Address' value={address} onChange={ e => setAddress(e.target.value)}></MDBInput>
      </MDBCol>
      </MDBRow>
      <div className='m-2'>
      <MDBInput className='mb-4' type='email' label='Email address' value={email} onChange={(e => setEmail(e.target.value))}/>
      <MDBInput className='mb-4' type='password' label='Password' value={password} onChange={(e => setPassword(e.target.value))}/>
      </div>
      <MDBBtn type='submit' className='m-2'>
        Sign up
      </MDBBtn>
      <NavLink className='btn btn-info m-2' to='/'>Login</NavLink>
    </form>
    
    </div>
  );
}

export default Register;