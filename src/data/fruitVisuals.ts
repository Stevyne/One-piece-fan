export interface FruitVisual {
  emoji: string;
  color: string;
  element: string;
  particles: string[];
}

export const fruitVisuals: Record<string, FruitVisual> = {
  "Hito Hito no Mi, Model: Nika": {
    emoji: "☀️", color: "#FFD700", element: "sun",
    particles: ["✨", "🌟", "⭐", "💫", "🔆", "🧦"]
  },
  "Hito Hito no Mi": {
    emoji: "🧑", color: "#EC4899", element: "human",
    particles: ["💫", "✨", "⭐"]
  },
  "Hana Hana no Mi": {
    emoji: "🌸", color: "#EC4899", element: "flower",
    particles: ["🌺", "🌹", "🌷", "💐", "🪻"]
  },
  "Yomi Yomi no Mi": {
    emoji: "💀", color: "#6B7280", element: "soul",
    particles: ["👻", "💀", "☠️", "🕯️"]
  },
  "Yami Yami no Mi & Gura Gura no Mi": {
    emoji: "🌑", color: "#1F2937", element: "darkness",
    particles: ["🌑", "🕳️", "💥", "⚡", "🌋"]
  },
  "Soru Soru no Mi": {
    emoji: "👻", color: "#BE185D", element: "soul",
    particles: ["👻", "💫", "✨", "🕯️", "🫧"]
  },
  "Uo Uo no Mi, Model: Seiryu": {
    emoji: "🐉", color: "#7C3AED", element: "dragon",
    particles: ["🐉", "🔥", "⚡", "💎", "🌀"]
  },
  "Ope Ope no Mi": {
    emoji: "🔪", color: "#15803D", element: "operation",
    particles: ["🔪", "💊", "🩺", "⚛️", "🔵"]
  },
  "Jiki Jiki no Mi": {
    emoji: "🧲", color: "#DC2626", element: "magnet",
    particles: ["🧲", "⚡", "🔩", "⚙️", "🫧"]
  },
  "Mero Mero no Mi": {
    emoji: "❤️", color: "#DB2777", element: "love",
    particles: ["❤️", "💕", "💖", "💗", "💝"]
  },
  "Suna Suna no Mi": {
    emoji: "🏜️", color: "#92400E", element: "sand",
    particles: ["🏜️", "💨", "🌀", "⏳"]
  },
  "Ito Ito no Mi": {
    emoji: "🕸️", color: "#F59E0B", element: "string",
    particles: ["🕸️", "🧵", "✨", "💫"]
  },
  "Magu Magu no Mi": {
    emoji: "🌋", color: "#DC2626", element: "magma",
    particles: ["🌋", "🔥", "💥", "♨️"]
  },
  "Hie Hie no Mi": {
    emoji: "❄️", color: "#3B82F6", element: "ice",
    particles: ["❄️", "🧊", "💎", "💠", "🌨️"]
  },
  "Pika Pika no Mi": {
    emoji: "⚡", color: "#FBBF24", element: "light",
    particles: ["⚡", "✨", "🌟", "💫", "🔆"]
  },
  "Goro Goro no Mi": {
    emoji: "⚡", color: "#FBBF24", element: "lightning",
    particles: ["⚡", "🌩️", "💥", "⚡", "✨"]
  },
  "Moku Moku no Mi": {
    emoji: "💨", color: "#9CA3AF", element: "smoke",
    particles: ["💨", "🌫️", "🫧", "☁️"]
  },
  "Gura Gura no Mi": {
    emoji: "💥", color: "#F8FAFC", element: "quake",
    particles: ["💥", "⚡", "🌋", "🌀", "💢"]
  },
  "Neko Neko no Mi, Model: Leopard": {
    emoji: "🐆", color: "#F59E0B", element: "leopard",
    particles: ["🐆", "🐾", "⚡", "💫"]
  },
  "Bara Bara no Mi": {
    emoji: "✂️", color: "#EF4444", element: "chop",
    particles: ["✂️", "🧩", "💫", "✨"]
  },
  "Mera Mera no Mi": {
    emoji: "🔥", color: "#F97316", element: "fire",
    particles: ["🔥", "💥", "♨️", "✨", "🌟"]
  },
  // New v1.1
  "Nikyu Nikyu no Mi": {
    emoji: "🐾", color: "#F9A8D4", element: "paw",
    particles: ["🐾", "💨", "✨", "🌸"]
  },
  "Horu Horu no Mi": {
    emoji: "💉", color: "#A78BFA", element: "hormone",
    particles: ["💉", "💊", "✨", "🌈"]
  },
  "Zushi Zushi no Mi": {
    emoji: "🪨", color: "#6B7280", element: "gravity",
    particles: ["🪨", "☄️", "💫", "🌌"]
  },
  "Mori Mori no Mi": {
    emoji: "🌳", color: "#16A34A", element: "forest",
    particles: ["🌳", "🍃", "🌿", "✨"]
  },
  "Hito Hito no Mi, Model: Daibutsu": {
    emoji: "🪷", color: "#FBBF24", element: "buddha",
    particles: ["🪷", "✨", "🙏", "💛"]
  },
  "Tori Tori no Mi, Model: Phoenix": {
    emoji: "🦅", color: "#38BDF8", element: "phoenix",
    particles: ["🦅", "🔥", "💙", "✨"]
  },
  "Mochi Mochi no Mi": {
    emoji: "🍡", color: "#F472B6", element: "mochi",
    particles: ["🍡", "✨", "💫", "🤍"]
  },
  "Ryu Ryu no Mi, Model: Pteranodon": {
    emoji: "🦖", color: "#0F172A", element: "pteranodon",
    particles: ["🦖", "🔥", "💨", "🌋"]
  },
  "Inu Inu no Mi, Model: Okuchi no Makami": {
    emoji: "🐺", color: "#FDE68A", element: "wolf god",
    particles: ["🐺", "❄️", "✨", "🌙"]
  },
  "Nomi Nomi no Mi": {
    emoji: "🧠", color: "#22D3EE", element: "brain",
    particles: ["🧠", "💡", "✨", "🤖"]
  },
  "Horo Horo no Mi": {
    emoji: "👻", color: "#EC4899", element: "ghost",
    particles: ["👻", "💀", "🖤", "✨"]
  },
  "Toshi Toshi no Mi": {
    emoji: "⏳", color: "#F472B6", element: "age",
    particles: ["⏳", "👶", "👵", "✨"]
  },
  "Uo Uo no Mi, Model: Seiryu (Artificial)": {
    emoji: "🐉", color: "#FCA5A5", element: "artificial dragon",
    particles: ["🐉", "🌸", "💫", "✨"]
  },
  "SMILE (Failed)": {
    emoji: "😿", color: "#6B7280", element: "failed smile",
    particles: ["😹", "💔", "✨"]
  },
  // Batch 3 v1.2
  "Kage Kage no Mi": { emoji: "👤", color: "#4B5563", element: "shadow", particles: ["👤", "🌑", "👻", "✨"] },
  "Bisu Bisu no Mi": { emoji: "🍪", color: "#D97706", element: "biscuit", particles: ["🍪", "🛡️", "✨"] },
  "Shibo Shibo no Mi": { emoji: "🧃", color: "#EC4899", element: "juice", particles: ["🧃", "💧", "✨"] },
  "Ryu Ryu no Mi, Model: Brachiosaurus": { emoji: "🦕", color: "#EAB308", element: "brachio", particles: ["🦕", "💥", "🔥"] },
  "Zou Zou no Mi, Model: Mammoth": { emoji: "🦣", color: "#78716C", element: "mammoth", particles: ["🦣", "❄️", "💥"] },
  "Neko Neko no Mi, Model: Saber Tiger": { emoji: "🐯", color: "#7C2D92", element: "saber tiger", particles: ["🐯", "🐾", "⚡"] },
  "Ryu Ryu no Mi, Model: Pachycephalosaurus": { emoji: "🦖", color: "#F472B6", element: "pachy", particles: ["🦖", "💥", "💫"] },
  "Fuku Fuku no Mi": { emoji: "👘", color: "#EA580C", element: "garment", particles: ["👘", "🍃", "✨"] },
  "Maki Maki no Mi": { emoji: "📜", color: "#6B7280", element: "scroll", particles: ["📜", "🌀", "✨"] },
  "Hebi Hebi no Mi, Model: Yamata no Orochi": { emoji: "🐍", color: "#581C87", element: "yamata", particles: ["🐍", "🔥", "💀"] },
  "Bari Bari no Mi": { emoji: "🛡️", color: "#22C55E", element: "barrier", particles: ["🛡️", "✨", "💚"] },
  "Bane Bane no Mi": { emoji: "🦘", color: "#A3A3A3", element: "spring", particles: ["🦘", "💨", "✨"] },
  "Giro Giro no Mi": { emoji: "👁️", color: "#A78BFA", element: "glare", particles: ["👁️", "💜", "✨"] },
  "Hobi Hobi no Mi": { emoji: "🧸", color: "#F472B6", element: "hobby", particles: ["🧸", "💔", "✨"] },
  "Ishi Ishi no Mi": { emoji: "🗿", color: "#78716C", element: "stone", particles: ["🗿", "💥", "🪨"] },
  "Hira Hira no Mi": { emoji: "🚩", color: "#DC2626", element: "ripple", particles: ["🚩", "✨", "💫"] },
  "Kobu Kobu no Mi": { emoji: "📣", color: "#BE185D", element: "encourage", particles: ["📣", "🔥", "✨"] },
  "Susu Susu no Mi": { emoji: "🦅", color: "#1F2937", element: "soot", particles: ["🦅", "🌑", "✨"] },
  "Oshi Oshi no Mi": { emoji: "👊", color: "#84CC16", element: "push", particles: ["👊", "🪨", "✨"] },
  "Ushi Ushi no Mi, Model: Gyuki": { emoji: "🕷️", color: "#1F2937", element: "gyuki", particles: ["🕷️", "🐂", "💀"] },
  "Uta Uta no Mi": { emoji: "🎤", color: "#F472B6", element: "song", particles: ["🎤", "🎶", "✨", "💖"] },
  "Ryu Ryu no Mi, Model: Allosaurus": { emoji: "🦖", color: "#DC2626", element: "allo", particles: ["🦖", "🔥", "💥"] },
  // Batch 4 v1.3 - 125 chars
  "Sube Sube no Mi": { emoji: "✨", color: "#F9A8D4", element: "slip", particles: ["✨", "💖", "🧴"] },
  "Supa Supa no Mi": { emoji: "🔪", color: "#A3A3A3", element: "blade", particles: ["🔪", "⚔️", "✨"] },
  "Mane Mane no Mi": { emoji: "🎭", color: "#F472B6", element: "clone", particles: ["🎭", "👥", "✨"] },
  "Doru Doru no Mi": { emoji: "🕯️", color: "#FBBF24", element: "wax", particles: ["🕯️", "🔒", "✨"] },
  "Doku Doku no Mi": { emoji: "☠️", color: "#7C3AED", element: "poison", particles: ["☠️", "🐍", "💜"] },
  "Suke Suke no Mi": { emoji: "👻", color: "#1F2937", element: "clear", particles: ["👻", "🫥", "✨"] },
  "Fuwa Fuwa no Mi": { emoji: "🎈", color: "#EAB308", element: "float", particles: ["🎈", "🏝️", "✨"] },
  "Ori Ori no Mi": { emoji: "⛓️", color: "#EC4899", element: "bind", particles: ["⛓️", "🔗", "✨"] },
  "Kame Kame no Mi": { emoji: "🐢", color: "#FDE68A", element: "turtle", particles: ["🐢", "🛡️", "✨"] },
  "Shiro Shiro no Mi": { emoji: "🏰", color: "#1C1917", element: "castle", particles: ["🏰", "💂", "✨"] },
  "Wara Wara no Mi": { emoji: "🌾", color: "#FBBF24", element: "straw", particles: ["🌾", "🪆", "✨"] },
  "Oto Oto no Mi": { emoji: "🥁", color: "#A3A3A3", element: "sound", particles: ["🥁", "🎵", "💥"] },
  // Batch 6 v1.4 - 180 chars + techniques
  "Fude Fude no Mi": { emoji: "🖌️", color: "#1F2937", element: "brush", particles: ["🖌️", "🎨", "✨"] },
  "Juku Juku no Mi": { emoji: "🍑", color: "#EC4899", element: "ripe", particles: ["🍑", "⏳", "✨"] },
  "Kira Kira no Mi": { emoji: "💎", color: "#A3A3A3", element: "diamond", particles: ["💎", "✨", "💠"] },
  "Woshu Woshu no Mi": { emoji: "👚", color: "#A78BFA", element: "wash", particles: ["👚", "🧼", "✨"] },
  "Yuki Yuki no Mi": { emoji: "❄️", color: "#E0F2FE", element: "snow", particles: ["❄️", "⛄", "✨"] },
  "Gasu Gasu no Mi": { emoji: "💨", color: "#A78BFA", element: "gas", particles: ["💨", "☠️", "🟣"] },
  "Mira Mira no Mi": { emoji: "🪞", color: "#EC4899", element: "mirror", particles: ["🪞", "🪞", "✨"] },
  "Nui Nui no Mi": { emoji: "🧵", color: "#84CC16", element: "stitch", particles: ["🧵", "🪡", "✨"] },
  "Chiyu Chiyu no Mi": { emoji: "💚", color: "#F9A8D4", element: "heal", particles: ["💚", "🩹", "✨"] },
};

export const defaultFruitVisual: FruitVisual = {
  emoji: "🍎", color: "#EC4899", element: "unknown",
  particles: ["✨", "💫", "⭐"]
};

export function getFruitVisual(fruitName: string): FruitVisual {
  return fruitVisuals[fruitName] || defaultFruitVisual;
}
