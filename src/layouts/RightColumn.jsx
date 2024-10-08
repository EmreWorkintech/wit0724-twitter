import rightMenu from "../assets/rightMenu.png";

/* eslint-disable react/prop-types */
function RightColumn({ setDarkMode, darkMode }) {
  return (
    <div className="w-1/4 h-screen py-8 relative">
      <div className=" w-full justify-center flex flex-row items-center transition-all ease-in-out absolute bottom-8">
        <div className="flex flex-row justify-between toggle">
          <label
            htmlFor="dark-toggle"
            className="flex items-center cursor-pointer"
          >
            <div className="relative">
              <input
                onClick={() => {
                  setDarkMode(!darkMode);
                }}
                type="checkbox"
                name="dark-mode"
                id="dark-toggle"
                className="checkbox hidden"
              />
              <div className="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition"></div>
            </div>
            <div className="ml-3 dark:text-white text-gray-900 font-medium">
              Dark Mode
            </div>
          </label>
        </div>
      </div>
      <img src={rightMenu} className="w-5/6 m-auto block" />
    </div>
  );
}

export default RightColumn;
