import { Link } from "react-router-dom";
import CardsContent from "../components/CardsContent";

const Home = () => {
    return (
        <>
         <div className="container m-2">
          <h1 className="title m-2">Welcome to your space!</h1>
          <h3 className="m-2">Your moments in one place to show, all your best moments:</h3>
          <CardsContent/>
          <hr className="hr hr-blurry"/> 
          <Link className="btn btn-dark m-1 bi bi-file-plus" to="/create-form"> Create More</Link>
          <Link className="btn btn-dark m-1 bi bi-pencil" to="/edit-card"> Edit Cards</Link>
          </div>
        </>
    )
};

export default Home;
