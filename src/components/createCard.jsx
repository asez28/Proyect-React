import React, { useState } from 'react';
import InputEmoji from 'react-input-emoji';
import { MDBBtn, MDBCol, MDBInput, MDBRow, MDBTextArea } from "mdb-react-ui-kit";
import {useQueryClient, useMutation, useQuery } from 'react-query';
import createTodoRequest from "../api/createTodoRequest";
import Swal from "sweetalert2";

const CreateForm = () => {

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [place, setPlace] = useState('');
  const [url, setUrl] = useState('');
  const [imgDescription, setImgDescription] = useState('');
  const [country, setCountry] = useState('');
  const [text, setText] = useState('');

  const queryClient = useQueryClient();

  const {mutate: createTodo} = useMutation((newTodo) => createTodoRequest(newTodo),
  { 
    onSettled: () => {
      queryClient.invalidateQueries('todos');
    }
  });

  const handelFormCreatet = (e) => {
    e.preventDefault();

    if(!title.trim() || !subtitle.trim() || !place.trim() || !url.trim() || !imgDescription.trim() || !country.trim() || !text.trim()) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'All fields are required',
        showConfirmButton: false,
        timer: 1500
      }); return;
    };
    createTodo({
     title,
     subtitle,
     place,
     url,
     imgDescription,
     country,
     text
    });
    setTitle('');
    setSubtitle('');
    setPlace('');
    setCountry('');
    setText('');
    setUrl('');
    setImgDescription('');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your Card has been created',
      showConfirmButton: false,
      timer: 1500
    })
  }
    
  return (
    <div className="container m-2 d-flex justify-content-center">
    <form onSubmit={handelFormCreatet}>
    <div>
      <MDBRow className="m-2">
      <MDBCol>
      <MDBInput value={title} onChange={(e) => setTitle(e.target.value)} label='Title'></MDBInput>
      </MDBCol> 
      <MDBCol>
      <MDBInput value={subtitle} onChange={(e) => setSubtitle(e.target.value)} label='Subtitle'></MDBInput>
      </MDBCol>  
      </MDBRow>
      <MDBRow className="m-2">
      <MDBCol>
      <MDBTextArea value={text} onChange={(e) => setText(e.target.value)} className="form-label" label='Description'></MDBTextArea>
      </MDBCol>
      </MDBRow>
    <div>
      <MDBRow className="m-2">
      <MDBCol>
      <MDBInput value={place} onChange={(e) => setPlace(e.target.value)} label='Place'></MDBInput>
      </MDBCol> 
      <MDBCol>
      <MDBInput value={country} onChange={(e) => setCountry(e.target.value)} label='Country'></MDBInput>
      </MDBCol> 
      </MDBRow>
      </div>
      <div>
      <MDBRow className="m-2">
      <MDBCol>
      <MDBInput value={url} onChange={(e) => setUrl(e.target.value)} label='URL of the Picture'></MDBInput>
      </MDBCol> 
      <MDBCol>
      <MDBInput value={imgDescription} onChange={(e) => setImgDescription(e.target.value)} label='Image description'></MDBInput>
      </MDBCol> 
      </MDBRow>
      <div>
      <MDBRow className="m-2">
      <MDBCol>
      <MDBBtn type="submit">Create</MDBBtn>
      </MDBCol>
      </MDBRow>
      </div>
      </div>
      </div>
    </form>
  </div>
  )
}

export default CreateForm;