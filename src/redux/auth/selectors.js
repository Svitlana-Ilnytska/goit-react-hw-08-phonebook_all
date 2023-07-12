export const getUser = state => state.auth.user;
export const getToken = state => state.auth.token;
export const getLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;