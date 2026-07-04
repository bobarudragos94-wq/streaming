# Persona art — generation prompts (keep the real faces!)

The site is already wired for character art: drop a file at
`public/personas/<slug>.jpg` (or .png/.webp) and it automatically appears as
the background of that member's card back. Same for real photos on the front:
`public/members/<slug>.jpg`.

Slugs: `dragos`, `naty`, `andreea`, `bogdan`, `robert`, `itza`.

## How to generate (so faces stay recognizable)

Use an image model that accepts a **reference photo** and attach each member's
real photo with the prompt:

- **Gemini (Nano Banana)** or **GPT-image**: attach the photo + paste the prompt.
- **Midjourney**: use `--cref <photo-url> --cw 100` to lock the face.

Generate all six with the **same master style block** (below) so the set looks
like one universe. Best output size: portrait 4:5 or 3:4, at least 1024px wide.
Crop so the face sits in the upper half (the card overlays UI on the bottom).

## Master style block (prepend to every prompt)

> Semi-realistic painterly fantasy character portrait, waist-up, dramatic
> rim lighting, dark background (#0B0B14) with subtle neon glow accents,
> cinematic color grading, premium game key-art style (League of Legends
> splash-art quality), sharp facial detail. **Keep the exact facial features,
> skin tone, hair and likeness of the person in the attached photo —
> recognizable as the same person. Do not beautify or change the face.**

## Per-member prompts

### 1. Dragoș — Voievod, Capul de Foc (`dragos`)
Romanian voivode warlord in ornate dark-steel plate armor with ember-red cloth
accents and subtle dragon motifs, two-handed sword resting on shoulder, embers
and violet-red fire glow (#F43F5E) swirling behind him, confident commander
smirk, short faded haircut and light beard exactly as in the photo.

### 2. Naty — Amazoană a Pădurii, Capul Pădurii (`naty`)
Forest amazon ranger with an elegant recurve bow, sage-green and gold leather
armor with leaf ornaments (echoing her sage silk dress), long wavy blonde hair
exactly as in the photo, fireflies and teal-green forest light (#2EC4B6 → hue
160) glowing around her, calm regal expression.

### 3. Andreea — Arcanistă, Capul Arcanei (`andreea`)
Battle arcanist with a floating open grimoire and glowing violet runes
(#7C3AED), dark academia robe over modern layers (nod to her black overalls),
KEEP her glasses — thin gold frames catching the arcane light, dark hair as in
the photo, red-lipstick confident half-smile, chess-piece rune motifs floating
in the background.

### 4. Bogdan — Călugăr al Liniștii, Capul Apelor (`bogdan`)
Zen warrior-monk in flowing cream-linen robes (echoing his cream shirt), calm
half-smile, water curling in slow ribbons around his hands, cyan-blue glow
(hue 190), tropical leaves silhouetted in the dark background, trimmed beard
and hair exactly as in the photo, radiating total stillness.

### 5. Robert — Duelist al Amurgului, Capul Amurgului (`robert`)
Dusk duelist-rogue in a tailored black asymmetric jacket with gold trim
(fashion-forward, editorial), slim rapier held casually, sunset-orange and
pink dusk light (hues 30/340) rim-lighting him like his seaside photo, KEEP
his glasses and light mustache exactly as in the photo, cocky elegant pose.

### 6. Itza — Berserker al Furtunii, Capul Furtunii (`itza`)
Storm berserker mid-laugh with crackling red-orange lightning (hues 0/45)
arcing across his arms, rugged leather-and-fur armor over a mesh-textured
undershirt (nod to his festival fit), KEEP the sunglasses and beard exactly
as in the photo — a berserker who parties, festival crowd silhouettes as a
storm-lit background.

## After generating

1. Save each image as `public/personas/<slug>.jpg` (also add the real photos
   as `public/members/<slug>.jpg` for the card fronts).
2. Commit + redeploy. No code changes needed — the cards pick them up.
3. If a face drifts too far from the reference, regenerate with stronger
   likeness wording or a higher `--cw` value; consistency of the *style*
   matters less than recognizability of the *face*.
