import type { Character } from '../../data/characters';
import type { Ship } from '../../data/ships';

export function CharacterCard({ character, isSelected, onClick }: { character: Character; isSelected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`text-left w-full p-3 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
        isSelected
          ? 'border-amber-400 bg-amber-400/10 shadow-lg shadow-amber-400/20 scale-[1.02]'
          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 hover:translate-y-[-1px]'
      }`}
    >
      {isSelected && (
        <div
          className="absolute inset-0 animate-pulse opacity-30"
          style={{ background: `radial-gradient(circle at 30% 50%, ${character.color}, transparent 70%)` }}
        />
      )}
      <div className="relative flex items-start gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-xl shrink-0 overflow-hidden ${isSelected ? 'character-breathe' : 'group-hover:scale-105 transition-transform'}`}
          style={{
            backgroundColor: character.color + '33',
            border: `2px solid ${character.color}`,
            boxShadow: isSelected ? `0 0 12px ${character.color}66` : 'none',
          }}
        >
          {character.image ? (
            <img src={character.image} alt={character.name} className="w-full h-full object-cover object-top" loading="lazy" onError={(e)=>{ (e.target as HTMLImageElement).style.display='none'; }} />
          ) : (
            <span>{character.name.split(' ').pop()?.[0]}</span>
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-white text-sm truncate">{character.name}</h3>
          <p className="text-amber-400 text-xs italic truncate">{character.epithet}</p>
          <div className="flex gap-1 mt-1 flex-wrap">
            {character.devilFruit && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30">
                🍎 {character.devilFruit.type}
              </span>
            )}
            {character.haki.conqueror && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                👑 Haki
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

export function ShipCard({ ship, isSelected, onClick }: { ship: Ship; isSelected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`text-left w-full p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
        isSelected
          ? 'border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20 scale-[1.02]'
          : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10 hover:translate-y-[-1px]'
      }`}
    >
      <div className="flex items-center gap-3">
        {ship.image ? (
          <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0" style={{ border: `2px solid ${ship.color}` }}>
            <img src={ship.image} alt={ship.name} className="w-full h-full object-cover" loading="lazy" onError={(e)=>{ (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class='text-lg'>${ship.emoji}</span>`; }} />
          </div>
        ) : (
          <span className="text-2xl">{ship.emoji}</span>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-white text-sm truncate">{ship.name}</h3>
          <p className="text-cyan-400 text-xs truncate">{ship.crew}</p>
          <p className="text-white/50 text-xs truncate">{ship.type}</p>
        </div>
      </div>
    </button>
  );
}
