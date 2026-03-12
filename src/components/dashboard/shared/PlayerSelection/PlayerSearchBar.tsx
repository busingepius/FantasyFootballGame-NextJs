'use client';

import { useState } from 'react';

type PlayerSearchBarProps = {
  onSearch: (query: string) => void;
};

export const PlayerSearchBar = ({ onSearch }: PlayerSearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); // pass search term to parent
  };

  return (
    <div className="w-full max-w-md">

      <input
        id="player-search"
        type="text"
        placeholder="Search for player..."
        value={query}
        onChange={handleChange}
        className="w-full bg-white text-secondary px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-main focus:outline-none"
      />
    </div>
  );
};
