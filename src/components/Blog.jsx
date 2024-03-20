import React from "react";
import styled from "styled-components";

let BlogsData = [
  {
    image:
      "https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    category: "TECHNOLOGY",
    description:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    avatare:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    user: "Mario Senchez",
    date: "October 21,2024",
  },
  {
    image:
      "https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F12301f301772ed723724302aef7c70c5c1c0151f-4500x8000.jpg%3Frect%3D0%2C1080%2C4500%2C5330%26w%3D2000%26auto%3Dformat&w=640&q=75",
    category: "TECHNOLOGY",
    description:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    avatare:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    user: "Mario Senchez",
    date: "October 21,2024",
  },
  {
    image:
      "https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75",
    category: "TECHNOLOGY",
    description:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    avatare:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    user: "Mario Senchez",
    date: "October 21,2024",
  },
  {
    image:
      "https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75",
    category: "TECHNOLOGY",
    description:
      "Architectural Engineering Wonders of the modern era for your Inspiration",
    avatare:
      "https://stablo.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fa5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75",
    user: "Mario Senchez",
    date: "October 21,2024",
  },
];

const Blog = () => {
  return (
    <DIV className="grid grid-template-rows: repeat(4, minmax(0, 1fr)) w-full m-auto">
      <div class="grid_outer mt-20">
        {BlogsData &&
          BlogsData.map((item) => {
            return (
              <div className="border-2 rounded-lg w-[400px] h-full inner_blog">
                <img
                  className="rounded-md image_main"
                
                  src={item.image}
                  alt={item.user}

                />
                <div className="w-full p-2">
                  <span className="text-blue-600 mt-10">{item.category}</span>
                  <h4>{item.description}...</h4>
                  <div className="flex -space-x-1 overflow-hidden mt-2  justify-between">
                    <img
                      className="inline-block h-6 w-6 rounded-full bg-cover "
                      src={item.avatare}
                      alt=""
                    />
                    <label className="opacity-70">{item.user}</label>
                    <label className="opacity-70">{item.date}</label>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </DIV>
  );
};

export default Blog;

const DIV = styled.div`
  .grid_outer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 10px;
    margin: auto;
    margin-top: 80px;
    justify-content: space-between;
  
    width: 90%;
    gap: 10px;
    padding-left: 40px;
    box-sizing: border-box;
  }
  .image_main {
  width: 100%; /* Set the width to 100% to make the image responsive */
  height: 270px; /* Set a fixed height for the images */
  object-fit: cover; /* Maintain aspect ratio while covering the container */
}

  .image_main:hover {
    transition: all ease-in-out 0.5s;
    cursor: pointer;
  }
  img {
    box-shadow: rgba(0, 0, 0, 0.45) 0px 20px 10px -20px;

}
  img:hover {
  scale: 1.02;
  transition: all ease-in .3s;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 15px 15px;

}






  @media only screen and (max-width: 499px) {
    .grid_outer {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
     
      width: 100%;
     padding-left: 10px;
    }
    .inner_blog{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
width: 100%;
height:fit-content;
justify-content: center;

    }
  }

  /* Mobile Devices (portrait and landscape) */
  @media only screen and (min-width: 500px) and (max-width: 768px) {
    .grid_outer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
     
      width: 100%;
     padding-left: 10px;
    }
    .inner_blog{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
width: 100%;
height:fit-content;
justify-content: center;

    }
  }

  /* Tablet Devices */
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    .grid_outer {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
     
      width: 100%;
     padding-left: 10px;
    }
    .inner_blog{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
width: 100%;
height:fit-content;
justify-content: center;

    }
  }
  @media only screen and (min-width: 1025px) and (max-width: 1299px) {
    .grid_outer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
     
      width: 100%;
     padding-left: 10px;
    }
    .inner_blog{
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
width: 100%;
height:fit-content;
justify-content: center;

    }
  }
`;
