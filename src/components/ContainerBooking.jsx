import BookingItem from "./BookingItem";
import { useSelector } from "react-redux";

const ContainerBooking = () => {
  const items = useSelector((store) => store.hotelSlice);
  const booking = useSelector((store) => store.BookingSlice);
  const finalist = items.filter((item) => {
    const indexhotel = booking.indexOf(item.id);
    return indexhotel >= 0;
  });
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      {finalist.map((pro) => (
        <BookingItem key={pro.id} item={pro} />
      ))}
    </>
  );
};
export default ContainerBooking;
