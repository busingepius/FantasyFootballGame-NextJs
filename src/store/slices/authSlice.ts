import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

interface JwtPayload {
  role?: string;
  email?: string;
  name?: string;
  hasTeam?: boolean;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  refreshToken: string | null;
  user: JwtPayload | null;
  expiresAt: number | null;
  rememberMe: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
  refreshToken: null,
  rememberMe: false,
  expiresAt: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const token = action.payload.access_token;
      const refreshToken = action.payload.refresh_token;
      const expiresIn = action.payload.expires_in;
      const rememberMe = action.payload.rememberMe !== 'undefined' ? action.payload.rememberMe : state.rememberMe;

      state.token = token;
      state.refreshToken = refreshToken;
      state.isAuthenticated = true;
      state.expiresAt = Date.now() + expiresIn * 1000;
      state.rememberMe = rememberMe;

      // ✅ Set cookies
      Cookies.set('token', token, { expires: rememberMe ? 7 : undefined });
      Cookies.set('refresh_token', refreshToken, { expires: rememberMe ? 7 : undefined });
      try {
        const decoded = jwtDecode<any>(token);
        state.user = {
          name: decoded.name || decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
          email: decoded.email || decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
          role: decoded.role || decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
          hasTeam: decoded.hasTeam
        };
      } catch (error) {
        state.user = null;
        console.error('Failed to decode token on login:', error);
      }

    },

    logout: (state) => {
      Cookies.remove('token');
      Cookies.remove('refresh_token');
      return initialState;
    },

    setAuthStatus: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { loginSuccess, logout, setAuthStatus } = authSlice.actions;
export default authSlice.reducer;
