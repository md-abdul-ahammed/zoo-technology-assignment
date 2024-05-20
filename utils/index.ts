import { SegmentDetail } from "@/types/flightType";
import moment from "moment-timezone";

interface ICabinClassMapType {
  [key: string]: string;
}

export const getFullFormWithImage = (
  shortForm: string
): { fullForm: string; imgUrl: string } => {
  let fullForm = "";
  let imgUrl = "";

  switch (shortForm) {
    case "BS":
      fullForm = "US Bangla";
      imgUrl = "/assets/BS.gif";
      break;
    case "BG":
      fullForm = "Biman Bangladesh";
      imgUrl = "/assets/bg.gif";
      break;
    case "FZ":
      fullForm = "Flydubai";
      imgUrl = "/assets/flydubai.gif";
      break;
    case "EK":
      fullForm = "Emirates";
      imgUrl = "/assets/emirates.gif";
      break;
    case "UK":
      fullForm = "Vistara";
      imgUrl = "/assets/Vistara.gif";
      break;
    case "QR":
      fullForm = "Qatar Airways";
      imgUrl = "/assets/QR.gif";
      break;
    case "AI":
      fullForm = "Air India";
      imgUrl = "/assets/AI.gif";
      break;
    case "GF":
      fullForm = "Gulf Air";
      imgUrl = "/assets/GF.gif";
      break;
    case "TK":
      fullForm = "Turkish Airlines";
      imgUrl = "/assets/TK.gif";
      break;
    case "UL":
      fullForm = "SriLankan";
      imgUrl = "/assets/UL.gif";
      break;
    case "SQ":
      fullForm = "Singapore Airlines";
      imgUrl = "/assets/SQ.gif";
      break;
    case "CZ":
      fullForm = "China Southern";
      imgUrl = "/assets/cz.png";
      break;
    case "MH":
      fullForm = "Malaysia Airlines";
      imgUrl = "/assets/mh.png";
      break;
    case "SV":
      fullForm = "Saudia Arabian";
      imgUrl = "/assets/sv.jpeg";
      break;
    default:
      fullForm = shortForm;
      imgUrl = "";
  }

  return {
    fullForm,
    imgUrl,
  };
};

export const getTimezoneFromOffset = (offset: string): string => {
  const offsetHours = parseInt(offset.substring(1, 3), 10);
  const offsetMinutes = parseInt(offset.substring(4, 6), 10);
  const totalOffsetMinutes = offsetHours * 60 + offsetMinutes;

  const tzNames = moment.tz.names();
  const validTimezone = tzNames.find((tzName) => {
    const tzOffset = moment.tz(tzName).utcOffset();
    return (
      tzOffset ===
      (offset.startsWith("+") ? totalOffsetMinutes : -totalOffsetMinutes)
    );
  });

  return validTimezone || "UTC";
};

export const formatTime = (dateTime: string, timeZone: string) => {
  const detectedTimeZone = getTimezoneFromOffset(timeZone);
  return moment.tz(dateTime, detectedTimeZone).format("HH:mm");
};

export const getFlightType = (data: SegmentDetail[]): string => {
  let fightType = "";
  if (data.length === 1) {
    fightType = "Non Stop";
  }
  if (data.length === 2) {
    fightType = "One Stop";
  }
  if (data.length > 2) {
    fightType = "Multi Stop";
  }

  return fightType;
};

export const getCabinClass = (code: string): string => {
  const cabinClassMap: ICabinClassMapType = {
    Y: "Economy",
    W: "Premium Economy",
    C: "Business",
    F: "First",
  };

  const cabinClass = cabinClassMap[code] || "Unknown";

  return cabinClass;
};

export const calculateDuration = (
  startDateTime: string,
  startTimeZone: string,
  endDateTime: string,
  endTimeZone: string
) => {
  let start = moment.tz(startDateTime, getTimezoneFromOffset(startTimeZone));
  let end = moment.tz(endDateTime, getTimezoneFromOffset(endTimeZone));

  // Swap the start and end times if start is after end
  if (start.isAfter(end)) {
    const temp = start;
    start = end;
    end = temp;
  }

  const duration = moment.duration(end.diff(start));
  return `${Math.floor(duration.asHours())} h ${duration.minutes()} m`;
};
