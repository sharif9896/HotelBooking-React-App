import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { hotelSliceAction } from "../store/hotelSlice";
import { fetchAction } from "../store/fetchstatus";
import {useSelector} from "react-redux";

const Fetchstatus = () => {
const fetchstatus = useSelector(store => store.fetchstatus);
const dispatch = useDispatch();
  useEffect(() => {
    if(fetchstatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchAction.markfetchstarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(fetchAction.markfetchDone());
        dispatch(fetchAction.markfetchended());
        dispatch(hotelSliceAction.addtobooking(items[0]))
      });

      return ()=>{
        controller.abort();
      }
  });
  return <></>;
};
export default Fetchstatus;
