import { useState, useEffect, useMemo } from 'react';
import { Character } from '../data/characters';
import { getFruitVisual } from '../data/fruitVisuals';
import { CharacterPortraitSVG } from './CharacterPortraits';

function FloatingParticle({ emoji, delay, duration, startX, startY }: {
  emoji: string; delay: number; duration: number; startX: number; startY: number;
}) {
  const style = useMemo(() => ({
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    left: `${startX}%`,
    top: `${startY}%`,
  } as React.CSSProperties), [delay, duration, startX, startY]);

  return (
    <span
      className="absolute text-base sm:text-lg pointer-events-none fruit-particle"
      style={style}
    >
      {emoji}
    </span>
  );
}

function DevilFruitHeld({ fruitName, awakening, fruitType }: { fruitName: string; awakening?: boolean; fruitType: string }) {
  const visual = getFruitVisual(fruitName);
  const [bobY, setBobY] = useState(0);

  useEffect(() => {
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.04;
      setBobY(Math.sin(t) * 6);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="absolute right-2 sm:right-4 bottom-2 sm:bottom-4" style={{ transform: `translateY(${bobY}px)` }}>
      {/* Connection line to character (arm) */}
      <div
        className="absolute -left-14 sm:-left-20 top-1/2 -translate-y-1/2 h-0.5 origin-right fruit-arm-connect"
        style={{
          width: '60px',
          background: `linear-gradient(90deg, transparent, ${visual.color}66, ${visual.color})`,
        }}
      />

      {/* Outer glow ring */}
      <div
        className="absolute rounded-full animate-ping"
        style={{
          width: awakening ? 90 : 70,
          height: awakening ? 90 : 70,
          left: awakening ? -15 : -9,
          top: awakening ? -15 : -9,
          backgroundColor: visual.color + '22',
        }}
      />

      {/* Fruit body */}
      <div
        className="relative flex items-center justify-center rounded-2xl border-2"
        style={{
          width: awakening ? 56 : 48,
          height: awakening ? 56 : 48,
          backgroundColor: visual.color + '28',
          borderColor: visual.color,
          boxShadow: `0 0 ${awakening ? 40 : 20}px ${visual.color}88, 0 0 ${awakening ? 80 : 40}px ${visual.color}44, inset 0 0 15px ${visual.color}22`,
          transform: 'rotate(-15deg)',
        }}
      >
        <span className="text-2xl sm:text-3xl" style={{ filter: awakening ? 'brightness(1.5) saturate(1.3)' : 'none' }}>
          {visual.emoji}
        </span>

        {/* Awakening shimmer overlay */}
        {awakening && (
          <div className="absolute inset-0 rounded-2xl overflow-hidden awakening-shimmer" />
        )}
      </div>

      {/* Orbiting mini particles around fruit */}
      <div className="absolute inset-0">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: visual.color,
              boxShadow: `0 0 6px ${visual.color}`,
              animation: `fruitMiniOrbit ${2 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.6}s`,
              top: '50%',
              left: '50%',
            }}
          />
        ))}
      </div>

      {/* Type badge */}
      <div
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-bold px-1.5 py-0.5 rounded-full"
        style={{ backgroundColor: visual.color + '33', color: visual.color, border: `1px solid ${visual.color}44` }}
      >
        {fruitType}
      </div>
    </div>
  );
}

