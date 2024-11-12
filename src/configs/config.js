import 'dotenv/config'

export const config = {
  port: process.env.PORT || 5000,
  monogodb: process.env.MONGODB_URI,
  jwSecret: process.env.JWT_SECRET,
}
