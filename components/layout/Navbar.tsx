import Link from 'next/link';
import Image from 'next/image';
import Button from '../input/Button';

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent max-width">
      <Link href="/" className="flex justify-center items-center">
        <Image src="/logo.svg" alt="logo" width={118} height={18} className="object-contain" />
      </Link>

      <Button
        title="Sign in"
        btnType="button"
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
      />
    </nav>
  </header>
);

export default NavBar;
