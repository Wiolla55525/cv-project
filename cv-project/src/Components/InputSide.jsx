import { EducationInfo } from "./EducationInfo";
import { GeneralInfo } from "./GeneralInfo";
import { WorkInfo } from "./WorkInfo";
import "../styles/App.css";
import React, { useState } from "react";
import { OutputSide } from "./OutputSide";

export function InputSide() {
  const generalState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const educationState = {
    education: "",
    school: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
  };
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
  console.log(general);
  console.log(education);
  console.log(work);
  return (
    <div className="row">
      <div className="col m-2 input-side">
        <GeneralInfo setGeneral={setGeneral} />
        <EducationInfo setEducation={setEducation} />
        <WorkInfo setWork={setWork}/>
      </div>
      <OutputSide 
      general={general} 
      education={education} 
      work={work}
      />
    </div>
  );
}
