/* eslint-disable react/prop-types */

function NavItem({ item }) {
  return (
    <div className="mb-8 text-xl flex gap-8 items-center">
      <i className={`${item.icon} text-2xl`}></i>
      {item.title}
    </div>
  );
}

export default NavItem;
