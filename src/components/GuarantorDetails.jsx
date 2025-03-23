import React from "react";

const GuarantorDetails = ({ formData, setFormData }) => {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const guarantors = [...formData.guarantors];
    guarantors[index][name] = value;
    setFormData({ ...formData, guarantors });
  };

  const addGuarantor = () => {
    setFormData((prevData) => ({
      ...prevData,
      guarantors: [
        ...prevData.guarantors,
        { name: "", panNumber: "", relationship: "", relationDescription: "" },
      ],
    }));
  };

  const removeGuarantor = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      guarantors: prevData.guarantors.filter((_, i) => i !== index),
    }));
  };

  return (
    <fieldset>
      <legend>Guarantor Details</legend>
      {formData.guarantors.map((guarantor, index) => (
        <div key={index}>
          <div>
            <label>Guarantor {index + 1} Name</label>
            <input
              type="text"
              name="name"
              value={guarantor.name || ""}
              onChange={(e) => handleChange(e, index)}
              required
            />
          </div>
          <div>
            <label>Guarantor {index + 1} PAN Number</label>
            <input
              type="text"
              name="panNumber"
              value={guarantor.panNumber || ""}
              onChange={(e) => handleChange(e, index)}
              pattern="^[A-Z]{5}[0-9]{4}[A-Z]{1}$"
              required
              placeholder=" e.g., ABCDE1234F"
            />
          </div>
          <div>
            <label>Guarantor {index + 1} Relationship</label>
            <select
              name="relationship"
              value={guarantor.relationship || ""}
              onChange={(e) => handleChange(e, index)}
              required
            >
              <option value="">Select</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Brother">Brother</option>
              <option value="Sister">Sister</option>
              <option value="Spouse">Spouse</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {guarantor.relationship === "Other" && (
            <div>
              <label>Relation Description</label>
              <input
                type="text"
                name="relationDescription"
                value={guarantor.relationDescription || ""}
                onChange={(e) => handleChange(e, index)}
                required
              />
            </div>
          )}
          <button type="button" onClick={() => removeGuarantor(index)}>
            Remove Guarantor
          </button>
        </div>
      ))}
      <button type="button" onClick={addGuarantor}>
        Add Guarantor
      </button>
    </fieldset>
  );
};

export default GuarantorDetails;