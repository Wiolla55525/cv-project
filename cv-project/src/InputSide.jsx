import { EducationInfo } from './EducationInfo';
import { GeneralInfo } from './GeneralInfo';
import { WorkInfo } from './WorkInfo';


export function InputSide() {
    return (
      <div className="">
        <GeneralInfo/>
        <EducationInfo/>
        <WorkInfo/>
      </div>
    );
  }