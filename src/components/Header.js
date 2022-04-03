const Header = () => {
  return (
    <div>
      <div className="p-6 ">
        <div className="container  flex justify-center items-center px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {" "}
            <input
              type="text"
              className="h-8 border border-whitesmoke w-96 pr-8 pl-5 rounded-lg z-0 focus:shadow focus:outline-none"
              placeholder="Search anything..."
            />
            <div className="absolute top-4 right-3">
              {" "}
              <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
