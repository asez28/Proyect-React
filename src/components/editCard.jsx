import React, { useState } from 'react';
import { MDBBtn, MDBCol, MDBInput, MDBRow, MDBTextArea } from 'mdb-react-ui-kit';
import { useQueryClient, useMutation, useQuery } from 'react-query';
import apiUrl from '../api/readTodosRequest';
import ClipLoader from 'react-spinners/ClipLoader';
import updateTodoRequest from '../api/updateTodosRequest';
import deleteTodoRequest from '../api/deleteTodoRequest';

const EditForm = () => {
  const queryClient = useQueryClient();
  const [editedTodo, setEditedTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const { mutate: updateTodo } = useMutation(
    (updatedTodo) => updateTodoRequest(updatedTodo),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos');
        setIsEditing(false);
        setEditedTodo(null);
      },
    }
  );

  const { isLoading, data: todos } = useQuery('todos', apiUrl);

  const { mutate: deleteTodo } = useMutation((updatedTodo) => deleteTodoRequest(updatedTodo), {
    onSettled: () => {
      queryClient.invalidateQueries('todos');
      setIsEditing(false);
      setEditedTodo(null);
    },
  });

  const handleEdit = (todo) => {
    setEditedTodo({ ...todo });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTodo(null);
  };

  const handleUpdate = () => {
    updateTodo(editedTodo);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="d-flex justify-content-center">
      {isLoading ? (
        <ClipLoader />
      ) : (
        todos.map((todo) => (
          <div className="card m-2 p-2" style={{ width: '18rem' }} key={todo._id}>
            <MDBRow className="m-2">
              <MDBCol>
                <MDBInput
                  type="text"
                  name="title"
                  value={editedTodo ? editedTodo.title : todo.title}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </MDBCol>
            </MDBRow>
            <img className="card-img-top" src={todo.url} alt="Card image cap" />
            <div className="card-body">
              <MDBRow className="m-2">
                <MDBCol>
                  <MDBInput
                    type="text"
                    name="place"
                    value={editedTodo ? editedTodo.place : todo.place}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow className="m-2">
              <MDBCol>
                <MDBInput
                  type="text"
                  name="country"
                  value={editedTodo ? editedTodo.country : todo.country}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="m-2">
            <MDBCol>
              <MDBInput
                type="text"
                name="subtitle"
                value={editedTodo ? editedTodo.subtitle : todo.subtitle}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </MDBCol>
          </MDBRow>
          <MDBRow className="m-2">
          <MDBCol>
            <MDBTextArea
              type="text"
              name="text"
              value={editedTodo ? editedTodo.text : todo.text}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </MDBCol>
        </MDBRow>
              {!isEditing ? (
                <MDBBtn className="btn btn-primary m-2" onClick={() => handleEdit(todo)}>
                  Edit
                </MDBBtn>
              ) : (
                <div>
                  <MDBBtn className="btn btn-success m-2" onClick={handleUpdate}>
                    Update
                  </MDBBtn>
                  <MDBBtn className="btn btn-secondary m-2" onClick={handleCancel}>
                    Cancel
                  </MDBBtn>
                </div>
              )}
              <MDBBtn className="btn btn-danger bi bi-trash m-2" onClick={() => deleteTodo(todo)}>
                 Delete
              </MDBBtn>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default EditForm;
