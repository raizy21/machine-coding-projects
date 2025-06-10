import { useState, useEffect } from "react"; // uawseState and useEffect hooks from React

const LazyLoadComponent = () => {
  const [images, setImages] = useState([]); // state to hold images
  const [isLoading, setIsLoading] = useState(true); // state to manage loading state

  useEffect(() => {
    // fetch 50 images from lorem picsum api
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=1&limit=50"
        );
        const data = await response.json();
        setImages(data);
        setIsLoading(false);
      } catch (error) {
        console.error("error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="image-container">
      {isLoading ? (
        <p>loading images...</p>
      ) : (
        images.map((image) => (
          <img
            key={image.id}
            src={`https://picsum.photos/id/${image.id}/300/200`}
            alt={image.author}
            className="lazy-image"
          />
        ))
      )}
    </div>
  );
};

export default LazyLoadComponent;
