/* eslint-disable react/prop-types */
function RightColumn({ setDarkMode, darkMode }) {
  return (
    <div className="w-1/4 bg-slate-400 h-screen">
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        DarkMode: {darkMode ? "Kapa" : "Aç"}
      </button>
    </div>
  );
}

export default RightColumn;
