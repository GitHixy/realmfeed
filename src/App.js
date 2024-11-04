import React, {useRef} from "react";
import Header from "./components/Header";
import LatestReleases from "./components/LatestReleases";
import NewsFeed from "./components/NewsFeed";
import GiveawayList from "./components/GiveawayList";
import Footer from "./components/Footer";


function App() {


  const newsRef = useRef(null);
  const giveawaysRef = useRef(null);
  const latestReleasesRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="app-background min-h-screen text-secondaryText flex flex-col">
      <Header
        scrollToSection={scrollToSection}
        refs={{ newsRef, giveawaysRef, latestReleasesRef }}
      />
      <main className="container mx-auto p-4">

        <section ref={newsRef}>
          <NewsFeed />
        </section>
        <section ref={giveawaysRef}>
          <GiveawayList />
        </section>
        <section ref={latestReleasesRef}>
          <LatestReleases />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
