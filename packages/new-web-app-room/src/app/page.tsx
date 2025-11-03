'use client';

import { useEffect, useState } from 'react';

const bearFacts = [
  "Bears can run up to 35 mph - faster than any human!",
  "A bear's sense of smell is 7 times better than a bloodhound's",
  "Bears are excellent swimmers and can swim for miles",
  "Polar bears have black skin under their white fur",
  "Bears can live up to 30 years in the wild",
  "A group of bears is called a 'sleuth' or 'sloth'",
  "Bears have an excellent memory and can remember food sources for years",
  "Baby bears are called cubs and stay with mom for 2-3 years"
];

export default function InteractiveBearDisplay() {
  const [bearState, setBearState] = useState('idle');
  const [currentFact, setCurrentFact] = useState(0);
  const [showFact, setShowFact] = useState(false);

  const handleBearAction = (action: string) => {
    setBearState(action);
    setTimeout(() => setBearState('idle'), 2000);
  };

  const showRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * bearFacts.length);
    setCurrentFact(randomIndex);
    setShowFact(true);
    setTimeout(() => setShowFact(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-blue-50 to-purple-100 p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          🐻 Interactive Bear Character 🐻
        </h1>
        <p className="text-xl text-gray-600">
          Click the buttons to interact with our friendly bear!
        </p>
      </div>

      {/* Main Bear Display */}
      <div className="flex flex-col items-center justify-center mb-8">
        {/* Bear Character */}
        <div className={`text-[200px] transition-all duration-500 ${
          bearState === 'wave' ? 'animate-bounce' :
          bearState === 'dance' ? 'animate-spin' :
          bearState === 'sleep' ? 'opacity-50 scale-90' :
          'hover:scale-110'
        }`}>
          {bearState === 'sleep' ? '😴' : '🐻'}
        </div>

        {/* Bear Status */}
        <div className="text-2xl font-semibold text-gray-700 mb-6 h-8">
          {bearState === 'wave' && '👋 The bear is waving at you!'}
          {bearState === 'dance' && '💃 The bear is dancing!'}
          {bearState === 'sleep' && '😴 Shhh... the bear is sleeping...'}
          {bearState === 'idle' && '🐻 The bear is waiting for you to interact!'}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button
            onClick={() => handleBearAction('wave')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
          >
            👋 Make Bear Wave
          </button>
          <button
            onClick={() => handleBearAction('dance')}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
          >
            💃 Make Bear Dance
          </button>
          <button
            onClick={() => handleBearAction('sleep')}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
          >
            😴 Make Bear Sleep
          </button>
          <button
            onClick={showRandomFact}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
          >
            🧠 Bear Fact
          </button>
        </div>

        {/* Bear Fact Display */}
        {showFact && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 max-w-2xl mx-auto rounded-lg shadow-lg animate-fade-in">
            <div className="flex items-center">
              <div className="text-2xl mr-3">💡</div>
              <div>
                <p className="text-lg font-medium text-gray-800">
                  Did you know?
                </p>
                <p className="text-gray-700">
                  {bearFacts[currentFact]}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fun Stats */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          🐻 Bear Species Around the World 🌍
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-brown-50 rounded-lg">
            <div className="text-4xl mb-2">🐻‍❄️</div>
            <h3 className="font-semibold">Polar Bear</h3>
            <p className="text-sm text-gray-600">Arctic regions</p>
          </div>
          <div className="text-center p-4 bg-brown-50 rounded-lg">
            <div className="text-4xl mb-2">🐻</div>
            <h3 className="font-semibold">Brown Bear</h3>
            <p className="text-sm text-gray-600">North America & Europe</p>
          </div>
          <div className="text-center p-4 bg-brown-50 rounded-lg">
            <div className="text-4xl mb-2">🐼</div>
            <h3 className="font-semibold">Giant Panda</h3>
            <p className="text-sm text-gray-600">China</p>
          </div>
          <div className="text-center p-4 bg-brown-50 rounded-lg">
            <div className="text-4xl mb-2">🖤</div>
            <h3 className="font-semibold">Black Bear</h3>
            <p className="text-sm text-gray-600">North America</p>
          </div>
        </div>
      </div>
    </div>
  );
}

