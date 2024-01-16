import { LoginButton } from "./LoginButton";
import { Logo } from "./Logo";
import { MenuLinks } from "./MenuLinks";
import { SignupButton } from "./signupButton";

const Navbar = () => {
  return (
    <nav className="sticky top-4 z-50">
      <div className="flex justify-between border items-center container mx-auto backdrop-blur-sm shadow-lg rounded-full py-3 mt-4 lg:px-4">
        <div className="ps-4">
          <Logo />
        </div>
        <div>
          <MenuLinks />
        </div>
        <div className="flex gap-2">
          <LoginButton />
          <SignupButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
