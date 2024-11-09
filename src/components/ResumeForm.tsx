"use client";

import React, { useState, ChangeEvent } from 'react';

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

type Props = {
  formData: FormData;
  onSubmit: (data: FormData) => void;
  
};

const ResumeForm: React.FC<Props> = ({ formData, onSubmit }) => {
  
  const [step, setStep] = useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const updatedData = { ...formData, [e.target.name]: e.target.value };
    onSubmit(updatedData);
    
  };

  const nextStep = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 4));
  };

  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <div className="max-w-4xl m-5 p-8 bg-blue-950 shadow-lg rounded-lg space-y-6">
      <h1 className="text-2xl font-bold mb-4 text-white">Resume Builder</h1>

      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Personal Information</h2>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="p-2 border rounded mb-2 w-full placeholder:text-blue-500" />
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="p-2 border rounded mb-2 w-full placeholder:text-blue-500" />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="p-2 border rounded mb-2 w-full placeholder:text-blue-500" />
          <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" className="p-2 border rounded mb-2 w-full placeholder:text-blue-500" />

        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Professional Experience</h2>
          <input type="text" name="positionTitle" value={formData.positionTitle} onChange={handleChange} placeholder="Position Title" className="p-2 border rounded mb-2 w-full" />
          <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} placeholder="Company Name" className="p-2 border rounded mb-2 w-full" />
          <input type="text" name="startDate" value={formData.startDate} onChange={handleChange} placeholder="Start Date" className="p-2 border rounded mb-2 w-full" />
          <input type="text" name="endDate" value={formData.endDate} onChange={handleChange} placeholder="End Date" className="p-2 border rounded mb-2 w-full" />
          <textarea name="workSummary" value={formData.workSummary} onChange={handleChange} placeholder="Work Summary" className="p-2 border rounded mb-2 w-full" />
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Education</h2>
          <input type="text" name="universityName" value={formData.universityName} onChange={handleChange} placeholder="University Name" className="p-2 border rounded mb-2 w-full" />
          <input type="text" name="degree" value={formData.degree} onChange={handleChange} placeholder="Degree" className="p-2 border rounded mb-2 w-full" />
          <input type="text" name="major" value={formData.major} onChange={handleChange} placeholder="Major" className="p-2 border rounded mb-2 w-full" />
          <input type="text" name="educationStartDate" value={formData.educationStartDate} onChange={handleChange} placeholder="Start Date" className="p-2 border rounded mb-2 w-full" />
          <input type="text" name="educationEndDate" value={formData.educationEndDate} onChange={handleChange} placeholder="End Date" className="p-2 border rounded mb-2 w-full" />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="p-2 border rounded mb-2 w-full" />
        </div>
      )}

      {step === 4 && (
        <div>
          <h2 className="text-xl font-bold mb-4 text-white">Skills</h2>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="Skills (e.g., JavaScript, React)" className="p-2 border rounded mb-2 w-full" />
        </div>
      )}

      <div className="flex justify-between mt-4">
        {step > 1 && (
          <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">
            Previous
          </button>
        )}
        {step < 4 ? (
          <button onClick={nextStep} className="px-4 py-2 bg-blue-500 text-white rounded">
            Next
          </button>
        ) : (
          <button onClick={() => onSubmit(formData)} className="px-4 py-2 bg-green-500 text-white rounded">
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default ResumeForm;
