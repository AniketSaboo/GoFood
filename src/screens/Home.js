import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
// impr
// import { useEffect,useState } from 'react'
import { useEffect, useState } from 'react'

export default function Home() {




  // const.
  // cosnt [search,setSearch]
  const [search, setSearch] = useState('')

  const [foodCategory, setFoodCat] = useState([]);

  const [fooditem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          // 'Content-Type':'applicat'
          // ''
          'Content-Type': 'application/json'
        }
      });
      // 
      // response=await response.json();
      response = await response.json();
      console.log("Api response ", response);

      // console.log(response[0]);
      // 
      // console.log/
      // console.log(respns/)
      // console.log(response[0],response[1];)
      // console.log(response[0], response[1]);
      // console/
      // console.log(response[0],response[1]);
      // console.log(response[0],response[1]);
      // console.log(response[0], response[1]);
      // set//
      // setFoodCat[response[0]];
      // setFoodCat[response[0]];
      // setFoodItem[response[1]];
      // setFoodItem[response[1]];

      // setFoodItem[response[1]];
      // setFood
      // setFoodC(response[0]);
      // setFoodItem(response[1]);

      setFoodCat(response[0]);
      setFoodItem(response[1]);

    } catch (error) {
      // conso/
      console.error("Error fetching the data", error);
    }

  };

  // useEffect

  useEffect(() => {
    loadData()
  }, [])


  return (
    <div>
      <div><Navbar /></div>


      {/* <div><Carousel /></div> */}
      <div className="carousel-inner" id="carousel">


        <div className="carousel-caption" style={{ zIndex: "10" }}>

          <div className="d-flex justify-content-center" >
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  /> */}
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={search} onChange={(e)=>{setSearch(e.target.value)}} /> */}
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
            {/* <button className="btn btn-outline-success " type="submit">Search</button> */}
          </div>

        </div>
        <div className="carousel-item active">
          <img src="https://picsum.photos/700/300/" className="d-block w-100" style={{ filter: "brightness(50%)", objectFit: "contain !important" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/700/300/" className="d-block w-100" style={{ filter: "brightness(50%)" }} alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://picsum.photos/700/300" className="d-block w-100" style={{ filter: "brightness(50%)" }} alt="..." />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <div style={{ position: 'relative', zIndex: -1 }}>
        {/* Your content here */}
        <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <div style={{"position: relative; z-index: -1"}}>

      <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      </div> */}
      {/* <div className='m-3 d-flex flex-row' > */}
      <div className='container'>
        {
          // foodCategir/
          // foodCategory!=[]
          // foodCategory!=[]?
          // foodC
          // f/
          // foodCategory!==[]
          // ?foodCategory.map()
          // foodCategory !== []
          // foodCategory.length/
          foodCategory.length > 0
            // foodCategory !== []
            ? foodCategory.map((data) => {
              return (
                // <div>Hello World</div>
                // <div/
                // <div>{data.CategoryName}</div>
                // <div></div/
                // <div>{data}</div>
                // <div></div
                // <div/
                // <div>data.Categi/</div>
                // <div></div/
                // <//
                // <div>{data.Cateogry</div>
                // <div>{data.CategoryName}</div>/
                // <div>{data.CategoryName}</div>
                // <div>{}</div>
                // <div>{data.}</div>/
                <div className="row mb-3">
                  <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                  <hr />
                  {/* {fooditem.length > 0 ? fooditem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))) */}
                  {fooditem.length > 0 ? fooditem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                          <Card
                            // foodIrems
                            // foodItem//
                            // foodItem={filterItems}
                            foodItem={filterItems}
                            // options={filterItems.options}
                            options={filterItems.options[0]}
                          /*foodName={filterItems.name}
                          options={filterItems.options[0]}
                          imgSrc={filterItems.img}*/
                          ></Card>
                        </div>
                      )
                    }) : <div>No such data found</div>}
                </div>


              )
            })
            // : <div>""""""""</div>
            // :<div>
            : <div>"No data to retrieve""</div>
        }
        {/* <Card /> */}

      </div>
      <div><Footer /></div>
    </div>
  );
}
//react js mein intia;=
//react js mein initial value batani padegi ya to appko ternery operation ya koi bhi chij ka use krna padega because jo return function hai wo fucntoin basec components sabse pahele render karta hai