import React from "react";

const BusinessDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  };

  const handleDirectorChange = (e, directorIndex) => {
    const { name, value } = e.target;
    const updatedDirectors = formData.directors.map((director, index) =>
      index === directorIndex ? { ...director, [name]: value } : director
    );
    setFormData({ ...formData, directors: updatedDirectors });
  };

  const handleTagsChange = (e, directorIndex) => {
    const { value } = e.target;
    const updatedDirectors = formData.directors.map((director, index) =>
      index === directorIndex
        ? { ...director, tags: value.split(",").map((tag) => tag.trim()) }
        : director
    );
    setFormData({ ...formData, directors: updatedDirectors });
  };

  return (
    <fieldset>
      <legend>Business Details</legend>
      <div>
        <label>Business Name</label>
        <input
          type="text"
          name="businessName"
          value={formData.businessName || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>GSTIN</label>
        <input
          type="text"
          name="gstin"
          value={formData.gstin || ""}
          onChange={handleChange}
          pattern="^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$"
          required
          placeholder=" e.g., 12ABCDE1234F1Z5"
        />
      </div>
      {formData.directors.map((director, directorIndex) => (
        <div key={directorIndex}>
          <div>
            <label>Director Name</label>
            <input
              type="text"
              name="name"
              value={director.name || ""}
              onChange={(e) => handleDirectorChange(e, directorIndex)}
              required
            />
          </div>
          <div>
            <label>Director PAN Number</label>
            <input
              type="text"
              name="panNumber"
              value={director.panNumber || ""}
              onChange={(e) => handleDirectorChange(e, directorIndex)}
              pattern="^[A-Z]{5}[0-9]{4}[A-Z]{1}$"
              required
              placeholder=" e.g., ABCDE1234F"
            />
          </div>
          <div>
            <label>Director Tags</label>
            <input
              type="text"
              name="tags"
              value={director.tags.join(", ")}
              onChange={(e) => handleTagsChange(e, directorIndex)}
              placeholder=" e.g., Director, Authorized Signatory"
            />
          </div>
        </div>
      ))}
    </fieldset>
  );
};

export default BusinessDetails;
