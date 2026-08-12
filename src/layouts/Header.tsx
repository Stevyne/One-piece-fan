import { NavLink } from 'react-router-dom';

const tabs = [
  { id: 'home', path: '/', label: 'Accueil', emoji: '☠️' },
  { id: 'world', path: '/world', label: 'Mers & Îles', emoji: '🌊' },
  { id: 'characters', path: '/characters', label: 'Personnages', emoji: '⚔️' },
  { id: 'fruits', path: '/fruits', label: 'Fruits', emoji: '🍎' },
  { id: 'ships', path: '/ships', label: 'Bateaux', emoji: '🚢' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-xl border-b border-amber-400/20">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <span className="text-3xl">☠️</span>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-black bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 bg-clip-text text-transparent leading-none">
                ONE PIECE UNIVERSE
              </h1>
              <p className="text-[10px] text-white/40 tracking-widest uppercase -mt-0.5">Grand Line Explorer • v1.0</p>
            </div>
          </NavLink>

          <nav className="flex gap-1 overflow-x-auto scrollbar-none" role="tablist" aria-label="Sections">
            {tabs.map(tab => (
              <NavLink
                key={tab.id}
                to={tab.path}
                className={({ isActive }) =>
                  `px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap flex items-center gap-1 ${
                    isActive
                      ? 'bg-amber-400/20 text-amber-400 border border-amber-400/30 shadow-md'
                      : 'text-white/60 hover:text-white hover:bg-white/10 border border-transparent'
                  }`
                }
                role="tab"
              >
                <span>{tab.emoji}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
