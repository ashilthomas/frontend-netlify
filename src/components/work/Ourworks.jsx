import React from 'react'
import './work.css'
import { Button } from 'react-bootstrap'
function Ourworks() {
  return (
    <div>
      <div className="work-heading">
        <h2>Our Works</h2>
        <div className="work-underline"></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
      </div>

      <div className="work-section">
        <div class="container-section">
          <img
            src="https://images.pexels.com/photos/2127021/pexels-photo-2127021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div class="overlay">
            <p style={{ paddingTop: "20px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              obcaecati consequatur libero id, facere temporibus doloribus
              placeat amet ab numquam eligendi dolor commodi esse laboriosam
              pariatur voluptate enim dolores explicabo.
            </p>
            <Button variant="outline-light">see more</Button>{" "}
          </div>
        </div>
        <div class="container-section">
          <img
            src="https://images.pexels.com/photos/19252637/pexels-photo-19252637/free-photo-of-a-vitnage-vaz-2101-car-on-the-street-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div class="overlay">
            {" "}
            <p style={{ paddingTop: "20px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              obcaecati consequatur libero id, facere temporibus doloribus
              placeat amet ab numquam eligendi dolor commodi esse laboriosam
              pariatur voluptate enim dolores explicabo.
            </p>
            <Button variant="outline-light">see more</Button>
          </div>
        </div>
        <div class="container-section">
          <img
            src="https://media.istockphoto.com/id/1197764193/photo/parked-vintage-classic-green-car.jpg?s=1024x1024&w=is&k=20&c=-lKrUeKlvjwVQEkzZgYNrbnMooL1xC8gSGep9Lughy8="
            alt=""
          />
          <div class="overlay">
            {" "}
            <p style={{ paddingTop: "20px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              obcaecati consequatur libero id, facere temporibus doloribus
              placeat amet ab numquam eligendi dolor commodi esse laboriosam
              pariatur voluptate enim dolores explicabo.
            </p>
            <Button variant="outline-light">see more</Button>
          </div>
        </div>
      </div>
      <div className="work-section-two">
        <div class="container-section">
          <img
            src="https://media.istockphoto.com/id/178368412/photo/retro-car-peugeot.jpg?s=1024x1024&w=is&k=20&c=-od6qQqiw-otJIMICm7-Q-JFc5vStHJSAxHB9GAEveI="
            alt=""
          />
          <div class="overlay">
            {" "}
            <p style={{ paddingTop: "20px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              obcaecati consequatur libero id, facere temporibus doloribus
              placeat amet ab numquam eligendi dolor commodi esse laboriosam
              pariatur voluptate enim dolores explicabo.
            </p>
            <Button variant="outline-light">see more</Button>
          </div>
        </div>
        <div class="container-section">
          <img
            src="https://media.istockphoto.com/id/485602690/photo/beautiful-classic-retro-vintage-car.jpg?s=1024x1024&w=is&k=20&c=c30diBvq7DQuVw3jTv_BP67Nn-aI82GBmlnUeuk93so="
            alt=""
          />
          <div class="overlay">
            {" "}
            <p style={{ paddingTop: "20px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              obcaecati consequatur libero id, facere temporibus doloribus
              placeat amet ab numquam eligendi dolor commodi esse laboriosam
              pariatur voluptate enim dolores explicabo.
            </p>
            <Button variant="outline-light">see more</Button>
          </div>
        </div>
        <div class="container-section">
          <img
            src="https://images.pexels.com/photos/2127014/pexels-photo-2127014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div class="overlay">
            {" "}
            <p style={{ paddingTop: "20px" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
              obcaecati consequatur libero id, facere temporibus doloribus
              placeat amet ab numquam eligendi dolor commodi esse laboriosam
              pariatur voluptate enim dolores explicabo.
            </p>
            <Button variant="outline-light">see more</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ourworks