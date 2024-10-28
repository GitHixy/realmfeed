import React from "react";
import NewsFeed from "./components/NewsFeed";
import GiveawayList from "./components/GiveawayList";

function App() {
  return (
    <div className="bg-darkBg min-h-screen text-secondaryText">
      <header className="p-4 bg-darkCard border-b-4 border-accent text-center">
        <h1 className="text-4xl font-bold text-accent">RealmFeed</h1>
        <p className="text-lg text-secondaryText">Your portal to MMO news and giveaways</p>
      </header>
      <main className="container mx-auto p-4">
        <GiveawayList />
        <NewsFeed />
      </main>
    </div>
  );
}

export default App;
