import User from '@/models/User'
import connectDb from '@/middleware/mongoose'

const handler = async (req, res) => {
  if (req.method == 'POST') {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      if (
        req.body.email === user.email &&
        req.body.password === user.password
      ) {
        res.status(200).json({ success: 'Logged In' })
      } else {
        res.status(400).json({ error: 'Invalid Credentials' })
      }
    } else {
      res.status(400).json({ error: 'User Not Found' })
    }
  } else {
    res.status(400).json({ error: 'Method not allowed' })
  }
}

export default connectDb(handler)
