import usePopup from './usePopup';

const useErrorPopup = () => {
  const { setIsPopupOpen, setIsPopupFailed, setPopupMessage } = usePopup();

  return (message) => {
    setIsPopupFailed(true);
    setPopupMessage(message);
    setIsPopupOpen(true);
  };
};

export default useErrorPopup;
