import React from 'react'

export default function AddPatient({handleAddSubmit, setShowPatientForm}) {
  return (
<div className="add-form-container">
  <h3>ADD FORM:</h3>
  <form onSubmit={handleAddSubmit} className="add-form">
    <div className="form-group">
      <label htmlFor="first_name">First Name</label>
      <input type="text" id="first_name" name="first_name" />
    </div>
    <div className="form-group">
      <label htmlFor="last_name">Last Name</label>
      <input type="text" id="last_name" name="last_name" />
    </div>
    <div className="form-group">
      <label htmlFor="blood">Disease</label>
      <input type="text" id="blood" name="blood" />
    </div>
    <div className="button-group">
      <button type="submit" className="add-button">
        ADD
      </button>
      <button onClick={() => setShowPatientForm(false)} className="cancel-button">
        Cancel
      </button>
    </div>
  </form>
</div>

  )
}
