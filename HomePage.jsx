import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GameCard from "../../components/GameCard";
import { ExpandableBanner } from "../../components/Banner";
import { bannerData } from "../../components/Banner";
import { popularGames, newReleases } from "../../data/gameData";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />

      <main className="flex-grow">
        {/* Banner Slider */}
        <section className="mb-12">
          <ExpandableBanner banners={bannerData} />
        </section>

        {/* Popular Games */}
        <section className="container-custom mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Popular Games</h2>
            <a
              href="/games"
              className="text-blue-500 hover:text-blue-400 text-sm"
            >
              View All
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularGames.slice(0, 6).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* New Releases */}
        <section className="container-custom mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">New Releases</h2>
            <a
              href="/new-releases"
              className="text-blue-500 hover:text-blue-400 text-sm"
            >
              View All
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {newReleases.slice(0, 6).map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* Game Categories */}
        <section className="container-custom mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Game Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/category/action"
              className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Action</h3>
              <p className="text-gray-400 text-sm">
                Cyberpunk 2077, GTA V, Red Dead Redemption 2...
              </p>
            </a>

            <a
              href="/category/rpg"
              className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">RPG</h3>
              <p className="text-gray-400 text-sm">
                Elden Ring, Baldur's Gate 3, Dragon's Dogma 2...
              </p>
            </a>

            <a
              href="/category/sports"
              className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Sports</h3>
              <p className="text-gray-400 text-sm">
                EA FC 24, NBA 2K24, F1 24...
              </p>
            </a>

            <a
              href="/category/shooter"
              className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Shooter</h3>
              <p className="text-gray-400 text-sm">
                Call of Duty, Counter-Strike 2, Helldivers 2...
              </p>
            </a>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gray-800 py-12 mb-12">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Register to receive exclusive offers
              </h2>
              <p className="text-gray-400 mb-6">
                Register to receive exclusive offers and the latest news
              </p>
              <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 py-3 px-4 bg-gray-700 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
