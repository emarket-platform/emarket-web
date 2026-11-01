import { apiRequest } from '@/services/api/apiClient';

export interface UserProfile {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
}

export const userApi = {
    getProfile(): Promise<UserProfile> {
        return apiRequest<UserProfile>('/users/me');
    },
};