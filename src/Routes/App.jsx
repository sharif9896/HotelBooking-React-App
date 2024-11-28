import Fetchstatus from "../components/Fetctstatus";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";


function App() {
  const fetching = useSelector((store) => store.fetchstatus);
  console.log(fetching);
  return (
    <>
      <Header></Header>
      <Fetchstatus />
      {fetching.currentlyfetching ? <Spinner /> : <Outlet />}
      <Footer></Footer>
    </>
  );
}

export default App;
