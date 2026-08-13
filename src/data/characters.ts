export interface Character {
  name: string;
  epithet: string;
  crew: string;
  role: string;
  bounty?: string;
  devilFruit?: {
    name: string;
    type: "Paramecia" | "Logia" | "Zoan";
    description: string;
    awakening?: boolean;
  };
  haki: {
    observation?: boolean;
    observationAdvanced?: boolean;
    armament?: boolean;
    armamentAdvanced?: boolean;
    conqueror?: boolean;
    conquerorAdvanced?: boolean;
  };
  techniques?: Array<{ name: string; description: string; type: string; emoji: string }>;
  description: string;
  story: string;
  color: string;
  image?: string;
}

export const characters: Character[] = [
  {
    name: "Monkey D. Luffy",
    epithet: "Straw Hat",
    crew: "Straw Hat Pirates",
    role: "Captain",
    bounty: "3,000,000,000",
    devilFruit: {
      name: "Hito Hito no Mi, Model: Nika",
      type: "Zoan",
      description: "Mythical Zoan - The Legendary Sun God Fruit. Turns the body into rubber with total freedom, bringing joy and smiles.",
      awakening: true,
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Gomu Gomu no Pistol", description: "Coup de poing étiré à grande vitesse.", type: "Devil Fruit", emoji: "👊" },
    { name: "Gear 2nd", description: "Pompe le sang pour super vitesse.", type: "Devil Fruit", emoji: "💨" },
    { name: "Gear 4th: Boundman", description: "Muscles gonflés Haki Armement, rebondissant.", type: "Devil Fruit", emoji: "🦍" },
    { name: "Gear 5th: Nika", description: "Éveil Dieu Soleil, liberté totale.", type: "Devil Fruit", emoji: "☀️" },
    { name: "Haoshoku Infusion", description: "Revêt ses attaques de Haki des Rois avancé.", type: "Haki", emoji: "👑" },
  ],
    description: "The future Pirate King. Luffy dreams of finding the One Piece and bringing freedom to the world.",
    story: "Born in Foosha Village in the East Blue, Monkey D. Luffy was inspired by the pirate Shanks to become a pirate at age 7. After accidentally eating the Gomu Gomu no Mi (later revealed as the Hito Hito no Mi, Model: Nika), he gained a rubber body. At age 17, he set sail from Foosha Village, gathering crew members across the East Blue. He defeated Arlong, entered the Grand Line, and progressively challenged the Seven Warlords, Emperors, and the World Government itself. At Enies Lobby he declared war on the world to save Robin. At Marineford he witnessed Ace's death, which devastated him. After two years of training with Rayleigh, he mastered all three types of Haki. In the New World, he defeated Doflamingo, crashed Big Mom's tea party, and ultimately defeated Kaido in Wano to become a Yonko. His fruit awakened during the Kaido fight, revealing its true nature as the Nika fruit - the most ridiculous power in the world, embodying the warrior of liberation.",
    color: "#EF4444",
    image: "/images/perso/luffy.jpg"
  },

  {
    name: "Roronoa Zoro",
    epithet: "Pirate Hunter",
    crew: "Straw Hat Pirates",
    role: "Swordsman",
    bounty: "1,111,000,000",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Santoryu: Oni Giri", description: "3 sabres, tranche démoniaque croisée.", type: "Sword", emoji: "⚔️" },
    { name: "Enma - King of Hell", description: "Enma draine Haki, tranche Kaido.", type: "Sword", emoji: "👹" },
    { name: "Ashura: Ichibugin", description: "Illusion 9 sabres, 3 têtes.", type: "Sword", emoji: "👁️" },
    { name: "Haoshoku Infusion", description: "Zoro éveille Conqueror et revêt ses lames.", type: "Haki", emoji: "👑" },
  ],
    description: "The three-sword style swordsman, dreams of becoming the world's greatest swordsman.",
    story: "Orphaned as a child, Zoro trained at a dojo in Shimotsuki Village where he developed his unique three-sword style (Santoryu). He made a promise to his childhood rival Kuina to become the world's greatest swordsman. After wandering as a bounty hunter, he joined Luffy as his first crewmate. Throughout their journey, he faced Mihawk at Baratie and lost, but earned the Warlord's respect. At Thriller Bark, he took all of Luffy's pain to save his captain - a moment that defined his loyalty. During the timeskip, he trained under Mihawk himself. In Wano, he unlocked Conqueror's Haki (Haoshoku) and Enma, the sword that scarred Kaido. He achieved his dream of scarring Kaido and proved himself among the greatest swordsmen alive.",
    color: "#22C55E",
    image: "/images/perso/zoro.jpg"
  },

  {
    name: "Nami",
    epithet: "Cat Burglar",
    crew: "Straw Hat Pirates",
    role: "Navigator",
    bounty: "366,000,000",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Brilliant navigator who maps the world. Dreams of creating a map of all the oceans.",
    story: "Orphaned by war as a baby, Nami and her sister Nojiko were adopted by Bellemere, a former Marine. When Arlong invaded Cocoyasi Village, Bellemere was killed protecting her daughters. Nami was forced to work as Arlong's cartographer for 8 years, secretly stealing to buy back her village. When Luffy defeated Arlong, she finally joined the Straw Hats for real. During the timeskip, she studied meteorology on Weatheria, mastering weather manipulation. She is considered one of the smartest characters in the series and her navigation skills have saved the crew countless times.",
    color: "#F97316",
    image: "/images/perso/nami.jpg"
  },

  {
    name: "Usopp",
    epithet: "God Usopp",
    crew: "Straw Hat Pirates",
    role: "Sniper",
    bounty: "300,000,000",
    haki: { observation: true, observationAdvanced: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Sniper and master of lies, dreams of becoming a brave warrior of the sea.",
    story: "Born in Syrup Village, Usopp is the son of Yasopp (Shanks' sniper). After his mother died, he told lies to cope and became the village storyteller. He joined Luffy after helping defeat Captain Kuro. His journey has been one of overcoming fear - at Water 7, he briefly left the crew over the Going Merry, but returned as Sogeking. At Dressrosa, he unlocked Observation Haki and was hailed as 'God Usopp' by the people. Despite his cowardice, he always finds courage when his friends need him most.",
    color: "#A3A5A3",
    image: "/images/perso/usopp.jpg",
  },

  {
    name: "Sanji",
    epithet: "Black Leg",
    crew: "Straw Hat Pirates",
    role: "Cook",
    bounty: "1,032,000,000",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Diable Jambe", description: "Jambe chauffée à rouge par friction.", type: "Martial Arts", emoji: "🔥" },
    { name: "Ifrit Jambe", description: "Exosquelette Germa + Haki, flamme bleue.", type: "Martial Arts", emoji: "💙" },
  ],
    description: "Kick-fighting cook, dreams of finding the All Blue.",
    story: "The third son of the Vinsmoke family (Germa 66), Sanji was abused by his father Judge and brothers for being normal. He escaped with help from Reiju and was taken in by Zeff at the Baratie, losing his leg to save Sanji during a storm. Zeff taught him cooking and fighting. He joined Luffy at the Baratie. At Whole Cake Island, he confronted his family and learned the truth about his mother Sora's sacrifice. He unlocked Conqueror's Haki and Ifrit Jambe during the Wano arc, combining his genetic modifications (Exoskeleton) with his Haki for devastating attacks.",
    color: "#FBBF24",
    image: "/images/perso/sanji.jpg"
  },

  {
    name: "Tony Tony Chopper",
    epithet: "Cotton Candy Lover",
    crew: "Straw Hat Pirates",
    role: "Doctor",
    bounty: "1,000",
    devilFruit: {
      name: "Hito Hito no Mi",
      type: "Zoan",
      description: "Human Human Fruit - Allows transformation into a human or human-reindeer hybrid forms.",
      awakening: true,
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Hito Hito no Mi - Ultimate", description: "Technique ultime du Hito Hito no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Reindeer doctor of the crew, dreams of curing every disease in the world.",
    story: "A reindeer who ate the Hito Hito no Mi, Chopper was ostracized by his herd. He was taken in by the quack doctor Hiluluk, who gave him his name and his cherry blossom flag. After Hiluluk's tragic death, Chopper trained under Dr. Kureha on Drum Island. When Luffy defeated Wapol, Chopper joined the crew as their doctor. During the timeskip, he studied medicine on Torino Island. In Wano, he developed his Monster Point further and his fruit eventually awakened, giving him new transformation forms.",
    color: "#EC4899",
    image: "/images/perso/chopper.jpg",
  },

  {
    name: "Nico Robin",
    epithet: "Devil Child",
    crew: "Straw Hat Pirates",
    role: "Archaeologist",
    bounty: "930,000,000",
    devilFruit: {
      name: "Hana Hana no Mi",
      type: "Paramecia",
      description: "Flower Flower Fruit - Allows sprouting copies of body parts anywhere.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Hana Hana no Mi - Ultimate", description: "Technique ultime du Hana Hana no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Sole survivor of Ohara, dreams of finding the True History of the Void Century.",
    story: "Born on the island of scholars Ohara, Robin became an archaeologist at age 8 and read the Poneglyphs. When the World Government issued a Buster Call that destroyed Ohara and killed all scholars, Robin was the sole survivor, saved by Aokiji. She spent 20 years on the run, betrayed by everyone she trusted. She joined Crocodile as Miss All Sunday, then the Straw Hats after Alabasta. At Enies Lobby, she finally found people who would fight the world for her - 'I want to live!' During the timeskip, she studied with the Revolutionaries. She continues deciphering the Road Poneglyphs to find Laugh Tale.",
    color: "#8B5CF6",
    image: "/images/perso/robin.jpg",
  },

  {
    name: "Franky",
    epithet: "Cyborg",
    crew: "Straw Hat Pirates",
    role: "Shipwright",
    bounty: "394,000,000",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Cyborg shipwright, dreams of building the dream ship that will sail around the world.",
    story: "Originally named Cutty Flam, Franky was a shipwright apprentice under Tom in Water 7. Tom built the Oro Jackson for Roger and was sentenced to death, but Franky couldn't save him. After being hit by the Sea Train, Franky rebuilt himself as a cyborg using cola as power. He eventually built the Thousand Sunny for the Straw Hats using Adam Wood. He joined the crew after the Enies Lobby battle. During the timeskip, he studied Vegapunk's old lab on Karakuri Island and upgraded his body with General Franky.",
    color: "#06B6D4",
    image: "/images/perso/franky.jpg",
  },

  {
    name: "Brook",
    epithet: "Soul King",
    crew: "Straw Hat Pirates",
    role: "Musician",
    bounty: "383,000,000",
    devilFruit: {
      name: "Yomi Yomi no Mi",
      type: "Paramecia",
      description: "Revive Revive Fruit - Allows resurrection once after death. Can also manipulate the soul.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Yomi Yomi no Mi - Ultimate", description: "Technique ultime du Yomi Yomi no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Skeletal musician of the crew, dreams of reuniting with Laboon the whale.",
    story: "Originally a member of the Rumbar Pirates, Brook died in the Florian Triangle but was revived by the Yomi Yomi no Mi. His soul got lost and returned to his body after it had decomposed to bone. He spent 50 years alone, playing music for the skeleton crew. He promised his captain Yorki he would return to Laboon. After joining the Straw Hats at Thriller Bark, he became a beloved crew member. During the timeskip, he became the rock star 'Soul King' in the Florian Triangle. He mastered soul manipulation, allowing him to freeze enemies with the cold of the underworld.",
    color: "#6B7280",
    image: "/images/perso/brook.jpg",
  },

  {
    name: "Jinbe",
    epithet: "First Son of the Sea",
    crew: "Straw Hat Pirates",
    role: "Helmsman",
    bounty: "1,100,000,000",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Fish-man ex-Warlord, dreams of coexistence between humans and fish-men.",
    story: "A whale shark fish-man from Fish-Man Island, Jinbe was a member of the Sun Pirates under Fisher Tiger. After Tiger's death, he became captain and then a Warlord to improve fish-man relations. He resigned from the Warlords to fight at Marineford, where he saved Luffy from Akainu. After the timeskip, he helped Luffy at Whole Cake Island and officially joined the Straw Hats in Wano. He is a master of Fish-Man Karate and is considered one of the strongest fish-men alive. His dream is to see true coexistence between humans and fish-men, as Fisher Tiger envisioned.",
    color: "#3B82F6",
    image: "/images/perso/jinbe.jpg"
  },

  {
    name: "Marshall D. Teach",
    epithet: "Blackbeard",
    crew: "Blackbeard Pirates",
    role: "Captain",
    bounty: "3,996,000,000",
    devilFruit: {
      name: "Yami Yami no Mi & Gura Gura no Mi",
      type: "Logia",
      description: "Darkness Fruit - Attracts and nullifies everything. Also possesses the Quake Fruit stolen from Whitebeard.",
    },
    haki: { observation: true, armament: true, conqueror: true },
  techniques: [
    { name: "Yami Yami no Mi & Gura Gura no Mi - Ultimate", description: "Technique ultime du Yami Yami no Mi & Gura Gura no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "The only pirate with two Devil Fruits. One of the Four Emperors.",
    story: "Teach served under Whitebeard for decades, hiding his true ambitions. He killed Thatch over the Yami Yami no Mi and fled, defeating Ace and turning him in to become a Warlord. At Marineford, he stole the Gura Gura no Mi from Whitebeard's corpse - the first person in history to possess two Devil Fruits. Over the timeskip, he recruited Level 6 prisoners from Impel Down and defeated the remnants of the Whitebeard Pirates. He became a Yonko and continues to hunt powerful Devil Fruits for his crew. He is one of Luffy's greatest enemies.",
    color: "#1F2937",
    image: "/images/perso/teach.jpg"
  },

  {
    name: "Shanks",
    epithet: "Red-Haired",
    crew: "Red-Haired Pirates",
    role: "Captain",
    bounty: "4,048,900,000",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Luffy's inspiration and one of the Four Emperors. Master of the most powerful Haki in the world.",
    story: "Former apprentice of the Roger Pirates alongside Buggy, Shanks lost his left arm saving young Luffy from a Sea King in Foosha Village. He inspired Luffy to become a pirate and gave him his straw hat. He became a Yonko at some point after the Roger era. He is considered the most powerful Haki user in the world, capable of intimidating Sea Kings and damaging ships with his Conqueror's Haki alone. He stopped the Paramount War with his mere presence. His mysterious connection to the World Government and the Figarland family has been hinted at. He remains Luffy's benchmark for becoming Pirate King.",
    color: "#DC2626",
    image: "/images/perso/shanks.jpg"
  },

  {
    name: "Charlotte Linlin",
    epithet: "Big Mom",
    crew: "Big Mom Pirates",
    role: "Captain",
    bounty: "5,000,000,000",
    devilFruit: {
      name: "Soru Soru no Mi",
      type: "Paramecia",
      description: "Soul Soul Fruit - Allows soul manipulation, extracting fragments to create Homies.",
      awakening: true,
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Soru Soru no Mi - Ultimate", description: "Technique ultime du Soru Soru no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Former Yonko, ruled Totto Land with overwhelming power.",
    story: "Abandoned by her parents on Elbaf as a child due to her uncontrollable strength, Charlotte Linlin was taken in by Mother Carmel. After Carmel's mysterious disappearance, Linlin founded Totto Land, a nation of islands made of food, populated by her 85 children. She became a Yonko and ruled with fear and her Soru Soru no Mi, creating Homies from the souls of her subjects. At Whole Cake Island, she was temporarily subdued by the Straw Hats. During the Wano arc, she allied with Kaido but was ultimately defeated by Law and Kid, who sent her deep into the earth.",
    color: "#BE185D",
    image: "/images/perso/bigmom.jpg"
  },

  {
    name: "Kaido",
    epithet: "King of Beasts",
    crew: "Beast Pirates",
    role: "Captain",
    bounty: "5,000,000,000",
    devilFruit: {
      name: "Uo Uo no Mi, Model: Seiryu",
      type: "Zoan",
      description: "Fish Fish Fruit, Model: Azure Dragon - Mythical Zoan allowing transformation into an azure dragon.",
      awakening: true,
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Uo Uo no Mi - Ultimate", description: "Technique ultime du Uo Uo no Mi, Model: Seiryu.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Former Yonko called the strongest creature, ruled Wano with absolute terror.",
    story: "Kaido was once a member of the Rocks Pirates alongside Big Mom and Whitebeard. After the crew's defeat at God Valley, he was experimented on by Vegapunk and eventually obtained the Uo Uo no Mi. He conquered Wano Country 20 years ago, allying with Orochi and turning the country into a weapons factory. He sought to create the strongest crew through his All-Star system. He was defeated by Luffy in an epic battle atop the Floating Island, with Luffy's Gear 5 Nika awakening overpowering him. Kaido fell into the magma chambers beneath Wano, his fate uncertain.",
    color: "#7C3AED",
    image: "/images/perso/kaido.jpg"
  },

  {
    name: "Gol D. Roger",
    epithet: "Pirate King",
    crew: "Roger Pirates",
    role: "Captain",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "The only man to conquer the entire Grand Line. Launched the Great Pirate Era with his dying words.",
    story: "Gol D. Roger was born in Loguetown and became the most powerful pirate in history. With his crew including Rayleigh, Scopper Gaban, Crocus, and apprentices Shanks and Buggy, he conquered the Grand Line using the Road Poneglyphs. He reached Laugh Tale and discovered the true history of the Void Century, the Will of D., and the Ancient Weapons. Knowing he was dying from an incurable disease, he turned himself in to the Marines. At his execution in Loguetown, he announced that his treasure, the One Piece, was out there for the taking - launching the Great Pirate Era that has lasted 24 years.",
    color: "#F59E0B",
    image: "/images/perso/roger.jpg"
  },

  {
    name: "Silvers Rayleigh",
    epithet: "Dark King",
    crew: "Roger Pirates",
    role: "First Mate",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Roger's right hand, Haki master who trained Luffy on Ruskaina.",
    story: "The Dark King Silvers Rayleigh was Roger's first mate and the right hand of the Pirate King. Despite being retired, he remains one of the most powerful people in the world. He saved young Robin from Ohara's Buster Call. After Roger's death, he lived quietly on Sabaody as a coating mechanic. He saved the Straw Hats from Kizaru at Sabaody and trained Luffy on Ruskaina Island during the timeskip, teaching him all three types of Haki. Even in his old age, he swam across the Calm Belt and fought Kizaru to a standstill.",
    color: "#9CA3AF",
    image: "/images/perso/silver.jpg"
  },

  {
    name: "Dracule Mihawk",
    epithet: "Hawk Eyes",
    crew: "Former Warlord",
    role: "Greatest Swordsman",
    bounty: "3,490,000,000",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Sword Style", description: "Technique d'épée dévastatrice.", type: "Sword", emoji: "⚔️" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "The world's greatest swordsman, master of the black blade. Zoro's mentor.",
    story: "Dracule Mihawk holds the title of World's Greatest Swordsman, a position he has maintained for decades. He wields the black blade Yoru, one of the 12 Supreme Grade Swords. He was a Warlord of the Sea until the system was abolished. He trained Zoro during the two-year timeskip, seeing potential in the young swordsman. After the Warlord system was dissolved, he was hunted by the Marines but was saved by Crocodile and later joined the Cross Guild. His relationship with Shanks as a rival swordsman is well-known - they dueled evenly before Shanks lost his arm.",
    color: "#1F2937",
    image: "/images/perso/dracule.jpg"
  },

  {
    name: "Buggy",
    epithet: "The Clown",
    crew: "Buggy Pirates",
    role: "Captain / Yonko",
    bounty: "3,189,000,000",
    devilFruit: {
      name: "Bara Bara no Mi",
      type: "Paramecia",
      description: "Chop Chop Fruit - Allows splitting the body into pieces and controlling them independently.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Bara Bara no Mi - Ultimate", description: "Technique ultime du Bara Bara no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Former apprentice of Roger, became one of the Four Emperors by accident.",
    story: "Buggy was a fellow apprentice alongside Shanks on the Roger Pirates' ship. He ate the Bara Bara no Mi and has been a pirate ever since. Despite his apparent weakness, incredible luck and circumstance propelled him to extraordinary heights. After escaping Impel Down with Luffy and fighting at Marineford, he was recruited as a Warlord. When the Warlord system was abolished, he founded Buggy's Delivery service. After Cross Guild was formed with Mihawk and Crocodile, the world mistakenly credited Buggy as its leader, elevating him to Yonko status - a position he never truly earned but now must maintain.",
    color: "#EF4444",
    image: "/images/perso/baggy.jpg"
  },

  {
    name: "Trafalgar D. Water Law",
    epithet: "Surgeon of Death",
    crew: "Heart Pirates",
    role: "Captain",
    bounty: "3,000,000,000",
    devilFruit: {
      name: "Ope Ope no Mi",
      type: "Paramecia",
      description: "Op-Op Fruit - Creates a spatial sphere (ROOM) where Law can manipulate anything like a surgeon.",
      awakening: true,
    },
    haki: { observation: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Ope Ope no Mi - Ultimate", description: "Technique ultime du Ope Ope no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Supernova captain and Luffy's ally at Wano. Master of the Ope Ope no Mi.",
    story: "Born as a survivor of the White Lead Disease in Flevance, Law was orphaned and taken in by Doflamingo's crew. He was healed of his disease by Corazon (Doflamingo's brother), who sacrificed himself to get Law the Ope Ope no Mi. Law spent 13 years planning revenge against Doflamingo. He formed an alliance with Luffy at Punk Hazard and played a crucial role in defeating Doflamingo at Dressrosa. In Wano, he was key to defeating Big Mom alongside Kid. He carries the Will of D. in his name, making him part of the mysterious D. lineage.",
    color: "#15803D",
    image: "/images/perso/law.jpg"
  },

  {
    name: "Eustass Kid",
    epithet: "Captain",
    crew: "Kid Pirates",
    role: "Captain",
    bounty: "3,000,000,000",
    devilFruit: {
      name: "Jiki Jiki no Mi",
      type: "Paramecia",
      description: "Magnet-Magnet Fruit - Controls magnetic forces and manipulates metal.",
      awakening: true,
    },
    haki: { observation: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Jiki Jiki no Mi - Ultimate", description: "Technique ultime du Jiki Jiki no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Supernova captain rival of Luffy, specialist in destructive magnetism.",
    story: "Eustass Kid entered the New World with a reputation for extreme violence and high civilian casualties. He lost his left arm in a battle against Shanks' subordinate. Despite this, he remained one of the most dangerous Supernovas. He formed alliances and was captured by Kaido, but escaped and joined the Wano alliance. In the final battle, he awakened his Jiki Jiki no Mi and, alongside Law, defeated Big Mom - one of the most impressive feats in the series. His brutal, destructive fighting style contrasts with Luffy's freedom-based approach.",
    color: "#DC2626",
    image: "/images/perso/kid.jpg"
  },

  {
    name: "Boa Hancock",
    epithet: "Pirate Empress",
    crew: "Kuja Pirates",
    role: "Captain / Empress",
    bounty: "1,659,000,000",
    devilFruit: {
      name: "Mero Mero no Mi",
      type: "Paramecia",
      description: "Love-Love Fruit - Petrifies those who feel lust toward her into stone.",
    },
    haki: { observation: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Mero Mero no Mi - Ultimate", description: "Technique ultime du Mero Mero no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Queen of Amazon Lily, former Warlord, in love with Luffy.",
    story: "Boa Hancock and her sisters were kidnapped by Celestial Dragons as children and forced into slavery, bearing the Hoof of the Soaring Dragon mark. They were fed Devil Fruits for entertainment. After Fisher Tiger freed them, Hancock became the Empress of Amazon Lily and a Warlord. She fell in love with Luffy after he protected her sisters' secret and showed her genuine kindness. She helped Luffy infiltrate Impel Down and supported him at Marineford. After the Warlord system was abolition, Amazon Lily was attacked, but she was saved by Rayleigh and the Kuja warriors.",
    color: "#DB2777",
    image: "/images/perso/hancock.jpg"
  },

  {
    name: "Crocodile",
    epithet: "Mr. 0",
    crew: "Cross Guild",
    role: "Captain",
    bounty: "1,949,000,000",
    devilFruit: {
      name: "Suna Suna no Mi",
      type: "Logia",
      description: "Sand-Sand Fruit - Create, control, and become sand at will.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Suna Suna no Mi - Ultimate", description: "Technique ultime du Suna Suna no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Former Warlord, enemy of Alabasta, co-founder of Cross Guild.",
    story: "Crocodile was once a rookie who challenged Whitebeard in the New World but was defeated. He returned to Paradise and became a Warlord. He spent years plotting to take over Alabasta, forming Baroque Works and manipulating the kingdom from the shadows. He was defeated by Luffy and imprisoned in Impel Down Level 6. He escaped during the breakout and fought at Marineford, saving Luffy and Jinbe from Akainu. After the war, he vanished to the New World. He later co-founded the Cross Guild with Mihawk and Buggy, becoming a powerful underworld figure once more.",
    color: "#92400E",
    image: "/images/perso/crocodile.jpg"
  },

  {
    name: "Donquixote Doflamingo",
    epithet: "Heavenly Demon",
    crew: "Donquixote Pirates",
    role: "Captain",
    bounty: "2,500,000,000",
    devilFruit: {
      name: "Ito Ito no Mi",
      type: "Paramecia",
      description: "String-String Fruit - Creates and manipulates extremely sharp and durable strings.",
      awakening: true,
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Ito Ito no Mi - Ultimate", description: "Technique ultime du Ito Ito no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Former Celestial Dragon and Warlord, ruled Dressrosa as the King of Darkness.",
    story: "Born a Celestial Dragon, Doflamingo was hated by the world after his father chose to live among commoners. His mother died of illness and his father was lynched. Doflamingo killed his own father and tried to return to Mary Geoise, but was refused. He rose to become a Warlord, using the Ito Ito no Mi to control Dressrosa for a decade. He ran a vast underground operation trading in weapons, SMILE fruits, and artificial Devil Fruits. He was defeated by Luffy's Gear 4 at Dressrosa and imprisoned in Impel Down Level 6, where he revealed secrets about the National Treasure of Mary Geoise.",
    color: "#F59E0B",
    image: "/images/perso/doflamingo.jpg"
  },

  {
    name: "Sakazuki",
    epithet: "Akainu / Red Dog",
    crew: "Marines",
    role: "Fleet Admiral",
    devilFruit: {
      name: "Magu Magu no Mi",
      type: "Logia",
      description: "Magma-Magma Fruit - Create, control, and become magma. One of the most offensive Devil Fruits.",
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Magu Magu no Mi - Ultimate", description: "Technique ultime du Magu Magu no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Fleet Admiral, the most powerful man in the Marines. Absolute Justice.",
    story: "Sakazuki embodies Absolute Justice - the belief that all pirates must be eliminated, regardless of innocence. He was a key figure at the Paramount War, killing Ace and fighting Aokiji for ten days to become Fleet Admiral. His magma fist pierced through Whitebeard's body. Under his leadership, the Marines became far more aggressive, relocating HQ to the New World and establishing a draft system. He killed any Marine who hesitated at Marineford, even his own allies. Despite his extreme methods, he genuinely believes in protecting civilians from pirates.",
    color: "#DC2626",
    image: "/images/perso/akainu.jpg"
  },

  {
    name: "Kuzan",
    epithet: "Aokiji / Blue Pheasant",
    crew: "Blackbeard Pirates",
    role: "Former Admiral",
    devilFruit: {
      name: "Hie Hie no Mi",
      type: "Logia",
      description: "Ice-Ice Fruit - Create, control, and become ice at will.",
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Hie Hie no Mi - Ultimate", description: "Technique ultime du Hie Hie no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Former Marine Admiral, left the Marines after losing to Akainu.",
    story: "Kuzan believed in Lazy Justice - justice should be applied thoughtfully, not ruthlessly. He spared Robin at Ohara out of mercy. He fought Sakazuki for ten days at Punk Hazard to determine the next Fleet Admiral, but lost and left the Marines rather than serve under Akainu. He was later revealed to have joined the Blackbeard Pirates as their tenth Titanic Captain, though his true motives remain mysterious. He provided crucial help to the Straw Hats at Long Ring Long Land and saved Smoker from Doflamingo.",
    color: "#3B82F6",
    image: "/images/perso/kuzan.jpg"
  },

  {
    name: "Borsalino",
    epithet: "Kizaru / Yellow Monkey",
    crew: "Marines",
    role: "Admiral",
    devilFruit: {
      name: "Pika Pika no Mi",
      type: "Logia",
      description: "Glint-Glint Fruit - Create, control, and become light. Moves at the speed of light.",
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Pika Pika no Mi - Ultimate", description: "Technique ultime du Pika Pika no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Marine Admiral who fights at the speed of light.",
    story: "Borsalino embodies Unclear Justice - he follows orders but with a casual, lazy attitude. He was sent to Sabaody after Luffy punched a Celestial Dragon and single-handedly overwhelmed the Straw Hats and their allies. At Marineford, he was one of the three Admirals holding the line. His Pika Pika no Mi makes him nearly invincible, capable of moving and attacking at light speed. After the timeskip, he remains one of the Marines' three Admirals alongside Fujitora and Ryokugyu.",
    color: "#FBBF24",
    image: "/images/perso/kizaro.jpg"
  },

  {
    name: "Monkey D. Garp",
    epithet: "Hero of the Marines",
    crew: "Marines",
    role: "Vice Admiral",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Luffy's grandfather, the Hero of the Marines. Legendary rival of Roger.",
    story: "Monkey D. Garp is one of the most powerful Marines in history. He repeatedly cornered Gol D. Roger and was his greatest rival. He earned the title 'Hero of the Marines' for his role in the God Valley incident against the Rocks Pirates. Despite his power, he refused promotion to Admiral to maintain his freedom. He adopted Ace (Roger's son) and trained Luffy and Ace alongside his other protege Coby. His greatest regret was failing to save Ace at Marineford. He eventually confronted Koby's kidnapping by the Blackbeard Pirates, leading to a major battle at Hachinosu.",
    color: "#15803D",
    image: "/images/perso/garp.jpg"
  },

  {
    name: "Monkey D. Dragon",
    epithet: "Revolutionary",
    crew: "Revolutionary Army",
    role: "Supreme Commander",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Luffy's father and leader of the Revolutionary Army, the most wanted man in the world.",
    story: "Monkey D. Dragon is the son of Garp and father of Luffy, though Luffy didn't know this until after Enies Lobby. He founded the Revolutionary Army to directly oppose the World Government and the Celestial Dragons. He saved Luffy at Loguetown from Smoker. His powers remain largely mysterious, though he seems capable of controlling weather or wind. Under his leadership, the Revolutionary Army has liberated multiple nations from World Government control. After the Paramount War, he declared war on the World Government openly. He finally confronted Imu and the Five Elders during the Egghead incident.",
    color: "#16A34A",
    image: "/images/perso/dragon.jpg"
  },

  {
    name: "Sabo",
    epithet: "Chief of Staff",
    crew: "Revolutionary Army",
    role: "Chief of Staff",
    devilFruit: {
      name: "Mera Mera no Mi",
      type: "Logia",
      description: "Flame-Flame Fruit - Create, control, and become fire. Inherited from Ace after his death.",
      awakening: true,
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Mera Mera no Mi - Ultimate", description: "Technique ultime du Mera Mera no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Adoptive brother of Luffy and Ace, heir to the Mera Mera no Mi.",
    story: "Sabo was born a noble in Goa Kingdom but rejected his heritage. He became brothers with Ace and Luffy, sharing their sake cup oath. He was seemingly killed by a Celestial Dragon's cannon while setting sail as a child, but was saved by Dragon and raised in the Revolutionary Army. He lost his memories of his childhood but recovered them after reading about Ace's death in the newspaper. He won the Mera Mera no Mi at Dressrosa's Colosseum, inheriting Ace's will. He carries the Will of D. and is considered the number two of the Revolutionary Army.",
    color: "#EA580C",
    image: "/images/perso/sabo.jpg"
  },

  {
    name: "Portgas D. Ace",
    epithet: "Fire Fist",
    crew: "Whitebeard Pirates",
    role: "2nd Division Commander",
    devilFruit: {
      name: "Mera Mera no Mi",
      type: "Logia",
      description: "Flame-Flame Fruit - Create, control, and become fire at will.",
    },
    haki: { observation: true, armament: true, conqueror: true },
  techniques: [
    { name: "Mera Mera no Mi - Ultimate", description: "Technique ultime du Mera Mera no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Son of Gol D. Roger and Luffy's adoptive brother. Died at Marineford saving Luffy.",
    story: "Portgas D. Ace was the son of Gol D. Roger and Portgas D. Rouge, born on Baterilla in the South Blue. His mother died after holding him for 20 months. He was adopted by Garp and raised alongside Luffy and Sabo. After Sabo's apparent death, Ace became fiercely protective of Luffy. He joined the Whitebeard Pirates and became the 2nd Division Commander, turning down an offer to become a Warlord. He was defeated by Blackbeard and handed to the Marines. At Marineford, he was freed but died protecting Luffy from Akainu's magma fist - his final words thanked everyone for loving him.",
    color: "#F97316",
    image: "/images/perso/ace.jpg"
  },

  {
    name: "Edward Newgate",
    epithet: "Whitebeard",
    crew: "Whitebeard Pirates",
    role: "Captain",
    devilFruit: {
      name: "Gura Gura no Mi",
      type: "Paramecia",
      description: "Tremor-Tremor Fruit - Creates devastating earthquakes. The strongest Paramecia.",
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Gura Gura no Mi - Ultimate", description: "Technique ultime du Gura Gura no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "The Strongest Man in the World, legendary Yonko who died at Marineford.",
    story: "Edward Newgate, known as Whitebeard, was once a member of the Rocks Pirates alongside Roger, Big Mom, and Kaido. After the crew's dissolution, he became a Yonko and built the largest pirate fleet in the world. Unlike other Yonko, he considered his crew his family and would go to war for any member. He possessed the Gura Gura no Mi, capable of destroying the world itself. At Marineford, he fought to save Ace and died standing, having declared that the One Piece exists. Even in death, his power was fearsome - Blackbeard had to ambush him to steal his Devil Fruit.",
    color: "#F8FAFC",
    image: "/images/perso/edward.jpg"
  },

  {
    name: "Rob Lucci",
    epithet: "Emissary of Darkness",
    crew: "CP0",
    role: "CP0 Agent",
    devilFruit: {
      name: "Neko Neko no Mi, Model: Leopard",
      type: "Zoan",
      description: "Cat-Cat Fruit, Model: Leopard - Transforms into a leopard or human-leopard hybrid.",
      awakening: true,
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Neko Neko no Mi - Ultimate", description: "Technique ultime du Neko Neko no Mi, Model: Leopard.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "CP0's deadliest agent, Luffy's sworn enemy since Enies Lobby.",
    story: "Rob Lucci was raised by the World Government from age 6 as a killing machine. At Enies Lobby, he was the strongest CP9 agent and Luffy's greatest battle, pushing Luffy to develop Gear 2 and Gear 3. After CP9's defeat, he was imprisoned but escaped. During the timeskip, he rose to become the strongest member of CP0, the World Government's supreme intelligence agency. His Neko Neko no Mi awakened during the Egghead arc, making him even more powerful. He fought Luffy again in their awakened forms, representing the clash between freedom and absolute control.",
    color: "#1F2937",
    image: "/images/perso/lucci.jpg"
  },

  {
    name: "Enel",
    epithet: "God",
    crew: "Enel's Army (Skypiea)",
    role: "God of Skypiea",
    devilFruit: {
      name: "Goro Goro no Mi",
      type: "Logia",
      description: "Rumble-Rumble Fruit - Create, control, and become lightning. Nearly invincible.",
    },
    haki: { observation: true, observationAdvanced: true },
  techniques: [
    { name: "Goro Goro no Mi - Ultimate", description: "Technique ultime du Goro Goro no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Self-proclaimed God of Skypiea, master of lightning. Defeated by Luffy at Skypiea.",
    story: "Enel was born on Birka, a sky island. He destroyed his homeland and came to Skypiea, overthrowing the existing God Gan Fall. Using his Goro Goro no Mi, he ruled as a tyrannical god, planning to return to the moon (Fairy Vearth) using the Maxim ship. He was defeated by Luffy, whose rubber body was immune to lightning - Enel's first-ever defeat. After being launched to the moon by the Knock Up Stream, he discovered an ancient civilization of automata and the true history of the sky people. His Observation Haki (Mantra) was so powerful it covered all of Skypiea.",
    color: "#FBBF24",
    image: "/images/perso/enel.jpg"
  },

  {
    name: "Smoker",
    epithet: "White Chase",
    crew: "Marines",
    role: "Vice Admiral",
    devilFruit: {
      name: "Moku Moku no Mi",
      type: "Logia",
      description: "Smoke-Smoke Fruit - Create, control, and become smoke.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Moku Moku no Mi - Ultimate", description: "Technique ultime du Moku Moku no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Marine who has been chasing Luffy since Loguetown.",
    story: "Smoker was a Marine Captain stationed in Loguetown where he first encountered Luffy. He was one of the few Marines who sensed something special about Luffy from the start. He chased the Straw Hats into the Grand Line, eventually becoming a Vice Admiral in the New World. At Punk Hazard, he worked alongside Tashigi to investigate Vegapunk's lab, where he was brutally beaten by Vergo. He was saved by Aokiji and continues to pursue justice in his own way, caring more about protecting people than following orders blindly.",
    color: "#9CA3AF",
    image: "/images/perso/smoker.jpg"
  },

  {
    name: "Coby",
    epithet: "Hero",
    crew: "Marines",
    role: "Captain",
    bounty: "500,000,000",
    haki: { observation: true, observationAdvanced: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Luffy's first friend, now Marine hero. Dreams of justice.",
    story: "Coby fut le premier ami de Luffy. Captif d'Alvida, il rêvait de devenir Marine. Après avoir été pris sous l'aile de Garp, il s'est entraîné comme un fou. Il a éveillé l'Observation Haki à Marineford en entendant les voix. Il a arrêté l'incident Rocky Port et est devenu Héros, avant d'être capturé par Blackbeard à Hachinosu. Garp est venu le sauver.",
    color: "#F472B6",
    image: "/images/perso/coby.jpg"
  },

  {
    name: "Tashigi",
    epithet: "Justice",
    crew: "Marines",
    role: "Captain",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Épéiste juste qui rêve de récupérer les Meito des criminels.",
    story: "Soldate de Smoker, elle croise Zoro à Loguetown. Douée pour les sabres, elle veut retirer les lames légendaires des mains des criminels. Elle accompagne Smoker partout, Punk Hazard où elle combat Monet. Son rêve croise celui de Zoro.",
    color: "#93C5FD",
    image: "/images/perso/tashigi.jpg"
  },

  {
    name: "Vegapunk",
    epithet: "Genius Scientist",
    crew: "World Government / Egghead",
    role: "Scientist",
    haki: { observation: true },
  techniques: [
    { name: "Nomi Nomi no Mi - Ultimate", description: "Technique ultime du Nomi Nomi no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "L'homme le plus intelligent du monde, 500 ans d'avance.",
    story: "Vegapunk est divisé en 6 satellites + Stella. Il a créé les Pacifista, le Mother Flame, et a étudié le Siècle Oublié. Son cerveau Punk Records contient tout le savoir. À Egghead, il raconte la vérité sur Joy Boy et le monde qui va couler. Son fruit Nomi Nomi lui donne cerveau infini.",
    color: "#22D3EE",
    devilFruit: {
      name: "Nomi Nomi no Mi",
      type: "Paramecia",
      description: "Brain-Brain Fruit - Infinite storage brain, knows everything.",
    },
    image: "/images/perso/vegapunk.jpg"
  },

  {
    name: "Bartholomew Kuma",
    epithet: "Tyrant",
    crew: "Revolutionary Army / Former Warlord",
    role: "Former King of Sorbet",
    bounty: "296,000,000",
    devilFruit: {
      name: "Nikyu Nikyu no Mi",
      type: "Paramecia",
      description: "Paw-Paw Fruit - Repels anything at light speed, can extract pain and memories.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Nikyu Nikyu no Mi - Ultimate", description: "Technique ultime du Nikyu Nikyu no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Le père de Bonney, l'histoire la plus triste de One Piece. Un saint qui a tout sacrifié.",
    story: "Kuma est né esclave de la race Buccaneer, aimé par tout le monde. Il a élevé Bonney comme sa fille, puis a accepté de devenir arme pour la guérir. Vegapunk lui a effacé petit à petit l'humanité contre la guérison de Bonney. Il a sauvé les Mugiwara à Sabaody et Thriller Bark. À Mary Geoise il fut esclave des Dragons Célestes puis sauvé par Sabo.",
    color: "#F9A8D4",
    image: "/images/perso/kuma.jpg"
  },

  {
    name: "Emporio Ivankov",
    epithet: "Miracle Person",
    crew: "Revolutionary Army",
    role: "Commander - Grand Line",
    devilFruit: {
      name: "Horu Horu no Mi",
      type: "Paramecia",
      description: "Horm-Horm Fruit - Controls hormones, can change gender, size, and heal.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Horu Horu no Mi - Ultimate", description: "Technique ultime du Horu Horu no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Reine de Newkama, commande l'armée des Okamas d'Impel Down.",
    story: "Ivankov est un(e) des plus puissants révolutionnaires, détenu niveau 5.5 d'Impel Down qu'il/elle dirige. Il a aidé Luffy à s'évader et à Marineford. Son fruit permet de changer le genre et de booster le corps. Grand ami de Dragon et Kuma, il connaît le secret de Crocodile.",
    color: "#A78BFA",
    image: "/images/perso/ivankov.jpg"
  },

  {
    name: "Issho",
    epithet: "Fujitora",
    crew: "Marines",
    role: "Admiral",
    devilFruit: {
      name: "Zushi Zushi no Mi",
      type: "Paramecia",
      description: "Press-Press Fruit - Controls gravity, can summon meteors.",
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Zushi Zushi no Mi - Ultimate", description: "Technique ultime du Zushi Zushi no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Amiral aveugle qui croit en la justice morale. Parie sur Luffy.",
    story: "Aveugle par choix pour ne plus voir l'horreur du monde. Drafté amiral pendant l'ellipse. Il fait tomber des météores. À Dressrosa il laisse Doflamingo tomber pour que le monde voie l'échec du système Shichibukai. Il veut abolir le système et soutient Vegapunk.",
    color: "#6B7280",
    image: "/images/perso/fujitora.jpg"
  },

  {
    name: "Aramaki",
    epithet: "Ryokugyu",
    crew: "Marines",
    role: "Admiral",
    devilFruit: {
      name: "Mori Mori no Mi",
      type: "Logia",
      description: "Woods-Woods Fruit - Controls plant life, Logia forest.",
      awakening: true,
    },
    haki: { observation: true, armament: true, armamentAdvanced: true },
  techniques: [
    { name: "Mori Mori no Mi - Ultimate", description: "Technique ultime du Mori Mori no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Amiral paresseux qui n'a pas mangé depuis 3 ans. Fan des Dragons Célestes.",
    story: "Ancien policier drafté comme Fujitora. Il peut devenir une forêt entière, drainer l'eau. À Wano il affronte Momonosuke et est stoppé par Shanks à distance avec son Haki des Rois depuis son bateau. Son éveil transforme le paysage en jungle.",
    color: "#16A34A",
    image: "/images/perso/ryokugyu.jpg"
  },

  {
    name: "Sengoku",
    epithet: "The Buddha",
    crew: "Marines",
    role: "Former Fleet Admiral",
    bounty: "5,000,000,000",
    devilFruit: {
      name: "Hito Hito no Mi, Model: Daibutsu",
      type: "Zoan",
      description: "Mythical Zoan - Giant Golden Buddha with shockwaves.",
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Hito Hito no Mi - Ultimate", description: "Technique ultime du Hito Hito no Mi, Model: Daibutsu.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Ancien chef suprême des Marines, stratège de Marineford.",
    story: "Sengoku était avec Garp à God Valley contre Rocks. Il a mené Marineford comme échec moral. Il a une chèvre mangeuse de papiers. Après la guerre il a démissionné et est inspecteur. Il cache le D. et protège Corazon. Premier à avoir le Daibutsu.",
    color: "#FBBF24",
    image: "/images/perso/sengoku.jpg"
  },

  {
    name: "Marco",
    epithet: "The Phoenix",
    crew: "Whitebeard Pirates",
    role: "1st Division Commander",
    bounty: "1,374,000,000",
    devilFruit: {
      name: "Tori Tori no Mi, Model: Phoenix",
      type: "Zoan",
      description: "Mythical Zoan - Blue flames of regeneration, cannot catch disease.",
      awakening: true,
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true },
  techniques: [
    { name: "Tori Tori no Mi - Ultimate", description: "Technique ultime du Tori Tori no Mi, Model: Phoenix.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Bras droit de Whitebeard, docteur phoenix immortel.",
    story: "Numéro 1 de Whitebeard, il a protégé tous les frères. Il a repoussé Kizaru et Akainu à Marineford. Après la guerre il a monté l'équipage restant contre Blackbeard et perdu. Il est apparu à Wano pour aider Luffy et soigner tout le monde. Il a mentoré Ace.",
    color: "#38BDF8",
    image: "/images/perso/marco.jpg"
  },

  {
    name: "Charlotte Katakuri",
    epithet: "Dogtooth",
    crew: "Big Mom Pirates",
    role: "Sweet Commander",
    bounty: "1,057,000,000",
    devilFruit: {
      name: "Mochi Mochi no Mi",
      type: "Paramecia",
      description: "Special Paramecia Mochi - Becomes, creates mochi, future sight.",
      awakening: true,
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
  techniques: [
    { name: "Mochi Mochi no Mi - Ultimate", description: "Technique ultime du Mochi Mochi no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Le fils parfait de Big Mom, qui ne s'allonge jamais.",
    story: "Katakuri a caché toute sa vie qu'il mange par terre. Il voit le futur avec Observation avancée. Luffy apprend le futur en le combattant 1v1 dans le monde miroir. Il laisse Luffy s'échapper pour son honneur. Il respecte Luffy et lui pose la question sur la fin: vas-tu devenir Roi?",
    color: "#F472B6",
    image: "/images/perso/katakuri.jpg"
  },

  {
    name: "King the Wildfire",
    epithet: "The Conflagration",
    crew: "Beast Pirates",
    role: "All-Star #1",
    bounty: "1,390,000,000",
    devilFruit: {
      name: "Ryu Ryu no Mi, Model: Pteranodon",
      type: "Zoan",
      description: "Ancient Zoan Pteranodon, Lunarian race can create flames on back.",
    },
    haki: { observation: true, armament: true, armamentAdvanced: true },
  techniques: [
    { name: "Ryu Ryu no Mi - Ultimate", description: "Technique ultime du Ryu Ryu no Mi, Model: Pteranodon.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Dernier Lunarian, race divine qui vivait au dessus de Red Line.",
    story: "King Alber est un Lunarian, race quasi éteinte capable de survivre dans tout environnement. Kaido l'a sauvé de Punk Hazard où il était expérience. Il est son bras droit depuis toujours. Zoro le bat en apprenant à couper le feu en comprenant que sa flamme dorsale contrôle sa défense.",
    color: "#0F172A",
    image: "/images/perso/king.jpg"
  },

  {
    name: "Yamato",
    epithet: "Oni Princess",
    crew: "Former Beast Pirates / Wano",
    role: "Self-proclaimed Oden",
    bounty: "0",
    devilFruit: {
      name: "Inu Inu no Mi, Model: Okuchi no Makami",
      type: "Zoan",
      description: "Mythical Zoan - Guardian wolf deity of Wano, ice breath.",
    },
    haki: { observation: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Inu Inu no Mi - Ultimate", description: "Technique ultime du Inu Inu no Mi, Model: Okuchi no Makami.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Fille de Kaido qui veut être Oden.",
    story: "Fille de Kaido emprisonnée depuis enfant avec les journaux d'Oden. Elle s'identifie à Oden et veut ouvrir Wano. A aidé Ace, Luffy et Momo. Son fruit loup gardien a des flammes glaciales. Elle a attendu 20 ans Luffy.",
    color: "#FDE68A",
    image: "/images/perso/yamato.jpg"
  },

  {
    name: "Kozuki Oden",
    epithet: "Oden the Great",
    crew: "Roger Pirates / Whitebeard Pirates",
    role: "Daimyo of Kuri",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Le samurai qui a écrit l'histoire, a navigué avec Roger et Whitebeard.",
    story: "Fils de Sukiyaki, banni car trop sauvage. Il a voyagé avec Whitebeard puis Roger jusqu'à Laugh Tale et a écrit dans une langue que personne ne peut lire. Il est revenu ouvrir Wano et a été bouilli à l'huile pendant 1h pour sauver ses vassaux. Son histoire a donné le rêve de Momo et Yamato.",
    color: "#DC2626",
    image: "/images/perso/oden.jpg"
  },

  {
    name: "Nefertari Vivi",
    epithet: "Princess of Alabasta",
    crew: "Straw Hat Pirates (Honorary)",
    role: "Princess",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Princesse puis reine, Nakama pour toujours. D. caché? Will of D?",
    story: "Vivi a quitté son royaume pour infiltrer Baroque Works. Après Alabasta elle est restée reine mais toujours considérée Mugiwara par Luffy: porte toujours la marque. À la Reverie, Imu a ciblé sa photo, Cobra tué. Elle fuit avec Wapol et Morgans à présent, recherchée par le Gouvernement.",
    color: "#38BDF8",
    image: "/images/perso/vivi.jpg"
  },

  {
    name: "Perona",
    epithet: "Ghost Princess",
    crew: "Thriller Bark / Former",
    role: "Princess",
    devilFruit: {
      name: "Horo Horo no Mi",
      type: "Paramecia",
      description: "Hollow-Hollow Fruit - Creates negative hollows that suck morale.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Horo Horo no Mi - Ultimate", description: "Technique ultime du Horo Horo no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Goth loli qui fait déprimer les gens avec ses fantômes.",
    story: "Servante de Moria, elle a été humiliée par Usopp seul être négatif qui bat son fruit car il est déjà pessimiste. Après Thriller Bark elle a vécu avec Mihawk et Zoro. Elle a aidé Zoro et est amie avec Mihawk maintenant. Fan de peluches.",
    color: "#EC4899",
    image: "/images/perso/perona.jpg"
  },

  {
    name: "Fisher Tiger",
    epithet: "Adventurer",
    crew: "Sun Pirates",
    role: "Founder Captain",
    haki: { observation: true, armament: true, conqueror: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Héros des Hommes-Poissons, a escaladé Red Line à mains nues pour libérer esclaves.",
    story: "Tiger était esclave de Mary Geoise, s'est échappé et est revenu libérer tout le monde, dont Hancock et Kuma. Il a fondé les Sun Pirates, a marqué son équipage du soleil pour cacher la marque esclave. Il est mort en refusant le sang humain à cause de son haine, faisant promettre à Jinbe de continuer son rêve de cohabitation.",
    color: "#EF4444",
    image: "/images/perso/tiger.jpg"
  },

  {
    name: "Zeff",
    epithet: "Red Leg",
    crew: "Former Cook Pirates / Baratie",
    role: "Chef & Owner",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Père spirituel de Sanji, a donné sa jambe.",
    story: "Pirate qui ouvrit Baratie. Sur un radeau 85 jours avec Sanji enfant sans nourriture, il a coupé et mangé sa propre jambe pour survivre (anime) / perdu à la mer (manga). Il a appris tout à Sanji et l'a envoyé vers All Blue.",
    color: "#CA8A04",
    image: "/images/perso/zeff.jpg"
  },

  {
    name: "Carrot",
    epithet: "The Musketeer",
    crew: "Mink Tribe / Former Straw Hat Fleet (unofficial)",
    role: "Ruler of Zou (Provisional)",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Lapine Mink, Sulong dévastateur sous pleine lune.",
    story: "Carrot est partie clandestine sur le Sunny à Zou. Elle a aidé contre Big Mom, a pleuré Pedro mort. Sous pleine lune Sulong, elle devient dévastatrice. À la fin Wano elle devient reine de Zou à la place de Inuarashi & Nekomamushi partis.",
    color: "#FDE68A",
    image: "/images/perso/carrot.jpg"
  },

  {
    name: "Killer",
    epithet: "Massacre Soldier",
    crew: "Kid Pirates",
    role: "Vice Captain",
    devilFruit: {
      name: "SMILE (Failed)",
      type: "Zoan",
      description: "Failed SMILE - can only laugh, can't swim.",
    },
    haki: { observation: true, armament: true, armamentAdvanced: true },
  techniques: [
    { name: "SMILE (Failed) - Ultimate", description: "Technique ultime du SMILE (Failed).", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Bras droit de Kid, forcé de rire par SMILE raté de Kaido.",
    story: "Killer a mangé un SMILE raté pour sauver Kid prisonnier de Kaido, ne peut plus que rire. Il a combattu Zoro à Wano en tant que Kamazo. Zoro lui a rendu son honneur. Très fort avec ses Punishers.",
    color: "#6B7280",
    image: "/images/perso/killer.jpg"
  },

  {
    name: "Jewelry Bonney",
    epithet: "Glutton",
    crew: "Bonney Pirates",
    role: "Captain",
    bounty: "320,000,000",
    devilFruit: {
      name: "Toshi Toshi no Mi",
      type: "Paramecia",
      description: "Age-Age Fruit - Can change anyone age, including future forms (like Nika).",
      awakening: true,
    },
    haki: { observation: true },
  techniques: [
    { name: "Toshi Toshi no Mi - Ultimate", description: "Technique ultime du Toshi Toshi no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Fille de Kuma, maitrise l'âge et le futur.",
    story: "Bonney est en réalité une enfant sauvée par Kuma. Sa maladie des Saphirs guérie par Vegapunk contre transformation de Kuma. Elle a mangé le Toshi Toshi, peut devenir géant, vieillard, ou imaginer un futur libre à la Nika. À Egghead elle pleure son père esclave.",
    color: "#F472B6",
    image: "/images/perso/bonney.jpg"
  },

  {
    name: "Bepo",
    epithet: "Navigator",
    crew: "Heart Pirates",
    role: "Navigator",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Ours Mink qui s'excuse tout le temps, Sulong puissant.",
    story: "Mink polaire frère de Zepo mort à cause de Kaido. Meilleur ami et navigateur de Law depuis enfant. Très fort en Sulong à Zou puis à Wano. Il sauve Law de Blackbeard à Winner Island en mode Sulong.",
    color: "#FFFFFF",
    image: "/images/perso/bepo.jpg"
  },

  {
    name: "Kozuki Momonosuke",
    epithet: "Shogun of Wano",
    crew: "Kozuki Clan / Wano",
    role: "Shogun",
    devilFruit: {
      name: "Uo Uo no Mi, Model: Seiryu (Artificial)",
      type: "Zoan",
      description: "Artificial version of Kaido's fruit made by Vegapunk, pink dragon.",
      awakening: true,
    },
    haki: { observation: true },
  techniques: [
    { name: "Uo Uo no Mi - Ultimate", description: "Technique ultime du Uo Uo no Mi, Model: Seiryu (Artificial).", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Fils d'Oden, dragon rose de 28 ans dans corps de 8 ans.",
    story: "Momo a été envoyé 20 ans dans le futur par sa mère Toki. Doflamingo échec mais Mom a une version ratée du fruit de Kaido faite par Vegapunk. Il devient dragon rose géant, arrête Onigashima de tomber avec Yamato. Désormais Shogun nouveau de Wano.",
    color: "#FCA5A5",
    image: "/images/perso/momo.jpg"
  },

  {
    name: "Gecko Moria",
    epithet: "Thriller Bark Ruler",
    crew: "Thriller Bark Pirates",
    role: "Captain",
    bounty: "320,000,000",
    devilFruit: {
      name: "Kage Kage no Mi",
      type: "Paramecia",
      description: "Shadow-Shadow Fruit - Steals shadows to create zombies.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Kage Kage no Mi - Ultimate", description: "Technique ultime du Kage Kage no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Warlord gothique qui a perdu contre Kaido et a fui.",
    story: "Ancien Warlord qui a affronté Kaido au Nouveau Monde et a tout perdu. Il s'est caché à Thriller Bark avec sa Kage Kage no Mi pour voler les ombres et créer une armée de zombies incluant Oars. Battu par Luffy et le Rolling Pirates. Son rêve de Roi des Pirates a été ravivé quand il a échappé à Blackbeard qui voulait son fruit.",
    color: "#4B5563",
    image: "/images/perso/moria.jpg"
  },

  {
    name: "Charlotte Cracker",
    epithet: "Biscuit Knight",
    crew: "Big Mom Pirates",
    role: "Sweet Commander",
    bounty: "860,000,000",
    devilFruit: {
      name: "Bisu Bisu no Mi",
      type: "Paramecia",
      description: "Biscuit-Biscuit Fruit - Creates endless biscuit warriors.",
      awakening: true,
    },
    haki: { observation: true, armament: true, armamentAdvanced: true },
  techniques: [
    { name: "Bisu Bisu no Mi - Ultimate", description: "Technique ultime du Bisu Bisu no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Fils de Big Mom, jamais vu car cache dans armure biscuit.",
    story: "Un des 3 Sweet Commanders. Son fruit Bisu Bisu crée des armures biscuit incassables. Luffy a mis 11h à le battre en mangeant ses soldats grâce à Nami qui les ramollit à l'eau. Il cache son vrai visage timide.",
    color: "#D97706",
    image: "/images/perso/cracker.jpg"
  },

  {
    name: "Charlotte Smoothie",
    epithet: "Juice",
    crew: "Big Mom Pirates",
    role: "Sweet Commander",
    bounty: "932,000,000",
    devilFruit: {
      name: "Shibo Shibo no Mi",
      type: "Paramecia",
      description: "Wring-Wring Fruit - Squeezes liquid from anything.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Shibo Shibo no Mi - Ultimate", description: "Technique ultime du Shibo Shibo no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Géante qui presse les gens comme des oranges.",
    story: "2e fille, géante de 4.5m, comamnde armée jus. Son fruit presse jus même des gens et des épées. Elle a Failli tuer l'équipage Whole Cake mais Jinbe l'arrête. Très calme contrairement à ses frères.",
    color: "#EC4899",
    image: "/images/perso/smoothie.jpg"
  },

  {
    name: "Queen the Plague",
    epithet: "The Plague",
    crew: "Beast Pirates",
    role: "All-Star",
    bounty: "1,320,000,000",
    devilFruit: {
      name: "Ryu Ryu no Mi, Model: Brachiosaurus",
      type: "Zoan",
      description: "Ancient Zoan Brachiosaurus, cyborg scientist with plagues.",
      awakening: true,
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Ryu Ryu no Mi - Ultimate", description: "Technique ultime du Ryu Ryu no Mi, Model: Brachiosaurus.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Scientifique MADS comme Judge, Queen et Vegapunk, devenu dinosaure danceur.",
    story: "Ex MADS, collègue de Vegapunk, Judge. Il a fait la Brachio Bomber et des virus Ice Oni. Il dance tout le temps. Battu par Sanji qui éveille son exosquelette Germa. Révèle que Sanji est Lunarian? Non lui.",
    color: "#EAB308",
    image: "/images/perso/queen.jpg"
  },

  {
    name: "Jack the Drought",
    epithet: "The Drought",
    crew: "Beast Pirates",
    role: "All-Star",
    bounty: "1,000,000,000",
    devilFruit: {
      name: "Zou Zou no Mi, Model: Mammoth",
      type: "Zoan",
      description: "Ancient Zoan Mammoth, destroys everything.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Zou Zou no Mi - Ultimate", description: "Technique ultime du Zou Zou no Mi, Model: Mammoth.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Poisson géant mammouth qui inonde Zou.",
    story: "Homme-poisson mérou géant qui est mammouth. Il a attaqué Zou et a été battu par Zunesha qui a broyé sa flotte. Premier méchant à 1 milliard. Fidèle à Kaido jusqu'à la fin, coulé par Zunesha.",
    color: "#78716C",
    image: "/images/perso/jack.jpg"
  },

  {
    name: "Who's Who",
    epithet: "Former CP9",
    crew: "Beast Pirates",
    role: "Tobi Roppo",
    bounty: "546,000,000",
    devilFruit: {
      name: "Neko Neko no Mi, Model: Saber Tiger",
      type: "Zoan",
      description: "Ancient Zoan Saber Tiger, former CP9 genius.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Neko Neko no Mi - Ultimate", description: "Technique ultime du Neko Neko no Mi, Model: Saber Tiger.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Ex CP9 qui a échoué à garder le Gomu Gomu no Mi, haine pour Shanks.",
    story: "Il gardait le Gomu Gomu quand Shanks le vole. Il fut jeté en prison Impel Down, s'évade, rejoint Kaido. Il connait l'histoire de Nika car il a interrogé un garde. Battu par Jinbe. Haki très bon.",
    color: "#7C2D92",
    image: "/images/perso/whoswho.jpg"
  },

  {
    name: "Ulti",
    epithet: "Pretty Woman",
    crew: "Beast Pirates",
    role: "Tobi Roppo",
    bounty: "400,000,000",
    devilFruit: {
      name: "Ryu Ryu no Mi, Model: Pachycephalosaurus",
      type: "Zoan",
      description: "Ancient Zoan Pachycephalosaurus with headbutt ultra.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Ryu Ryu no Mi - Ultimate", description: "Technique ultime du Ryu Ryu no Mi, Model: Pachycephalosaurus.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Dino qui fait des câlins tête contre tête qui brise crânes.",
    story: "Tobi Roppo jeune fille avec masque, très forte headbutt Ulti-Mortar qui a cassé Luffy. Elle considère Page One comme petit frère. Battue par Nami avec Zeus. Son style 'Ul-Takkie' est tête.",
    color: "#F472B6",
    image: "/images/perso/ulti.jpg"
  },

  {
    name: "Kin'emon",
    epithet: "Foxfire",
    crew: "Kozuki Clan / Scabbards",
    role: "Leader of Nine Scabbards",
    bounty: "0",
    devilFruit: {
      name: "Fuku Fuku no Mi",
      type: "Paramecia",
      description: "Garment-Garment Fruit - Creates disguises from leaves/stones.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Fuku Fuku no Mi - Ultimate", description: "Technique ultime du Fuku Fuku no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Samurai qui coupe le feu, père de Momo? Non.",
    story: "Scabbard le plus fidèle d'Oden, venu du passé avec Toki. Il coupe le feu (Kitsunebi). Il a caché Momo en dragon. Très pudique mais fort. Son pouvoir habille les gens en tout en posant feuilles.",
    color: "#EA580C",
    image: "/images/perso/kinemon.jpg"
  },

  {
    name: "Raizo",
    epithet: "The Ninja",
    crew: "Kozuki Clan / Scabbards",
    role: "Ninja",
    devilFruit: {
      name: "Maki Maki no Mi",
      type: "Paramecia",
      description: "Scroll-Scroll Fruit - Seals and releases anything in scrolls.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Maki Maki no Mi - Ultimate", description: "Technique ultime du Maki Maki no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Ninja qui scelle tout dans ses rouleaux.",
    story: "Ninja de Zou, caché pour protéger Raizo = 'Raizo is safe'. Il scelle attaques comme le feu de Kaido, les libère plus tard. Très peureux mais fort. Son Maki Maki peut sceller même Kaido Blast Breath.",
    color: "#6B7280",
    image: "/images/perso/raizo.jpg"
  },

  {
    name: "Kikunojo",
    epithet: "Snow of Lingering Mellowness",
    crew: "Kozuki Clan / Scabbards",
    role: "Scabbard",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Samurai trans, beauté de Wano, sœur d'Izo.",
    story: "Scabbard femme trans, sœur d'Izo ex Whitebeard. Elle a quitté Wano avec Oden puis est revenue 20 ans plus tard via Toki. Très élégante au combat neige. Son frère Izo meurt à Wano avec elle à côté.",
    color: "#F9A8D4",
    image: "/images/perso/kiku.jpg"
  },

  {
    name: "Kozuki Hiyori",
    epithet: "Komurasaki",
    crew: "Kozuki Clan / Wano",
    role: "Princess",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Fille d'Oden, belle Oiran qui attend Zoro? Son Shamisen.",
    story: "Fille d'Oden restée à Wano 20 ans, devenue Komurasaki la plus belle Oiran pour survivre sous Orochi. Elle donne Enma à Zoro et joue le requiem de Oden. Elle blesse Orochi pour venger sa famille.",
    color: "#F472B6",
    image: "/images/perso/hiyori.jpg"
  },

  {
    name: "Kurozumi Orochi",
    epithet: "Shogun of Wano",
    crew: "Orochi Oniwabanshu",
    role: "Shogun (Former)",
    bounty: "0",
    devilFruit: {
      name: "Hebi Hebi no Mi, Model: Yamata no Orochi",
      type: "Zoan",
      description: "Mythical Zoan 8-headed serpent, 8 lives.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Hebi Hebi no Mi - Ultimate", description: "Technique ultime du Hebi Hebi no Mi, Model: Yamata no Orochi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Shogun tyrannique à 8 têtes de serpent.",
    story: "Descendant Kurozumi discriminé, il empoisonne Sukiyaki et devient Shogun en allié avec Kaido. Son fruit Yamata no Orochi donne 8 vies. Il a été décapité 7 fois par Kaido, Denjiro et Zoro avant de mourir pour de vrai.",
    color: "#581C87",
    image: "/images/perso/orochi.jpg"
  },

  {
    name: "Cavendish",
    epithet: "White Horse",
    crew: "Beautiful Pirates / Straw Hat Grand Fleet",
    role: "Captain",
    bounty: "330,000,000",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Prince narcissique qui devient Hakuba meurtrier quand il dort.",
    story: "Très beau garçon qui déteste les 11 Supernovas car ils volent sa popularité. Il a 2 personnalités: Cavendish beau et Hakuba vent rapide qui tranche tout très vite. Il rejoint Luffy après Dressrosa dans grande flotte 5600 hommes.",
    color: "#FDE68A",
    image: "/images/perso/cavendish.jpg"
  },

  {
    name: "Bartolomeo",
    epithet: "Cannibal",
    crew: "Barto Club / Straw Hat Grand Fleet",
    role: "Captain",
    bounty: "200,000,000",
    devilFruit: {
      name: "Bari Bari no Mi",
      type: "Paramecia",
      description: "Barrier-Barrier Fruit - Creates unbreakable barriers.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Bari Bari no Mi - Ultimate", description: "Technique ultime du Bari Bari no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Fanboy numéro 1 de Luffy, barrière imbattable.",
    story: "Gangster qui a commencé à suivre Luffy après Loguetown. Son Bari Bari bloque tout même King Punch d'Elizabello 2. Il crée escaliers barrière. Il a brûlé bannière Shanks (danger). Il adore Luffy au point de fanatisme, a statues Luffy partout.",
    color: "#22C55E",
    image: "/images/perso/bartolomeo.jpg"
  },

  {
    name: "Bellamy",
    epithet: "The Hyena",
    crew: "Former Donquixote Pirates / Bellamy Pirates",
    role: "Captain",
    bounty: "195,000,000",
    devilFruit: {
      name: "Bane Bane no Mi",
      type: "Paramecia",
      description: "Spring-Spring Fruit - Turns legs into springs for super jumps.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Bane Bane no Mi - Ultimate", description: "Technique ultime du Bane Bane no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "De moqueur de rêves à croyant en Luffy.",
    story: "À Jaya il se moquait des rêves de Luffy en disant Skypiea n'existe pas. Luffy le one-shot sans fruit par respect. Il devient subordonné de Doflamingo et rival de Luffy à Dressrosa où il éveille haki et respecte Luffy à la fin. Il part vivre son propre rêve.",
    color: "#A3A3A3",
    image: "/images/perso/bellamy.jpg"
  },

  {
    name: "Rebecca",
    epithet: "Undefeated Woman Gladiator",
    crew: "Dressrosa / Straw Hat Ally",
    role: "Princess of Dressrosa",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Gladiatrice qui ne blesse jamais, petite fille de Riku.",
    story: "Fille de Kyros et Scarlett, nièce de Viola. Elle combat sans blesser grâce à observation qui esquive. Elle gagne Dressrosa colisée et redevient princesse. Elle vit avec son père Kyros redevenu à moitié jouet.",
    color: "#FCA5A5",
    image: "/images/perso/rebecca.jpg"
  },

  {
    name: "Viola",
    epithet: "Violet",
    crew: "Dressrosa / Riku Family",
    role: "Princess",
    devilFruit: {
      name: "Giro Giro no Mi",
      type: "Paramecia",
      description: "Glare-Glare Fruit - Sees everything, reads minds, tears.",
    },
    haki: { observation: true, observationAdvanced: true },
  techniques: [
    { name: "Giro Giro no Mi - Ultimate", description: "Technique ultime du Giro Giro no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Princesse qui voit tout jusqu'à 4000km et lit pensées avec larmes.",
    story: "Fille de Riku, sœur de Scarlett. Elle a espionné Doflamingo 10 ans comme Violet. Son Giro Giro voit tout, utile contre Sugar. Elle pleure pour lire pensées. Elle est devenue reine intérim Dressrosa.",
    color: "#A78BFA",
    image: "/images/perso/viola.jpg"
  },

  {
    name: "Sugar",
    epithet: "Dying Fear",
    crew: "Donquixote Pirates",
    role: "Special Officer",
    devilFruit: {
      name: "Hobi Hobi no Mi",
      type: "Paramecia",
      description: "Hobby-Hobby Fruit - Turns people into toys and erases memories.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Hobi Hobi no Mi - Ultimate", description: "Technique ultime du Hobi Hobi no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Petite fille qui transforme en jouets et efface mémoire, plus peur de Usopp.",
    story: "La plus dangereuse de Dressrosa: elle a transformé la moitié du pays en jouets dont Kyros. Elle est restée 10 ans enfant car fruit bloque croissance. Elle a trauma extrême de Usopp à cause de son visage God Usopp qui la fait s'évanouir et libère tous jouets.",
    color: "#F472B6",
    image: "/images/perso/sugar.jpg"
  },

  {
    name: "Pica",
    epithet: "Stone",
    crew: "Donquixote Pirates",
    role: "Elite Officer",
    devilFruit: {
      name: "Ishi Ishi no Mi",
      type: "Paramecia",
      description: "Stone-Stone Fruit - Assimilates and controls stone, becomes golem mountain.",
      awakening: true,
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Ishi Ishi no Mi - Ultimate", description: "Technique ultime du Ishi Ishi no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Golem de pierre géant qui parle voix aiguë et déteste qu'on rit.",
    story: "Elite Donquixote, il devient montagne de pierre géante à Dressrosa, toute la ville devient son corps éveillé. Il a voix très aiguë et devient Fou si on rit. Battu par Zoro qui coupe Pica Golem entier avec 1080 Pound Phoenix.",
    color: "#78716C",
    image: "/images/perso/pica.jpg"
  },

  {
    name: "Diamante",
    epithet: "Hero of Colosseum",
    crew: "Donquixote Pirates",
    role: "Elite Officer",
    devilFruit: {
      name: "Hira Hira no Mi",
      type: "Paramecia",
      description: "Ripple-Ripple Fruit - Makes anything flutter like flag, sharp.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Hira Hira no Mi - Ultimate", description: "Technique ultime du Hira Hira no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Toreador qui a tué la mère de Rebecca, manteau drapeau tranchant.",
    story: "Elite armée diamant, il a tué Scarlett la mère de Rebecca. Son Hira Hira rend son manteau ondulant et tranchant comme acier. Battu par Kyros qui venge sa femme, une seule jambe.",
    color: "#DC2626",
    image: "/images/perso/diamante.jpg"
  },

  {
    name: "Sentomaru",
    epithet: "Sumo Captain",
    crew: "Marines / Egghead",
    role: "Captain",
    haki: { observation: true, armament: true, armamentAdvanced: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Garde du corps de Vegapunk, sumo avec Ashigara Dokkoi.",
    story: "Enfant gardé par Vegapunk et Kizaru. Il a la plus forte défense au monde selon lui avec garde avancée. Il protège Vegapunk à Egghead contre Kizaru son propre oncle figure paternelle, émotion forte.",
    color: "#F59E0B",
    image: "/images/perso/sentomaru.jpg"
  },

  {
    name: "Helmeppo",
    epithet: "Son of Axe-Hand Morgan",
    crew: "Marines",
    role: "Lieutenant Commander",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Fils gâté devenu vrai Marine avec Coby.",
    story: "Fils du méchant Morgan, gâté puis entraîné par Garp avec Coby. Il a aidé à Hachinosu à sauver Coby. Il a des Kukri. Son évolution est comme Coby, de peureux à brave.",
    color: "#93C5FD",
    image: "/images/perso/helmeppo.jpg"
  },

  {
    name: "Shirahoshi",
    epithet: "Mermaid Princess",
    crew: "Ryugu Kingdom",
    role: "Princess",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Princesse sirène géante, arme antique Poséidon qui commande Rois des Mers.",
    story: "Fille de Otohime et Neptune, 16 ans géante. Elle est Poséidon, peut parler aux Sea Kings géants. Cible de Van Decken et de Charlos Dragon Céleste. Très timide qui pleure 'Luffy-sama'. A promis à Joy Boy.",
    color: "#F9A8D4",
    image: "/images/perso/shirahoshi.jpg"
  },

  {
    name: "Arlong",
    epithet: "Saw-Tooth",
    crew: "Arlong Pirates / Former Sun Pirates",
    role: "Captain",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Homme-requin qui a terrorisé Nami 8 ans.",
    story: "Ancien Sun Pirates de Fisher Tiger. Après mort Tiger il devient raciste anti humains et envahit Cocoyasi, fait payer Nami 100M pour villa. Battu par Luffy qui détruit sa salle cartes et son parc. Frère de Jinbe en haine.",
    color: "#0E7490",
    image: "/images/perso/arlong.jpg"
  },

  {
    name: "Wyper",
    epithet: "Berserker",
    crew: "Shandia Warriors",
    role: "Leader",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Guerrier Shandia avec Reject Dial qui recule 10x impact.",
    story: "Descendant de Kalgara ami de Norland. Il hait dieu Enel qui a pris Upper Yard. Avec Reject Dial il blesse Enel pour première fois. Son bazooka Burn Bazooka a sauvé Skypiea avec Luffy. Il a l'esprit guerrier.",
    color: "#A16207",
    image: "/images/perso/wyper.jpg"
  },

  {
    name: "Gan Fall",
    epithet: "Knight of Sky",
    crew: "Skypiea / Former God",
    role: "God (Former)",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Ancien Dieu de Skypiea chevalier avec oiseau Pierre.",
    story: "Dieu juste avant Enel, destitué. Il aide Luffy avec son oiseau qui mange fruits. Il a protégé Chopper. Restauré Dieu après Enel. Il connaît Roger car Roger lui a demandé poneglyphe?",
    color: "#FDE68A",
    image: "/images/perso/ganfall.jpg"
  },

  {
    name: "Koala",
    epithet: "Fish-Man Karate Assistant",
    crew: "Revolutionary Army",
    role: "Officer",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Ex-esclave de Tiger sauvée par Sun Pirates, maintenant révolutionnaire.",
    story: "Enfant esclave libérée par Fisher Tiger qui l'a ramenée chez elle en voyageant avec elle qui faisait poissons pour humains. Elle pleure Tiger mort. Devenue instructrice karaté Hommes-Poissons armée révolutionnaire, amie de Sabo. Elle a giflé Luffy à Dressrosa pour lui apprendre.",
    color: "#F472B6",
    image: "/images/perso/koala.jpg"
  },

  {
    name: "Belo Betty",
    epithet: "Freedom Flag",
    crew: "Revolutionary Army",
    role: "Commander - East Blue",
    devilFruit: {
      name: "Kobu Kobu no Mi",
      type: "Paramecia",
      description: "Pump-Pump Fruit - Encourages people, boosts strength and courage.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Kobu Kobu no Mi - Ultimate", description: "Technique ultime du Kobu Kobu no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Commandante sexy qui booste les gens avec drapeau encourager.",
    story: "Comandante East Blue, très belle qui encourage peuple à se battre avec Kobu Kobu, rend courageux et fort. Elle a sauvé Lulusia de Pinkbeard. Elle brandit drapeau 'Fight!'.",
    color: "#BE185D",
    image: "/images/perso/bety.jpg"
  },

  {
    name: "Karasu",
    epithet: "The Crow",
    crew: "Revolutionary Army",
    role: "Commander - North Blue",
    devilFruit: {
      name: "Susu Susu no Mi",
      type: "Logia",
      description: "Soot-Soot Fruit - Controls soot, creates crows of ash.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Susu Susu no Mi - Ultimate", description: "Technique ultime du Susu Susu no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Corbeau de cendres qui vole et étouffe.",
    story: "Commandant North Blue qui parle avec corbeaux de suie. Logia suie. Il aide à Mary Geoise à voler déclaration Kuma. Très silencieux, corbeaux portent.",
    color: "#1F2937",
    image: "/images/perso/karasu.jpg"
  },

  {
    name: "Morley",
    epithet: "Giant Queen",
    crew: "Revolutionary Army",
    role: "Commander - West Blue",
    devilFruit: {
      name: "Oshi Oshi no Mi",
      type: "Paramecia",
      description: "Push-Push Fruit - Pushes ground like clay, creates tunnels.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Oshi Oshi no Mi - Ultimate", description: "Technique ultime du Oshi Oshi no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Géant okama qui pousse sol comme argile et fait pièges.",
    story: "Géant 12m, okama avec Oshi Oshi qui pousse terre. Il est celui qui a créé niveau 5.5 d'Impel Down pour Ivankov, en poussant sol. Il fait des tridents terre.",
    color: "#84CC16",
    image: "/images/perso/morley.jpg"
  },

  {
    name: "Imu",
    epithet: "Sovereign of the World",
    crew: "World Government / Empty Throne",
    role: "Hidden Ruler",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Souverain secret du monde assis sur Trône Vide que personne ne doit occuper.",
    story: "Imu est au dessus des 5 Doyens, vit 800+ ans via Ope Ope immortalité? Il efface lumières de photos cibles: Luffy, Blackbeard, Shirahoshi, Vivi. Il a détruit Lulusia avec Mother Flame. Il parle avec Doyens et craint Joy Boy.",
    color: "#000000",
    image: "/images/perso/imu.jpg"
  },

  {
    name: "Jaygarcia Saturn",
    epithet: "Warrior God of Science & Defense",
    crew: "Five Elders / World Government",
    role: "Elder",
    devilFruit: {
      name: "Ushi Ushi no Mi, Model: Gyuki",
      type: "Zoan",
      description: "Mythical Gyuki spider-ox yokai, science de l'immortalité.",
      awakening: true,
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Ushi Ushi no Mi - Ultimate", description: "Technique ultime du Ushi Ushi no Mi, Model: Gyuki.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Doyen chauve avec chapeau, araignée Gyuki, a expérimenté Bonney.",
    story: "L'un des 5 Doyens, scientifique, responsable expériences Kuma Bonney. Son fruit Gyuki araignée bœuf mythique permet yeux qui explosent têtes et poison. Tué par Imu à Egghead pour échec Joy Boy.",
    color: "#1F2937",
    image: "/images/perso/saturn.jpg"
  },

  {
    name: "Figarland Garling",
    epithet: "Supreme Commander of Holy Knights",
    crew: "Figarland Family / Holy Knights",
    role: "Supreme Commander",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Père de Shanks? Champion God Valley, beau vieil homme avec cheveux lune.",
    story: "Garling est le champion qui a tué des gens à God Valley. Il est chef Chevaliers Sacrés qui jugent Dragons Célestes. On pense père de Shanks et Shamrock. Très fort haki, a tué Mjosgard céleste qui a aidé Shirahoshi.",
    color: "#FDE68A",
    image: "/images/perso/garling.jpg"
  },

  {
    name: "Uta",
    epithet: "World's Greatest Diva",
    crew: "Uta's Army / Red-Haired (Former)",
    role: "Singer",
    devilFruit: {
      name: "Uta Uta no Mi",
      type: "Paramecia",
      description: "Sing-Sing Fruit - Transports consciousness to song world where she is god.",
      awakening: true,
    },
    haki: { observation: true, armament: true, conqueror: true },
  techniques: [
    { name: "Uta Uta no Mi - Ultimate", description: "Technique ultime du Uta Uta no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Fille adoptive de Shanks, diva qui veut paix éternelle par musique.",
    story: "Film Red: enfant adoptée par Shanks qui l'abandonne car fruit dangereux. Son Uta Uta amène tout monde dans monde chanson où elle est invincible. Luffy doit arrêter concert alors que Marine + Shanks arrivent. Elle meurt fin en libérant.",
    color: "#F472B6",
    image: "/images/perso/uta.jpg"
  },

  {
    name: "Scopper Gaban",
    epithet: "The Mountain Feast",
    crew: "Roger Pirates",
    role: "3rd Division? Left Hand of Roger",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Bras gauche de Roger, égal à Rayleigh selon Oda, amant???",
    story: "Roger Pirates numéro 3, bras gauche, a navigué jusqu'à Laugh Tale. Il connaît Shanks petit. Il porte hache à double. Il apparaît à Elbaf maintenant en tant que 'Ya-san' mentor de Colon et Ripley. Très fort haki.",
    color: "#F59E0B",
    image: "/images/perso/gaban.jpg"
  },

  {
    name: "X Drake",
    epithet: "Red Flag",
    crew: "Marines SWORD / Former Beast Pirates",
    role: "Captain SWORD",
    devilFruit: {
      name: "Ryu Ryu no Mi, Model: Allosaurus",
      type: "Zoan",
      description: "Ancient Zoan Allosaurus, SWORD spy.",
      awakening: true,
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Ryu Ryu no Mi - Ultimate", description: "Technique ultime du Ryu Ryu no Mi, Model: Allosaurus.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Sword Style", description: "Technique d'épée dévastatrice.", type: "Sword", emoji: "⚔️" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Dino espion Marine SWORD infiltré chez Kaido.",
    story: "Fils de Diez Barrels ex Marine. Il a infiltré Beast Pirates comme Tobi Roppo X. Il a aidé Luffy à Wano contre Who's Who et Guernica CP0 qui l'a tué? Non survécu avec Koby.",
    color: "#DC2626",
    image: "/images/perso/drake.jpg"
  },

  {
    name: "Ashura Doji",
    epithet: "Shutenmaru",
    crew: "Kozuki Clan / Scabbards",
    role: "Scabbard",
    bounty: "0",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Bandit borgne de Kuri devenu Scabbard.",
    story: "Ancien bandit de Kuri volé par Oden qui l'a converti. Il a gardé le nom Shutenmaru pendant 20 ans en volant capitale pour nourrir pauvres. Très fort, a attaqué Kaido et Jack. Mort en protégeant Kin'emon contre bombe.",
    color: "#78350F",
    image: "/images/perso/ashura.jpg"
  },

  {
    name: "Denjiro",
    epithet: "Kyoshiro",
    crew: "Kozuki Clan / Scabbards",
    role: "Scabbard / Yakuza Boss",
    haki: { observation: true, armament: true, armamentAdvanced: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Scabbard qui est devenu boss yakuza pour infiltrer Orochi.",
    story: "Le plus intelligent des Fourreaux, il est devenu Kyoshiro patron yakuza de capitale pour infiltrer Orochi 20 ans. Il a sauvé Hiyori bébé et l'a élevée comme Komurasaki. Il coupe Orochi en premier.",
    color: "#1E3A8A",
    image: "/images/perso/denjiro.jpg"
  },

  {
    name: "Kawamatsu",
    epithet: "Kappa",
    crew: "Kozuki Clan / Scabbards",
    role: "Scabbard",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Homme-poisson Kappa qui a protégé Hiyori 13 ans.",
    story: "Kappa sumo homme-poisson qui a élevé Hiyori dans cachette après mort Oden. Capturé 13 ans à Udon où il mangeait poissons avec Luffy. Son Kappa Ryu sumo est très fort.",
    color: "#15803D",
    image: "/images/perso/kawamatsu.jpg"
  },

  {
    name: "Inuarashi",
    epithet: "Duke Dog",
    crew: "Mink Tribe / Kozuki Clan",
    role: "Ruler of Day - Zou",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Chien Mink qui règne jour sur Zou.",
    story: "Mink chien duc jour de Zou, ennemi Nekomamushi 20 ans à cause ruse Jack. Ami Oden. Sulong très fort. Il a coupé Jack et est devenu l'un qui ouvre Wano avec Nekomamushi.",
    color: "#FDE68A",
    image: "/images/perso/inuarashi.jpg"
  },

  {
    name: "Nekomamushi",
    epithet: "Whale Cat",
    crew: "Mink Tribe / Kozuki Clan",
    role: "Ruler of Night - Zou",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Chat Mink qui règne nuit sur Zou.",
    story: "Mink chat duc nuit, rival Inuarashi mais ami Oden. Il a cherché Marco pour Wano. Son Sulong a battu Perospero. Il part avec Luffy vers Wano après avoir trouvé Raizo.",
    color: "#FACC15",
    image: "/images/perso/nekomamushi.jpg"
  },

  {
    name: "Pedro",
    epithet: "Jaguar",
    crew: "Mink Tribe / Nox Pirates",
    role: "Guardian",
    bounty: "382,000,000",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Jaguar Mink qui s'est sacrifié pour Luffy à Whole Cake.",
    story: "Mink jaguar qui a voyagé avec Pekoms. Il a perdu œil contre Tamago. Il s'est sacrifié en s'explosant contre Perospero pour laisser Luffy fuir Whole Cake. Sa phrase 'Luffy est l'homme qui ouvrira la nouvelle ère' a guidé Carrot.",
    color: "#92400E",
    image: "/images/perso/pedro.jpg"
  },

  {
    name: "Pekoms",
    epithet: "Lion Fur",
    crew: "Big Mom Pirates / Mink",
    role: "Fighter",
    devilFruit: {
      name: "Kame Kame no Mi",
      type: "Zoan",
      description: "Turtle-Turtle Fruit - Turns into turtle with diamond shell.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Kame Kame no Mi - Ultimate", description: "Technique ultime du Kame Kame no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Lion Mink turtle qui protégeait Big Mom.",
    story: "Lion Mink qui devient tortue. Ami Pedro enfance. Il est loyal à Big Mom mais a couvert Chopper. Il a été trahi par Bege à Whole Cake et sauvé par Sanji.",
    color: "#FDE68A",
    image: "/images/perso/pekoms.jpg"
  },

  {
    name: "Capone Bege",
    epithet: "Gang",
    crew: "Fire Tank Pirates / Big Mom Fleet",
    role: "Captain",
    bounty: "350,000,000",
    devilFruit: {
      name: "Shiro Shiro no Mi",
      type: "Paramecia",
      description: "Castle-Castle Fruit - Body is fortress with army inside.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Shiro Shiro no Mi - Ultimate", description: "Technique ultime du Shiro Shiro no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Mafia château qui a tenté d'assassiner Big Mom.",
    story: "Supernova mafia dont corps est château géant avec armée, canons, chevaux. Il a comploté tuer Big Mom avec Luffy Whole Cake, a sauvé son équipage et Chiffon femme de Big Mom. Son plan Big Father est château géant.",
    color: "#1C1917",
    image: "/images/perso/bege.jpg"
  },

  {
    name: "Basil Hawkins",
    epithet: "Magician",
    crew: "Beast Pirates / Hawkins Pirates",
    role: "Captain",
    bounty: "320,000,000",
    devilFruit: {
      name: "Wara Wara no Mi",
      type: "Paramecia",
      description: "Straw-Straw Fruit - Creates straw dolls linked to other's life.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Wara Wara no Mi - Ultimate", description: "Technique ultime du Wara Wara no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Magicien qui lit cartes tarot, probabilité de survie.",
    story: "Supernova qui fait poupées paille liées à ses subordonnés pour absorber dommages. Il lit cartes 1% survie Luffy vs Kaido. Il a rejoint Kaido par peur. Battu par Law et Kid alliance.",
    color: "#FBBF24",
    image: "/images/perso/hawkins.jpg"
  },

  {
    name: "Scratchmen Apoo",
    epithet: "Roar of the Sea",
    crew: "Beast Pirates / On Air Pirates",
    role: "Captain",
    bounty: "350,000,000",
    devilFruit: {
      name: "Oto Oto no Mi",
      type: "Paramecia",
      description: "Tone-Tone Fruit - Turns body into instruments, sound attacks.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Oto Oto no Mi - Ultimate", description: "Technique ultime du Oto Oto no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "DJ qui combat en musique, traître info Kaido.",
    story: "Supernova Long-bras qui joue musique qui coupe: Scratch Boom etc. Il a trahi Kid et Hawkins à Sabaody en donnant info à Kaido. Il a failli tuer Luffy à Onigashima avec sound. Très opportuniste.",
    color: "#A3A3A3",
    image: "/images/perso/apoo.jpg"
  },

  {
    name: "Urouge",
    epithet: "Mad Monk",
    crew: "Fallen Monk Pirates",
    role: "Captain",
    bounty: "108,000,000",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Moine fou qui grandit en prenant dégâts.",
    story: "Supernova moine ciel de Birka comme Enel. Son fruit? Probable transforme dégâts en force et taille, comme Hulk. Il a battu Snack Sweet Commander 600M et vu Kaido tenter suicide.",
    color: "#F87171",
    image: "/images/perso/urouge.jpg"
  },

  {
    name: "Don Krieg",
    epithet: "Fleet Admiral Krieg",
    crew: "Krieg Pirates",
    role: "Captain",
  techniques: [
    { name: "Coup puissant", description: "Coup signature.", type: "Other", emoji: "💥" },
  ],
    bounty: "17,000,000",
    description: "Homme le plus fort de East Blue? Non, battu 1 coup par Mihawk.",
    story: "Flotte 50 bateaux détruite par Mihawk. Il arrive Baratie affamé, veut Sunny. Sanji nourrit puis il attaque. Luffy le bat. Il représente le faux dur de East Blue avec armure Wootz steel remplie armes.",
    color: "#6B7280",
    image: "/images/perso/krieg.jpg"
  },

  {
    name: "Kuro",
    epithet: "Klahadore - Captain Kuro",
    crew: "Former Black Cat Pirates",
    role: "Former Captain",
    bounty: "16,000,000",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "1000 plans, 3 ans majordome Kaya pour voler richesse.",
    story: "Capitaine qui a fake sa mort, 3 ans majordome Kaya à Syrup Village pour héritage. Très intelligent 1000 plans, vitesse Shakushi. Battu par Luffy et Usopp premier allié. Son équipage Jango hypnotiseur.",
    color: "#1F2937",
    image: "/images/perso/kuro.jpg"
  },

  {
    name: "Alvida",
    epithet: "Iron Mace",
    crew: "Buggy Pirates / Former Alvida Pirates",
    role: "Co-Captain / Beauty",
    devilFruit: {
      name: "Sube Sube no Mi",
      type: "Paramecia",
      description: "Slip-Slip Fruit - Makes skin slippery, beauty, deflects attacks.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Sube Sube no Mi - Ultimate", description: "Technique ultime du Sube Sube no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Ex grosse devenue belle grâce Sube Sube qui glisse.",
    story: "Première ennemie Luffy & Coby. Très grosse avec massue fer. Après avoir mangé Sube Sube, devenue belle glissante où tout glisse, même bottes en caoutchouc. Rejoint Buggy.",
    color: "#F9A8D4",
    image: "/images/perso/alvida.jpg"
  },

  {
    name: "Daz Bones",
    epithet: "Mr. 1 - The Killer",
    crew: "Former Baroque Works / Cross Guild",
    role: "Agent",
    bounty: "75,000,000",
    devilFruit: {
      name: "Supa Supa no Mi",
      type: "Paramecia",
      description: "Dice-Dice Fruit - Turns body into steel blades.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Supa Supa no Mi - Ultimate", description: "Technique ultime du Supa Supa no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Corps lames acier, assassin n°1 Crocodile.",
    story: "Mr 1 de Baroque Works, corps acier Supa Supa. Battu par Zoro qui apprend couper acier à Alabasta. En prison Level 4, sauvé par Crocodile Impel Down, rejoint Cross Guild.",
    color: "#A3A3A3",
    image: "/images/perso/daz.jpg"
  },

  {
    name: "Bentham",
    epithet: "Mr. 2 Bon Kurei",
    crew: "Former Baroque Works / Newkama",
    role: "Agent / Queen Okama",
    devilFruit: {
      name: "Mane Mane no Mi",
      type: "Paramecia",
      description: "Clone-Clone Fruit - Transforms into anyone touched.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Mane Mane no Mi - Ultimate", description: "Technique ultime du Mane Mane no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Okama danseur qui devient n'importe qui touché, meilleur ami Luffy.",
    story: "Mr 2 de Baroque, amoureux danse. Son Mane Mane devient n'importe qui touché visage. Battu par Sanji. À Alabasta il devient ami Luffy, sauve à Impel Down niveau 5.5 en se sacrifiant porte justice, et reste reine Newkama.",
    color: "#F472B6",
    image: "/images/perso/bon.jpg"
  },

  {
    name: "Galdino",
    epithet: "Mr. 3",
    crew: "Former Baroque Works / Buggy's Delivery",
    role: "Agent",
    devilFruit: {
      name: "Doru Doru no Mi",
      type: "Paramecia",
      description: "Wax-Wax Fruit - Creates candle wax clones and locks.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Doru Doru no Mi - Ultimate", description: "Technique ultime du Doru Doru no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Cire qui fige, cerveau Baroque.",
    story: "Mr 3 très malin cire Doru Doru. À Little Garden il piège géants et Straws. À Impel Down il aide Luffy à ouvrir portes et clés cire. À Marineford il fait clé cire Ace et mur cire contre Mihawk. Rejoint Buggy.",
    color: "#FBBF24",
    image: "/images/perso/mr3.jpg"
  },

  {
    name: "Magellan",
    epithet: "Warden of Impel Down",
    crew: "Impel Down / Marines",
    role: "Warden",
    devilFruit: {
      name: "Doku Doku no Mi",
      type: "Paramecia",
      description: "Venom-Venom Fruit - Creates lethal hydra poison.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Doku Doku no Mi - Ultimate", description: "Technique ultime du Doku Doku no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Geôlier poison dont diarrhée vient fruit.",
    story: "Chef prison venimeux dont poison Hydra tue. Il a failli tuer Luffy et Blackbeard. Son Kinjite poison rouge tue et pourrit enfer. Il passe 10h toilettes car poison. Très fort, invaincu à Impel Down avant Shiryu.",
    color: "#7C3AED",
    image: "/images/perso/magellan.jpg"
  },

  {
    name: "Shiryu",
    epithet: "Of the Rain",
    crew: "Blackbeard Pirates",
    role: "2nd Ship Captain",
    bounty: "0",
    devilFruit: {
      name: "Suke Suke no Mi",
      type: "Paramecia",
      description: "Clear-Clear Fruit - Turns invisible, formerly Absalom's.",
    },
    haki: { observation: true, armament: true, armamentAdvanced: true },
  techniques: [
    { name: "Suke Suke no Mi - Ultimate", description: "Technique ultime du Suke Suke no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Ancien geôlier Impel Down plus sanguinaire que Magellan.",
    story: "Ex chef geôliers Impel Down qui tuait prisonniers pour plaisir, emprisonné niveau 6. Libéré par Blackbeard qui l'a recruté. Il a mangé Suke Suke de Absalom tué, devient invisible. Il coupe Garp? Non mais blesse.",
    color: "#1F2937",
    image: "/images/perso/shiryu.jpg"
  },

  {
    name: "Shiki",
    epithet: "Golden Lion",
    crew: "Golden Lion Pirates / Rocks Pirates",
    role: "Captain",
    bounty: "5,000,000,000",
    devilFruit: {
      name: "Fuwa Fuwa no Mi",
      type: "Paramecia",
      description: "Float-Float Fruit - Makes anything he touches float.",
    },
    haki: { observation: true, armament: true, conqueror: true },
  techniques: [
    { name: "Fuwa Fuwa no Mi - Ultimate", description: "Technique ultime du Fuwa Fuwa no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Seul à s'être évadé d'Impel Down en coupant ses jambes.",
    story: "Film Strong World et canon: membre Rocks, rival Roger. Il a attaqué Marineford après mort Roger, emprisonné, coupé jambes pour fuir Impel Down avec objets flottants Fuwa Fuwa. Il fait flotter îles. Luffy le bat jeune (non canon mais Oda valide).",
    color: "#EAB308",
    image: "/images/perso/shiki.jpg"
  },

  {
    name: "Crocus",
    epithet: "Twin Capes Lighthouse",
    crew: "Roger Pirates / Former",
    role: "Doctor",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Docteur de Roger qui garde Laboon depuis 50 ans.",
    story: "Docteur Roger qui a rejoint après Laboon pour soulager Laboon? Il attend Laboon au Cap Twins, s'occupe de baleine depuis 50 ans qui attend équipage Rumbar. Il connaît Brook. Très fort docteur.",
    color: "#22C5EE",
    image: "/images/perso/crocus.jpg"
  },

  {
    name: "Laboon",
    epithet: "The Whale",
    crew: "Rumbar Pirates (Honorary)",
    role: "Whale",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Baleine île qui attend son équipage 50 ans en se cognant Red Line.",
    story: "Baleine bébé Rumbar qui a attendu 50 ans au Cap Twins en se fracassant tête contre Red Line. Crocus s'en occupe. Elle reconnaît Brook. Symbole d'amitié. Taille île.",
    color: "#0F172A",
    image: "/images/perso/laboon.jpg"
  },

  {
    name: "Nojiko",
    epithet: "Tangerine",
    crew: "Cocoyasi Village",
    role: "Tangerine Farmer",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Sœur aînée de Nami, fille de Bellemere.",
    story: "Sœur Nami plus âgée, adoptée Bellemere. Elle a souffert Arlong 8 ans et a aidé Nami à garder secret. Elle cultive mandarines de Bellemere. Elle a rejoint Nami après victoire.",
    color: "#F97316",
    image: "/images/perso/nojiko.jpg"
  },

  {
    name: "Bellemere",
    epithet: "Former Marine",
    crew: "Former Marines",
    role: "Mother of Nami & Nojiko",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Mère de Nami, ancienne Marine qui a tout donné.",
    story: "Marine qui a trouvé Nami & Nojiko bébé guerre. Elle quitte Marine pour les élever mandarines. Quand Arlong demande 20 berry par personne, elle paie seulement pour filles et meurt en souriant 'Je vous aime'. Raison pour Nami haït pirates puis aime.",
    color: "#F472B6",
    image: "/images/perso/bellemere.jpg"
  },

  {
    name: "Kaya",
    epithet: "The Heiress",
    crew: "Syrup Village",
    role: "Doctor-to-be",
  techniques: [
    { name: "Coup puissant", description: "Coup signature.", type: "Other", emoji: "💥" },
  ],
    description: "Amie d'Usopp qui lui offre Going Merry.",
    story: "Fille riche malade de Syrup Village, amie Usopp qui raconte histoires. Kuro voulait héritage. Usopp & Luffy sauvent. En remerciement elle offre caravelle Going Merry avec tête mouton. Elle veut devenir docteur.",
    color: "#FDE68A",
    image: "/images/perso/kaya.jpg"
  },

  {
    name: "Hina",
    epithet: "Black Cage",
    crew: "Marines",
    role: "Rear Admiral",
    devilFruit: {
      name: "Ori Ori no Mi",
      type: "Paramecia",
      description: "Bind-Bind Fruit - Binds people with iron rings.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Ori Ori no Mi - Ultimate", description: "Technique ultime du Ori Ori no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Marine belle qui lie gens avec anneaux fer.",
    story: "Amie Smoker à académie Marine. Son Ori Ori lie bras ennemis. Elle a capturé Mr 2? Elle est Rear Admiral rigoureuse mais juste. Apparaît Hachinosu pour sauver Coby.",
    color: "#EC4899",
    image: "/images/perso/hina.jpg"
  },

  {
    name: "Kureha",
    epithet: "Doc Kureha - The Witch",
    crew: "Drum Island",
    role: "Doctor",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Doctoresse 141 ans qui boit prune.",
    story: "Doctoresse 141 ans excentrique qui a formé Chopper après mort Hiluluk. Elle aime prune. Très forte, conduit cerf. Elle a vécu avec Hiluluk fleur cerisier. Elle est mentor Chopper.",
    color: "#A78BFA",
    image: "/images/perso/kureha.jpg"
  },

  {
    name: "Hiluluk",
    epithet: "Quack Doctor",
    crew: "Drum Island",
    role: "Former Doctor / Father of Chopper",
  techniques: [
    { name: "Coup puissant", description: "Coup signature.", type: "Other", emoji: "💥" },
  ],
    description: "Faux docteur qui croit fleurs cerisier guérissent tout.",
    story: "Médecin charlatan qui a sauvé Chopper quand rejeté troupeau. Il a développé drapeau crâne cerisier pour Chopper. Malade 10 ans, il veut faire fleurir cerisiers pour sauver pays Drum qui meurt neige. Il se fait exploser devant Wapol en riant. Père Chopper.",
    color: "#FCA5A5",
    image: "/images/perso/hiluluk.jpg"
  },

  {
    name: "Iceburg",
    epithet: "Mayor of Water 7",
    crew: "Galley-La Company",
    role: "Mayor & Shipwright",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Maire Water 7, élève de Tom le charpentier d'Oro Jackson.",
    story: "Élève Tom avec Franky (Cutty Flam). Il a vu Pluton plans, les a cachés. Devenu maire Water 7 et patron Galley-La. Attaqué par CP9 pour plans. Il a réparé Going Merry dernière fois et pardonné Franky.",
    color: "#0EA5E9",
    image: "/images/perso/iceburg.jpg"
  },

  {
    name: "Tom",
    epithet: "Tom the Shipwright",
    crew: "Tom's Workers",
    role: "Legendary Shipwright",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Homme-poisson qui a construit Oro Jackson de Roger et Sea Train.",
    story: "Homme-poisson géant bossu qui a construit Oro Jackson en bois Adam et Puffing Tom train des mers. Mentor Iceburg & Franky. Mort exécuté à Enies Lobby pour avoir construit Oro Jackson, mais sauvé Franky & Iceburg en prenant coup. Légende.",
    color: "#0E7490",
    image: "/images/perso/tom.jpg"
  },

  {
    name: "Izou",
    epithet: "The Cross Dresser",
    crew: "Whitebeard Pirates / Kozuki Clan",
    role: "16th Division Commander",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Frère de Kiku, samurai travesti fidèle à Oden.",
    story: "Frère de Kikunojo, Scabbard Oden qui a rejoint Whitebeard 20 ans. Il a pleuré Oden et est revenu à Wano pour mourir à côté de Kiku contre Guernica & Maha CP0. Très élégant combat avec pistolet.",
    color: "#F9A8D4",
    image: "/images/perso/izou.jpg"
  },

  {
    name: "Dorry",
    epithet: "Blue Ogre",
    crew: "Giant Warrior Pirates",
    role: "Co-Captain",
    bounty: "100,000,000",
    haki: { observation: true, armament: true, conqueror: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Géant de Little Garden qui se bat depuis 100 ans avec Brogy.",
    story: "Géant guerrier d'Elbaf, co-capitaine avec Brogy. Ils se battent à Little Garden depuis 100 ans par dispute sur taille poisson. Ils aident Mugiwara et à Egghead viennent avec flotte géante sauver Luffy. Hakuba? Non.",
    color: "#3B82F6",
    image: "/images/perso/dorry.jpg"
  },

  {
    name: "Brogy",
    epithet: "Red Ogre",
    crew: "Giant Warrior Pirates",
    role: "Co-Captain",
    bounty: "100,000,000",
    haki: { observation: true, armament: true, conqueror: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Géant rouge qui se bat avec Dorry, rivalité éternelle.",
    story: "Complément Dorry, géant rouge qui rit toujours. Leur combat est stoppé par Mr 3 qui les piège. Ils reviennent à Egghead avec Shanks flotte. Leur arme Hakoku Sovereignty détruit tout.",
    color: "#EF4444",
    image: "/images/perso/brogy.jpg"
  },

  {
    name: "Hajrudin",
    epithet: "The Pirate Mercenary",
    crew: "New Giant Warrior Pirates / Straw Hat Grand Fleet",
    role: "Captain - 6th Ship",
    bounty: "0",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Géant qui veut devenir roi des géants.",
    story: "Géant de Buggy Delivery qui voulait être mercenaire. À Dressrosa il éveille volonté, rejoint grande flotte pailles chapeau. Fils de roi Elbaf? Non mais rêve.",
    color: "#22C55E",
    image: "/images/perso/hajrudin.jpg"
  },

  {
    name: "Sai",
    epithet: "Don Sai - Leader of Happo Navy",
    crew: "Happo Navy / Straw Hat Grand Fleet",
    role: "13th Leader - 3rd Ship",
    bounty: "0",
    haki: { observation: true, armament: true, armamentAdvanced: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Artiste martial Happo 8 ondes qui casse continent.",
    story: "Chef Happo Navy, petit-fils Chinjao. Il doit épouser Uholisia Baby 5 mais aime Baby 5 qui aime Sai et quitte Doflamingo. Son Hasshoken casse tout. Rejoint flotte pailles.",
    color: "#A3A3A3",
    image: "/images/perso/sai.jpg"
  },

  {
    name: "Ideo",
    epithet: "Destruction Cannon",
    crew: "Ideo Pirates / Straw Hat Grand Fleet",
    role: "Captain - 4th Ship",
    bounty: "0",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Homme long-bras boxeur explosion.",
    story: "Long bras Dressrosa colisée demi finale vs Sai. Son poing explosion Destruction Cannon. Il joint flotte après Doflamingo. Court toujours.",
    color: "#FBBF24",
    image: "/images/perso/ideo.jpg"
  },

  {
    name: "Leo",
    epithet: "The Tontatta Warrior",
    crew: "Tontatta Tribe / Straw Hat Grand Fleet",
    role: "Captain - 5th Ship",
    bounty: "0",
    devilFruit: {
      name: "Nui Nui no Mi",
      type: "Paramecia",
      description: "Stitch-Stitch Fruit - Sews anything together.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Nui Nui no Mi - Ultimate", description: "Technique ultime du Nui Nui no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Nain Tontatta qui coud tout.",
    story: "Chef Tontatta courageux nain qui coud avec Nui Nui. Il a sauvé Mansherry et battu Sugar avec Usopp. Rejoint grande flotte avec 200 nains. Très petit mais fort.",
    color: "#84CC16",
    image: "/images/perso/leo.jpg"
  },

  {
    name: "Orlumbus",
    epithet: "Massacre Ruler",
    crew: "Yonta Maria Fleet / Straw Hat Grand Fleet",
    role: "Admiral - 7th Ship",
    bounty: "0",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Amiral flotte géante 4300 hommes et 56 navires.",
    story: "Géant apparemment? Non humain géant qui commande Yonta Maria 56 navires. Il voulait devenir roi mais devient subordonné Luffy par gratitude Dressrosa. Sa flotte transporte.",
    color: "#F59E0B",
    image: "/images/perso/orlumbus.jpg"
  },

  {
    name: "Kyros",
    epithet: "The One-Legged Soldier",
    crew: "Dressrosa / Riku Army",
    role: "Former Gladiator",
    bounty: "0",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Légende colisée 3000 victoires, père Rebecca, jouet soldat.",
    story: "Le plus fort gladiateur colisée, 3000 victoires, a perdu jambe contre Diamante. Transformé en soldat jouet de plomb par Sugar 10 ans et oublié de tous sauf Rebecca sa fille. Il tue Diamante pour venger Scarlett.",
    color: "#991B1B",
    image: "/images/perso/kyros.jpg"
  },

  {
    name: "Perospero",
    epithet: "Candy Man",
    crew: "Big Mom Pirates",
    role: "1st Son / Minister of Candy",
    bounty: "700,000,000",
    devilFruit: {
      name: "Pero Pero no Mi",
      type: "Paramecia",
      description: "Lick-Lick Fruit - Creates and controls candy.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Pero Pero no Mi - Ultimate", description: "Technique ultime du Pero Pero no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Fils aîné Big Mom, langue très longue, candy.",
    story: "Premier fils Big Mom, ministre bonbon qui fait escalier bonbon. Son Pero Pero crée bonbon dur. Il a failli tuer famille Vinsmoke Whole Cake et trahi Bege. Battu par Nekomamushi Sulong venge Pedro.",
    color: "#F472B6",
    image: "/images/perso/perospero.jpg"
  },

  {
    name: "Charlotte Oven",
    epithet: "Heat Man",
    crew: "Big Mom Pirates",
    role: "Minister of Browned Foods",
    bounty: "300,000,000",
    devilFruit: {
      name: "Netsu Netsu no Mi",
      type: "Paramecia",
      description: "Heat-Heat Fruit - Radiates scorching heat, boils.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Netsu Netsu no Mi - Ultimate", description: "Technique ultime du Netsu Netsu no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Quadruplet Big Mom qui chauffe tout.",
    story: "Frère Katakuri Daifuku quadruplet, il chauffe océan pour attaquer Thousand Sunny Whole Cake. Son Netsu Netsu fait bouillir mer. Battu par Pound? Non mais repoussé.",
    color: "#EA580C",
    image: "/images/perso/oven.jpg"
  },

  {
    name: "Charlotte Daifuku",
    epithet: "Bean Man",
    crew: "Big Mom Pirates",
    role: "Minister of Beans",
    bounty: "300,000,000",
    devilFruit: {
      name: "Hoya Hoya no Mi",
      type: "Paramecia",
      description: "Lamp-Lamp Fruit - Summons genie from belt.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Hoya Hoya no Mi - Ultimate", description: "Technique ultime du Hoya Hoya no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Génie de lampe qui sort de ceinture quand frotte.",
    story: "Triplet Katakuri Oven, il frotte ceinture et invoque génie Hoya qui coupe avec hallebarde. Battu par Sanji? Non.",
    color: "#A78BFA",
    image: "/images/perso/daifuku.jpg"
  },

  {
    name: "Charlotte Mont-d'Or",
    epithet: "Book Man",
    crew: "Big Mom Pirates",
    role: "Minister of Cheese",
    bounty: "120,000,000",
    devilFruit: {
      name: "Buku Buku no Mi",
      type: "Paramecia",
      description: "Book-Book Fruit - Controls world of books.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Buku Buku no Mi - Ultimate", description: "Technique ultime du Buku Buku no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Livre monde où il emprisonne gens.",
    story: "19e fils qui contrôle livres Buku Buku. Il enferme Luffy & Nami dans livre à Whole Cake. Battu par Nami + Jinbe. Très calculateur.",
    color: "#FBBF24",
    image: "/images/perso/montdor.jpg"
  },

  {
    name: "Charlotte Pudding",
    epithet: "Chocolate",
    crew: "Big Mom Pirates",
    role: "Minister of Chocolate / 35th Daughter",
    bounty: "0",
    devilFruit: {
      name: "Memo Memo no Mi",
      type: "Paramecia",
      description: "Memo-Memo Fruit - Edits memories like film.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Memo Memo no Mi - Ultimate", description: "Technique ultime du Memo Memo no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "3 yeux qui édite mémoires, fiancée Sanji ex.",
    story: "Fille Big Mom 3 yeux race 3 yeux qui peut lire Poneglyphes. Amoureuse Sanji mais a tenté tuer car Big Mom. Son Memo Memo coupe mémoires film. Elle sauve Sanji à la fin et embrasse? Oui elle édite baiser.",
    color: "#F472B6",
    image: "/images/perso/pudding.jpg"
  },

  {
    name: "Page One",
    epithet: "Headliner",
    crew: "Beast Pirates",
    role: "Tobi Roppo",
    bounty: "0",
    devilFruit: {
      name: "Ryu Ryu no Mi, Model: Spinosaurus",
      type: "Zoan",
      description: "Ancient Zoan Spinosaurus, crushes with jaws.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Ryu Ryu no Mi - Ultimate", description: "Technique ultime du Ryu Ryu no Mi, Model: Spinosaurus.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Frère Ulti dino épineux.",
    story: "Frère Ulti Tobi Roppo qui se fait battre par Sanji 2 fois à Wano, Usopp Nami. Spinosaurus avec crête. Il fait 'Page One-kun'.",
    color: "#7C3AED",
    image: "/images/perso/pageone.jpg"
  },

  {
    name: "Sasaki",
    epithet: "Headliner",
    crew: "Beast Pirates",
    role: "Tobi Roppo / Armored Division",
    bounty: "0",
    devilFruit: {
      name: "Ryu Ryu no Mi, Model: Triceratops",
      type: "Zoan",
      description: "Ancient Zoan Triceratops, armored frill.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Ryu Ryu no Mi - Ultimate", description: "Technique ultime du Ryu Ryu no Mi, Model: Triceratops.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Poisson blindé triceratops avec cornes.",
    story: "Ex équipage Roger? Non. Tobi Roppo qui voulait être All-Star. Il a Armored Division tortues. Battu par Franky General Franky qui perce corne.",
    color: "#15803D",
    image: "/images/perso/sasaki.jpg"
  },

  {
    name: "Black Maria",
    epithet: "Top Brothel Woman",
    crew: "Beast Pirates",
    role: "Tobi Roppo",
    bounty: "0",
    devilFruit: {
      name: "Kumo Kumo no Mi, Model: Rosamygale Grauvogeli",
      type: "Zoan",
      description: "Ancient Zoan giant spider with webs illusion.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Kumo Kumo no Mi - Ultimate", description: "Technique ultime du Kumo Kumo no Mi, Model: Rosamygale Grauvogeli.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Geisha araignée qui piège dans toiles illusions.",
    story: "Tobi Roppo seule femme, patronne bordel Wano où Sanji piégé. Son Kumo crée toiles hallucinogènes et pose toile qui brûle. Battue par Robin Demonio Fleur éveillée géante.",
    color: "#EC4899",
    image: "/images/perso/blackmaria.jpg"
  },

  {
    name: "Neptune",
    epithet: "Great Knight of the Sea",
    crew: "Ryugu Kingdom",
    role: "King of Fish-Man Island",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Roi cœlacanthe géant père Shirahoshi.",
    story: "Roi Fish-Man 12m, mari Otohime, père Shirahoshi et 3 princes. Très gentil, a peur. Il a gardé Poneglyphe Joy Boy excuse. Il va Reverie avec sac coquille.",
    color: "#0EA5E9",
    image: "/images/perso/neptune.jpg"
  },

  {
    name: "Fukaboshi",
    epithet: "Prince Shark",
    crew: "Ryugu Kingdom",
    role: "First Prince",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Prince requin fils Neptune.",
    story: "Prince aîné Ryugu, requin avec trident, ami Momonosuke? Il combat Hordy à Fish-Man Island et perd puis Luffy sauve. Il veut aller surface.",
    color: "#0E7490",
    image: "/images/perso/fukaboshi.jpg"
  },

  {
    name: "Mansherry",
    epithet: "Princess of Tontatta",
    crew: "Tontatta Tribe / Dressrosa",
    role: "Princess",
    devilFruit: {
      name: "Chiyu Chiyu no Mi",
      type: "Paramecia",
      description: "Heal-Heal Fruit - Heals any injury with tears, even revives lumps.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Chiyu Chiyu no Mi - Ultimate", description: "Technique ultime du Chiyu Chiyu no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Petite princesse naine qui soigne avec larmes.",
    story: "Princesse Tontatta qui peut guérir avec larmes Chiyu Chiyu, même morts temporaires. Kidnappée Doflamingo pour guérir Smile factory. Sauvée Leo, guérit tout Dressrosa avec dandelion larmes.",
    color: "#F9A8D4",
    image: "/images/perso/mansherry.jpg"
  },

  {
    name: "Wanda",
    epithet: "Musketeer of Inuarashi",
    crew: "Mink Tribe",
    role: "Musketeer",
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Chienne Mink mousquetaire amie Carrot.",
    story: "Mousquetaire chien, amie Carrot et Pedro. Elle aide Mugiwara à Zou et Wano. Sulong belle. Elle protège Zou.",
    color: "#FDE68A",
    image: "/images/perso/wanda.jpg"
  },

  {
    name: "Shakky",
    epithet: "Shakuyaku",
    crew: "Roger Pirates? / Sabaody",
    role: "Bar Owner - Sabaody",
    bounty: "0",
    haki: { observation: true, armament: true, conqueror: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Ex impératrice Kuja il y a 2 générations, barmaid qui sait tout.",
    story: "Ex impératrice Amazon Lily 2 générations avant Hancock, amoureuse Rayleigh. Elle tient bar à Sabaody et a info réseau, a dénoncé Luffy? Non elle aide. Elle a  60 ans mais 30 apparence. Elle était chassée par Garp.",
    color: "#000000",
    image: "/images/perso/shakky.jpg"
  },

  {
    name: "Stussy",
    epithet: "Queen of Pleasure District",
    crew: "CP0 / Former MADS Clone",
    role: "CP0 Agent / Clone of Bakkin",
    devilFruit: {
      name: "Batto Batto no Mi, Model: Vampire",
      type: "Zoan",
      description: "Mythical Bat - Vampire, sucks blood, can fly, young via others.",
    },
    haki: { observation: true, armament: true },
  techniques: [
    { name: "Batto Batto no Mi - Ultimate", description: "Technique ultime du Batto Batto no Mi, Model: Vampire.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Clone de Miss Bakkin mère Weevil, espionne MADS, vampire.",
    story: "CP0 mais en réalité clone premier succès MADS de Miss Bakkin. Son Batto Batto vampire suce sang pour rajeunir. Elle trahit Lucci à Egghead pour aider Vegapunk car ordre Stussy de MADS loyale Vegapunk.",
    color: "#F472B6",
    image: "/images/perso/stussy.jpg"
  },

  {
    name: "Kaku",
    epithet: "The Mountain Wind",
    crew: "CP0",
    role: "Agent",
    devilFruit: {
      name: "Ushi Ushi no Mi, Model: Giraffe",
      type: "Zoan",
      description: "Giraffe Zoan awakened at Egghead.",
      awakening: true,
    },
    haki: { observation: true, armament: true, armamentAdvanced: true },
  techniques: [
    { name: "Ushi Ushi no Mi - Ultimate", description: "Technique ultime du Ushi Ushi no Mi, Model: Giraffe.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Ex CP9 girafe maintenant éveillée, nez carré.",
    story: "Ex CP9 Water 7 avec Lucci. Kaku Ushi Ushi girafe rigolo mais très fort rankakou. À Egghead il est éveillé CP0 et coupe Thousand Sunny? Zoro le bat encore facile.",
    color: "#A3A3A3",
    image: "/images/perso/kaku.jpg"
  },

  {
    name: "Nusjuro",
    epithet: "Ethanbaron V. Nusjuro - Warrior God of Finance",
    crew: "Five Elders",
    role: "Elder",
    devilFruit: {
      name: "Bakotsu? - Mythical Horse? Kitetsu",
      type: "Zoan",
      description: "Mythical Zoan Bakotsu skeletal horse yokai, cold flames.",
      awakening: true,
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Bakotsu? - Mythical Horse? Kitetsu - Ultimate", description: "Technique ultime du Bakotsu? - Mythical Horse? Kitetsu.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Doyen chauve lunettes, cheval squelette avec sabre Kitetsu Shodai?",
    story: "L'un des 5 Doyens finance, porte katana Kitetsu premier génération. Son fruit Bakotsu cheval squelette feu froid. Il tranche Pacifista à Egghead avec glace.",
    color: "#A3A3A3",
    image: "/images/perso/nusjuro.jpg"
  },

  {
    name: "Warcury",
    epithet: "Topman Warcury - Warrior God of Justice",
    crew: "Five Elders",
    role: "Elder",
    devilFruit: {
      name: "Houki - Mythical Fengxi Boar",
      type: "Zoan",
      description: "Mythical Zoan Fengxi boar yokai, roar cracks.",
      awakening: true,
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Houki - Mythical Fengxi Boar - Ultimate", description: "Technique ultime du Houki - Mythical Fengxi Boar.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Doyen gros moustache sanglier Fengxi rugit.",
    story: "Doyen justice avec moustache. Son fruit Fengxi sanglier géant qui rugit hakis? Son rugissement fissure et envoie Luffy Gear 5. Très dur peau.",
    color: "#92400E",
    image: "/images/perso/warcury.jpg"
  },

  {
    name: "Marcus Mars",
    epithet: "Warrior God of Environment",
    crew: "Five Elders",
    role: "Elder",
    devilFruit: {
      name: "Itsumade - Mythical Bird",
      type: "Zoan",
      description: "Mythical Zoan Itsumade bird yokai, can fly space.",
      awakening: true,
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Itsumade - Mythical Bird - Ultimate", description: "Technique ultime du Itsumade - Mythical Bird.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Doyen oiseau Itsumade qui vole haut.",
    story: "Doyen environnement chauve long, oiseau Itsumade qui crache braise et vole jusqu'à lab Egghead. Il cherche Punk Records et se fait bloqué par Lucci? Non.",
    color: "#000000",
    image: "/images/perso/mars.jpg"
  },

  {
    name: "Shepherd Ju Peter",
    epithet: "Warrior God of Agriculture",
    crew: "Five Elders",
    role: "Elder",
    devilFruit: {
      name: "Sandworm - Mythical",
      type: "Zoan",
      description: "Mythical Zoan sandworm giant, sucks desert.",
      awakening: true,
    },
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Sandworm - Mythical - Ultimate", description: "Technique ultime du Sandworm - Mythical.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Doyen ver de sable géant qui aspire.",
    story: "Doyen agriculture avec grosse moustache, ver sable géant qui aspire sol et avale gens. Il a aspiré Luffy Gear 5 à Egghead. Très gros bouche.",
    color: "#D97706",
    image: "/images/perso/jupeter.jpg"
  },

  {
    name: "Shamrock Figarland",
    epithet: "Holy Knights Commander?",
    crew: "Figarland Family / Holy Knights",
    role: "Holy Knight Commander (Speculated)",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Frère jumeau de Shanks? Cheveux longs Figarland.",
    story: "Apparaît fin Elbaf chapitre 1137, ressemble Shanks mais ne porte pas chapeau, cheveux longs, épée. Fils Garling? Il arrive avec Gunko Holy Knights à Elbaf pour recruter Loki. Mystère majeur Final Saga.",
    color: "#DC2626",
    image: "/images/perso/shamrock.jpg"
  },

  {
    name: "Rocks D. Xebec",
    epithet: "Captain of Rocks Pirates",
    crew: "Rocks Pirates",
    role: "Captain",
    bounty: "0",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
  techniques: [
    { name: "Haoshoku Haki", description: "Haki des Rois.", type: "Haki", emoji: "👑" },
    { name: "Busoshoku: Koka", description: "Durcit corps en noir acier.", type: "Haki", emoji: "🛡️" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Père de Blackbeard, voulait devenir roi du monde, tué à God Valley.",
    story: "Rocks D. Xebec voulait tuer Dragons Célestes et devenir roi monde. Il a recruté Whitebeard, Big Mom, Kaido, Shiki, Buckin? Il a été tué à God Valley par Roger + Garp alliance contre lui. Son île Hachinosu est maintenant Blackbeard. Père Teach.",
    color: "#000000",
    image: "/images/perso/xebec.jpg"
  },

  {
    name: "Kozuki Sukiyaki",
    epithet: "Former Shogun of Wano",
    crew: "Kozuki Clan",
    role: "Former Shogun",
    haki: { observation: true },
  techniques: [
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Père d'Oden, grand-père Momo Hiyori, forgeron.",
    story: "Shogun avant Orochi, père Oden. Tout le monde croit mort mais caché sous Tenguyama Hitetsu qui a forgé Enma. Il révèle à Robin Poneglyphe Pluton sous Wano.",
    color: "#92400E",
    image: "/images/perso/sukiyaki.jpg"
  },

  {
    name: "Kozuki Toki",
    epithet: "Lady Toki",
    crew: "Kozuki Clan / Roger Pirates?",
    role: "Wife of Oden",
    bounty: "0",
    devilFruit: {
      name: "Toki Toki no Mi",
      type: "Paramecia",
      description: "Time-Time Fruit - Sends people to future, one way.",
    },
    haki: { observation: true },
  techniques: [
    { name: "Toki Toki no Mi - Ultimate", description: "Technique ultime du Toki Toki no Mi.", type: "Devil Fruit", emoji: "🍎" },
    { name: "Kenbunshoku", description: "Haki Observation, voit futur.", type: "Haki", emoji: "👁️" },
  ],
    description: "Femme Oden qui voyage depuis 800 ans via fruit temps.",
    story: "Née il y a 800 ans Vide? Elle a Toki Toki envoie futur seulement. Elle voulait aller Wano et a rencontré Oden. Elle envoie Momo + 4 fourreaux 20 ans futur avant de mourir brûlée par Kaido. Prophétie 9 fourreaux.",
    color: "#F472B6",
    image: "/images/perso/toki.jpg"
  },

  {
    name: "Kurozumi Kanjuro",
    epithet: "Evening Shower",
    crew: "Kurozumi Clan / Kozuki Clan (Traitor)",
    role: "Scabbard (Traitor)",
    bounty: "0",
    devilFruit: { name: "Fude Fude no Mi", type: "Paramecia", description: "Brush-Brush Fruit - Ink drawings come to life." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Ink Dragon", description: "Dessin encre qui devient dragon vivant.", type: "Devil Fruit", emoji: "🐉" },
      { name: "Kazembo", description: "Fantôme feu encre géant né de la haine.", type: "Devil Fruit", emoji: "🔥" },
    ],
    description: "Peintre traître des Fourreaux, sert Orochi.",
    story: "Fourreau Kurozumi, traître qui a fait souffrir Oden 20 ans. Son Fude Fude dessine encre vivante. Il enlève Momo et brûle Onigashima avec Kazembo feu fantôme.",
    color: "#1F2937",
    image: "/images/perso/kanjuro.jpg"
  },

  {
    name: "Shinobu",
    epithet: "The Ninja",
    crew: "Kozuki Clan",
    role: "Kunoichi",
    devilFruit: { name: "Juku Juku no Mi", type: "Paramecia", description: "Ripe-Ripe Fruit - Makes objects/people mature or rot." },
    haki: { observation: true },
    techniques: [
      { name: "Juku Juku - Ripe", description: "Fait mûrir objet jusqu'à pourriture.", type: "Devil Fruit", emoji: "🍑" },
      { name: "Kunoichi Trick", description: "Technique ninja Wano infiltration.", type: "Other", emoji: "🥷" },
    ],
    description: "Kunoichi qui fait mûrir/pourrir tout.",
    story: "Ninja de Wano qui a élevé Momo? Non Shinobu a pouvoir Juku Juku qui fait mûrir. Elle fait vieillir Momo de 8 à 28 ans sur demande. Rôle mère pour Momo.",
    color: "#EC4899",
    image: "/images/perso/shinobu.jpg"
  },

  {
    name: "Jozu",
    epithet: "Diamond Jozu",
    crew: "Whitebeard Pirates",
    role: "3rd Division Commander",
    devilFruit: { name: "Kira Kira no Mi", type: "Paramecia", description: "Twinkle-Twinkle Fruit - Turns body into diamond." },
    haki: { observation: true, armament: true, armamentAdvanced: true },
    techniques: [
      { name: "Brilliant Punk", description: "Charge diamant qui brise tout.", type: "Devil Fruit", emoji: "💎" },
      { name: "Diamond Defense", description: "Corps diamant bloque même Slash Mihawk.", type: "Devil Fruit", emoji: "🛡️" },
    ],
    description: "Homme diamant 3e division Whitebeard.",
    story: "Jozu diamant qui bloque attaque Mihawk la plus forte du monde à Marineford. Battu par Aokiji qui le gèle. Très fidèle à Whitebeard.",
    color: "#A3A3A3",
    image: "/images/perso/jozu.jpg"
  },

  {
    name: "Vista",
    epithet: "Flower Sword Vista",
    crew: "Whitebeard Pirates",
    role: "5th Division Commander",
    haki: { observation: true, armament: true, armamentAdvanced: true },
    techniques: [
      { name: "Rose Rondo", description: "Fleur d'épée qui danse rose.", type: "Sword", emoji: "🌹" },
      { name: "Clash vs Mihawk", description: "A tenu tête à Mihawk à Marineford sans perdre.", type: "Sword", emoji: "⚔️" },
    ],
    description: "Épéiste fleurs, égal Mihawk un moment.",
    story: "5e division Whitebeard, épéiste à 2 sabres fleurs. Il a tenu tête à Mihawk à Marineford, duel respect. Ami Shanks?",
    color: "#F472B6",
    image: "/images/perso/vista.jpg"
  },

  {
    name: "Lindbergh",
    epithet: "The Mink Revolutionary",
    crew: "Revolutionary Army",
    role: "Commander - South Blue",
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Jetpack Blast", description: "Jetpack et pistolets gel qui congèlent.", type: "Other", emoji: "🚀" },
      { name: "Cool Shooter", description: "Arme à air froid qui gèle.", type: "Other", emoji: "❄️" },
    ],
    description: "Mink chat inventeur South Blue, jetpack.",
    story: "Commandant South Blue Mink chat inventeur. Il a jetpack et armes gel. Il aide à Mary Geoise sauvetage Kuma.",
    color: "#FDE68A",
    image: "/images/perso/lindbergh.jpg"
  },

  {
    name: "Tsuru",
    epithet: "Great Staff Officer",
    crew: "Marines",
    role: "Vice Admiral",
    devilFruit: { name: "Woshu Woshu no Mi", type: "Paramecia", description: "Wash-Wash Fruit - Washes and hangs people like laundry." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Washu: Wash", description: "Lave gens et les suspend comme linge sec.", type: "Devil Fruit", emoji: "👕" },
    ],
    description: "Vice-amirale qui lave pirates comme linge.",
    story: "Amie Garp Sengoku, Marine légendaire qui lave Doflamingo enfant? Son Woshu Woshu suspend ennemis comme linge. Très respectée stratège.",
    color: "#A78BFA",
    image: "/images/perso/tsuru.jpg"
  },

  {
    name: "Gion",
    epithet: "Momousagi",
    crew: "Marines",
    role: "Vice Admiral",
    haki: { observation: true, armament: true, armamentAdvanced: true },
    techniques: [
      { name: "Konpira - Sword", description: "Lame nommée Konpira, épéiste d'élite.", type: "Sword", emoji: "⚔️" },
      { name: "Candidate Admiral", description: "Candidate au poste d'amiral.", type: "Haki", emoji: "⭐" },
    ],
    description: "Vice-amirale candidate amiral, épéiste.",
    story: "Vice-amirale belle candidate amiral avec Chaton après démission Aokiji & Akainu promu. Épéiste Konpira. Elle combat pirate à Hachinosu.",
    color: "#F9A8D4",
    image: "/images/perso/momousagi.jpg"
  },

  {
    name: "Vergo",
    epithet: "Demon Bamboo",
    crew: "Donquixote Pirates / Marines (Spy)",
    role: "Corazon - Elite Officer",
    haki: { observation: true, armament: true, armamentAdvanced: true },
    techniques: [
      { name: "Full Body Busoshoku", description: "Corps entier noir Haki très dur.", type: "Haki", emoji: "🖤" },
      { name: "Bamboo Smash", description: "Bambou avec haki qui brise tout.", type: "Martial Arts", emoji: "🎋" },
    ],
    description: "Spy Corazon, Haki full body bambou.",
    story: "Premier Corazon de Donquixote, infiltré Marine G-5. Il a full body armement qui noircit tout corps, bat Smoker et Sanji. Battu par Law qui le coupe en 2 Room.",
    color: "#1F2937",
    image: "/images/perso/vergo.jpg"
  },

  {
    name: "Monet",
    epithet: "Snow Woman",
    crew: "Donquixote Pirates",
    role: "Officer",
    devilFruit: { name: "Yuki Yuki no Mi", type: "Logia", description: "Snow-Snow Fruit - Creates and becomes snow." },
    haki: { observation: true },
    techniques: [
      { name: "Kamakura: 10 Layers", description: "Dôme neige 10 couches qui enferme.", type: "Devil Fruit", emoji: "❄️" },
      { name: "Snow Rabbit", description: "Lapins neige mordent.", type: "Devil Fruit", emoji: "🐰" },
    ],
    description: "Logia neige harpie Punk Hazard.",
    story: "Secrétaire Caesar harpie neige Yuki Yuki. Elle surveille enfants géants Punk Hazard. Battue par Zoro qui la coupe sans Haki mais peur. Aime Doflamingo.",
    color: "#E0F2FE",
    image: "/images/perso/monet.jpg"
  },

  {
    name: "Caesar Clown",
    epithet: "Master - Gas Man",
    crew: "Former Donquixote Pirates / NEO MADS",
    role: "Scientist",
    bounty: "300,000,000",
    devilFruit: { name: "Gasu Gasu no Mi", type: "Logia", description: "Gas-Gas Fruit - Controls, becomes gas, poison." },
    haki: { observation: true },
    techniques: [
      { name: "Gaston - Shinokuni", description: "Gaz poison pays mort qui pétrifie.", type: "Devil Fruit", emoji: "☠️" },
      { name: "Blue Sword", description: "Épée gaz enflammée sans oxygène.", type: "Devil Fruit", emoji: "🔥" },
    ],
    description: "Scientifique fou gaz, rival Vegapunk.",
    story: "Ex collègue Vegapunk MADS qui fait expériences enfants géants et SMILE. Son Gasu Gasu fait Shinokuni gaz mortel. Capturé Law Luffy Punk Hazard puis allié fugitif.",
    color: "#A78BFA",
    image: "/images/perso/caesar.jpg"
  },

  {
    name: "Vinsmoke Reiju",
    epithet: "Poison Pink",
    crew: "Germa 66 / Vinsmoke Family",
    role: "Princess - 00",
    haki: { observation: true },
    techniques: [
      { name: "Poison Pink", description: "Poison qui aspire poison et recrache.", type: "Other", emoji: "💗" },
      { name: "Germa Suit: Wings", description: "Combinaison Raid Suit vol.", type: "Other", emoji: "🦋" },
    ],
    description: "Sœur de Sanji poison rose qui le sauve.",
    story: "Sœur aînée Sanji seule gentille Germa. Son Poison Pink aspire poison Luffy Whole Cake. Elle n'a pas été modifiée sans émotions comme frères, garde humanité mère Sora.",
    color: "#F472B6",
    image: "/images/perso/reiju.jpg"
  },

  {
    name: "Vinsmoke Ichiji",
    epithet: "Sparking Red",
    crew: "Germa 66",
    role: "Prince - 01",
    haki: { observation: true },
    techniques: [
      { name: "Sparking Red", description: "Laser rouge étincelles.", type: "Other", emoji: "🔴" },
    ],
    description: "Frère Sanji rouge sans émotions.",
    story: "Fils Judge 1, sans émotions, chef Germa. Son Sparking Red fait explosion laser. Battu par Katakuri? Il aide Wano fin.",
    color: "#EF4444",
    image: "/images/perso/ichiji.jpg"
  },

  {
    name: "Vinsmoke Niji",
    epithet: "Dengeki Blue",
    crew: "Germa 66",
    role: "Prince - 02",
    haki: { observation: true },
    techniques: [
      { name: "Dengeki Blue", description: "Électricité bleue ultra rapide.", type: "Other", emoji: "🔵" },
    ],
    description: "Frère Sanji électricité bleue.",
    story: "2e fils Judge, Dengeki Blue fait épée électrique. Très cruel mais aide Wano. Sans émotions.",
    color: "#3B82F6",
    image: "/images/perso/niji.jpg"
  },

  {
    name: "Vinsmoke Yonji",
    epithet: "Winch Green",
    crew: "Germa 66",
    role: "Prince - 03",
    haki: { observation: true },
    techniques: [
      { name: "Winch Green", description: "Bras treuil qui broie.", type: "Other", emoji: "🟢" },
    ],
    description: "Frère Sanji vert treuil.",
    story: "3e fils Judge Winch Green bras qui tourne. Battu par Sanji Whole Cake. Aide fin Wano.",
    color: "#22C55E",
    image: "/images/perso/yonji.jpg"
  },

  {
    name: "Vinsmoke Judge",
    epithet: "Garma 66 Supreme Commander",
    crew: "Germa 66",
    role: "King",
    haki: { observation: true },
    techniques: [
      { name: "Germa Science - Spears", description: "Lance électrique et armée clones.", type: "Other", emoji: "👑" },
    ],
    description: "Père Sanji, roi Germa sans émotions enfants.",
    story: "Père Sanji, collègue Vegapunk MADS. Il a modifié ses enfants pour sans émotions sauf Sanji grâce Sora qui a pris drogue. Il veut reconquérir North Blue.",
    color: "#FBBF24",
    image: "/images/perso/judge.jpg"
  },

  {
    name: "Charlotte Brûlée",
    epithet: "Mirror",
    crew: "Big Mom Pirates",
    role: "6th Daughter",
    devilFruit: { name: "Mira Mira no Mi", type: "Paramecia", description: "Mirror-Mirror Fruit - Creates mirror world." },
    haki: { observation: true },
    techniques: [
      { name: "Mirror World", description: "Monde miroir qui reflète et piège.", type: "Devil Fruit", emoji: "🪞" },
    ],
    description: "Fille Big Mom miroir qui a balafre Luffy enfant.",
    story: "6e fille qui a balafré Luffy contre Katakuri? Son Mira Mira crée monde miroir infini où Katakuri règne. Battue par Chopper & Carrot qui la trichent avec miroir.",
    color: "#EC4899",
    image: "/images/perso/brulee.jpg"
  },

  {
    name: "Jaguar D. Saul",
    epithet: "Dereshishishi",
    crew: "Former Marines / Giant",
    role: "Vice Admiral (Former)",
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Giant Punch", description: "Poing géant qui écrase.", type: "Other", emoji: "👊" },
      { name: "Dereshishishi Laugh", description: "Rire unique Saul.", type: "Other", emoji: "😂" },
    ],
    description: "Géant ami Robin Ohara qui a survécu Ohara.",
    story: "Vice-amiral géant ami Robin enfant Ohara, a laissé fuir Robin. Gelé par Aokiji Ohara, survécu et caché Elbaf avec livres Ohara sauvés. Ami Robin retrouvé.",
    color: "#22C55E",
    image: "/images/perso/saul.jpg"
  },

  {
    name: "Hannyabal",
    epithet: "Vice Warden",
    crew: "Impel Down",
    role: "Vice Warden → Warden",
    haki: { observation: true },
    techniques: [
      { name: "Ambition: Become Warden", description: "Rêve devenir chef prison.", type: "Other", emoji: "😈" },
    ],
    description: "Vice-chef Impel Down qui veut devenir chef.",
    story: "Vice-chef Impel Down qui veut toujours prendre place Magellan. Loyal après évasion Luffy, devient chef. Comique.",
    color: "#6B7280",
    image: "/images/perso/hannyabal.jpg"
  },

  {
    name: "Domino",
    epithet: "Vice Warden's Assistant",
    crew: "Impel Down",
    role: "Guard",
    haki: { observation: true },
    techniques: [
      { name: "Guard Formation", description: "Commande gardes loups et prisons.", type: "Other", emoji: "🐺" },
    ],
    description: "Gardienne blonde Impel Down.",
    story: "Gardienne Impel Down avec lunettes, travaille avec Hannyabal et Sadi. Elle surveille niveau.",
    color: "#FBBF24",
    image: "/images/perso/domino.jpg"
  },

  {
    name: "Duval",
    epithet: "Iron Mask",
    crew: "Rosy Life Riders / Duval's Group",
    role: "Leader",
    haki: { observation: true },
    techniques: [
      { name: "Iron Mask Defense", description: "Masque fer invincible jusqu'à Sanji refait visage.", type: "Other", emoji: "🎭" },
    ],
    description: "Homme au masque fer, sosie Sanji avant.",
    story: "Chef Rosy Life Riders qui kidnappe? Sosie Sanji moche, masque fer. Sanji lui refait visage beau avec kick. Il devient beau blond et aide Sunny coated.",
    color: "#F59E0B",
    image: "/images/perso/duval.jpg"
  },

  {
    name: "Oimo",
    epithet: "Giant Guard of Enies Lobby",
    crew: "Former Enies Lobby / Giant Warrior Pirates (Return)",
    role: "Guard",
    haki: { observation: true },
    techniques: [
      { name: "Giant Axe", description: "Hache géante qui coupe.", type: "Other", emoji: "🪓" },
    ],
    description: "Géant gardien Enies Lobby trompé Gouvernement.",
    story: "Géant avec Kashii gardien Enies Lobby 50 ans car on dit leurs capitaines Dorry Brogy prisonniers. Sogeking dit ils sont libres, ils se rebellent et retournent Elbaf.",
    color: "#3B82F6",
    image: "/images/perso/oimo.jpg"
  },

  {
    name: "Kashii",
    epithet: "Giant Guard",
    crew: "Former Enies Lobby / Giant Warrior Pirates",
    role: "Guard",
    haki: { observation: true },
    techniques: [
      { name: "Giant Bazooka", description: "Bazooka géant.", type: "Other", emoji: "💥" },
    ],
    description: "Géant gardien avec Oimo.",
    story: "Ami Oimo, même histoire trompé. Retourne Elbaf avec Dorry Brogy flotte à Egghead.",
    color: "#EF4444",
    image: "/images/perso/kashii.jpg"
  },

  {
    name: "Gerd",
    epithet: "New Giant Warrior",
    crew: "New Giant Warrior Pirates / Elbaf",
    role: "Ship Doctor",
    haki: { observation: true },
    techniques: [
      { name: "Healing Herbs Elbaf", description: "Médecine géante Elbaf.", type: "Other", emoji: "🌿" },
    ],
    description: "Géante infirmière Elbaf, New Giant Pirates.",
    story: "Géante infirmière de Hajrudin crew, New Giant. Elle soigne à Elbaf, amie Colon et Ripley.",
    color: "#22C55E",
    image: "/images/perso/gerd.jpg"
  },

  {
    name: "Goldberg",
    epithet: "New Giant Warrior",
    crew: "New Giant Warrior Pirates",
    role: "Cook",
    haki: { observation: true },
    techniques: [
      { name: "Giant Cooking", description: "Cuisine géante Elbaf.", type: "Cooking", emoji: "🍖" },
    ],
    description: "Géant cuisinier Elbaf.",
    story: "Géant cuisinier New Giant Pirates avec Gerd, Hajrudin. Il porte bouclier. Aide Egghead.",
    color: "#FBBF24",
    image: "/images/perso/goldberg.jpg"
  },

  {
    name: "Stansen",
    epithet: "Giant Log Collection",
    crew: "Former Enies Lobby / Sabaody Auction",
    role: "Former Guard",
    haki: { observation: true },
    techniques: [
      { name: "Giant Strength", description: "Force géante arrache arbre géant.", type: "Other", emoji: "🌳" },
    ],
    description: "Géant esclave Sabaody acheté, ancien gardien.",
    story: "Géant ancien gardien Enies Lobby? Non esclave Sabaody avec Silvers Rayleigh sauve. Il est charpentier géant qui arrache arbre. Après rejoint Elbaf.",
    color: "#78716C",
    image: "/images/perso/stansen.jpg"
  },

  {
    name: "Atlas",
    epithet: "Violence - Vegapunk Sat 05",
    crew: "Egghead / Vegapunk Satellites",
    role: "Satellite - Violence",
    haki: { observation: true },
    techniques: [
      { name: "Light Gloves Punch", description: "Gants lumière qui deviennent géants et frappent.", type: "Other", emoji: "🥊" },
      { name: "Self Destruction?", description: "Peut se reconstruire après explosion.", type: "Cyborg", emoji: "💥" },
    ],
    description: "Satellite Vegapunk Violence, petite fille forte.",
    story: "Satellite 05 Violence, enfant avec gants lumière. Elle se fait exploser par York et se reconstruit. Très forte, mange beaucoup.",
    color: "#F472B6",
    image: "/images/perso/atlas.jpg"
  },

  {
    name: "Edison",
    epithet: "Thinking - Vegapunk Sat 03",
    crew: "Egghead / Vegapunk Satellites",
    role: "Satellite - Thinking",
    haki: { observation: true },
    techniques: [
      { name: "Invention Rush", description: "Pense à 10 inventions par seconde.", type: "Other", emoji: "💡" },
    ],
    description: "Satellite Thinking, petit enfant inventeur.",
    story: "Sat 03 Thinking, petit enfant avec grosse tête qui pense. Il invente vite. Il est tué par York?",
    color: "#A3A3A3",
    image: "/images/perso/edison.jpg"
  },

  {
    name: "Pythagoras",
    epithet: "Wisdom - Vegapunk Sat 04",
    crew: "Egghead / Vegapunk Satellites",
    role: "Satellite - Wisdom",
    haki: { observation: true },
    techniques: [
      { name: "Data Analysis", description: "Analyse tout avec sagesse.", type: "Other", emoji: "📊" },
    ],
    description: "Satellite Wisdom, tête détachable.",
    story: "Sat 04 Wisdom, tête peut se détacher et voler. Très sage, enregistre tout. Il est détruit par S-Snake?",
    color: "#6B7280",
    image: "/images/perso/pythagoras.jpg"
  },

  {
    name: "York",
    epithet: "Greed - Vegapunk Sat 06",
    crew: "Egghead / Vegapunk Satellites / World Government Traitor",
    role: "Satellite - Greed",
    haki: { observation: true },
    techniques: [
      { name: "Greed Betrayal", description: "Trahit tous pour devenir Dragon Céleste.", type: "Other", emoji: "💰" },
    ],
    description: "Satellite Greed qui trahit pour devenir Tenryubito.",
    story: "Sat 06 Greed mange, dort, va toilettes - représente besoins humains. Elle trahit Vegapunk pour devenir Dragon Céleste en appelant Gorosei à Egghead.",
    color: "#FBBF24",
    image: "/images/perso/york.jpg"
  },

  {
    name: "Lilith",
    epithet: "Evil - Vegapunk Sat 02",
    crew: "Egghead / Vegapunk Satellites",
    role: "Satellite - Evil",
    haki: { observation: true },
    techniques: [
      { name: "EVIL Beam", description: "Pistolet à bulles de mer qui neutralise fruits.", type: "Other", emoji: "🫧" },
    ],
    description: "Satellite Evil, méchante mais gentille au fond.",
    story: "Sat 02 Evil, jeune fille avec pistolet bulles mer Sea Prism Stone qui annule fruits. Elle est en fait bonne et aide Robin.",
    color: "#000000",
    image: "/images/perso/lilith.jpg"
  },

  {
    name: "Shaka",
    epithet: "Good - Vegapunk Sat 01",
    crew: "Egghead / Vegapunk Satellites",
    role: "Satellite - Good",
    haki: { observation: true },
    techniques: [
      { name: "Good Reasoning", description: "Raisonne avec bonté, logique pure.", type: "Other", emoji: "😇" },
    ],
    description: "Satellite Good, casque good raison.",
    story: "Sat 01 Good, porte casque, représente bonté Vegapunk. Il est abattu par York au début Egghead.",
    color: "#F8FAFC",
    image: "/images/perso/shaka.jpg"
  },

  {
    name: "Carue",
    epithet: "The Running Duck",
    crew: "Alabasta Kingdom / Straw Hat Allies",
    role: "Animal Companion - Vivi",
    haki: { observation: true },
    techniques: [
      { name: "Super Spot-Billed Duck Speed", description: "Court plus vite que léopard du désert.", type: "Other", emoji: "🦆" },
    ],
    description: "Canard de Vivi qui court vite.",
    story: "Canard super rapide de Vivi, animal de compagnie qui porte Vivi et aide Straw Hats à fuir Sandora. Très loyal, a survécu explosion.",
    color: "#FBBF24",
    image: "/images/perso/carue.jpg"
  },

  {
    name: "Pell",
    epithet: "The Falcon",
    crew: "Alabasta Kingdom",
    role: "Guardian God - 2nd",
    devilFruit: { name: "Tori Tori no Mi, Model: Falcon", type: "Zoan", description: "Bird-Bird Fruit Falcon - Turns into falcon, flies." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Falcon Bomb", description: "Porte bombe dans ciel et survit explosion.", type: "Devil Fruit", emoji: "🦅" },
    ],
    description: "Faucon garde Alabasta, a survécu bombe qui rase ville.",
    story: "Garde d'Alabasta faucon, 1 des 2 dieux gardiens avec Chaka. Il porte bombe de Crocodile au ciel et survit explosion qui devait raser Alubarna. Très loyal Vivi.",
    color: "#A3A3A3",
    image: "/images/perso/pell.jpg"
  },

  {
    name: "Chaka",
    epithet: "The Jackal",
    crew: "Alabasta Kingdom",
    role: "Guardian God - 1st",
    devilFruit: { name: "Inu Inu no Mi, Model: Jackal", type: "Zoan", description: "Dog-Dog Fruit Jackal - Turns into jackal." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Jackal Claw", description: "Griffe chacal rapide.", type: "Devil Fruit", emoji: "🐕" },
    ],
    description: "Chacal garde Alabasta.",
    story: "Garde d'Alabasta chacal, 2e dieu gardien. Combat Crocodile et perd. Ami Vivi depuis enfant.",
    color: "#92400E",
    image: "/images/perso/chaka.jpg"
  },

  {
    name: "Igaram",
    epithet: "Mr. 8 - Igarappoi",
    crew: "Alabasta Kingdom / Former Baroque Works",
    role: "Captain of Royal Guard",
    haki: { observation: true },
    techniques: [
      { name: "Igarappoi - Saxophone Shot", description: "Saxo qui tire.", type: "Gun", emoji: "🎷" },
    ],
    description: "Garde royal Vivi avec coiffure afro et saxo fusil.",
    story: "Capitaine garde Vivi, Mr 8 de Baroque Works infiltré. Il se fait exploser par Nico Robin pour sauver Vivi, survit. Fidèle.",
    color: "#1F2937",
    image: "/images/perso/igaram.jpg"
  },

  {
    name: "Wapol",
    epithet: "Tin Plate",
    crew: "Former Drum Kingdom / Wapol Conglomerate",
    role: "King / Toy Mogul",
    bounty: "0",
    devilFruit: { name: "Baku Baku no Mi", type: "Paramecia", description: "Munch-Munch Fruit - Eats anything, transforms body." },
    haki: { observation: true },
    techniques: [
      { name: "Baku Baku Factory", description: "Mange et recrée jouets, son corps usine.", type: "Devil Fruit", emoji: "🏭" },
      { name: "Wapometal", description: "Alliage Wapometal mémoire forme super dur.", type: "Devil Fruit", emoji: "🔩" },
    ],
    description: "Ex roi Drum égoïste qui mange tout.",
    story: "Roi Drum égoïste chassé par Luffy. Son Baku Baku mange tout et recrée. Devenu riche avec Wapometal jouets, aide Vivi à fuir Reverie avec Morgans. A changé?",
    color: "#F472B6",
    image: "/images/perso/wapol.jpg"
  },

  {
    name: "Dalton",
    epithet: "The Tough Guy",
    crew: "Sakura Kingdom (Former Drum)",
    role: "New King / Former Guard",
    devilFruit: { name: "Ushi Ushi no Mi, Model: Bison", type: "Zoan", description: "Ox-Ox Fruit Bison - Turns into bison, strong." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Bison Rush", description: "Charge bison puissante.", type: "Devil Fruit", emoji: "🦬" },
    ],
    description: "Ex garde Wapol devenu roi gentil Sakura.",
    story: "Ex capitaine garde Wapol qui a défendu Drum contre Wapol cruauté. Devient roi Sakura après Luffy, ami Chopper et Kureha. Son bison est fort.",
    color: "#78350F",
    image: "/images/perso/dalton.jpg"
  },

  {
    name: "Kuroobi",
    epithet: "Black Belt",
    crew: "Former Arlong Pirates / Former Sun Pirates",
    role: "Officer",
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Fish-Man Karate: 1000 Brick Fist", description: "Karate homme-poisson 1000 briques.", type: "Fish-Man Karate", emoji: "🥋" },
      { name: "Black Belt Binding", "description": "Ceinture noire qui lie.", "type": "Martial Arts", "emoji": "🥋" },
    ],
    description: "Homme-poisson ceinture noire karaté, rival Sanji Arlong Park.",
    story: "Officier Arlong, maître karaté homme-poisson. Battu par Sanji à Arlong Park avec Diable Jambe debut. Ancien Sun Pirates.",
    color: "#0E7490",
    image: "/images/perso/kuroobi.jpg"
  },

  {
    name: "Hatchan",
    epithet: "Hachi - Six-Sword Octopus",
    crew: "Former Arlong Pirates / Takoyaki Stand",
    role: "Octopus Fish-Man / Cook",
    haki: { observation: true },
    techniques: [
      { name: "Rokutoryu - Six Sword Style", description: "6 sabres avec 6 bras pieuvre.", "type": "Sword", "emoji": "🐙" },
      { name: "Takoyaki Punch", "description": "Coup takoyaki.", "type": "Other", "emoji": "🐙" },
    ],
    description: "Pieuvre 6 sabres ami Camie, ancien Arlong.",
    story: "Hachi octopus 6 sabres, ami de Rayleigh? Ancien Arlong Pirates. Après Arlong battu, il ouvre takoyaki avec Camie et Pappag. Sauve Luffy à Sabaody, se fait tirer par Charlos Tenryubito, déclenche Luffy qui frappe Tenryubito.",
    color: "#F472B6",
    image: "/images/perso/hatchan.jpg"
  },

  {
    name: "Sadi",
    epithet: "Sadi-chan",
    crew: "Impel Down",
    role: "Chief Guard - Warden's Torturer",
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Trident Torture", "description": "Trident et fouet sadique.", "type": "Other", "emoji": "🔱" },
      { name: "Jail Beast Command", "description": "Commande bêtes gardiennes enfer.", "type": "Other", "emoji": "👹" },
    ],
    description: "Dominatrice Impel Down avec trident.",
    story: "Chef gardienne Impel Down sadique avec trident et animaux Minotaurus etc. Elle aime torturer prisonniers. Amie Domino.",
    color: "#EC4899",
    image: "/images/perso/sadi.jpg"
  },

  {
    name: "Saldeath",
    epithet: "Blue Gorilla Commander",
    crew: "Impel Down",
    role: "Commander - Blugori",
    haki: { observation: true },
    techniques: [
      { name: "Blugori Army", "description": "Commande armée gorilles bleus à hache.", "type": "Other", "emoji": "🦍" },
    ],
    description: "Commandant Blugori gorilles bleus Impel Down.",
    story: "Commandant Blue Gorilla à Impel Down avec fourche. Il commande Blugori qui attaquent Luffy. Petit mais autoritaire.",
    color: "#1E40AF",
    image: "/images/perso/saldeath.jpg"
  },

  {
    name: "Holdem",
    epithet: "Lion's Mouth",
    crew: "Beast Pirates",
    role: "Headliner",
    devilFruit: { name: "Neko Neko no Mi, Model: Lion (SMILE)", type: "Zoan", description: "SMILE Lion - Lion head on belly, fire." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Lion Fire - Karakuri", "description": "Tête lion ventre crache feu.", "type": "Devil Fruit", "emoji": "🦁" },
    ],
    description: "Headliner lion ventre qui tient Tama otage.",
    story: "Headliner Wano qui tient Tama otage et vole. Battu par Luffy qui le one-shot Gomu Gomu no Red Hawk? Non.",
    color: "#D97706",
    image: "/images/perso/holdem.jpg"
  },

  {
    name: "Speed",
    epithet: "The Horse Girl",
    crew: "Beast Pirates / Tama's Army (Former)",
    role: "Headliner",
    devilFruit: { name: "Uma Uma no Mi, Model: Horse (SMILE)", type: "Zoan", description: "SMILE Horse - Centaur horse." },
    haki: { observation: true },
    techniques: [
      { name: "Horse Speed", "description": "Vitesse cheval centaure.", "type": "Devil Fruit", "emoji": "🐴" },
    ],
    description: "Centaure cheval qui sert Tama après dango Kibi Kibi.",
    story: "Headliner cheval SMILE, très rapide. Tama la dompte avec Kibi Kibi dango, elle devient alliée et transporte Luffy Wano. Très loyal après dango.",
    color: "#FDE68A",
    image: "/images/perso/speed.jpg"
  },

  {
    name: "Dobon",
    epithet: "The Hippo",
    crew: "Beast Pirates",
    role: "Headliner",
    devilFruit: { name: "Kaba Kaba no Mi, Model: Hippo (SMILE)", type: "Zoan", description: "SMILE Hippo - Hippo mouth on belly." },
    haki: { observation: true },
    techniques: [
      { name: "Hippo Crush", "description": "Mâchoire hippo ventre écrase.", "type": "Devil Fruit", "emoji": "🦛" },
    ],
    description: "Hippo ventre Headliner prison Udon.",
    story: "Headliner Udon prison qui garde Luffy et Kid. Son hippo ventre mord. Battu par Luffy.",
    color: "#78716C",
    image: "/images/perso/dobon.jpg"
  },

  {
    name: "Charlotte Opera",
    epithet: "Cream Man",
    crew: "Big Mom Pirates",
    role: "5th Son / Minister of Whipped Cream",
    devilFruit: { name: "Kuri Kuri no Mi", type: "Paramecia", description: "Cream-Cream Fruit - Controls whipped cream." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Cream Puff", "description": "Crème qui brûle comme feu.", "type": "Devil Fruit", "emoji": "🍰" },
    ],
    description: "Fils Big Mom crème fouettée qui brûle.",
    story: "5e fils ministre crème qui brûle comme feu. Gardien Mirror World. Battu par Jinbe qui le noie crème? Il survit? Oui.",
    color: "#FDE68A",
    image: "/images/perso/opera.jpg"
  },

  {
    name: "Charlotte Galette",
    epithet: "Butter Girl",
    crew: "Big Mom Pirates",
    role: "18th Daughter / Minister of Butter",
    devilFruit: { name: "Bata Bata no Mi", type: "Paramecia", description: "Butter-Butter Fruit - Controls butter." },
    haki: { observation: true },
    techniques: [
      { name: "Butter Bind", "description": "Beurre qui colle et bloque mouvements.", "type": "Devil Fruit", "emoji": "🧈" },
    ],
    description: "Fille Big Mom beurre qui colle.",
    story: "18e fille ministre beurre qui colle Nami? Son Bata Bata colle comme glue. Battue par? Non mais repoussée.",
    color: "#FBBF24",
    image: "/images/perso/galette.jpg"
  },

  {
    name: "Gin",
    epithet: "The Demon Man",
    crew: "Krieg Pirates",
    role: "Fighting Captain",
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Man-Demon Twin Tonfa", description: "Tonfa avec boules fer qui tournent.", type: "Other", emoji: "🔱" },
      { name: "Loyalty to Krieg", description: "Se sacrifie pour Krieg malgré cruauté.", type: "Other", emoji: "😭" },
    ],
    description: "Bras droit Krieg qui a été nourri par Sanji.",
    story: "Bras droit Krieg très fort, a faim Baratie, Sanji nourrit malgré ennemi. Il respecte Sanji mais reste loyal Krieg. Luffy le bat? Non Sanji? Il survit et part.",
    color: "#6B7280",
    image: "/images/perso/gin.jpg"
  },

  {
    name: "Pearl",
    epithet: "The Iron Wall",
    crew: "Krieg Pirates",
    role: "Second Fighting Captain",
    haki: { observation: true },
    techniques: [
      { name: "Iron Wall Pearl Shield", description: "Boucliers perles qui protègent tout corps en feu.", type: "Other", emoji: "🛡️" },
      { name: "Fire Crouch", description: "Boule feu avec boucliers perles qui brûlent.", type: "Other", emoji: "🔥" },
    ],
    description: "Gros avec boucliers perles feu, peur du sang.",
    story: "2e combat Krieg Pirates avec boucliers perles qui brûlent. Très peur sang, quand voit sang devient fou et fort. Battu par Sanji & Luffy? Sanji.",
    color: "#FBBF24",
    image: "/images/perso/pearl.jpg"
  },

  {
    name: "Jango",
    epithet: "The Hypnotist",
    crew: "Former Black Cat Pirates / Marines (Former)",
    role: "Former Captain / Marine",
    haki: { observation: true },
    techniques: [
      { name: "1-2 Jango - Hypnosis", description: "Hypnotise avec pendule 1-2 Jango, endort.", type: "Other", emoji: "🌀" },
    ],
    description: "Hypnotiseur qui endort avec 1-2 Jango.",
    story: "Capitaine après Kuro, hypnotiseur qui a hypnotisé Kaya? Non. Il rejoint Marines après Kuro battu avec Fullbody. Très comique avec danse.",
    color: "#1F2937",
    image: "/images/perso/jango.jpg"
  },

  {
    name: "Fullbody",
    epithet: "Iron Fist Fullbody",
    crew: "Marines",
    role: "Lieutenant (Former) / Chef",
    haki: { observation: true },
    techniques: [
      { name: "Iron Fist - Fullbody", description: "Poing fer qui casse.", type: "Martial Arts", emoji: "👊" },
      { name: "Chef Cooking - Romantic", description: "Cuisine romantique avec Sanji.", type: "Cooking", emoji: "🍳" },
    ],
    description: "Marine poing fer devenu chef avec Sanji.",
    story: "Lieutenant Marine Baratie qui se bat Sanji et perd. Après devient chef doubleur avec Sanji à Baratie? Non devient ami Jango Marine. Il aime cuisine.",
    color: "#F59E0B",
    image: "/images/perso/fullbody.jpg"
  },

  {
    name: "Kurozumi Tama",
    epithet: "Tama the Kunoichi-in-training",
    crew: "Kurozumi Clan / Wano / Straw Hat Allies",
    role: "Kunoichi",
    bounty: "0",
    devilFruit: { name: "Kibi Kibi no Mi", type: "Paramecia", description: "Millet-Millet Fruit - Creates kibi dango that tames animals and SMILE users." },
    haki: { observation: true },
    techniques: [
      { name: "Kibi Dango", description: "Dango qui apprivoise animaux et SMILE.", type: "Devil Fruit", emoji: "🍡" },
    ],
    description: "Petite fille 8 ans qui apprivoise animaux et SMILE avec dango.",
    story: "Orpheline Wano dont parents morts Kaido usine poison. Elle fait dango Kibi Kibi qui dompte Speed, etc. Clé pour faire basculer Beast Pirates.",
    color: "#F472B6",
    image: "/images/tama.jpg"
  },

  {
    name: "Shimotsuki Yasuie",
    epithet: "Yasu - The Compassionate Daimyo",
    crew: "Wano / Hakumai (Former Daimyo)",
    role: "Former Daimyo",
    haki: { observation: true },
    techniques: [
      { name: "Ebisu Laughter", description: "Rit même face à mort pour donner espoir.", type: "Other", emoji: "😂" },
    ],
    description: "Daimyo Hakumai qui se sacrifie en riant.",
    story: "Père Toko, daimyo aimé. Il se fait passer pour Ushimitsu Kozo Robin Hood. Il se laisse exécuter en riant par Orochi pour cacher plan.",
    color: "#FDE68A",
    image: "/images/yasuie.jpg"
  },

  {
    name: "Higuma",
    epithet: "Bear Mountain Bandit",
    crew: "Higuma Bandits",
    role: "Leader",
    haki: { observation: true },
    techniques: [
      { name: "Bandit Threat", description: "Menace avec sabre, jette Luffy à mer.", type: "Other", emoji: "🐻" },
    ],
    description: "Bandit qui a poussé Shanks à perdre bras.",
    story: "Bandit montagne qui provoque Shanks à Foosha. Il jette Luffy à mer et se fait dévorer par Seigneur Côte, ce qui fait Shanks perdre bras pour sauver Luffy. Déclencheur du rêve Luffy.",
    color: "#78350F",
    image: "/images/higuma.jpg"
  },

  {
    name: "Makino",
    epithet: "Barmaid of Foosha",
    crew: "Foosha Village",
    role: "Bartender",
    haki: { observation: true },
    techniques: [
      { name: "Sake Serve", description: "Sert sake aux pirates.", type: "Other", emoji: "🍶" },
    ],
    description: "Serveuse bar Foosha, amie Shanks et Luffy.",
    story: "Barmaid Foosha qui a connu Luffy bébé et Shanks. Elle a enfant avec Shanks? Oda a mis enfant à côté d'elle fin Wano.",
    color: "#F472B6",
    image: "/images/makino.jpg"
  },

  {
    name: "Aisa",
    epithet: "Mantra Girl",
    crew: "Shandia / Skypiea",
    role: "Mantra User",
    haki: { observation: true, observationAdvanced: true },
    techniques: [
      { name: "Mantra - Advanced Observation", description: "Née avec Haki Observation avancé.", type: "Haki", emoji: "👁️" },
    ],
    description: "Petite fille Shandia née avec mantra ultra puissant.",
    story: "Fille Shandia 10 ans née avec Mantra qui entend voix mourir d'Enel. Elle sauve Gan Fall et aide Luffy.",
    color: "#FDE68A",
    image: "/images/aisa.jpg"
  },

  {
    name: "Laki",
    epithet: "Shandia Warrior",
    crew: "Shandia Warriors",
    role: "Warrior",
    haki: { observation: true },
    techniques: [
      { name: "Bazooka Burn", description: "Bazooka qui brûle.", type: "Gun", emoji: "🔫" },
    ],
    description: "Guerrière Shandia, amie Wyper.",
    story: "Guerrière Shandia qui combat Enel avec Wyper.",
    color: "#F472B6",
    image: "/images/laki.jpg"
  },

  {
    name: "Conis",
    epithet: "Angel of Skypiea",
    crew: "Skypiea",
    role: "Waitress / Guide",
    haki: { observation: true },
    techniques: [
      { name: "Angel Flute", description: "Joue flûte et guide.", type: "Other", emoji: "🎶" },
    ],
    description: "Ange Skypiea qui aide Luffy contre Enel.",
    story: "Fille Skypiea qui aide Luffy au début avec son père Pagaya.",
    color: "#FDE68A",
    image: "/images/conis.jpg"
  },

  {
    name: "Satori",
    epithet: "Ordeal of Balls",
    crew: "Enel's Army - Priests",
    role: "Priest",
    haki: { observation: true },
    techniques: [
      { name: "Ordeal of Balls - Surprise", description: "Boule surprise qui explose.", type: "Other", emoji: "⚪" },
    ],
    description: "Prêtre Enel ordeal boules surprises.",
    story: "Prêtre Enel qui fait Ordeal of Balls contre Luffy, Zoro, Sanji. Battu par Luffy.",
    color: "#FBBF24",
    image: "/images/satori.jpg"
  },

  {
    name: "Paulie",
    epithet: "The Shipwright",
    crew: "Galley-La Company",
    role: "Vice President - Shipwright",
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Rope Action: Round, Bind, Lash", description: "Technique corde qui lie et fouette.", type: "Other", emoji: "🪢" },
    ],
    description: "Charpentier vice-président Galley-La, cordu.",
    story: "Vice-président Galley-La, charpentier le plus pervers mais fort corde. Ami Iceburg et Franky.",
    color: "#0EA5E9",
    image: "/images/paulie.jpg"
  },

  {
    name: "Kokoro",
    epithet: "Mermaid Grandma",
    crew: "Tom's Workers / Sea Train - Former",
    role: "Secretary / Mermaid",
    haki: { observation: true },
    techniques: [
      { name: "Mermaid Secret", description: "Sirène cachée qui boit alcool.", type: "Other", emoji: "🧜‍♀️" },
    ],
    description: "Secrétaire Tom sirène cachée grand-mère Chimney.",
    story: "Secrétaire Tom, en fait sirène qui cache queue et boit saké. Grand-mère Chimney.",
    color: "#F472B6",
    image: "/images/kokoro.jpg"
  },

  {
    name: "Chimney",
    epithet: "The Cat Lover",
    crew: "Galley-La / Tom's Workers Family",
    role: "Granddaughter of Kokoro",
    haki: { observation: true },
    techniques: [
      { name: "Cat Gonbe Command", description: "Commande chat Gonbe.", type: "Other", emoji: "🐱" },
    ],
    description: "Petite fille de Kokoro avec chat Gonbe.",
    story: "Petite fille 10 ans de Kokoro avec chat Gonbe. Elle voyage avec Straw Hats Water 7 et Enies Lobby cachée dans Rocketman train.",
    color: "#FDE68A",
    image: "/images/chimney.jpg"
  },

  {
    name: "Kalifa",
    epithet: "Sexual Harassment",
    crew: "CP9 / CP0 (Former)",
    role: "Agent - Secretary",
    devilFruit: { name: "Awa Awa no Mi", type: "Paramecia", description: "Bubble-Bubble Fruit - Creates bubbles that wash away strength." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Golden Hour - Bubble", description: "Bulle qui lave force.", type: "Devil Fruit", emoji: "🫧" },
    ],
    description: "Secrétaire CP9 sexy harcèlement bulle.",
    story: "Secrétaire Iceburg CP9 infiltrée, Awa Awa qui fait bulles qui enlèvent force. Battue par Nami.",
    color: "#F9A8D4",
    image: "/images/kalifa.jpg"
  },

  {
    name: "Blueno",
    epithet: "Bull",
    crew: "CP9 / CP0",
    role: "Agent - Bartender",
    devilFruit: { name: "Doa Doa no Mi", type: "Paramecia", description: "Door-Door Fruit - Creates doors anywhere." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Doa Doa - Air Door", description: "Ouvre porte dans air.", type: "Devil Fruit", emoji: "🚪" },
    ],
    description: "Barman CP9 porte qui ouvre porte dans air.",
    story: "Barman CP9 Water 7 qui a Doa Doa porte. Battu par Luffy Gear 2.",
    color: "#6B7280",
    image: "/images/blueno.jpg"
  },

  {
    name: "Kumadori",
    epithet: "Yoyoi",
    crew: "CP9",
    role: "Agent",
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Yoyoi - Hair Control", description: "Cheveux qui bougent comme mains.", type: "Other", emoji: "💇‍♂️" },
    ],
    description: "CP9 cheveux qui bougent, yoyoi.",
    story: "CP9 avec cheveux qui bougent comme mains, dit yoyoi. Battu par Chopper Monster Point.",
    color: "#F472B6",
    image: "/images/kumadori.jpg"
  },

  {
    name: "Fukurou",
    epithet: "The Silent Owl",
    crew: "CP9",
    role: "Agent - Info Man",
    haki: { observation: true },
    techniques: [
      { name: "Chapapa - Zipper Mouth", description: "Fermeture éclair bouche qui dit secrets.", type: "Other", emoji: "🤐" },
    ],
    description: "Hibou rond qui dit secrets avec zip bouche.",
    story: "CP9 gros hibou avec fermeture éclair bouche qui dit secrets. Battu par Franky.",
    color: "#FBBF24",
    image: "/images/fukurou.jpg"
  },

  {
    name: "Absalom",
    epithet: "Invisible Man - Former",
    crew: "Thriller Bark Pirates / Former",
    role: "General Zombie - Former",
    devilFruit: { name: "Suke Suke no Mi (Former)", type: "Paramecia", description: "Former Clear-Clear Fruit user." },
    haki: { observation: true },
    techniques: [
      { name: "Invisible - Suke Suke (Former)", description: "Devenait invisible.", type: "Devil Fruit", emoji: "👻" },
    ],
    description: "Homme invisible Thriller Bark tué par Shiryu.",
    story: "Général zombie Thriller Bark invisible Suke Suke. Voulait épouser Nami. Tué par Shiryu qui vole fruit.",
    color: "#1F2937",
    image: "/images/absalom.jpg"
  },

  {
    name: "Dr. Hogback",
    epithet: "The Genius Surgeon",
    crew: "Thriller Bark Pirates",
    role: "Doctor",
    haki: { observation: true },
    techniques: [
      { name: "Zombie Surgery", description: "Chirurgie qui répare zombies.", type: "Other", emoji: "🧟‍♂️" },
    ],
    description: "Chirurgien génie qui crée zombies avec Moria.",
    story: "Docteur génie qui crée Oars géant zombie avec ombre Luffy. Battu par Chopper.",
    color: "#6B7280",
    image: "/images/hogback.jpg"
  },

  {
    name: "Hody Jones",
    epithet: "The White Shark",
    crew: "New Fish-Man Pirates",
    role: "Captain",
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Energy Steroid - EsEs", description: "Pilule EsEs qui double force.", type: "Other", emoji: "💊" },
    ],
    description: "Homme-poisson suprématiste qui hait humains.",
    story: "Fish-Man qui hait humains, prend EsEs stéroïdes. Tente coup d'état Fish-Man Island. Battu par Luffy et Jinbe.",
    color: "#F87171",
    image: "/images/hody.jpg"
  },

  {
    name: "Vander Decken IX",
    epithet: "The Flying Dutchman",
    crew: "Flying Pirates / Decken Pirates",
    role: "Captain",
    devilFruit: { name: "Mato Mato no Mi", type: "Paramecia", description: "Mark-Mark Fruit - Marks target." },
    haki: { observation: true },
    techniques: [
      { name: "Mato Mato - Mark", description: "Marque Shirahoshi, hache vole vers elle.", type: "Devil Fruit", emoji: "🎯" },
    ],
    description: "Homme-poisson qui harcèle Shirahoshi depuis 10 ans.",
    story: "Capitaine Flying Dutchman qui a Mato Mato qui marque cible. Harcèle Shirahoshi amoureux fou. Battu par Luffy.",
    color: "#0E7490",
    image: "/images/decken.jpg"
  },

  {
    name: "Wadatsumi",
    epithet: "The Giant Monk",
    crew: "New Fish-Man Pirates / Former Flying Pirates",
    role: "Giant Puffer Fish-Man",
    haki: { observation: true },
    techniques: [
      { name: "Puffer Inflation", description: "Gonfle comme ballon géant.", type: "Other", emoji: "🐡" },
    ],
    description: "Poisson globe géant qui gonfle.",
    story: "Géant poisson globe Flying Pirates Decken, puis allié Hody. Après Fish-Man Island devient allié Sun Pirates.",
    color: "#FDE68A",
    image: "/images/wadatsumi.jpg"
  },

  {
    name: "Otohime",
    epithet: "The Queen of Fish-Man Island",
    crew: "Ryugu Kingdom",
    role: "Former Queen",
    haki: { observation: true, observationAdvanced: true },
    techniques: [
      { name: "Kenbunshoku Advanced", description: "Lit émotions.", type: "Haki", emoji: "👁️" },
    ],
    description: "Reine Fish-Man qui prêchait cohabitation, mère Shirahoshi.",
    story: "Reine Otohime qui voulait cohabitation humains poissons, faisait pétition. Tuée par Hody Jones. Mère Shirahoshi.",
    color: "#F9A8D4",
    image: "/images/otohime.jpg"
  },

  {
    name: "Trebol",
    epithet: "The Sticky Man",
    crew: "Donquixote Pirates",
    role: "Elite Officer - Club",
    devilFruit: { name: "Beta Beta no Mi", type: "Paramecia", description: "Sticky-Sticky Fruit - Controls sticky mucus." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Beta Beta - Mucus Chain", description: "Mucus collant qui colle.", type: "Devil Fruit", emoji: "🤢" },
    ],
    description: "Homme morve collante qui a donné fruit à Doflamingo.",
    story: "Elite Donquixote qui a donné Ito Ito à Doflamingo enfant et l'a élevé comme roi. Nez qui coule toujours.",
    color: "#A3A3A3",
    image: "/images/trebol.jpg"
  },

  {
    name: "Dellinger",
    epithet: "The Fighter - Half Fish-Man",
    crew: "Donquixote Pirates",
    role: "Officer - Diamante Army",
    haki: { observation: true, armament: true },
    techniques: [
      { name: "High Heel Kick", description: "Talon haut qui tranche.", type: "Other", emoji: "👠" },
    ],
    description: "Mi homme-poisson avec talons aiguilles qui tranche.",
    story: "Officier Diamante mi homme-poisson avec talons qui tranche. Très jeune 16 ans. Battu par Hakuba Cavendish.",
    color: "#F472B6",
    image: "/images/dellinger.jpg"
  },

  {
    name: "Gladius",
    epithet: "The Pop Man",
    crew: "Donquixote Pirates",
    role: "Officer - Pica Army",
    devilFruit: { name: "Pamu Pamu no Mi", type: "Paramecia", description: "Pop-Pop Fruit - Inflates anything to make it explode." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Pamu Pamu - Pop", description: "Gonfle objet jusqu'à explosion.", type: "Devil Fruit", emoji: "💥" },
    ],
    description: "Homme qui fait gonfler et exploser tout.",
    story: "Officier Pica qui fait gonfler Pamu Pamu. Battu par Bartolomeo.",
    color: "#6B7280",
    image: "/images/gladius.jpg"
  },

  {
    name: "Lao G",
    epithet: "The Old Man - G",
    crew: "Donquixote Pirates",
    role: "Officer - Diamante Army",
    haki: { observation: true, armament: true, armamentAdvanced: true },
    techniques: [
      { name: "G - No Kokuin", description: "Boxe qui préserve douleur puis libère.", type: "Martial Arts", emoji: "👊" },
    ],
    description: "Vieil homme qui combat en préservant douleur.",
    story: "Vieux officier Diamante qui a G No Kokuin qui sauvegarde douleur et âge puis libère. Battu par Sai et Boo.",
    color: "#78350F",
    image: "/images/laog.jpg"
  },

  {
    name: "Senor Pink",
    epithet: "The Hard Boiled Man",
    crew: "Donquixote Pirates",
    role: "Officer - Diamante Army",
    devilFruit: { name: "Sui Sui no Mi", type: "Paramecia", description: "Swim-Swim Fruit - Swims through ground and walls." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Sui Sui - Swim Ground", description: "Nage dans sol et murs comme eau.", type: "Devil Fruit", emoji: "🏊‍♂️" },
    ],
    description: "Homme dur à cuire qui nage dans sol, histoire triste bébé.",
    story: "Officier Diamante dur qui nage dans sol Sui Sui. Histoire émouvante femme Lucian dans coma et bébé mort, il porte costume bébé pour elle. Battu par Franky.",
    color: "#F59E0B",
    image: "/images/senorpink.jpg"
  },

  {
    name: "Machvise",
    epithet: "The 10 Ton Man",
    crew: "Donquixote Pirates",
    role: "Officer - Diamante Army",
    devilFruit: { name: "Ton Ton no Mi", type: "Paramecia", description: "Ton-Ton Fruit - Changes weight 10 tons." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "10 Ton Vise", description: "Devient 10 tonnes puis 1000 tonnes écrase.", type: "Devil Fruit", emoji: "⚖️" },
    ],
    description: "Gros qui devient 10 tonnes puis 1000 tonnes.",
    story: "Officier Diamante gros qui devient lourd Ton Ton. Battu par Hajrudin qui le soulève malgré 1000 tonnes.",
    color: "#A3A3A3",
    image: "/images/machvise.jpg"
  },

  {
    name: "Chiffon",
    epithet: "Wife of Bege - Sister of Lola",
    crew: "Fire Tank Pirates / Big Mom Pirates (Former)",
    role: "Wife - 22nd Daughter of Big Mom",
    haki: { observation: true },
    techniques: [
      { name: "Cake Baking Support", description: "Aide à faire gâteau qui calme Big Mom.", type: "Cooking", emoji: "🎂" },
    ],
    description: "Fille Big Mom sœur jumelle Lola, femme Bege.",
    story: "22e fille Big Mom jumelle Lola, femme Bege. Elle aide Sanji à faire gâteau qui arrête Big Mom Whole Cake.",
    color: "#F472B6",
    image: "/images/chiffon.jpg"
  },

  {
    name: "Lola",
    epithet: "The Runaway Daughter",
    crew: "Thriller Bark Pirates (Former) / Big Mom Pirates (Former)",
    role: "Pirate Captain - Former",
    haki: { observation: true },
    techniques: [
      { name: "Chocolate Proposal", description: "Propose mariage à tout le monde.", type: "Other", emoji: "🍫" },
    ],
    description: "Fille Big Mom qui a fui mariage Elbaf et a rencontré Thriller Bark.",
    story: "Fille Big Mom 23e qui a fui mariage Elbaf avec Loki prince géant, ce qui a cassé alliance Elbaf et Big Mom. Elle devient pirate Thriller Bark et amie Nami avec Vivre Card Big Mom qu'elle donne à Nami.",
    color: "#F472B6",
    image: "/images/lola.jpg"
  },

  {
    name: "Sicilian",
    epithet: "Musketeer Lion",
    crew: "Mink Tribe",
    role: "Musketeer - Leader",
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Musketeer Sword - Lion Slash", description: "Épée mousquetaire lion.", type: "Sword", emoji: "🦁" },
    ],
    description: "Lion Musketeer chef Minks.",
    story: "Chef Mousquetaires Inuarashi, lion qui combat avec épée. Sulong fort. Il a combattu Jack à Zou.",
    color: "#FDE68A",
    image: "/images/sicilian.jpg"
  },

  {
    name: "Roddy",
    epithet: "The Bull Musketeer",
    crew: "Mink Tribe",
    role: "Musketeer",
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Bull Horn", description: "Corne taureau charge.", type: "Other", emoji: "🐂" },
    ],
    description: "Taureau Musketeer Mink.",
    story: "Mousquetaire taureau Mink qui combat Jack. Sulong.",
    color: "#78350F",
    image: "/images/roddy.jpg"
  },

  {
    name: "Blackback",
    epithet: "Gorilla Musketeer",
    crew: "Mink Tribe",
    role: "Musketeer",
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Gorilla Punch", description: "Poing gorille.", type: "Other", emoji: "🦍" },
    ],
    description: "Gorille Musketeer Mink.",
    story: "Mousquetaire gorille Mink, combat Jack. Sulong.",
    color: "#1F2937",
    image: "/images/blackback.jpg"
  },

  {
    name: "Guernica",
    epithet: "Agent of CP0 - Masked",
    crew: "CP0",
    role: "Agent - Masked",
    haki: { observation: true, armament: true, armamentAdvanced: true },
    techniques: [
      { name: "Rokushiki - Shigan", description: "Doigt pistolet CP0.", type: "Other", emoji: "👉" },
    ],
    description: "CP0 masqué qui a pris photo Luffy Gear 5 et trahi Drake.",
    story: "Agent CP0 masqué qui a pris photo Luffy Gear 5 pour Gorosei, et a tiré sur Drake à Wano.",
    color: "#1F2937",
    image: "/images/guernica.jpg"
  },

  {
    name: "Maha",
    epithet: "Agent of CP0",
    crew: "CP0",
    role: "Agent",
    haki: { observation: true, armament: true },
    techniques: [
      { name: "CP0 Assassination", description: "Assassin CP0 silencieux.", type: "Other", emoji: "🔪" },
    ],
    description: "CP0 grand qui accompagne Guernica.",
    story: "Agent CP0 grand avec Guernica et Joseph à Wano. Tué par Izou.",
    color: "#6B7280",
    image: "/images/maha.jpg"
  },

  {
    name: "Loki",
    epithet: "The Accursed Prince of Elbaf",
    crew: "Elbaf Kingdom",
    role: "Prince of Elbaf (Imprisoned)",
    bounty: "2,600,000,000",
    devilFruit: { name: "Legendary Devil Fruit of Elbaf (Alleged)", type: "Zoan", description: "Alleged legendary fruit that Loki allegedly ate by killing his father King Harald." },
    haki: { observation: true, armament: true, conqueror: true, conquerorAdvanced: true },
    techniques: [
      { name: "Hammer Ragnir - Thunder God", description: "Marteau Ragnir qui invoque foudre.", type: "Other", emoji: "🔨" },
    ],
    description: "Prince Elbaf maudit 2.6B, a tué père pour fruit légendaire.",
    story: "Prince Elbaf maudit, fils Harald, 2.6B prime spéciale Shanks l'a capturé? Enchaîné au plus bas Elbaf avec chaînes Seastone géantes et bêtes. Il veut épouser Lola? Non, fiancé Lola refusée. Il demande Luffy libère.",
    color: "#6B7280",
    image: "/images/loki.jpg"
  },

  {
    name: "Gunko",
    epithet: "Holy Knights - Arrow Girl",
    crew: "Holy Knights / World Government",
    role: "Holy Knight",
    devilFruit: { name: "Aro Aro no Mi", type: "Paramecia", description: "Arrow-Arrow Fruit - Creates arrows that guide and control." },
    haki: { observation: true, armament: true, conqueror: true },
    techniques: [
      { name: "Aro Aro - Arrow Guide", description: "Flèches qui guident et forcent suivre.", type: "Devil Fruit", emoji: "🏹" },
    ],
    description: "Holy Knights jeune fille avec flèches qui contrôlent.",
    story: "Holy Knights nouvelle Elbaf arc avec Shamrock et Sommers. Elle kidnappe Colon enfant de Ripley et Gaban?",
    color: "#000000",
    image: "/images/gunko.jpg"
  },

  {
    name: "Sommers",
    epithet: "Holy Knights - Thorn Man",
    crew: "Holy Knights",
    role: "Holy Knight",
    devilFruit: { name: "Iba Iba no Mi", type: "Paramecia", description: "Thorn-Thorn Fruit - Creates invisible thorns of love that hurt when love felt." },
    haki: { observation: true, armament: true, conqueror: true },
    techniques: [
      { name: "Iba Iba - Thorn Love", description: "Épines invisibles qui piquent quand enfant aime parent.", type: "Devil Fruit", emoji: "🌹" },
    ],
    description: "Holy Knights épines qui piquent enfants Elbaf.",
    story: "Holy Knights Elbaf qui fait épines amour invisible qui font souffrir enfants Elbaf quand ils aiment. Très cruel.",
    color: "#DC2626",
    image: "/images/sommers.jpg"
  },

  {
    name: "Killingham",
    epithet: "Holy Knights - Kirin Man",
    crew: "Holy Knights",
    role: "Holy Knight",
    devilFruit: { name: "Ryu Ryu no Mi, Model: Kirin", type: "Zoan", description: "Mythical Zoan Kirin - Dream monster, creates nightmare monsters from dreams." },
    haki: { observation: true, armament: true },
    techniques: [
      { name: "Kirin Nightmare - MMA", description: "Crée monstres de cauchemars à partir rêves enfants Elbaf.", type: "Devil Fruit", emoji: "🦄" },
    ],
    description: "Holy Knights Kirin qui fait cauchemars monstres MMA à Elbaf.",
    story: "Holy Knights Kirin mythique qui endort enfants Elbaf et fait monstres MMA qui attaquent Elbaf depuis cauchemars enfants.",
    color: "#FDE68A",
    image: "/images/killingham.jpg"
  },

  {
    name: "Wang Zhi",
    epithet: "Ochoku - One of Rocks Pirates Treasures",
    crew: "Former Rocks Pirates / Hachinosu Pirate",
    role: "Former Rocks Pirate - Ruler of Hachinosu (Former)",
    haki: { observation: true, armament: true, conqueror: true },
    techniques: [
      { name: "Ochoku - Treasure of Hachinosu", description: "Un des trésors Rocks avec Silver Axe, John.", type: "Other", emoji: "💰" },
    ],
    description: "Ex Rocks trésor Hachinosu, battu par Teach.",
    story: "Ex Rocks membre, un des trésors avec Silver Axe et John. Il régnait Hachinosu avant Teach le batte pour devenir roi Hachinosu.",
    color: "#78350F",
    image: "/images/ochoku.jpg"
  },

  {
    name: "Silver Axe",
    epithet: "One of Rocks Pirates Treasures",
    crew: "Former Rocks Pirates",
    role: "Former Rocks Pirate",
    haki: { observation: true, armament: true, conqueror: true },
    techniques: [
      { name: "Silver Axe Slash", description: "Hache argent tranche.", type: "Sword", emoji: "🪓" },
    ],
    description: "Ex Rocks trésor avec Ochoku.",
    story: "Membre Rocks, un des trésors Hachinosu avec Ochoku et John. Mentionné par Sengoku.",
    color: "#A3A3A3",
    image: "/images/silveraxe.jpg"
  },

  {
    name: "Captain John",
    epithet: "One of Rocks Pirates Treasures",
    crew: "Former Rocks Pirates / Thriller Bark Zombie (Former)",
    role: "Former Rocks Pirate / Zombie General",
    haki: { observation: true },
    techniques: [
      { name: "Zombie John - Treasure Mark", description: "Zombie général Thriller Bark avec trésor sur lui.", type: "Other", emoji: "🧟‍♂️" },
    ],
    description: "Ex Rocks, zombie général Thriller Bark.",
    story: "Ex Rocks membre trésor, devenu zombie général Thriller Bark avec trésor marqué sur corps.",
    color: "#4B5563",
    image: "/images/john.jpg"
  },

  {
    name: "Buckingham Stussy",
    epithet: "Miss Bakkin - Self-proclaimed Whitebeard's Lover",
    crew: "Former Rocks Pirates / MADS? / Cross Guild? / Mother of Weevil",
    role: "Self-proclaimed Lover of Whitebeard",
    haki: { observation: true },
    techniques: [
      { name: "Claim Whitebeard Treasure", description: "Prétend être amante Whitebeard et mère Weevil pour héritage.", type: "Other", emoji: "💋" },
    ],
    description: "Mère Weevil, ex Rocks? Prétend amante Whitebeard.",
    story: "Miss Bakkin se dit amante Whitebeard et mère Weevil clone? En fait elle est originale de Stussy clone MADS.",
    color: "#F9A8D4",
    image: "/images/bakkin.jpg"
  },

  {
    name: "Shachi",
    epithet: "Heart Pirates Engineer",
    crew: "Heart Pirates",
    role: "Engineer",
    haki: { observation: true },
    techniques: [
      { name: "Submarine Repair", description: "Répare Polar Tang avec Penguin.", type: "Other", emoji: "🔧" },
    ],
    description: "Ingénieur Heart Pirates, ami Law depuis North Blue.",
    story: "Membre Heart Pirates, ingénieur qui répare sous-marin. A suivi Law depuis enfance après Corazon mort.",
    color: "#15803D",
    image: "/images/shachi.jpg"
  },

  {
    name: "Penguin",
    epithet: "Heart Pirates Lookout",
    crew: "Heart Pirates",
    role: "Lookout",
    haki: { observation: true },
    techniques: [
      { name: "Lookout Duty", description: "Surveille avec jumelles, repère ennemis.", type: "Other", emoji: "🔭" },
    ],
    description: "Vigie Heart Pirates, porte bonnet pingouin.",
    story: "Membre Heart Pirates, vigie avec bonnet pingouin. Ami Law depuis jeune, avec Shachi.",
    color: "#15803D",
    image: "/images/penguin.jpg"
  },

  {
    name: "Jean Bart",
    epithet: "The Former Slave Captain",
    crew: "Heart Pirates",
    role: "Former Slave - Giant Muscle",
    haki: { observation: true },
    techniques: [
      { name: "Giant Muscle Strength", description: "Force géante ex esclave qui casse chaînes.", type: "Other", emoji: "💪" },
    ],
    description: "Ex esclave géant libéré par Law à Sabaody, rejoint Heart.",
    story: "Ex capitaine esclave libéré par Law à Sabaody Auction. Géant muscle qui rejoint Heart Pirates par gratitude.",
    color: "#6B7280",
    image: "/images/jeanbart.jpg"
  },

  {
    name: "Baby 5",
    epithet: "The Arms Girl",
    crew: "Former Donquixote Pirates / Happo Navy (Wife of Sai)",
    role: "Former Officer - Pica Army / Wife",
    devilFruit: { name: "Buki Buki no Mi", type: "Paramecia", description: "Arms-Arms Fruit - Turns body into weapons." },
    haki: { observation: true },
    techniques: [
      { name: "Buki Buki - Arms Transform", description: "Corps devient épée, fusil, bazooka.", type: "Devil Fruit", emoji: "🔫" },
    ],
    description: "Fille qui devient arme, a besoin d'être utile, épouse Sai.",
    story: "Officier Donquixote Pica qui devient arme Buki Buki. Elle a besoin pathologique d'être utile, Doflamingo exploite. Sai la sauve en demandant aide et l'épouse Happo Navy.",
    color: "#F472B6",
    image: "/images/baby5.jpg"
  },


];
