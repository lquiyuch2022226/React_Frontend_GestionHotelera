export const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('idUser')

    window.location.href = '/*'
}