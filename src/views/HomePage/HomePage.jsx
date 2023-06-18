import React from "react";

import { Carousel, Button } from "react-bootstrap";

export default function HomePage() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://hips.hearstapps.com/hmg-prod/images/elle-ukraine-personal-essay-image02-1647286165.jpg"
            alt="Welcome to the Ukrainian phonebook"
          />
          <Carousel.Caption>
            <Button variant="primary btn-block" type="button">
              Try now!
            </Button>
            <h3>Welcome to the Ukrainian phonebook</h3>
            <p>Let us always remain patriots, we will win! </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.bakermckenzie.com/-/media/images/locations/ukraine/ukraine-headline-module1440x788.jpg?sc_lang=en"
            alt="Second slide"
          />

          <Carousel.Caption>
            <Button variant="primary btn-block" type="button">
              Try now!
            </Button>
            <h3>Use patriotic! Be in trend!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://image.cnbcfm.com/api/v1/image/107020327-1645730797250-gettyimages-1238730903-20220224demo18.jpeg?v=1645730840&w=929&h=523"
            alt="Third slide"
          />

          <Carousel.Caption>
            <Button variant="primary btn-block" type="button">
              Try now!
            </Button>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
