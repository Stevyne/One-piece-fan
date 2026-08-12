# One Piece Universe — Grand Line Explorer ☠️🌊

Encyclopédie interactive 3D de l'univers One Piece, construite pour les fans.
Explore mers, îles, personnages, fruits du démon et navires légendaires avec une expérience immersive et performante.

**Live Demo:** `npm run dev` → http://localhost:5173

![One Piece Banner](public/favicon.svg)

---

## ✨ Features v1.0

### 🏠 Accueil
- Hero optimisé 60fps (single canvas merging network + trail, throttled, mobile-aware)
- Stats animées (mers, persos, navires)
- Section Explore avec 4 cartes cliquables
- Respect `prefers-reduced-motion`

### 🌊 World 3D
- Globe Three.js avec seas & islands positionnés (via `@react-three/fiber` + `drei`)
- OrbitControls, Stars, anneaux Grand Line / Red Line
- Lazy-load: le monde 3D n'est chargé que si tu vas sur `/world`
- Side panel avec lore de chaque mer

### ⚔️ Personnages (60+)
- Recherche instantanée (nom, surnom, fruit, équipage)
- Filtres: Devil Fruit, Conqueror Haki, Mugiwara, 1B+ bounty, Éveillé
- Tri par prime, Favoris en localStorage
- Fiche perso avec `AnimatedCharacter` : avatar, fruit tenu en main, effets Haki animés, histoire complète, badge prime Wanted
- Images `/public/images` avec lazy + fallback SVG

### 🍎 Fruits du Démon (NEW)
- Inventaire automatique depuis `characters.ts` + `fruitVisuals.ts`
- Paramecia / Logia / Zoan / Éveillés
- Grille avec emoji, couleur, utilisateurs, lore
- Compteurs + filtres

### 🚢 Navires (18)
- Filtres taille, recherche
- Hero image avec dégradé + fallback SVG `ShipIllustrationSVG`
- Scan-line + wave animation
- Special Feature highlight

---

## 🚀 Stack Technique

- **React 19** + **TypeScript 5.9** (strict)
- **Vite 7** + split chunks: `react`, `three`, `icons`
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **Three.js** `0.185` + `@react-three/fiber` `9.7` + `drei` `10.7`
- **React Router DOM 6.26** → vrai routing `/world`, `/characters/:?`
- Hooks customs: `useCountUp`, `useIntersectionReveal`, `usePrefersReducedMotion`, `useIsMobile`
- Pas de Redux: state local + localStorage pour favoris

### Perf Optimisations appliquées
- ❌ Retiré `vite-plugin-singlefile` (bundle monolithe >3MB → chunks cachés)
- `manualChunks` pour cache navigateur
- Hero canvas: 1 canvas au lieu de 2, particules 70→30 sur mobile, DPR cap 1.6, line check early-exit bounding box, throttle mousemove 50ms
- `React.lazy` + `Suspense` sur World3D
- `loading="lazy"` sur toutes images
- `overflow-x: hidden; overflow-y: auto` fixé (avant `hidden` cassait scroll)

---

## 📁 Architecture

```
src/
  components/
    AnimatedCharacter.tsx      # Avatar immersif avec fruit + Haki effects
    CharacterPortraits.tsx     # SVG fallback portraits + ShipIllustrationSVG
    World3D.tsx                # Globe 3D (lazy)
    MagneticCard.tsx           # Effet 3D hover
    home/
      OptimizedHero.tsx        # HERO refait 60fps single canvas
      FloatingParticles.tsx
    ui/
      Reveal.tsx               # IntersectionObserver fade
      Badges.tsx               # Haki + Fruit + Bounty
      Cards.tsx                # CharacterCard + ShipCard
      StatCounter.tsx
  pages/
    HomePage.tsx
    WorldPage.tsx
    CharactersPage.tsx
    FruitsPage.tsx   # NOUVEAU
    ShipsPage.tsx
  data/
    characters.ts    # 60 persos complets
    seas.ts          # 6 mers + îles
    ships.ts         # 18 navires
    fruitVisuals.ts  # mapping emoji/couleur/particles
  hooks/
    useCountUp.ts
    useIntersectionReveal.ts
    usePrefersReducedMotion.ts
  layouts/
    Header.tsx       # NavLink active states
  utils/
    cn.ts
  index.css   # Corrigé + toutes anims mergées
```

---

## 🛠️ Installation

```bash
git clone https://github.com/Stevyne/One-piece-fan
cd One-piece-fan
npm i
npm run dev      # dev à http://localhost:5173
npm run build    # build prod dans dist/
npm run preview
```

Node >= 20 recommandé.

---

## 🧹 Ce qui a été nettoyé

- Supprimé `apply_extreme_local.py`, `fix_hero_final_ultimate.py`
- `.gitignore` renforcé (logs, arena, .env)
- `vite.config.ts`: plus de singlefile, config server propre, chunking
- `index.css`: `overflow: hidden` → `overflow-x:hidden; overflow-y:auto`
- `App.tsx` 997 lignes → splitté en 5 pages + router (code plus maintenable, meilleur SEO)

---

## 🗺️ Roadmap v1.1 (proposé)

- [ ] Page `/timeline` Log Pose des arcs (East Blue → Egghead) avec frise
- [ ] Quiz Haki / Fruit pour les fans
- [ ] API Jikan / One Piece chapitre fetch
- [ ] PWA manifest pour installer sur mobile
- [ ] Système d'équipage: drag & drop pour constituer ton équipage
- [ ] i18n fr/en avec toggle
- [ ] Tests Vitest + Playwright

---

## ⚖️ Licence & Disclaimer

MIT pour le code.

**One Piece est l'œuvre de Eiichiro Oda / Shueisha / Toei Animation. Ce projet est un fan project non officiel, sans but commercial, par passion.**

Si tu es détenteur de droits et souhaites un retrait, contacte-moi.

---

## 🤝 Contribuer

Les PR sont bienvenues! Surtout:
- Optim 3D
- Ajout de personnages / fruits manquants
- Amélioration mobile
- Traductions

---

### Crédits
Fait avec ❤️ par Stevyne + Arena Agent, pour Nakamas.

**YO HO HO HO!** 🎶

> Ce que tu veux existe forcément quelque part sur cette Terre. — Gol D. Roger
