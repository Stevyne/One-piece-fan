export interface Island {
  name: string;
  description: string;
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
}

export interface Sea {
  id: string;
  name: string;
  description: string;
  color: string;
  islands: Island[];
  position: [number, number, number];
}

export const seas: Sea[] = [
  {
    id: "east-blue",
    name: "East Blue",
    description: "L'une des quatre mers du Blue Sea, connue comme la plus faible mais aussi la plus paisible. C'est la mer d'origine de Luffy, Zoro, Nami, Usopp et Sanji. Surnommée la mer la plus faible du monde, elle a pourtant produit de grands pirates comme Gold Roger et Luffy.",
    color: "#3B82F6",
    position: [-4, 0, 2],
    islands: [
      { name: "Foosha Village", description: "Village natal de Luffy, où se trouve le bar de Makino et où Shanks a inspiré Luffy à devenir pirate.", x: -5.2, y: 0.5, z: 2.8, size: 0.12, color: "#60A5FA" },
      { name: "Shell's Town", description: "Base de la Marine dirigée par le Capitaine Morgan, où Zoro fut emprisonné.", x: -4.8, y: -0.3, z: 1.5, size: 0.1, color: "#60A5FA" },
      { name: "Orange Town", description: "Ville contrôlée par Buggy le Clown, où Luffy rencontra Nami.", x: -4.5, y: 0.8, z: 1.8, size: 0.11, color: "#60A5FA" },
      { name: "Syrup Village", description: "Village natal d'Usopp, où se trouve la mansion de Kaya et où l'équipage obtint le Going Merry.", x: -3.8, y: -0.6, z: 2.5, size: 0.1, color: "#60A5FA" },
      { name: "Baratie", description: "Restaurant flottant sur l'eau, où Sanji travaillait avant de rejoindre l'équipage.", x: -4.2, y: 0.2, z: 3.2, size: 0.13, color: "#60A5FA" },
      { name: "Cocoyasi Village", description: "Village natal de Nami, opprimé par Arlong et ses hommes-poissons.", x: -3.5, y: 0.7, z: 1.2, size: 0.11, color: "#60A5FA" },
      { name: "Loguetown", description: "Ville où Gold Roger est né et a été exécuté, marquant le début de la Grande Ère de la Piraterie.", x: -4.0, y: -0.8, z: 3.5, size: 0.15, color: "#93C5FD" },
    ]
  },
  {
    id: "west-blue",
    name: "West Blue",
    description: "L'une des quatre mers du Blue Sea. Elle est connue pour être la mer d'origine de plusieurs figures importantes dont Rob Lucci, Shiryu et la famille Vinsmoke. C'est aussi la mer d'où vient le Ohara.",
    color: "#8B5CF6",
    position: [4, 0, 2],
    islands: [
      { name: "Ohara", description: "Île des archéologues, détruite par le Buster Call pour avoir étudié les Siècles Obscurs.", x: 4.2, y: 0.5, z: 1.8, size: 0.13, color: "#A78BFA" },
      { name: "Ilusia", description: "Royaume du West Blue mentionné dans l'histoire.", x: 3.5, y: -0.3, z: 2.5, size: 0.1, color: "#A78BFA" },
      { name: "Torino", description: "Île où les oiseaux géants règnent sur les humains, visitée par Chopper.", x: 4.8, y: 0.7, z: 2.8, size: 0.1, color: "#A78BFA" },
    ]
  },
  {
    id: "north-blue",
    name: "North Blue",
    description: "L'une des quatre mers du Blue Sea. C'est la mer d'origine de la famille Don Quichotte (Doflamingo), de Law, de Sanji (Vinsmoke) et de Bellamy.",
    color: "#06B6D4",
    position: [-4, 0, -2],
    islands: [
      { name: "Swallow Island", description: "Île où Trafalgar Law a grandi.", x: -4.5, y: 0.3, z: -2.5, size: 0.1, color: "#22D3EE" },
      { name: "Rubeck", description: "Île du North Blue mentionnée dans l'histoire.", x: -3.8, y: -0.5, z: -1.8, size: 0.09, color: "#22D3EE" },
      { name: "Germa Kingdom", description: "Royaume flottant de la famille Vinsmoke, royaume sans territoire fixe.", x: -4.2, y: 0.8, z: -3.0, size: 0.12, color: "#22D3EE" },
    ]
  },
  {
    id: "south-blue",
    name: "South Blue",
    description: "L'une des quatre mers du Blue Sea. C'est la mer d'origine de Bon Clay (Mr. 2), de Buggy et d'autres pirates notables.",
    color: "#10B981",
    position: [4, 0, -2],
    islands: [
      { name: "Baterilla", description: "Île natale de Portgas D. Ace, fils de Gold Roger.", x: 3.8, y: 0.4, z: -2.5, size: 0.12, color: "#34D399" },
      { name: "Briss", description: "Royaume du South Blue.", x: 4.5, y: -0.3, z: -1.8, size: 0.09, color: "#34D399" },
    ]
  },
  {
    id: "grand-line",
    name: "Grand Line (Paradise)",
    description: "La route maritime la plus dangereuse du monde, s'étendant perpendiculairement à la Red Line. La première moitié est appelée 'Paradise' par les pirates du Nouveau Monde. Elle est bordée par les Calm Belts infestés de Rois des Mers.",
    color: "#F59E0B",
    position: [0, 0, 4],
    islands: [
      { name: "Reverse Mountain", description: "Montagne où les courants des quatre mers se rejoignent pour entrer dans la Grand Line.", x: 0.5, y: 0.8, z: 4.2, size: 0.15, color: "#FBBF24" },
      { name: "Whiskey Peak", description: "Île des chasseurs de primes sous Baroque Works, première île de la Grand Line.", x: -0.5, y: -0.3, z: 4.5, size: 0.1, color: "#FBBF24" },
      { name: "Little Garden", description: "Île préhistorique où deux géants, Dorry et Brogy, se battent depuis 100 ans.", x: 0.3, y: 0.5, z: 3.8, size: 0.11, color: "#FBBF24" },
      { name: "Drum Island", description: "Île des médecins, où Chopper a vécu avec le Dr. Hiluluk et le Dr. Kureha.", x: -0.8, y: -0.6, z: 3.5, size: 0.12, color: "#FBBF24" },
      { name: "Alabasta", description: "Royaume desertique de Nefertari Vivi, ciblé par Baroque Works et Crocodile.", x: 0.7, y: 0.2, z: 3.2, size: 0.18, color: "#FCD34D" },
      { name: "Jaya", description: "Île de la contre-culture pirate, où les rêves sont moqués. Base de Bellamy.", x: -0.3, y: 0.7, z: 2.8, size: 0.1, color: "#FBBF24" },
      { name: "Skypiea", description: "Île céleste à 10 000m d'altitude, où se trouve la cité de Shandora et le Poneglyphe.", x: -0.1, y: 1.5, z: 2.5, size: 0.14, color: "#FDE68A" },
      { name: "Long Ring Long Land", description: "Île aux formes allongées, théâtre du Davy Back Fight contre Foxy.", x: 0.5, y: -0.8, z: 2.2, size: 0.09, color: "#FBBF24" },
      { name: "Water 7", description: "Cité de l'eau et des charpentiers marins, inspirée de Venise. Siège de la Galley-La.", x: 0.2, y: 0.3, z: 1.8, size: 0.16, color: "#FCD34D" },
      { name: "Enies Lobby", description: "Île de la justice, siège du gouvernement mondial et du tribunal. Porte de la Justice.", x: 0.6, y: -0.4, z: 1.5, size: 0.13, color: "#FBBF24" },
      { name: "Thriller Bark", description: "Navire-île fantôme géant de Gecko Moria, le plus grand navire du monde.", x: -0.5, y: 0.6, z: 1.2, size: 0.14, color: "#FBBF24" },
      { name: "Sabaody Archipelago", description: "Archipel des bubbles, dernier arrêt avant le Nouveau Monde. Lieu des Grognards.", x: 0.0, y: -0.2, z: 0.8, size: 0.15, color: "#FCD34D" },
    ]
  },
  {
    id: "new-world",
    name: "Nouveau Monde",
    description: "La seconde moitié de la Grand Line, infiniment plus dangereuse que Paradise. Dominée par les Quatre Empereurs (Yonko), c'est là que se trouve Laugh Tale, l'île finale de One Piece.",
    color: "#EF4444",
    position: [0, 0, -4],
    islands: [
      { name: "Fish-Man Island", description: "Royaume sous-marin des hommes-poissons et des sirènes, dirigé par la famille Neptune.", x: 0.0, y: -0.5, z: -0.5, size: 0.14, color: "#F87171" },
      { name: "Punk Hazard", description: "Île interdite aux pirates, théâtre des expériences de Caesar Clown et du duel Aokiji vs Akainu.", x: -0.6, y: 0.3, z: -1.5, size: 0.12, color: "#F87171" },
      { name: "Dressrosa", description: "Royaume de Doflamingo, pays de l'animation et des jouets. Inspiré de l'Espagne.", x: 0.5, y: -0.6, z: -2.5, size: 0.18, color: "#FCA5A5" },
      { name: "Zou", description: "Île sur le dos de l'éléphant géant Zunisha, pays des Minks.", x: -0.3, y: 0.8, z: -3.0, size: 0.13, color: "#F87171" },
      { name: "Whole Cake Island", description: "Île de Big Mom, territoire principal de Totto Land. Île de gâteau géant.", x: 0.8, y: 0.2, z: -3.5, size: 0.16, color: "#FCA5A5" },
      { name: "Wano Country", description: "Pays isolé et fermé, dirigé par Kaido. Pays des samouraïs inspiré du Japon féodal.", x: -0.5, y: -0.7, z: -4.0, size: 0.2, color: "#FCA5A5" },
      { name: "Egghead", description: "Île du futur, laboratoire du Dr. Vegapunk. Île de la science et de la technologie.", x: 0.3, y: 0.5, z: -4.5, size: 0.13, color: "#F87171" },
      { name: "Laugh Tale", description: "L'île finale de la Grand Line, où se trouve le légendaire One Piece. Atteinte uniquement par l'équipage de Roger.", x: 0.0, y: -0.3, z: -5.0, size: 0.18, color: "#FECACA" },
    ]
  },
  {
    id: "calm-belt",
    name: "Calm Belt",
    description: "Deux bandes de mer calme bordant la Grand Line. Elles sont infestées de Rois des Mers (Sea Kings), rendant la navigation presque impossible. Seuls les navires de la Marine revêtus de Granit Marin peuvent les traverser en sécurité.",
    color: "#6B7280",
    position: [0, 3, 0],
    islands: [
      { name: "Amazon Lily", description: "Île des femmes guerrières Kuja, dirigée par Boa Hancock. Située dans le Calm Belt.", x: 0.3, y: 3.2, z: 0.5, size: 0.13, color: "#9CA3AF" },
      { name: "Impel Down", description: "Prison sous-marine du Gouvernement Mondial, l'une des Trois Grandes Puissances.", x: -0.5, y: 3.5, z: -0.3, size: 0.14, color: "#9CA3AF" },
    ]
  },
  {
    id: "red-line",
    name: "Red Line",
    description: "Le seul continent du monde de One Piece, un immense pont terrestre qui encercle le globe perpendiculairement à la Grand Line. Il divise le monde en deux hémisphères et sépare la Grand Line des quatre mers.",
    color: "#DC2626",
    position: [0, -3, 0],
    islands: [
      { name: "Mary Geoise", description: "Siège du Gouvernement Mondial, la Terre Sainte au sommet de la Red Line. Résidence des Dragons Célestes.", x: 0.0, y: -3.5, z: 0.0, size: 0.16, color: "#F87171" },
      { name: "Reverse Mountain (Base)", description: "Base de la Reverse Mountain où les eaux des quatre mers convergent.", x: 0.5, y: -2.8, z: 0.5, size: 0.12, color: "#FCA5A5" },
    ]
  },
  {
    id: "sky-sea",
    name: "Mer Céleste",
    description: "Les mers célestes existent dans le White-White Sea et le White Sea, à 7 000m et 10 000m d'altitude. Elles sont composées de nuages denses et accessibles via le Knock Up Stream.",
    color: "#7DD3FC",
    position: [0, 4.5, 0],
    islands: [
      { name: "Skypiea (Upper Yard)", description: "Partie supérieure de Skypiea contenant la terre de Shandora et le Poneglyphe.", x: 0.3, y: 4.8, z: 0.2, size: 0.12, color: "#BAE6FD" },
      { name: "Birka", description: "Île céleste autrefois habitée, détruite par Enel.", x: -0.4, y: 4.5, z: -0.3, size: 0.1, color: "#BAE6FD" },
      { name: "Weatheria", description: "Île céleste des scientifiques météo, où Nami s'entraîna pendant le timeskip.", x: 0.1, y: 4.2, z: 0.5, size: 0.1, color: "#BAE6FD" },
    ]
  }
];

export const allIslands = seas.flatMap(sea => sea.islands);
