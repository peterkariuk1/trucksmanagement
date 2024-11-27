import addIcon from "../src/assets/add-icon.png";
import sortingIcon from "../src/assets/sorting.png";
import truck1 from "../src/assets/truck1.jpeg";
import arrowDownLogo from "../src/assets/arrow-down.png";
import driverImage from "../src/assets/truck-driver.jpeg";
import driverLogo from "../src/assets/driver-logo.png";

function RegisterTruck() {
  const truck = [
    {
      /* The POST METHOD from backend should post trucks here */
      image: truck1,
      name: "Scania Series 5",
      year: 2016,
      HP: 500,
      regNo: "KDQ 123M",
    },
  ];
  const driver = [
    {
      /* The POST METHOD from backend should post drivers here */
      image: driverImage,
      name: "Denise Awino",
      tier: 8,
    },
  ];

  return (
    <div className="flex">
      <div className="px-[15px] pb-[15px] mt-[28px] shadow-[3px_3px_2px_rgba(0,0,0,0.1)] ml-8 rounded-[12px] mr-5">
        <p className="text-[18px]">Register new truck</p>
        <div className="flex">
          <div className="flex-col">
            <div className="flex-col ">
              <p className="text-[11px] mt-2">Name of the truck</p>
              <input
                type="text"
                placeholder="Name of the truck"
                className="px-[8px] py-[5px] border-[1.2px] w-[320px] border-gray-400 text-[13px] rounded-[14px] placeholder:text-black placeholder:text-[12px] focus:outline-none focus:shadow-md"
              />
            </div>
            <div className="flex-col">
              <p className="text-[11px] mt-2">Model of the truck</p>
              <div className="px-[8px] w-[320px] py-[5px] border-[1.2px] border-gray-400 rounded-[14px] focus:shadow-md ">
                <label htmlFor="Model" className="text-[12px]">
                  Model of the truck :
                </label>
                <select
                  className="border-none pl-[20px] focus:outline-none"
                  name="Truck model"
                  id="model"
                >
                  <option value="1"></option>
                  <option className="text-[12px]" value="scania">
                    Scania
                  </option>
                  <option className="text-[12px]" value="volvo">
                    Volvo
                  </option>
                  <option className="text-[12px]" value="man">
                    MAN
                  </option>
                  <option className="text-[12px]" value="isuzu">
                    Isuzu
                  </option>
                  <option className="text-[12px]" value="merc">
                    Mercedes-Benz
                  </option>
                  <option className="text-[12px]" value="hino">
                    Hino
                  </option>
                  <option className="text-[12px]" value="fuso">
                    Fuso
                  </option>
                  <option className="text-[12px]" value="mitsubishi">
                    Mitsubishi
                  </option>
                </select>
              </div>
            </div>
            <div className="flex-col ">
              <p className="text-[11px] mt-2">Registration Number</p>
              <input
                type="text"
                placeholder="Registration Number"
                className="px-[8px] py-[5px] border-[1.2px] w-[320px] border-gray-400 rounded-[14px] placeholder:text-black text-[13px] placeholder:text-[12px] focus:outline-none focus:shadow-md"
              />
            </div>
            <div className="flex-col ">
              <p className="text-[11px] mt-2">Towing Capacity(kgs)</p>
              <input
                type="text"
                placeholder="Towing Capacity"
                className="px-[8px] py-[5px] border-[1.2px] w-[320px] text-[13px] border-gray-400 rounded-[14px] placeholder:text-black placeholder:text-[12px] focus:outline-none focus:shadow-md"
              />
            </div>
          </div>
          <div className=" ml-[40px] border-[2px] w-[300px] border-dotted border-black rounded-lg p-[20px]">
            <img className="pl-[78px] pt-[30px]" src={addIcon} />
            <p className="pl-[46px] py-[18px] text-[18px]">Add Truck Images</p>
            <input type="file" id="fileInput" accept="image/*" />
          </div>
        </div>
      </div>
      <div className="px-[35px] pb-[15px] mt-[28px] shadow-[3px_3px_2px_rgba(0,0,0,0.1)] ml-8 rounded-[12px] mr-5">
        <p>Assign a truck to a driver</p>
        <div>
          <p className="text-[10px]">Truck</p>
          {truck.map((truck, index) => {
            return (
              <div
                key={index}
                className="flex border-[1px] border-slate-500 pr-[10px] py-1 w-[350px] rounded-[20px] items-center"
              >
                <div>
                  <img
                    className="w-[55px] h-[55px] rounded-[50%] mr-3"
                    src={truck.image}
                  />
                </div>
                <div className="">
                  <p className="text-[12px] font-medium">{truck.name}</p>
                  <p className="text-[12px]">
                    Model: {truck.year}, {truck.HP}HP
                  </p>
                  <p className="text-[12px]">{truck.regNo}</p>
                </div>
                <div className="p-3 rounded-[50%] hover:bg-gray-100 ml-[130px] cursor-pointer">
                  <img className="w-[15px] h-[15px] " src={arrowDownLogo} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex item-center justify-center pt-1">
          <img className="w-[25px] " src={sortingIcon} />
        </div>

        <div>
          <p className="text-[10px]">Driver</p>
          {driver.map((driver, index) => {
            return (
              <div
                key={index}
                className="flex border-[1px] border-slate-500 pr-[10px] py-1 w-[350px] rounded-[20px] items-center"
              >
                <div className="pl-2">
                  <img
                    className="w-[40px] h-[40px] rounded-[50%] mr-3"
                    src={driver.image}
                  />
                </div>
                <div>
                  <p className="text-[12px] font-medium">{driver.name}</p>
                  <p className="text-[12px]">Tier: {driver.tier} Rank</p>
                </div>
                <div className="p-3 rounded-[50%] hover:bg-gray-100 ml-[155px] cursor-pointer">
                  <img className="w-[15px] h-[15px] " src={arrowDownLogo} />
                </div>
              </div>
            );
          })}
          <div className=" flex bg-black border-none w-[350px] mt-4 items-center justify-center py-2 text-white text-[12px] rounded-full cursor-pointer hover:scale-105">
            <img className="w-[28px] pr-2" src={driverLogo} />
            Assign Driver
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterTruck;
