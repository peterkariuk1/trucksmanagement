import truckLogo from "../src/assets/trucklogo.jpg";

function Header() {
    const tabs = ["Dashboard", "Register Trucks", "Profile"];

  return (
    <div className="">
      <header className="flex  justify-between m-auto py-[8px] px-[15px] border-b-[1.5px] items-center ">
        <div className="flex gap-x-6">
          {tabs.map((tab, index) => {
            return (
              <p
                key={index}
                className="text-[14px] cursor-pointer active:text-gray-700 hover:text-gray-700"
              >
                {tab}
              </p>
            );
          })}
        </div>
        <div>
          <img className="w-[35px] rounded-[50%]" src={truckLogo} />
        </div>
      </header>
      <div className="px-[15px]">
        <p className="text-[28px]">Trucks</p>
        <p className="text-[12px]">Register and assign trucks to drivers</p>
      </div>
    </div>
  );
}
export default Header;