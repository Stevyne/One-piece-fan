#!/usr/bin/env python3
"""
Script pour appliquer le niveau EXTREME sur un fichier local.
Place ce fichier dans la racine du projet (même dossier que src/)
Et lance :  python apply_extreme_local.py
"""
import os, sys

def main():
    # 1. Vérifier les fichiers
    for p in ['src/App.tsx', 'src/index.css']:
        if not os.path.exists(p):
            print(f"ERREUR : {p} introuvable. Place-toi dans la racine du projet.")
            sys.exit(1)

    # 2. Import ExtremeHero (si pas déjà présent)
    with open('src/App.tsx', 'r', encoding='utf-8') as f:
        content = f.read()

    if 'ExtremeHero' not in content:
        # Insérer import après le dernier import existant (avant le premier type/const)
        # On insère après la ligne "import { seas" ou similaire, ou au début après les imports existants
        # Stratégie simple : insérer après la première ligne contenant "import " dans le haut du fichier
        lines = content.splitlines(keepends=True)
        import_line = None
        for i, line in enumerate(lines):
            if line.startswith('import '):
                import_line = i
        if import_line is not None:
            lines.insert(import_line + 1, "import ExtremeHero from './components/ExtremeHero';\n")
            content = ''.join(lines)
            with open('src/App.tsx', 'w', encoding='utf-8') as f:
                f.write(content)
            print("✓ Import ExtremeHero ajouté dans src/App.tsx")
        else:
            print("⚠ Impossible d'ajouter l'import automatiquement. Ajoute manuellement :")
            print("   import ExtremeHero from './components/ExtremeHero';")
    else:
        print("✓ Export ExtremeHero déjà présent")

    # 3. Append CSS
    css_path = 'src/index.css'
    with open(css_path, 'r', encoding='utf-8') as f:
        css = f.read()
    if '.animate-letter-drop' not in css:
        with open('src/extreme.css', 'r', encoding='utf-8') as f:
            extra = f.read()
        with open(css_path, 'a', encoding='utf-8') as f:
            f.write('\n' + extra)
        print("✓ CSS extrême ajouté dans src/index.css")
    else:
        print("✓ CSS extrême déjà présent")

    # 4. Instructions manuelles (car le bloc hero est trop variable)
    print("\n" + "="*60)
    print("NIVEAU EXTREME — ACTION MANUELLE REQUISE")
    print("="*60)
    print("""
Dans src/App.tsx, remplace le bloc hero (section avec className contenant
'relative min-h' et le contenu du hero) par :

    <ExtremeHero onNavigate={setActiveTab} />

Exemple : si tu as <section className="relative min-h...>...</section>
dans HomePage, supprime tout ce bloc et mets <ExtremeHero ... />.

Si tu veux aussi les cartes magnétiques, copie MagneticCard.tsx dans
src/components/ et remplace <article className="card"> par <MagneticCard>.
""")
    print("Après : copie ExtremeHero.tsx et MagneticCard.tsx dans src/components/")
    print("Ensuite : npm run dev")

if __name__ == '__main__':
    main()
