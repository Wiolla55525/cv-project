import {} from "./GeneralInfo";

export function OutputSide() {
  return (
    <div className="col m-2">
      <div className="">
        <div className="d-flex">
          <p className="fw-bolder fs-2">Personal Information</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Email Address: </p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Phone Number: </p>
          <p>{""}</p>
        </div>
      </div>
      <hr />

      <div>
        <div className="d-flex">
          <p className="fw-bolder fs-2">Education</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Education:</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">School:</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">City:</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Start Date:</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">End Date:</p>
          <p>{""}</p>
        </div>

        <div className="d-flex">
          <p className="fw-bold">Description:</p>
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
          <p className="fw-bold">Position:</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Employer:</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Start Date:</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">End Date:</p>
          <p>{""}</p>
        </div>
        <div className="d-flex">
          <p className="fw-bold">Description:</p>
          <p>{""}</p>
        </div>

        <hr />
      </div>
    </div>
  );
}
