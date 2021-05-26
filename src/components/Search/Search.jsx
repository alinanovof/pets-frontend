// import { DragSwitch } from "react-dragswitch";
import "react-dragswitch/dist/index.css";
import React, { useState, useEffect } from "react";
// import AdvancedSearch from "./AdvancedSearch";
import { Formik, Field, Form } from "formik";
import SearchResults from "./SearchResults";
import { getSearch } from "../../api/api";
import { useAuth } from "../../context/AuthContext";
import { withRouter } from "react-router-dom";

const Search = () => {
  // const [checked, setChecked] = useState(false);
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  useEffect(() => {
    setResults(results);
  }, [results]);

  if (!auth.isInitiallyLoaded) {
    return <div class="d-flex justify-content-center mt-3">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>;
  }
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        search: "",
        petType: "",
      }}
      onSubmit={async (values) => {
        setLoading(true)
        const data = await getSearch(values.petType, auth.token);
        setResults(data.pets);
        setLoading(false)
      }}
    >
      <div className="page-wrapper">
      <h2>Search</h2>
      
        {/* <div className="m-3">
          Basic Search{" "}
          <DragSwitch
            onColor="#dfb89c"
            handleColor="#B45008"
            checked={checked}
            onChange={(e) => {
              setChecked(e);
            }}
          />{" "}
          Advanced Search
        </div> */}

        <Form className="row g-2 card-back mt-2">
     
            <Field
              className="form-select"
              id="petType"
              name="petType"
              as="select"
              required
            >
              <option default value="">
                Choose pet's type
              </option>
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
              <option value="Horse">Horse</option>
              <option value="Other">Other</option>
            </Field>

          {/* <AdvancedSearch checked={checked} /> */}
          
          <button className="btn btn-primary" type="submit">
            Search
          </button>
            
        </Form>
        {loading && (
        <div class="d-flex justify-content-center mt-3">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
        {(!loading && results) && <SearchResults results={results} />}
      </div>
    </Formik>
  );
};

export default withRouter(Search);
