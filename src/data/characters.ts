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
    description: "The future Pirate King. Luffy dreams of finding the One Piece and bringing freedom to the world.",
    story: "Born in Foosha Village in the East Blue, Monkey D. Luffy was inspired by the pirate Shanks to become a pirate at age 7. After accidentally eating the Gomu Gomu no Mi (later revealed as the Hito Hito no Mi, Model: Nika), he gained a rubber body. At age 17, he set sail from Foosha Village, gathering crew members across the East Blue. He defeated Arlong, entered the Grand Line, and progressively challenged the Seven Warlords, Emperors, and the World Government itself. At Enies Lobby he declared war on the world to save Robin. At Marineford he witnessed Ace's death, which devastated him. After two years of training with Rayleigh, he mastered all three types of Haki. In the New World, he defeated Doflamingo, crashed Big Mom's tea party, and ultimately defeated Kaido in Wano to become a Yonko. His fruit awakened during the Kaido fight, revealing its true nature as the Nika fruit - the most ridiculous power in the world, embodying the warrior of liberation.",
    color: "#EF4444",
    image: "/images/luffy.jpg"
  },
  {
    name: "Roronoa Zoro",
    epithet: "Pirate Hunter",
    crew: "Straw Hat Pirates",
    role: "Swordsman",
    bounty: "1,111,000,000",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
    description: "The three-sword style swordsman, dreams of becoming the world's greatest swordsman.",
    story: "Orphaned as a child, Zoro trained at a dojo in Shimotsuki Village where he developed his unique three-sword style (Santoryu). He made a promise to his childhood rival Kuina to become the world's greatest swordsman. After wandering as a bounty hunter, he joined Luffy as his first crewmate. Throughout their journey, he faced Mihawk at Baratie and lost, but earned the Warlord's respect. At Thriller Bark, he took all of Luffy's pain to save his captain - a moment that defined his loyalty. During the timeskip, he trained under Mihawk himself. In Wano, he unlocked Conqueror's Haki (Haoshoku) and Enma, the sword that scarred Kaido. He achieved his dream of scarring Kaido and proved himself among the greatest swordsmen alive.",
    color: "#22C55E",
    image: "/images/zoro.jpg"
  },
  {
    name: "Nami",
    epithet: "Cat Burglar",
    crew: "Straw Hat Pirates",
    role: "Navigator",
    bounty: "366,000,000",
    haki: { observation: true, armament: true },
    description: "Brilliant navigator who maps the world. Dreams of creating a map of all the oceans.",
    story: "Orphaned by war as a baby, Nami and her sister Nojiko were adopted by Bellemere, a former Marine. When Arlong invaded Cocoyasi Village, Bellemere was killed protecting her daughters. Nami was forced to work as Arlong's cartographer for 8 years, secretly stealing to buy back her village. When Luffy defeated Arlong, she finally joined the Straw Hats for real. During the timeskip, she studied meteorology on Weatheria, mastering weather manipulation. She is considered one of the smartest characters in the series and her navigation skills have saved the crew countless times.",
    color: "#F97316",
    image: "/images/nami.jpg"
  },
  {
    name: "Usopp",
    epithet: "God Usopp",
    crew: "Straw Hat Pirates",
    role: "Sniper",
    bounty: "300,000,000",
    haki: { observation: true, observationAdvanced: true, armament: true },
    description: "Sniper and master of lies, dreams of becoming a brave warrior of the sea.",
    story: "Born in Syrup Village, Usopp is the son of Yasopp (Shanks' sniper). After his mother died, he told lies to cope and became the village storyteller. He joined Luffy after helping defeat Captain Kuro. His journey has been one of overcoming fear - at Water 7, he briefly left the crew over the Going Merry, but returned as Sogeking. At Dressrosa, he unlocked Observation Haki and was hailed as 'God Usopp' by the people. Despite his cowardice, he always finds courage when his friends need him most.",
    color: "#A3A5A3",
    image: "/images/usopp.jpg",
  },
  {
    name: "Sanji",
    epithet: "Black Leg",
    crew: "Straw Hat Pirates",
    role: "Cook",
    bounty: "1,032,000,000",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
    description: "Kick-fighting cook, dreams of finding the All Blue.",
    story: "The third son of the Vinsmoke family (Germa 66), Sanji was abused by his father Judge and brothers for being normal. He escaped with help from Reiju and was taken in by Zeff at the Baratie, losing his leg to save Sanji during a storm. Zeff taught him cooking and fighting. He joined Luffy at the Baratie. At Whole Cake Island, he confronted his family and learned the truth about his mother Sora's sacrifice. He unlocked Conqueror's Haki and Ifrit Jambe during the Wano arc, combining his genetic modifications (Exoskeleton) with his Haki for devastating attacks.",
    color: "#FBBF24",
    image: "/images/sanji.jpg"
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
    description: "Reindeer doctor of the crew, dreams of curing every disease in the world.",
    story: "A reindeer who ate the Hito Hito no Mi, Chopper was ostracized by his herd. He was taken in by the quack doctor Hiluluk, who gave him his name and his cherry blossom flag. After Hiluluk's tragic death, Chopper trained under Dr. Kureha on Drum Island. When Luffy defeated Wapol, Chopper joined the crew as their doctor. During the timeskip, he studied medicine on Torino Island. In Wano, he developed his Monster Point further and his fruit eventually awakened, giving him new transformation forms.",
    color: "#EC4899",
    image: "/images/chopper.jpg",
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
    description: "Sole survivor of Ohara, dreams of finding the True History of the Void Century.",
    story: "Born on the island of scholars Ohara, Robin became an archaeologist at age 8 and read the Poneglyphs. When the World Government issued a Buster Call that destroyed Ohara and killed all scholars, Robin was the sole survivor, saved by Aokiji. She spent 20 years on the run, betrayed by everyone she trusted. She joined Crocodile as Miss All Sunday, then the Straw Hats after Alabasta. At Enies Lobby, she finally found people who would fight the world for her - 'I want to live!' During the timeskip, she studied with the Revolutionaries. She continues deciphering the Road Poneglyphs to find Laugh Tale.",
    color: "#8B5CF6",
    image: "/images/robin.jpg",
  },
  {
    name: "Franky",
    epithet: "Cyborg",
    crew: "Straw Hat Pirates",
    role: "Shipwright",
    bounty: "394,000,000",
    haki: { observation: true, armament: true },
    description: "Cyborg shipwright, dreams of building the dream ship that will sail around the world.",
    story: "Originally named Cutty Flam, Franky was a shipwright apprentice under Tom in Water 7. Tom built the Oro Jackson for Roger and was sentenced to death, but Franky couldn't save him. After being hit by the Sea Train, Franky rebuilt himself as a cyborg using cola as power. He eventually built the Thousand Sunny for the Straw Hats using Adam Wood. He joined the crew after the Enies Lobby battle. During the timeskip, he studied Vegapunk's old lab on Karakuri Island and upgraded his body with General Franky.",
    color: "#06B6D4",
    image: "/images/franky.jpg",
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
    description: "Skeletal musician of the crew, dreams of reuniting with Laboon the whale.",
    story: "Originally a member of the Rumbar Pirates, Brook died in the Florian Triangle but was revived by the Yomi Yomi no Mi. His soul got lost and returned to his body after it had decomposed to bone. He spent 50 years alone, playing music for the skeleton crew. He promised his captain Yorki he would return to Laboon. After joining the Straw Hats at Thriller Bark, he became a beloved crew member. During the timeskip, he became the rock star 'Soul King' in the Florian Triangle. He mastered soul manipulation, allowing him to freeze enemies with the cold of the underworld.",
    color: "#6B7280",
    image: "/images/brook.jpg",
  },
  {
    name: "Jinbe",
    epithet: "First Son of the Sea",
    crew: "Straw Hat Pirates",
    role: "Helmsman",
    bounty: "1,100,000,000",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true },
    description: "Fish-man ex-Warlord, dreams of coexistence between humans and fish-men.",
    story: "A whale shark fish-man from Fish-Man Island, Jinbe was a member of the Sun Pirates under Fisher Tiger. After Tiger's death, he became captain and then a Warlord to improve fish-man relations. He resigned from the Warlords to fight at Marineford, where he saved Luffy from Akainu. After the timeskip, he helped Luffy at Whole Cake Island and officially joined the Straw Hats in Wano. He is a master of Fish-Man Karate and is considered one of the strongest fish-men alive. His dream is to see true coexistence between humans and fish-men, as Fisher Tiger envisioned.",
    color: "#3B82F6",
    image: "/images/jinbe.jpg"
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
    description: "The only pirate with two Devil Fruits. One of the Four Emperors.",
    story: "Teach served under Whitebeard for decades, hiding his true ambitions. He killed Thatch over the Yami Yami no Mi and fled, defeating Ace and turning him in to become a Warlord. At Marineford, he stole the Gura Gura no Mi from Whitebeard's corpse - the first person in history to possess two Devil Fruits. Over the timeskip, he recruited Level 6 prisoners from Impel Down and defeated the remnants of the Whitebeard Pirates. He became a Yonko and continues to hunt powerful Devil Fruits for his crew. He is one of Luffy's greatest enemies.",
    color: "#1F2937",
    image: "/images/teach.jpg"
  },
  {
    name: "Shanks",
    epithet: "Red-Haired",
    crew: "Red-Haired Pirates",
    role: "Captain",
    bounty: "4,048,900,000",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
    description: "Luffy's inspiration and one of the Four Emperors. Master of the most powerful Haki in the world.",
    story: "Former apprentice of the Roger Pirates alongside Buggy, Shanks lost his left arm saving young Luffy from a Sea King in Foosha Village. He inspired Luffy to become a pirate and gave him his straw hat. He became a Yonko at some point after the Roger era. He is considered the most powerful Haki user in the world, capable of intimidating Sea Kings and damaging ships with his Conqueror's Haki alone. He stopped the Paramount War with his mere presence. His mysterious connection to the World Government and the Figarland family has been hinted at. He remains Luffy's benchmark for becoming Pirate King.",
    color: "#DC2626",
    image: "/images/shanks.jpg"
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
    description: "Former Yonko, ruled Totto Land with overwhelming power.",
    story: "Abandoned by her parents on Elbaf as a child due to her uncontrollable strength, Charlotte Linlin was taken in by Mother Carmel. After Carmel's mysterious disappearance, Linlin founded Totto Land, a nation of islands made of food, populated by her 85 children. She became a Yonko and ruled with fear and her Soru Soru no Mi, creating Homies from the souls of her subjects. At Whole Cake Island, she was temporarily subdued by the Straw Hats. During the Wano arc, she allied with Kaido but was ultimately defeated by Law and Kid, who sent her deep into the earth.",
    color: "#BE185D",
    image: "/images/bigmom.jpg"
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
    description: "Former Yonko called the strongest creature, ruled Wano with absolute terror.",
    story: "Kaido was once a member of the Rocks Pirates alongside Big Mom and Whitebeard. After the crew's defeat at God Valley, he was experimented on by Vegapunk and eventually obtained the Uo Uo no Mi. He conquered Wano Country 20 years ago, allying with Orochi and turning the country into a weapons factory. He sought to create the strongest crew through his All-Star system. He was defeated by Luffy in an epic battle atop the Floating Island, with Luffy's Gear 5 Nika awakening overpowering him. Kaido fell into the magma chambers beneath Wano, his fate uncertain.",
    color: "#7C3AED",
    image: "/images/kaido.jpg"
  },
  {
    name: "Gol D. Roger",
    epithet: "Pirate King",
    crew: "Roger Pirates",
    role: "Captain",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
    description: "The only man to conquer the entire Grand Line. Launched the Great Pirate Era with his dying words.",
    story: "Gol D. Roger was born in Loguetown and became the most powerful pirate in history. With his crew including Rayleigh, Scopper Gaban, Crocus, and apprentices Shanks and Buggy, he conquered the Grand Line using the Road Poneglyphs. He reached Laugh Tale and discovered the true history of the Void Century, the Will of D., and the Ancient Weapons. Knowing he was dying from an incurable disease, he turned himself in to the Marines. At his execution in Loguetown, he announced that his treasure, the One Piece, was out there for the taking - launching the Great Pirate Era that has lasted 24 years.",
    color: "#F59E0B",
    image: "/images/roger.jpg"
  },
  {
    name: "Silvers Rayleigh",
    epithet: "Dark King",
    crew: "Roger Pirates",
    role: "First Mate",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
    description: "Roger's right hand, Haki master who trained Luffy on Ruskaina.",
    story: "The Dark King Silvers Rayleigh was Roger's first mate and the right hand of the Pirate King. Despite being retired, he remains one of the most powerful people in the world. He saved young Robin from Ohara's Buster Call. After Roger's death, he lived quietly on Sabaody as a coating mechanic. He saved the Straw Hats from Kizaru at Sabaody and trained Luffy on Ruskaina Island during the timeskip, teaching him all three types of Haki. Even in his old age, he swam across the Calm Belt and fought Kizaru to a standstill.",
    color: "#9CA3AF",
    image: "/images/silver.jpg"
  },
  {
    name: "Dracule Mihawk",
    epithet: "Hawk Eyes",
    crew: "Former Warlord",
    role: "Greatest Swordsman",
    bounty: "3,490,000,000",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true },
    description: "The world's greatest swordsman, master of the black blade. Zoro's mentor.",
    story: "Dracule Mihawk holds the title of World's Greatest Swordsman, a position he has maintained for decades. He wields the black blade Yoru, one of the 12 Supreme Grade Swords. He was a Warlord of the Sea until the system was abolished. He trained Zoro during the two-year timeskip, seeing potential in the young swordsman. After the Warlord system was dissolved, he was hunted by the Marines but was saved by Crocodile and later joined the Cross Guild. His relationship with Shanks as a rival swordsman is well-known - they dueled evenly before Shanks lost his arm.",
    color: "#1F2937",
    image: "/images/dracule.jpg"
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
    description: "Former apprentice of Roger, became one of the Four Emperors by accident.",
    story: "Buggy was a fellow apprentice alongside Shanks on the Roger Pirates' ship. He ate the Bara Bara no Mi and has been a pirate ever since. Despite his apparent weakness, incredible luck and circumstance propelled him to extraordinary heights. After escaping Impel Down with Luffy and fighting at Marineford, he was recruited as a Warlord. When the Warlord system was abolished, he founded Buggy's Delivery service. After Cross Guild was formed with Mihawk and Crocodile, the world mistakenly credited Buggy as its leader, elevating him to Yonko status - a position he never truly earned but now must maintain.",
    color: "#EF4444",
    image: "/images/baggy.jpg"
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
    description: "Supernova captain and Luffy's ally at Wano. Master of the Ope Ope no Mi.",
    story: "Born as a survivor of the White Lead Disease in Flevance, Law was orphaned and taken in by Doflamingo's crew. He was healed of his disease by Corazon (Doflamingo's brother), who sacrificed himself to get Law the Ope Ope no Mi. Law spent 13 years planning revenge against Doflamingo. He formed an alliance with Luffy at Punk Hazard and played a crucial role in defeating Doflamingo at Dressrosa. In Wano, he was key to defeating Big Mom alongside Kid. He carries the Will of D. in his name, making him part of the mysterious D. lineage.",
    color: "#15803D",
    image: "/images/law.jpg"
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
    description: "Supernova captain rival of Luffy, specialist in destructive magnetism.",
    story: "Eustass Kid entered the New World with a reputation for extreme violence and high civilian casualties. He lost his left arm in a battle against Shanks' subordinate. Despite this, he remained one of the most dangerous Supernovas. He formed alliances and was captured by Kaido, but escaped and joined the Wano alliance. In the final battle, he awakened his Jiki Jiki no Mi and, alongside Law, defeated Big Mom - one of the most impressive feats in the series. His brutal, destructive fighting style contrasts with Luffy's freedom-based approach.",
    color: "#DC2626",
    image: "/images/kid.jpg"
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
    description: "Queen of Amazon Lily, former Warlord, in love with Luffy.",
    story: "Boa Hancock and her sisters were kidnapped by Celestial Dragons as children and forced into slavery, bearing the Hoof of the Soaring Dragon mark. They were fed Devil Fruits for entertainment. After Fisher Tiger freed them, Hancock became the Empress of Amazon Lily and a Warlord. She fell in love with Luffy after he protected her sisters' secret and showed her genuine kindness. She helped Luffy infiltrate Impel Down and supported him at Marineford. After the Warlord system was abolition, Amazon Lily was attacked, but she was saved by Rayleigh and the Kuja warriors.",
    color: "#DB2777",
    image: "/images/hancock.jpg"
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
    description: "Former Warlord, enemy of Alabasta, co-founder of Cross Guild.",
    story: "Crocodile was once a rookie who challenged Whitebeard in the New World but was defeated. He returned to Paradise and became a Warlord. He spent years plotting to take over Alabasta, forming Baroque Works and manipulating the kingdom from the shadows. He was defeated by Luffy and imprisoned in Impel Down Level 6. He escaped during the breakout and fought at Marineford, saving Luffy and Jinbe from Akainu. After the war, he vanished to the New World. He later co-founded the Cross Guild with Mihawk and Buggy, becoming a powerful underworld figure once more.",
    color: "#92400E",
    image: "/images/crocodile.jpg"
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
    description: "Former Celestial Dragon and Warlord, ruled Dressrosa as the King of Darkness.",
    story: "Born a Celestial Dragon, Doflamingo was hated by the world after his father chose to live among commoners. His mother died of illness and his father was lynched. Doflamingo killed his own father and tried to return to Mary Geoise, but was refused. He rose to become a Warlord, using the Ito Ito no Mi to control Dressrosa for a decade. He ran a vast underground operation trading in weapons, SMILE fruits, and artificial Devil Fruits. He was defeated by Luffy's Gear 4 at Dressrosa and imprisoned in Impel Down Level 6, where he revealed secrets about the National Treasure of Mary Geoise.",
    color: "#F59E0B",
    image: "/images/doflamingo.jpg"
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
    description: "Fleet Admiral, the most powerful man in the Marines. Absolute Justice.",
    story: "Sakazuki embodies Absolute Justice - the belief that all pirates must be eliminated, regardless of innocence. He was a key figure at the Paramount War, killing Ace and fighting Aokiji for ten days to become Fleet Admiral. His magma fist pierced through Whitebeard's body. Under his leadership, the Marines became far more aggressive, relocating HQ to the New World and establishing a draft system. He killed any Marine who hesitated at Marineford, even his own allies. Despite his extreme methods, he genuinely believes in protecting civilians from pirates.",
    color: "#DC2626",
    image: "/images/akainu.jpg"
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
    description: "Former Marine Admiral, left the Marines after losing to Akainu.",
    story: "Kuzan believed in Lazy Justice - justice should be applied thoughtfully, not ruthlessly. He spared Robin at Ohara out of mercy. He fought Sakazuki for ten days at Punk Hazard to determine the next Fleet Admiral, but lost and left the Marines rather than serve under Akainu. He was later revealed to have joined the Blackbeard Pirates as their tenth Titanic Captain, though his true motives remain mysterious. He provided crucial help to the Straw Hats at Long Ring Long Land and saved Smoker from Doflamingo.",
    color: "#3B82F6",
    image: "/images/kuzan.jpg"
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
    description: "Marine Admiral who fights at the speed of light.",
    story: "Borsalino embodies Unclear Justice - he follows orders but with a casual, lazy attitude. He was sent to Sabaody after Luffy punched a Celestial Dragon and single-handedly overwhelmed the Straw Hats and their allies. At Marineford, he was one of the three Admirals holding the line. His Pika Pika no Mi makes him nearly invincible, capable of moving and attacking at light speed. After the timeskip, he remains one of the Marines' three Admirals alongside Fujitora and Ryokugyu.",
    color: "#FBBF24",
    image: "/images/kizaro.jpg"
  },
  {
    name: "Monkey D. Garp",
    epithet: "Hero of the Marines",
    crew: "Marines",
    role: "Vice Admiral",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
    description: "Luffy's grandfather, the Hero of the Marines. Legendary rival of Roger.",
    story: "Monkey D. Garp is one of the most powerful Marines in history. He repeatedly cornered Gol D. Roger and was his greatest rival. He earned the title 'Hero of the Marines' for his role in the God Valley incident against the Rocks Pirates. Despite his power, he refused promotion to Admiral to maintain his freedom. He adopted Ace (Roger's son) and trained Luffy and Ace alongside his other protege Coby. His greatest regret was failing to save Ace at Marineford. He eventually confronted Koby's kidnapping by the Blackbeard Pirates, leading to a major battle at Hachinosu.",
    color: "#15803D",
    image: "/images/garp.jpg"
  },
  {
    name: "Monkey D. Dragon",
    epithet: "Revolutionary",
    crew: "Revolutionary Army",
    role: "Supreme Commander",
    haki: { observation: true, observationAdvanced: true, armament: true, armamentAdvanced: true, conqueror: true, conquerorAdvanced: true },
    description: "Luffy's father and leader of the Revolutionary Army, the most wanted man in the world.",
    story: "Monkey D. Dragon is the son of Garp and father of Luffy, though Luffy didn't know this until after Enies Lobby. He founded the Revolutionary Army to directly oppose the World Government and the Celestial Dragons. He saved Luffy at Loguetown from Smoker. His powers remain largely mysterious, though he seems capable of controlling weather or wind. Under his leadership, the Revolutionary Army has liberated multiple nations from World Government control. After the Paramount War, he declared war on the World Government openly. He finally confronted Imu and the Five Elders during the Egghead incident.",
    color: "#16A34A",
    image: "/images/dragon.jpg"
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
    description: "Adoptive brother of Luffy and Ace, heir to the Mera Mera no Mi.",
    story: "Sabo was born a noble in Goa Kingdom but rejected his heritage. He became brothers with Ace and Luffy, sharing their sake cup oath. He was seemingly killed by a Celestial Dragon's cannon while setting sail as a child, but was saved by Dragon and raised in the Revolutionary Army. He lost his memories of his childhood but recovered them after reading about Ace's death in the newspaper. He won the Mera Mera no Mi at Dressrosa's Colosseum, inheriting Ace's will. He carries the Will of D. and is considered the number two of the Revolutionary Army.",
    color: "#EA580C",
    image: "/images/sabo.jpg"
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
    description: "Son of Gol D. Roger and Luffy's adoptive brother. Died at Marineford saving Luffy.",
    story: "Portgas D. Ace was the son of Gol D. Roger and Portgas D. Rouge, born on Baterilla in the South Blue. His mother died after holding him for 20 months. He was adopted by Garp and raised alongside Luffy and Sabo. After Sabo's apparent death, Ace became fiercely protective of Luffy. He joined the Whitebeard Pirates and became the 2nd Division Commander, turning down an offer to become a Warlord. He was defeated by Blackbeard and handed to the Marines. At Marineford, he was freed but died protecting Luffy from Akainu's magma fist - his final words thanked everyone for loving him.",
    color: "#F97316",
    image: "/images/ace.jpg"
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
    description: "The Strongest Man in the World, legendary Yonko who died at Marineford.",
    story: "Edward Newgate, known as Whitebeard, was once a member of the Rocks Pirates alongside Roger, Big Mom, and Kaido. After the crew's dissolution, he became a Yonko and built the largest pirate fleet in the world. Unlike other Yonko, he considered his crew his family and would go to war for any member. He possessed the Gura Gura no Mi, capable of destroying the world itself. At Marineford, he fought to save Ace and died standing, having declared that the One Piece exists. Even in death, his power was fearsome - Blackbeard had to ambush him to steal his Devil Fruit.",
    color: "#F8FAFC",
    image: "/images/edward.jpg"
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
    description: "CP0's deadliest agent, Luffy's sworn enemy since Enies Lobby.",
    story: "Rob Lucci was raised by the World Government from age 6 as a killing machine. At Enies Lobby, he was the strongest CP9 agent and Luffy's greatest battle, pushing Luffy to develop Gear 2 and Gear 3. After CP9's defeat, he was imprisoned but escaped. During the timeskip, he rose to become the strongest member of CP0, the World Government's supreme intelligence agency. His Neko Neko no Mi awakened during the Egghead arc, making him even more powerful. He fought Luffy again in their awakened forms, representing the clash between freedom and absolute control.",
    color: "#1F2937",
    image: "/images/lucci.jpg"
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
    description: "Self-proclaimed God of Skypiea, master of lightning. Defeated by Luffy at Skypiea.",
    story: "Enel was born on Birka, a sky island. He destroyed his homeland and came to Skypiea, overthrowing the existing God Gan Fall. Using his Goro Goro no Mi, he ruled as a tyrannical god, planning to return to the moon (Fairy Vearth) using the Maxim ship. He was defeated by Luffy, whose rubber body was immune to lightning - Enel's first-ever defeat. After being launched to the moon by the Knock Up Stream, he discovered an ancient civilization of automata and the true history of the sky people. His Observation Haki (Mantra) was so powerful it covered all of Skypiea.",
    color: "#FBBF24",
    image: "/images/enel.jpg"
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
    description: "Marine who has been chasing Luffy since Loguetown.",
    story: "Smoker was a Marine Captain stationed in Loguetown where he first encountered Luffy. He was one of the few Marines who sensed something special about Luffy from the start. He chased the Straw Hats into the Grand Line, eventually becoming a Vice Admiral in the New World. At Punk Hazard, he worked alongside Tashigi to investigate Vegapunk's lab, where he was brutally beaten by Vergo. He was saved by Aokiji and continues to pursue justice in his own way, caring more about protecting people than following orders blindly.",
    color: "#9CA3AF",
    image: "/images/smoker.jpg"
  },
];
