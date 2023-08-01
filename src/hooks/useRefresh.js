import { apiAuth } from 'src/api';
import { authUpdate } from 'src/store/auth/authSlice';
import { getTokens } from 'src/utils/auth';

export const useRefreshToken = () => {
  async function refresh() {
    const { refesh_token } = getTokens();
    if (!refesh_token) return null;
    const response = await apiAuth.post('/token', {
      refreshToken: refesh_token,
    });

    authUpdate((prev) => ({
      ...prev,
      accessToken: response.data.accessToken,
    }));

    return response?.data?.accessToken;
  }

  return refresh;
};
