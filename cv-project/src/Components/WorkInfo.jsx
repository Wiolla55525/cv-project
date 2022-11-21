import React, { useState, useContext, createContext } from "react";

export const FormContext = createContext({});

export const WorkInfo = (props) => {
  const { handleAdd, formValues, handleChange, handleCurrent } = useContext(FormContext);

  const [workInfo, setWorkInfo] = useState({
    position: "",
    employer: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const onChange = (e) => {
    const name = e.target.name;
    setWorkInfo({ ...workInfo, [name]: e.target.value });
  };

  const onSubmit = (e) => {
    props.setWork(workInfo);
  };

  return (
    <div className="form-info work-info">
      <h2>Employment</h2>

      <form className="p-4" onSubmit={onSubmit}>
        <div className="row form-group">
          <div className="col form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              className="form-control"
              name="position"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col form-group">
            <label htmlFor="employer">Employer</label>
            <input
              type="text"
              className="col form-control"
              name="employer"
              onChange={onChange}
            />
          </div>
          <div className="col form-group">
            <label htmlFor="city">City</label>
            <input
              className="form-control"
              type="text"
              name="city"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="col form-group">
            <div className="md-form md-outline input-with-post-icon datepicker">
              <label htmlFor="startDate">Start Date</label>
              <input
                placeholder="Select date"
                type="date"
                id="startDate"
                className="form-control"
                name="startDate"
                onChange={onChange}
              />
            </div>
          </div>
          <div className="col form-group">
            <div className="md-form md-outline input-with-post-icon datepicker">
              <div className=" form-check-inline">
                <label htmlFor="endDate">End Date</label>
                <div className="form-check-inline">
                  <input
                    type="checkbox"
                    value="Present"
                    className="form-check-input"
                    name="present"
                    onChange={onChange}
                  />
                  <label className="form-check-label" htmlFor="studiesPresent">
                    Present
                  </label>
                </div>
              </div>
              <input
                placeholder="Select date"
                type="date"
                id="endDate"
                className="form-control"
                name="endDate"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
        <div className="row form-group p-2">
          <label htmlFor="textarea">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="5"
            name="description"
            onChange={onChange}
          ></textarea>
        </div>
      </form>
      <div className="row">
        <button type="submit" onClick={onSubmit} className=" col btn btn-dark">
          Add New
        </button>

      </div>
    </div>
  );
};
