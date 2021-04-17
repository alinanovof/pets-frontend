import { Formik } from "formik";
import { useFormik } from "formik";
import React, { useState, useRef } from "react";


const AddPet = () => {
  const [values, setValues] = useState();
  const formik = useFormik({
    initialValues: {
      petName: "",
      petType: "",
      adoptStatus: "",
      photo: "",
      height: null,
      weight: null,
      color: "",
      bio: "",
      hypoall: false,
      diet: "",
      breed: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setValues(values)
    },
  });

  if(values){const newPet = {
    pet_type: values.petType,
    pet_name: values.petName,
    adopt_status: values.adoptStatus,
    image_link: values.photo,
    pet_height: values.height,
    pet_weight: values.weight,
    color: values.color,
    bio: values.bio,
    hypoallerg: values.hypoall,
    diet_restr: values.diet,
    breed: values.breed
  }
  console.log(newPet)}
  
 
  
  return (
    <div className="page-wrapper">
      <h2>Add A Pet</h2>
      <form className="m-3" onSubmit={formik.handleSubmit} noValidate>
        <label className="form-label" htmlFor="petName">
          Name
        </label>
        <input
          className="form-control"
          id="petName"
          name="petName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.petName}
          required
        />

        <label className="form-label" htmlFor="petType">
          Type of a pet
        </label>
        <select
          className="form-select"
          id="petType"
          name="petType"
          onChange={formik.handleChange}
          value={formik.values.petType}
          required
        >
          <option defaultValue value="">
            Select pet's type
          </option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="horse">Horse</option>
          <option value="other">Other</option>
        </select>

        <label className="form-label" htmlFor="breed">
          Breed
        </label>
        <input
          className="form-control"
          id="breed"
          name="breed"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.breed}
        />

        <label className="form-label" htmlFor="adoptStatus">
          Adoption status
        </label>
        <select
          className="form-select"
          id="adoptStatus"
          name="adoptStatus"
          onChange={formik.handleChange}
          value={formik.values.adoptStatus}
          required
        >
          <option defaultValue value="">
            Select adoption status
          </option>
          <option value="fostered">Fostered</option>
          <option value="Adopted">Adopted</option>
        </select>

        <label className="form-label" htmlFor="photo">
          Photo Link
        </label>
        <input
          className="form-control"
          id="photo"
          name="photo"
          type="url"
          onChange={formik.handleChange}
          value={formik.values.photo}
          required
        />

        <label className="form-label" htmlFor="color">
          Color
        </label>
        <input
          className="form-control"
          id="color"
          name="color"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.color}
          required
        />

        <label className="form-label" htmlFor="height">
          Height (in cm)
        </label>
        <input
          className="form-control"
          id="height"
          name="height"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.height}
        />

        <label className="form-label" htmlFor="weight">
          Weight (in kg)
        </label>
        <input
          className="form-control"
          id="weight"
          name="weight"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.weight}
        />

        <label className="form-label" htmlFor="bio">
          Bio
        </label>
        <textarea
          className="form-control"
          id="bio"
          name="bio"
          onChange={formik.handleChange}
          value={formik.values.bio}
          placeholder="Write a short text about the pet's story"
        />

        <div class="form-check mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            value={formik.values.hypoall}
            id="hypoall"
            onChange={formik.handleChange}
          />
          <label className="form-check-label" htmlFor="hypoall">
            Hypoallergic
          </label>
        </div>

        <label className="form-label" htmlFor="diet">
          Diet Restrictions
        </label>
        <input
          className="form-control"
          id="diet"
          name="diet"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.diet}
          required
        />

        {/* <label className="form-label" htmlFor="photo">
          Photo
        </label>
        <input
          className="form-control"
          id="photo"
          name="photo"
          type="file"
          onSubmit={formik.handleSubmit}
          value={formik.values.photo}
        /> */}

        <button className="btn btn-primary mt-3" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPet;
