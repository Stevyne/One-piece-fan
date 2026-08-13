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
    image: "/images/Big_Top.jpg",
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
  // ===== NEW SHIPS FOR EXISTING CHARACTERS - v1.5 - TOTAL 37 =====
  {
    name: "Saber of Xebec",
    crew: "Blackbeard Pirates",
    type: "Raft / Flagship",
    image: "/images/saber-xebec.jpg",
    description: "Blackbeard's flagship, a massive raft made of chained-together logs and ships, reflecting his crude but terrifying presence. It carries his 10 Titanic Captains.",
    size: "Very Large",
    figurehead: "Three skulls (Teach's flag)",
    specialFeature: "Raft of chained ships, can carry entire fleet, symbol of chaos",
    color: "#1F2937",
    emoji: "🏴‍☠️"
  },
  {
    name: "Cross Guild Ship",
    crew: "Cross Guild",
    type: "Guild Flagship",
    image: "/images/cross-guild.jpg",
    description: "The flagship of Cross Guild, where Buggy, Crocodile and Mihawk plot bounties on Marines. Decorated with clown and crocodile motifs.",
    size: "Large",
    figurehead: "Clown + Crocodile + Hawk Eyes",
    specialFeature: "Broadcasts Marine bounties worldwide, mobile headquarters of underworld",
    color: "#F59E0B",
    emoji: "💀"
  },
  {
    name: "Wind Frontier",
    crew: "Revolutionary Army",
    type: "Wind-Powered Battleship",
    image: "/images/wind-frontier.jpg",
    description: "Revolutionary Army's wind-powered battleship, uses Dragon's wind powers to sail even without wind. Carries all commanders including Ivankov, Kuma, Sabo.",
    size: "Very Large",
    figurehead: "Dragon head",
    specialFeature: "Wind-powered by Dragon's unknown ability, can appear out of nowhere, liberates nations",
    color: "#16A34A",
    emoji: "🌬️"
  },
  {
    name: "Numancia Flamingo",
    crew: "Donquixote Pirates",
    type: "Flamingo Ship",
    image: "/images/numancia-flamingo.jpg",
    description: "Doflamingo's flamboyant pink flamingo-themed ship, carries his crew of officers and SMILE factory products.",
    size: "Large",
    figurehead: "Flamingo",
    specialFeature: "Birdcage compatible, carries SMILE artificial fruits, underground trade hub",
    color: "#EC4899",
    emoji: "🦩"
  },
  {
    name: "Great Eirik",
    crew: "Giant Warrior Pirates / New Giant Warrior Pirates",
    type: "Viking Longship - Elbaf",
    image: "/images/great-eirik.jpg",
    description: "The legendary Elbaf longship of Dorry, Brogy and later Hajrudin. Made from Elbaf's Adam-like tree, it can carry 50 giants.",
    size: "Massive",
    figurehead: "Viking dragon",
    specialFeature: "Elbaf warship, can use Hakoku Sovereignty combined giant attack, saved Egghead",
    color: "#3B82F6",
    emoji: "🛶"
  },
  {
    name: "Nostra Castello",
    crew: "Fire Tank Pirates",
    type: "Castle Ship - Tank",
    image: "/images/nostra-castello.jpg",
    description: "Capone Bege's castle ship, interior is a full fortress with cannons, horses, and an army thanks to Shiro Shiro no Mi. Can become Big Father tank fortress.",
    size: "Large",
    figurehead: "Castle towers",
    specialFeature: "Body is castle, interior fortress army, can transform into Big Father tank",
    color: "#1C1917",
    emoji: "🏰"
  },
  {
    name: "Sleeping White Horse of the Forest",
    crew: "Beautiful Pirates / Straw Hat Grand Fleet",

    type: "White Horse Brigantine",
    image: "/images/sleeping-white-horse.jpg",
    description: "Cavendish's beautiful white horse-themed ship, as narcissistic as its captain. Fast and elegant.",
    size: "Medium",
    figurehead: "White horse",
    specialFeature: "Hakuba can run across sea on this ship at night, super fast",
    color: "#FDE68A",
    emoji: "🐴"
  },
  {
    name: "Going Luffy-senpai",
    crew: "Barto Club / Straw Hat Grand Fleet",
    type: "Fanboy Ship - Galley Covered in Luffy Merch",
    image: "/images/going-luffy-senpai.jpg",
    description: "Bartolomeo's ship covered in Luffy wanted posters, figures, and Going Luffy-senpai graffiti. A shrine to Luffy.",
    size: "Medium",
    figurehead: "Luffy figurehead (handmade)",
    specialFeature: "Barrier protection Bari Bari no Mi, shrine to Straw Hats, fanboy weapons",
    color: "#22C55E",
    emoji: "💚"
  },
  {
    name: "Iraosaurus of Happo Navy - Happosai",
    crew: "Happo Navy / Straw Hat Grand Fleet",
    type: "Happo Warship",
    image: "/images/happosai.jpg",
    description: "Sai and Chinjao's Happo Navy warship, carries the Happo 8 waves martial artists.",
    size: "Large",
    figurehead: "Happo dragon",
    specialFeature: "Hasshoken can shatter continents from this ship",
    color: "#A3A3A3",
    emoji: "🐉"
  },
  {
    name: "Usoland",
    crew: "Tontatta Pirates / Straw Hat Grand Fleet",
    type: "Dwarf Ship",
    image: "/images/usoland.jpg",
    description: "Leo and the Tontatta Tribe's tiny but fast ship, built from Dressrosa materials, crewed by 200 Tontatta warriors.",
    size: "Small but Mighty",
    figurehead: "Chestnut (Usoland)",
    specialFeature: "Nui Nui no Mi sews ships together, tiny but can take down big ships via teamwork",
    color: "#84CC16",
    emoji: "🌰"
  },
  {
    name: "Yonta Maria - Great Fleet Admiral Ship",
    crew: "Yonta Maria Fleet / Straw Hat Grand Fleet",
    type: "Grand Fleet - 56 Ships Combined",
    image: "/images/yonta-maria.jpg",
    description: "Orlumbus's flagship leading 56 ships and 4300 men, the largest fleet under Straw Hat Grand Fleet. Can separate into 56 ships.",
    size: "Fleet-sized (Massive)",
    figurehead: "Massacre Ruler mask",
    specialFeature: "56 ships combined, can be used as floating island, mass transport for Straw Hat Fleet",
    color: "#F59E0B",
    emoji: "🚢"
  },
  {
    name: "Naglfar",
    crew: "New Giant Warrior Pirates",
    type: "Elbaf Warship - Dark Naglfar",
    image: "/images/naglfar.jpg",
    description: "Hajrudin's dark longship Naglfar, named after the ship of the dead in Norse myth, built for the new Giant Warrior Pirates to become Pirate King crew.",
    size: "Very Large",
    figurehead: "Wolf skull",
    specialFeature: "Built to surpass Great Eirik, aims to be Pirate King ship",
    color: "#1F2937",
    emoji: "🐺"
  },
  {
    name: "Brachio Tank - Queen's Ship",
    crew: "Beast Pirates",
    type: "Brachiosaurus Tank",
    image: "/images/brachio-tank.jpg",
    description: "Queen's Brachio Tank, a tank shaped like his Brachiosaurus Zoan, with plague bullets and lasers.",
    size: "Large",
    figurehead: "Brachiosaurus head",
    specialFeature: "Plague bullets Ice Oni, laser beams from MADS science",
    color: "#EAB308",
    emoji: "🦕"
  },
  {
    name: "Mammoth Ship - Jack's Ship",
    crew: "Beast Pirates",
    type: "Mammoth Battleship",
    image: "/images/mammoth-ship.jpg",
    description: "Jack's mammoth-themed battleship, massive and destructive, can flood areas with its trunk.",
    size: "Massive",
    figurehead: "Mammoth head",
    specialFeature: "Floods battlefields, carries Jack's army",
    color: "#78716C",
    emoji: "🦣"
  },
  {
    name: "Kozuki Clan Ship - Kozaburo Legacy",
    crew: "Kozuki Clan / Scabbards",
    type: "Wano War Junk",
    image: "/images/kozuki-ship.jpg",
    description: "Wano royal ship used by Oden and later Momonosuke, built by Kozaburo (Zoro's ancestor who made Enma and Wado Ichimonji).",
    size: "Large",
    figurehead: "Kozuki crescent moon",
    specialFeature: "Built by legendary swordsmith, can open Wano borders when Pluton released",
    color: "#DC2626",
    emoji: "🌸"
  },
  {
    name: "Ryugu Palace Royal Ship",
    crew: "Ryugu Kingdom / Neptune Family",
    type: "Royal Coelacanth Battleship",
    image: "/images/ryugu-ship.jpg",
    description: "Neptune family's royal coelacanth battleship, can summon Sea Kings via Shirahoshi's Poseidon power.",
    size: "Very Large",
    figurehead: "Coelacanth",
    specialFeature: "Can be pulled by Sea Kings when Shirahoshi calls, royal palace transport to Reverie",
    color: "#0EA5E9",
    emoji: "🐟"
  },
  {
    name: "Egghead Lab - Vegaforce-01",
    crew: "Egghead / Vegapunk",
    type: "Giant Robot - Vegapunk Mecha",
    image: "/images/vegaforce.jpg",
    description: "Vegapunk's giant robot Vegaforce-01, built to replicate ancient robot that fought 200 years ago, uses Mother Flame.",
    size: "Giant Robot Island-sized",
    figurehead: "Robot head",
    specialFeature: "Giant robot powered by Mother Flame, can fight Yonko, built from ancient tech",
    color: "#22D3EE",
    emoji: "🤖"
  },
  {
    name: "Impel Down Jail Ship - Blugori Transport",
    crew: "Impel Down / Marines",
    type: "Jail Transport Battleship",
    image: "/images/impel-down-ship.jpg",
    description: "Impel Down's transport ship for prisoners, guarded by Blugori blue gorillas and Domino, Hannyabal, Magellan.",
    size: "Large",
    figurehead: "Jail bars",
    specialFeature: "Seastone hull, carries most dangerous prisoners level 6",
    color: "#1E40AF",
    emoji: "⛓️"
  },
  {
    name: "Rosy Life Riders' Shark SubSquad",
    crew: "Rosy Life Riders / Duval",
    type: "Shark Motorcycle Gang - Sea Animal Bikers",
    image: "/images/rosy-life.jpg",
    description: "Duval's Rosy Life Riders on flying fish and sharks, after Sanji reformed Duval's face.",
    size: "Small Fleet",
    figurehead: "Shark head",
    specialFeature: "Flying fish can fly and dive, shark sub squad for Sunny coating transport",
    color: "#F59E0B",
    emoji: "🦈"
  },
  {
    name: "Germa Kingdom Snail Fleet - Catteya",
    crew: "Germa 66",
    type: "Snail Battleship Clones",
    image: "/images/germa-snail.jpg",
    description: "Germa 66's snail battleship fleet, each snail is a giant sea snail carrying a castle, clones army inside.",
    size: "Fleet of Snail Castles - Massive",
    figurehead: "Snail with crown",
    specialFeature: "Clone army production, Raid Suits, Snail ships can combine into whole kingdom",
    color: "#FBBF24",
    emoji: "🐌"
  },
];
