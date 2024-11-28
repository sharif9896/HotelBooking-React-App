import { useSelector } from "react-redux";
import Item from "../components/Item";
import SliderImage from "../components/SliderImage";


const Home = () => {
  const items = useSelector((store) => store.hotelSlice);

  return (
    <>
      <SliderImage></SliderImage>
      <main>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="cp" data-aos="fade-up">
          <p id="into">The Proven Best Hotels</p>
        </div>
        <div class="items-container">
          {items.map((pro) => (
            <Item item={pro}></Item>
          ))}
        </div>
      </main>
    </>
  );
};
export default Home;
