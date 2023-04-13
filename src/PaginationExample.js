import { useState } from "react";

const dummyData = [
  {
    id: 1,
    title: "Item 1",
    description: "Description of item 1",
  },
  {
    id: 2,
    title: "Item 2",
    description: "Description of item 2",
  },
  {
    id: 3,
    title: "Item 3",
    description: "Description of item 3",
  },
  {
    id: 4,
    title: "Item 4",
    description: "Description of item 4",
  },
  
];

const ITEMS_PER_PAGE = 3;

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = dummyData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(dummyData.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {paginatedData.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginationExample;
