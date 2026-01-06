# API de Salutation - TP CI/CD

Une application Node.js fournissant un service de salutation simple avec une API REST. Le projet inclut un serveur Express, une logique de salutation et des suites de tests complètes.

## Fonctionnalités

- **Logique de salutation** : Génère des messages personnalisés via `src/greeting.js`
- **Serveur REST** : Construit avec Express dans `src/server.js`
  - Endpoints :
    - `GET /hello/:name?` : Retourne une salutation
    - `POST /hello` : Utilise l'en-tête `x-name`
- **Tests complets** :
  - Tests unitaires (`tests/unit/greeting.test.js`)
  - Tests d'intégration (`tests/integration/app.test.js`)
  - Tests E2E (`tests/e2e/e2e.test.js`)
- **Linting** : Configuré avec ESLint
- **Gestion de version Node** : Utilise `.nvmrc` (v22.19.0)
- **CI/CD** : Pipeline GitHub Actions configuré

## Prérequis

- Node.js ≥22.19.0 (utilisez `nvm use` avec le fichier `.nvmrc`)
- npm (inclus avec Node.js)

## Installation

```bash
# Cloner le dépôt
git clone [URL_DU_DEPOT]
cd [NOM_DU_PROJET]

# Installer les dépendances
npm install
```

## Utilisation

### Démarrer le serveur
```bash
npm start
```
Le serveur écoute sur le port 3000 (ou `process.env.PORT`).

### Endpoints disponibles
- **GET** `/hello` → "Hello world!"
- **GET** `/hello/Alice` → "Hello world! From Alice"
- **POST** `/hello` (avec en-tête `x-name: Bob`) → "Hello world! From Bob"

## Tests

### Exécuter tous les tests
```bash
npm test
```

### Tests spécifiques
```bash
# Tests unitaires uniquement
npm test -- tests/unit/

# Tests d'intégration uniquement
npm test -- tests/integration/

# Tests E2E uniquement
npm test -- tests/e2e/
```

## Linting
```bash
npm run lint
```

## CI/CD

Le projet inclut un pipeline GitHub Actions (`.github/workflows/ci.yml`) qui :
1. Installe les dépendances
2. Exécute les tests unitaires et d'intégration
3. Vérifie le linting

## Structure du projet
```
.
├── src/
│   ├── greeting.js       # Logique métier
│   └── server.js         # Serveur Express
├── tests/
│   ├── unit/             # Tests unitaires
│   ├── integration/      # Tests d'intégration
│   └── e2e/              # Tests bout-en-bout
├── .eslintrc.js          # Configuration ESLint
├── .nvmrc                # Version Node.js
├── .gitignore            # Fichiers ignorés
└── package.json          # Métadonnées et scripts
```

## Dépendances

### Production
- `express` : Framework web
- `axios` : Client HTTP (pour les tests E2E)
- `supertest` : Utilitaire de test HTTP

### Développement
- `eslint` : Linter
- `jest` : Framework de test

## Contribution

1. Forker le dépôt
2. Créer une branche de fonctionnalité
3. Exécuter les tests et le linting
4. Soumettre une Pull Request

## Notes supplémentaires

- Le serveur s'arrête automatiquement si le port 3000 est occupé
- Les tests E2E nécessitent que le serveur soit démarré séparément
- La configuration ESLint applique des règles strictes (semi-colons obligatoires, etc.)
- Le pipeline CI s'exécute sur Windows avec Node.js 22.19.0
