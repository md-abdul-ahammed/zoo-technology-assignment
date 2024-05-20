"use client";

import { useState } from "react";

import { useGetFlightsDataQuery } from "@/lib/redux/api/flightsApi";
import FlightsCardSkeleton from "../FlightsCardSkeleton/FlightsCardSkeleton";
import FlightCard from "./FlightCard";
import { IFlightType } from "@/types/flightType";

const FlightsCard = () => {
  const [showFlightDetails, setShowFlightDetails] = useState<number | null>(null);
  const { data, isLoading } = useGetFlightsDataQuery([]);

  if (isLoading) {
    return (
      <div className="flex space-y-4 flex-col">
        <FlightsCardSkeleton />
        <FlightsCardSkeleton />
        <FlightsCardSkeleton />
        <FlightsCardSkeleton />
      </div>
    );
  }

  if (data?.result.length === 0) {
    <div>No Data Available</div>;
  }

  const allFlightData = data.result;

  return (
    <div className="flex flex-col space-y-4">
      {allFlightData.map((data: IFlightType) => (
        <div
          key={data.id}
          className={`${
            showFlightDetails === data.id &&
            "border-b-[5px] border-[#3c6382]"
          } shadow-customShadow rounded-md`}
        >
          <FlightCard
            data={data}
            showFlightDetails={showFlightDetails}
            setShowFlightDetails={setShowFlightDetails}
          />
        </div>
      ))}
    </div>
  );
};

export default FlightsCard;
