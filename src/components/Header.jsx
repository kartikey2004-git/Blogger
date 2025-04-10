import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <>
      <header className=" lg:mt-32 md:mt-64 text-white shadow-lg ">
        <nav className="flex items-center justify-between">
          <div className="hidden md:block">
            <img src="./images/emoji.jpeg" alt="" height={100} width={100} />
            <p className="text-2xl bold flex items-center">Blogger</p>
          </div>
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-white text-xl font-semibold"></span>
            </Link>
          </div>
          <ul className="flex items-center space-x-4 relative z-10">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <Button
                      variant="outline"
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </Button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <button>hi</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
