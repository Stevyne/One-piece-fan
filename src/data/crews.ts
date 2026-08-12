import { Character } from './characters';

export type CrewCategory = 
  | 'Pirate' 
  | 'Yonko' 
  | 'Straw Hat Fleet' 
  | 'Marines' 
  | 'Revolutionary' 
  | 'World Government' 
  | 'Wano' 
  | 'Other';

export interface Crew {
  id: string;
  name: string;
  emoji: string;
  color: string;
  category: CrewCategory;
  keywords: string[]; // substrings to match character.crew field (lowercase)
  description: string;
}

export const crews: Crew[] = [
  { id: 'straw-hat', name: 'Mugiwara Pirates', emoji: '🏴‍☠️', color: '#EF4444', category: 'Pirate', keywords: ['straw hat pirates'], description: 'Équipage principal de Luffy, futur Roi des Pirates' },
  { id: 'straw-hat-grand-fleet', name: 'Grande Flotte Mugiwara', emoji: '⚔️', color: '#F59E0B', category: 'Straw Hat Fleet', keywords: ['straw hat grand fleet', 'beautiful pirates', 'barto club', 'happo navy', 'ideo pirates', 'tontatta', 'yonta maria', 'new giant warrior pirates'], description: '5600 hommes qui ont juré allégeance à Luffy à Dressrosa' },
  { id: 'heart-pirates', name: 'Heart Pirates', emoji: '💚', color: '#15803D', category: 'Pirate', keywords: ['heart pirates'], description: 'Équipage de Law, sous-marin Polar Tang' },
  { id: 'kid-pirates', name: 'Kid Pirates', emoji: '⚡', color: '#DC2626', category: 'Pirate', keywords: ['kid pirates'], description: 'Équipage magnétique destructeur de Kid' },
  { id: 'red-haired', name: 'Red-Haired Pirates', emoji: '🔴', color: '#DC2626', category: 'Yonko', keywords: ['red-haired pirates'], description: 'Équipage Yonko de Shanks' },
  { id: 'blackbeard', name: 'Blackbeard Pirates', emoji: '🏴‍☠️', color: '#1F2937', category: 'Yonko', keywords: ['blackbeard pirates'], description: 'Chasseurs de fruits, 10 Titanic Captains' },
  { id: 'cross-guild', name: 'Cross Guild', emoji: '💀', color: '#F59E0B', category: 'Yonko', keywords: ['cross guild', 'buggy', 'former baroque works'], description: 'Mihawk + Crocodile + Buggy, chasse les Marines' },
  { id: 'roger-pirates', name: 'Roger Pirates', emoji: '👑', color: '#FBBF24', category: 'Pirate', keywords: ['roger pirates'], description: 'Seul équipage allé à Laugh Tale' },
  { id: 'whitebeard-pirates', name: 'Whitebeard Pirates', emoji: '🐋', color: '#F8FAFC', category: 'Yonko', keywords: ['whitebeard pirates'], description: 'Le plus fort équipage, famille de Newgate' },
  { id: 'big-mom-pirates', name: 'Big Mom Pirates', emoji: '🎂', color: '#BE185D', category: 'Yonko', keywords: ['big mom pirates'], description: '85 enfants, Totto Land' },
  { id: 'beast-pirates', name: 'Beast Pirates', emoji: '🐉', color: '#7C3AED', category: 'Yonko', keywords: ['beast pirates'], description: 'Zoans antiques, Onigashima' },
  { id: 'donquixote', name: 'Donquixote Pirates', emoji: '🎭', color: '#F59E0B', category: 'Pirate', keywords: ['donquixote pirates'], description: 'Souterrain Dressrosa, SMILE' },
  { id: 'thriller-bark', name: 'Thriller Bark', emoji: '👻', color: '#6B7280', category: 'Pirate', keywords: ['thriller bark'], description: 'Navire-île fantôme de Moria' },
  { id: 'sun-pirates', name: 'Sun Pirates', emoji: '☀️', color: '#F97316', category: 'Pirate', keywords: ['sun pirates'], description: 'Hommes-poissons libérés par Fisher Tiger' },
  { id: 'mink-tribe', name: 'Mink Tribe', emoji: '🐰', color: '#FDE68A', category: 'Other', keywords: ['mink tribe'], description: 'Zou, Sulong pleine lune' },
  { id: 'kozuki-clan', name: 'Kozuki Clan / Wano', emoji: '🌸', color: '#DC2626', category: 'Wano', keywords: ['kozuki clan', 'wano', 'scabbards', 'tom\'s workers'], description: 'Samouraïs, Shogun, Toki time travel' },
  { id: 'giant-warrior', name: 'Giant Warrior Pirates', emoji: '🗿', color: '#3B82F6', category: 'Pirate', keywords: ['giant warrior pirates'], description: 'Géants Elbaf, Dorry & Brogy' },
  { id: 'rocks-pirates', name: 'Rocks Pirates', emoji: '☠️', color: '#000000', category: 'Yonko', keywords: ['rocks pirates'], description: 'Équipage légendaire God Valley, Xebec' },
  { id: 'marines', name: 'Marines', emoji: '⚓', color: '#1E40AF', category: 'Marines', keywords: ['marines'], description: 'Justice, QG New World' },
  { id: 'sword', name: 'SWORD', emoji: '🗡️', color: '#9CA3AF', category: 'Marines', keywords: ['sword'], description: 'Unité secrète Marine infiltrée' },
  { id: 'revolutionary', name: 'Revolutionary Army', emoji: '🔥', color: '#16A34A', category: 'Revolutionary', keywords: ['revolutionary army'], description: 'Dragon vs Gouvernement Mondial' },
  { id: 'cp0', name: 'CP0 / CP9', emoji: '🕴️', color: '#1F2937', category: 'World Government', keywords: ['cp0', 'cp9'], description: 'Intelligence suprême du GM' },
  { id: 'five-elders', name: 'Five Elders', emoji: '⭐', color: '#FBBF24', category: 'World Government', keywords: ['five elders', 'world government'], description: '5 Doyens immortels, boss finaux' },
  { id: 'holy-knights', name: 'Holy Knights', emoji: '🏰', color: '#FDE68A', category: 'World Government', keywords: ['holy knights', 'figarland'], description: 'Chevaliers sacrés qui jugent CD' },
  { id: 'ryugu-kingdom', name: 'Ryugu Kingdom', emoji: '🧜‍♀️', color: '#0EA5E9', category: 'Other', keywords: ['ryugu kingdom'], description: 'Fish-Man Island, Poséidon' },
  { id: 'kuja-pirates', name: 'Kuja Pirates', emoji: '🐍', color: '#DB2777', category: 'Pirate', keywords: ['kuja pirates'], description: 'Amazon Lily, femmes Kuja Haki' },
  { id: 'other', name: 'Autres & Légendes', emoji: '🌊', color: '#6B7280', category: 'Other', keywords: [], description: 'Skypiea, East Blue, etc.' },
];

