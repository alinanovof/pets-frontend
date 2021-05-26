// import { Formik } from "formik";


const AdvancedSearch = (props) => {
  return (
    <>
      {props.checked && (
        <div className="">
          <div className="adoption-status row mb-3 ">
            <h3 className="mt-1 col-sm-3">Adoption Status</h3>
            <div className="col-sm-2 form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="adoption-status-adopted"
                id="adoption-status-adopted"
              />
              <label
                className="form-check-label"
                htmlFor="adoption-status-adopted"
              >
                Adopted
              </label>
            </div>
            <div className="form-check col-sm-2 form-check-inline">
              <input
                className="form-check-input "
                type="checkbox"
                name="adoption-status-fostered"
                id="adoption-status-fostered"
              />
              <label
                className="form-check-label"
                htmlFor="adoption-status-fostered"
              >
                Fostered
              </label>
            </div>
            <div className="form-check col-sm-2 form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                name="adoption-status-free"
                id="adoption-status-free"
              />
              <label
                className="form-check-label"
                htmlFor="adoption-status-free"
              >
                Looking For Home
              </label>
            </div>
          </div>

          <div className="m-3 height">
            <div className="row mb-3">
              <h3 className="mt-1 col-sm-3">Height</h3>
              <div className="col-sm-2">
                <input
                  className="form-control"
                  type="number"
                  name="height-to"
                  id="height-to"
                  placeholder="from"
                />
              </div>
              -
              <div className="col-sm-2">
                <input
                  className="form-control"
                  type="number"
                  name="height-to"
                  id="height-to"
                  placeholder="to"
                />
              </div>
              cm
            </div>
          </div>

          <div className="m-3 weight">
            <div className="row mb-3">
              <h3 className="mt-1 col-sm-3">Weight</h3>
              <div className="col-sm-2">
                <input
                  className="form-control"
                  type="number"
                  name="weight-to"
                  id="weight-to"
                  placeholder="from"
                />
              </div>
              -
              <div className="col-sm-2">
                <input
                  className="form-control"
                  type="number"
                  name="weight-to"
                  id="weight-to"
                  placeholder="to"
                />                
              </div>
              kg
            </div>
          </div>

          

          <div className="row mb-3">
            <label htmlFor="name-search" className="col-sm-1 col-form-label search-name">
              Name
            </label>
            <div className="col-sm-5">
              <input type="text" className="form-control" id="name-search" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdvancedSearch;
