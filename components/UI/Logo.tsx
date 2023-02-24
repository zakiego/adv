import Image from "next/image";
import LogoLight from "../../public/images/logo/zakiego-black.svg";
import LogoDark from "../../public/images/logo/zakiego-white.svg";

const Logo = () => {
  return (
    <div>
      <div className="block dark:hidden">
        <Image src={LogoLight} width={92} height={30} alt="Zakiego Icon" />
      </div>
      <div className="hidden dark:block">
        <Image src={LogoDark} width={92} height={30} alt="Zakiego Icon" />
      </div>
    </div>
  );
};

export default Logo;
