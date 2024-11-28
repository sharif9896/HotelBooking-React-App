import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BookingSliceAction } from "../store/BookingSlice";
import { useState } from "react";
import { reviewAction } from "../store/review";
const Item = ({ item }) => {

  let [cuutv,setv] = useState("imagedisplay")
  const  booking = useSelector((store) => store.BookingSlice);
  
  const finalbookign = booking.indexOf(item.id) >=0 ;
  const dispatch = useDispatch();
  const addtobooking = (id) => {
    dispatch(BookingSliceAction.addtobook(id));
  };
  const deletetobooking = (id)=>{
    dispatch(BookingSliceAction.deletetobook(id));
  }

  const delettodisplay = (image)=>{
    setv("imagedisplay block")
    dispatch(reviewAction.display(image));
  }

  const closeimage = (image)=>{
    setv("imagedisplay")
    dispatch(reviewAction.removedisplay(image));
  }

  return (
    <>
      <div className="item-container">
        <img className="item-image " src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.star} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <br />
        <div className="item-name">{item.propety}</div>
        <div className="price">
          <span className="current-price">Rs {item.totalRent}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage})</span>
        </div>

        {finalbookign ? (
          <button
            type="button"
            className="boyt"
            style={{background:"transparent",backgroundColor:"#303030",color:"white",border:"1px solid #303030", }}
            onClick={() => deletetobooking(item.id)}
          >
            Remove Booking
          </button>
          // btn btn-danger btn-add-bag 
          // btn btn-success btn-add-bag
        ) : (
          <button
            type="button"
            style={{background:"transparent",color:"#303030",border:"1px solid #303030", }}
            className=" boyt"
            onClick={() => addtobooking(item.id)}
          >
            Book This Hotel
          </button>
        )}
        <button
            type="button"
            style={{background:"transparent",color:"#303030",border:"1px solid #303030", marginTop:"10px"}}
            className=" boyt"
            onClick={() => delettodisplay(item.image)}
          >
            View
          </button>
      </div>
      <div  class={cuutv} onClick={() => closeimage(item.image)}>
        <span class="close">&times;</span>
        <center><video src={item.video} controls loop muted autoplay="autoplay"  class="srk"/></center>
      </div>
    </>
  );
};
export default Item;