export function getCrewForCharacter(char: Character): Crew {
  const crewLower = char.crew.toLowerCase();
  // Try exact keyword match first
  for (const crew of crews) {
    if (crew.id === 'other') continue;
    for (const kw of crew.keywords) {
      if (crewLower.includes(kw)) {
        return crew;
      }
    }
  }
  // Fallback by category heuristics
  if (crewLower.includes('straw hat pirates') && !crewLower.includes('grand fleet')) return crews.find(c => c.id === 'straw-hat')!;
  if (crewLower.includes('grand fleet') || crewLower.includes('beautiful pirates') || crewLower.includes('barto club') || crewLower.includes('happo') || crewLower.includes('tontatta') || crewLower.includes('yonta maria') || crewLower.includes('new giant')) return crews.find(c => c.id === 'straw-hat-grand-fleet')!;
  if (crewLower.includes('giant warrior')) return crews.find(c => c.id === 'giant-warrior')!;
  if (crewLower.includes('rocks')) return crews.find(c => c.id === 'rocks-pirates')!;
  return crews.find(c => c.id === 'other')!;
}

export interface GroupedCharacters {
  crew: Crew;
  characters: Character[];
}

export function groupCharactersByCrew(characters: Character[]): GroupedCharacters[] {
  const map = new Map<string, GroupedCharacters>();
  // init with empty for all crews to keep order
  for (const crew of crews) {
    map.set(crew.id, { crew, characters: [] });
  }

  for (const char of characters) {
    const crew = getCrewForCharacter(char);
    const entry = map.get(crew.id);
    if (entry) {
      entry.characters.push(char);
    } else {
      map.get('other')!.characters.push(char);
    }
  }

  // filter empty groups, but keep order as defined in crews array
  return Array.from(map.values()).filter(g => g.characters.length > 0);
}

export function groupCharactersByCategory(characters: Character[]): { category: CrewCategory; groups: GroupedCharacters[] }[] {
  const byCat = new Map<CrewCategory, GroupedCharacters[]>();
  const grouped = groupCharactersByCrew(characters);
  for (const g of grouped) {
    const cat = g.crew.category;
    if (!byCat.has(cat)) byCat.set(cat, []);
    byCat.get(cat)!.push(g);
  }
  return Array.from(byCat.entries()).map(([category, groups]) => ({ category, groups }));
}
