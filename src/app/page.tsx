import { Suspense } from 'react';
import { Search } from './components/Search';
import { TopAlbums } from './components/TopAlbums';
import { Itunes } from './types/itunes';
import { Spinner } from './components/Spinner';

export default async function Home() {
  const data = await getItunesData();
  return (
    <main>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-5  ">
          <h1 className="my-36 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
            iTunes Store Top Albums
          </h1>
          <Search />
          <Suspense fallback={<Spinner />}>
            <TopAlbums data={data} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

/**
 * Fetches data from iTunes API.
 * @returns The fetched iTunes data.
 */
async function getItunesData(): Promise<Itunes> {
  const res = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');

  if (!res.ok) {
    throw new Error('Failed to fetch data from iTunes API');
  }
  return res.json();
}
