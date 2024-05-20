import { IoAirplane } from "react-icons/io5";

const DestinationHeader = () => {
  return (
    <div className="bg-[#0a3d62] py-2 text-white">
      <div className="flex justify-center">
        <div className="flex flex-col space-y-1 items-center">
          <p className="text-xs opacity-95">01 June, 2024</p>
          <div className="flex items-center">
            <p>DAC</p>
            <IoAirplane className="mx-2 scale-150" />
            <p>DXB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationHeader;
