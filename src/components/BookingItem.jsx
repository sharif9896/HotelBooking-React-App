import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { BookingSliceAction } from "../store/BookingSlice";
const BookingItem = ({ item }) => {
    const dispatch = useDispatch();
    const deltebooked = (id) =>{
       dispatch(BookingSliceAction.deletetobook(id));
    }
  return (
    <>
   
      <div class="bag-item-container">
        <div class="item-left-part">
          <img class="bag-item-img" src={item.image} alt="item image" />
        </div>
        <div class="item-right-part">
          <div class="company">{item.company}</div>
          <div class="item-name">{item.item_name}</div>
          <div class="price-container">
            <span class="current-price">Rs {item.totalRent}</span>
            <span class="original-price">Rs {item.original_price}</span>
            <span class="discount-percentage">
              ({item.discount_percentage}% OFF)
            </span>
          </div>
          <div class="return-period">
            <span class="return-period-days">up to {item.return_period} days</span>{" "}
             room should be available
          </div>
          <div class="delivery-details">
            Rented by 
            <span class="delivery-details-days"> - {item.delivery_date}</span>
          </div>
        </div>

        <div class="remove-from-cart" onClick={() => deltebooked(item.id)}>
          <MdDeleteSweep />
        </div>
      </div>
    </>
  );
};
export default BookingItem;
