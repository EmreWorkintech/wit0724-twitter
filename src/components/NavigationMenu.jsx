import { navItems } from "../data";
import NavItem from "./NavItem";

function NavigationMenu() {
  return (
    <div className="my-16">
      {navItems.map((item, index) => (
        <NavItem key={index} item={item} />
      ))}
    </div>
  );
}

export default NavigationMenu;
