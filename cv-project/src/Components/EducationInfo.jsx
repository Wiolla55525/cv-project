import React from "react";

export const EducationInfo = () => {
  return (
    <div className="form-info">
      <h2>Education</h2>

      <form className="p-4">
        <div className="row">
          <div className="col">
            <label for="education">Education</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label for="School">School</label>
            <input type="text" className="col form-control" />
          </div>
          <div className="col">
            <label for="city">City</label>
            <input className="form-control" type="text" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div class="md-form md-outline input-with-post-icon datepicker">
              <label for="startDate">Start Date</label>
              <input
                placeholder="Select date"
                type="date"
                id="startDate"
                class="form-control"
              />
            </div>
          </div>
          <div className="col">
            <div class="md-form md-outline input-with-post-icon datepicker">
              <div className=" form-check-inline">
                <label for="endDate">End Date</label>
                <div className="form-check-inline">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" for="studiesPresent">
                    Present
                  </label>
                </div>
              </div>
              <input
                placeholder="Select date"
                type="date"
                id="endDate"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="row p-2">
          <label for="textarea">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
          ></textarea>
        </div>
      </form>
      <div className="row">
        <button type="button" className=" col btn btn-dark">
          Edit
        </button>
        <button type="button" className=" col btn btn-dark">
          Submit
        </button>
      </div>
    </div>
  );
};
