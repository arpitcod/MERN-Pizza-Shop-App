import React from "react";


const AboutUs = () => {
  return (
    <>
      <div className="container">
        <div className="container-fluid card mb-3">
          <img
            //   src="https://tse4.mm.bing.net/th?id=OIP.rzAnsANyZr-lTXpNC1XqswHaD4&pid=Api&P=0&h=220"
            src="https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="card-img-top"
            alt="..."
            //   style={{ height: "300px", width:"600px"}}
          />
          <div className="card-body">
            <h2 className="card-title text-center">About Us</h2>
            <p className="card-text text-center">
              Welcome to Pizza Delight, where we believe in the perfect blend of
              tradition and innovation. Founded with a passion for creating
              mouth-watering pizzas, we strive to deliver an unforgettable
              dining experience right to your doorstep.
            </p>
            <h2 className="card-title text-center">Our Story</h2>
            <p className="card-text text-center">
              At Pizza Delight, our journey began with a simple idea: to craft
              pizzas that bring joy to every bite. Our founders, a group of
              pizza enthusiasts, embarked on a mission to combine the finest
              ingredients, time-honored recipes, and cutting-edge technology.
              The result? A pizza that not only tastes amazing but also connects
              people through a shared love for great food.
            </p>
          </div>
        </div>

{/* second ................................................................................................................. */}
        <div className="card-group row row-cols-1 row-cols-md-2 g-3">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/22485424/pexels-photo-22485424/free-photo-of-pizza-served-on-wooden-tray.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title text-center">Quality Ingredients</h3>
              <p className="card-text text-center">
                We source the freshest and highest-quality ingredients to ensure
                every pizza is a masterpiece. From our hand-tossed dough to our
                signature sauces and premium toppings, each element is carefully
                selected to deliver exceptional taste.
              </p>
              
            </div>
          </div>
          <div className="card">
            <img
              src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title text-center">Innovative Recipes</h3>
              <p className="card-text text-center">
                While we honor traditional pizza-making methods, we also embrace
                creativity. Our menu features a variety of unique and exciting
                flavors, catering to both classic pizza lovers and adventurous
                foodies.
              </p>
             
            </div>
          </div>
          <div className="card">
            <img
              src="https://images.pexels.com/photos/9543813/pexels-photo-9543813.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title text-center">Customer Satisfaction</h3>
              <p className="card-text text-center">
                Your satisfaction is our top priority. Whether you’re dining in,
                taking out, or ordering delivery, we are dedicated to providing
                you with a delightful experience. Our user-friendly app makes it
                easy to customize your order, track your delivery, and enjoy
                exclusive deals.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
