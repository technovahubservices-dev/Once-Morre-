const defaultApiUrl = import.meta.env.DEV
  ? 'http://localhost:8000/api'
  : 'https://once-morre-backend.onrender.com/api'

const configuredApiUrl = import.meta.env.VITE_API_URL || defaultApiUrl

export const API_BASE = configuredApiUrl.replace(/\/$/, '')
