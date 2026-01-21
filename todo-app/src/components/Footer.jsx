import React from 'react';


function Footer({ 
  activeCount, 
  currentFilter, 
  onFilterChange,
  onClearCompleted 
}) {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' }
  ];

  return (
    <div className="footer">
      <span className="counter">
        {activeCount} item{activeCount !== 1 ? 's' : ''} left
      </span>

      <div className="filters">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            className={`filter ${currentFilter === key ? 'active' : ''}`}
            onClick={() => onFilterChange(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <button 
        className="clear-completed"
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </div>
  );
}

export default Footer;