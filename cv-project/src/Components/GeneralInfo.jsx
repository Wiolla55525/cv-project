import React, { useState } from "react";

export const GeneralInfo = (props) => {

  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const onChange = (e) => {
    const name = e.target.name;
    setGeneralInfo({...generalInfo, [name]: e.target.value })
  }

  const onSubmit = (e ) => {
    e.preventDefault();

    props.setGeneral(generalInfo)
  
    console.log(generalInfo)
  }
  return (
    <div className="form-info general-info" >
      <h2>Personal Information</h2>

      <form className="p-4" onSubmit={onSubmit}>
        <div className="row">
          <div className="col">
            <label htmlFor="name">First name</label>
            <input name="firstName" type="text" id="firstName" 
            className="form-control"  onChange={onChange}/>
          </div>
          <div className="col">
            <label htmlFor="lastName">Last Name</label>
            <input name="lastName"type="text" id="lastName" 
            className="form-control"  onChange={onChange}/>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <label htmlFor="email">E-mail</label>
            <input name="email" type="email" id="email" 
            onChange={onChange} className="col form-control" />
          </div>
          <div className="col">
            <label htmlFor="number">Phone </label>
            <input name="phone" className="form-control" id="phoneNumber" 
            onChange={onChange} type="tel" pattern='[0-9]{3}-[0-9]{3}-[0-9]{2}'/>
          </div>
        </div>
        <div className="row p-4">
          <label className="form-label" htmlFor="customFile">
            Insert Photo
          </label>
          <input type="file" className="form-control" id="customFile" />
        </div>
      </form>
      <div className="row">
        <button type="submit" onClick={onSubmit}  className=" col btn btn-dark">
          Submit
        </button>
      </div>
    </div>
  );
};

