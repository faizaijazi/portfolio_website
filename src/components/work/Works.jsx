import React, { useEffect, useState } from "react";
import { projectsData, projectsNav, temp } from "./Data";
import WorksItems from "./WorksItems";
import './items.css'

const Works = () => {
  // const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [subCat, setSubCat] = useState([])
  const [active, setActive] = useState(0);
  const [subIndex, setSubIndex] = useState(0)
  const [imgData, setImgData] = useState([])

  useEffect(() => {
    // if (item.name === "all") {
    //   setProjects(projectsData);
    // } else {
    //   const newProjects = projectsData.filter((project) => {
    //     return project.category.toLowerCase() === item.name;
    //   });
    //   setProjects(newProjects);
    // }

    // setActive(index)

    const catData = temp[Object.keys(temp)[0]].sub_cat
    setProjects(catData)
    setSubCat(Object.keys(catData))

    console.log(catData);

    const arr = []

    for (const obj in catData) {
      catData[obj].forEach(element => {
        arr.push(element)
      });
    }

    setImgData(arr)

    // catData.forEach(element => {
    //   console.log(element);
    // });

    // console.log(Object.keys(temp)[0]);

    // console.log(Object.keys(temp[Object.keys(temp)[0]].sub_cat)); // sub-cat


    // console.log(temp[Object.keys(temp)[0]].sub_cat)

    // setSubCat(Object.keys(temp['graphics'].sub_cat))
    // setProjects(temp['graphics'].sub_cat)

  }, []);

  const handleClick = (index, catName) => {
    // setItem({ name: e.target.textContent.toLowerCase() });
    // setActive(index);
    // console.log(e.target.textContent);

    // setActive({name: catName});
    // console.log(catName);
    // setActive(e)
    // setItem({name: catName.toLowerCase()})
    // setItem(catName)

    // console.log({index, sub: temp[catName].sub_cat})

    setActive(index)
    setSubCat(Object.keys(temp[catName].sub_cat))
    setProjects(temp[catName].sub_cat)
    // console.log(Object.keys(temp))

    // console.log(temp[catName].sub_cat)

    // console.log(projectsNav[active].nested);
    // console.log(projects.children);
  }

  return (
    <div>
      <div className="work__filters">
        {/* {projectsNav.map((item, index) => (
            <span
              onClick={event => {
                handleClick(index,item.name);
              }}
              className={`${active === index ? 'active-work' : ""} work__item`}
              key={index}
            >
              {item.name}
            </span>
          )
        )} */}
        <div className="allMainCat">
        {Object.keys(temp)?.map((item, index) => (
          <span
            onClick={event => {
              handleClick(index, item);
            }}
            className={`${active === index ? 'active-work' : ""} work__item`}
            key={index}
          >
            {item}
          </span>
        ))}
        </div>
      </div>

      {/* {projectsNav[active]?.nested && 
        projectsNav[active].children?.map(e => (
          <h1 className="a">{e}</h1>
        ))
      } */}

      <div className="mainCat">
      {subCat?.map((e, i) => (
        <span
          onClick={() => setSubIndex(i)}
          key={i}
        >
            <span className="catNames">
              {e}
            </span>
        </span>
      ))}
      </div>
      {/* <button onClick={()=> setSubIndex(subCat)}>click</button> */}



      <div className="work__container container grid">
        {/* {projects[subCat[subIndex]]?.map((item, index) => <WorksItems data={projects[subCat[subIndex]]} subIndex={index} item={item} key={index} />)} */}
        {projects[subCat[subIndex]]?.map((item, index) => <WorksItems data={imgData} subIndex={index} item={item} key={index} />)}
      </div>
      {/* <div className="work__container container grid">
        {projects.map((item) => <WorksItems data={projects} item={item} key={item.id} />)}
      </div> */}
    </div>
  );
};

export default Works;
