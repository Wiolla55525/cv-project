import React from 'react';

export function OutputSide(props) {

  return (
    <div className="col m-2 output-side">
      <div className=""  >
        <div className="d-flex">
          <p className="fw-bolder fs-2">Personal Information </p>
        </div>
        <div className="d-flex">
          <h2 className="fw-bold">{props.general.firstName}  {props.general.lastName} </h2>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Email Address:  </p>
          <p>{props.general.email}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Phone Number:  </p>
          <p>{props.general.number}</p>
        </div>
      </div>

      <hr />

      <div>
        <div className="d-flex">
          <p className="fw-bolder fs-2">Education</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Education: </p>
          <p>{ props.education.education }</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">School: </p>
          <p>{ props.education.school }</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">City: </p>
          <p>{ props.education.city }</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Start Date:</p>
          <p> { props.education.startDate} </p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">End Date: </p>
          <p>{ props.education.endDate }</p>
        </div>

        <div className="d-flex">
          <p className="fw-bold">Description: </p>
          <p>{ props.education.description }</p>
        </div>
      </div>
      <hr />
      <div>
        <div className="d-flex">
          <p className="fw-bolder fs-2">Employment:</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Position: </p>
          <p>{ props.work.position }</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Employer: </p>
          <p>{ props.work.employer }</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Start Date: </p>
          <p>{ props.work.startDate }</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">End Date: </p>
          <p>{ props.work.endDate }</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Description: </p>
          <p>{ props.work.description }</p>
        </div>

        <hr />
      </div>
    </div>
  );
}
