import React from "react";
import Slider from "react-slick"; // Slick carousel component for the slider

const reviews = [
  {
    id: 1,
    name: "John Doe",
    image: "./images/man.jpg",
    review: "Great product, very happy with my purchase! Highly recommend it.",
    rating: 5
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "./images/man1.jpg",
    review: "The quality of this item exceeded my expectations. Worth every penny.",
    rating: 5
  },
  {
    id: 3,
    name: "David Clark",
    image: "./images/man2.jpg",
    review: "Good product, but delivery was a bit slow. Overall, satisfied.",
    rating: 4
  },
  {
    id: 4,
    name: "Emily Johnson",
    image: "./images/women.jpg",
    review: "It didn't work as expected. Could be improved.",
    rating: 3
  },
  {
    id: 5,
    name: "Michael Lee",
    image: "./images/women1.jpg",
    review: "Excellent quality! Exactly what I needed. Great value for money.",
    rating: 5
  },
  {
    id: 6,
    name: "Sophia Brown",
    image: "./images/women2.jpg",
    review: "Not bad, but the item could be better in terms of functionality.",
    rating: 3
  },
  {
    id: 7,
    name: "Lucas Davis",
    image: "./images/man3.jpg",
    review: "Love it! The design is beautiful, and it works perfectly.",
    rating: 5
  },
  {
    id: 8,
    name: "Olivia Wilson",
    image: "./images/women3.jpg",
    review: "Good value for the price, but I had some issues with setup.",
    rating: 4
  },
  {
    id: 9,
    name: "James Harris",
    image: "./images/man4.jpg",
    review: "Really useful and practical product. Exactly as described.",
    rating: 5
  },
  {
    id: 10,
    name: "Isabella Martinez",
    image: "./images/women4.jpg",
    review: "Good product, but the color wasn't what I was expecting.",
    rating: 4
  }
];

const ReviewsSlider = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 100, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    cssEase: 'ease-in-out',  // Adds smooth transition
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, 
        }
      }
    ]
  };
  
  const renderStars = (rating) => {
    const filledStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(5 - rating);
    return filledStars + emptyStars;
  };

  return (
    <div id="reviews" className="max-w-5xl mx-auto p-20">
      <h2 className="text-3xl font-bold text-center mb-6">Customer Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div
            key={review.id}
            className="p-10 bg-gradient-to-br to-[#e0cca7] rounded-lg shadow-md flex justify-center items-center"
            style={{
              height: "300px", // Fixed height to create square slides
              width: "300px",  // Fixed width to create square slides
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-35 h-35 object-cover rounded-full mb-4"
                loading="lazy"
              />
              <h4 className="text-xl font-semibold text-center">{review.name}</h4>
              <div className="flex text-yellow-500 mb-2">
                <span className="text-lg">{renderStars(review.rating)}</span>
              </div>
              <p className="text-gray-600 text-center">{review.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsSlider;
