import usePopup from './usePopup';

const useSuccessPopup = () => {
  const { setIsPopupOpen, setIsPopupFailed, setPopupMessage } = usePopup();

  return (message) => {
    setIsPopupFailed(false);
    setPopupMessage(message);
    setIsPopupOpen(true);
  };
};

export default useSuccessPopup;
