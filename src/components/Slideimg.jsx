import { useEffect } from "react";
import { useState } from "react";

const Slideimage = ({ data }) => {
  console.log(data)
  let [curentslide, setcurrentslide] = useState(0);
  // let [autoplay, setautoplay] = useState(true);

  const next = () => {
    setcurrentslide(curentslide === data.length - 1 ? 0 : curentslide + 1);
  };
  const prev = () => {
    setcurrentslide(curentslide === 0 ? data.length - 1 : curentslide - 1);
  };

useEffect(()=>{
    setTimeout(()=>{
        next()
    },3000)
  })

  return (
    <>
      <div className="slidercontainer">
        <div className="slidercontent" id="slider">
          {data.map((img) => (
            <div className={curentslide === img.alt ? "slide" : "slide run"}>
              <img src={img.src} key={img.alt} className="moc" />
            </div>
          ))}
        </div>
      </div>
      <button className="arrow prev" onClick={prev}>
        &#10094;
      </button>
      <button className="arrow next" onClick={next}>
        &#10095;
      </button>
      <center>
      <div className="" id="indicators">
        {data.map((_, alt) => {
          return (
            <div
              className={curentslide === alt ? "dot active" : "dot"}
              onClick={() => setcurrentslide(alt)}
            ></div>
          );
        })}
      </div>
      </center>
    </>
  );
};
export default Slideimage;

