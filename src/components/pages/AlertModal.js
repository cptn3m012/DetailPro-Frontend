const AlertModal = ({ message, status, isVisible, onClose }) => {
    const bgColor = status === "success" ? "bg-green-500" : "bg-red-500";
    const textColor = "text-white";
  
    return (
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-500 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${bgColor} ${textColor} z-50`}
      >
        <div className="relative p-4 flex justify-center items-center">
          <button
            onClick={onClose}
            className="absolute top-2 right-4 text-white text-xl font-bold hover:text-gray-200"
          >
            &times;
          </button>
  
          <p className="text-lg font-semibold">{message}</p>
        </div>
      </div>
    );
  };
  
  export default AlertModal;
  
  