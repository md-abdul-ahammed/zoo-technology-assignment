import { IoAirplane } from "react-icons/io5";

interface IDestinationType {
  from: string;
  to: string;
}

const Destination = ({ from, to }: IDestinationType) => {
  return (
    <div className="flex items-center">
      <p>{from}</p>
      <IoAirplane className="mx-2 scale-150" />
      <p>{to}</p>
    </div>
  );
};

export default Destination;
