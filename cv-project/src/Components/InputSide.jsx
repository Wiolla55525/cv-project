import { EducationInfo } from "./EducationInfo";
import { GeneralInfo } from "./GeneralInfo";
import { WorkInfo } from "./WorkInfo";
import "../styles/App.css";
import React, { useState } from "react";
import { OutputSide } from "./OutputSide";

export function InputSide() {
  const uniqueId = Date.now() + Math.random();

  const generalState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const educationState = [{
    id: uniqueId,
    education: "",
    school: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
}];
  const workState = {
    position: "",
    employer: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  const [general, setGeneral] = useState(generalState);
  const [education, setEducation] = useState(educationState);
  const [work, setWork] = useState(workState);

  // const handleGeneral = (e) => {
  //   setGeneralInfo({
  //     ...general,
  //     [e.target.name]: e.target.value
  //   })
  //   console.log(general);
  // };

  const removeEntry = (id, setter) => {
    setter((prevState) => {
      let filter = prevState.filter((e) => {
        return e.id !== id;
      });

      return [...filter];
    });
  };
  const addEntry = (setter) => {
    let entry = { id: uniqueId };

    setter((prevState) => [...prevState, entry]);
  };

  const handleAddClick = (setter) => {
    addEntry(setter);
  };

  const handleChange = (e, setter) => {
    const { value, name } = e.target;

    let arrayID = e.target.parentNode.parentNode.getAttribute("a-id");

    // let arrayName = e.target.parentNode.parentNode.getAttribute('name')

    setter((prevState) => {
      let targetArray = prevState.filter((e) => {
        return e.id === arrayID;
      });
      let OtherArrays = prevState.filter((e) => {
        return e.id !== arrayID;
      });
      targetArray = targetArray[0];
      targetArray[name] = value;

      return [...OtherArrays, targetArray];
    });

    // setState({ [arrayName]: [...OtherArrays, targetArray] })
  };



  return (
    <div className="row">
      <div className="col m-2 input-side">
        <GeneralInfo setGeneral={setGeneral} />
        <div>
        {education.map((s) => (
        
        <EducationInfo 
        // setEducation={setEducation} 
        handleChange={(e) => handleChange(e, setEducation)}
        key={s.id}
        onChange={(e) => handleChange(e, setEducation)}
        removeEntry={(e) => {
          removeEntry(s.id, setEducation);
        }}
        education={s}
        />

        ))}

        <button type="button" className=" col btn btn-dark">
          Edit
        </button>
        <button onClick={()=>(handleAddClick(setEducation))}type="button" className=" col btn btn-dark">
          Add new
        </button>
        </div>
        <WorkInfo setWork={setWork} />
        <button type="button" className=" col btn btn-dark">
          Edit education
        </button>
        <button onClick={()=>(console.log('add pressed'))}type="button" className=" col btn btn-dark">
          Add new education
        </button>
      </div>
      <OutputSide general={general} education={education} work={work} />
    </div>
  );
}
