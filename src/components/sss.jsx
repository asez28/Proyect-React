import { MDBBtn, MDBCol, MDBInput, MDBRow, MDBTextArea } from "mdb-react-ui-kit";
import {useQueryClient, useMutation, useQuery } from 'react-query'
import apiUrl from "../api/readTodosRequest";
import ClipLoader from 'react-spinners/ClipLoader';
import updateTodoRequest from '../api/updateTodosRequest';
import deleteTodoRequest from '../api/deleteTodoRequest';

const EditForm = ({todo}) => {
  

  const queryClient = useQueryClient();

  const {mutate: updateTodo} = useMutation((updateTodo) =>updateTodoRequest(updateTodo),
  {
    onSettled: () => {
      queryClient.invalidateQueries('todos');
    }
  });

  const {isLoading, data: todos} = useQuery(
    'todos',
    apiUrl
   );

   const {mutate: deleteTodo} = useMutation((updateTodo) =>deleteTodoRequest(updateTodo),
   {
     onSettled: () => {
       queryClient.invalidateQueries('todos');
     }
   });
   


  return (
    <div className="d-flex justify-content-center">
        {isLoading ? (
          <ClipLoader />
        ):(
          todos.map((todo) => (
          <div className="card m-2 p-2" style={{width: "18rem"}} key={todo._id}>
          <MDBRow className="m-2">
          <MDBCol>
          <MDBInput type='text' value={todo.title} onChange={(e) => updateTodo({...todo, title:e.target.value})}></MDBInput>
          </MDBCol>
          </MDBRow>
          <img className="card-img-top" src={todo.url} alt="Card image cap" />
          <div className="card-body">
          <MDBRow className="m-2">
          <MDBCol>
          <MDBInput type='text' value={todo.place} onChange={(e) => updateTodo({...todo, place:e.target.value})}></MDBInput>
          </MDBCol>
          </MDBRow>
          <MDBRow className="m-2">
          <MDBCol>
          <MDBInput type='text' value={todo.country} onChange={(e) => updateTodo({...todo, country:e.target.value})}></MDBInput>
          </MDBCol>
          </MDBRow>
          <MDBRow className="m-2">
          <MDBCol>
          <MDBInput type='text' value={todo.subtitle} onChange={(e) => updateTodo({...todo, subtitle:e.target.value})}></MDBInput>
          </MDBCol>
          </MDBRow>
          <MDBRow className="m-2">
          <MDBCol>
          <MDBTextArea type='text' value={todo.text} onChange={(e) => updateTodo({...todo, text:e.target.value})}></MDBTextArea>
          </MDBCol>
          </MDBRow>
          <MDBBtn className="btn btn-danger bi bi-trash m-2" onClick={() => deleteTodo(todo)}> Delete</MDBBtn>
       </div>
     </div>
        ))
        )}
        
        </div>
  )};


export default EditForm;

