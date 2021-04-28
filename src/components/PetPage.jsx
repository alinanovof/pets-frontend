import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getPetById, updateOwner, getUser } from "../api/api";
import EditPet from "../components/Admin/EditPet";

const PetPage = () => {
  const auth = useAuth();
  const { petId } = useParams();
  const [pet, setPet] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const openEditModal = () => setIsOpen(true);
  const closeEditModal = () => setIsOpen(false);
  useEffect(() => {
    getPetById(petId, auth.token).then((data) => {
      setPet(data.pet[0]);
    });
  }, [petId, auth.token]);
  const onFosterClick = () => {
    getUser(auth.token).then((data) => {
      const userId = data.data.user.id;
      const petId = pet.id;
      const adoptStatus = "Fostered";
      updateOwner(petId, userId, adoptStatus, auth.token);
      getPetById(petId, auth.token).then((data) => {
        setPet(data.pet[0]);
      });
    });
  };
  const onAdoptClick = () => {
    getUser(auth.token).then((data) => {
      const userId = data.data.user.id;
      const petId = pet.id;
      const adoptStatus = "Adopted";
      updateOwner(petId, userId, adoptStatus, auth.token);
      getPetById(petId, auth.token).then((data) => {
        setPet(data.pet[0]);
      });
    });
  };
  const onReturnClick = () => {
    getUser(auth.token).then((data) => {
      const userId = data.data.user.id;
      const petId = pet.id;
      const adoptStatus = "Looking For Home";
      updateOwner(petId, userId, adoptStatus, auth.token);
      getPetById(petId, auth.token).then((data) => {
        setPet(data.pet[0]);
      });
    });
  };
  if (!pet) {
    return <div></div>;
  }
  return (
    <div className="page-wrapper text-center">
      <h2>{pet.pet_name}</h2>
      <h4>Adoption Status: {pet.adopt_status}</h4>
      <div>
        {pet.color.charAt(0).toUpperCase() + pet.color.slice(1)} {pet.pet_type}
      </div>
      <div>Bio: {pet.bio}</div>
      <div>Weight: {pet.pet_weight} kg</div>
      <div>Height: {pet.pet_height} cm</div>
      <div>Diet Restrictions: {pet.diet_restr}</div>
      <div>Owner's Id: {pet.userId}</div>
      <button className="btn btn-primary" onClick={openEditModal}>
        Edit Pet
      </button>
      {pet.adopt_status === "Looking For Home" && (
        <div>
          <button className="m-2 btn btn-primary" onClick={onFosterClick}>
            Foster
          </button>
        </div>
      )}
      {(pet.adopt_status === "Fostered" || pet.adopt_status === "Looking For Home") && (
        <button className="m-2 btn btn-primary" onClick={onAdoptClick}>
          Adopt
        </button>
      )}
      {pet.adopt_status === "Adopted" && 
        <button className="m-2 btn btn-primary" onClick={onReturnClick}>
          Return
        </button>
      }
      <EditPet
        isOpen={isOpen}
        hideModal={closeEditModal}
        pet={pet}
        setPet={setPet}
      />
    </div>
  );
};

export default PetPage;
