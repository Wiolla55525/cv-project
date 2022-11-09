// A section to add general information like name, email, phone number.
import React from 'react';

export const GeneralInfo = () => {
    return (
        <div className="form-info">
        <h2>Personal Information</h2>
        <form>
            <input className="personal" type="text" placeholder="First name" name="firstName"></input>

            <input className="personal" type="text" placeholder="Last name" name="lastName"></input>

            <input className="personal" type="text" placeholder="Title"  name="title"></input>

            <label id="file-label" htmlFor="file">Select Image</label>
            <input id="file" className="personal" type="file" name="photo" value=''></input>
            
            <input className="personal" type="text" placeholder="Addess"  name="address"></input>

            <input className="personal" type="number" placeholder="Phone number"  name="phoneNumber"></input>

            <input className="personal" type="email" placeholder="Email"  name="email"></input>

            <input className="personal" type="message" placeholder="Description"  name="description"></input>
        </form>
    </div>
    )
}

// value={} onChange={}