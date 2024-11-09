"use client"
import React, {  useState } from 'react';
import ResumeForm from './ResumeForm'; 

type FormData = {
  firstName: string;
  lastName: string;
  jobTitle: string;
  address: string;
  phoneNumber: string;
  email: string;
  positionTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  workSummary: string;
  universityName: string;
  degree: string;
  major: string;
  educationStartDate: string;
  educationEndDate: string;
  description: string;
  skills: string;
};

const App = () => {
    
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    jobTitle: '',
    address: '',
    phoneNumber: '',
    email: '',
    positionTitle: '',
    companyName: '',
    startDate: '',
    endDate: '',
    workSummary: '',
    universityName: '',
    degree: '',
    major: '',
    educationStartDate: '',
    educationEndDate: '',
    description: '',
    skills: '',
  });
// const userData = {
//     firstName: formData.firstName,
//     lastName: formData.lastName,
//     email: formData.email,
//     jobTitle: formData.jobTitle,
//     positionTitle: formData.positionTitle,
//     companyName: formData.companyName,
//     data: `Start Date ${formData.startDate} - End Date ${formData.endDate}`,
//     summary: formData.workSummary,
//     universityName: formData.universityName,
//     degree: formData.degree,
//     major: formData.major,
//     description: formData.description,
//     skills: formData.skills,
// }
 
const handleFormSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);
    setFormData(data);
    
};

  return (
    <div>
      <ResumeForm formData={formData} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
