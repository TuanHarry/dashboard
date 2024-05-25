const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Landing Page</h1>
        <nav>
          <a href="#features" className="mx-2">Features</a>
          <a href="#contact" className="mx-2">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
