# Vue Starter

A solid Vue 3 + TypeScript starter for building SPAs with authentication, internationalization, and state management.

### Stack

- **Vue 3** - Composition API with `<script setup>`
- **TypeScript** - Full type safety
- **Vite** - Lightning-fast build tool
- **Pinia** - Modern state management
- **Vue Router** - Client-side routing with auth guards

### UI & Styling

- **PrimeVue** - Rich UI component library
- **PrimeFlex** - Utility-first CSS framework
- **PrimeIcons** - Icon library
- **SCSS** - Advanced styling capabilities

### Internationalization (i18n)

- **vue-i18n** - Multi-language support (English & French)
- **Locale persistence** - Language selection saved to localStorage
- **Organized translations** - Centralized locale files by domain
- **Dynamic language switching** - Instant UI updates

### HTTP & Validation

- **Axios** - HTTP client with interceptors
- **Vuelidate** - Form validation
- **Custom HTTP Provider** - Centralized API configuration

### Developer Experience

- **Vue DevTools** - Enhanced debugging
- **ESLint** - Code quality
- **Hot Module Replacement** - Instant updates during development
- **TypeScript strict mode** - Maximum type safety

## Project Structure

```
src/
├── domain/              # Feature-based modules
│   ├── account/        # Authentication & user features
│   │   ├── components/ # Login, Dashboard, ForgotPassword
│   │   └── helper.ts   # Domain-specific utilities
│   └── system/         # System-wide features
│       ├── components/ # Header, Footer, LanguageSwitcher, NotFound
│       ├── store/      # System state & subscribers
│       └── helper.ts   # System utilities
├── locales/            # i18n translation files
│   ├── en.json        # English translations
│   └── fr.json        # French translations
├── providers/          # Service providers
│   ├── HTTPProvider.ts          # Axios configuration
│   ├── LocalizationProvider.ts  # i18n setup
│   ├── MessageProvider.ts       # Toast notifications
│   ├── UILibraryProvider.ts     # PrimeVue setup
│   └── ServiceProviders.ts      # Provider orchestration
├── router/             # Vue Router configuration
│   └── index.ts       # Routes & auth guards
├── stores/            # Pinia stores
│   └── store.ts       # Root store
├── assets/            # Static assets & styles
├── App.vue            # Root component
└── main.ts            # Application entry point
```

## Getting Started

### Prerequisites

- Node.js 22+ (recommended)
- Yarn package manager

### Installation

1. **Clone the repository**

   ```sh
   git clone <repository-url>
   cd vue-starter
   ```

2. **Install dependencies**

   ```sh
   yarn
   ```

3. **Set up environment variables**

   ```sh
   cp .env.example .env
   ```

   Edit `.env` and configure your API URL:

   ```
   VITE_API_URL=http://localhost:3000
   ```

4. **Start development server**
   ```sh
   yarn dev
   ```
   The app will be available at `http://localhost:5173`

### Default Credentials

- **Email**: `admin@mail.com`
- **Password**: `1234`

## Available Scripts

| Command           | Description                             |
| ----------------- | --------------------------------------- |
| `yarn dev`        | Start development server with HMR       |
| `yarn build`      | Build for production with type checking |
| `yarn preview`    | Preview production build locally        |
| `yarn type-check` | Run TypeScript type checking            |

## Architecture

### Provider Pattern

The boilerplate uses a custom provider pattern for service initialization:

```typescript
serviceProviders(app)
  .provide(new HTTPProvider())
  .provide(new UILibraryProvider())
  .provide(new MessageProvider())
  .provide(new LocalizationProvider());
```

### Domain-Driven Structure

Features are organized by domain (account, system) rather than by type, promoting better modularity and maintainability.

### Route Guards

Authentication is handled via Vue Router guards:

- Protected routes require authentication
- Unauthenticated users are redirected to login
- Login state managed via Pinia store

## Internationalization

### Adding Translations

1. **Add keys to locale files**

   ```json
   // src/locales/en.json
   {
     "myFeature": {
       "title": "My Feature"
     }
   }
   ```

2. **Use in templates**

   ```vue
   <template>
     <h1>{{ $t("myFeature.title") }}</h1>
   </template>
   ```

3. **Use in script**

   ```vue
   <script setup>
   import { useI18n } from "vue-i18n";
   const { t } = useI18n();

   const message = t("myFeature.title");
   </script>
   ```

### Parameterized Translations

```vue
{{ $t("dashboard.welcome", { name: userName }) }}
```

## HTTP Client

The HTTP provider is pre-configured with Axios:

```typescript
import { http } from "@/providers/HTTPProvider";

// Make API calls
const response = await http.get("/users");
const data = await http.post("/login", credentials);
```

### Interceptors

- Request interceptor: Add auth tokens, logging
- Response interceptor: Handle 401/403 errors globally

## UI Components

Using PrimeVue components:

```vue
<template>
  <Button label="Click me" @click="handleClick" />
  <InputText v-model="value" placeholder="Enter text" />
  <Toast />
</template>
```

## Form Validation

Using Vuelidate:

```vue
<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const formFields = ref({ email: "" });
const rules = {
  email: { required, email },
};
const v$ = useVuelidate(rules, formFields);
</script>
```

## Recommended IDE Setup

- **VSCode** with extensions:
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 language support
  - [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

> **Note**: Disable Vetur if installed (conflicts with Volar)

## Configuration

### Vite Config

See `vite.config.ts` for:

- Path aliases (`@/` → `src/`)
- i18n plugin configuration
- Build optimization

### TypeScript

- `tsconfig.json` - Base TypeScript config
- `tsconfig.app.json` - App-specific config
- `tsconfig.node.json` - Node/Vite config

## Build for Production

```sh
yarn build
```

This will:

1. Run TypeScript type checking
2. Build optimized production bundle
3. Output to `dist/` directory

Preview the production build:

```sh
yarn preview
```

## Contributing

1. Follow the existing code structure
2. Add translations for new features
3. Maintain TypeScript type safety
4. Test across different languages
