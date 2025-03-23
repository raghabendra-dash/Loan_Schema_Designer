import React, { useState, useEffect } from "react";
import BusinessDetails from "./components/BusinessDetails";
import LoanDetails from "./components/LoanDetails";
import GuarantorDetails from "./components/GuarantorDetails";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    gstin: "",
    directors: [{ name: "", panNumber: "", tags: [] }], 
    creditScore: "",
    requiredLoanAmount: "",
    guarantors: [{ name: "", panNumber: "", relationship: "", relationDescription: "" }],
  });

  // Validate GSTIN format
  const validateGSTIN = (gstin) => {
    const gstinRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return gstinRegex.test(gstin);
  };

  // Validate PAN format
  const validatePAN = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  };

  // Update guarantors when credit score changes
  useEffect(() => {
    if (formData.creditScore >= 700) {
      setFormData((prevData) => ({ ...prevData, guarantors: [] }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        guarantors: [{ name: "", panNumber: "", relationship: "", relationDescription: "" }],
      }));
    }
  }, [formData.creditScore]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate GSTIN
    if (!validateGSTIN(formData.gstin)) {
      alert("Invalid GSTIN format. Please enter a valid GSTIN.");
      return;
    }

    // Validate PAN for directors
    const invalidDirectorPAN = formData.directors?.some(
      (director) => !validatePAN(director.panNumber)
    );
    if (invalidDirectorPAN) {
      alert("Invalid PAN format for one or more directors. Please enter valid PAN numbers.");
      return;
    }

    // Validate PAN for guarantors only if credit score is below 700
    if (formData.creditScore < 700) {
      const invalidGuarantorPAN = formData.guarantors.some(
        (guarantor) => !validatePAN(guarantor.panNumber)
      );
      if (invalidGuarantorPAN) {
        alert("Invalid PAN format for one or more guarantors. Please enter valid PAN numbers.");
        return;
      }

      // If credit score is below 700, then at least 2 guarantors
      if (formData.guarantors.length < 2) {
        alert("Credit score is below 700. Please add at least 2 guarantors.");
        return;
      }
    }

    // Submit form data to backend
    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to submit application");
      }
      alert(result.message);
    } catch (error) {
      alert("Error submitting application: " + error.message);
    }
  };

  return (
    <div className="App">
      <h1>Loan Application Form</h1>
      <form onSubmit={handleSubmit}>
        <BusinessDetails formData={formData} setFormData={setFormData} />
        <LoanDetails formData={formData} setFormData={setFormData} />
        {formData.creditScore < 700 && (
          <GuarantorDetails formData={formData} setFormData={setFormData} />
        )}
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default App;