import Image from "next/image";
import { MdCall } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="py-2 max-w-[1170px] mx-auto">
      <div className="flex items-center justify-between">
        <Image
          width={150}
          height={150}
          src={"/assets/logo.gif"}
          alt="zoo-logo.png"
        ></Image>
        <div className="flex items-center space-x-8">
          <div className="flex text-sm text-primary font-medium space-x-1 items-center">
            <MdCall />
            <p>+8801978-569290</p>
          </div>
          <div>
            <button className="flex items-center shadow-md space-x-1 rounded-md text-xs text-white px-12 py-1 bg-primary font-medium">
              <FaUser className="w-[10px]" />
              <p>Account</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
