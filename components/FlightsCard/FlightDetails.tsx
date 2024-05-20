import {
  BaggageInfo,
  PricingInformation,
  SegmentDetail,
} from "@/types/flightType";
import {
  calculateDuration,
  getCabinClass,
  getFullFormWithImage,
} from "@/utils";
import Image from "next/image";

type FlightDetailsType = {
  data: SegmentDetail;
  allData: SegmentDetail[];
  index: number;
  baggageInfo: BaggageInfo;
  pricingInformation: PricingInformation;
};

const FlightDetails = ({
  data,
  pricingInformation,
  index,
  allData,
  baggageInfo,
}: FlightDetailsType) => {
  const availableSeat =
    pricingInformation.fare.passengerInfoList[0].passengerInfo.fareComponents[0]
      .segments[index].segment.seatsAvailable;
  const cabinCode =
    pricingInformation.fare.passengerInfoList[0].passengerInfo.fareComponents[0]
      .segments[index].segment.cabinCode;

  return (
    <>
      <div>
        <div className="grid py-2 grid-cols-3">
          <div className="col-span-2">
            <div className="grid grid-cols-4 h-full">
              <div>
                <Image
                  alt="Bs.gif"
                  width={40}
                  height={30}
                  src={getFullFormWithImage(data.fleet.marketing).imgUrl}
                ></Image>
              </div>
              <div className="flex flex-col text-xs">
                <p>{data.fleet.marketing}</p>
                <p>Aircraft: {data.fleet.marketingFlightNumber}</p>
              </div>
              <div className="flex flex-col text-xs">
                <p>{data.origin.dateTime}</p>
                <p>{data.origin.airport}</p>
              </div>
              <div className="justify-center flex h-fit mt-2">
                <p className="border w-fit text-secondary rounded-sm text-xs px-2 font-medium py-1 border-[#3c6382]">
                  {getCabinClass(cabinCode)}
                </p>
              </div>
              {index !== 0 && (
                <div className="col-span-4 h-full">
                  <div className="h-full flex opacity-40 text-sm justify-start items-end">
                    Transit time:{" "}
                    {calculateDuration(
                      allData[index - 1].destination.dateTime,
                      allData[index - 1].destination.timeZone,
                      data.origin.dateTime,
                      data.origin.timeZone
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <div className="flex flex-col pl-2 text-xs">
                  <p>{data.destination.dateTime}</p>
                  <p>{data.destination.airport}</p>
                </div>
              </div>
              <div className="flex items-end w-full flex-col text-xs">
                <p>{data.fleet.marketing}</p>
                <p>{data.fleet.marketingFlightNumber}</p>
              </div>
            </div>
            <div className="grid mt-8 grid-cols-3">
              <div className="col-span-2 border-l border-r border-gray-300">
                <div className="flex justify-center text-xs">
                  <div className="flex flex-col">
                    <p>Available Seat : {availableSeat}</p>
                    <p>
                      Cabin: {cabinCode} ( rbd: {cabinCode})
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center text-xs">
                <div className="flex flex-col">
                  <p>Baggage</p>
                  <p>{baggageInfo.details[0].pieceCount} Pcs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-300 "></div>
      </div>
    </>
  );
};

export default FlightDetails;
