import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SearchResults = (props) => {
    const auth = useAuth();
    
  return (
        
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
      {props.results.map((pet) => {
        return (
          <div className="col" key={pet.id}>
            <li
              className="card h-100 pet-list-item text-center"
              style={{ maxWidth: 15 + "rem" }}
            >
              <img
                src={pet.image_link}
                className="card-img-top p-1"
                alt={pet.pet_name}
                style={{ maxWidth: 15 + "rem" }}
              />
              <div className="card-body">
                <h4 className="card-title">{pet.pet_name}</h4>
                <p className="card-text">{pet.adopt_status}</p>
              </div>
              <div className="card-footer">
                  {auth.token && <Link to={`/my-pets/${pet.id}`} className="btn btn-primary">
                  Visit {pet.pet_name}'s page
                </Link>}
                {!auth.token && <div>Login to see details</div>}
              </div>
            </li>
          </div>
        );
      })}
      </div>
   
  );
};

export default SearchResults;
