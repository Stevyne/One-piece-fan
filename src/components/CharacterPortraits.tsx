import { Character } from '../data/characters';

function getCharPattern(name: string): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash) + name.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function CharacterPortraitSVG({ character, size = 400 }: { character: Character; size?: number }) {
  const hash = getCharPattern(character.name);
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.42;
  const color = character.color;
  const letter = character.name.split(' ').pop()?.[0] || '?';
  const secondLetter = character.name.split(' ').length > 1 ? character.name.split(' ')[0][0] : '';

  // Generate unique pattern based on character hash
  const patternType = hash % 5;
  const rotation = (hash % 360);
  const stripes = 3 + (hash % 5);
  const dots = 4 + (hash % 8);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Character color gradient */}
        <radialGradient id={`bg-${hash}`} cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="40%" stopColor={color} stopOpacity="0.6" />
          <stop offset="80%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0a0a2e" stopOpacity="1" />
        </radialGradient>

        {/* Inner glow gradient */}
        <radialGradient id={`glow-${hash}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>

        {/* Clip path for circle */}
        <clipPath id={`clip-${hash}`}>
          <circle cx={cx} cy={cy} r={r} />
        </clipPath>

        {/* Pattern based on character type */}
        {patternType === 0 && (
          <pattern id={`pat-${hash}`} patternUnits="userSpaceOnUse" width="30" height="30" patternTransform={`rotate(${rotation})`}>
            <line x1="0" y1="0" x2="30" y2="30" stroke={color} strokeWidth="1" opacity="0.15" />
            <line x1="30" y1="0" x2="0" y2="30" stroke={color} strokeWidth="1" opacity="0.1" />
          </pattern>
        )}
        {patternType === 1 && (
          <pattern id={`pat-${hash}`} patternUnits="userSpaceOnUse" width="25" height="25">
            <circle cx="12.5" cy="12.5" r="2" fill={color} opacity="0.12" />
          </pattern>
        )}
        {patternType === 2 && (
          <pattern id={`pat-${hash}`} patternUnits="userSpaceOnUse" width="40" height="40" patternTransform={`rotate(${rotation})`}>
            <rect x="0" y="0" width="40" height="2" fill={color} opacity="0.1" />
          </pattern>
        )}
        {patternType === 3 && (
          <pattern id={`pat-${hash}`} patternUnits="userSpaceOnUse" width="30" height="30" patternTransform={`rotate(${rotation})`}>
            <polygon points="15,0 30,30 0,30" fill={color} opacity="0.08" />
          </pattern>
        )}
        {patternType === 4 && (
          <pattern id={`pat-${hash}`} patternUnits="userSpaceOnUse" width="20" height="20">
            <circle cx="10" cy="10" r="8" fill="none" stroke={color} strokeWidth="1" opacity="0.1" />
          </pattern>
        )}

        {/* Devil fruit gradient */}
        <radialGradient id={`fruit-${hash}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={character.devilFruit ? (character.devilFruit.type === 'Logia' ? '#22D3EE' : character.devilFruit.type === 'Zoan' ? '#22C55E' : '#EC4899') : '#888'} stopOpacity="0.8" />
          <stop offset="100%" stopColor={character.devilFruit ? (character.devilFruit.type === 'Logia' ? '#22D3EE' : character.devilFruit.type === 'Zoan' ? '#22C55E' : '#EC4899') : '#888'} stopOpacity="0.2" />
        </radialGradient>
      </defs>

      <g clipPath={`url(#clip-${hash})`}>
        {/* Dark background */}
        <rect x="0" y="0" width={size} height={size} fill="#0a0a2e" />

        {/* Main gradient */}
        <circle cx={cx} cy={cy} r={r} fill={`url(#bg-${hash})`} />

        {/* Pattern overlay */}
        <rect x="0" y="0" width={size} height={size} fill={`url(#pat-${hash})`} />

        {/* Decorative stripes on side */}
        {Array.from({ length: stripes }).map((_, i) => (
          <line
            key={`stripe-${i}`}
            x1={size * 0.1 + i * (size * 0.06)}
            y1={0}
            x2={size * 0.1 + i * (size * 0.06)}
            y2={size}
            stroke={color}
            strokeWidth="1"
            opacity={0.08 - i * 0.01}
          />
        ))}

        {/* Decorative dots */}
        {Array.from({ length: dots }).map((_, i) => {
          const angle = (i / dots) * Math.PI * 2 + (hash % 100) * 0.01;
          const dotR = r * (0.6 + (i % 3) * 0.12);
          return (
            <circle
              key={`dot-${i}`}
              cx={cx + Math.cos(angle) * dotR}
              cy={cy + Math.sin(angle) * dotR}
              r={2 + i % 3}
              fill={color}
              opacity={0.15 - (i % 4) * 0.03}
            />
          );
        })}

        {/* Horizontal glow band */}
        <ellipse cx={cx} cy={cy + r * 0.2} rx={r * 0.9} ry={r * 0.15} fill={color} opacity="0.08" />

        {/* Character letter - main */}
        <text
          x={cx}
          y={cy + size * 0.08}
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="'Segoe UI', system-ui, sans-serif"
          fontWeight="900"
          fontSize={size * 0.35}
          fill="white"
          opacity="0.95"
          style={{ filter: `drop-shadow(0 0 ${size * 0.04}px ${color})` }}
        >
          {letter}
        </text>

        {/* Second letter offset behind */}
        {secondLetter && (
          <text
            x={cx - size * 0.12}
            y={cy - size * 0.05}
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="'Segoe UI', system-ui, sans-serif"
            fontWeight="900"
            fontSize={size * 0.18}
            fill={color}
            opacity="0.25"
          >
            {secondLetter}
          </text>
        )}

        {/* Inner glow */}
        <circle cx={cx} cy={cy} r={r} fill={`url(#glow-${hash})`} />

        {/* Devil Fruit indicator orb - bottom right */}
        {character.devilFruit && (
          <g transform={`translate(${cx + r * 0.55}, ${cy + r * 0.6})`}>
            <circle r={size * 0.08} fill={`url(#fruit-${hash})`} />
            <circle r={size * 0.06} fill="none" stroke={character.devilFruit.type === 'Logia' ? '#22D3EE' : character.devilFruit.type === 'Zoan' ? '#22C55E' : '#EC4899'} strokeWidth="1.5" opacity="0.7" />
            <text
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={size * 0.06}
              fontFamily="system-ui"
            >
              {character.devilFruit.type === 'Logia' ? '⚡' : character.devilFruit.type === 'Zoan' ? '🦁' : '🔮'}
            </text>
            {character.devilFruit.awakening && (
              <circle r={size * 0.1} fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.5" strokeDasharray="3 3">
                <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
              </circle>
            )}
          </g>
        )}

        {/* Haki indicator bars - bottom left */}
        <g transform={`translate(${cx - r * 0.7}, ${cy + r * 0.75})`}>
          {character.haki.observation && (
            <circle r={size * 0.03} cx="0" cy="0" fill="#F59E0B" opacity="0.8" />
          )}
          {character.haki.armament && (
            <circle r={size * 0.03} cx={size * 0.06} cy="0" fill="#6366F1" opacity="0.8" />
          )}
          {character.haki.conqueror && (
            <circle r={size * 0.03} cx={size * 0.12} cy="0" fill="#EF4444" opacity="0.8" />
          )}
        </g>

        {/* Crew label at bottom */}
        <text
          x={cx}
          y={cy + r * 0.9}
          textAnchor="middle"
          fontFamily="'Segoe UI', system-ui, sans-serif"
          fontWeight="600"
          fontSize={size * 0.04}
          fill={color}
          opacity="0.5"
        >
          {character.epithet}
        </text>

        {/* Outer ring */}
        <circle cx={cx} cy={cy} r={r} fill="none" stroke={color} strokeWidth="2" opacity="0.3" />
        <circle cx={cx} cy={cy} r={r - 2} fill="none" stroke={color} strokeWidth="0.5" opacity="0.15" />
      </g>
    </svg>
  );
}

