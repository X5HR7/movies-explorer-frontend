import MainApi from '../utils/MainApi';

const login = (email, password, setIsAuth) => {
  return MainApi.login(email, password).then(token => {
    if (token) {
      setIsAuth(true);
    }
  });
};

const logout = setIsAuth => {
  return MainApi.logout().then(() => {
    localStorage.clear();
    setIsAuth(false);
  });
};

const checkAuth = () => {
  return MainApi.getUser()
    .then(user => {
      if (user) return true;
    })
    .catch(() => {
      return false;
    });
};

export { login, logout, checkAuth };
