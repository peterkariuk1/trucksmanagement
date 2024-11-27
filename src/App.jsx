import RegisterTruck from "../components/RegisterTruck";
import RegisteredTrucks from "../components/RegisteredTrucks";
import Header from "../components/Header";

function App() {
  return (
    <>
      <Header />
      {/*RegisterTruck COMPONENT contains registration of trucks and assigning trucks to drivers functionalities*/}
      <RegisterTruck />
      <RegisteredTrucks />
    </>
  );
}

export default App;
