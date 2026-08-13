export interface FruitVisual {
  emoji: string;
  color: string;
  element: string;
  particles: string[];
  image?: string;
  detailedDescription?: string;
  firstAppearance?: string;
  typeDetail?: string;
  weaknesses?: string[];
}

export const fruitVisuals: Record<string, FruitVisual> = {
  "Hito Hito no Mi, Model: Nika": {
    emoji: "☀️", color: "#FFD700", element: "sun",
    particles: ["✨", "🌟", "⭐", "💫", "🔆", "🧦"],
    image: "/images/fruits/hito-hito-nika.jpg",
    detailedDescription: "Le fruit le plus ridicule et le plus libre du monde. Autrefois appelé Gomu Gomu no Mi, c'est en réalité le fruit du Dieu Soleil Nika, dieu de la libération qui apporte joie et sourires. Éveil rend tout caoutchouteux autour, combat en mode cartoon Looney Tunes.",
    firstAppearance: "Chapitre 1 / Épisode 1 (comme Gomu Gomu), Révélation Chapitre 1044",
    typeDetail: "sun",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Hito Hito no Mi": {
    emoji: "🧑", color: "#EC4899", element: "human",
    particles: ["💫", "✨", "⭐"],
    image: "/images/fruits/hito-hito-no-mi.jpg",
    detailedDescription: "Fruit du démon type human qui donne pouvoir unique lié à human. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "human",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Hana Hana no Mi": {
    emoji: "🌸", color: "#EC4899", element: "flower",
    particles: ["🌺", "🌹", "🌷", "💐", "🪻"],
    image: "/images/fruits/hana-hana.jpg",
    detailedDescription: "Fleurit parties du corps partout, même géantes. Robin peut faire corps démoniaque éveillé Demonio Fleur avec ailes.",
    firstAppearance: "Chapitre 114",
    typeDetail: "flower",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Yomi Yomi no Mi": {
    emoji: "💀", color: "#6B7280", element: "soul",
    particles: ["👻", "💀", "☠️", "🕯️"],
    image: "/images/fruits/yomi-yomi-no-mi.jpg",
    detailedDescription: "Fruit du démon type soul qui donne pouvoir unique lié à soul. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "soul",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Yami Yami no Mi & Gura Gura no Mi": {
    emoji: "🌑", color: "#1F2937", element: "darkness",
    particles: ["🌑", "🕳️", "💥", "⚡", "🌋"],
    image: "/images/fruits/yami-yami-no-mi-&-gura-gura-no-mi.jpg",
    detailedDescription: "Fruit du démon type darkness qui donne pouvoir unique lié à darkness. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "darkness",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Soru Soru no Mi": {
    emoji: "👻", color: "#BE185D", element: "soul",
    particles: ["👻", "💫", "✨", "🕯️", "🫧"],
    image: "/images/fruits/soru-soru.jpg",
    detailedDescription: "Big Mom vole fragments d'âme et crée Homies vivants. Si peur, vole durée de vie entière.",
    firstAppearance: "Chapitre 651",
    typeDetail: "soul",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Uo Uo no Mi, Model: Seiryu": {
    emoji: "🐉", color: "#7C3AED", element: "dragon",
    particles: ["🐉", "🔥", "⚡", "💎", "🌀"],
    image: "/images/fruits/uo-uo-no-mi-model-seiryu.jpg",
    detailedDescription: "Fruit du démon type dragon qui donne pouvoir unique lié à dragon. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "dragon",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Ope Ope no Mi": {
    emoji: "🔪", color: "#15803D", element: "operation",
    particles: ["🔪", "💊", "🩺", "⚛️", "🔵"],
    image: "/images/fruits/ope-ope.jpg",
    detailedDescription: "Fruit ultime qui vaut 5 milliards, peut donner jeunesse éternelle via opération immortalité qui tue utilisateur. Law fait ROOM où il est dieu chirurgien.",
    firstAppearance: "Chapitre 505",
    typeDetail: "operation",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Jiki Jiki no Mi": {
    emoji: "🧲", color: "#DC2626", element: "magnet",
    particles: ["🧲", "⚡", "🔩", "⚙️", "🫧"],
    image: "/images/fruits/jiki-jiki-no-mi.jpg",
    detailedDescription: "Fruit du démon type magnet qui donne pouvoir unique lié à magnet. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "magnet",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Mero Mero no Mi": {
    emoji: "❤️", color: "#DB2777", element: "love",
    particles: ["❤️", "💕", "💖", "💗", "💝"],
    image: "/images/fruits/mero-mero-no-mi.jpg",
    detailedDescription: "Fruit du démon type love qui donne pouvoir unique lié à love. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "love",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Suna Suna no Mi": {
    emoji: "🏜️", color: "#92400E", element: "sand",
    particles: ["🏜️", "💨", "🌀", "⏳"],
    image: "/images/fruits/suna-suna-no-mi.jpg",
    detailedDescription: "Fruit du démon type sand qui donne pouvoir unique lié à sand. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "sand",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Ito Ito no Mi": {
    emoji: "🕸️", color: "#F59E0B", element: "string",
    particles: ["🕸️", "🧵", "✨", "💫"],
    image: "/images/fruits/ito-ito-no-mi.jpg",
    detailedDescription: "Fruit du démon type string qui donne pouvoir unique lié à string. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "string",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Magu Magu no Mi": {
    emoji: "🌋", color: "#DC2626", element: "magma",
    particles: ["🌋", "🔥", "💥", "♨️"],
    image: "/images/fruits/magu-magu-no-mi.jpg",
    detailedDescription: "Fruit du démon type magma qui donne pouvoir unique lié à magma. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "magma",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Hie Hie no Mi": {
    emoji: "❄️", color: "#3B82F6", element: "ice",
    particles: ["❄️", "🧊", "💎", "💠", "🌨️"],
    image: "/images/fruits/hie-hie-no-mi.jpg",
    detailedDescription: "Fruit du démon type ice qui donne pouvoir unique lié à ice. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "ice",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Pika Pika no Mi": {
    emoji: "⚡", color: "#FBBF24", element: "light",
    particles: ["⚡", "✨", "🌟", "💫", "🔆"],
    image: "/images/fruits/pika-pika-no-mi.jpg",
    detailedDescription: "Fruit du démon type light qui donne pouvoir unique lié à light. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "light",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Goro Goro no Mi": {
    emoji: "⚡", color: "#FBBF24", element: "lightning",
    particles: ["⚡", "🌩️", "💥", "⚡", "✨"],
    image: "/images/fruits/goro-goro-no-mi.jpg",
    detailedDescription: "Fruit du démon type lightning qui donne pouvoir unique lié à lightning. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "lightning",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Moku Moku no Mi": {
    emoji: "💨", color: "#9CA3AF", element: "smoke",
    particles: ["💨", "🌫️", "🫧", "☁️"],
    image: "/images/fruits/moku-moku-no-mi.jpg",
    detailedDescription: "Fruit du démon type smoke qui donne pouvoir unique lié à smoke. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "smoke",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Gura Gura no Mi": {
    emoji: "💥", color: "#F8FAFC", element: "quake",
    particles: ["💥", "⚡", "🌋", "🌀", "💢"],
    image: "/images/fruits/gura-gura.jpg",
    detailedDescription: "Paramecia le plus fort, peut détruire monde avec tremblements. Whitebeard l'avait, Teach l'a volé à Marineford en mettant drap noir mystérieux.",
    firstAppearance: "Chapitre 552",
    typeDetail: "quake",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Neko Neko no Mi, Model: Leopard": {
    emoji: "🐆", color: "#F59E0B", element: "leopard",
    particles: ["🐆", "🐾", "⚡", "💫"],
    image: "/images/fruits/neko-neko-no-mi-model-leopard.jpg",
    detailedDescription: "Fruit du démon type leopard qui donne pouvoir unique lié à leopard. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "leopard",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Bara Bara no Mi": {
    emoji: "✂️", color: "#EF4444", element: "chop",
    particles: ["✂️", "🧩", "💫", "✨"],
    image: "/images/fruits/bara-bara-no-mi.jpg",
    detailedDescription: "Fruit du démon type chop qui donne pouvoir unique lié à chop. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "chop",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Mera Mera no Mi": {
    emoji: "🔥", color: "#F97316", element: "fire",
    particles: ["🔥", "💥", "♨️", "✨", "🌟"],
    image: "/images/fruits/mera-mera.jpg",
    detailedDescription: "Flamme qui brûle. Ace puis Sabo. Sabo combine avec Haki et Ryusoken poing dragon.",
    firstAppearance: "Chapitre 158",
    typeDetail: "fire",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Nikyu Nikyu no Mi": {
    emoji: "🐾", color: "#F9A8D4", element: "paw",
    particles: ["🐾", "💨", "✨", "🌸"],
    image: "/images/fruits/nikyu-nikyu-no-mi.jpg",
    detailedDescription: "Fruit du démon type paw qui donne pouvoir unique lié à paw. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "paw",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Horu Horu no Mi": {
    emoji: "💉", color: "#A78BFA", element: "hormone",
    particles: ["💉", "💊", "✨", "🌈"],
    image: "/images/fruits/horu-horu-no-mi.jpg",
    detailedDescription: "Fruit du démon type hormone qui donne pouvoir unique lié à hormone. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "hormone",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Zushi Zushi no Mi": {
    emoji: "🪨", color: "#6B7280", element: "gravity",
    particles: ["🪨", "☄️", "💫", "🌌"],
    image: "/images/fruits/zushi-zushi-no-mi.jpg",
    detailedDescription: "Fruit du démon type gravity qui donne pouvoir unique lié à gravity. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "gravity",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Mori Mori no Mi": {
    emoji: "🌳", color: "#16A34A", element: "forest",
    particles: ["🌳", "🍃", "🌿", "✨"],
    image: "/images/fruits/mori-mori-no-mi.jpg",
    detailedDescription: "Fruit du démon type forest qui donne pouvoir unique lié à forest. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "forest",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Hito Hito no Mi, Model: Daibutsu": {
    emoji: "🪷", color: "#FBBF24", element: "buddha",
    particles: ["🪷", "✨", "🙏", "💛"],
    image: "/images/fruits/hito-hito-no-mi-model-daibutsu.jpg",
    detailedDescription: "Fruit du démon type buddha qui donne pouvoir unique lié à buddha. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "buddha",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Tori Tori no Mi, Model: Phoenix": {
    emoji: "🦅", color: "#38BDF8", element: "phoenix",
    particles: ["🦅", "🔥", "💙", "✨"],
    image: "/images/fruits/tori-tori-no-mi-model-phoenix.jpg",
    detailedDescription: "Fruit du démon type phoenix qui donne pouvoir unique lié à phoenix. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "phoenix",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Mochi Mochi no Mi": {
    emoji: "🍡", color: "#F472B6", element: "mochi",
    particles: ["🍡", "✨", "💫", "🤍"],
    image: "/images/fruits/mochi-mochi-no-mi.jpg",
    detailedDescription: "Fruit du démon type mochi qui donne pouvoir unique lié à mochi. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "mochi",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Ryu Ryu no Mi, Model: Pteranodon": {
    emoji: "🦖", color: "#0F172A", element: "pteranodon",
    particles: ["🦖", "🔥", "💨", "🌋"],
    image: "/images/fruits/ryu-ryu-no-mi-model-pteranodon.jpg",
    detailedDescription: "Fruit du démon type pteranodon qui donne pouvoir unique lié à pteranodon. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "pteranodon",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Inu Inu no Mi, Model: Okuchi no Makami": {
    emoji: "🐺", color: "#FDE68A", element: "wolf god",
    particles: ["🐺", "❄️", "✨", "🌙"],
    image: "/images/fruits/inu-inu-no-mi-model-okuchi-no-makami.jpg",
    detailedDescription: "Fruit du démon type wolf god qui donne pouvoir unique lié à wolf god. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "wolf god",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Nomi Nomi no Mi": {
    emoji: "🧠", color: "#22D3EE", element: "brain",
    particles: ["🧠", "💡", "✨", "🤖"],
    image: "/images/fruits/nomi-nomi-no-mi.jpg",
    detailedDescription: "Fruit du démon type brain qui donne pouvoir unique lié à brain. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "brain",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Horo Horo no Mi": {
    emoji: "👻", color: "#EC4899", element: "ghost",
    particles: ["👻", "💀", "🖤", "✨"],
    image: "/images/fruits/horo-horo-no-mi.jpg",
    detailedDescription: "Fruit du démon type ghost qui donne pouvoir unique lié à ghost. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "ghost",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Toshi Toshi no Mi": {
    emoji: "⏳", color: "#F472B6", element: "age",
    particles: ["⏳", "👶", "👵", "✨"],
    image: "/images/fruits/toshi-toshi-no-mi.jpg",
    detailedDescription: "Fruit du démon type age qui donne pouvoir unique lié à age. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "age",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Uo Uo no Mi, Model: Seiryu (Artificial)": {
    emoji: "🐉", color: "#FCA5A5", element: "artificial dragon",
    particles: ["🐉", "🌸", "💫", "✨"],
    image: "/images/fruits/uo-uo-no-mi-model-seiryu-(artificial).jpg",
    detailedDescription: "Fruit du démon type artificial dragon qui donne pouvoir unique lié à artificial dragon. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "artificial dragon",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "SMILE (Failed)": {
    emoji: "😿", color: "#6B7280", element: "failed smile",
    particles: ["😹", "💔", "✨"],
    image: "/images/fruits/smile-(failed).jpg",
    detailedDescription: "Fruit du démon type failed smile qui donne pouvoir unique lié à failed smile. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "failed smile",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Kage Kage no Mi": {
    emoji: "👤", color: "#4B5563", element: "shadow",
    particles: ["👤", "🌑", "👻", "✨"],
    image: "/images/fruits/kage-kage-no-mi.jpg",
    detailedDescription: "Fruit du démon type shadow qui donne pouvoir unique lié à shadow. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "shadow",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Bisu Bisu no Mi": {
    emoji: "🍪", color: "#D97706", element: "biscuit",
    particles: ["🍪", "🛡️", "✨"],
    image: "/images/fruits/bisu-bisu-no-mi.jpg",
    detailedDescription: "Fruit du démon type biscuit qui donne pouvoir unique lié à biscuit. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "biscuit",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Shibo Shibo no Mi": {
    emoji: "🧃", color: "#EC4899", element: "juice",
    particles: ["🧃", "💧", "✨"],
    image: "/images/fruits/shibo-shibo-no-mi.jpg",
    detailedDescription: "Fruit du démon type juice qui donne pouvoir unique lié à juice. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "juice",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Ryu Ryu no Mi, Model: Brachiosaurus": {
    emoji: "🦕", color: "#EAB308", element: "brachio",
    particles: ["🦕", "💥", "🔥"],
    image: "/images/fruits/ryu-ryu-no-mi-model-brachiosaurus.jpg",
    detailedDescription: "Fruit du démon type brachio qui donne pouvoir unique lié à brachio. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "brachio",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Zou Zou no Mi, Model: Mammoth": {
    emoji: "🦣", color: "#78716C", element: "mammoth",
    particles: ["🦣", "❄️", "💥"],
    image: "/images/fruits/zou-zou-no-mi-model-mammoth.jpg",
    detailedDescription: "Fruit du démon type mammoth qui donne pouvoir unique lié à mammoth. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "mammoth",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Neko Neko no Mi, Model: Saber Tiger": {
    emoji: "🐯", color: "#7C2D92", element: "saber tiger",
    particles: ["🐯", "🐾", "⚡"],
    image: "/images/fruits/neko-neko-no-mi-model-saber-tiger.jpg",
    detailedDescription: "Fruit du démon type saber tiger qui donne pouvoir unique lié à saber tiger. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "saber tiger",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Ryu Ryu no Mi, Model: Pachycephalosaurus": {
    emoji: "🦖", color: "#F472B6", element: "pachy",
    particles: ["🦖", "💥", "💫"],
    image: "/images/fruits/ryu-ryu-no-mi-model-pachycephalosaurus.jpg",
    detailedDescription: "Fruit du démon type pachy qui donne pouvoir unique lié à pachy. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "pachy",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Fuku Fuku no Mi": {
    emoji: "👘", color: "#EA580C", element: "garment",
    particles: ["👘", "🍃", "✨"],
    image: "/images/fruits/fuku-fuku-no-mi.jpg",
    detailedDescription: "Fruit du démon type garment qui donne pouvoir unique lié à garment. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "garment",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Maki Maki no Mi": {
    emoji: "📜", color: "#6B7280", element: "scroll",
    particles: ["📜", "🌀", "✨"],
    image: "/images/fruits/maki-maki-no-mi.jpg",
    detailedDescription: "Fruit du démon type scroll qui donne pouvoir unique lié à scroll. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "scroll",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Hebi Hebi no Mi, Model: Yamata no Orochi": {
    emoji: "🐍", color: "#581C87", element: "yamata",
    particles: ["🐍", "🔥", "💀"],
    image: "/images/fruits/hebi-hebi-no-mi-model-yamata-no-orochi.jpg",
    detailedDescription: "Fruit du démon type yamata qui donne pouvoir unique lié à yamata. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "yamata",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Bari Bari no Mi": {
    emoji: "🛡️", color: "#22C55E", element: "barrier",
    particles: ["🛡️", "✨", "💚"],
    image: "/images/fruits/bari-bari-no-mi.jpg",
    detailedDescription: "Fruit du démon type barrier qui donne pouvoir unique lié à barrier. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "barrier",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Bane Bane no Mi": {
    emoji: "🦘", color: "#A3A3A3", element: "spring",
    particles: ["🦘", "💨", "✨"],
    image: "/images/fruits/bane-bane-no-mi.jpg",
    detailedDescription: "Fruit du démon type spring qui donne pouvoir unique lié à spring. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "spring",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Giro Giro no Mi": {
    emoji: "👁️", color: "#A78BFA", element: "glare",
    particles: ["👁️", "💜", "✨"],
    image: "/images/fruits/giro-giro-no-mi.jpg",
    detailedDescription: "Fruit du démon type glare qui donne pouvoir unique lié à glare. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "glare",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Hobi Hobi no Mi": {
    emoji: "🧸", color: "#F472B6", element: "hobby",
    particles: ["🧸", "💔", "✨"],
    image: "/images/fruits/hobi-hobi-no-mi.jpg",
    detailedDescription: "Fruit du démon type hobby qui donne pouvoir unique lié à hobby. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "hobby",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Ishi Ishi no Mi": {
    emoji: "🗿", color: "#78716C", element: "stone",
    particles: ["🗿", "💥", "🪨"],
    image: "/images/fruits/ishi-ishi-no-mi.jpg",
    detailedDescription: "Fruit du démon type stone qui donne pouvoir unique lié à stone. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "stone",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Hira Hira no Mi": {
    emoji: "🚩", color: "#DC2626", element: "ripple",
    particles: ["🚩", "✨", "💫"],
    image: "/images/fruits/hira-hira-no-mi.jpg",
    detailedDescription: "Fruit du démon type ripple qui donne pouvoir unique lié à ripple. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "ripple",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Kobu Kobu no Mi": {
    emoji: "📣", color: "#BE185D", element: "encourage",
    particles: ["📣", "🔥", "✨"],
    image: "/images/fruits/kobu-kobu-no-mi.jpg",
    detailedDescription: "Fruit du démon type encourage qui donne pouvoir unique lié à encourage. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "encourage",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Susu Susu no Mi": {
    emoji: "🦅", color: "#1F2937", element: "soot",
    particles: ["🦅", "🌑", "✨"],
    image: "/images/fruits/susu-susu-no-mi.jpg",
    detailedDescription: "Fruit du démon type soot qui donne pouvoir unique lié à soot. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "soot",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Oshi Oshi no Mi": {
    emoji: "👊", color: "#84CC16", element: "push",
    particles: ["👊", "🪨", "✨"],
    image: "/images/fruits/oshi-oshi-no-mi.jpg",
    detailedDescription: "Fruit du démon type push qui donne pouvoir unique lié à push. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "push",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Ushi Ushi no Mi, Model: Gyuki": {
    emoji: "🕷️", color: "#1F2937", element: "gyuki",
    particles: ["🕷️", "🐂", "💀"],
    image: "/images/fruits/ushi-ushi-no-mi-model-gyuki.jpg",
    detailedDescription: "Fruit du démon type gyuki qui donne pouvoir unique lié à gyuki. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "gyuki",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Uta Uta no Mi": {
    emoji: "🎤", color: "#F472B6", element: "song",
    particles: ["🎤", "🎶", "✨", "💖"],
    image: "/images/fruits/uta-uta-no-mi.jpg",
    detailedDescription: "Fruit du démon type song qui donne pouvoir unique lié à song. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "song",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Ryu Ryu no Mi, Model: Allosaurus": {
    emoji: "🦖", color: "#DC2626", element: "allo",
    particles: ["🦖", "🔥", "💥"],
    image: "/images/fruits/ryu-ryu-no-mi-model-allosaurus.jpg",
    detailedDescription: "Fruit du démon type allo qui donne pouvoir unique lié à allo. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "allo",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Sube Sube no Mi": {
    emoji: "✨", color: "#F9A8D4", element: "slip",
    particles: ["✨", "💖", "🧴"],
    image: "/images/fruits/sube-sube-no-mi.jpg",
    detailedDescription: "Fruit du démon type slip qui donne pouvoir unique lié à slip. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "slip",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Supa Supa no Mi": {
    emoji: "🔪", color: "#A3A3A3", element: "blade",
    particles: ["🔪", "⚔️", "✨"],
    image: "/images/fruits/supa-supa-no-mi.jpg",
    detailedDescription: "Fruit du démon type blade qui donne pouvoir unique lié à blade. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "blade",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Mane Mane no Mi": {
    emoji: "🎭", color: "#F472B6", element: "clone",
    particles: ["🎭", "👥", "✨"],
    image: "/images/fruits/mane-mane-no-mi.jpg",
    detailedDescription: "Fruit du démon type clone qui donne pouvoir unique lié à clone. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "clone",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Doru Doru no Mi": {
    emoji: "🕯️", color: "#FBBF24", element: "wax",
    particles: ["🕯️", "🔒", "✨"],
    image: "/images/fruits/doru-doru-no-mi.jpg",
    detailedDescription: "Fruit du démon type wax qui donne pouvoir unique lié à wax. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "wax",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Doku Doku no Mi": {
    emoji: "☠️", color: "#7C3AED", element: "poison",
    particles: ["☠️", "🐍", "💜"],
    image: "/images/fruits/doku-doku-no-mi.jpg",
    detailedDescription: "Fruit du démon type poison qui donne pouvoir unique lié à poison. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "poison",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Suke Suke no Mi": {
    emoji: "👻", color: "#1F2937", element: "clear",
    particles: ["👻", "🫥", "✨"],
    image: "/images/fruits/suke-suke-no-mi.jpg",
    detailedDescription: "Fruit du démon type clear qui donne pouvoir unique lié à clear. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "clear",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Fuwa Fuwa no Mi": {
    emoji: "🎈", color: "#EAB308", element: "float",
    particles: ["🎈", "🏝️", "✨"],
    image: "/images/fruits/fuwa-fuwa-no-mi.jpg",
    detailedDescription: "Fruit du démon type float qui donne pouvoir unique lié à float. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "float",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Ori Ori no Mi": {
    emoji: "⛓️", color: "#EC4899", element: "bind",
    particles: ["⛓️", "🔗", "✨"],
    image: "/images/fruits/ori-ori-no-mi.jpg",
    detailedDescription: "Fruit du démon type bind qui donne pouvoir unique lié à bind. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "bind",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Kame Kame no Mi": {
    emoji: "🐢", color: "#FDE68A", element: "turtle",
    particles: ["🐢", "🛡️", "✨"],
    image: "/images/fruits/kame-kame-no-mi.jpg",
    detailedDescription: "Fruit du démon type turtle qui donne pouvoir unique lié à turtle. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "turtle",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Shiro Shiro no Mi": {
    emoji: "🏰", color: "#1C1917", element: "castle",
    particles: ["🏰", "💂", "✨"],
    image: "/images/fruits/shiro-shiro-no-mi.jpg",
    detailedDescription: "Fruit du démon type castle qui donne pouvoir unique lié à castle. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "castle",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Wara Wara no Mi": {
    emoji: "🌾", color: "#FBBF24", element: "straw",
    particles: ["🌾", "🪆", "✨"],
    image: "/images/fruits/wara-wara-no-mi.jpg",
    detailedDescription: "Fruit du démon type straw qui donne pouvoir unique lié à straw. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "straw",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Oto Oto no Mi": {
    emoji: "🥁", color: "#A3A3A3", element: "sound",
    particles: ["🥁", "🎵", "💥"],
    image: "/images/fruits/oto-oto-no-mi.jpg",
    detailedDescription: "Fruit du démon type sound qui donne pouvoir unique lié à sound. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "sound",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Fude Fude no Mi": {
    emoji: "🖌️", color: "#1F2937", element: "brush",
    particles: ["🖌️", "🎨", "✨"],
    image: "/images/fruits/fude-fude-no-mi.jpg",
    detailedDescription: "Fruit du démon type brush qui donne pouvoir unique lié à brush. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "brush",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Juku Juku no Mi": {
    emoji: "🍑", color: "#EC4899", element: "ripe",
    particles: ["🍑", "⏳", "✨"],
    image: "/images/fruits/juku-juku-no-mi.jpg",
    detailedDescription: "Fruit du démon type ripe qui donne pouvoir unique lié à ripe. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "ripe",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Kira Kira no Mi": {
    emoji: "💎", color: "#A3A3A3", element: "diamond",
    particles: ["💎", "✨", "💠"],
    image: "/images/fruits/kira-kira-no-mi.jpg",
    detailedDescription: "Fruit du démon type diamond qui donne pouvoir unique lié à diamond. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "diamond",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Woshu Woshu no Mi": {
    emoji: "👚", color: "#A78BFA", element: "wash",
    particles: ["👚", "🧼", "✨"],
    image: "/images/fruits/woshu-woshu-no-mi.jpg",
    detailedDescription: "Fruit du démon type wash qui donne pouvoir unique lié à wash. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "wash",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Yuki Yuki no Mi": {
    emoji: "❄️", color: "#E0F2FE", element: "snow",
    particles: ["❄️", "⛄", "✨"],
    image: "/images/fruits/yuki-yuki-no-mi.jpg",
    detailedDescription: "Fruit du démon type snow qui donne pouvoir unique lié à snow. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "snow",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Gasu Gasu no Mi": {
    emoji: "💨", color: "#A78BFA", element: "gas",
    particles: ["💨", "☠️", "🟣"],
    image: "/images/fruits/gasu-gasu-no-mi.jpg",
    detailedDescription: "Fruit du démon type gas qui donne pouvoir unique lié à gas. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "gas",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Mira Mira no Mi": {
    emoji: "🪞", color: "#EC4899", element: "mirror",
    particles: ["🪞", "🪞", "✨"],
    image: "/images/fruits/mira-mira-no-mi.jpg",
    detailedDescription: "Fruit du démon type mirror qui donne pouvoir unique lié à mirror. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "mirror",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Nui Nui no Mi": {
    emoji: "🧵", color: "#84CC16", element: "stitch",
    particles: ["🧵", "🪡", "✨"],
    image: "/images/fruits/nui-nui-no-mi.jpg",
    detailedDescription: "Fruit du démon type stitch qui donne pouvoir unique lié à stitch. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "stitch",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
  "Chiyu Chiyu no Mi": {
    emoji: "💚", color: "#F9A8D4", element: "heal",
    particles: ["💚", "🩹", "✨"],
    image: "/images/fruits/chiyu-chiyu-no-mi.jpg",
    detailedDescription: "Fruit du démon type heal qui donne pouvoir unique lié à heal. Perte de capacité à nager, faiblesse eau de mer et Seastone.",
    firstAppearance: "Grand Line",
    typeDetail: "heal",
    weaknesses: ["Eau de mer", "Seastone", "Haki"]
  },
};

export const defaultFruitVisual: FruitVisual = {
  emoji: "🍎", color: "#EC4899", element: "unknown",
  particles: ["✨", "💫", "⭐"],
  image: "/images/fruits/default.jpg",
  detailedDescription: "Fruit du démon inconnu, pouvoir mystérieux.",
  firstAppearance: "Inconnu"
};

export function getFruitVisual(fruitName: string): FruitVisual {
  return fruitVisuals[fruitName] || defaultFruitVisual;
}
