"use client"
import {app} from "@/lib/firebase"
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import React, { useEffect, useState } from 'react';
import ResumeForm from './ResumeForm'; // Adjust path as needed

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
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
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
const userData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    jobTitle: formData.jobTitle,
    positionTitle: formData.positionTitle,
    companyName: formData.companyName,
    data: `Start Date ${formData.startDate} - End Date ${formData.endDate}`,
    summary: formData.workSummary,
    universityName: formData.universityName,
    degree: formData.degree,
    major: formData.major,
    description: formData.description,
    skills: formData.skills,
}
  useEffect(() => {
      const addDocument = async () => {
        try {
          const docRef = await addDoc(collection(db, "user"), {
         userDatainfor:userData
          });
    
          console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };
    
    addDocument();
}, [formData]);
const handleFormSubmit = async (data: FormData) => {
    console.log('Form submitted:', data);
    setFormData(data);
    
    // You can add more logic here to process form data
};

  return (
    <div>
      <ResumeForm formData={formData} onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
