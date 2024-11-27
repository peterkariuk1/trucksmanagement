import truck1 from "../src/assets/truck1.jpeg";
import addIcon from "../src/assets/add-icon.png";
import driverLogo from "../src/assets/driver-logo.png";

function RegisteredTrucks() {
  const registeredTrucks = [
    {
      image: truck1,
      name:"Scania Series S",
      year:2020,
      HP:500,
      regNo: "KDP 300C",
      towingCapacity: 15000,
      mileage: 16,
    }, {
      image: truck1,
      name:"Scania Series S",
      year:2020,
      HP:500,
      regNo: "KDP 300C",
      towingCapacity: 15000,
      mileage: 16,
    }, {
      image: truck1,
      name:"Scania Series S",
      year:2020,
      HP:500,
      regNo: "KDP 300C",
      towingCapacity: 15000,
      mileage: 16,
    }, {
      image: truck1,
      name:"Scania Series S",
      year:2020,
      HP:500,
      regNo: "KDP 300C",
      towingCapacity: 15000,
      mileage: 16,
    },
  ];

  return (
    <div className="mt-[20px] px-[15px] pb-[15px] shadow-[3px_3px_2px_rgba(0,0,0,0.1)] ml-8 rounded-[12px] w-[92%] m-auto">
      <div className="flex justify-between mt-5">
        <p className="text-[18px]">Registered trucks</p>
        <p className="text-[14px] font-semibold text-purple-600 pr-[40px]">
          See All
        </p>
      </div>

      {registeredTrucks.map((registeredTruck, index) => {
        return (
          <div key={index} className="flex items-center mt-3">
            <img  className="w-[40px] h-[40px] rounded-full" src={registeredTruck.image} />
            <div className="">
              <p className="text-[12px] font-medium">{registeredTruck.name}</p>
              <p className="text-[12px]">
                Model: {registeredTruck.year}, {registeredTruck.HP}HP
              </p>
            </div>
            <div className="h-[30px] w-[1.3px] mx-[50px] bg-gray-600"></div>
            <p className="text-[12px] font-medium">{registeredTruck.regNo}</p>
            <div className="h-[30px] w-[1.3px] mx-[50px] bg-gray-600"></div>
            <div>
              <p className="text-[12px] font-medium">{registeredTruck.towingCapacity}KG towing capacity</p>
              <p className="text-[12px]">Mileage: {registeredTruck.mileage}l/km</p>
            </div>
            <div className="h-[30px] w-[1.3px] mx-[50px] bg-gray-600"></div>
            <div className="flex items-center bg-black text-white text-[12px] px-3 py-1 rounded-full cursor-pointer hover:scale-105">
              <img className="w-[22px] h-[22px]" src={driverLogo} />
              Assign Driver
            </div>
            <div className="h-[30px] w-[1.3px] mx-[50px] bg-gray-600"></div>
            <div className="flex items-center text-[12px] border-[1.5px] border-black px-[18px] py-2 rounded-full cursor-pointer hover:scale-105">
                <img className="w-[15px] h-[15px] " src={addIcon} />
                Add Logbook
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RegisteredTrucks;
