"use client"
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { app } from "@/lib/firebase";
import React, { useEffect } from 'react'

const DisplayContent = () => {

  // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
  
useEffect(() => {
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "user"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  fetchData();
});
  return (
      
          <div className="max-w-4xl m-5 p-8 bg-blue-950 shadow-lg rounded-lg space-y-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-blue-500">hellow</h1>
              <p className="text-xl text-white">hellow</p>
            </div>
      
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-white"><strong>Email:</strong> hellow</p>
                <p className="text-white"><strong>Phone:</strong> hellow</p>
              </div>
              <p className="text-white"><strong>Address:</strong> hellow</p>
            </div>
      
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-500">Skills</h2>
              <p className="text-white">hellow</p>
            </div>
      
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-500">Experience</h2>
              <p className="text-white">hellow</p>
            </div>
      
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-blue-500">Education</h2>
              <p className="text-white">hellow</p>
            </div>
          </div>
     
  
      
  )
}

export default DisplayContent
