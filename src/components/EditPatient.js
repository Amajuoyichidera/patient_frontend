import React from 'react'

export default function EditPatient({handleEditSubmit, selectedEditData, setShowEditPatientForm}) {
  return (
    <div className="edit-form-container">
    <h3>EDIT FORM:</h3>
    <form onSubmit={(e) => handleEditSubmit(e, selectedEditData.patient_id)} className="edit-form">
      <div className="form-group">
        <label htmlFor="edit-first-name">First Name</label>
        <input type="text" id="edit-first-name" name="first_name" defaultValue={selectedEditData.first_name} />
      </div>
      <div className="form-group">
        <label htmlFor="edit-last-name">Last Name</label>
        <input type="text" id="edit-last-name" name="last_name" defaultValue={selectedEditData.last_name} />
      </div>
      <div className="form-group">
        <label htmlFor="edit-blood">Disease</label>
        <input type="text" id="edit-blood" name="blood" defaultValue={selectedEditData.blood} />
      </div>
      <div className="button-group">
        <button type="submit" className="edit-button">
          EDIT
        </button>
        <button onClick={() => setShowEditPatientForm(false)} className="cancel-button">
          Cancel
        </button>
      </div>
    </form>
  </div>
  
  )
}
