import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/mmoBombApi";

function NewsFeed() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const data = await fetchNews();
      setNews(data.slice(0, 6));
    };
    loadNews();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-accent">Latest MMO News</h2>
      {news.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-darkCard shadow-md rounded-lg overflow-hidden border border-borderDark flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-secondaryText">{item.title}</h3>
                {item.release_date && (
                  <p className="text-gray-400 text-sm mb-2">
                    Released on: {new Date(item.release_date).toLocaleDateString()}
                  </p>
                )}
                <p className="text-gray-300 mb-4 flex-grow">{item.short_description}</p>
                <a
                  href={item.article_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium mt-auto"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading news...</p>
      )}
    </div>
  );
}

export default NewsFeed;


