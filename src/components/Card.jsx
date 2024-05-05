import React from "react";
import "./Card.css";
import VA1 from "../assets/v-img/6.webp";
import VA2 from "../assets/v-img/9.jpg";
import VA3 from "../assets/v-img/7.webp";
import VA4 from "../assets/v-img/8.jpg";

const CreateCard = () => {
  return (
    // <div>Card</div>

    <>
      <div className="container">
        <div className="menu-box">
          <ul>
            <li>
              <a href="home.html">Home</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="phnomPhenh.html">Phnom Penh</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Battambang</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Siem Reap</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Kam Pot</a>
            </li>
          </ul>
        </div>
        <div className="head-box">
          <h1>Battambang</h1>
          <p>
            {" "}
            Battambang is a city on the Sangkae River in northwestern Cambodia.
            It’s known for colonial buildings such as Sala Khaet, the former
            Governor’s Residence.{" "}
          </p>
        </div>
        <div className="item-box">
          <div className="img-box">
            <a href="https://flower-blooming.vercel.app/" target="_blank">
              <img src={VA2} alt="VA2" />
            </a>
          </div>
          <div className="text-box">
            <h1>banan temple</h1>
            <p>
              Wat Banan is the best-preserved of the Khmer temples in Battambang
              Province. The distinctive five towers of the temple are similar to
              the much larger and more famous temple of Angkor Wat.
            </p>
            <a
              target="_blank"
              href="https://helloangkor.com/attractions/phnom-banan-pr/"
              class="btn-more"
            >
              More
            </a>
          </div>
        </div>
        <div className="item-box">
          <div className="img-box">
            <img src={VA1} alt="VA1" />
          </div>
          <div className="text-box">
            <h1>AEON Mall 3 </h1>
            <p>
              The 3rd AEON mall is located along Samdech Techo Hun Sen boulevard
              within Meanchey district’s Chak Angre Krom commune. It set to be
              the largest mall in Phnom Penh, reported being 174,000 sqm in
              size.
            </p>
            <a href="" className="btn-more">
              More
            </a>
          </div>
        </div>
        <div className="item-box">
          <div className="img-box">
            <img src={VA3} alt="VA3" />
          </div>
          <div className="text-box">
            <h1>Morodok Techo National Sports Complex</h1>
            <p>
              The Morodok Techo National Sports Complex is a sports complex
              under construction in Phnom Penh, Cambodia which is set to host
              the 2023 Southeast Asian Games.
            </p>
            <a
              target="_blank"
              href="https://www.mtn-stadium.com.kh/#slide2"
              className="btn-more"
            >
              More
            </a>
          </div>
        </div>
        <div className="item-box">
          <div className="img-box">
            <img src={VA4} alt="VA4" />
          </div>
          <div className="text-box">
            <h1>Royal Palace</h1>
            <p>
              The Royal Palace of Cambodia is a complex of buildings which
              serves as the royal residence of the King of Cambodia.{" "}
            </p>
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Royal_Palace_of_Cambodia"
              className="btn-more"
            >
              More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCard;
