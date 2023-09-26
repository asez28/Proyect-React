import { useEffect, useState } from "react";
import EditForm from "../components/editCard";

const EditCardForm = () => {

  return (
    <div className="m-2 p-2">
    <h1 className="title">Edit your Card</h1>
    <h3>Edit your moment and show the world wath you like!</h3>
    <hr className="hr hr-blurry"/> 
    <EditForm/>
    </div>
  )
};

export default EditCardForm;
