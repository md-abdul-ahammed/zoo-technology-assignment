import DestinationHeader from "@/components/DestinationHeader";
import FlightsCard from "@/components/FlightsCard/FlightsCard";

export default function Home() {
  return (
    <div>
      <DestinationHeader />
      <div className="max-w-[1170px] my-4 mx-auto">
        <FlightsCard />
      </div>
    </div>
  );
}
