import React from "react";

import { useContext } from "react";
import { CvInfo } from "./CvInfo/index";
import { FormContext } from "./context/FormContext";
import { CvCaja } from "./CvCaja/index";

export function OutputSide(props) {
  const { generalState, handleDelete } = useContext(FormContext);
  const { experienceValues } = generalState;

  return (
    <div className="col m-2 output-side">
      <div className="">
        <div className="d-flex">
          <p className="fw-bolder fs-2">Personal Information </p>
        </div>
        <div className="d-flex">
          <h2 className="fw-bold">
            {props.general.firstName} {props.general.lastName}{" "}
          </h2>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Email Address: </p>
          <p>{props.general.email}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Phone Number: </p>
          <p>{props.general.phone}</p>
        </div>
      </div>

      <hr />

      <div>
        <div className="d-flex">
          <p className="fw-bolder fs-2">Education</p>
        </div>
        {/* {educationValues.map((index) => {
        return (<section key={index}>
          <div className="row">
            <div className="col">
              <div>
                <div className="d-flex">
                  <p className="fw-bold">Education: </p>
                  <p>{props.education.education}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bold">School: </p>
                  <p>{props.education.school}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bold">City: </p>
                  <p>{props.education.city}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bold">Start Date:</p>
                  <p> {props.education.startDate} </p>
                </div>
                <div className="d-flex">
                  <p className="fw-bold">End Date: </p>
                  <p>{props.education.endDate}</p>
                </div>

                <div className="d-flex">
                  <p className="fw-bold">Description: </p>
                  <p>{props.education.description}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <button onClick={() => {editButton()}} className="col btn btn-danger">Edit</button>
              <button onClick={() => handleDelete(index, 'educationValues')} className="col btn btn-primary">Delete</button>

            </div>
          </div>
        </section>
);
        })} */}
        <hr />
        <div className="d-flex">
          <p className="fw-bolder fs-2">Employment:</p>
        </div>
        <div className="row">
          <CvInfo>
            <CvCaja>
              {experienceValues.map((experience, index) => {
                const {
                  position,
                  employer,
                  city,
                  startDate,
                  present,
                  endDate,
                  description,
                } = experience;
                return (
                  <div className="col" key={index}>
                    <div>
                      <button
                        onClick={() => handleDelete(index, "experienceValues")}
                        className="col btn btn-primary"
                      >
                        Delete
                      </button>
                    </div>

                    <div className="d-flex">
                      <p className="fw-bold">Position: </p>
                      <p>{position}</p>
                    </div>
                    <div className="d-flex">
                      <p className="fw-bold">Employer: </p>
                      <p>{employer}</p>
                    </div>
                    <div className="d-flex">
                      <p className="fw-bold">City: </p>
                      <p>{city}</p>
                    </div>
                    <div className="d-flex">
                      <p className="fw-bold">Start Date: </p>
                      <p>{startDate}</p>
                    </div>
                    <div className="d-flex">
                      <p className="fw-bold">End Date: </p>
                      <p>{endDate}</p>
                      <p>{present}</p>
                    </div>

                    <div className="d-flex">
                      <p className="fw-bold">Description: </p>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </CvCaja>
          </CvInfo>

          <hr />
        </div>
      </div>
    </div>
  );
}
