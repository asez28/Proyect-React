import { useEffect, useState } from "react";
import CreateForm from "../components/createCard";
import CardsContent from "../components/CardsContent";

const CreateCardForm = () => {

  return (
    <div className="m-2 p-2">
    <h1 className="title">Create your Card</h1>
    <h3>Start create your moment and show the world wath you like!</h3>
    <hr className="hr hr-blurry"/> 
    <CreateForm/>
    </div>
  )
};

export default CreateCardForm;
