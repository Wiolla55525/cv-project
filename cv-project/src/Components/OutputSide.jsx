import {} from "./GeneralInfo";
import React from 'react';
import { GeneralInfo } from "./GeneralInfo";

export function OutputSide(props) {

  // let { personalInfo, personalEducation, personalEmployment } = props;

    // let {firstName, lastName, photo: photoURL, email, phoneNumber } = personalInfo;

    // let {education, school, city, startDate, endDate, description } = personalEducation;

    // let { position, employer, start, end, description2 } = personalEmployment;



  return (
    <div className="col m-2 output-side">
      <div className=""  >
        <div className="d-flex">
          <p className="fw-bolder fs-2">Personal Information </p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">{props.general.firstName}  {props.general.lastName} </p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Email Address: {props.general.email} </p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Phone Number: {props.general.number} </p>
          <p>{""}</p>
        </div>
      </div>

      
      <hr />

      <div>
        <div className="d-flex">
          <p className="fw-bolder fs-2">Education</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Education: { props.education }</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">School: { props.school }</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">City: { props.city }</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Start Date: { props.startDate} </p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">End Date: { props.endDate }</p>
          <p>{""}</p>
        </div>

        <div className="d-flex">
          <p className="fw-bold">Description: { props.description }</p>
          <p>{""}</p>
        </div>
      </div>
      <hr />
      <div>
        <div className="d-flex">
          <p className="fw-bolder fs-2">Employment:</p>
          <p className="d-flex">{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Position: { props.position }</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Employer: { props.employer }</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Start Date: { props.startDate }</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">End Date: { props.endDate }</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Description: { props.description }</p>
          <p>{""}</p>
        </div>

        <hr />
      </div>
    </div>
  );
}
