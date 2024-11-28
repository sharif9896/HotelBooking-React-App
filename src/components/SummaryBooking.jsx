import {useSelector} from "react-redux";
const SummaryBooking = ()=>{

    const items = useSelector(store => store.hotelSlice);
    const booking = useSelector(store => store.BookingSlice);
    const finalist = items.filter((item) =>{
        const indexhotel = booking.indexOf(item.id);
        return indexhotel >= 0;
    })

    let totalBooking = booking.length;
    let totalRent = 0;
    let finalPayment = 0;
    let CONVINIENCE_CHARGE = 99;

    finalist.forEach(item => {
        // console.log(item.totalRent)
        totalRent += item.totalRent; 
        finalPayment += item.totalRent + CONVINIENCE_CHARGE;
    });


    return (
        <>
    <br />
    <br />
    <br />
    <br />
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS ({totalBooking} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total Rent Price</span>
      <span class="price-item-value">₹{totalRent}</span>
    </div>
    <div class="price-item">

    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹{CONVINIENCE_CHARGE}</span>
    </div>
    <hr/>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PROCEED TO BOOK</div>
  </button>
        </>
    );
}
export default SummaryBooking;