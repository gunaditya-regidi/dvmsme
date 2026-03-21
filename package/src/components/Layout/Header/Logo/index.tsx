import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {
  return (
    <div className="bg-white px-2 py-1 rounded-md lg:bg-transparent">
      <Link href="/" className="block w-[160px] h-[50px]">
        <Image
          src="/images/logo/logo.svg"
          alt="logo"
          width={160}
          height={50}
          quality={100}
          className="dark:hidden w-full h-full object-contain"
        />
      </Link>
    </div>
  );
};

export default Logo;