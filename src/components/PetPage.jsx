import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getPetById, updateOwner, getUser } from "../api/api";
import EditPet from "../components/Admin/EditPet";

const PetPage = () => {
  const auth = useAuth();
  const { petId } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const openEditModal = () => setIsOpen(true);
  const closeEditModal = () => setIsOpen(false);
  useEffect(() => {
    getPetById(petId, auth.token).then((data) => {
      setLoading(true)
      setPet(data.pet[0]);
      setLoading(false);
    });
  }, [petId, auth.token]);

  const isHypoallergenic = () => {
    return pet.hypoallerg > 0
  }

  const onFosterClick = () => {
    getUser(auth.token).then((data) => {
      try {
        setLoading(true);
        const userId = data.user.id;
        const petId = pet.id;
        const adoptStatus = "Fostered";
        updateOwner(petId, userId, adoptStatus, auth.token);
        setLoading(false);
        setStatus(true);
      } catch (error) {
        console.error(error.message);
      }
    });
  };

  const onAdoptClick = () => {
    setLoading(true);
    getUser(auth.token).then((data) => {
      const userId = data.user.id;
      const petId = pet.id;
      const adoptStatus = "Adopted";
      updateOwner(petId, userId, adoptStatus, auth.token);
      setLoading(false);
      setStatus(true);
    });
  };

  const onReturnClick = () => {
    setLoading(true);
    setLoading(true);
    const petId = pet.id;
    const adoptStatus = "Looking For Home";
    updateOwner(petId, null, adoptStatus, auth.token);
    setLoading(false);
    setStatus(true);
  };
  if (!pet) {
    return <div class="d-flex justify-content-center mt-3">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>;
  }
  return (
    <div className="page-wrapper text-center">
      <div className="card-back p-3">
        {loading && (
          <div class="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {status && (
          <div className="alert alert-success" role="alert">
            Status Changes Successfully!
          </div>
        )}
        {!loading && (
          <div>
            {" "}
            <h2>{pet.pet_name}</h2>
            <h4>Adoption Status: {pet.adopt_status}</h4>
            <img
              src={pet.image_link}
              className="card-img-top p-1"
              alt={pet.pet_name}
              style={{ maxWidth: 15 + "rem" }}
            />
            <div>
              {pet.color.charAt(0).toUpperCase() + pet.color.slice(1)}{" "}
              {pet.breed} {pet.pet_type}
            </div>
            <div>Bio: {pet.bio}</div>
            <div>Weight: {pet.pet_weight} kg</div>
            <div>Height: {pet.pet_height} cm</div>
            <div>Diet Restrictions: {pet.diet_restr}</div>
            {isHypoallergenic() && <div>Hypoallergenic</div>}
            {isHypoallergenic() && <div></div>}
            <div className="row">
              {auth.admin && (
                <button
                  className="btn btn-primary col m-2"
                  onClick={openEditModal}
                >
                  Edit Pet
                </button>
              )}
              {pet.adopt_status === "Looking For Home" && (
                  <button
                    className="m-2 btn btn-primary col"
                    onClick={onFosterClick}
                  >
                    Foster
                  </button>
              )}
              {(pet.adopt_status === "Fostered" ||
                pet.adopt_status === "Looking For Home") && (
                <button
                  className="m-2 btn btn-primary col"
                  onClick={onAdoptClick}
                >
                  Adopt
                </button>
              )}
              {auth.userId === pet.userId &&
                (pet.adopt_status === "Adopted" ||
                  pet.adopt_status === "Fostered") && (
                  <button
                    className="m-2 btn btn-primary col"
                    onClick={onReturnClick}
                  >
                    Return
                  </button>
                )}
            </div>
          </div>
        )}
        <EditPet
          isOpen={isOpen}
          hideModal={closeEditModal}
          pet={pet}
          setPet={setPet}
        />
      </div>
    </div>
  );
};

export default PetPage;
