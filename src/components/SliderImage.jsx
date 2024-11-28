import {slides} from "../data_slide/slide.json";
import Slideimage from "./Slideimg";

const SliderImage = () => {
  return (
    <>
      <div className="con">
        <Slideimage data={slides}></Slideimage>
      </div>
    </>
  );
};
export default SliderImage;
