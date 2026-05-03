# A2-Gram

**Appen heter A2-Gram** (i nettleseren og i overskrifter). På GitHub heter repositoriet **A2-GRAM** (store bokstaver i «GRAM») – det er vanlig for URL og GitHub Pages, ikke et annet produktnavn.

Det finnes også et eldre repo under navnet [Tindergram](https://github.com/IvarMolde/Tindergram) i URL-en; det speiler samme kodebase. **Klon, issues og PR: bruk dette repositoriet (A2-GRAM).**

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
- Automatisk deploy til GitHub Pages på push til `main`

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
npm run test:e2e
```
