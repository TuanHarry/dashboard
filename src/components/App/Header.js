const Header = () => {
  return (
    <header className="bg-white p-6 xl:p-8">
      <div className="container mx-auto flex justify-between items-center">
        <span className="flex flex-row items-center text-3xl xl:text-4xl font-bold text-gray-900">
          Tuan <span className="ml-1 text-gray-600">Tran</span>
        </span>
        <nav className="hidden lg:flex">
          <a href="#home" className="mx-2">
            Home
          </a>
          <a href="#about" className="mx-2">
            About
          </a>
          <a href="#works" className="mx-2">
            Works
          </a>
          <a href="#services" className="mx-2">
            Services
          </a>
          <a href="#contact" className="mx-2">
            Contact
          </a>
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
