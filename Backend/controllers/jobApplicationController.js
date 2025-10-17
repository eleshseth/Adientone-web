import JobApplication from '../model/JobApplication.js';

export const createJobApplication = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, positionInterested, aboutYourself } =
      req.body;

    const jobApplication = new JobApplication({
      fullName,
      email,
      phoneNumber,
      positionInterested,
      aboutYourself,
      resume: req.file ? req.file.filename : null,
    });

    await jobApplication.save();
    res.status(201).json({
      success: true,
      message: 'Job application submitted successfully',
      data: jobApplication,
    });
  } catch (error) {
    console.error('Error saving job application:', error);
    res.status(500).json({
      success: false,
      error: 'Error submitting job application',
    });
  }
};

export const getAllJobApplications = async (req, res) => {
  try {
    const applications = await JobApplication.find().sort({ appliedDate: -1 });
    res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    console.error('Error fetching job applications:', error);
    res.status(500).json({
      success: false,
      error: 'Error fetching job applications',
    });
  }
};

export const getJobApplicationById = async (req, res) => {
  try {
    const application = await JobApplication.findById(req.params.id);
    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Job application not found',
      });
    }
    res.status(200).json({
      success: true,
      data: application,
    });
  } catch (error) {
    console.error('Error fetching job application:', error);
    res.status(500).json({
      success: false,
      error: 'Error fetching job application',
    });
  }
};

export const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const application = await JobApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({
        success: false,
        message: 'Job application not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Application status updated successfully',
      data: application,
    });
  } catch (error) {
    console.error('Error updating application status:', error);
    res.status(500).json({
      success: false,
      error: 'Error updating application status',
    });
  }
};
