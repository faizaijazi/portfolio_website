import { useState } from 'react'
import Slider from '../Slider';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { temp } from "./Data";

const WorksItems = ({ data, item, subIndex }) => {

  const [showModal, setModal] = useState(false);

  // console.log(data);

  // console.log(Object.keys(temp));

  function myFunction(image) {
    //  console.log(data);
    setModal(true);
  }

  return (
    <>
      <div onClick={() => myFunction(item.src)} className="work__card" key={item.id}>
        <img src={item.src} alt="" className="work__img" />
        <h3 className="work__title">{item.name}</h3>
      </div>
      {showModal &&
        <div className='modal'>
          <span className="cross" onClick={() => setModal(false)}><AiOutlineCloseCircle /></span>
          <div className="wrapper">
            <div className="container">
              {/* <img src={item?.image} alt="img" /> */}
              <Slider sliderData={data} subIndex={subIndex} />
            </div>
          </div>
          {/* <div className="list"> */}

          {/* </div> */}
        </div>
      }
    </>
  )
}

/*
git init
git add .
git commit -m "Message"
git branch -M master
git push origin master


*/


export default WorksItems
