export const logout = function() {
    localStorage.removeItem('token');
    window.location.reload(false);
};