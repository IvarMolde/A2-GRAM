# A2-Gram

**Appen heter A2-Gram** (i nettleseren og i overskrifter). Kildekode, issues og pull requests: [IvarMolde/A2-GRAM](https://github.com/IvarMolde/A2-GRAM). På GitHub heter repositoriet **A2-GRAM** (store bokstaver i «GRAM») – det følger URL-en og GitHub Pages, ikke et annet produktnavn.

Responsiv grammatikkapp for voksne deltakere på norsk nivå A2 (CEFR), med sveipelogikk inspirert av Tinder.

## Funksjoner

- **43** grammatikkregler på bokmål (ett kort per regel, nummerert 1–43)
- **Sveip-fanen:** sveip venstre = neste kort, sveip høyre = forrige; piltaster ← og → fungerer på tastatur
- **Forrige** / **Neste** på kortvisning og **hjerte** for å merke favorittkort
- **Tre faner:** Sveip (enkeltvis kort), Quiz (**43** spørsmål med progresjon, f.eks. «0 / 43 besvart»), Favoritter (liste over kort du har merket med hjerte)
- Quiz med både **flervalg** og **fyll inn ord**
- Tilgjengelighet: tydelig fokusmarkering, skip-link («Hopp til innhold»), støtte for `prefers-reduced-motion`
- CI med GitHub Actions (statiske tester + Playwright e2e på push/PR)
- Automatisk deploy til **GitHub Pages** ved push til `main` ([live demo](https://ivarmolde.github.io/A2-GRAM/))

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
