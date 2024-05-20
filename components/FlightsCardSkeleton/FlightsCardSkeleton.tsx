import { IoAirplane } from "react-icons/io5";

const FlightsCardSkeleton = () => {
  return (
    <div
      className={` "border-b-[5px] border-[#3c6382] flex flex-col shadow-customShadow rounded-md space-x-2`}
    >
      <div className="p-3 animate-pulse">
        <div className="grid grid-cols-5">
          <div>
            <p className="text-xs mb-6 bg-slate-200 w-20 h-4"></p>
            <div className="flex text-xs text-secondary flex-col space-y-1">
              <div className="h-8 w-10 bg-slate-200"></div>
              <p className="h-4 w-12 bg-slate-200"></p>
              <p className="h-4 w-14 bg-slate-200"></p>
            </div>
          </div>
          <div className="h-full flex items-center">
            <div className="flex text-secondary flex-col">
              <p className="h-6 w-14 bg-slate-200"></p>
            </div>
          </div>
          <div>
            <div className="mb-6">
              <div className="flex items-center">
                <p className="h-6 w-14 bg-slate-200"></p>
                <IoAirplane className="mx-2 text-slate-200 scale-150" />
                <p className="h-6 w-14 bg-slate-200"></p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <p className="h-4 w-16 bg-slate-200"></p>
              <p className="h-4 w-16 bg-slate-200"></p>
              <p className="h-4 w-16 bg-slate-200"></p>
              <p className="h-4 w-16 bg-slate-200"></p>
            </div>
          </div>
          <div className="h-full justify-center flex items-center">
            <div className="flex text-secondary flex-col">
              <p className="h-6 w-14 bg-slate-200"></p>
            </div>
          </div>
          <div className="border-l border-gray-300 ">
            <div className="grid h-full grid-cols-8">
              <div className="col-span-7">
                <div className="h-full justify-center flex items-center">
                  <div className="flex flex-col space-y-2">
                    {" "}
                    <p className="h-4  w-10 bg-slate-200"></p>
                    <p className="h-6  w-14 bg-slate-200"></p>
                    <p className="h-4  w-16 bg-slate-200"></p>
                    <p className="h-6  w-14 bg-slate-200"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f5] mt-2">
          <div className="px-4 py-3 flex items-center justify-between">
            <div className="flex items-center">
              <p className="h-4  w-20 bg-slate-200"></p>
            </div>
            <button className="flex border-none right-0 text-secondary cursor-pointer space-x-2 items-center">
              <p className="h-4  w-20 bg-slate-200"></p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsCardSkeleton;
