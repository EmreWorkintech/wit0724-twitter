import rightMenu from "../assets/rightMenu.png";

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
      <img src={rightMenu} className="w-full block" />
    </div>
  );
}

export default RightColumn;
