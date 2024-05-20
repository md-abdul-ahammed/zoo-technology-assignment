import Image from "next/image";
import Destination from "../Destination";
import { RiQuestionFill, RiWhatsappLine } from "react-icons/ri";
import { FaEnvelope } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FlightDetails from "./FlightDetails";
import { IFlightType, SegmentDetail } from "@/types/flightType";
import moment from "moment";
import {
  calculateDuration,
  formatTime,
  getCabinClass,
  getFlightType,
  getFullFormWithImage,
} from "@/utils";
import { IoAirplane } from "react-icons/io5";

type ChildComponentProps = {
  data: IFlightType;
  showFlightDetails: number | null;
  setShowFlightDetails: React.Dispatch<React.SetStateAction<number | null>>;
};

const FlightCard = ({
  showFlightDetails,
  setShowFlightDetails,
  data,
}: ChildComponentProps) => {
  const {
    id,
    legs,
    pricingInformation,
    nonRefundable,
    baggageInfo,
    priceBreakDown,
  } = data;

  const { arrivalLocation, departureDate, departureLocation } = legs[0].segment;
  const { segmentDetails } = legs[0];

  const startpoint = segmentDetails[0].origin;
  const endpoint = segmentDetails[segmentDetails.length - 1].destination;
  const discountPercentage =
    priceBreakDown[0].passengerInfo.passengerTotalFare.discountPercentage;

  const sellPrice =
    priceBreakDown[0].passengerInfo.passengerTotalFare.netBaseFareAmount +
    priceBreakDown[0].passengerInfo.passengerTotalFare.totalTaxAmount;
  const withoutDiscountPrice =
    sellPrice +
    priceBreakDown[0].passengerInfo.passengerTotalFare.discountAmount;

  return (
    <div className="p-3">
      <div className="grid grid-cols-5">
        <div>
          <p className="text-xs mb-6">
            {moment(departureDate).format("DD MMMM, YYYY")}
          </p>
          <div className="flex text-xs text-secondary flex-col space-y-1">
            <Image
              alt="Bs.gif"
              width={30}
              height={20}
              src={
                getFullFormWithImage(segmentDetails[0].fleet.marketing).imgUrl
              }
            ></Image>
            <p>
              {segmentDetails[0].fleet.marketing} (
              {segmentDetails[0].fleet.marketingFlightNumber})
            </p>
            <p>
              {getFullFormWithImage(segmentDetails[0].fleet.marketing).fullForm}
            </p>
          </div>
        </div>
        <div className="h-full flex items-center">
          <div className="flex text-secondary flex-col">
            <p className="font-bold">
              {formatTime(startpoint.dateTime, startpoint.timeZone)}
            </p>
            <p className="text-xs">{startpoint.airport}</p>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <Destination from={departureLocation} to={arrivalLocation} />
          </div>
          <div className="flex gap-2 flex-wrap">
            <p className="border text-secondary rounded-sm text-xs px-1 py-[2px] border-[#3c6382]">
              {getFlightType(segmentDetails)}
            </p>
            <p className="border text-secondary rounded-sm text-xs px-1 py-[2px] border-[#3c6382]">
              {getCabinClass(
                pricingInformation[0].fare.passengerInfoList[0].passengerInfo
                  .fareComponents[0].details.cabinCode
              )}
            </p>
            <p className="border text-secondary rounded-sm text-xs px-1 py-[2px] border-[#3c6382]">
              {calculateDuration(
                startpoint.dateTime,
                startpoint.timeZone,
                endpoint.dateTime,
                endpoint.timeZone
              )}
            </p>
            <p className="border text-secondary rounded-sm text-xs px-1 py-[2px] border-[#3c6382]">
              {nonRefundable ? "Non Refundable" : "Refundable"}
            </p>
          </div>
        </div>
        <div className="h-full justify-center flex items-center">
          <div className="flex text-secondary flex-col">
            <p className="font-bold">
              {formatTime(endpoint.dateTime, endpoint.timeZone)}
            </p>
            <p className="text-xs">{endpoint.airport}</p>
          </div>
        </div>
        <div className="border-l border-gray-300 ">
          <div className="grid h-full grid-cols-8">
            <div className="col-span-7">
              <div className="h-full justify-center flex items-center">
                <div>
                  {" "}
                  <p className="text-xs text-red-500">
                    {discountPercentage}% Discount
                  </p>
                  <p className="font-medium">
                    BDT {sellPrice.toString().split(".")[0]}
                  </p>
                  <p className="my-1 text-red-500 line-through text-xs">
                    BDT {withoutDiscountPrice.toString().split(".")[0]}
                  </p>
                  <button className="bg-primary  text-sm rounded-md text-white px-2 py-1">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="h-full cursor-pointer flex items-center">
              <RiQuestionFill className="scale-150" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] mt-2">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <p className="font-bold text-xs">Send Query : </p>
            <div className="flex ml-2 space-x-1 items-center">
              <RiWhatsappLine className="cursor-pointer hover:text-[#3c6382] text-[#337ab7]" />
              <FaEnvelope className="cursor-pointer hover:text-[#3c6382] text-[#337ab7]" />
            </div>
          </div>
          <button
            onClick={() =>
              setShowFlightDetails(showFlightDetails === id ? null : id)
            }
            className="flex border-none right-0 text-secondary cursor-pointer space-x-2 items-center"
          >
            <p className="font-medium text-xs">Flight Details</p>
            {showFlightDetails === id ? (
              <IoIosArrowUp className="font-bold" />
            ) : (
              <IoIosArrowDown className="font-bold" />
            )}
          </button>
        </div>
      </div>

      {showFlightDetails === id && (
        <div className="mt-2">
          <div className="pt-2">
            <div className="w-[200px] bg-[#0a3d62]">
              <div className="flex py-2 justify-evenly items-center">
                <p className="text-xs text-white">{startpoint.airport}</p>
                <IoAirplane className="mx-2 text-white scale-110" />
                <p className="text-xs text-white">{endpoint.airport}</p>
              </div>
            </div>
            {segmentDetails.map(
              (
                data: SegmentDetail,
                index: number,
                allData: SegmentDetail[]
              ) => (
                <FlightDetails
                  pricingInformation={pricingInformation[0]}
                  key={data.id}
                  baggageInfo={baggageInfo[0]}
                  allData={allData}
                  index={index}
                  data={data}
                />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightCard;
