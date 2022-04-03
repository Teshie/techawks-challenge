const Navbar = () => {
  return (
    <div className="p-10 border-b border-whitesmoke flex justify-between align-center">
      <div>Logo</div>
      <div className="flex space-x-4">
        <div>Products</div>
        <div>Contact us</div>
        <div>About us</div>
      </div>
      <div className="flex space-x-4">
        <div>Bell</div>
        <div>Avatar</div>
      </div>
    </div>
  );
};

export default Navbar;
