import Contact from '../model/Contact.js';

export const createContact = async (req, res) => {
  try {
    const { name, email, number, message } = req.body;
    const contact = new Contact({
      name,
      email,
      Number: number, // Match the schema field name
      message
    });
    
    await contact.save();
    res.status(201).json({ message: 'Contact message saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Error saving contact message' });
  }
};