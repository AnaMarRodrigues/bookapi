//order by : relevance or newest

function Filters({ onFilterChange }) {
  const filterOptions = [
    { name: "Relevance", value: "relevance" },
    { name: "Newest", value: "newest" },
  ];

  const handleFilterChange = (value) => {
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  return (
    <div className="filter">
      <h1>Order by:</h1>
      <ul className="list-group">
        {filterOptions.map((option) => (
          <li key={option.value}>
            <button onClick={() => handleFilterChange(option.value)}>
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filters;