export function ShipIllustrationSVG({ ship, size = 400 }: { ship: { name: string; color: string; emoji: string; type: string }; size?: number }) {
  const hash = getCharPattern(ship.name);
  const cx = size / 2;
  const cy = size / 2;
  const color = ship.color;

  const hullWidth = size * 0.7;
  const hullHeight = size * 0.12;
  const mastHeight = size * 0.35;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`sea-${hash}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c4a6e" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0a0a2e" stopOpacity="1" />
        </linearGradient>
        <radialGradient id={`ship-glow-${hash}`} cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky/background */}
      <rect x="0" y="0" width={size} height={size} fill="#0a0a2e" />
      <rect x="0" y="0" width={size} height={size} fill={`url(#ship-glow-${hash})`} />

      {/* Stars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <circle
          key={`star-${i}`}
          cx={(hash * (i + 1) * 7) % size}
          cy={(hash * (i + 1) * 13) % (size * 0.4)}
          r={0.5 + (i % 3) * 0.5}
          fill="white"
          opacity={0.2 + (i % 3) * 0.15}
        />
      ))}

      {/* Moon */}
      <circle cx={size * 0.8} cy={size * 0.15} r={size * 0.06} fill="#FBBF24" opacity="0.3" />
      <circle cx={size * 0.82} cy={size * 0.14} r={size * 0.05} fill="#0a0a2e" opacity="0.8" />

      {/* Sea */}
      <rect x="0" y={cy + size * 0.08} width={size} height={size * 0.5} fill={`url(#sea-${hash})`} />

      {/* Waves */}
      {Array.from({ length: 4 }).map((_, i) => {
        const waveY = cy + size * 0.1 + i * 12;
        const waveAmp = 4 + i * 2;
        return (
          <path
            key={`wave-${i}`}
            d={`M0 ${waveY} Q${size * 0.25} ${waveY - waveAmp} ${size * 0.5} ${waveY} Q${size * 0.75} ${waveY + waveAmp} ${size} ${waveY}`}
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="1"
            opacity={0.15 - i * 0.03}
          >
            <animateTransform attributeName="transform" type="translate" values={`0,0;${10 + i * 5},0;0,0`} dur={`${3 + i}s`} repeatCount="indefinite" />
          </path>
        );
      })}

      {/* Ship hull */}
      <g transform={`translate(${cx}, ${cy})`}>
        {/* Hull body */}
        <path
          d={`M${-hullWidth / 2} 0 Q${-hullWidth / 2.5} ${hullHeight} 0 ${hullHeight} Q${hullWidth / 2.5} ${hullHeight} ${hullWidth / 2} 0`}
          fill={color}
          opacity="0.6"
          stroke={color}
          strokeWidth="1.5"
        />
        {/* Hull deck line */}
        <line x1={-hullWidth / 2 + 10} y1={0} x2={hullWidth / 2 - 10} y2={0} stroke={color} strokeWidth="2" opacity="0.8" />

        {/* Mast */}
        <line x1={0} y1={0} x2={0} y2={-mastHeight} stroke={color} strokeWidth="2" opacity="0.7" />

        {/* Sail */}
        <path
          d={`M0 ${-mastHeight} Q${size * 0.12} ${-mastHeight * 0.6} 0 ${-mastHeight * 0.2}`}
          fill={color}
          opacity="0.2"
          stroke={color}
          strokeWidth="1"
        />
        <path
          d={`M0 ${-mastHeight * 0.9} Q${-size * 0.1} ${-mastHeight * 0.55} 0 ${-mastHeight * 0.25}`}
          fill={color}
          opacity="0.15"
          stroke={color}
          strokeWidth="1"
        />

        {/* Second mast */}
        <line x1={-hullWidth * 0.2} y1={0} x2={-hullWidth * 0.2} y2={-mastHeight * 0.7} stroke={color} strokeWidth="1.5" opacity="0.5" />
        <path
          d={`M${-hullWidth * 0.2} ${-mastHeight * 0.7} Q${-hullWidth * 0.2 + size * 0.08} ${-mastHeight * 0.4} ${-hullWidth * 0.2} ${-mastHeight * 0.15}`}
          fill={color}
          opacity="0.15"
          stroke={color}
          strokeWidth="1"
        />

        {/* Figurehead - bow */}
        <circle cx={hullWidth / 2 + 8} cy={-3} r={4} fill={color} opacity="0.6" />

        {/* Flag */}
        <line x1={0} y1={-mastHeight} x2={0} y2={-mastHeight - 15} stroke={color} strokeWidth="1" opacity="0.7" />
        <path
          d={`M0 ${-mastHeight - 15} L${12} ${-mastHeight - 10} L0 ${-mastHeight - 5}`}
          fill={color}
          opacity="0.5"
        >
          <animateTransform attributeName="transform" type="rotate" values="0 0 0;5 0 0;0 0 0;-5 0 0;0 0 0" dur="3s" repeatCount="indefinite" />
        </path>

        {/* Ship name */}
        <text
          x={0}
          y={hullHeight + size * 0.2}
          textAnchor="middle"
          fontFamily="'Segoe UI', system-ui, sans-serif"
          fontWeight="900"
          fontSize={size * 0.06}
          fill="white"
          opacity="0.7"
        >
          {ship.name}
        </text>
        <text
          x={0}
          y={hullHeight + size * 0.27}
          textAnchor="middle"
          fontFamily="'Segoe UI', system-ui, sans-serif"
          fontWeight="600"
          fontSize={size * 0.035}
          fill={color}
          opacity="0.5"
        >
          {ship.type}
        </text>

        {/* Emoji decoration */}
        <text
          x={0}
          y={-mastHeight * 0.45}
          textAnchor="middle"
          dominantBaseline="central"
          fontSize={size * 0.08}
        >
          {ship.emoji}
        </text>
      </g>

      {/* Water reflection */}
      <ellipse cx={cx} cy={cy + size * 0.22} rx={hullWidth * 0.4} ry={8} fill={color} opacity="0.08" />
    </svg>
  );
}
