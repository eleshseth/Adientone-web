import Blog from '../model/blog.js';

// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Error fetching blogs' });
  }
};

// Get blog by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ error: 'Error fetching blog' });
  }
};

// Helper function to generate slug
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') + 
    '-' + 
    Date.now().toString().slice(-6);
};

// Create new blog
// At the top of the file
const BASE_URL = 'https://api2.marketmindsdigitalsolutions.com';

export const createBlog = async (req, res) => {
  try {
    const { title, content, preview, author, tags } = req.body;
    
    // Handle image upload with full URL
    const imagePath = req.file ? `${BASE_URL}/uploads/${req.file.filename}` : null;
    
    if (!imagePath) {
      return res.status(400).json({ error: 'Image is required' });
    }

    const slug = generateSlug(title);
    
    const blog = new Blog({
      title,
      content,
      preview,
      image: imagePath,
      author,
      slug,
      tags: tags || [],
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await blog.save();
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Error creating blog', details: error.message });
  }
};

// Update blog
// In updateBlog function
export const updateBlog = async (req, res) => {
  try {
    const { title, content, preview, author, tags } = req.body;
    
    const updateData = {
      title,
      content,
      preview,
      author,
      tags,
      updatedAt: Date.now()
    };

    // Update image with full URL if new file is uploaded
    if (req.file) {
      updateData.image = `${BASE_URL}/uploads/${req.file.filename}`;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog updated successfully', blog: updatedBlog });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ error: 'Error updating blog' });
  }
};

// Delete blog
export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ error: 'Error deleting blog' });
  }
};
