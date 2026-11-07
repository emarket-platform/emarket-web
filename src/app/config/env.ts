const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const appName = import.meta.env.VITE_APP_NAME;

if (!apiBaseUrl || !appName) {
    throw new Error('Env is not configured');
}

export const env = {
    apiBaseUrl,
    appName,
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
} as const;