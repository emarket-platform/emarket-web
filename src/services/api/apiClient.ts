const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1';

type ApiOptions = RequestInit;

export async function apiRequest<T>(
    endpoint: string,
    options: ApiOptions = {},
): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
    }

    if (response.status === 204) {
        return undefined as T;
    }

    return response.json() as Promise<T>;
}