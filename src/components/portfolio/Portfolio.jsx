import React from 'react'
import './portfolio.css'
import line1 from '../../assets/portfolio_line.PNG'
import line2 from '../../assets/portfolio_line-2.PNG'
import videoSystem1 from '../../assets/system1.png'
import videoSystem2 from '../../assets/system2.png'
import orderFood1 from '../../assets/OrderFood.png'
import orderFood2 from '../../assets/OrderFood2.png'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Last Works/Projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__items'>
          <h3>Order Food (In progress)</h3>
          <div className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={orderFood1 } alt="Line1" />
              <img src={orderFood2} alt="Line2" />
            </div>
            <br />
            <p>A web application for ordering food to assist in managing food ordering and serving using NextJS for frontend development and NestJs for creating APIs with a MySQL database.</p>
          </div>
        </article>
        <article className='portfolio__items'>
          <h3>FULL-LINEBOT-PROGRAM</h3>
          <div className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={line1} alt="Line1" />
              <img src={line2} alt="Line2" />
            </div>
            <br />
            <p>Design and develop a Line Bot system using Node.js that syncs data with a MySQL server and displays data collection in the form of a website developed with EJS, which is used for web development in Node.js.</p>
            <br />
            <p>The principle of operation is that users must select a menu to perform various errands in the Line app, which will display information on the web. The system is able to collect and display data. An API system is also implemented to send data to the company's main software for collection.</p>
          </div>
        </article>
        <article className='portfolio__items'>
          <h3>SYSTEM LIVE STREAM VIDEO</h3>
          <div className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={videoSystem1} alt="Video" />
              <img src={videoSystem2} alt="Video" />
            </div>
            <br />
            <p>The system can assist with driving on the road by using an application that works on Android. </p>
            <br />
            <p>The principle of operation of the application is to display live video from an IP camera connected to the same network as the user's device.</p>
            <br/>
            <p> The application is designed to be easy to use while driving, with main functions such as notification alerts, wifi search, automatic wifi connection when within range of the wifi and auto show live video.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio