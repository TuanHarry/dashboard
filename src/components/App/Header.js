import NavLink from "./NavLink";
const Header = () => {
  return (
    <header className="bg-white p-6 xl:p-8">
      <div className="container mx-auto flex justify-between items-center">
        <span className="flex flex-row items-center text-3xl xl:text-4xl font-bold text-gray-900">
          Tuan <span className="ml-1 text-gray-600">Tran</span>
        </span>
        <nav className="hidden lg:flex">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <button className="border border-gray-900 rounded-full h-10 flex items-center justify-center px-5">
          <span className="text-base font-medium text-gray-900">
            {" "}
            Let's talk →
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
