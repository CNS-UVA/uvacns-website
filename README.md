# CNS @ UVA Website

To set up:

```bash
cp .env.example .env
npm i
npx auth secret
```

To run dev environment:

```bash
npm run dev
# visit localhost:5173
```

To test production:

```bash
npm run build
npm run preview
# visit localhost:4173
```

To test production with Docker:

```bash
docker compose up
# visit localhost:8001
```
