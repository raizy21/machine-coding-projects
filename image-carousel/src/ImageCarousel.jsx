import { useState, useEffect } from "react"; // importing React hooks for state and effect management

const ImageCarousel = () => {
  const [images, setImages] = useState([]); // state to hold the images fetched from reddit
  const [index, setIndex] = useState(0); // state to hold the current index of the image being displayed

  const ApiCall = async () => {
    try {
      let response = await fetch(
        "https://www.reddit.com/r/aww/top/.json?t=all"
      ); // fetching top posts from the 'aww' subreddit in JSON format
      let data = await response.json(); // parsing the response data to JSON format
      const imagesData = data.data.children
        .map((child) => child.data.url)
        .filter((url) => url.endsWith(".jpg")); // filter to include only .jpg URLs
      setImages(imagesData); // updating the images state with the filtered image URLs
      console.log(imagesData); // logging the images data to console for debugging
    } catch (error) {
      // error handling for the fetch request
      console.error("error fetching data: ", error);
    }
  };

  useEffect(() => {
    ApiCall(); // calling the ApiCall function to fetch images when the component mounts

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // setting up an interval to change the image every 3 seconds

    // clean up interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length); // function to handle the next button click, incrementing the index and wrapping around if it exceeds the length of images
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // function to handle the previous button click, decrementing the index and wrapping around if it goes below zero
  };

  return (
    <>
      {images.length > 0 ? (
        <div className="image-carousel">
          <button className="carousel-button left" onClick={handlePrev}>
            {"<"}
          </button>
          <img
            className="img"
            src={images[index]}
            alt={`carousel image ${index + 1}`}
          />
          <button className="carousel-button right" onClick={handleNext}>
            {">"}
          </button>
        </div>
      ) : (
        <p>loading images...</p>
      )}
    </>
  );
};

export default ImageCarousel;
