import React from "react";
import "./gallery.css";


const imageUrls = [
  "https://i.pinimg.com/736x/16/b0/cd/16b0cd0f8874208f17d9c2e5c9e8f29f.jpg",
  "https://i.pinimg.com/736x/a1/3e/c6/a13ec63c208ba3a5155e367112c45561.jpg",
  "https://i.pinimg.com/736x/26/de/df/26dedfdaa1d20c37e86c5fe2c504baa0.jpg",
  "https://i.pinimg.com/736x/7f/23/b2/7f23b2b766464fecaa4219972e008175.jpg",
  "https://i.pinimg.com/736x/32/fb/97/32fb979f806db4297d9f9451f1416fcc.jpg",
  "https://i.pinimg.com/736x/18/a2/39/18a239bd8d325bcd4d2b4d01d84dbd6a.jpg",
  "https://i.pinimg.com/736x/a7/2e/35/a72e35766afb69912f16b82fa7f736b5.jpg",
  "https://i.pinimg.com/736x/f7/8a/7e/f78a7e93caf84d828e7fb11580aeb997.jpg",
  "https://i.pinimg.com/736x/67/f0/c8/67f0c84ef7ca684c3c9dd04df58ab29e.jpg",
  "https://i.pinimg.com/736x/cf/6c/69/cf6c69a0f2f4660d8b1ba8cb4e800cef.jpg",
  "https://i.pinimg.com/736x/a8/17/89/a81789841fb2a9a9473c7fa9d40fe837.jpg",
  "https://i.pinimg.com/736x/98/89/43/9889433dd8e92ae8e4a44e2e6461808f.jpg",
  "https://i.pinimg.com/736x/68/2c/5b/682c5b0a295a9705503791ab5ad1238c.jpg",
  "https://i.pinimg.com/736x/a6/1d/b8/a61db8eaa170072f1495e46ab950ff85.jpg",
  "https://i.pinimg.com/736x/35/b1/83/35b18361a3baf902a3772babe66f2c08.jpg",
  "https://i.pinimg.com/736x/cb/36/05/cb3605f9d6e0b7be75cfb26995bdc49a.jpg",
  "https://i.pinimg.com/736x/0a/68/a6/0a68a6474944cf8cdfcbb8c881f1a5a8.jpg",
  "https://i.pinimg.com/736x/00/8c/a6/008ca6a0c1635807154f6b056ddb7eca.jpg",
  "https://i.pinimg.com/736x/ae/97/f8/ae97f81606c219f63c1adf1ab04841d5.jpg",
  "https://i.pinimg.com/736x/a8/ee/78/a8ee7864cef61cd17552985d5d1db0aa.jpg",
  "https://i.pinimg.com/736x/90/ca/23/90ca231f4895952863065d1b10800c93.jpg",
  "https://i.pinimg.com/736x/dc/ec/0b/dcec0b1a9ed0903dd9033f982040df09.jpg",
  "https://i.pinimg.com/736x/92/49/ae/9249aeee045ecbfda558cd3e8dd54620.jpg",
  "https://i.pinimg.com/736x/1b/fd/45/1bfd4542bd2bc48bb18e503998a68ceb.jpg"
];

function Gallery() {
  
  return (
    <>
    <div id="galery-header-container">
      <h1>Fluffy gallery</h1>
    </div>
    <div className="g-container">
        {imageUrls.map((url, index) => (
          <div className="g-div">
            <img src={url} key={index} alt="catel" />
            <a href={url}>
            <i id="g-i" class="fa-solid fa-maximize fa-xl"></i>
            </a>
          </div>

      ))
      }
    </div>
    
    </>

  );
}

export default Gallery;
