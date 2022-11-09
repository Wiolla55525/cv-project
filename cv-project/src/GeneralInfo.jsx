import React from 'react';

export const GeneralInfo = () => {
    return (
        <div className='form-info'>
        <h2>Personal Information</h2>
       
        <form>
  <div className='row'>
    <div className='col'>
    <label for="Name">First name</label>
      <input type='text' className='form-control' />
    </div>
    <div className='col'>
    <label for="lastName">Last Name</label>
      <input type='text' className='form-control'/>
    </div>
  </div>
  <div className='row'>
    <div className="col-7">
    <label for="email">Email address</label>
  <input type='email' className='col form-control' />
  </div>
  <div className="col">
  <label for="phoneNumber">Phone number</label>
  <input className='form-control' type='number' />

  </div>
  </div>
<div className="row">
<label className="form-label" for="customFile">Insert Photo</label>
<input type="file" className="form-control" id="customFile" />        
</div>
</form>
    </div>
    )
}

// value={} onChange={}