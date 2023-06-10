'use client';
import { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchQueryState } from '@/app/store/atoms';

export const Search = () => {
  const [_, setQuery] = useRecoilState(searchQueryState);
  const [value, setValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    setQuery(inputValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <form className="w-full">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-[color:var(--redPrimary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          data-testid="default-search"
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm rounded-lg bg-[color:var(--greySecondary)] focus:border-[color:var(--greySecondary)] ring-black"
          placeholder="Search..."
          required
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </form>
  );
};
