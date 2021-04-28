import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { getPets } from "../../api/api";
import { Link } from "react-router-dom";

const AllPets = () => {
  const [pets, setPets] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    getPets(auth.token).then((data) => {
      setPets(data.data.pets);
    });
  }, [auth.token]);
  return (
    <ul className="pets-list">
      <div className="container">
        <div className="row">
          {pets &&
            pets.map((pet) => (
              <div className="col-sm" key={pet.id}>
                <li
                  className="card col-sm pet-list-item text-center mx-auto"
                  style={({ width: 20 + "rem" }, { maxHeight: 30 + "rem" })}
                >
                  <button
                    className="btn btn-primary text-end p-0 w-1"
                    style={{ backgroundColor: "transparent" }}
                    //   onClick={deletePet}
                  >
                    <i className="bi bi-x" style={{ color: "#B45008" }} />
                  </button>
                  <img
                    src={pet.image_link}
                    className="card-img-top p-1"
                    alt={pet.pet_name}
                    style={{ maxHeight: 20 + "rem" }}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{pet.pet_name}</h4>
                    <p className="card-text">{pet.adopt_status}</p>
                    <Link to={`/my-pets/${pet.id}`} className="btn btn-primary">
                      Visit {pet.pet_name}'s page
                    </Link>
                  </div>
                </li>
              </div>
            ))}
        </div>
      </div>
    </ul>
  );
};

export default AllPets;
