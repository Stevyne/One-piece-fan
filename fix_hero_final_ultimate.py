#!/usr/bin/env python3
with open('src/App.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

start_idx = text.find('<section')
if start_idx == -1:
    print("ERREUR : aucun <section")
    exit(1)

# Vérifier que c'est le hero (contient min-h dans les 400 chars)
if 'min-h' not in text[start_idx:start_idx+400]:
    # Essayons le deuxième <section>
    second = text.find('<section', start_idx+1)
    if second != -1 and 'min-h' in text[second:second+400]:
        start_idx = second
    else:
        print("ERREUR : pas de hero trouvé avec min-h")
        exit(1)

# Trouver le PREMIER </section> après le start
end_idx = text.find('</section>', start_idx)
if end_idx == -1:
    print("ERREUR : pas de </section> trouvé après le hero")
    exit(1)

# Remplacer de start à end_idx+10 (pour inclure le </section> et le saut de ligne)
replacement = '      <ExtremeHero onNavigate={onNavigate} />\n'
new_text = text[:start_idx] + replacement + text[end_idx+10:]

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(new_text)

print("✓ Hero remplacé (premier <section> avec min-h jusqu'au premier </section>)")
