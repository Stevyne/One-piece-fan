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
};

export const defaultFruitVisual: FruitVisual = {
  emoji: "🍎", color: "#EC4899", element: "unknown",
  particles: ["✨", "💫", "⭐"]
};

export function getFruitVisual(fruitName: string): FruitVisual {
  return fruitVisuals[fruitName] || defaultFruitVisual;
}
