import React, { useEffect, useState } from "react";
import { fetchGiveaways } from "../services/mmoBombApi";

function GiveawayList() {
  const [giveaways, setGiveaways] = useState([]);

  useEffect(() => {
    const loadGiveaways = async () => {
      const data = await fetchGiveaways();
      setGiveaways(data);
    };
    loadGiveaways();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-accent">Active Giveaways</h2>
      {giveaways.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {giveaways.map((item) => (
            <div key={item.id} className="bg-darkCard shadow-md rounded-lg overflow-hidden border border-borderDark flex flex-col">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-secondaryText">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-2">Keys Left: {item.keys_left}</p>
                <p className="text-gray-300 mb-4 flex-grow">To partecipate just click 'Claim Giveaway' and follow instructions on the MMOBomb Website!</p>
                <a
                  href={item.giveaway_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium mt-auto"
                >
                  Claim Giveaway
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading giveaways...</p>
      )}
    </div>
  );
}

export default GiveawayList;
