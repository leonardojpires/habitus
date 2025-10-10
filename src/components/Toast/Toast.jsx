import { useEffect } from "react";


function Toast({ message, onClose, duration = 3000 }) {
    useEffect(() => {
        const timer = setTimeout(onClose, duration);
        return () => clearTimeout(timer);
    }, [ onClose, duration ]);

    return (
    <div className="fixed bottom-5 right-5 z-50 bg-green-500 text-white !px-5 !py-3 rounded-xl shadow-lg flex items-center gap-4 animate-slide-in">
      <span className="font-medium">{message}</span>
      <button 
        onClick={onClose} 
        className="text-white bg-green-700 hover:bg-green-800 rounded-full w-6 h-6 flex justify-center items-center font-bold cursor-pointer"
      >
        ×
      </button>
    </div>
    )
}

export default Toast;
