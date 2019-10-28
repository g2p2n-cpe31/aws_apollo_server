const commonConfig = {
  env: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORTR, 10) || 5000,
  corsDomian: process.env.CORS_DOMAIN || '*',
}
export default commonConfig
