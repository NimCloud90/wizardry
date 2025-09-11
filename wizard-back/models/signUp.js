import authRoutes from './controllers/authController.js';

// POST /login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // At this point, user is authenticated
      return res.status(200).json({ message: 'Login successful' });
  
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  });
  