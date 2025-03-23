# Loan Application Workflow JSON Schema Designer

  The loan application form is powered by MERN Stack that defines **JSON Schema** for workflow using **React JSON Schema Form (RJSF)** with the **AJV8 validator**. The schema is designed to enable users to apply for a loan by filling out structured forms with validation and conditional logic.

## Deployment
   > Live Link: https://loan-schema-designer-app.vercel.app/
## Features

- **Business Details**:

  - Business Name
  - GSTIN (with format validation)
  - Directors (Name, PAN Number, Tags)

- **Loan Details**:

  - Credit Score
  - Required Loan Amount (with slider validation)
  - Guarantors (conditional, only if Credit Score < 700)
    - Name
    - PAN Number
    - Relationship with Applicant
    - Relation Description (if "Other" is selected)

- **Validation**:

  - GSTIN format validation
  - PAN format validation
  - Conditional logic for guarantors

## Technologies Used

- **Frontend**:

  - React (Vite)
  - Axios (for API calls)

- **Backend**:

  - Express
  - CORS (for cross-origin requests)

## User Experience (UX) Considerations

  - **Multi-Screen Form**:

    The form is divided into multiple screens for better usability:

    a. Screen 1: Business Details.
    
    b. Screen 2: Loan Details(with conditional fields based on the credit score).

  - **Wizard Navigation**:

    Each screen has a clear title and progress indicator.
 
  - **Grouping of Fields**:
  
    Fields are grouped under relevant titles (e.g., Directors, Guarantors) for better organization and navigation.


## Setup Instructions

 - Clone the Repository:
   
  ```bash
    git clone 
    cd loan-app-form

 **Install Dependencies**:

   - **Frontend**

      ```bash
       npm install or npm install --force

   - **Backend**

      ```bash
        cd backend 
       npm install or npm install --force


  - Run the Application:(**Development Mode**)

    a. Start the backend server:

      ```bash 
       npm run dev 

    b. Start the Frontend app:

      ```bash
       npm run dev

 - Run the Application:(**Production Mode**)

   a. Start the backend server:

     ```bash 
      cd backend
      npm start

   b. Start the frontend app:

     ```bash
      npm run build 
          and 
      npm run preview

## License

   This project is licensed under the MIT License.


