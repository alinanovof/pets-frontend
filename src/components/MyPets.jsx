import { DragSwitch } from "react-dragswitch";
import "react-dragswitch/dist/index.css";
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { getPets } from "../api/api"

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const [checked, setChecked] = useState(false);
  const auth = useAuth();

  useEffect(() => {
    getPets(auth.token).then(data => {
      setPets(data.data.pets)

    });
    
  }, [auth.token]);

  return (
    <div className="page-wrapper ">
      <h2>My Pets</h2>
      <div className="mx-auto" style={{ width: 13 + "rem" }}>
        All Pets{" "}
        <DragSwitch
          onColor="#dfb89c"
          handleColor="#B45008"
          checked={checked}
          onChange={(e) => {
            setChecked(e);
          }}
        />{" "}
        Saved Pets
      </div>
      <ul className="pets-list">
      <div className="container">
            <div className="row">
        {pets && pets.map((pet) => (
              <div className="col-sm" key={pet.id}>
                <li
                  className="card col-sm pet-list-item text-center mx-auto"
                  style={{ width: 20 + "rem" }, { maxHeight: 30 + "rem"}}
                  key={pet.id}
                >
                  <img
                    src={pet.image_link}
                    className="card-img-top"
                    alt={pet.pet_name}
                    style={{ maxHeight: 20 + "rem"}}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{pet.pet_name}</h4>
                    <p className="card-text">{pet.adopt_status}</p>
                    <a href="#" className="btn btn-primary">
                      Visit {pet.pet_name}'s page
                    </a>
                  </div>
                </li>
              </div>
            
        ))}
        </div>
          </div>
      </ul>
    </div>
  );
};

export default MyPets;
