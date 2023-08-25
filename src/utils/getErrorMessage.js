const getErrorMessage = (status) => {
  switch (status) {
    case 400:
      return 'Введены некорректные данные.'
    case 401:
      return 'Неправильные почта или пароль.'
    case 409:
      return 'Данный email уже занят.'
    default:
      return 'Произошла ошибка! Попробуйте ещё раз или повторите попытку позже.'
  }
};

export default getErrorMessage;
