import { EducationInfo } from "./EducationInfo";
import { GeneralInfo } from "./GeneralInfo";
import { WorkInfo } from "./WorkInfo";
import "../styles/App.css";
import React, { useState, setState } from "react";
import { OutputSide } from "./OutputSide";

export function InputSide() {
  const uniqueId = () => { return (Date.now() + Math.random())}

  const generalState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const educationState = {
    id: uniqueId(),
    education: "Front-end",
    school: "CodeAcademy",
    city: "Vilnius",
    startDate: "2022-05-01",
    endDate: "2022-12-01",
    description: "Learning..",
};
  const workState = {
    id: uniqueId(),
    position: "Pozicija",
    employer: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  const [general, setGeneral] = useState(generalState);
  const [education, setEducation] = useState([educationState]);
  const [work, setWork] = useState([workState]);

  return (
    <div className="row">
      <div className="col m-2 input-side">
        <GeneralInfo setGeneral={setGeneral} />
        <EducationInfo setEducation={setEducation}/>
        <WorkInfo setWork={setWork} />
      </div>
      <OutputSide general={general} education={education} work={work} />
    </div>
  );
}
