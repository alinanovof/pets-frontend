import { createPet, addPetPic } from "../../api/api";
import { useAuth } from "../../context/AuthContext";
import { useState, useRef } from "react";
import { Formik, Field, Form } from "formik";
const { uuid } = require('uuidv4');

const AddPet = () => {
  const auth = useAuth();
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef();
  const id = uuid()

  const addPetOnSubmit = async (values) => {
    try {
      setErrorMsg(false)
      const formData = new FormData();
    const file = values.file;
    formData.append("file", file);
    const photo = formData;
    const newPet = {
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
      await createPet(id, newPet, auth.token);
      await addPetPic(id, photo, auth.token)
      setSuccessMsg(true)
    } catch (error) {
      setSuccessMsg(false)
      setErrorMsg(error.response.data.errors[0].msg);
    }
  };

  return (
    <div className="page-wrapper">
      <h2>Add A Pet</h2>
      <Formik
        initialValues={{
          petName: "",
          petType: "",
          adoptStatus: "",
          height: null,
          weight: null,
          color: "",
          bio: "",
          hypoall: false,
          diet: "",
          breed: "",
        }}
        onSubmit={async (values) => {
          await addPetOnSubmit(values);
        }}
     >
{({ setFieldValue, values }) => (
      <Form className="m-3 card-back" >
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
          required
        >
          <option defaultValue value="">
            Select pet's type
          </option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="horse">Horse</option>
          <option value="other">Other</option>
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
          <option defaultValue value="">
            Select adoption status
          </option>
          <option value="Looking For Home">Looking For Home</option>
          <option value="Fostered">Fostered</option>
          <option value="Adopted">Adopted</option>
        </Field>

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
          as="textarea"
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

        <button className="btn btn-primary mt-3" type="submit">
          Add
        </button>
        {successMsg && (<div className="alert alert-success" role="alert">
                Pet Added Successfully
              </div>)}
              {errorMsg && (
            <div className="alert alert-danger" role="alert">
              {errorMsg}
            </div>
          )}
      </Form>
      )}
      </Formik>
     
    </div>
  );
};

export default AddPet;
