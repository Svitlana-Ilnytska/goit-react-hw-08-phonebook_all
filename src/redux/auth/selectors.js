// export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// export const selectUser = state => state.auth.user;

// export const selectIsRefreshing = state => state.auth.isRefreshing;
export const getUser = state => state.auth.user;
export const getToken = state => state.auth.token;
export const getLoggedIn = state => state.auth.isLoggedIn;
export const getLoggedOut = state => state.auth.isLoggedOut;