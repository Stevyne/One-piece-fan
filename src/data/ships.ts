export interface Ship {
  name: string;
  crew: string;
  type: string;
  description: string;
  size: string;
  figurehead: string;
  specialFeature: string;
  color: string;
  emoji: string;
  image?: string;
}

export const ships: Ship[] = [
  {
    name: "Going Merry",
    crew: "Straw Hat Pirates",
    type: "Caravel",
    image: "/images/going-merry.jpg",
    description: "The first ship of the Straw Hat Pirates, gifted by Kaya. A beloved caravel that carried the crew through the East Blue and into the Grand Line. She met her end at Water 7 but was given a Viking funeral.",
    size: "Medium",
    figurehead: "Goat head",
    specialFeature: "Self-aware Klabautermann spirit",
    color: "#8B5CF6",
    emoji: "🐐"
  },
  {
    name: "Thousand Sunny",
    crew: "Straw Hat Pirates",
    type: "Brigantine-Rigged Sloop-of-War",
    image: "/images/thousand-sunny.jpg",
    description: "The Straw Hats' second and current ship, built by Franky and the Galley-La shipwrights using Adam Wood. Equipped with the Soldier Dock System and various channel deployments.",
    size: "Large",
    figurehead: "Lion head",
    specialFeature: "Gaon Cannon, Coup de Burst, Soldier Dock System with channels 0-4",
    color: "#F59E0B",
    emoji: "🦁"
  },
  {
    name: "Oro Jackson",
    crew: "Roger Pirates",
    type: "Ship of the Pirate King",
    image: "/images/oro-jackson.jpg",
    description: "The legendary ship that carried Gol D. Roger and his crew around the entire Grand Line. Built by Tom using Adam Wood, the strongest wood in the world.",
    size: "Very Large",
    figurehead: "Unknown",
    specialFeature: "Built from Adam Wood, the only ship to complete the Grand Line",
    color: "#FBBF24",
    emoji: "👑"
  },
  {
    name: "Moby Dick",
    crew: "Whitebeard Pirates",
    type: "Flagship Galleon",
    image: "/images/moby-dick.jpg",
    description: "Edward Newgate's massive flagship, a distinctive white whale-shaped vessel. One of the largest ships in the One Piece world, it served as Whitebeard's base of operations.",
    size: "Massive",
    figurehead: "White whale",
    specialFeature: "Could be coated for underwater travel, carried Whitebeard's entire division",
    color: "#F8FAFC",
    emoji: "🐋"
  },
  {
    name: "Red Force",
    crew: "Red-Haired Pirates",
    type: "Dragon Ship",
    image: "/images/red-force.jpg",
    description: "Shanks' massive flagship, a formidable vessel with a dragon-themed design. One of the most powerful ships in the New World.",
    size: "Very Large",
    figurehead: "Dragon head",
    specialFeature: "Carries the Red-Haired Pirates, one of the Yonko crews",
    color: "#DC2626",
    emoji: "🐉"
  },
  {
    name: "Queen Mama Chanter",
    crew: "Big Mom Pirates",
    type: "Homie Ship",
    image: "/images/queen-mama.jpg",
    description: "Big Mom's flagship, a massive ship made with soul fragments (Homies). It is alive and can move on its own, powered by Big Mom's Soru Soru no Mi.",
    size: "Massive",
    figurehead: "Singing face",
    specialFeature: "Alive ship powered by soul fragments, can sing and move autonomously",
    color: "#BE185D",
    emoji: "🎂"
  },
  {
    name: "Onigashima",
    crew: "Beast Pirates",
    type: "Island-Ship",
    image: "/images/onigashima.jpg",
    description: "Kaido's mobile fortress, actually an entire island that can be towed by the Beasts Pirates. Serves as both a base and a weapon of war.",
    size: "Island-sized",
    figurehead: "Demon skull",
    specialFeature: "An entire island used as a ship, towed by massive chains",
    color: "#7C3AED",
    emoji: "👹"
  },
  {
    name: "Polar Tang",
    crew: "Heart Pirates",
    type: "Submarine",
    image: "/images/polar-tang.jpg",
    description: "Law's submarine ship, one of the few underwater vessels in the One Piece world. Allows the Heart Pirates to travel beneath the sea, avoiding Sea Kings and surface dangers.",
    size: "Medium",
    figurehead: "Polar bear",
    specialFeature: "Submarine capable of deep-sea travel, can travel coated or uncoated",
    color: "#15803D",
    emoji: "🐻‍❄️"
  },
  {
    name: "Victoria Punk",
    crew: "Kid Pirates",
    type: "Punk Ship",
    image: "/images/victoria-punk.jpg",
    description: "Eustass Kid's ship, a heavily modified and weaponized vessel built with metal parts reflecting Kid's magnetism abilities.",
    size: "Large",
    figurehead: "Metal skull",
    specialFeature: "Heavily armored with metal plating, compatible with Kid's magnetic powers",
    color: "#DC2626",
    emoji: "⚡"
  },
  {
    name: "Spear of Lilly",
    crew: "Kuja Pirates",
    type: "Pirate Ship",
    image: "/images/spear-of-lilly.jpg",
    description: "Boa Hancock's ship used by the Kuja Pirates. A warship crewed entirely by the warrior women of Amazon Lily.",
    size: "Medium",
    figurehead: "Serpent",
    specialFeature: "Crewed by Haki-wielding Kuja warriors, coated in Seastone for Calm Belt travel",
    color: "#DB2777",
    emoji: "🐍"
  },
  {
    name: "Noah",
    crew: "Fish-Man Island (Royal)",
    type: "Ancient Super Ship",
    image: "/images/noah.jpg",
    description: "An enormous ancient ship resting in the depths near Fish-Man Island. Created during the Void Century, it was meant to carry all Fish-Men to the surface. Said to be half the size of Fish-Man Island itself.",
    size: "Half an island",
    figurehead: "Unknown ancient design",
    specialFeature: "One of the ancient super ships, created during the Void Century, requires Sea Kings to pull it",
    color: "#3B82F6",
    emoji: "⚓"
  },
  {
    name: "Pluton",
    crew: "Ancient Weapon",
    type: "Ancient Super Warship",
    description: "One of the three Ancient Weapons, Pluton is a massive warship capable of destroying entire islands. Its blueprints were passed down through Water 7's shipwrights until Franky burned them.",
    size: "Island-destroying",
    figurehead: "Unknown",
    specialFeature: "Ancient Weapon capable of obliterating entire islands, hidden somewhere in the world",
    color: "#EF4444",
    emoji: "💥"
  },
  {
    name: "Thriller Bark",
    crew: "Thriller Bark Pirates",
    type: "Ghost Island Ship",
    image: "/images/Thriller-Bark.jpg",
    description: "The world's largest ship, an entire island covered in a haunted forest and castle. Used by Gecko Moria as his base to create zombies using stolen shadows.",
    size: "Island-sized",
    figurehead: "None (island ship)",
    specialFeature: "Largest ship in the world, haunted island with zombie creation facilities",
    color: "#6B7280",
    emoji: "👻"
  },
  {
    name: "St. Briss",
    crew: "Unknown (Briss Kingdom)",
    type: "Square Rigger",
    description: "A ship that fell from Skypiea, discovered by the Straw Hats. It carried the Briss Kingdom's exploration team to the sky sea.",
    size: "Medium",
    figurehead: "Unknown",
    specialFeature: "Traveled to Skypiea via Knock Up Stream",
    color: "#9CA3AF",
    emoji: "☁️"
  },
  {
    name: "Marine Battleships",
    crew: "Marines",
    type: "Battleship",
    image: "/images/marine-battleship.jpg",
    description: "The standard warships of the Marines, coated in Seastone on the hull allowing safe passage through the Calm Belt. Various sizes from standard to massive Vice Admiral and Admiral ships.",
    size: "Various (Large to Massive)",
    figurehead: "Marine insignia",
    specialFeature: "Seastone hull coating for Calm Belt travel, heavy artillery",
    color: "#1E40AF",
    emoji: "🚢"
  },
  {
    name: "Buggy's Big Top",
    crew: "Buggy Pirates / Buggy's Delivery",
    type: "Circus Ship",
    image: "/images/Big-Top.jpg",
    description: "Buggy's distinctive circus-themed ship. Features a big top tent design befitting the Clown Captain.",
    size: "Medium",
    figurehead: "Clown face",
    specialFeature: "Circus-themed design, part of Buggy's Delivery fleet",
    color: "#EF4444",
    emoji: "🎪"
  },
  {
    name: "Sun Pirates Ship",
    crew: "Sun Pirates",
    type: "Fish-Man Pirate Ship",
    image: "/images/sun-pirates.jpg",
    description: "The ship used by Fisher Tiger and the Sun Pirates. A vessel that carried the first fish-man pirate crew fighting for freedom.",
    size: "Large",
    figurehead: "Sun symbol",
    specialFeature: "Carried the revolutionary Fish-Man crew, symbol of freedom",
    color: "#F97316",
    emoji: "☀️"
  },
];
