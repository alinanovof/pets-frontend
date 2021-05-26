import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { getPets } from "../../api/api";
import { Link } from "react-router-dom";

const AllPets = () => {
  const [pets, setPets] = useState();
  const [loading, setLoading] = useState(true);
  const auth = useAuth();

  useEffect(() => {
    getPets(auth.token).then((data) => {
      setPets(data.data.pets);
      setLoading(false);
    });
  }, [auth.token]);

  if (!pets) {
    return <div class="d-flex justify-content-center mt-3">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>;
  }
  return (
    <ul className="page-wrapper">
      <h2>All Pets</h2>
       {loading && (
            <div class="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {!loading &&
            pets &&
            pets.map((pet) => (
              <div className="col-sm" key={pet.id}>
                <li
                  className="card p-2 h-100 pet-list-item text-center"
                  style={{ maxWidth: 15 + "rem" }}
                >
                  <button
                    className="btn btn-primary text-end p-0 w-1"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <i className="bi bi-x" style={{ color: "#B45008" }} />
                  </button>
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
