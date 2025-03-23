const applications = []; 

export const submitApplication = (req, res) => {
  const application = req.body;
  applications.push(application);
  res.status(201).json({ message: "Application submitted successfully!", application });
};

export const getApplications = (req, res) => {
  res.status(200).json(applications);
};

