import React from "react";

const LoanDetails = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <fieldset>
      <legend>Loan Details</legend>
      <div>
        <label>Credit Score</label>
        <input
          type="number"
          name="creditScore"
          value={formData.creditScore || ""}
          onChange={handleChange}
          min="300"
          max="900"
          required
        />
      </div>
      <div>
        <label>Loan Amount</label>
        <input
          type="number"
          name="requiredLoanAmount"
          value={formData.requiredLoanAmount || ""}
          onChange={handleChange}
          min="50000"
          max="500000"
          required
        />
      </div>
    </fieldset>
  );
};

export default LoanDetails;