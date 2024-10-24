import React from "react";

const Categories = () => {
  const categories = [
    {
      name: "Scrunchies",
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", // Update with correct image path
    },
    {
      name: "Earrings",
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", // Update with correct image path
    },
    {
      name: "Candles",
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", // Update with correct image path
    },
    {
      name: "Pendants",
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", // Update with correct image path
    },
  ];

  return (
    <div className="text-center py-6">
      <h2 className="text-4xl font-bold my-6 text-black">All Categories</h2>
      <div className="w-11/12 m-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md overflow-hidden"
          >
            <figure>
              <img
                src={category.imgSrc}
                alt={category.name}
                className="w-full h-56 object-cover"
              />
            </figure>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
