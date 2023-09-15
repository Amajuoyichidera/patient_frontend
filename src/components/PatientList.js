import React, { useEffect, useState } from 'react'
import { getpatient, addpatient, editpatient, deletepatient } from '../services/ApiService'
import AddPatient from './AddPatient'
import EditPatient from './EditPatient'

export default function PatientList() {
    
const [patients, setPatients] = useState([])
const [showPatientForm, setShowPatientForm] = useState(false)
const [showEditPatientForm, setShowEditPatientForm] = useState(false)
const [selectedEditData, setselectedEditData] = useState()


useEffect(() => {
   let mount = true
       getpatient()
       .then(res => {
        setPatients(res)
        return() => mount = false
       })
}, [])


const handleAddSubmit = (e) => {
    addpatient(e.target)
    .then(res => {
        setPatients(res)
    })
}


const handleEditBtn = (patient) => {
   setselectedEditData(patient)
   setShowEditPatientForm(true)
   setShowPatientForm(false)
}


const handleEditSubmit = (e, id) => {
    editpatient(id, e.target)
    .then(res => {
        setPatients(res)
    })
    
}


const handleDeleteBtn = (id) => {
    deletepatient(id)
    .then(res => {
        setPatients(patients.filter(patient => (
            patient.patient_id !== id
        )))
    })
}


return (
    <div className="patient-list-container">
    <h2>PATIENT LIST</h2>
  
    <table className="patient-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Disease</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr key={patient.patient_id}>
            <td>{patient.first_name}</td>
            <td>{patient.last_name}</td>
            <td>{patient.blood}</td>
            <td>
              <button className="edit-button" onClick={() => handleEditBtn(patient)}>
                Edit
              </button>{" "}
              <button
                className="delete-button"
                onClick={() => handleDeleteBtn(patient.patient_id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <button className="add-patient-button" onClick={() => setShowPatientForm(true)}>
      Add New Patient
    </button>
    {showPatientForm ? 
      <AddPatient handleAddSubmit={handleAddSubmit} setShowPatientForm={setShowPatientForm} /> : null }
    {showEditPatientForm ? 
      <EditPatient
        handleEditSubmit={handleEditSubmit}
        selectedEditData={selectedEditData}
        setShowEditPatientForm={setShowEditPatientForm}
      />
     : null }
  </div>
  
  )
}
