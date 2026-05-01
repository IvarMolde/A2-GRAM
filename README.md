# Tindergram

Responsiv grammatikkapp for voksne deltakere på norsk nivå A2 (CEFR), med sveipelogikk inspirert av Tinder.

## Funksjoner

- 40 A2-grammatikkregler på bokmål
- Sveip høyre/venstre (touch + piltaster)
- Knapper for `Kan`, `Øv mer`, `Lagre`, `Hjerte`, `Skjul`
- Faner for lagret, favoritter og skjulte regler
- Quizmodus med adaptiv repetisjon
- Quiz med både flervalg og fyll inn ord
- Tilgjengelighetsbaseline (WCAG): fokusmarkering, tastaturstøtte, skip-link, alternativ til sveip
- CI med GitHub Actions som kjører statiske tester på push/PR

## Kjøring

Appen er statisk og kan åpnes direkte:

1. Åpne `index.html` i nettleser

eller via enkel lokal server:

```bash
npx serve .
```

## Test

```bash
npm test
```
