import { EducationInfo } from './EducationInfo';
import { GeneralInfo } from './GeneralInfo';
import { WorkInfo } from './WorkInfo';


export function InputSide() {
    return (
      <div className="col m-2">
        <GeneralInfo/>
        <EducationInfo/>
        <WorkInfo/>
      </div>
    );
  }