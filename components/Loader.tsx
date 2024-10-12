// components/Loader.js
import Image from 'next/image';
import loaderImage from '../public/loader.gif'; // Adjust to the correct path of your GIF

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-black text-white z-50">
      <div className="flex-grow flex justify-center items-center">
        <Image
          src={loaderImage}
          alt="Loading..."
          width={100} // Adjust size as needed
          height={100} // Adjust size as needed
        />
      </div>

      <p className="mb-4 font-extralight text-sm text-gray-300">Powered by: VRZ Studio</p>

      <style jsx>{`
        .relative {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
