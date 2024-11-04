import React, { useEffect, useState } from 'react';
import { fetchLatestMMOs } from '../services/mmoBombApi';

const LatestReleases = () => {
  const [latestGames, setLatestGames] = useState([]);

  useEffect(() => {
    const loadLatestGames = async () => {
      const data = await fetchLatestMMOs();
      setLatestGames(data.slice(0, 6));
    };
    loadLatestGames();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-accent">Latest MMO Releases</h2>
      {latestGames.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestGames.map((game) => (
            <div
              key={game.id}
              className="bg-darkCard shadow-md rounded-lg overflow-hidden border border-borderDark flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={game.main_image}
                alt={game.title}
                className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-secondaryText">{game.title}</h3>
                <p className="text-gray-400 text-sm mb-1">Genre: {game.genre}</p>
                <p className="text-gray-400 text-sm mb-1">Platform: {game.platform}</p>
                <p className="text-gray-400 text-sm mb-1">
                  Release Date: {new Date(game.release_date).toLocaleDateString()}
                </p>
                <p className="text-gray-300 mb-4">{game.short_description}</p>
                <a
                  href={game.game_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium mt-auto"
                >
                  View Game
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading latest releases...</p>
      )}
    </div>
  );
};

export default LatestReleases;
