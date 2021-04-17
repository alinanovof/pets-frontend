import { DragSwitch } from "react-dragswitch";
import "react-dragswitch/dist/index.css";
import React, { useState, useEffect } from "react";

const MyPets = () => {
  const [pets, setPets] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5050/pets")
      .then((res) => {
        res.json().then((data) => {
          setPets(data.pets);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="page-wrapper">
      <h2>My Pets</h2>
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
      <ul className="pets-list">
        {pets.map((pet) => (
          <li className="card pet-list-item text-center" key={pet.id}>
            <img
              src={pet.image_link}
              className="card-img-top"
              alt={pet.pet_name}
            />
            <div className="card-body">
              <h4 className="card-title">{pet.pet_name}</h4>
              <p className="card-text">
               {pet.adopt_status}
              </p>
              <a href="#" class="btn btn-primary">
                Visit {pet.pet_name}'s page
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPets;
