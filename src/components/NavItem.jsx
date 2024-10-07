/* eslint-disable react/prop-types */

function NavItem({ item }) {
  return (
    <div className="mb-8 text-3xl flex gap-8">
      <i className={item.icon}></i>
      {item.title}
    </div>
  );
}

export default NavItem;
