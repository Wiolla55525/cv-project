import React, { useContext } from "react";
import { FormContext } from "./context/FormContext";

export const WorkInfo = (props) => {
  const { handleAdd, formValues, handleChange, handleCurrent } =
    useContext(FormContext);

  return (
    <div className="form-info work-info">
      <h2>Employment</h2>

      {/* <form className="p-4" onSubmit={onSubmit}> */}
      <div className="row form-group">
        <form className="col form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            className="form-control"
            name="position"
            onChange={handleChange}
            value={formValues.position || ""}
          />
        </form>
      </div>
      <div className="row form-group">
        <form className="col form-group">
          <label htmlFor="employer">Employer</label>
          <input
            type="text"
            className="col form-control"
            name="employer"
            onChange={handleChange}
            value={formValues.employer || ""}
          />
        </form>
        <form className="col form-group">
          <label htmlFor="city">City</label>
          <input
            className="form-control"
            type="text"
            name="city"
            onChange={handleChange}
            value={formValues.city || ""}
          />
        </form>
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
              onChange={handleChange}
              value={formValues.startDate || ""}
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
                  className="form-check-input"
                  name="present"
                  onChange={handleChange}
                  value={formValues.present || ""}
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
              onChange={handleChange}
              value={formValues.endDate || ""}
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
          onChange={handleChange}
          value={formValues.description || ""}
        ></textarea>
      </div>
      <div className="row">
        <button
          type="button"
          value="Add"
          onClick={() => handleAdd("experienceValues")}
          className=" col btn btn-dark"
        >
          Add New
        </button>
      </div>
    </div>
  );
};
