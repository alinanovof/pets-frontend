// import { DragSwitch } from "react-dragswitch";
import "react-dragswitch/dist/index.css";
import React, { useState, useEffect } from "react";
import { getPetsByUserId } from "../api/api";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const MyPets = () => {
  const [pets, setPets] = useState();
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  useEffect(() => {
    setLoading(true);
    getPetsByUserId(auth.token).then((data) => {
      setPets(data.pets);
    });
    setLoading(false);
  }, [auth.token]);

  const isEmpty = () => {
    return pets.length < 1;
  };
  if (!pets) {
    return <div class="d-flex justify-content-center mt-3">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>;
  }
  return (
    <div className="page-wrapper">
      <h2>My Pets</h2>
      {loading && (
        <div class="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {/* <div className="mx-auto" style={{ width: 13 + "rem" }}>
        My Pets{" "}
        <DragSwitch
          onColor="#dfb89c"
          handleColor="#B45008"
          checked={checked}
          onChange={(e) => {
            setChecked(e);
          }}
        />{" "}
        Saved Pets
      </div> */}

      {!loading && (
        <ul className="row justify-content-center row-cols-1 row-cols-md-2 g-4 m-3">
          {isEmpty() && <div>Currently you don't have pets</div>}

          {pets &&
            pets.map((pet) => (
              <div className="col-4" key={pet.id}>
                <li
                  className="card p-2 h-100 pet-list-item text-center"
                  style={{ width: 16 + "rem" }}
                >
                  <img
                    src={pet.image_link}
                    className="card-img-top p-1"
                    alt={pet.pet_name}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{pet.pet_name}</h4>
                    <p className="card-text">{pet.adopt_status}</p>
                  </div>
                  <div className="card-footer">
                    <Link to={`/my-pets/${pet.id}`} className="btn btn-primary">
                      Visit {pet.pet_name}'s page
                    </Link>
                  </div>
                </li>
              </div>
            ))}
        </ul>
      )}
    </div>
  );
};

export default MyPets;
