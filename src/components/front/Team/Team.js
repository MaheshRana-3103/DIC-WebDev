import React from 'react'
import "./Team.css"
import t1 from "./pic-1.jpg";
import t2 from "./pic-4.jpg";
import t3 from "./pic-5.jpg";
import t4 from "./pic-3.jpg";
import t5 from "./Gojo.jpg";
const Team = () => {
  return (
    <div>
    <h1 id="Team"class="team-tit">Zippy Team</h1>
    <section class="Team">
        <div class="team-container">
            <div class="team">
                <img src={t4} alt=""/>
                <h5>SARA JOHNSON</h5>
                <p>Creative Head</p>
                <div class="i">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                </div>
            </div>
            <div class="team">
                <img src={t3} alt=""/>
                <h5>MATT ALEX</h5>
                <p>Art Director</p>
                <div class="i">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                </div>
            </div>
            <div class="team">
                <img src={t1} alt=""/>
                <h5>CHRIS PHILLIPS</h5>
                <p>Senior Designer</p>
                <div class="i">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                </div>
            </div>
        </div>
        <br/><br/>
        <div class="team-container">
            <div class="team">
                <img src={t2} alt=""/>
                <h5>JIMMY SMITH</h5>
                <p>MArketing Manager</p>
                <div class="i">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                </div>
            </div>
            <div class="team">
                <img src={t3} alt=""/>
                <h5>ALEX</h5>
                <p>Seo Monster</p>
                <div class="i">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                </div>
            </div>
            <div class="team">
                <img src={t5} alt=""/>
                <h5>Gojo Satarou</h5>
                <p>Senior Designer</p>
                <div class="i">
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-linkedin"></i>
                    <i class="fa fa-twitter"></i>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Team
