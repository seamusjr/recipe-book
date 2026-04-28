const DEV_API_BASE_URL = 'http://localhost:5012'

export const apiBaseUrl = import.meta.env.DEV ? DEV_API_BASE_URL : ''

export const buildApiUrl = (path: string) => `${apiBaseUrl}${path}`