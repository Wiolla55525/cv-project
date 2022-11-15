import './styles/App.css';
import React, { useState, useEffect } from "react";

import { InputSide } from './Components/InputSide';
import { OutputSide } from './Components/OutputSide';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
//   const  generalState = {
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: ""
//     };
//     const  educationState = {
//       education: "",
//       school: "",
//       city: "",
//       startDate: "",
//       endDate: "",
//       description: ""
//   }
//   const  workState = {
//     position: "",
//     employer: "",
//     startDate: "",
//     endDate: "",
//     description: ""
//   }

// const [general, setGeneral] = useState(generalState);
// const [education, setEdycation] = useState(educationState);
// const [work, setWork] = useState(workState);

// const onChange = (e) => {
//   e.preventDefault();
//   const name = e.target.name;
//   setGeneral({...general, [name]: e.target.value })
//   console.log(general)
// }
  return (
    <div className=' app'>
      <InputSide 
      // general={general} setGeneral={setGeneral} onChange= {setGeneral}
      />
      {/* <OutputSide setGeneral={setGeneral}/> */}
    </div>
  );
}

export default App;
