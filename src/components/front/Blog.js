import React from 'react'
import "./Banner.css"
import logo1 from "./life-1.jpg";
import logo2 from "./life-2.jpg";
import logo3 from "./life-3.jpg";
const Blog = () => {
  return (
    <div>
    <h1 id="Blog"className="blog-tit">Blog</h1>
      <section className="blog">
        <div className="blog1">
            <img src={logo1} alt="none"/>
            <h5>Lorem ipsum dolor sit, amet  consectetur  elit <br/><span style={{"color":"grey"}}>15 jan 2015</span></h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing  <br/> Voluptatibus eaque cumque optio vero volupta ut.</p>
            <button className="btn-1"type="button">Read More</button>
        </div>
        <div className="blog1">
            <img src={logo2} alt=""/>
            <h5>Lorem ipsum dolor sit, amet <br/>  consectetur  elit <br/><span style={{"color":"grey"}}>15 jan 2015</span></h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing  <br/> Voluptatibus eaque cumque optio vero volupta ut.</p>
            <button className="btn-1"type="button">Read More</button>
        </div>
        <div className="blog1">
            <img src={logo3} alt=""/>
            <h5>Lorem ipsum dolor sit, amet <br/>  consectetur  elit <br/><span style={{"color":"grey"}}>15 jan 2015</span></h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing  <br/> Voluptatibus eaque cumque optio vero volupta ut.</p>
            <button className="btn-1"type="button">Read More</button>
        </div>
        </section>
    </div>
  )
}

export default Blog
