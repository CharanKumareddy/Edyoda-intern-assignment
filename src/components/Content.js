import { Component} from 'react';
import {GoBook} from "react-icons/go";
import {TbClockHour4} from "react-icons/tb";
import {MdLiveTv, MdNoAccounts} from "react-icons/md";
import {FaGraduationCap} from "react-icons/fa";
import Hero from "../img/Rozorpay-img.png";

class Content extends Component {
  render() {
    return (
      <div className="header">
        <div className="bg-color">
          <h1 className="heading">Access curated courses worth <span className="strike"> $ 18500</span> at just <span>$ 99</span> per year!</h1>
          <div className="flexContainer">
            <div className="logos">
              <p><GoBook /></p>
              <p><TbClockHour4 /></p>
              <p><MdLiveTv /></p>
              <p><FaGraduationCap /></p>
              <p><MdNoAccounts /></p>
            </div>
            <div className="content">
              <p><span>100+</span> job relevent courses</p>
              <p><span>20,000+</span> Hours of content</p>
              <p><span>Exclusive</span> webinar access</p>
              <p>Scolarship worth <span>$94,500</span></p>
              <p><span>Add free</span> learning experience</p>
            </div>
          </div>
        </div>
        <div className="card ">
          <p className='offer'>Offer expired</p>
            <div class="d-flex bg-s bg-body-secondary border border-secondary text-secondary fw-bold align-items-center justify-content-between rounded">          
              <input type="radio" />12 months subscription
              <div className="pad">Total $99</div>
            </div>
            <p className='recomended'>Recomended</p>
            <div class="d-flex mb-2 bg-s border border-secondary  fw-bold align-items-center justify-content-between rounded">
              <input type="radio" />12 months subscription
              <div className="pad">Total $179</div>
            </div>
            <div class="d-flex mb-2 bg-ss fw-bold border border-secondary align-items-center justify-content-between rounded">
              <input type="radio" />6 months subscription
              <div className="pad">Total $149</div>
            </div>
            <div class="d-flex bg-ss fw-bold border border-secondary align-items-center justify-content-between rounded">
              <input type="radio" />3 months subscription
              <div className="pad">Total $99</div>          
            </div>
            <span class=" border border-1 border-top mt-3 "></span>
            <div class="d-flex flex-row mb-2 bg-ss align-items-center justify-content-around">
              <div class="p-2">subscription fees</div>
              <div class="p-2">$18,500</div>
            </div>
            <div class="d-flex pos bg-dange bg-ss fw-bold bodder justify-content-around rounded">
              <div className="txt">
                <p>6 months subscription</p>
                <p className='padd'>offer valid till 25th march 2023</p>
              </div>
              <div >
                <p>Total $149</p>
              </div>
            </div>
            <div class="d-flex mb-2 bg-ss fw-bold align-items-center justify-content-around rounded">
              <div>Total<span className='text-secondary'>(include. of 18% GST)</span></div>
              <div className="pad">$149</div>
            </div>
            <div className='d-flex align-items-center justify-content-around'>
            <button type="button" class="btn btn-outline-danger">Large button</button>
            <button type="button" class="btn btn-success">Large button</button>
            </div>
            <img className="img" src={Hero} alt='payment logo'/>
        </div>
        
      </div>
    )
  }
}

export default Content;