function HakiEffect({ type, advanced, color }: {
  type: 'observation' | 'armament' | 'conqueror'; advanced?: boolean; color: string;
}) {
  if (type === 'observation') {
    return (
      <>
        <div className="absolute inset-0 pointer-events-none">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{
                border: `${advanced ? 3 : 2}px solid ${color}`,
                animation: `observationScan ${2 + i * 0.5}s ease-out infinite`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </div>
        <div
          className="absolute -top-6 left-1/2 -translate-x-1/2 text-lg observation-eye"
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        >
          👁️
        </div>
      </>
    );
  }

  if (type === 'armament') {
    return (
      <>
        <div
          className="absolute rounded-full armament-hardening"
          style={{
            inset: -4,
            border: `${advanced ? 4 : 3}px solid ${advanced ? '#8B5CF6' : '#374151'}`,
            boxShadow: `inset 0 0 ${advanced ? 30 : 15}px ${advanced ? '#8B5CF688' : '#37415188'}, 0 0 ${advanced ? 20 : 10}px ${advanced ? '#8B5CF644' : '#37415144'}`,
          }}
        />
        <div
          className="absolute inset-0 rounded-full armament-flash"
          style={{
            background: `radial-gradient(circle, ${advanced ? '#8B5CF633' : '#37415133'}, transparent 60%)`,
          }}
        />
        {advanced && (
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-purple-400 whitespace-nowrap">
            🛡️ Ryuo
          </div>
        )}
      </>
    );
  }

  if (type === 'conqueror') {
    return (
      <>
        <div
          className="absolute rounded-full conqueror-burst"
          style={{
            inset: -20,
            background: `radial-gradient(circle, transparent 30%, ${color}22 60%, transparent 80%)`,
          }}
        />
        {[...Array(advanced ? 8 : 5)].map((_, i) => {
          const angle = (i / (advanced ? 8 : 5)) * 360;
          const delay = i * 0.3;
          return (
            <div
              key={i}
              className="absolute conqueror-bolt-svg"
              style={{
                '--bolt-delay': `${delay}s`,
                animationDelay: `${delay}s`,
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              } as React.CSSProperties}
            >
              <svg width="20" height={`${30 + Math.random() * 20}`} viewBox="0 0 20 50" fill="none">
                <path
                  d={`M10 0L${4 + Math.random() * 12} ${15 + Math.random() * 5}L${2 + Math.random() * 6} ${25 + Math.random() * 5}L${6 + Math.random() * 8} 50`}
                  stroke={color}
                  strokeWidth={advanced ? 2.5 : 1.5}
                  strokeLinecap="round"
                  opacity={0.7 + Math.random() * 0.3}
                />
              </svg>
            </div>
          );
        })}
        <div
          className="absolute -top-9 left-1/2 -translate-x-1/2 text-xl conqueror-crown"
          style={{ filter: `drop-shadow(0 0 8px ${color})` }}
        >
          👑
        </div>
      </>
    );
  }

  return null;
}

interface AnimatedCharacterProps {
  character: Character;
}

export default function AnimatedCharacter({ character }: AnimatedCharacterProps) {
  const fruitVisual = character.devilFruit ? getFruitVisual(character.devilFruit.name) : null;
  const particles = fruitVisual?.particles || ['✨', '💫', '⭐'];

  const hasObservation = !!character.haki.observation;
  const hasArmament = !!character.haki.armament;
  const hasConqueror = !!character.haki.conqueror;

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: 520 }}>
      {/* ===== CHARACTER IMAGE BACKGROUND ===== */}
      {character.image ? (
        <div className="absolute inset-0">
          {/* Image with cover fit */}
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover object-center"
            style={{ filter: 'brightness(0.5) saturate(1.3)' }}
          />
          {/* Gradient overlay from bottom */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(to top, rgba(10,10,46,0.95) 0%, rgba(10,10,46,0.7) 30%, rgba(10,10,46,0.4) 50%, rgba(10,10,46,0.2) 70%, rgba(10,10,46,0.5) 100%),
                linear-gradient(135deg, ${character.color}33 0%, transparent 50%, ${character.color}22 100%)
              `,
            }}
          />
          {/* Character color tint */}
          <div
            className="absolute inset-0 character-bg-gradient"
            style={{
              background: `radial-gradient(ellipse at 70% 30%, ${character.color}44 0%, transparent 50%)`,
            }}
          />
          {/* Scan line effect */}
          <div className="absolute inset-0 scan-line-effect opacity-20" />
        </div>
      ) : (
        <>
          {/* Fallback: SVG portrait as full background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <CharacterPortraitSVG character={character} size={500} />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, rgba(10,10,46,0.9) 0%, rgba(10,10,46,0.5) 30%, rgba(10,10,46,0.2) 50%, rgba(10,10,46,0.6) 100%)`,
            }}
          />
        </>
      )}

      {/* Moving dots pattern */}
      <div className="absolute inset-0 bg-pattern-animate opacity-[0.04]" />

      {/* Conqueror's Haki full background effect */}
      {hasConqueror && (
        <div
          className="absolute inset-0 conqueror-bg-pulse"
          style={{
            background: `radial-gradient(circle at 50% 40%, ${character.haki.conquerorAdvanced ? '#FFD700' : '#EF4444'}11 0%, transparent 60%)`,
          }}
        />
      )}

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <FloatingParticle
            key={i}
            emoji={p}
            delay={i * 0.7 + Math.random()}
            duration={4 + Math.random() * 3}
            startX={15 + Math.random() * 70}
            startY={10 + Math.random() * 60}
          />
        ))}
        {['✨', '💫', '⭐'].map((p, i) => (
          <FloatingParticle
            key={`ambient-${i}`}
            emoji={p}
            delay={i * 1.5 + 2}
            duration={5 + Math.random() * 4}
            startX={10 + Math.random() * 80}
            startY={20 + Math.random() * 50}
          />
        ))}
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 flex flex-col items-center pt-6 pb-8">
        {/* Character avatar with haki effects */}
        <div className="relative">
          {/* Haki effects on avatar */}
          {hasConqueror && (
            <HakiEffect type="conqueror" advanced={character.haki.conquerorAdvanced} color={character.haki.conquerorAdvanced ? '#FFD700' : '#EF4444'} />
          )}
          {hasObservation && (
            <HakiEffect type="observation" advanced={character.haki.observationAdvanced} color={character.haki.observationAdvanced ? '#EF4444' : '#F59E0B'} />
          )}
          {hasArmament && (
            <HakiEffect type="armament" advanced={character.haki.armamentAdvanced} color={character.haki.armamentAdvanced ? '#8B5CF6' : '#6366F1'} />
          )}

          <div className="relative">
            {/* Outer ambient glow */}
            <div
              className="absolute rounded-full character-ambient-glow"
              style={{
                inset: -30,
                background: `radial-gradient(circle, ${character.color}44, transparent 70%)`,
              }}
            />

            {/* Main avatar circle */}
            <div
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center character-breathe overflow-hidden"
              style={{
                border: `3px solid ${character.color}`,
                boxShadow: `0 0 40px ${character.color}55, 0 0 80px ${character.color}22, inset 0 0 40px ${character.color}22`,
              }}
            >
              {character.image ? (
                <>
                  {/* Character image inside the circle */}
                  <img
                    src={character.image}
                    alt={character.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    style={{ filter: 'saturate(1.2) contrast(1.1)' }}
                  />
                  {/* Color tint overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: `radial-gradient(circle at 50% 50%, transparent 40%, ${character.color}44 100%)` }}
                  />
                  {/* Armament dark coating overlay */}
                  {hasArmament && (
                    <div
                      className="absolute inset-0 rounded-full armament-overlay"
                      style={{
                        background: `radial-gradient(circle, ${character.haki.armamentAdvanced ? '#8B5CF633' : '#1F293744'}, transparent 70%)`,
                      }}
                    />
                  )}
                </>
              ) : (
                <>
                  {/* SVG Portrait for characters without photo */}
                  <CharacterPortraitSVG character={character} size={320} />
                </>
              )}

              {/* Inner shine */}
              <div
                className="absolute inset-0 rounded-full inner-glow"
                style={{
                  background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent 60%)`,
                }}
              />
            </div>

            {/* Devil Fruit held in hand */}
            {character.devilFruit && (
              <DevilFruitHeld
                fruitName={character.devilFruit.name}
                awakening={character.devilFruit.awakening}
                fruitType={character.devilFruit.type}
              />
            )}
          </div>

          {/* Epithet badge */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
            <span
              className="text-xs sm:text-sm font-bold px-3 py-1 rounded-full"
              style={{
                backgroundColor: character.color + '33',
                color: character.color,
                border: `1px solid ${character.color}55`,
                boxShadow: `0 0 15px ${character.color}33`,
              }}
            >
              {character.epithet}
            </span>
          </div>
        </div>

        {/* Character name and info */}
        <div className="mt-10 text-center z-20 px-4">
          <h2
            className="text-3xl sm:text-4xl font-black text-white"
            style={{ textShadow: `0 0 30px ${character.color}44, 0 2px 4px rgba(0,0,0,0.5)` }}
          >
            {character.name}
          </h2>
          <p className="text-sm sm:text-base mt-1 font-medium" style={{ color: character.color }}>
            {character.role}
          </p>
          <p className="text-white/40 text-xs sm:text-sm mt-0.5">{character.crew}</p>

          {character.bounty && (
            <div className="mt-4 inline-block bg-black/50 rounded-xl px-5 py-2 border border-amber-400/30">
              <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold">Wanted</p>
              <p className="text-amber-400 text-xl sm:text-2xl font-black font-mono">{character.bounty} Berry</p>
            </div>
          )}
        </div>

        {/* Haki display bar */}
        {(hasObservation || hasArmament || hasConqueror) && (
          <div className="mt-8 flex gap-4 sm:gap-6 items-start">
            {hasObservation && (
              <div className="flex flex-col items-center">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full haki-ring-1"
                    style={{ borderColor: character.haki.observationAdvanced ? '#EF4444' : '#F59E0B', borderWidth: 2, borderStyle: 'solid' }}
                  />
                  <div
                    className="absolute inset-0 rounded-full haki-ring-2"
                    style={{ borderColor: character.haki.observationAdvanced ? '#EF4444' : '#F59E0B', borderWidth: 1, borderStyle: 'dashed' }}
                  />
                  <span className="relative text-xl sm:text-2xl z-10">👁️</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold mt-1" style={{ color: character.haki.observationAdvanced ? '#EF4444' : '#F59E0B' }}>
                  Observation
                </span>
                {character.haki.observationAdvanced && (
                  <span className="text-[8px] font-black text-amber-400 animate-pulse">ADVANCED</span>
                )}
              </div>
            )}
            {hasArmament && (
              <div className="flex flex-col items-center">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                  <div
                    className="absolute inset-1 rounded-full animate-pulse"
                    style={{
                      backgroundColor: (character.haki.armamentAdvanced ? '#8B5CF6' : '#6366F1') + '33',
                      boxShadow: `0 0 15px ${(character.haki.armamentAdvanced ? '#8B5CF6' : '#6366F1')}44`,
                    }}
                  />
                  <span className="relative text-xl sm:text-2xl z-10">🛡️</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold mt-1" style={{ color: character.haki.armamentAdvanced ? '#8B5CF6' : '#6366F1' }}>
                  Armament
                </span>
                {character.haki.armamentAdvanced && (
                  <span className="text-[8px] font-black text-purple-400 animate-pulse">RYUO</span>
                )}
              </div>
            )}
            {hasConqueror && (
              <div className="flex flex-col items-center">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full conqueror-burst"
                    style={{
                      background: `radial-gradient(circle, transparent 30%, ${character.haki.conquerorAdvanced ? '#FFD700' : '#EF4444'}22 60%, transparent 80%)`,
                    }}
                  />
                  <span className="relative text-xl sm:text-2xl z-10 conqueror-crown-mini">👑</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-bold mt-1" style={{ color: character.haki.conquerorAdvanced ? '#FFD700' : '#EF4444' }}>
                  Conqueror
                </span>
                {character.haki.conquerorAdvanced && (
                  <span className="text-[8px] font-black text-amber-400 animate-pulse">INFUSION</span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
