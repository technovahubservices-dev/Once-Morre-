const configuredApiUrl = import.meta.env.VITE_API_URL || 'https://once-morre-backend.onrender.com/api'

export const API_BASE = configuredApiUrl.replace(/\/$/, '')
