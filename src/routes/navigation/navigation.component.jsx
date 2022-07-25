import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>logo</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
        <h1>I am the Navigation Bar</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
