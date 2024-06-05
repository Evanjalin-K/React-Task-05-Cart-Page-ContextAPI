import React, { useContext, useState, createContext } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [description, setDescription] = useState({
    products: [
      {
        id: 1,
        title: "iPhone 13 Pro Max",
        subtitle: "Super Retina XDR display 17.00 cm / 6.7″ (diagonal) all‑screen OLED display 2 796x1290-pixel resolution at 460 ppi",
        description: "The iPhone 13 Pro Max display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.68 inches diagonally (actual viewable area is less).",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: "https://i0.wp.com/cellbuddy.in/buddy/wp-content/uploads/2022/09/13-Pro-green.png?fit=800%2C800&ssl=1"
      },
      {
        id: 2,
        title: "iPhone 15 Plus",
        description: "The iPhone 15 Plus display has rounded corners that follows a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 17.00 cm (6.69″) diagonally (actual viewable area is less).Both models",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Plus_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694607139&width=823"
    },
      
    ]
  });

  return (
    <CardContext.Provider value={{ description, setDescription }}>
      {children}
    </CardContext.Provider>
  );
};

export const useDes = () => useContext(CardContext);
