import React, { useState, useContext } from "react";

export const EducationInfo = (props) => {

  const [educationInfo, setEducationInfo] = useState({
    education: "",
    school: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const onChange = (e) => {
    const name = e.target.name;
    setEducationInfo({ ...educationInfo, [name]: e.target.value });
  };

  const onSubmit = (e) => {
    props.setEducation(educationInfo);
  };

  return (
    <div className="form-info education" >
      <h2>Education</h2>

      <form className="p-4" onSubmit={onSubmit}>
        <div className="row">
          <div className="col">
            <label htmlFor="education">Education</label>
            <input
              name="education"
              type="text"
              className="form-control"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label htmlFor="school">School</label>
            <input
              name="school"
              type="text"
              className="col form-control"
              onChange={onChange}
              required
            />
          </div>
          <div className="col">
            <label htmlFor="city">City</label>
            <input
              name="city"
              className="form-control"
              type="text"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="md-form md-outline input-with-post-icon 
            datepicker"
            >
              <label htmlFor="startDate">Start Date</label>
              <input
                placeholder="Select date"
                type="date"
                name="startDate"
                id="startDate"
                className="form-control"
                onChange={onChange}
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="md-form md-outline input-with-post-icon datepicker">
              <div className=" form-check-inline">
                <label htmlFor="endDate">End Date</label>
                <div className="form-check-inline">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value="Present"
                    onChange={onChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="studiesPresent">
                    Present
                  </label>
                </div>
              </div>
              <input
                placeholder="Select date"
                type="date"
                name="endDate"
                id="endDate"
                className="form-control"
                onChange={onChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="row p-2">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            rows="3"
            onChange={onChange}
            required
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
