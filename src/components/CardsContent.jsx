import { useEffect, useState } from "react";
import apiUrl from "../api/readTodosRequest";
import { useQuery } from "react-query";
import ClipLoader from 'react-spinners/ClipLoader';


const CardsContent = () => {

   const {isLoading, data: todos} = useQuery(
    'todos',
    apiUrl
   )

    return (
        <div className="d-flex justify-content-center ">
        {isLoading ? (
          <ClipLoader />
        ):(
          todos.map((todo) => (
          <div className="card m-2 p-2 bg-secondary" style={{width: "18rem"}} key={todo._id}>
          <h3 className="card-title">{todo.title}</h3>
          <img className="card-img-top" src={todo.url} alt="Card image cap" />
          <div className="card-body">
          <li>{todo.place}</li>
          <li>{todo.country}</li>
          <h5 className="card-title">{todo.subtitle}</h5>
          <p className="card-text">{todo.text}</p>
       </div>
     </div>
        ))
        )}
        
        </div>
    )
};

export default CardsContent;