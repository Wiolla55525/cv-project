import { EducationInfo } from './EducationInfo';
import { GeneralInfo } from './GeneralInfo';
import { WorkInfo } from './WorkInfo';
import '../styles/App.css';



export function InputSide() {
    return (
      <div className="col m-2 input-side">
        <GeneralInfo/>
        <EducationInfo/>
        <WorkInfo/>
      </div>
    );
  }