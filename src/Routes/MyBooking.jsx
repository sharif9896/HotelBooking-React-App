import ContainerBooking from "../components/ContainerBooking";
import SummaryBooking from "../components/SummaryBooking";

const MyBooking = () => {
  return (
    <>
      <main>
        <div class="bag-page">
          <div class="bag-items-container">
            <ContainerBooking></ContainerBooking>
          </div>
          <div class="bag-summary">
            <SummaryBooking></SummaryBooking>
          </div>
        </div>
      </main>
    </>
  );
};
export default MyBooking;
