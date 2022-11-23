import "./styles/App.css";
import React, {useState} from "react";
import { FormContext } from "./Components/context/FormContext";
import { useGeneralState } from "./Components/MainFunctions";

import { InputSide } from "./Components/InputSide";
import "bootstrap/dist/css/bootstrap.css";
import { OutputSide } from "./Components/OutputSide";

function App() {
  const initialState = useGeneralState();
  const generalState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  const [general, setGeneral] = useState(generalState);


  return (
    <FormContext.Provider value={initialState}>
      <div className="row app">
        <InputSide className="col" general={general} setGeneral={setGeneral}/>
        {/* <OutputSide className="col" general={general}/> */}
      </div>
    </FormContext.Provider>
  );
}

export default App;
