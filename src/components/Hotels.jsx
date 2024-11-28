import {useSelector} from "react-redux";
import { Outlet } from "react-router-dom";
const Hotels = () =>{
    const fetching = useSelector(store => store.fetchstatus);
    return(
        <>
            <Fetchstatus/>
            {fetching.currentlyfetching ? <Spinner/>: <Outlet/>}
        </>
    );
}
export default Hotels;