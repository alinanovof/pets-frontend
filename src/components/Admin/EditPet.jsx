import { Modal } from "react-bootstrap";
import { updatePet, updatePetPic, getPetById } from "../../api/api";
import { useAuth } from "../../context/AuthContext";
import { Formik, Field, Form } from "formik";
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";

const EditPet = (props) => {
  const auth = useAuth();
  const pet = props.pet;
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const { petId } = useParams();

  const submitEdit = async (values) => {
    const formData = new FormData();
      const file = values.file;
      formData.append("file", file);
      const photo = formData;
      const updPet = {
        pet_type: values.petType,
        pet_name: values.petName,
        adopt_status: values.adoptStatus,
        pet_height: values.height,
        pet_weight: values.weight,
        color: values.color,
        bio: values.bio,
        hypoallerg: values.hypoall,
        diet_restr: values.diet,
        breed: values.breed,
      };
    try {
      await updatePet(pet.id, updPet, auth.token);
      if(photo){
        await updatePetPic(pet.id, photo, auth.token);
      }
      setSuccessMsg(true)
      props.hideModal();
    } catch (err) {
      setErrorMsg(err.response.msg);
    }
  };

  if (!pet) {
    return <div></div>;
  }
  return (
    <Modal
      key={Date.now()}
      show={props.isOpen}
      onHide={() => props.hideModal()}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Pet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {successMsg && (
          <div className="alert alert-success" role="alert">
            Pet updated successfully!
          </div>
        )}
        <Formik
          enableReinitialize={true}
          initialValues={{
            petName: pet.pet_name,
            petType: pet.pet_type,
            adoptStatus: pet.adopt_status,
            photo: pet.image_link,
            height: pet.pet_height,
            weight: pet.pet_weight,
            color: pet.color,
            bio: pet.bio,
            hypoall: pet.hypoallerg,
            diet: pet.diet_restr,
            breed: pet.breed,
          }}
          onSubmit={async (values) => {
            setLoading(true)
            submitEdit(values);
            const data = await getPetById(petId, auth.token);
            props.setPet(data.pet[0]);
            props.hideModal()
            setLoading(false)
          }}
        >
          {({ setFieldValue, values }) => (
            <>
            {loading && (
            <div class="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {!loading &&
            <Form className="m-3">
              <label className="form-label" htmlFor="petName">
                Name
              </label>
              <Field
                className="form-control"
                id="petName"
                name="petName"
                type="text"
                required
              />

              <label className="form-label" htmlFor="petType">
                Type of a pet
              </label>
              <Field
                className="form-select"
                id="petType"
                name="petType"
                as="select"
              >
                <option value="">Choose pet's type</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Horse">Horse</option>
                <option value="Other">Other</option>
              </Field>

              <label className="form-label" htmlFor="breed">
                Breed
              </label>
              <Field
                className="form-control"
                id="breed"
                name="breed"
                type="text"
              />

              <label className="form-label" htmlFor="adoptStatus">
                Adoption status
              </label>
              <Field
                className="form-select"
                id="adoptStatus"
                name="adoptStatus"
                as="select"
                required
              >
                <option value="Looking For Home">Looking For Home</option>
                <option value="Fostered">Fostered</option>
                <option value="Adopted">Adopted</option>
              </Field>

              <label className="form-label" htmlFor="color">
                Color
              </label>
              <Field
                className="form-control"
                id="color"
                name="color"
                type="text"
                required
              />

              <label className="form-label" htmlFor="height">
                Height (in cm)
              </label>
              <Field
                className="form-control"
                id="height"
                name="height"
                type="number"
              />

              <label className="form-label" htmlFor="weight">
                Weight (in kg)
              </label>
              <Field
                className="form-control"
                id="weight"
                name="weight"
                type="number"
              />

              <label className="form-label" htmlFor="bio">
                Bio
              </label>
              <Field
                className="form-control"
                id="bio"
                name="bio"
                placeholder="Write a short text about the pet's story"
              />

              <div className="form-check mt-3">
                <Field
                  className="form-check-input"
                  type="checkbox"
                  id="hypoall"
                  name="hypoall"
                  value="true"
                  checked={values.hypoall}
                />
                <label className="form-check-label" htmlFor="hypoall">
                  Hypoallergenic
                </label>
              </div>

              <label className="form-label" htmlFor="diet">
                Diet Restrictions
              </label>
              <Field
                className="form-control"
                id="diet"
                name="diet"
                type="text"
                required
              />

              <label className="form-label" htmlFor="photo">
                Photo
              </label>
              <input
                className="form-control"
                id="photo"
                name="photo"
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={(event) => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }}
              />

              <button className="btn btn-primary mt-3" type="submit">
                Update
              </button>
            </Form>}
            {errorMsg && (
            <div className="alert alert-danger" role="alert">
              {errorMsg}
            </div>
          )}
            </>
          )}
          
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default EditPet;
