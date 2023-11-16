// Load More function for dynamic jsx.

import React, { useState } from 'react';

const LoadMore2 = () => {

  const [itemsToShow, setItemsToShow] = useState(5); // Initial number of items to show
  const totalItems = 20; // Total number of items you have

  const loadMore = () => {
    setItemsToShow(itemsToShow + 5); // Increase the number of items to display
  };

    // Simulated array of items, replace this with your actual data fetching logic
    const items = Array.from({ length: totalItems }, (_, index) => `Item ${index + 1}`);

    return (
    <div>
      {items.slice(0, itemsToShow).map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {itemsToShow < totalItems && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
    );
};

export default LoadMore2;