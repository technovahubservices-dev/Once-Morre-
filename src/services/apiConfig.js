const defaultApiUrl = import.meta.env.DEV
  ? 
  'https://backend-oncemorre.onrender.com/api':' '

const configuredApiUrl = import.meta.env.VITE_API_URL || defaultApiUrl

export const API_BASE = configuredApiUrl.replace(/\/$/, '')
