## CONTENU DU PROJET

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\.env`

```
VITE_API_URL=/api
CLIENT_URL=http://localhost:5173
MODE=development
POSTGRES_USER=ceddevs
POSTGRES_PASSWORD=Jactlj01
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\.env.sample`

```
VITE_API_URL=/api
CLIENT_URL=http://localhost:5173
MODE=development
POSTGRES_USER=Your_user
POSTGRES_PASSWORD=Your_password
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\.gitignore`

```
# Global
node_modules
.env
dist
build
.DS_Store
.vscode
.idea
*.log
npm-debug.log*

# Vite (client)
client/dist
client/.vite

# TypeScript (server)
server/dist
server/*.tsbuildinfo

# Ressources locales (non versionnées)
app_ressources/

# Logs
logs
*.log
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\app_ressources\readme.md`

```markdown
### app_ressources

Ce dossier contient les fichiers **annexes** au projet qui ne font pas directement partie du code source.
**Ce contenu n'est pas versionné** et est destiné uniquement à un usage local.

- **Documents PDF / Word** - Textes à intégrer dans le site, conditions générales, contrats, guides, notices
- **Screenshots / Maquettes** - Aperçus de design ou d’interface, références visuelles pour le développement
- **Documents de travail** - Cahier des charges, spécifications techniques ou fonctionnelles, idées, notes de projet, to-do lists
- **Tableaux Excel / CSV** - Liste de produits, services, utilisateurs, etc.
- **Brouillons** - Fichiers non finalisés ou archivés pour consultation ultérieure

---

Code couleur présent dans le code :
🟢 Succès / Mis à jour : Test réussi, correction appliquée.
🔴 Erreur / Défaut : Problème détecté, nécessite intervention.
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\biome.json`

```json
{
  "$schema": "https://biomejs.dev/schemas/2.3.9/schema.json",
  "vcs": {
    "enabled": false,
    "clientKind": "git",
    "useIgnoreFile": false
  },
  "files": {
    "ignoreUnknown": false
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "tab"
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double"
    }
  },
  "assist": {
    "enabled": true,
    "actions": {
      "source": {
        "organizeImports": "on"
      }
    }
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\.env`

```
VITE_API_URL=http://localhost:3310/api
PGDATABASE=gouyon-cedric
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\.env.sample`

```
VITE_API_URL=http://localhost:3310/api
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\.gitignore`

```
# Dépendances
node_modules/

# Builds
dist/
.vite/

# Env local
.env


# Logs
*.log
npm-debug.log*

# IDE / OS
.DS_Store
.vscode/
.idea/
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\README.md`

````markdown
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

````

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\eslint.config.js`
```javascript
import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
	},
]);

````

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/assets/favicon/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GOOUYON Cédric</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\package-lock.json`

```json
{
  "name": "client",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "client",
      "version": "0.0.0",
      "dependencies": {
        "react": "^19.2.0",
        "react-dom": "^19.2.0",
        "react-pdf": "^10.2.0",
        "react-router": "^7.10.1",
        "react-toastify": "^11.0.5"
      },
      "devDependencies": {
        "@eslint/js": "^9.39.1",
        "@types/node": "^24.10.4",
        "@types/react": "^19.2.7",
        "@types/react-dom": "^19.2.3",
        "@types/react-router": "^5.1.20",
        "@types/react-toastify": "^4.0.2",
        "@vitejs/plugin-react": "^5.1.2",
        "eslint": "^9.39.1",
        "eslint-plugin-react-hooks": "^7.0.1",
        "eslint-plugin-react-refresh": "^0.4.24",
        "globals": "^16.5.0",
        "typescript": "~5.9.3",
        "typescript-eslint": "^8.46.4",
        "vite": "^7.2.4"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.5.tgz",
      "integrity": "sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.5.tgz",
      "integrity": "sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.5.tgz",
      "integrity": "sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.4.tgz",
      "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.5.tgz",
      "integrity": "sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.5"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.27.1.tgz",
      "integrity": "sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.27.1.tgz",
      "integrity": "sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.5.tgz",
      "integrity": "sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.5",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.5.tgz",
      "integrity": "sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.1.tgz",
      "integrity": "sha512-HHB50pdsBX6k47S4u5g/CaLjqS3qwaOVE5ILsq64jyzgMhLuCuZ8rGzM9yhsAjfjkbgUPMzZEPa7DAp7yz6vuA==",
      "cpu": ["ppc64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["aix"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.1.tgz",
      "integrity": "sha512-kFqa6/UcaTbGm/NncN9kzVOODjhZW8e+FRdSeypWe6j33gzclHtwlANs26JrupOntlcWmB0u8+8HZo8s7thHvg==",
      "cpu": ["arm"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["android"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.1.tgz",
      "integrity": "sha512-45fuKmAJpxnQWixOGCrS+ro4Uvb4Re9+UTieUY2f8AEc+t7d4AaZ6eUJ3Hva7dtrxAAWHtlEFsXFMAgNnGU9uQ==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["android"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.1.tgz",
      "integrity": "sha512-LBEpOz0BsgMEeHgenf5aqmn/lLNTFXVfoWMUox8CtWWYK9X4jmQzWjoGoNb8lmAYml/tQ/Ysvm8q7szu7BoxRQ==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["android"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.1.tgz",
      "integrity": "sha512-veg7fL8eMSCVKL7IW4pxb54QERtedFDfY/ASrumK/SbFsXnRazxY4YykN/THYqFnFwJ0aVjiUrVG2PwcdAEqQQ==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["darwin"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.1.tgz",
      "integrity": "sha512-+3ELd+nTzhfWb07Vol7EZ+5PTbJ/u74nC6iv4/lwIU99Ip5uuY6QoIf0Hn4m2HoV0qcnRivN3KSqc+FyCHjoVQ==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["darwin"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.1.tgz",
      "integrity": "sha512-/8Rfgns4XD9XOSXlzUDepG8PX+AVWHliYlUkFI3K3GB6tqbdjYqdhcb4BKRd7C0BhZSoaCxhv8kTcBrcZWP+xg==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["freebsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.1.tgz",
      "integrity": "sha512-GITpD8dK9C+r+5yRT/UKVT36h/DQLOHdwGVwwoHidlnA168oD3uxA878XloXebK4Ul3gDBBIvEdL7go9gCUFzQ==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["freebsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.1.tgz",
      "integrity": "sha512-ieMID0JRZY/ZeCrsFQ3Y3NlHNCqIhTprJfDgSB3/lv5jJZ8FX3hqPyXWhe+gvS5ARMBJ242PM+VNz/ctNj//eA==",
      "cpu": ["arm"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.1.tgz",
      "integrity": "sha512-W9//kCrh/6in9rWIBdKaMtuTTzNj6jSeG/haWBADqLLa9P8O5YSRDzgD5y9QBok4AYlzS6ARHifAb75V6G670Q==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.1.tgz",
      "integrity": "sha512-VIUV4z8GD8rtSVMfAj1aXFahsi/+tcoXXNYmXgzISL+KB381vbSTNdeZHHHIYqFyXcoEhu9n5cT+05tRv13rlw==",
      "cpu": ["ia32"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.1.tgz",
      "integrity": "sha512-l4rfiiJRN7sTNI//ff65zJ9z8U+k6zcCg0LALU5iEWzY+a1mVZ8iWC1k5EsNKThZ7XCQ6YWtsZ8EWYm7r1UEsg==",
      "cpu": ["loong64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.1.tgz",
      "integrity": "sha512-U0bEuAOLvO/DWFdygTHWY8C067FXz+UbzKgxYhXC0fDieFa0kDIra1FAhsAARRJbvEyso8aAqvPdNxzWuStBnA==",
      "cpu": ["mips64el"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.1.tgz",
      "integrity": "sha512-NzdQ/Xwu6vPSf/GkdmRNsOfIeSGnh7muundsWItmBsVpMoNPVpM61qNzAVY3pZ1glzzAxLR40UyYM23eaDDbYQ==",
      "cpu": ["ppc64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.1.tgz",
      "integrity": "sha512-7zlw8p3IApcsN7mFw0O1Z1PyEk6PlKMu18roImfl3iQHTnr/yAfYv6s4hXPidbDoI2Q0pW+5xeoM4eTCC0UdrQ==",
      "cpu": ["riscv64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.1.tgz",
      "integrity": "sha512-cGj5wli+G+nkVQdZo3+7FDKC25Uh4ZVwOAK6A06Hsvgr8WqBBuOy/1s+PUEd/6Je+vjfm6stX0kmib5b/O2Ykw==",
      "cpu": ["s390x"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.1.tgz",
      "integrity": "sha512-z3H/HYI9MM0HTv3hQZ81f+AKb+yEoCRlUby1F80vbQ5XdzEMyY/9iNlAmhqiBKw4MJXwfgsh7ERGEOhrM1niMA==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.1.tgz",
      "integrity": "sha512-wzC24DxAvk8Em01YmVXyjl96Mr+ecTPyOuADAvjGg+fyBpGmxmcr2E5ttf7Im8D0sXZihpxzO1isus8MdjMCXQ==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["netbsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.1.tgz",
      "integrity": "sha512-1YQ8ybGi2yIXswu6eNzJsrYIGFpnlzEWRl6iR5gMgmsrR0FcNoV1m9k9sc3PuP5rUBLshOZylc9nqSgymI+TYg==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["netbsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.1.tgz",
      "integrity": "sha512-5Z+DzLCrq5wmU7RDaMDe2DVXMRm2tTDvX2KU14JJVBN2CT/qov7XVix85QoJqHltpvAOZUAc3ndU56HSMWrv8g==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["openbsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.1.tgz",
      "integrity": "sha512-Q73ENzIdPF5jap4wqLtsfh8YbYSZ8Q0wnxplOlZUOyZy7B4ZKW8DXGWgTCZmF8VWD7Tciwv5F4NsRf6vYlZtqg==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["openbsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.1.tgz",
      "integrity": "sha512-ajbHrGM/XiK+sXM0JzEbJAen+0E+JMQZ2l4RR4VFwvV9JEERx+oxtgkpoKv1SevhjavK2z2ReHk32pjzktWbGg==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["openharmony"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.1.tgz",
      "integrity": "sha512-IPUW+y4VIjuDVn+OMzHc5FV4GubIwPnsz6ubkvN8cuhEqH81NovB53IUlrlBkPMEPxvNnf79MGBoz8rZ2iW8HA==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["sunos"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.1.tgz",
      "integrity": "sha512-RIVRWiljWA6CdVu8zkWcRmGP7iRRIIwvhDKem8UMBjPql2TXM5PkDVvvrzMtj1V+WFPB4K7zkIGM7VzRtFkjdg==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.1.tgz",
      "integrity": "sha512-2BR5M8CPbptC1AK5JbJT1fWrHLvejwZidKx3UMSF0ecHMa+smhi16drIrCEggkgviBwLYd5nwrFLSl5Kho96RQ==",
      "cpu": ["ia32"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.1.tgz",
      "integrity": "sha512-d5X6RMYv6taIymSk8JBP+nxv8DQAMY6A51GPgusqLdK9wBz5wWIXy1KjTck6HnjE9hqJzJRdk+1p/t5soSbCtw==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.0.tgz",
      "integrity": "sha512-ayVFHdtZ+hsq1t2Dy24wCmGXGe4q9Gu3smhLYALJrr473ZH27MsnSL+LKUlimp4BWJqMDMLmPpx/Q9R3OAlL4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.1",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.21.1.tgz",
      "integrity": "sha512-aw1gNayWpdI/jSYVgzN5pL0cfzU02GT3NBpeT/DXbx1/1x7ZKxFPd9bwrzygx/qiwIQiJ1sw/zD8qY/kRvlGHA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^2.1.7",
        "debug": "^4.3.1",
        "minimatch": "^3.1.2"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.4.2.tgz",
      "integrity": "sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.17.0.tgz",
      "integrity": "sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.3.tgz",
      "integrity": "sha512-Kr+LPIUVKz2qkx1HAMH8q1q6azbqBAsXJUxBl/ODDuVPX45Z9DfwB8tPjTi6nNZ8BuM3nbJxC5zCAg5elnBUTQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.1",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.39.2.tgz",
      "integrity": "sha512-q1mjIoW1VX4IvSocvM/vbTiveKC4k9eLrajNEuSsmjymSDEbpGddtpfOoN7YGAqBK3NG+uqo8ia4PDTt8buCYA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.7.tgz",
      "integrity": "sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.4.1.tgz",
      "integrity": "sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.1",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz",
      "integrity": "sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.7",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.7.tgz",
      "integrity": "sha512-/zUx+yOsIrG4Y43Eh2peDeKCxlRt/gET6aHfaKpuq267qXdYDFViVHfMaLyygZOnl0kGWxFIgsBy8QFuTLUXEQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.1",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/canvas": {
      "version": "0.1.84",
      "resolved": "https://registry.npmjs.org/@napi-rs/canvas/-/canvas-0.1.84.tgz",
      "integrity": "sha512-88FTNFs4uuiFKP0tUrPsEXhpe9dg7za9ILZJE08pGdUveMIDeana1zwfVkqRHJDPJFAmGY3dXmJ99dzsy57YnA==",
      "license": "MIT",
      "optional": true,
      "workspaces": ["e2e/*"],
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@napi-rs/canvas-android-arm64": "0.1.84",
        "@napi-rs/canvas-darwin-arm64": "0.1.84",
        "@napi-rs/canvas-darwin-x64": "0.1.84",
        "@napi-rs/canvas-linux-arm-gnueabihf": "0.1.84",
        "@napi-rs/canvas-linux-arm64-gnu": "0.1.84",
        "@napi-rs/canvas-linux-arm64-musl": "0.1.84",
        "@napi-rs/canvas-linux-riscv64-gnu": "0.1.84",
        "@napi-rs/canvas-linux-x64-gnu": "0.1.84",
        "@napi-rs/canvas-linux-x64-musl": "0.1.84",
        "@napi-rs/canvas-win32-x64-msvc": "0.1.84"
      }
    },
    "node_modules/@napi-rs/canvas-android-arm64": {
      "version": "0.1.84",
      "resolved": "https://registry.npmjs.org/@napi-rs/canvas-android-arm64/-/canvas-android-arm64-0.1.84.tgz",
      "integrity": "sha512-pdvuqvj3qtwVryqgpAGornJLV6Ezpk39V6wT4JCnRVGy8I3Tk1au8qOalFGrx/r0Ig87hWslysPpHBxVpBMIww==",
      "cpu": ["arm64"],
      "license": "MIT",
      "optional": true,
      "os": ["android"],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/canvas-darwin-arm64": {
      "version": "0.1.84",
      "resolved": "https://registry.npmjs.org/@napi-rs/canvas-darwin-arm64/-/canvas-darwin-arm64-0.1.84.tgz",
      "integrity": "sha512-A8IND3Hnv0R6abc6qCcCaOCujTLMmGxtucMTZ5vbQUrEN/scxi378MyTLtyWg+MRr6bwQJ6v/orqMS9datIcww==",
      "cpu": ["arm64"],
      "license": "MIT",
      "optional": true,
      "os": ["darwin"],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/canvas-darwin-x64": {
      "version": "0.1.84",
      "resolved": "https://registry.npmjs.org/@napi-rs/canvas-darwin-x64/-/canvas-darwin-x64-0.1.84.tgz",
      "integrity": "sha512-AUW45lJhYWwnA74LaNeqhvqYKK/2hNnBBBl03KRdqeCD4tKneUSrxUqIv8d22CBweOvrAASyKN3W87WO2zEr/A==",
      "cpu": ["x64"],
      "license": "MIT",
      "optional": true,
      "os": ["darwin"],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/canvas-linux-arm-gnueabihf": {
      "version": "0.1.84",
      "resolved": "https://registry.npmjs.org/@napi-rs/canvas-linux-arm-gnueabihf/-/canvas-linux-arm-gnueabihf-0.1.84.tgz",
      "integrity": "sha512-8zs5ZqOrdgs4FioTxSBrkl/wHZB56bJNBqaIsfPL4ZkEQCinOkrFF7xIcXiHiKp93J3wUtbIzeVrhTIaWwqk+A==",
      "cpu": ["arm"],
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/canvas-linux-arm64-gnu": {
      "version": "0.1.84",
      "resolved": "https://registry.npmjs.org/@napi-rs/canvas-linux-arm64-gnu/-/canvas-linux-arm64-gnu-0.1.84.tgz",
      "integrity": "sha512-i204vtowOglJUpbAFWU5mqsJgH0lVpNk/Ml4mQtB4Lndd86oF+Otr6Mr5KQnZHqYGhlSIKiU2SYnUbhO28zGQA==",
      "cpu": ["arm64"],
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/canvas-linux-arm64-musl": {
      "version": "0.1.84",
      "resolved": "https://registry.npmjs.org/@napi-rs/canvas-linux-arm64-musl/-/canvas-linux-arm64-musl-0.1.84.tgz",
      "integrity": "sha512-VyZq0EEw+OILnWk7G3ZgLLPaz1ERaPP++jLjeyLMbFOF+Tr4zHzWKiKDsEV/cT7btLPZbVoR3VX+T9/QubnURQ==",
      "cpu": ["arm64"],
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/canvas-linux-riscv64-gnu": {
      "version": "0.1.84",
      "resolved": "https://registry.npmjs.org/@napi-rs/canvas-linux-riscv64-gnu/-/canvas-linux-riscv64-gnu-0.1.84.tgz",
      "integrity": "sha512-PSMTh8DiThvLRsbtc/a065I/ceZk17EXAATv9uNvHgkgo7wdEfTh2C3aveNkBMGByVO3tvnvD5v/YFtZL07cIg==",
      "cpu": ["riscv64"],
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/canvas-linux-x64-gnu": {
      "version": "0.1.84",
      "resolved": "https://registry.npmjs.org/@napi-rs/canvas-linux-x64-gnu/-/canvas-linux-x64-gnu-0.1.84.tgz",
      "integrity": "sha512-N1GY3noO1oqgEo3rYQIwY44kfM11vA0lDbN0orTOHfCSUZTUyiYCY0nZ197QMahZBm1aR/vYgsWpV74MMMDuNA==",
      "cpu": ["x64"],
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/canvas-linux-x64-musl": {
      "version": "0.1.84",
      "resolved": "https://registry.npmjs.org/@napi-rs/canvas-linux-x64-musl/-/canvas-linux-x64-musl-0.1.84.tgz",
      "integrity": "sha512-vUZmua6ADqTWyHyei81aXIt9wp0yjeNwTH0KdhdeoBb6azHmFR8uKTukZMXfLCC3bnsW0t4lW7K78KNMknmtjg==",
      "cpu": ["x64"],
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@napi-rs/canvas-win32-x64-msvc": {
      "version": "0.1.84",
      "resolved": "https://registry.npmjs.org/@napi-rs/canvas-win32-x64-msvc/-/canvas-win32-x64-msvc-0.1.84.tgz",
      "integrity": "sha512-YSs8ncurc1xzegUMNnQUTYrdrAuaXdPMOa+iYYyAxydOtg0ppV386hyYMsy00Yip1NlTgLCseRG4sHSnjQx6og==",
      "cpu": ["x64"],
      "license": "MIT",
      "optional": true,
      "os": ["win32"],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.53",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.53.tgz",
      "integrity": "sha512-vENRlFU4YbrwVqNDZ7fLvy+JR1CRkyr01jhSiDpE1u6py3OMzQfztQU2jxykW3ALNxO4kSlqIDeYyD0Y9RcQeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.53.4.tgz",
      "integrity": "sha512-PWU3Y92H4DD0bOqorEPp1Y0tbzwAurFmIYpjcObv5axGVOtcTlB0b2UKMd2echo08MgN7jO8WQZSSysvfisFSQ==",
      "cpu": ["arm"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["android"]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.53.4.tgz",
      "integrity": "sha512-Gw0/DuVm3rGsqhMGYkSOXXIx20cC3kTlivZeuaGt4gEgILivykNyBWxeUV5Cf2tDA2nPLah26vq3emlRrWVbng==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["android"]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.53.4.tgz",
      "integrity": "sha512-+w06QvXsgzKwdVg5qRLZpTHh1bigHZIqoIUPtiqh05ZiJVUQ6ymOxaPkXTvRPRLH88575ZCRSRM3PwIoNma01Q==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["darwin"]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.53.4.tgz",
      "integrity": "sha512-EB4Na9G2GsrRNRNFPuxfwvDRDUwQEzJPpiK1vo2zMVhEeufZ1k7J1bKnT0JYDfnPC7RNZ2H5YNQhW6/p2QKATw==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["darwin"]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.53.4.tgz",
      "integrity": "sha512-bldA8XEqPcs6OYdknoTMaGhjytnwQ0NClSPpWpmufOuGPN5dDmvIa32FygC2gneKK4A1oSx86V1l55hyUWUYFQ==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["freebsd"]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.53.4.tgz",
      "integrity": "sha512-3T8GPjH6mixCd0YPn0bXtcuSXi1Lj+15Ujw2CEb7dd24j9thcKscCf88IV7n76WaAdorOzAgSSbuVRg4C8V8Qw==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["freebsd"]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.53.4.tgz",
      "integrity": "sha512-UPMMNeC4LXW7ZSHxeP3Edv09aLsFUMaD1TSVW6n1CWMECnUIJMFFB7+XC2lZTdPtvB36tYC0cJWc86mzSsaviw==",
      "cpu": ["arm"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.53.4.tgz",
      "integrity": "sha512-H8uwlV0otHs5Q7WAMSoyvjV9DJPiy5nJ/xnHolY0QptLPjaSsuX7tw+SPIfiYH6cnVx3fe4EWFafo6gH6ekZKA==",
      "cpu": ["arm"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.53.4.tgz",
      "integrity": "sha512-BLRwSRwICXz0TXkbIbqJ1ibK+/dSBpTJqDClF61GWIrxTXZWQE78ROeIhgl5MjVs4B4gSLPCFeD4xML9vbzvCQ==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.53.4.tgz",
      "integrity": "sha512-6bySEjOTbmVcPJAywjpGLckK793A0TJWSbIa0sVwtVGfe/Nz6gOWHOwkshUIAp9j7wg2WKcA4Snu7Y1nUZyQew==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.53.4.tgz",
      "integrity": "sha512-U0ow3bXYJZ5MIbchVusxEycBw7bO6C2u5UvD31i5IMTrnt2p4Fh4ZbHSdc/31TScIJQYHwxbj05BpevB3201ug==",
      "cpu": ["loong64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.53.4.tgz",
      "integrity": "sha512-iujDk07ZNwGLVn0YIWM80SFN039bHZHCdCCuX9nyx3Jsa2d9V/0Y32F+YadzwbvDxhSeVo9zefkoPnXEImnM5w==",
      "cpu": ["ppc64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.53.4.tgz",
      "integrity": "sha512-MUtAktiOUSu+AXBpx1fkuG/Bi5rhlorGs3lw5QeJ2X3ziEGAq7vFNdWVde6XGaVqi0LGSvugwjoxSNJfHFTC0g==",
      "cpu": ["riscv64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.53.4.tgz",
      "integrity": "sha512-btm35eAbDfPtcFEgaXCI5l3c2WXyzwiE8pArhd66SDtoLWmgK5/M7CUxmUglkwtniPzwvWioBKKl6IXLbPf2sQ==",
      "cpu": ["riscv64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.53.4.tgz",
      "integrity": "sha512-uJlhKE9ccUTCUlK+HUz/80cVtx2RayadC5ldDrrDUFaJK0SNb8/cCmC9RhBhIWuZ71Nqj4Uoa9+xljKWRogdhA==",
      "cpu": ["s390x"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.53.4.tgz",
      "integrity": "sha512-jjEMkzvASQBbzzlzf4os7nzSBd/cvPrpqXCUOqoeCh1dQ4BP3RZCJk8XBeik4MUln3m+8LeTJcY54C/u8wb3DQ==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.53.4.tgz",
      "integrity": "sha512-lu90KG06NNH19shC5rBPkrh6mrTpq5kviFylPBXQVpdEu0yzb0mDgyxLr6XdcGdBIQTH/UAhDJnL+APZTBu1aQ==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.53.4.tgz",
      "integrity": "sha512-dFDcmLwsUzhAm/dn0+dMOQZoONVYBtgik0VuY/d5IJUUb787L3Ko/ibvTvddqhb3RaB7vFEozYevHN4ox22R/w==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["openharmony"]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.53.4.tgz",
      "integrity": "sha512-WvUpUAWmUxZKtRnQWpRKnLW2DEO8HB/l8z6oFFMNuHndMzFTJEXzaYJ5ZAmzNw0L21QQJZsUQFt2oPf3ykAD/w==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.53.4.tgz",
      "integrity": "sha512-JGbeF2/FDU0x2OLySw/jgvkwWUo05BSiJK0dtuI4LyuXbz3wKiC1xHhLB1Tqm5VU6ZZDmAorj45r/IgWNWku5g==",
      "cpu": ["ia32"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.53.4.tgz",
      "integrity": "sha512-zuuC7AyxLWLubP+mlUwEyR8M1ixW1ERNPHJfXm8x7eQNP4Pzkd7hS3qBuKBR70VRiQ04Kw8FNfRMF5TNxuZq2g==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.53.4.tgz",
      "integrity": "sha512-Sbx45u/Lbb5RyptSbX7/3deP+/lzEmZ0BTSHxwxN/IMOZDZf8S0AGo0hJD5n/LQssxb5Z3B4og4P2X6Dd8acCA==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"]
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/history": {
      "version": "4.7.11",
      "resolved": "https://registry.npmjs.org/@types/history/-/history-4.7.11.tgz",
      "integrity": "sha512-qjDJRrmvBMiTx+jyLxvLfJU7UznFuokDv4f3WRuriHKERccVpFU+8XMQUAbDzoiJCsmexxRExQeMwwCdamSKDA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "24.10.4",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-24.10.4.tgz",
      "integrity": "sha512-vnDVpYPMzs4wunl27jHrfmwojOGKya0xyM3sH+UE5iv5uPS6vX7UIoh6m+vQc5LGBq52HBKPIn/zcSZVzeDEZg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~7.16.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.7.tgz",
      "integrity": "sha512-MWtvHrGZLFttgeEj28VXHxpmwYbor/ATPYbBfSFZEIRK0ecCFLl2Qo55z52Hss+UV9CRN7trSeq1zbgx7YDWWg==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@types/react-router": {
      "version": "5.1.20",
      "resolved": "https://registry.npmjs.org/@types/react-router/-/react-router-5.1.20.tgz",
      "integrity": "sha512-jGjmu/ZqS7FjSH6owMcD5qpq19+1RS9DeVRqfl1FeBMxTDQAGwlMWOcs52NDoXaNKyG3d1cYQFMs9rCrb88o9Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/history": "^4.7.11",
        "@types/react": "*"
      }
    },
    "node_modules/@types/react-toastify": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/@types/react-toastify/-/react-toastify-4.0.2.tgz",
      "integrity": "sha512-pHjCstnN0ZgopIWQ9UiWsD9n+HsXs1PnMQC4hIZuSzpDO0lRjigpTuqsUtnBkMbLIg+mGFSAsBjL49SspzoLKA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/react": "*",
        "@types/react-transition-group": "*"
      }
    },
    "node_modules/@types/react-transition-group": {
      "version": "4.4.12",
      "resolved": "https://registry.npmjs.org/@types/react-transition-group/-/react-transition-group-4.4.12.tgz",
      "integrity": "sha512-8TV6R3h2j7a91c+1DXdJi3Syo69zzIZbz7Lg5tORM5LEJG7X/E6a1V3drRyBRZq7/utz7A+c4OgYLiLcYGHG6w==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "*"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.50.0.tgz",
      "integrity": "sha512-O7QnmOXYKVtPrfYzMolrCTfkezCJS9+ljLdKW/+DCvRsc3UAz+sbH6Xcsv7p30+0OwUbeWfUDAQE0vpabZ3QLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.10.0",
        "@typescript-eslint/scope-manager": "8.50.0",
        "@typescript-eslint/type-utils": "8.50.0",
        "@typescript-eslint/utils": "8.50.0",
        "@typescript-eslint/visitor-keys": "8.50.0",
        "ignore": "^7.0.0",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.50.0",
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.5.tgz",
      "integrity": "sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.50.0.tgz",
      "integrity": "sha512-6/cmF2piao+f6wSxUsJLZjck7OQsYyRtcOZS02k7XINSNlz93v6emM8WutDQSXnroG2xwYlEVHJI+cPA7CPM3Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.50.0",
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/typescript-estree": "8.50.0",
        "@typescript-eslint/visitor-keys": "8.50.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.50.0.tgz",
      "integrity": "sha512-Cg/nQcL1BcoTijEWyx4mkVC56r8dj44bFDvBdygifuS20f3OZCHmFbjF34DPSi07kwlFvqfv/xOLnJ5DquxSGQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.50.0",
        "@typescript-eslint/types": "^8.50.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.50.0.tgz",
      "integrity": "sha512-xCwfuCZjhIqy7+HKxBLrDVT5q/iq7XBVBXLn57RTIIpelLtEIZHXAF/Upa3+gaCpeV1NNS5Z9A+ID6jn50VD4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/visitor-keys": "8.50.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.50.0.tgz",
      "integrity": "sha512-vxd3G/ybKTSlm31MOA96gqvrRGv9RJ7LGtZCn2Vrc5htA0zCDvcMqUkifcjrWNNKXHUU3WCkYOzzVSFBd0wa2w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.50.0.tgz",
      "integrity": "sha512-7OciHT2lKCewR0mFoBrvZJ4AXTMe/sYOe87289WAViOocEmDjjv8MvIOT2XESuKj9jp8u3SZYUSh89QA4S1kQw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/typescript-estree": "8.50.0",
        "@typescript-eslint/utils": "8.50.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.50.0.tgz",
      "integrity": "sha512-iX1mgmGrXdANhhITbpp2QQM2fGehBse9LbTf0sidWK6yg/NE+uhV5dfU1g6EYPlcReYmkE9QLPq/2irKAmtS9w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.50.0.tgz",
      "integrity": "sha512-W7SVAGBR/IX7zm1t70Yujpbk+zdPq/u4soeFSknWFdXIFuWsBGBOUu/Tn/I6KHSKvSh91OiMuaSnYp3mtPt5IQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.50.0",
        "@typescript-eslint/tsconfig-utils": "8.50.0",
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/visitor-keys": "8.50.0",
        "debug": "^4.3.4",
        "minimatch": "^9.0.4",
        "semver": "^7.6.0",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.1.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.50.0.tgz",
      "integrity": "sha512-87KgUXET09CRjGCi2Ejxy3PULXna63/bMYv72tCAlDJC3Yqwln0HiFJ3VJMst2+mEtNtZu5oFvX4qJGjKsnAgg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.7.0",
        "@typescript-eslint/scope-manager": "8.50.0",
        "@typescript-eslint/types": "8.50.0",
        "@typescript-eslint/typescript-estree": "8.50.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.50.0.tgz",
      "integrity": "sha512-Xzmnb58+Db78gT/CCj/PVCvK+zxbnsw6F+O1oheYszJbBSdEjVhQi3C/Xttzxgi/GLmpvOggRs1RFpiJ8+c34Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.50.0",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-5.1.2.tgz",
      "integrity": "sha512-EcA07pHJouywpzsoTUqNh5NwGayl2PPVEJKUSinGGSxFGYn+shYbqMGBg6FXDqgXum9Ou/ecb+411ssw8HImJQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.5",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-beta.53",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.18.0"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.9.7",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.9.7.tgz",
      "integrity": "sha512-k9xFKplee6KIio3IDbwj+uaCLpqzOwakOgmqzPezM0sFJlFKcg30vk2wOiAJtkTSfx0SSQDSe8q+mWA/fSH5Zg==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.1.tgz",
      "integrity": "sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.9.0",
        "caniuse-lite": "^1.0.30001759",
        "electron-to-chromium": "^1.5.263",
        "node-releases": "^2.0.27",
        "update-browserslist-db": "^1.2.0"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001760",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001760.tgz",
      "integrity": "sha512-7AAMPcueWELt1p3mi13HR/LHH0TJLT11cnwDJEs3xA4+CK/PLKeO9Kl1oru24htkyUKtkGCvAx4ohB0Ttry8Dw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/clsx": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz",
      "integrity": "sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/dequal": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/dequal/-/dequal-2.0.3.tgz",
      "integrity": "sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==",
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.267",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.267.tgz",
      "integrity": "sha512-0Drusm6MVRXSOJpGbaSVgcQsuB4hEkMpHXaVstcPmhu5LIedxs1xNK/nIxmQIU/RPC0+1/o0AVZfBTkTNJOdUw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/esbuild": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.1.tgz",
      "integrity": "sha512-yY35KZckJJuVVPXpvjgxiCuVEJT67F6zDeVTv4rizyPrfGBUpZQsvmxnN+C371c2esD/hNMjj4tpBhuueLN7aA==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.1",
        "@esbuild/android-arm": "0.27.1",
        "@esbuild/android-arm64": "0.27.1",
        "@esbuild/android-x64": "0.27.1",
        "@esbuild/darwin-arm64": "0.27.1",
        "@esbuild/darwin-x64": "0.27.1",
        "@esbuild/freebsd-arm64": "0.27.1",
        "@esbuild/freebsd-x64": "0.27.1",
        "@esbuild/linux-arm": "0.27.1",
        "@esbuild/linux-arm64": "0.27.1",
        "@esbuild/linux-ia32": "0.27.1",
        "@esbuild/linux-loong64": "0.27.1",
        "@esbuild/linux-mips64el": "0.27.1",
        "@esbuild/linux-ppc64": "0.27.1",
        "@esbuild/linux-riscv64": "0.27.1",
        "@esbuild/linux-s390x": "0.27.1",
        "@esbuild/linux-x64": "0.27.1",
        "@esbuild/netbsd-arm64": "0.27.1",
        "@esbuild/netbsd-x64": "0.27.1",
        "@esbuild/openbsd-arm64": "0.27.1",
        "@esbuild/openbsd-x64": "0.27.1",
        "@esbuild/openharmony-arm64": "0.27.1",
        "@esbuild/sunos-x64": "0.27.1",
        "@esbuild/win32-arm64": "0.27.1",
        "@esbuild/win32-ia32": "0.27.1",
        "@esbuild/win32-x64": "0.27.1"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "9.39.2",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.39.2.tgz",
      "integrity": "sha512-LEyamqS7W5HB3ujJyvi0HQK/dtVINZvd5mAAp9eT5S/ujByGjiZLCzPcHVzuXbpJDJF/cxwHlfceVUDZ2lnSTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.1",
        "@eslint/config-helpers": "^0.4.2",
        "@eslint/core": "^0.17.0",
        "@eslint/eslintrc": "^3.3.1",
        "@eslint/js": "9.39.2",
        "@eslint/plugin-kit": "^0.4.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.0.1.tgz",
      "integrity": "sha512-O0d0m04evaNzEPoSW+59Mezf8Qt0InfgGIBJnpC0h3NH/WjUAR7BIKUfysC6todmtiZ/A0oUVS8Gce0WhBrHsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
      }
    },
    "node_modules/eslint-plugin-react-refresh": {
      "version": "0.4.25",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.4.25.tgz",
      "integrity": "sha512-dRUD2LOdEqI4zXHqbQ442blQAzdSuShAaiSq5Vtyy6LT08YUf0oOjBDo4VPx0dCPgiPWh1WB4dtbLOd0kOlDPQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "eslint": ">=8.40"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.4.0.tgz",
      "integrity": "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.4.0.tgz",
      "integrity": "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": ["darwin"],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "16.5.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-16.5.0.tgz",
      "integrity": "sha512-c/c15i26VrJ4IRt5Z89DnIzCGDn9EcebibhAOjw5ibqEHsE1wLUgkPn9RDmNcUKyU87GeaL633nyJ+pplFR2ZQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/make-cancellable-promise": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/make-cancellable-promise/-/make-cancellable-promise-2.0.0.tgz",
      "integrity": "sha512-3SEQqTpV9oqVsIWqAcmDuaNeo7yBO3tqPtqGRcKkEo0lrzD3wqbKG9mkxO65KoOgXqj+zH2phJ2LiAsdzlogSw==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/wojtekmaj/make-cancellable-promise?sponsor=1"
      }
    },
    "node_modules/make-event-props": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/make-event-props/-/make-event-props-2.0.0.tgz",
      "integrity": "sha512-G/hncXrl4Qt7mauJEXSg3AcdYzmpkIITTNl5I+rH9sog5Yw0kK6vseJjCaPfOXqOqQuPUP89Rkhfz5kPS8ijtw==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/wojtekmaj/make-event-props?sponsor=1"
      }
    },
    "node_modules/merge-refs": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-refs/-/merge-refs-2.0.0.tgz",
      "integrity": "sha512-3+B21mYK2IqUWnd2EivABLT7ueDhb0b8/dGK8LoFQPrU61YITeCMn14F7y7qZafWNZhUEKb24cJdiT5Wxs3prg==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/wojtekmaj/merge-refs?sponsor=1"
      },
      "peerDependencies": {
        "@types/react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
      "integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pdfjs-dist": {
      "version": "5.4.296",
      "resolved": "https://registry.npmjs.org/pdfjs-dist/-/pdfjs-dist-5.4.296.tgz",
      "integrity": "sha512-DlOzet0HO7OEnmUmB6wWGJrrdvbyJKftI1bhMitK7O2N8W2gc757yyYBbINy9IDafXAV9wmKr9t7xsTaNKRG5Q==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">=20.16.0 || >=22.3.0"
      },
      "optionalDependencies": {
        "@napi-rs/canvas": "^0.1.80"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.3.tgz",
      "integrity": "sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/react": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.3.tgz",
      "integrity": "sha512-Ku/hhYbVjOQnXDZFv2+RibmLFGwFdeeKHFcOTlrt7xplBnya5OGn/hIRDsqDiSUcfORsDC7MPxwork8jBwsIWA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-yELu4WmLPw5Mr/lmeEpox5rw3RETacE++JgHqQzd2dg+YbJuat3jH4ingc+WPZhxaoFzdv9y33G+F7Nl5O0GBg==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.3"
      }
    },
    "node_modules/react-pdf": {
      "version": "10.2.0",
      "resolved": "https://registry.npmjs.org/react-pdf/-/react-pdf-10.2.0.tgz",
      "integrity": "sha512-zk0DIL31oCh8cuQycM0SJKfwh4Onz0/Nwi6wTOjgtEjWGUY6eM+/vuzvOP3j70qtEULn7m1JtaeGzud1w5fY2Q==",
      "license": "MIT",
      "dependencies": {
        "clsx": "^2.0.0",
        "dequal": "^2.0.3",
        "make-cancellable-promise": "^2.0.0",
        "make-event-props": "^2.0.0",
        "merge-refs": "^2.0.0",
        "pdfjs-dist": "5.4.296",
        "tiny-invariant": "^1.0.0",
        "warning": "^4.0.0"
      },
      "funding": {
        "url": "https://github.com/wojtekmaj/react-pdf?sponsor=1"
      },
      "peerDependencies": {
        "@types/react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0",
        "react-dom": "^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      },
      "peerDependenciesMeta": {
        "@types/react": {
          "optional": true
        }
      }
    },
    "node_modules/react-refresh": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.18.0.tgz",
      "integrity": "sha512-QgT5//D3jfjJb6Gsjxv0Slpj23ip+HtOpnNgnb2S5zU3CB26G/IDPGoy4RJB42wzFE46DRsstbW6tKHoKbhAxw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-router": {
      "version": "7.10.1",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-7.10.1.tgz",
      "integrity": "sha512-gHL89dRa3kwlUYtRQ+m8NmxGI6CgqN+k4XyGjwcFoQwwCWF6xXpOCUlDovkXClS0d0XJN/5q7kc5W3kiFEd0Yw==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.1",
        "set-cookie-parser": "^2.6.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/react-toastify": {
      "version": "11.0.5",
      "resolved": "https://registry.npmjs.org/react-toastify/-/react-toastify-11.0.5.tgz",
      "integrity": "sha512-EpqHBGvnSTtHYhCPLxML05NLY2ZX0JURbAdNYa6BUkk+amz4wbKBQvoKQAB0ardvSarUBuY4Q4s1sluAzZwkmA==",
      "license": "MIT",
      "dependencies": {
        "clsx": "^2.1.1"
      },
      "peerDependencies": {
        "react": "^18 || ^19",
        "react-dom": "^18 || ^19"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/rollup": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.53.4.tgz",
      "integrity": "sha512-YpXaaArg0MvrnJpvduEDYIp7uGOqKXbH9NsHGQ6SxKCOsNAjZF018MmxefFUulVP2KLtiGw1UvZbr+/ekjvlDg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.53.4",
        "@rollup/rollup-android-arm64": "4.53.4",
        "@rollup/rollup-darwin-arm64": "4.53.4",
        "@rollup/rollup-darwin-x64": "4.53.4",
        "@rollup/rollup-freebsd-arm64": "4.53.4",
        "@rollup/rollup-freebsd-x64": "4.53.4",
        "@rollup/rollup-linux-arm-gnueabihf": "4.53.4",
        "@rollup/rollup-linux-arm-musleabihf": "4.53.4",
        "@rollup/rollup-linux-arm64-gnu": "4.53.4",
        "@rollup/rollup-linux-arm64-musl": "4.53.4",
        "@rollup/rollup-linux-loong64-gnu": "4.53.4",
        "@rollup/rollup-linux-ppc64-gnu": "4.53.4",
        "@rollup/rollup-linux-riscv64-gnu": "4.53.4",
        "@rollup/rollup-linux-riscv64-musl": "4.53.4",
        "@rollup/rollup-linux-s390x-gnu": "4.53.4",
        "@rollup/rollup-linux-x64-gnu": "4.53.4",
        "@rollup/rollup-linux-x64-musl": "4.53.4",
        "@rollup/rollup-openharmony-arm64": "4.53.4",
        "@rollup/rollup-win32-arm64-msvc": "4.53.4",
        "@rollup/rollup-win32-ia32-msvc": "4.53.4",
        "@rollup/rollup-win32-x64-gnu": "4.53.4",
        "@rollup/rollup-win32-x64-msvc": "4.53.4",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.2.tgz",
      "integrity": "sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==",
      "license": "MIT"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/tiny-invariant": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/tiny-invariant/-/tiny-invariant-1.3.3.tgz",
      "integrity": "sha512-+FbBPE1o9QAYvviau/qC5SE3caw21q3xkvWKBtja5vgqOWIHHJ3ioaq1VPfn/Szqctz2bU/oYeKd9/z5BL+PVg==",
      "license": "MIT"
    },
    "node_modules/tinyglobby": {
      "version": "0.2.15",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
      "integrity": "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.1.0.tgz",
      "integrity": "sha512-CUgTZL1irw8u29bzrOD/nH85jqyc74D6SshFgujOIA7osm2Rz7dYH77agkx7H4FBNxDq7Cjf+IjaX/8zwFW+ZQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-eslint": {
      "version": "8.50.0",
      "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.50.0.tgz",
      "integrity": "sha512-Q1/6yNUmCpH94fbgMUMg2/BSAr/6U7GBk61kZTv1/asghQOWOjTlp9K8mixS5NcJmm2creY+UFfGeW/+OcA64A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "8.50.0",
        "@typescript-eslint/parser": "8.50.0",
        "@typescript-eslint/typescript-estree": "8.50.0",
        "@typescript-eslint/utils": "8.50.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0",
        "typescript": ">=4.8.4 <6.0.0"
      }
    },
    "node_modules/undici-types": {
      "version": "7.16.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.16.0.tgz",
      "integrity": "sha512-Zz+aZWSj8LE6zoxD+xrjh4VfkIG8Ya6LvYkZqtUQGJPZjYl53ypCaUwWqo7eI0x66KBGeRo+mlBEkMSeSZ38Nw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.2.tgz",
      "integrity": "sha512-E85pfNzMQ9jpKkA7+TJAi4TJN+tBCuWh5rUcS/sv6cFi+1q9LYDwDI5dpUL0u/73EElyQ8d3TEaeW4sPedBqYA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/vite": {
      "version": "7.3.0",
      "resolved": "https://registry.npmjs.org/vite/-/vite-7.3.0.tgz",
      "integrity": "sha512-dZwN5L1VlUBewiP6H9s2+B3e3Jg96D0vzN+Ry73sOefebhYr9f94wwkMNN/9ouoU8pV1BqA1d1zGk8928cx0rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.27.0",
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3",
        "postcss": "^8.5.6",
        "rollup": "^4.43.0",
        "tinyglobby": "^0.2.15"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "lightningcss": "^1.21.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/warning": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/warning/-/warning-4.0.3.tgz",
      "integrity": "sha512-rpJyN222KWIvHJ/F53XSZv0Zl/accqHR8et1kpaMTD/fLCRxtV8iX8czMzY7sVZupTI3zcUTg8eycS2kNF9l6w==",
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.0.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.2.0.tgz",
      "integrity": "sha512-Bd5fw9wlIhtqCCxotZgdTOMwGm1a0u75wARVEY9HMs1X17trvA/lMi4+MGK5EUfYkXVTbX8UDiDKW4OgzHVUZw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    }
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\package.json`

```json
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "npx vite build",
    "vite:build": "npx vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-pdf": "^10.2.0",
    "react-router": "^7.10.1",
    "react-toastify": "^11.0.5"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/node": "^24.10.4",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@types/react-router": "^5.1.20",
    "@types/react-toastify": "^4.0.2",
    "@vitejs/plugin-react": "^5.1.2",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.46.4",
    "vite": "^7.2.4"
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\public\assets\docs\cv-cedric-gouyon.pdf`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\public\assets\docs\noticeAppWeb.pdf`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\public\assets\favicon\favicon.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\App.tsx`

```tsx
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { constants } from "../../setup/constants";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const appName = constants.APP_NAME;
    document.title = appName;
  }, []);

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </>
  );
}

export default App;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\Icone_fictif.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-Storyset.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-adobe-color.svg`

```
<svg xmlns="http://www.w3.org/2000/svg" width="240" height="234" viewBox="0 0 240 234">
  <defs>
    <style>
      .cls-1 {
        fill: #000b1d;
      }

      .cls-2 {
        fill: #fff;
        fill-rule: evenodd;
      }
    </style>
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="Layer_1-2" data-name="Layer 1">
      <g id="Surfaces">
        <g id="Utility_Surface" data-name="Utility Surface">
          <g id="Outline_no_shadow" data-name="Outline no shadow">
            <rect class="cls-1" width="240" height="234" rx="42.5"/>
          </g>
        </g>
      </g>
      <g id="Outlined_Mnemonics_Logos" data-name="Outlined Mnemonics Logos">
        <g id="Adobe_Color" data-name="Adobe Color">
          <path class="cls-2" d="M178.22568,163.99361a12.52465,12.52465,0,0,0-8.17578,3.07547l-15.507-15.50705A57.7922,57.7922,0,0,0,167.287,115.65377,55.97705,55.97705,0,0,0,155.55026,81.5376l14.69579-14.89527a12.53132,12.53132,0,1,0-3.521-4.55836L151.85637,77.16544a56.06682,56.06682,0,0,0-40.91547-17.871A56.8215,56.8215,0,0,0,54.41865,115.6571c0,30.56858,25.332,57.43992,56.52225,57.43992a55.45831,55.45831,0,0,0,39.84821-17.23264L166.58875,171.684a12.63435,12.63435,0,1,0,11.63693-7.69036Zm-22.25649-48.26337a46.21524,46.21524,0,0,1-9.49905,27.75244l-20.30147-20.30146a13.92108,13.92108,0,0,0,.48875-12.3418l20.80019-21.0961A44.43972,44.43972,0,0,1,155.96919,115.73024ZM111.2335,161.613c-24.79332,0-44.88532-21.63474-44.88532-45.88277A45.21782,45.21782,0,0,1,111.2335,70.91808a44.46642,44.46642,0,0,1,32.58343,14.38658l-20.51758,20.81016a15.29431,15.29431,0,0,0-10.51979-4.16934,14.62929,14.62929,0,1,0-.01471,29.25858h.01471a15.23775,15.23775,0,0,0,9.775-3.57088l20.225,20.225A43.85127,43.85127,0,0,1,111.2335,161.623Z"/>
        </g>
      </g>
    </g>
  </g>
</svg>

```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-colorzilla.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-coolors.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-css.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-dribbble.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-figma.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-font-interceptor.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-freepik.svg`

```
<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 223.5" width="2500" height="2101"><style>.st0{fill:#1e61c6}.st1{fill:#1e60c6}.st2{fill:#2163c7}.st3{fill:#2162c6}</style><title>freepik</title><g id="Cwb6Ph.tif"><path class="st0" d="M46.3 157.8c-1-5.4-2.3-10.7-3-16.1-2.8-21.1 1.7-40.6 14.2-58C67.3 70 80.7 60.5 96.1 53.9c18.5-7.9 38.4-12.2 58.5-12.6 17.9-.5 33.5 6.1 47.1 17.3 14 11.6 24.8 25.9 33.1 42 4 7.8 7.7 15.8 11.5 23.8.4.9.7 1.9.9 2.9-5.3 3.2-10.4 6.5-15.8 9.4-20 11-41.6 18.5-64.1 22.4-12.3 2.1-24.7 3.3-37.1 4.1-11.8.8-23.6 1.2-35.4.9-16.1-.4-32.1-2.9-48.5-6.3zm25.4-53.6c-.3 17.6 14 31.8 31.4 32 16.8.2 32.5-12.7 32.5-31.6 0-19.6-15.1-32-32-32-17.5 0-31.8 14.1-31.9 31.6zm122.9 9.2c9.5.7 20.1-7.2 20.2-20.2.1-10.8-8.6-19.6-19.4-19.7h-.4c-11-.2-20 8.6-20.2 19.5v.3c0 11.4 8.5 20.1 19.8 20.1z"/><path class="st1" d="M247.8 131.8c1.4 16.8-2.8 31.6-11.2 45.2-11.4 18.4-28.4 30-48.4 37.3-20.4 7.4-42.1 10.3-63.7 8.7-12.9-.9-25.9-2.8-37.5-8.9-20-10.6-32.4-27.5-38.9-49-.3-1.3-.4-2.7-.5-4 70.5 16.3 137.4 9.1 200.2-29.3z"/><path class="st2" d="M244.5 70.7c5.2-1.9 5.2-2 4.7-6.9-.3-2.8-.4-5.6 1-8.3.6-1.1.5-2.5.6-3.8.2-4 3.5-7.1 7.5-7.1s7.4 3.2 7.6 7.2c0 4-3.2 7.3-7.2 7.5-1.3.1-2.6 0-4.4 0-.2 2-.6 3.8-.4 5.5.6 4.9-.2 9-5.8 11.1l11.4 20.2-17.1 10.6C235.2 90 224.2 76.2 211 63.6l10.2-12.4c9.5 4.5 16.6 11.7 23.3 19.5zM38.7 132.6L22.1 127c-.8-10 1.3-19.3 5-28.4l-5.8-9.2c-2.1 0-4.2.4-6-.1-4-.9-7.9-2.1-11.6-3.6C.8 84.5-.5 80.5.3 77.6c1.1-3.5 4.4-5.7 8-5.4 3.4.3 6.2 2.9 6.7 6.3.2 1.6 0 3.3 0 5.3h8.8c3.7 1.5 3.5 6 6.3 8.9 5.5-7.2 10.9-14.4 19.1-19.5l7.6 5.9c-5.8 8-12 15.5-14.1 24.8-2.1 9.4-2.7 18.8-4 28.7z"/><path class="st3" d="M106.7 48.2l-3.4-8.4c9.4-7.5 20.1-10.6 31.4-12.1.2-3-1.3-4.3-3.6-5.5-7.8-4-9.1-13.4-2.9-19.1 3.7-3.4 8.1-3.9 12.5-2.2 4 1.4 6.8 5.1 7.1 9.4.7 4.6-1.5 9.1-5.5 11.4-1.1.6-2.3 1.1-3.4 1.6l1.2 3.8c10.1-.2 20-.1 29.8 3.8l-1.4 8.3c-20.7.1-41.7-1-61.8 9z"/></g></svg>
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-git.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-github.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-google-fonts.svg`

```
<svg height="1952" viewBox="0 0 509.58086729 397.8808683" width="2500" xmlns="http://www.w3.org/2000/svg"><path d="m0 387.4 245.52-385.39 131.6 83.84-192.11 301.55z" fill="#fbbc04"/><path d="m240.33 0h151.13v387.4h-151.13z" fill="#1a73e8"/><circle cx="83.72" cy="81.35" fill="#ea4335" r="74.91"/><path d="m499.1 279.76a107.64 107.64 0 0 1 -107.64 107.64v-215.27a107.64 107.64 0 0 1 107.64 107.63z" fill="#34a853"/><path d="m391.46 172.13v215.27a107.64 107.64 0 0 1 0-215.27z" fill="#0d652d"/><path d="m474.3 89.29a82.85 82.85 0 0 1 -82.84 82.84v-165.69a82.85 82.85 0 0 1 82.84 82.85z" fill="#1a73e8"/><path d="m391.46 6.44v165.69a82.85 82.85 0 0 1 0-165.69z" fill="#174ea6"/></svg>
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-google.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-html.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-icon8.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-ilovepdf.webp`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-js.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-kwixeo.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-mdn.webp`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-node.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-page-speed-insights.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-pexels.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-php.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-pixabay.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-python.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-typescript.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-uiverse.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-unsplash.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-vecteezy.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-vscode.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-w3c.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-wappalyzer.webp`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icone-wireframe.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icons8-adobe-acrobat-48.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\icons8-logo-office-48.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\picto_accessible_200.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\picto_category_200.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\picto_dashboard_200.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\picto_database_200.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\picto_favorite_200.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\picto_file_open_200.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\picto_hearing_200.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\picto_security_200.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\picto_tune_200.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\icones\picto_visibility_200.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\images\cv.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\images\no-image.jpg`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\images\profile.PNG`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\images\projects.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\images\skills.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\logos\ClickDev.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\logos\Coreex.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\logos\FullstackStarterKit.PNG`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\logos\KartAlgo.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\logos\PackAndGo.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\logos\Portfolio.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\logos\SeanZ.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\logos\StreamFlix.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\assets\logos\Tealii.png`

⚠️ **Fichier ignoré (format binaire)**

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\components\ScrollToTop.tsx`

```tsx
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\components\footer\Footer.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap");

.footer {
  background: linear-gradient(135deg, var(--teal-color) 0%, var(--teal-dark-color) 100%);
  color: var(--white-color);
  padding: 2rem 1rem 1rem;
  margin: 0;
  font-family: "Baloo 2", sans-serif;
  width: 100%;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 0 auto 2rem;
  gap: 2rem;
}

.footer-section {
  min-width: 150px;
}

.footer-section h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: var(--gold-color);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.footer-section a:hover {
  color: var(--gold-color);
  padding-left: 5px;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.footer-bottom .highlight {
  color: var(--gold-color);
  font-weight: 700;
}

@media (max-width: 600px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    gap: 2.5rem;
  }

  .footer-section a:hover {
    padding-left: 0;
    transform: scale(1.1);
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\components\footer\Footer.tsx`

```tsx
import { Link } from "react-router";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/my-skills">Mes comptétences</Link>
            </li>
            <li>
              <Link to="/my-cv">Mon CV</Link>
            </li>
            <li>
              <Link to="/my-history">Mon histoire</Link>
            </li>
            <li>
              <Link to="/projects">Mes projets</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Me suivre</h3>
          <ul>
            <li>
              <a href="https://github.com/CedricGOUYON" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/cedricgouyon/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <Link to="/contact-me">Me contacter</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} <span className="highlight">GOUYON Cédric</span>. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\components\header\Header.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap");

.header {
  position: sticky;
  top: 0;
  width: 100%;
  background: linear-gradient(135deg, var(--teal-color) 0%, var(--teal-dark-color) 100%);
  color: var(--white-color);
  padding: 0.75rem 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  font-family: "Baloo 2", sans-serif;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
}

.logo {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--white-color);
  text-decoration: none;
  text-transform: uppercase;
}

.nav-group {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-group a {
  color: var(--white-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}

.nav-group a:hover {
  color: var(--gold-color);
}

@media (max-width: 850px) {
  .header {
    padding: 1rem;
  }

  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-group {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.8rem 1.2rem;
  }

  .nav-group a {
    font-size: 0.85rem;
    padding: 4px 8px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\components\header\Header.tsx`

```tsx
import { Link } from "react-router";
import "./Header.css";
import { constants } from "../../../../setup/constants";

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="left-side">
          <Link to="/" className="logo">
            {constants.APP_NAME}
          </Link>
        </div>

        <div className="nav-group">
          <Link to="/my-skills">Mes Compétences</Link>
          <Link to="/my-history">Mon Parcours</Link>
          <Link to="/my-cv">Mon CV</Link>
          <Link to="/projects">Mes projets</Link>
          <Link to="/contact-me">Me contacter</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\global.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap");

:root {
  --teal-color: #008080;
  --teal-dark-color: #006666;
  --gold-color: #ffd700;
  --white-color: #ffffff;
  --grey-light-color: #f0f0f0;
  --grey-dark-color: #444444;
  --bg-details: #f3e5f5;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 1rem;
}

html,
body,
#root {
  height: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Baloo 2", sans-serif;
  color: var(--grey-dark-color);
  line-height: 1.6;
}

.app-container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background-color: var(--white-color);
  position: relative;
}

.projet-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.projet-page h1 {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, var(--teal-color) 0%, var(--teal-dark-color) 100%);
  color: var(--white-color);
  border-radius: 8px;
  font-size: 2.5rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(0, 128, 128, 0.2);
}

.projet-page .intro {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background-color: var(--white-color);
  border-left: 4px solid var(--teal-color);
  border-radius: 8px;
}

.projet-page .preview {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background-color: var(--white-color);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 128, 128, 0.15);
}

.projet-page .preview h2 {
  font-size: 1.8rem;
  color: var(--teal-color);
  margin-bottom: 1rem;
}

.projet-page .preview iframe {
  width: 100%;
  height: 600px;
  border: none;
  border-radius: 8px;
  background: var(--white-color);
}

.projet-page .details {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background-color: var(--bg-details);
  border-left: 4px solid var(--teal-dark-color);
  border-radius: 8px;
}

.projet-page .links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 3rem;
}

.projet-page .btn {
  display: inline-block;
  background-color: var(--teal-color);
  color: var(--white-color);
  padding: 12px 25px;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 128, 128, 0.2);
}

.projet-page .btn:hover {
  background-color: var(--teal-dark-color);
  transform: translateY(-2px);
  color: var(--gold-color);
  box-shadow: 0 6px 12px rgba(0, 128, 128, 0.3);
}

.projet-page .links a:not(.btn) {
  color: var(--teal-dark-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: opacity 0.2s;
}

.projet-page .links a:not(.btn):hover {
  opacity: 0.8;
  text-decoration: underline;
}

.Toastify__toast-container {
  position: fixed;
  z-index: 9999;
}

.Toastify__toast--default {
  background: var(--teal-color);
  color: var(--white-color);
}

@media (max-width: 768px) {
  .projet-page {
    padding: 1rem;
  }
  .projet-page h1 {
    font-size: 2rem;
    padding: 1.2rem;
  }
  .projet-page .preview iframe {
    height: 400px;
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\main.tsx`

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "./global.css";
import router from "../src/router";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\homePage\HomePage.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap");

.home-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Baloo 2", sans-serif;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, var(--teal-color) 0%, var(--teal-dark-color) 100%);
  color: var(--white-color);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 102, 102, 0.2);
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

.content-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background-color: var(--white-color);
  border-left: 6px solid var(--teal-color);
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.content-section:hover {
  transform: translateY(-5px);
}

.section-content {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.section-content.reverse {
  flex-direction: row-reverse;
}

.section-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.section-text h2 {
  font-size: 1.8rem;
  color: var(--teal-color);
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-text p {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--grey-dark-color);
  margin-bottom: 1.5rem;
}

.section-link {
  display: inline-block;
  padding: 0.8rem 1.8rem;
  background-color: var(--teal-color);
  color: var(--white-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-link:hover {
  background-color: var(--teal-dark-color);
  color: var(--gold-color);
  transform: scale(1.05);
}

.section-image {
  flex: 0 0 250px;
  width: 250px;
  height: 180px;

  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  object-fit: cover;
  object-position: center;
  background-color: var(--grey-light-color);
}

@media (max-width: 850px) {
  .section-content,
  .section-content.reverse {
    flex-direction: column;
    gap: 1.5rem;
  }

  .section-image {
    width: 80%;
    max-width: 250px;
    height: 160px;
    margin: 0 auto;
  }

  .section-text {
    align-items: center;
    text-align: center;
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\homePage\HomePage.tsx`

```tsx
import "./HomePage.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router";
import cvImg from "../../assets/images/cv.png";
import projectsImg from "../../assets/images/projects.png";
import skillsImg from "../../assets/images/skills.png";

const sections = [
  {
    id: "skills",
    title: "Mes compétences et mes atouts",
    description: "Je vous invite à découvrir mes atouts et mes outils. Curieux, autonome et motivé, je mets mon énergie au service des projets. Vous trouverez ici les langages que j'apprends et pratique, mes ressources quotidiennes et les qualités humaines qui me guident : écoute, passion, créativité, ergonomie et souci de l'accessibilité.",
    image: skillsImg,
    imageAlt: "Illustration représentant les compétences techniques et humaines",
    link: "/my-skills",
    linkText: "Découvrir mes compétences",
    linkAriaLabel: "Naviguer vers la page de mes compétences",
    reverse: false,
  },
  {
    id: "cv",
    title: "Mon CV",
    description: "Je vous propose de parcourir mon CV complet, véritable fil conducteur de mon parcours. Avant de me tourner vers le développement web, j'ai évolué dans d'autres domaines qui m'ont permis d'acquérir des qualités humaines et professionnelles essentielles. Chaque étape raconte une progression, chaque expérience illustre ma volonté d'apprendre.",
    image: cvImg,
    imageAlt: "Aperçu du curriculum vitae",
    link: "/my-cv",
    linkText: "Consulter mon CV",
    linkAriaLabel: "Naviguer vers la page de mon CV",
    reverse: true,
  },
  {
    id: "projects",
    title: "Mes projets",
    description: "Laissez-vous guider vers mes premiers projets, des applications web complètes qui témoignent de mon apprentissage et de ma progression. Chaque projet est une étape, une expérience concrète où j'ai pu mettre en pratique mes compétences et explorer de nouvelles idées.",
    image: projectsImg,
    imageAlt: "Aperçu des projets réalisés",
    link: "/projects",
    linkText: "Explorer mes projets",
    linkAriaLabel: "Naviguer vers la page de mes projets",
    reverse: false,
  },
];

function HomePage() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Bienvenue</h1>
        <p className="hero-subtitle">Cette application web est plus qu'un simple portfolio : c'est mon espace personnel et créatif, une vitrine vivante où se rencontrent mes compétences, mon histoire et mes projets. Chaque section est pensée comme une étape de mon parcours, une preuve de mon savoir-faire et de ma vision.</p>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.id}
          className="content-section"
          ref={(el) => {
            sectionsRef.current[index] = el;
          }}
        >
          <div className={`section-content ${section.reverse ? "reverse" : ""}`}>
            {!section.reverse && (
              <div className="section-text">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <Link to={section.link} className="section-link" aria-label={section.linkAriaLabel}>
                  {section.linkText}
                </Link>
              </div>
            )}

            <img src={section.image} alt={section.imageAlt} className="section-image" loading="lazy" />

            {section.reverse && (
              <div className="section-text">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <Link to={section.link} className="section-link" aria-label={section.linkAriaLabel}>
                  {section.linkText}
                </Link>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

export default HomePage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\notFoundPage\NotFoundPage.css`

```css
.not-found-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  min-height: 100vh;
  background-color: var(--teal-color);
  color: var(--white-color);
  padding: 40px;
}

.not-found-page h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  animation: fadeIn 0.8s ease-out;
}

.not-found-page button {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: 2px solid var(--white-color);
  background-color: var(--white-color);
  color: var(--teal-color);
  cursor: pointer;
  transition: all 0.3s ease;
}

.not-found-page button:hover {
  background-color: var(--teal-color);
  color: var(--gold-color);
  border-color: var(--white-color);
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\notFoundPage\NotFoundPage.tsx`

```tsx
import { useNavigate } from "react-router";
import Header from "../../components/header/Header";
import "./NotFoundPage.css";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <Header />
      <h1>404 - Page non trouvée</h1>
      <button type="button" onClick={() => navigate("/")}>
        Retour à l'accueil
      </button>
    </div>
  );
}

export default NotFoundPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\personnal\HistoryPage\MyHistoryPage.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap");

.history-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Baloo 2", sans-serif;
  line-height: 1.8;
  color: var(--grey-dark-color);
}

.history-page h1 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  padding: 1.5rem;

  background: linear-gradient(135deg, var(--teal-color) 0%, var(--teal-dark-color) 100%);
  color: var(--white-color);
  border-radius: 8px;

  box-shadow: 0 4px 15px rgba(0, 128, 128, 0.3);
}

.history-page h2 {
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--teal-color);
  margin-top: 2.5rem;
  margin-bottom: 1.2rem;
  border-left: 5px solid var(--teal-color);
  padding-left: 1rem;
}

.history-page p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  padding: 1.2rem;
  border-radius: 8px;
  background-color: var(--white-color);

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.history-page p:nth-of-type(even) {
  background-color: var(--grey-light-color);
  box-shadow: 0 4px 10px rgba(0, 128, 128, 0.08);
}

.history-page p:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(0, 128, 128, 0.15);
}

@media (max-width: 768px) {
  .history-page {
    padding: 1rem;
  }

  .history-page h1 {
    font-size: 1.8rem;
    padding: 1.2rem 1rem;
  }

  .history-page h2 {
    font-size: 1.4rem;
  }

  .history-page p {
    font-size: 0.95rem;
    padding: 1rem;
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\personnal\HistoryPage\MyHistoryPage.tsx`

```tsx
import "./MyhistoryPage.css";

function HistoryPage() {
  return (
    <main className="history-page">
      <h1>Mon histoire professionnelle</h1>

      <h2>INTRO :</h2>
      <p>Nous sommes dans les années 90, j’ai environ 10 ans. Mon premier souhait professionnel est d&apos;être concepteur-dessinateur de meubles, bien sûr, avec mes mots d’enfant. J’aime comprendre les choses dans leur ensemble donc pour être concepteur-dessinateur de meubles, il faut savoir construire des meubles, savoir les techniques de montage et de fabrication.</p>

      <h2>APPRENTISSAGE :</h2>
      <p>Quelques années plus tard, je rentre en apprentissage pour apprendre le métier de menuisier. Mon maître d&apos;apprentissage, &quot;Meubles Thibault&quot; à Saint-Jean-de-Monts, est un cuisiniste agenceur. Mon centre de formation d&apos;apprentissage se trouve à Talmont-Saint-Hilaire. J’ai dû redoubler d’efforts car j&apos;apprends le métier de cuisiniste agenceur en entreprise et j’ai des cours de menuiserie générale, sur le mobilier évidemment. Mais aussi beaucoup de cours sur le travail et la pose de portes, fenêtres et de charpente, que je ne pratique jamais en entreprise. J’ai su m&apos;accrocher pour réussir. J&apos;ai obtenu mon CAP-BEP menuiserie au bout de mes trois années d&apos;apprentissage. Et j’ai effectué un an de plus dans la menuiserie agencement navale dans l&apos;entreprise Bénéteau à Saint Hilaire de Riez.</p>

      <h2>VIE ACTIVE :</h2>
      <p>On est au tout début des années deux mille. J’ai effectué plusieurs contrats, un auprès de la ville de Saint-Jean-de-Monts, un comme déménageur-ripeur chez &quot;Dugast déménagement&quot; à Challans, un en tant que menuisier ponceur chez &quot;Jh industrie&quot; (Huet) à Challans. J’ai également réalisé ma première formation dans le dessin technique et industriel sur &quot;Autocad&quot; pendant 4 mois auprès du centre &quot;Afpa&quot; (Association pour la formation professionnelle des adultes) de la Roche sur Yon.</p>

      <h2>SUPER U :</h2>
      <p>Nous arrivons en deux mille six, j&apos;ai 21 ans et je suis embauché au &quot;Super U de Saint Jean de Monts&quot; pour une saison longue (avril-septembre), et j&apos;y suis resté presque 19 ans. J’ai commencé à la mise en rayon des boissons, puis dans les produits d’entretien de la maison. J’ai mis en place le site coursesu.com et la page Facebook pour le magasin, et par la suite je m&apos;occupe de la réception de marchandise.</p>

      <h2>AUTO-ENTREPRISE :</h2>
      <p>En parallèle du Super U où j’y travaille principalement le matin de 5h à 11h, j’ai entrepris une formation de collaborateur d’architecte à distance via &quot;Ecole chez soi&quot;, d’une durée de 36 mois. Ainsi que l&apos;ouverture de ma micro entreprise pour la création de plans de maisons individuelles, grâce à ma maîtrise du logiciel de CAO (conception assistée par ordinateur) comme &quot;Autocad pro&quot; et je me suis aussi perfectionné de manière autodidacte sur un autre logiciel CAO 3D professionnel, &quot;Revit&quot;.</p>

      <h2>EVOLUTION SUPER U :</h2>
      <p>En deux mille vingt et un, mon poste au Super U évolue encore, grandit et prend de l&apos;ampleur, je passe en horaire de journée, je décide donc d&apos;arrêter mon auto entreprise de plan et de me consacrer uniquement au Super U. Qui pour moi est un emploi plus stable, plus sécurisé et alimentaire. J&apos;évolue avec l’ajout des différents secteurs tels que la maintenance, la sécurité du bâtiment, les astreintes alarmes, et la gestion complète de l&apos;entrepôt déporté au sein de cette entreprise, jusqu&apos;à être membre de la direction en début 2024.</p>

      <h2>PRISE DE CONSCIENCE :</h2>
      <p>Je suis arrivé au plus haut niveau possible de l’entreprise. Je connais beaucoup de choses depuis toutes ces années, je n&apos;ai plus rien à y découvrir. Mes 40 ans approchent, mon univers professionnel me pèse de plus en plus et encore une fois la conception, la créativité et l’informatique me manquent beaucoup. En novembre 2024, je prends la décision de mettre fin à mon contrat à durée indéterminée.</p>

      <h2>RUPTURE CONVENTIONNELLE :</h2>
      <p>Je bénéficie d’une rupture conventionnelle de mon contrat à durée indéterminée et de plusieurs mois de récupération d’heures supplémentaires accumulées, de récupération de temps de travail et de congés.</p>

      <h2>BILAN DE COMPETENCES :</h2>
      <p>J&apos;ai profité de ce temps libre pour réaliser un bilan de compétence auprès de l’organisme &quot;Même pas Cap !&quot; qui s&apos;est déroulé sur dix semaines. Ce bilan m’a beaucoup aidé à réfléchir sur mes compétences et valeurs et mes envies. Après tout ce travail d’analyse et de rétrospection, je veux vivre d’un métier passion et celui que j’ai choisi est développeur web/mobile full-stack puisqu’il correspond à mes attentes, la conception, la créativité et l’informatique. De plus, j&apos;ai toujours réalisé pour mes proches et connaissances, la conception de sites web en no-code, flyers et objets publicitaires, Powerpoint, la création de tableaux complexes avec Excel, Google Sheets, …. J’ai une soif d’apprendre l’informatique, j’aime cela et veux m&apos; en servir au quotidien.</p>

      <h2>FORMATION :</h2>
      <p>En mars 2025, je commence une formation de développeur web/mobile à l’école &quot;Will Code School&quot; de Nantes pour une durée de 5 mois. Dans cette formation j&apos;utilise l&apos;éditeur de code &quot;VSCode&quot; et j&apos;apprends le langage Html, Css, et plein d’autres.</p>

      <h2>NOUVEL EMPLOI :</h2>
      <p>A la rentrée 2025, je serais prêt à travailler, pour mettre mes compétences et talents au service de votre entreprise afin de m’épanouir professionnellement et d’utiliser l’ensemble de mes compétences techniques et créatives. Je recherche une entreprise de confiance, ouverte et jeune d’esprit, prête à m’accueillir pour un temps indéterminé en entreprise comme en télétravail partiel ou total.</p>

      <h2>CONCLUSION :</h2>
      <p>Pour finir, depuis mon plus jeune âge, que je me souvienne, la conception, la créativité, l’informatique font totalement partie de moi. Alors certes, ce ne sont plus des meubles, mais c&apos;est toujours de la création, dans les applications web et/ou mobile.</p>
    </main>
  );
}

export default HistoryPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\personnal\contactMePage\ContactMePage.css`

```css
.contact-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Baloo 2", sans-serif;
}

.contact-hero {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, var(--teal-color) 0%, var(--teal-dark-color) 100%);
  color: var(--white-color);
  border-radius: 8px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
}

.contact-info {
  background-color: var(--white-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border-top: 4px solid var(--teal-color);
  display: flex;
  flex-direction: column;
}

.profile-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.profile-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--teal-color);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.info-item {
  margin-bottom: 1.5rem;
}

.info-item h3 {
  color: var(--teal-color);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.info-link {
  color: var(--grey-dark-color);
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: color 0.3s;
}

.info-link:hover {
  color: var(--gold-color);
}

.contact-form {
  background-color: var(--white-color);
  padding: 2rem;
  border-radius: 8px;
  border-left: 6px solid var(--teal-color);
}

.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  padding: 0.8rem;
  border: 1px solid var(--grey-dark-color);
  border-radius: 8px;
  font-family: inherit;
  font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--teal-color);
  box-shadow: 0 0 0 2px rgba(0, 128, 128, 0.1);
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  background-color: var(--teal-color);
  color: var(--white-color);
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-btn:hover {
  background-color: var(--teal-dark-color);
  color: var(--gold-color);
  transform: translateY(-2px);
}

.submit-btn:disabled {
  background-color: var(--grey-light-color);
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .contact-hero h1 {
    font-size: 1.8rem;
  }

  .info-item {
    text-align: center;
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\personnal\contactMePage\ContactMePage.tsx`

```tsx
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";
import profile from "../../../assets/images/profile.png";
import "./ContactMePage.css";

function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_6wafpsh";
    const TEMPLATE_ID = "template_t9pz6cd";
    const PUBLIC_KEY = "cz-mYPOm1M_f8liS6";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log("SUCCÈS!", response.status, response.text);

        toast.success("Message envoyé avec succès ! Merci.");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Erreur EmailJS détaillée:", error);

        toast.error(`Erreur d'envoi : ${error.text || "Un problème est survenu"}`);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contactez-moi</h1>
        <p className="hero-intro">N’hésitez pas à me contacter, pour un éventuel entretien ou un rendez-vous, même juste pour une question.</p>
      </section>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="profile-container">
            <img src={profile} alt="Cédric Gouyon" className="profile-img" />
          </div>
          <div className="info-item">
            <h2>Cédric Gouyon</h2>
            <h3>Développeur Full Stack</h3>
            <p>Je serais ravi de discuter avec vous des opportunités de collaboration et de vous présenter plus en détail comment je peux contribuer à votre entreprise</p>
          </div>

          <div className="info-item">
            <h3>Téléphone / SMS</h3>
            <a href="tel:0675564852" className="info-link">
              06 75 56 48 52
            </a>
          </div>

          <div className="info-item">
            <h3>Email</h3>
            <a href="mailto:gouyoncedric@gmail.com" className="info-link">
              gouyoncedric@gmail.com
            </a>
          </div>

          <div className="info-item">
            <h3>Adresse</h3>
            <p>
              17 Chemin de la Parée Verte
              <br />
              85160 Saint Jean de Monts
            </p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Votre Nom</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Jean Dupont" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Votre Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="votre@email.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Votre Message</label>
            <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} placeholder="Comment puis-je vous aider ?" required></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSending}>
            {isSending ? "Envoi en cours..." : "Envoyer le message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\personnal\cvPage\MyCvPage.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap");

.cv-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Baloo 2", sans-serif;
  line-height: 1.8;
  color: var(--grey-dark-color);
}

.cv-page h1 {
  text-align: center;
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, var(--teal-color) 0%, var(--teal-dark-color) 100%);
  color: var(--white-color);
  border-radius: 8px;
  font-size: 2.5rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(0, 128, 128, 0.2);
}

.cv-page .intro {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: var(--white-color);
  border-left: 4px solid var(--teal-color);
  border-radius: 8px;
}

.cv-page .cv-preview {
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 128, 128, 0.15);
  background: var(--white-color);
}

.cv-page .cv-download {
  text-align: center;
  margin-top: 2rem;
}

.cv-page .download-btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--teal-color);
  color: var(--white-color);
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
}

.cv-page .download-btn:hover {
  background-color: var(--teal-dark-color);
  color: var(--gold-color);
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .cv-page {
    padding: 1rem;
  }
  .cv-page h1 {
    font-size: 1.8rem;
  }
  .cv-page .cv-preview iframe {
    height: 450px;
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\personnal\cvPage\MyCvPage.tsx`

```tsx
import "./MyCvPage.css";
function CvPage() {
  return (
    <main className="cv-page">
      <h1>Mon CV</h1>

      <section className="intro">
        <p>Je vous invite à consulter mon CV directement ci-dessous pour une lecture rapide, ou à le télécharger au format PDF pour le conserver ou l'imprimer, afin d'étudier plus en détail la cohérence de mon profil avec vos besoins.</p>
      </section>

      <section className="cv-preview">
        <iframe src="/assets/docs/cv-cedric-gouyon.pdf" title="Aperçu de mon CV" width="100%" height="600px" style={{ border: "none" }}></iframe>
      </section>

      <section className="cv-download">
        <a href="/assets/docs/cv-cedric-gouyon.pdf" download className="download-btn">
          Télécharger mon CV
        </a>
      </section>
    </main>
  );
}

export default CvPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\personnal\skillsPage\MySkillsPage.css`

```css
@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700&display=swap");

.skills-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Baloo 2", sans-serif;
}

.title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
  color: var(--teal-color);
}

.subtitle {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--grey-dark-color);
  text-align: center;
}

section {
  margin-bottom: 3rem;
}

section h2 {
  font-size: 1.8rem;
  color: var(--teal-color);
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 2rem;
}

.card {
  background-color: var(--white-color);
  border-radius: 8px;
  padding: 1rem;
  margin: 0;
  text-align: center;
  cursor: default;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 128, 128, 0.25);
}

.card img {
  width: 60px;
  height: 60px;
  margin-bottom: 0.8rem;
  object-fit: contain;
}

.card figcaption {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--grey-dark-color);
}

.card .info {
  font-size: 0.95rem;
  color: var(--grey-dark-color);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 1rem;
  }

  .card img {
    width: 50px;
    height: 50px;
  }

  .title {
    font-size: 2rem;
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\personnal\skillsPage\MySkillsPage.tsx`

```tsx
import type { FC } from "react";
import "./MySkillsPage.css";

const atouts = [
  {
    id: "listen",
    img: "/src/assets/icones/picto_hearing_200.png",
    label: "Écoute",
    desc: "Attentif aux différentes demandes des collaborateurs et clients",
  },
  {
    id: "passion",
    img: "/src/assets/icones/picto_favorite_200.png",
    label: "Passion",
    desc: "Met beaucoup de cœur à l'ouvrage pour chaque projet",
  },
  {
    id: "creative",
    img: "/src/assets/icones/picto_file_open_200.png",
    label: "Créativité",
    desc: "Optimise au maximum chacune des idées selon les besoins et les envies",
  },
  {
    id: "ux",
    img: "/src/assets/icones/picto_category_200.png",
    label: "Ergonomie",
    desc: "Soucieux de l'expérience utilisateur",
  },
  {
    id: "access",
    img: "/src/assets/icones/picto_accessible_200.png",
    label: "Accessibilité",
    desc: "Crée des interfaces utilisables par tous, y compris les personnes en situation de handicap",
  },
  {
    id: "data",
    img: "/src/assets/icones/picto_database_200.png",
    label: "Données",
    desc: "Rigoureux dans la gestion des bases de données",
  },
  {
    id: "security",
    img: "/src/assets/icones/picto_security_200.png",
    label: "Sécurité",
    desc: "Sait garder le secret professionnel et respecter la loi RGPD",
  },
  {
    id: "veille",
    img: "/src/assets/icones/picto_visibility_200.png",
    label: "Veille technologique",
    desc: "Toujours à l'affût des nouvelles technologies",
  },
];

const outils = [
  { id: "vscode", img: "src/assets/icones/icone-vscode.png", label: "VS Code" },
  { id: "html", img: "/src/assets/icones/icone-html.png", label: "HTML" },
  { id: "css", img: "/src/assets/icones/icone-css.png", label: "CSS" },
  { id: "js", img: "/src/assets/icones/icone-js.png", label: "JavaScript" },
  { id: "git", img: "/src/assets/icones/icone-git.png", label: "Git" },
  { id: "github", img: "/src/assets/icones/icone-github.png", label: "Github" },
  { id: "node", img: "/src/assets/icones/icone-node.png", label: "Node.js" },
  { id: "figma", img: "/src/assets/icones/icone-figma.png", label: "Figma" },
  {
    id: "wireframe",
    img: "/src/assets/icones/icone-wireframe.png",
    label: "Wireframe",
  },
  {
    id: "adobe",
    img: "/src/assets/icones/icone-adobe-color.svg",
    label: "Adobe",
  },
  {
    id: "pdf",
    img: "/src/assets/icones/icone-ilovepdf.webp",
    label: "I Love PDF & IMG",
  },
  {
    id: "crm",
    img: "/src/assets/icones/icone-kwixeo.png",
    label: "Kwixeo CRM/ERP",
  },
  {
    id: "google",
    img: "/src/assets/icones/icone-google.png",
    label: "Google Workspace",
  },
  {
    id: "office",
    img: "/src/assets/icones/icons8-logo-office-48.png",
    label: "Microsoft Office",
  },
  {
    id: "wappalyzer",
    img: "/src/assets/icones/icone-wappalyzer.webp",
    label: "Wappalyzer",
  },
  {
    id: "colorzilla",
    img: "/src/assets/icones/icone-colorzilla.png",
    label: "Colorzilla",
  },
];

const ressources = [
  {
    id: "pixabay",
    img: "/src/assets/icones/icone-pixabay.png",
    label: "Pixabay",
    desc: "Banque d’images libres de droits",
  },
  {
    id: "freepik",
    img: "/src/assets/icones/icone-freepik.svg",
    label: "Freepik",
    desc: "Ressources graphiques et vecteurs",
  },
  {
    id: "unsplash",
    img: "/src/assets/icones/icone-unsplash.png",
    label: "Unsplash",
    desc: "Photos haute qualité gratuites",
  },
  {
    id: "icons8",
    img: "/src/assets/icones/icone-icon8.png",
    label: "Icons8",
    desc: "Icônes et illustrations variées",
  },
  {
    id: "storyset",
    img: "/src/assets/icones/icone-Storyset.png",
    label: "Storyset",
    desc: "Illustrations personnalisables",
  },
  {
    id: "vecteezy",
    img: "/src/assets/icones/icone-vecteezy.png",
    label: "Vecteezy",
    desc: "Vecteurs et graphismes gratuits",
  },
  {
    id: "pexels",
    img: "/src/assets/icones/icone-pexels.png",
    label: "Pexels",
    desc: "Photos et vidéos libres",
  },
  {
    id: "google-fonts",
    img: "/src/assets/icones/icone-google-fonts.svg",
    label: "Google Fonts",
    desc: "Bibliothèque de polices web",
  },
  {
    id: "uiverse",
    img: "/src/assets/icones/icone-uiverse.png",
    label: "Uiverse",
    desc: "UI components et styles CSS",
  },
  {
    id: "coolors",
    img: "/src/assets/icones/icone-coolors.png",
    label: "Coolors",
    desc: "Générateur de palettes de couleurs",
  },
  {
    id: "adobe-color",
    img: "/src/assets/icones/icone-adobe-color.svg",
    label: "Color Adobe",
    desc: "Outil de création de palettes",
  },
  {
    id: "dribbble",
    img: "/src/assets/icones/icone-dribbble.png",
    label: "Dribbble",
    desc: "Communauté de designers",
  },
  {
    id: "pagespeed",
    img: "/src/assets/icones/icone-page-speed-insights.png",
    label: "Page speed insights",
    desc: "Analyse de performance web",
  },
  {
    id: "font-interceptor",
    img: "/src/assets/icones/icone-font-interceptor.png",
    label: "Font interceptor",
    desc: "Outil expérimental sur les polices",
  },
  {
    id: "w3c-validator",
    img: "/src/assets/icones/icone-w3c.png",
    label: "Validator W3C",
    desc: "Validation HTML officielle",
  },
  {
    id: "css-validator",
    img: "/src/assets/icones/icone-w3c.png",
    label: "Validateur CSS",
    desc: "Validation des feuilles de style",
  },
  {
    id: "mdn",
    img: "/src/assets/icones/icone-mdn.webp",
    label: "Mdn Web Docs",
    desc: "Documentation web de référence",
  },
];

const SkillsPage: FC = () => {
  return (
    <main className="skills-container">
      <section>
        <h2>Mes atouts & compétences</h2>
        <p className="subtitle">Curieux, autonome et toujours motivé à apprendre, je mets mon énergie au service des projets.</p>

        <div className="grid">
          {atouts.map((item) => (
            <figure key={item.id} className="card">
              <img src={item.img} alt={item.label} />
              <figcaption>
                <strong>{item.label}</strong>
              </figcaption>
              <p className="info">{item.desc}</p>
            </figure>
          ))}
        </div>
      </section>

      <section>
        <h2>Mes outils & langages</h2>
        <p className="subtitle">Mes compétences sont en constante amélioration, j'ai la chance d'exercer ce métier qui me permet d'apprendre chaque jour, d'autant plus que je suis passionné d'informatique depuis des années. impliqué, curieux des nouvelles fonctionnalités</p>

        <div className="grid">
          {outils.map((tool) => (
            <figure key={tool.id} className="card">
              <img src={tool.img} alt={tool.label} />
              <figcaption>{tool.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section>
        <h2>Mes principales ressources</h2>
        <p className="subtitle">Mes ressources sont le fruit d'un travail rigoureux, d'une veille constante et d'une passion pour le bon travail. Elles me servent quotidiennement pour apporter une valeur ajoutée et me démarquer dans un monde en constante évolution.</p>

        <div className="grid">
          {ressources.map((item) => (
            <figure key={item.id} className="card">
              <img src={item.img} alt={item.label} />
              <figcaption>
                <strong>{item.label}</strong>
              </figcaption>
              <p className="info">{item.desc}</p>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\projects\CoreexMenuiseriePage\CoreexMenuiseriePage.tsx`

```tsx
function CoreexMenuiseriePage() {
  return (
    <main className="projet-page">
      <h1>Projet : Coreex Menuiserie</h1>

      <section className="intro">
        <p>Ce projet est une vitrine numérique conçue pour une entreprise de menuiserie. Il met en avant les services, les réalisations et l’identité visuelle de l’entreprise. L’objectif était de créer un site clair, ergonomique et moderne, tout en respectant les bonnes pratiques d’accessibilité et de performance pour offrir une expérience utilisateur fluide sur tous les supports.</p>
      </section>

      <div className="links">
        <a href="https://cedricgouyon.github.io/coreex-menuiserie/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/coreex-menuiserie" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://cedricgouyon.github.io/coreex-menuiserie/" title="Aperçu Coreex Menuiserie" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Optimisation SEO et Performance :</strong> Analyse et amélioration des scores Lighthouse pour un référencement naturel optimal.
          </li>
          <li>
            <strong>Accessibilité Numérique :</strong> Respect des normes d'accessibilité (sémantique HTML, contrastes, navigation clavier).
          </li>
          <li>
            <strong>Galerie Interactive :</strong> Mise en place d'une présentation dynamique des réalisations de l'entreprise.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default CoreexMenuiseriePage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\projects\GalleryProjectsPage.css`

```css
.gallery-page {
  max-width: 1200px;
  margin: 0 auto;

  padding: 2rem 1rem;
  box-sizing: border-box;
}

.gallery-header {
  text-align: center;
  margin-bottom: 3rem;
}

.gallery-header h1 {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  color: var(--grey-dark-color);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.projects-grid {
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: 2rem;
  width: 100%;
}

.project-card {
  background: var(--white-color);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: var(--grey-light-color);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .card-image img {
  transform: scale(1.1);
}

.card-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-content h3 {
  margin: 0 0 0.75rem 0;
  color: var(--teal-color);
  font-size: 1.25rem;
  font-weight: 700;
}

.card-content p {
  color: var(--grey-dark-color);
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.btn-details {
  display: block;
  text-align: center;
  background-color: var(--teal-color);
  color: var(--white-color);
  text-decoration: none;
  padding: 0.8rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: background 0.3s ease, transform 0.2s ease;
}

.btn-details:hover {
  background-color: var(--teal-dark-color);
  transform: scale(1.02);
}

@media (max-width: 480px) {
  .gallery-page {
    padding: 1rem 0.75rem;
  }

  .projects-grid {
    gap: 1.5rem;
  }

  .card-content {
    padding: 1.2rem;
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\projects\GalleryProjectsPage.tsx`

```tsx
import { Link } from "react-router";
import "./GalleryProjectsPage.css";
import clickDevlogo from "../../assets/logos/ClickDev.png";
import coreexlogo from "../../assets/logos/Coreex.png";
import fullstackstarterkitlogo from "../../assets/logos/FullstackStarterKit.png";
import kartalgologo from "../../assets/logos/KartAlgo.png";
import packandgologo from "../../assets/logos/PackAndGo.png";
import portfoliologo from "../../assets/logos/Portfolio.png";
import seanzlogo from "../../assets/logos/SeanZ.png";
import steamflixlogo from "../../assets/logos/StreamFlix.png";
import tealiilogo from "../../assets/logos/Tealii.png";

interface Project {
  id: string;
  title: string;
  description: string;
  path: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "ClickDev",
    description: "Application web pédagogique à l'apprentissage du développement web.",
    path: "/school-clickdev",
    image: clickDevlogo,
  },
  {
    id: "2",
    title: "Correx Menuiserie",
    description: "Vitrine numérique pour une entreprise de menuiserie",
    path: "/coreex-menuiserie",
    image: coreexlogo,
  },
  {
    id: "3",
    title: "SteamFlix",
    description: "Plateforme de streaming immersive",
    path: "/school-streamflix",
    image: steamflixlogo,
  },
  {
    id: "4",
    title: "Kartalgo",
    description: "Application web de jeux d'algorithmes.",
    path: "/school-kartalgo",
    image: kartalgologo,
  },
  {
    id: "5",
    title: "Fullstack Starter Kit",
    description: "Kit de démarrage fullstack pour créer rapidement des applications web évolutives",
    path: "/fullstack-starter-kit",
    image: fullstackstarterkitlogo,
  },
  {
    id: "6",
    title: "Mon premier portfolio",
    description: "Ma toute première vitrine web, conçue pour présenter mon parcours et mes premières réalisations en tant que développeur.",
    path: "/portfolio",
    image: portfoliologo,
  },
  {
    id: "7",
    title: "SeanZ",
    description: "Plateforme culinaire pour cuisiner sainement avec des produits éco-responsables",
    path: "/projects",
    image: seanzlogo,
  },
  {
    id: "8",
    title: "Pack And Go",
    description: "Site d'évasion pour explorer des destinations et planifier vos voyages",
    path: "/projects",
    image: packandgologo,
  },
  {
    id: "9",
    title: "Tealii",
    description: "Application web de productivité avancée conçue pour centraliser et optimiser l'organisation du quotidien",
    path: "/projects",
    image: tealiilogo,
  },
];

const GalleryProjectsPage = () => {
  return (
    <main className="gallery-page">
      <section className="gallery-header">
        <h1>Mes Projets</h1>
        <p>Laissez-vous guider par mon parcours à travers mes projets les plus récents. Cette galerie reflète mon évolution en tant que développeur, mêlant défis scolaires structurés et solutions innovantes. Chaque ligne de code et chaque interface présentée ici témoignent de ma volonté d'apprendre, de ma curiosité technique et de mon engagement à produire un travail soigné et évolutif.</p>
      </section>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.path} className="btn-details">
                Voir le projet
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GalleryProjectsPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\projects\fullstackStarterKitPage\FullstackStarterKitPage.tsx`

```tsx
function FullstackStarterKitPage() {
  return (
    <main className="projet-page">
      <h1>Projet : Fullstack Starter Kit</h1>

      <section className="intro">
        <p>Fullstack Starter Kit est une base de démarrage moderne pensée pour accélérer le développement d’applications web complètes. Il combine un frontend React dynamique et un backend solide, offrant une structure claire pour la gestion des utilisateurs, des données et des échanges client-serveur. Conçu pour être évolutif et maintenable, il permet de se concentrer rapidement sur la valeur métier tout en s’appuyant sur une architecture fiable.</p>
      </section>

      <div className="links">
        <a href="https://fullstack-starter-kit.onrender.com" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/fullstack-starter-kit" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://fullstack-starter-kit.onrender.com" title="Aperçu Fullstack Starter Kit" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="documentation">
        <h2>Notice d'installation</h2>
        <h3>Créer et configurer cette application web fullstack étape par étape :</h3>
        <div className="pdf-container">
          <iframe src="/assets/docs/noticeAppWeb.pdf" title="Notice de création App Web Fullstack" width="100%" height="600px" style={{ border: "none" }}></iframe>
        </div>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Architecture API RESTful :</strong> Développement d'un serveur Node.js avec Express gérant les routes CRUD et la logique métier côté serveur.
          </li>
          <li>
            <strong>Gestion de Base de Données :</strong> Modélisation et intégration d'une base de données relationnelle PostgreSQL pour assurer le stockage et l'intégrité des données.
          </li>
          <li>
            <strong>Sécurité et Environnement :</strong> Mise en place de variables d'environnement pour la protection des données sensibles et configuration CORS pour sécuriser les échanges entre domaines.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default FullstackStarterKitPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\projects\gouyonCedricPage\GouyonCedricPage.tsx`

```tsx
function GouyonCedricPage() {
  return (
    <main className="projet-page">
      <h1>Projet : portfolio</h1>

      <section className="intro">
        <p>Click Dev’ est une plateforme ludique d’apprentissage du développement web. Elle propose des quiz interactifs par niveaux (débutant, intermédiaire) sur des technologies clés comme HTML, CSS, JavaScript ou Git.</p>
      </section>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://cedricgouyon.github.io/click-dev/index.html" title="Aperçu portfolio" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>Développement en HTML, CSS et JavaScript</li>
          <li>Design responsive et adapté aux mobiles</li>
          <li>Hébergement via GitHub Pages</li>
        </ul>
      </section>
    </main>
  );
}

export default GouyonCedricPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\projects\portfolioPage\PortfolioPage.tsx`

```tsx
function PortfolioUnPage() {
  return (
    <main className="projet-page">
      <h1>Projet : Portfolio v1</h1>

      <section className="intro">
        <p>Ce projet marque la création de ma toute première identité numérique en tant que développeur. L'objectif était de concevoir un espace personnel pour centraliser mes compétences, mon parcours et mes premières réalisations. Entièrement réalisé à la main, ce portfolio m'a permis de consolider mes bases en développement front-end et de mettre en place une interface claire et professionnelle.</p>
      </section>

      <div className="links">
        <a href="https://cedricgouyon.github.io/portfolio-1-cedric/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/portfolio-1-cedric" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://cedricgouyon.github.io/portfolio-1-cedric/" title="Aperçu Portfolio v1" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Design Responsive (Mobile First) :</strong> Conception pensée d'abord pour les smartphones afin de garantir une lisibilité parfaite sur tous les écrans.
          </li>
          <li>
            <strong>Animations CSS Personnalisées :</strong> Utilisation des Keyframes et transitions CSS pour dynamiser l'interface et améliorer l'expérience utilisateur.
          </li>
          <li>
            <strong>Déploiement GitHub Pages :</strong> Mise en place d'un workflow simple pour l'hébergement gratuit et rapide du code source.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default PortfolioUnPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\projects\schoolClickDevPage\SchoolClickDevPage.tsx`

```tsx
function SchoolClickDevPage() {
  return (
    <main className="projet-page">
      <h1>Projet : ClickDev</h1>

      <section className="intro">
        <p>Conception et développement d'une application pédagogique immersive dédiée à l'apprentissage du développement web. Ce projet a été pensé comme un outil d'auto-évaluation permettant aux apprenants de tester leurs connaissances théoriques et pratiques à travers un système de quiz interactif. L'expérience est scindée en deux niveaux de progression : un mode "Débutant" pour consolider les bases (syntaxe, balisage) et un mode "Avancé" pour valider des concepts plus complexes (logique de programmation, manipulation du DOM).</p>
      </section>

      <div className="links">
        <a href="https://cedricgouyon.github.io/wild-code-school-ClickDev/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>

        <a href="https://github.com/CedricGOUYON/wild-code-school-ClickDev" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://cedricgouyon.github.io/wild-code-school-ClickDev/" title="Aperçu ClickDev" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Système de Gamification :</strong> Logique conditionnelle gérant la progression entre les deux niveaux.
          </li>
          <li>
            <strong>Moteur de Quiz :</strong> Algorithme de vérification en temps réel et feedback instantané.
          </li>
          <li>
            <strong>Interface UI/UX :</strong> Design responsive avec barre de progression et transitions fluides.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default SchoolClickDevPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\projects\schoolKartAlgoPage\SchoolKartAlgoPage.tsx`

```tsx
function KartalgoPage() {
  return (
    <main className="projet-page">
      <h1>Projet : Kartalgo</h1>

      <section className="intro">
        <p>Kartalgo est une application web dynamique conçue pour offrir une interface de gestion fluide et performante. Ce projet met l'accent sur l'organisation des données et la rapidité d'interaction. L'objectif principal était de construire une application moderne utilisant les dernières technologies front-end pour garantir un rendu instantané et une maintenance simplifiée du code.</p>
      </section>

      <div className="links">
        <a href="https://wild-code-school-kartalgo.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/wild-code-school-kartalgo" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://wild-code-school-kartalgo.vercel.app/" title="Aperçu Kartalgo" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Développement avec React :</strong> Utilisation des Hooks (useState, useEffect) pour une gestion d'état fluide et une interface réactive.
          </li>
          <li>
            <strong>Stylisation via Tailwind CSS :</strong> Mise en place d'un design système "Utility-First" permettant une interface cohérente, légère et entièrement personnalisable.
          </li>
          <li>
            <strong>Déploiement Continu (CI/CD) :</strong> Configuration et déploiement via Vercel pour garantir une mise en ligne automatique et optimisée à chaque modification du code.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default KartalgoPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\projects\schoolPackAndGoPage\SchoolPackAndGoPage.tsx`

```tsx
function PackAndGoPage() {
  return (
    <main className="projet-page">
      <h1>Projet : SeanZ PackAndGo</h1>

      <section className="intro">
        <p>SeanZ PackAndGo est une plateforme immersive dédiée à l'exploration de voyages. Le site permet aux utilisateurs de découvrir des destinations de rêve, de consulter des itinéraires personnalisés et de s'inspirer pour leurs prochaines aventures. L'accent a été mis sur la qualité visuelle et une navigation fluide pour captiver l'utilisateur dès la première page et faciliter l'accès aux informations touristiques essentielles.</p>
      </section>

      <div className="links">
        <a href="/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/wild-code-school-PackAndGo" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="/" title="Aperçu PackAndGo" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Interface Immersive :</strong> Utilisation avancée du CSS pour mettre en valeur des visuels haute définition et créer une atmosphère propice à l'évasion.
          </li>
          <li>
            <strong>Architecture des Destinations :</strong> Organisation structurée des données pour présenter les lieux par catégories (climat, type d'activité, budget) de manière intuitive.
          </li>
          <li>
            <strong>Navigation Intuitive :</strong> Mise en place d'un parcours utilisateur optimisé permettant de passer de la découverte d'un pays à la consultation des détails pratiques en un clic.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default PackAndGoPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\projects\schoolSeanZPage\SchoolSeanZPage.tsx`

```tsx
function SchoolSeanZPage() {
  return (
    <main className="projet-page">
      <h1>Projet : SeanZ Cuisine</h1>

      <section className="intro">
        <p>SeanZ Cuisine est une plateforme engagée dédiée à la gastronomie saine et éco-responsable. L'application guide les utilisateurs vers une alimentation équilibrée tout en sensibilisant aux enjeux écologiques, notamment à travers la sélection de produits de saison et la réduction du gaspillage. C'est un outil complet qui allie plaisir culinaire et respect de l'environnement pour une cuisine durable au quotidien.</p>
      </section>

      <div className="links">
        <a href="/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/wild-code-school-seanz" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="/" title="Aperçu SeanZ Cuisine" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Gestion de Contenu Thématique :</strong> Organisation d'une base de recettes filtrables par critères nutritionnels et impact écologique (saisonnalité, local).
          </li>
          <li>
            <strong>Design Éco-Conçu :</strong> Réflexion sur une interface épurée et optimisée, limitant la consommation de ressources tout en offrant une navigation fluide et appétissante.
          </li>
          <li>
            <strong>Interactivité Pédagogique :</strong> Mise en place de fiches détaillées incluant des conseils santé et des astuces pour cuisiner de manière plus écologique.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default SchoolSeanZPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\projects\schoolStreamFlixPage\SchoolStreamFlixPage.tsx`

```tsx
function StreamFlixPage() {
  return (
    <main className="projet-page">
      <h1>Projet : StreamFlix</h1>

      <section className="intro">
        <p>StreamFlix est une plateforme de streaming immersive permettant de parcourir un vaste catalogue de films et de séries. L'objectif de ce projet était de recréer une expérience utilisateur proche des leaders du marché, en mettant l'accent sur le visuel, la fluidité de la navigation et la richesse des informations média. Le site gère l'affichage dynamique des titres, des notes et des descriptions.</p>
      </section>

      <div className="links">
        <a href="https://wild-code-school-streamflix.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="https://github.com/CedricGOUYON/wild-code-school-StreamFlix" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu du site</h2>
        <iframe src="https://wild-code-school-streamflix.onrender.com/" title="Aperçu StreamFlix" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Détails techniques</h2>
        <ul>
          <li>
            <strong>Consommation d'API REST :</strong> Récupération et affichage de données en temps réel (titres, affiches, synopsis) via des appels asynchrones.
          </li>
          <li>
            <strong>Système de Recherche et Filtrage :</strong> Implémentation d'une logique permettant de trier les contenus par catégories ou de rechercher un titre spécifique.
          </li>
          <li>
            <strong>Architecture React :</strong> Organisation du code en composants réutilisables et gestion des états complexes pour une navigation sans rechargement.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default StreamFlixPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\pages\projects\tealiiPage\TealiiPage.tsx`

```tsx
function TealiiPage() {
  return (
    <main className="projet-page">
      <h1>Projet : Tealii</h1>

      <section className="intro">
        <p>Tealii est une application web de productivité avancée conçue pour centraliser et optimiser l'organisation du quotidien, tant sur le plan personnel que professionnel. Véritable assistant de gestion, Tealii permet de structurer ses tâches, de suivre ses objectifs et de gagner en efficacité. Ce projet repose sur une architecture robuste permettant une gestion fluide des données et une expérience utilisateur sans friction.</p>
      </section>

      <div className="links">
        <a href="/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au site
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer" className="btn">
          Accéder au dépôt GitHub
        </a>
      </div>

      <section className="preview">
        <h2>Aperçu de l'application</h2>
        <iframe src="/" title="Aperçu Tealii" width="100%" height="600px" style={{ border: "none", borderRadius: "8px" }}></iframe>
      </section>

      <section className="details">
        <h2>Spécifications Techniques</h2>
        <ul>
          <li>
            <strong>Architecture Fullstack :</strong> Développement d'une solution complète avec React pour l'interface, Node.js/Express pour la logique serveur, et PostgreSQL pour la persistance des données.
          </li>
          <li>
            <strong>Gestion de l'État et des Tâches :</strong> Implémentation d'algorithmes de tri et de filtrage pour organiser les priorités et les flux de travail en temps réel.
          </li>
          <li>
            <strong>Sécurité et Authentification :</strong> Mise en place d'un système de gestion des utilisateurs pour garantir la confidentialité des données personnelles et professionnelles.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default TealiiPage;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\router.tsx`

```tsx
import { createBrowserRouter } from "react-router";
import HomePage from "../src/pages/homePage/HomePage";
import NotFoundPage from "../src/pages/notFoundPage/NotFoundPage";
import App from "./App";
import ContactMePage from "./pages/personnal/contactMePage/ContactMePage";
import MyCVPage from "./pages/personnal/cvPage/MyCvPage";
import MyHistory from "./pages/personnal/HistoryPage/MyHistoryPage";
import MySkillsPage from "./pages/personnal/skillsPage/MySkillsPage";
import CoreexMenuiseriePage from "./pages/projects/CoreexMenuiseriePage/CoreexMenuiseriePage";
import FullstackStarterKitPage from "./pages/projects/fullstackStarterKitPage/FullstackStarterKitPage";
import GalleryProjectsPage from "./pages/projects/GalleryProjectsPage";
import GouyonCedricPage from "./pages/projects/gouyonCedricPage/GouyonCedricPage";
import PortfolioPage from "./pages/projects/portfolioPage/PortfolioPage";
import SchoolClickDevPage from "./pages/projects/schoolClickDevPage/SchoolClickDevPage";
import SchoolKartAlgoPage from "./pages/projects/schoolKartAlgoPage/SchoolKartAlgoPage";
import SchoolPackAndGoPage from "./pages/projects/schoolPackAndGoPage/SchoolPackAndGoPage";
import SchoolSeanZPage from "./pages/projects/schoolSeanZPage/SchoolSeanZPage";
import SchoolStreamFlixPage from "./pages/projects/schoolStreamFlixPage/SchoolStreamFlixPage";
import TealiiPage from "./pages/projects/tealiiPage/TealiiPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <GalleryProjectsPage /> },

      { path: "portfolio", element: <PortfolioPage /> },
      { path: "coreex-menuiserie", element: <CoreexMenuiseriePage /> },
      { path: "fullstack-starter-kit", element: <FullstackStarterKitPage /> },
      { path: "gouyon-cedric", element: <GouyonCedricPage /> },
      { path: "school-clickdev", element: <SchoolClickDevPage /> },
      { path: "school-kartalgo", element: <SchoolKartAlgoPage /> },
      { path: "school-packandgo", element: <SchoolPackAndGoPage /> },
      { path: "school-seanz", element: <SchoolSeanZPage /> },
      { path: "school-streamflix", element: <SchoolStreamFlixPage /> },
      { path: "tealii", element: <TealiiPage /> },

      { path: "my-cv", element: <MyCVPage /> },
      { path: "my-history", element: <MyHistory /> },
      { path: "my-skills", element: <MySkillsPage /> },
      { path: "contact-me", element: <ContactMePage /> },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default router;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\src\vite-env.d.ts`

```typescript
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_PROJECT_NAME: string;
}

/* biome-ignore lint/correctness/noUnusedVariables: Nécessaire pour la fusion de types globale dans TypeScript/Vite. */
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\tsconfig.app.json`

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "node",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\tsconfig.node.json`

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "useDefineForClassFields": true,
    "target": "ES2023",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "types": ["vite/client"],
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\client\vite.config.ts`

```typescript
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import type { ConfigEnv } from "vite";
import { defineConfig, loadEnv } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isDevelopment = mode === "development";

  const rootDir = path.resolve(__dirname, "..");

  const projectFolderName = path.basename(rootDir);

  console.log(`\n=========================\n🟢 LOCAL CONFIG (ESM)\n=========================\n`);
  console.log(`API         : ${isDevelopment ? env.VITE_API_URL : "/api"}`);
  console.log(`DOTENV      : Variables injectées depuis .env (mode: ${mode})`);
  console.log(`CALCULATED PROJECT NAME: ${projectFolderName}`);
  const proxyConfig = isDevelopment
    ? {
        "/api": {
          target: env.VITE_API_URL,
          changeOrigin: true,
          secure: false,
        },
      }
    : undefined;

  return {
    plugins: [react()],

    server: {
      proxy: proxyConfig,
    },

    define: {
      "import.meta.env.VITE_PROJECT_NAME": JSON.stringify(projectFolderName),
      "import.meta.env.VITE_API_URL": isDevelopment ? JSON.stringify(env.VITE_API_URL) : JSON.stringify("/api"),
    },

    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
  };
});
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\docker-compose.yml`

```yaml
services:
  postgres:
    image: postgres:16
    container_name: postgres
    restart: always
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    ports:
      - "5432:5432"
    volumes:
      - ./setup/init.sql:/docker-entrypoint-initdb.d/init.sql
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\package-lock.json`

```json
{
  "name": "projet",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "projet",
      "version": "1.0.0",
      "hasInstallScript": true,
      "dependencies": {
        "@emailjs/browser": "^4.4.1"
      },
      "devDependencies": {
        "@biomejs/biome": "^2.3.8",
        "@vitejs/plugin-react": "^5.1.2",
        "concurrently": "^9.2.1",
        "vite": "^7.2.4"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.5.tgz",
      "integrity": "sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.5.tgz",
      "integrity": "sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.5.tgz",
      "integrity": "sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.4.tgz",
      "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.5.tgz",
      "integrity": "sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.5"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.27.1.tgz",
      "integrity": "sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.27.1.tgz",
      "integrity": "sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.5.tgz",
      "integrity": "sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.5",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.5.tgz",
      "integrity": "sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@biomejs/biome": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/@biomejs/biome/-/biome-2.3.9.tgz",
      "integrity": "sha512-js+34KpnY65I00k8P71RH0Uh2rJk4BrpxMGM5m2nBfM9XTlKE5N1URn5ydILPRyXXq4ebhKCjsvR+txS+D4z2A==",
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "bin": {
        "biome": "bin/biome"
      },
      "engines": {
        "node": ">=14.21.3"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/biome"
      },
      "optionalDependencies": {
        "@biomejs/cli-darwin-arm64": "2.3.9",
        "@biomejs/cli-darwin-x64": "2.3.9",
        "@biomejs/cli-linux-arm64": "2.3.9",
        "@biomejs/cli-linux-arm64-musl": "2.3.9",
        "@biomejs/cli-linux-x64": "2.3.9",
        "@biomejs/cli-linux-x64-musl": "2.3.9",
        "@biomejs/cli-win32-arm64": "2.3.9",
        "@biomejs/cli-win32-x64": "2.3.9"
      }
    },
    "node_modules/@biomejs/cli-darwin-arm64": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-darwin-arm64/-/cli-darwin-arm64-2.3.9.tgz",
      "integrity": "sha512-hHbYYnna/WBwem5iCpssQQLtm5ey8ADuDT8N2zqosk6LVWimlEuUnPy6Mbzgu4GWVriyL5ijWd+1zphX6ll4/A==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": ["darwin"],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-darwin-x64": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-darwin-x64/-/cli-darwin-x64-2.3.9.tgz",
      "integrity": "sha512-sKMW5fpvGDmPdqCchtVH5MVlbVeSU3ad4CuKS45x8VHt3tNSC8CZ2QbxffAOKYK9v/mAeUiPC6Cx6+wtyU1q7g==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": ["darwin"],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-linux-arm64": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-linux-arm64/-/cli-linux-arm64-2.3.9.tgz",
      "integrity": "sha512-BXBB6HbAgZI6T6QB8q6NSwIapVngqArP6K78BqkMerht7YjL6yWctqfeTnJm0qGF2bKBYFexslrbV+VTlM2E6g==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-linux-arm64-musl": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-linux-arm64-musl/-/cli-linux-arm64-musl-2.3.9.tgz",
      "integrity": "sha512-JOHyG2nl8XDpncbMazm1uBSi1dPX9VbQDOjKcfSVXTqajD0PsgodMOKyuZ/PkBu5Lw877sWMTGKfEfpM7jE7Cw==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-linux-x64": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-linux-x64/-/cli-linux-x64-2.3.9.tgz",
      "integrity": "sha512-PjYuv2WLmvf0WtidxAkFjlElsn0P6qcvfPijrqu1j+3GoW3XSQh3ywGu7gZ25J25zrYj3KEovUjvUZB55ATrGw==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-linux-x64-musl": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-linux-x64-musl/-/cli-linux-x64-musl-2.3.9.tgz",
      "integrity": "sha512-FUkb/5beCIC2trpqAbW9e095X4vamdlju80c1ExSmhfdrojLZnWkah/XfTSixKb/dQzbAjpD7vvs6rWkJ+P07Q==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-win32-arm64": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-win32-arm64/-/cli-win32-arm64-2.3.9.tgz",
      "integrity": "sha512-w48Yh/XbYHO2cBw8B5laK3vCAEKuocX5ItGXVDAqFE7Ze2wnR00/1vkY6GXglfRDOjWHu2XtxI0WKQ52x1qxEA==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": ["win32"],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-win32-x64": {
      "version": "2.3.9",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-win32-x64/-/cli-win32-x64-2.3.9.tgz",
      "integrity": "sha512-90+J63VT7qImy9s3pkWL0ZX27VzVwMNCRzpLpe5yMzMYPbO1vcjL/w/Q5f/juAGMvP7a2Fd0H7IhAR6F7/i78A==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": ["win32"],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@emailjs/browser": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/@emailjs/browser/-/browser-4.4.1.tgz",
      "integrity": "sha512-DGSlP9sPvyFba3to2A50kDtZ+pXVp/0rhmqs2LmbMS3I5J8FSOgLwzY2Xb4qfKlOVHh29EAutLYwe5yuEZmEFg==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.1.tgz",
      "integrity": "sha512-HHB50pdsBX6k47S4u5g/CaLjqS3qwaOVE5ILsq64jyzgMhLuCuZ8rGzM9yhsAjfjkbgUPMzZEPa7DAp7yz6vuA==",
      "cpu": ["ppc64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["aix"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.1.tgz",
      "integrity": "sha512-kFqa6/UcaTbGm/NncN9kzVOODjhZW8e+FRdSeypWe6j33gzclHtwlANs26JrupOntlcWmB0u8+8HZo8s7thHvg==",
      "cpu": ["arm"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["android"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.1.tgz",
      "integrity": "sha512-45fuKmAJpxnQWixOGCrS+ro4Uvb4Re9+UTieUY2f8AEc+t7d4AaZ6eUJ3Hva7dtrxAAWHtlEFsXFMAgNnGU9uQ==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["android"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.1.tgz",
      "integrity": "sha512-LBEpOz0BsgMEeHgenf5aqmn/lLNTFXVfoWMUox8CtWWYK9X4jmQzWjoGoNb8lmAYml/tQ/Ysvm8q7szu7BoxRQ==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["android"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.1.tgz",
      "integrity": "sha512-veg7fL8eMSCVKL7IW4pxb54QERtedFDfY/ASrumK/SbFsXnRazxY4YykN/THYqFnFwJ0aVjiUrVG2PwcdAEqQQ==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["darwin"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.1.tgz",
      "integrity": "sha512-+3ELd+nTzhfWb07Vol7EZ+5PTbJ/u74nC6iv4/lwIU99Ip5uuY6QoIf0Hn4m2HoV0qcnRivN3KSqc+FyCHjoVQ==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["darwin"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.1.tgz",
      "integrity": "sha512-/8Rfgns4XD9XOSXlzUDepG8PX+AVWHliYlUkFI3K3GB6tqbdjYqdhcb4BKRd7C0BhZSoaCxhv8kTcBrcZWP+xg==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["freebsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.1.tgz",
      "integrity": "sha512-GITpD8dK9C+r+5yRT/UKVT36h/DQLOHdwGVwwoHidlnA168oD3uxA878XloXebK4Ul3gDBBIvEdL7go9gCUFzQ==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["freebsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.1.tgz",
      "integrity": "sha512-ieMID0JRZY/ZeCrsFQ3Y3NlHNCqIhTprJfDgSB3/lv5jJZ8FX3hqPyXWhe+gvS5ARMBJ242PM+VNz/ctNj//eA==",
      "cpu": ["arm"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.1.tgz",
      "integrity": "sha512-W9//kCrh/6in9rWIBdKaMtuTTzNj6jSeG/haWBADqLLa9P8O5YSRDzgD5y9QBok4AYlzS6ARHifAb75V6G670Q==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.1.tgz",
      "integrity": "sha512-VIUV4z8GD8rtSVMfAj1aXFahsi/+tcoXXNYmXgzISL+KB381vbSTNdeZHHHIYqFyXcoEhu9n5cT+05tRv13rlw==",
      "cpu": ["ia32"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.1.tgz",
      "integrity": "sha512-l4rfiiJRN7sTNI//ff65zJ9z8U+k6zcCg0LALU5iEWzY+a1mVZ8iWC1k5EsNKThZ7XCQ6YWtsZ8EWYm7r1UEsg==",
      "cpu": ["loong64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.1.tgz",
      "integrity": "sha512-U0bEuAOLvO/DWFdygTHWY8C067FXz+UbzKgxYhXC0fDieFa0kDIra1FAhsAARRJbvEyso8aAqvPdNxzWuStBnA==",
      "cpu": ["mips64el"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.1.tgz",
      "integrity": "sha512-NzdQ/Xwu6vPSf/GkdmRNsOfIeSGnh7muundsWItmBsVpMoNPVpM61qNzAVY3pZ1glzzAxLR40UyYM23eaDDbYQ==",
      "cpu": ["ppc64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.1.tgz",
      "integrity": "sha512-7zlw8p3IApcsN7mFw0O1Z1PyEk6PlKMu18roImfl3iQHTnr/yAfYv6s4hXPidbDoI2Q0pW+5xeoM4eTCC0UdrQ==",
      "cpu": ["riscv64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.1.tgz",
      "integrity": "sha512-cGj5wli+G+nkVQdZo3+7FDKC25Uh4ZVwOAK6A06Hsvgr8WqBBuOy/1s+PUEd/6Je+vjfm6stX0kmib5b/O2Ykw==",
      "cpu": ["s390x"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.1.tgz",
      "integrity": "sha512-z3H/HYI9MM0HTv3hQZ81f+AKb+yEoCRlUby1F80vbQ5XdzEMyY/9iNlAmhqiBKw4MJXwfgsh7ERGEOhrM1niMA==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.1.tgz",
      "integrity": "sha512-wzC24DxAvk8Em01YmVXyjl96Mr+ecTPyOuADAvjGg+fyBpGmxmcr2E5ttf7Im8D0sXZihpxzO1isus8MdjMCXQ==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["netbsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.1.tgz",
      "integrity": "sha512-1YQ8ybGi2yIXswu6eNzJsrYIGFpnlzEWRl6iR5gMgmsrR0FcNoV1m9k9sc3PuP5rUBLshOZylc9nqSgymI+TYg==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["netbsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.1.tgz",
      "integrity": "sha512-5Z+DzLCrq5wmU7RDaMDe2DVXMRm2tTDvX2KU14JJVBN2CT/qov7XVix85QoJqHltpvAOZUAc3ndU56HSMWrv8g==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["openbsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.1.tgz",
      "integrity": "sha512-Q73ENzIdPF5jap4wqLtsfh8YbYSZ8Q0wnxplOlZUOyZy7B4ZKW8DXGWgTCZmF8VWD7Tciwv5F4NsRf6vYlZtqg==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["openbsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.1.tgz",
      "integrity": "sha512-ajbHrGM/XiK+sXM0JzEbJAen+0E+JMQZ2l4RR4VFwvV9JEERx+oxtgkpoKv1SevhjavK2z2ReHk32pjzktWbGg==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["openharmony"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.1.tgz",
      "integrity": "sha512-IPUW+y4VIjuDVn+OMzHc5FV4GubIwPnsz6ubkvN8cuhEqH81NovB53IUlrlBkPMEPxvNnf79MGBoz8rZ2iW8HA==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["sunos"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.1.tgz",
      "integrity": "sha512-RIVRWiljWA6CdVu8zkWcRmGP7iRRIIwvhDKem8UMBjPql2TXM5PkDVvvrzMtj1V+WFPB4K7zkIGM7VzRtFkjdg==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.1.tgz",
      "integrity": "sha512-2BR5M8CPbptC1AK5JbJT1fWrHLvejwZidKx3UMSF0ecHMa+smhi16drIrCEggkgviBwLYd5nwrFLSl5Kho96RQ==",
      "cpu": ["ia32"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.1.tgz",
      "integrity": "sha512-d5X6RMYv6taIymSk8JBP+nxv8DQAMY6A51GPgusqLdK9wBz5wWIXy1KjTck6HnjE9hqJzJRdk+1p/t5soSbCtw==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.53",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.53.tgz",
      "integrity": "sha512-vENRlFU4YbrwVqNDZ7fLvy+JR1CRkyr01jhSiDpE1u6py3OMzQfztQU2jxykW3ALNxO4kSlqIDeYyD0Y9RcQeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.53.4.tgz",
      "integrity": "sha512-PWU3Y92H4DD0bOqorEPp1Y0tbzwAurFmIYpjcObv5axGVOtcTlB0b2UKMd2echo08MgN7jO8WQZSSysvfisFSQ==",
      "cpu": ["arm"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["android"]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.53.4.tgz",
      "integrity": "sha512-Gw0/DuVm3rGsqhMGYkSOXXIx20cC3kTlivZeuaGt4gEgILivykNyBWxeUV5Cf2tDA2nPLah26vq3emlRrWVbng==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["android"]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.53.4.tgz",
      "integrity": "sha512-+w06QvXsgzKwdVg5qRLZpTHh1bigHZIqoIUPtiqh05ZiJVUQ6ymOxaPkXTvRPRLH88575ZCRSRM3PwIoNma01Q==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["darwin"]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.53.4.tgz",
      "integrity": "sha512-EB4Na9G2GsrRNRNFPuxfwvDRDUwQEzJPpiK1vo2zMVhEeufZ1k7J1bKnT0JYDfnPC7RNZ2H5YNQhW6/p2QKATw==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["darwin"]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.53.4.tgz",
      "integrity": "sha512-bldA8XEqPcs6OYdknoTMaGhjytnwQ0NClSPpWpmufOuGPN5dDmvIa32FygC2gneKK4A1oSx86V1l55hyUWUYFQ==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["freebsd"]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.53.4.tgz",
      "integrity": "sha512-3T8GPjH6mixCd0YPn0bXtcuSXi1Lj+15Ujw2CEb7dd24j9thcKscCf88IV7n76WaAdorOzAgSSbuVRg4C8V8Qw==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["freebsd"]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.53.4.tgz",
      "integrity": "sha512-UPMMNeC4LXW7ZSHxeP3Edv09aLsFUMaD1TSVW6n1CWMECnUIJMFFB7+XC2lZTdPtvB36tYC0cJWc86mzSsaviw==",
      "cpu": ["arm"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.53.4.tgz",
      "integrity": "sha512-H8uwlV0otHs5Q7WAMSoyvjV9DJPiy5nJ/xnHolY0QptLPjaSsuX7tw+SPIfiYH6cnVx3fe4EWFafo6gH6ekZKA==",
      "cpu": ["arm"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.53.4.tgz",
      "integrity": "sha512-BLRwSRwICXz0TXkbIbqJ1ibK+/dSBpTJqDClF61GWIrxTXZWQE78ROeIhgl5MjVs4B4gSLPCFeD4xML9vbzvCQ==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.53.4.tgz",
      "integrity": "sha512-6bySEjOTbmVcPJAywjpGLckK793A0TJWSbIa0sVwtVGfe/Nz6gOWHOwkshUIAp9j7wg2WKcA4Snu7Y1nUZyQew==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.53.4.tgz",
      "integrity": "sha512-U0ow3bXYJZ5MIbchVusxEycBw7bO6C2u5UvD31i5IMTrnt2p4Fh4ZbHSdc/31TScIJQYHwxbj05BpevB3201ug==",
      "cpu": ["loong64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.53.4.tgz",
      "integrity": "sha512-iujDk07ZNwGLVn0YIWM80SFN039bHZHCdCCuX9nyx3Jsa2d9V/0Y32F+YadzwbvDxhSeVo9zefkoPnXEImnM5w==",
      "cpu": ["ppc64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.53.4.tgz",
      "integrity": "sha512-MUtAktiOUSu+AXBpx1fkuG/Bi5rhlorGs3lw5QeJ2X3ziEGAq7vFNdWVde6XGaVqi0LGSvugwjoxSNJfHFTC0g==",
      "cpu": ["riscv64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.53.4.tgz",
      "integrity": "sha512-btm35eAbDfPtcFEgaXCI5l3c2WXyzwiE8pArhd66SDtoLWmgK5/M7CUxmUglkwtniPzwvWioBKKl6IXLbPf2sQ==",
      "cpu": ["riscv64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.53.4.tgz",
      "integrity": "sha512-uJlhKE9ccUTCUlK+HUz/80cVtx2RayadC5ldDrrDUFaJK0SNb8/cCmC9RhBhIWuZ71Nqj4Uoa9+xljKWRogdhA==",
      "cpu": ["s390x"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.53.4.tgz",
      "integrity": "sha512-jjEMkzvASQBbzzlzf4os7nzSBd/cvPrpqXCUOqoeCh1dQ4BP3RZCJk8XBeik4MUln3m+8LeTJcY54C/u8wb3DQ==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.53.4.tgz",
      "integrity": "sha512-lu90KG06NNH19shC5rBPkrh6mrTpq5kviFylPBXQVpdEu0yzb0mDgyxLr6XdcGdBIQTH/UAhDJnL+APZTBu1aQ==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.53.4.tgz",
      "integrity": "sha512-dFDcmLwsUzhAm/dn0+dMOQZoONVYBtgik0VuY/d5IJUUb787L3Ko/ibvTvddqhb3RaB7vFEozYevHN4ox22R/w==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["openharmony"]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.53.4.tgz",
      "integrity": "sha512-WvUpUAWmUxZKtRnQWpRKnLW2DEO8HB/l8z6oFFMNuHndMzFTJEXzaYJ5ZAmzNw0L21QQJZsUQFt2oPf3ykAD/w==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.53.4.tgz",
      "integrity": "sha512-JGbeF2/FDU0x2OLySw/jgvkwWUo05BSiJK0dtuI4LyuXbz3wKiC1xHhLB1Tqm5VU6ZZDmAorj45r/IgWNWku5g==",
      "cpu": ["ia32"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.53.4.tgz",
      "integrity": "sha512-zuuC7AyxLWLubP+mlUwEyR8M1ixW1ERNPHJfXm8x7eQNP4Pzkd7hS3qBuKBR70VRiQ04Kw8FNfRMF5TNxuZq2g==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.53.4.tgz",
      "integrity": "sha512-Sbx45u/Lbb5RyptSbX7/3deP+/lzEmZ0BTSHxwxN/IMOZDZf8S0AGo0hJD5n/LQssxb5Z3B4og4P2X6Dd8acCA==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"]
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-5.1.2.tgz",
      "integrity": "sha512-EcA07pHJouywpzsoTUqNh5NwGayl2PPVEJKUSinGGSxFGYn+shYbqMGBg6FXDqgXum9Ou/ecb+411ssw8HImJQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.5",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-beta.53",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.18.0"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.9.7",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.9.7.tgz",
      "integrity": "sha512-k9xFKplee6KIio3IDbwj+uaCLpqzOwakOgmqzPezM0sFJlFKcg30vk2wOiAJtkTSfx0SSQDSe8q+mWA/fSH5Zg==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.1",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.1.tgz",
      "integrity": "sha512-ZC5Bd0LgJXgwGqUknZY/vkUQ04r8NXnJZ3yYi4vDmSiZmC/pdSN0NbNRPxZpbtO4uAfDUAFffO8IZoM3Gj8IkA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.9.0",
        "caniuse-lite": "^1.0.30001759",
        "electron-to-chromium": "^1.5.263",
        "node-releases": "^2.0.27",
        "update-browserslist-db": "^1.2.0"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001760",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001760.tgz",
      "integrity": "sha512-7AAMPcueWELt1p3mi13HR/LHH0TJLT11cnwDJEs3xA4+CK/PLKeO9Kl1oru24htkyUKtkGCvAx4ohB0Ttry8Dw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/chalk/node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cliui": {
      "version": "8.0.1",
      "resolved": "https://registry.npmjs.org/cliui/-/cliui-8.0.1.tgz",
      "integrity": "sha512-BSeNnyus75C4//NQ9gQt1/csTXyo/8Sb+afLAkzAptFuMsod9HFokGNudZpi/oQV73hnVK+sR+5PVRMd+Dr7YQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "string-width": "^4.2.0",
        "strip-ansi": "^6.0.1",
        "wrap-ansi": "^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concurrently": {
      "version": "9.2.1",
      "resolved": "https://registry.npmjs.org/concurrently/-/concurrently-9.2.1.tgz",
      "integrity": "sha512-fsfrO0MxV64Znoy8/l1vVIjjHa29SZyyqPgQBwhiDcaW8wJc2W3XWVOGx4M3oJBnv/zdUZIIp1gDeS98GzP8Ng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "chalk": "4.1.2",
        "rxjs": "7.8.2",
        "shell-quote": "1.8.3",
        "supports-color": "8.1.1",
        "tree-kill": "1.2.2",
        "yargs": "17.7.2"
      },
      "bin": {
        "conc": "dist/bin/concurrently.js",
        "concurrently": "dist/bin/concurrently.js"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/open-cli-tools/concurrently?sponsor=1"
      }
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.267",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.267.tgz",
      "integrity": "sha512-0Drusm6MVRXSOJpGbaSVgcQsuB4hEkMpHXaVstcPmhu5LIedxs1xNK/nIxmQIU/RPC0+1/o0AVZfBTkTNJOdUw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/esbuild": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.1.tgz",
      "integrity": "sha512-yY35KZckJJuVVPXpvjgxiCuVEJT67F6zDeVTv4rizyPrfGBUpZQsvmxnN+C371c2esD/hNMjj4tpBhuueLN7aA==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.1",
        "@esbuild/android-arm": "0.27.1",
        "@esbuild/android-arm64": "0.27.1",
        "@esbuild/android-x64": "0.27.1",
        "@esbuild/darwin-arm64": "0.27.1",
        "@esbuild/darwin-x64": "0.27.1",
        "@esbuild/freebsd-arm64": "0.27.1",
        "@esbuild/freebsd-x64": "0.27.1",
        "@esbuild/linux-arm": "0.27.1",
        "@esbuild/linux-arm64": "0.27.1",
        "@esbuild/linux-ia32": "0.27.1",
        "@esbuild/linux-loong64": "0.27.1",
        "@esbuild/linux-mips64el": "0.27.1",
        "@esbuild/linux-ppc64": "0.27.1",
        "@esbuild/linux-riscv64": "0.27.1",
        "@esbuild/linux-s390x": "0.27.1",
        "@esbuild/linux-x64": "0.27.1",
        "@esbuild/netbsd-arm64": "0.27.1",
        "@esbuild/netbsd-x64": "0.27.1",
        "@esbuild/openbsd-arm64": "0.27.1",
        "@esbuild/openbsd-x64": "0.27.1",
        "@esbuild/openharmony-arm64": "0.27.1",
        "@esbuild/sunos-x64": "0.27.1",
        "@esbuild/win32-arm64": "0.27.1",
        "@esbuild/win32-ia32": "0.27.1",
        "@esbuild/win32-x64": "0.27.1"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": ["darwin"],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-caller-file": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
      "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": "6.* || 8.* || >= 10.*"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
      "integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.3.tgz",
      "integrity": "sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/react-refresh": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.18.0.tgz",
      "integrity": "sha512-QgT5//D3jfjJb6Gsjxv0Slpj23ip+HtOpnNgnb2S5zU3CB26G/IDPGoy4RJB42wzFE46DRsstbW6tKHoKbhAxw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/require-directory": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha512-fGxEI7+wsG9xrvdjsrlmL22OMTTiHRwAMroiEeMgq8gzoLC/PQr7RsRDSTLUg/bZAZtF+TVIkHc6/4RIKrui+Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/rollup": {
      "version": "4.53.4",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.53.4.tgz",
      "integrity": "sha512-YpXaaArg0MvrnJpvduEDYIp7uGOqKXbH9NsHGQ6SxKCOsNAjZF018MmxefFUulVP2KLtiGw1UvZbr+/ekjvlDg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.8"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.53.4",
        "@rollup/rollup-android-arm64": "4.53.4",
        "@rollup/rollup-darwin-arm64": "4.53.4",
        "@rollup/rollup-darwin-x64": "4.53.4",
        "@rollup/rollup-freebsd-arm64": "4.53.4",
        "@rollup/rollup-freebsd-x64": "4.53.4",
        "@rollup/rollup-linux-arm-gnueabihf": "4.53.4",
        "@rollup/rollup-linux-arm-musleabihf": "4.53.4",
        "@rollup/rollup-linux-arm64-gnu": "4.53.4",
        "@rollup/rollup-linux-arm64-musl": "4.53.4",
        "@rollup/rollup-linux-loong64-gnu": "4.53.4",
        "@rollup/rollup-linux-ppc64-gnu": "4.53.4",
        "@rollup/rollup-linux-riscv64-gnu": "4.53.4",
        "@rollup/rollup-linux-riscv64-musl": "4.53.4",
        "@rollup/rollup-linux-s390x-gnu": "4.53.4",
        "@rollup/rollup-linux-x64-gnu": "4.53.4",
        "@rollup/rollup-linux-x64-musl": "4.53.4",
        "@rollup/rollup-openharmony-arm64": "4.53.4",
        "@rollup/rollup-win32-arm64-msvc": "4.53.4",
        "@rollup/rollup-win32-ia32-msvc": "4.53.4",
        "@rollup/rollup-win32-x64-gnu": "4.53.4",
        "@rollup/rollup-win32-x64-msvc": "4.53.4",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/rxjs": {
      "version": "7.8.2",
      "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.8.2.tgz",
      "integrity": "sha512-dhKf903U/PQZY6boNNtAGdWbG85WAbjT/1xYoZIC7FAY0yWapOBQVsVrDl58W86//e1VpMNBtRV4MaXfdMySFA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.1.0"
      }
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/shell-quote": {
      "version": "1.8.3",
      "resolved": "https://registry.npmjs.org/shell-quote/-/shell-quote-1.8.3.tgz",
      "integrity": "sha512-ObmnIF4hXNg1BqhnHmgbDETF8dLPCggZWBjkQfhZpbszZnYur5DUljTcCHii5LC3J5E0yeO/1LIMyH+UvHQgyw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-color": {
      "version": "8.1.1",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
      "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/supports-color?sponsor=1"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.15",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
      "integrity": "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tree-kill": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/tree-kill/-/tree-kill-1.2.2.tgz",
      "integrity": "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "tree-kill": "cli.js"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "dev": true,
      "license": "0BSD"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.2.tgz",
      "integrity": "sha512-E85pfNzMQ9jpKkA7+TJAi4TJN+tBCuWh5rUcS/sv6cFi+1q9LYDwDI5dpUL0u/73EElyQ8d3TEaeW4sPedBqYA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/vite": {
      "version": "7.3.0",
      "resolved": "https://registry.npmjs.org/vite/-/vite-7.3.0.tgz",
      "integrity": "sha512-dZwN5L1VlUBewiP6H9s2+B3e3Jg96D0vzN+Ry73sOefebhYr9f94wwkMNN/9ouoU8pV1BqA1d1zGk8928cx0rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.27.0",
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3",
        "postcss": "^8.5.6",
        "rollup": "^4.43.0",
        "tinyglobby": "^0.2.15"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "lightningcss": "^1.21.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yargs": {
      "version": "17.7.2",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.2.tgz",
      "integrity": "sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cliui": "^8.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.3",
        "y18n": "^5.0.5",
        "yargs-parser": "^21.1.1"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yargs-parser": {
      "version": "21.1.1",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
      "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    }
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\package.json`

```json
{
  "name": "projet",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "predev": "node server/database/init-db.js",
    "dev": "concurrently -c green,yellow -t \"HH:mm:ss\" -p \"{name} {time}\" \"npm run dev --prefix server\" \"npm run dev --prefix client\"",
    "dev:client": "npm run dev --prefix client -- --host",
    "dev:server": "npm run dev --prefix server",
    "build:client": "npm run build --prefix client",
    "start": "npm run start --prefix server",
    "setup": "node setup/update-package-name.js",
    "postinstall": "npm run setup",
    "setup:project": "node setup/update-package-name.js",
    "render-build": "npm install --prefix client && npm run build --prefix client && npm run build --prefix server"
  },
  "devDependencies": {
    "@biomejs/biome": "^2.3.8",
    "@vitejs/plugin-react": "^5.1.2",
    "concurrently": "^9.2.1",
    "vite": "^7.2.4"
  },
  "dependencies": {
    "@emailjs/browser": "^4.4.1"
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\server\.env`

```
NODE_ENV=development
PORT=3310
APP_SECRET=Générer une key, coller dans le terminal bash cette commande en entière : 0b8e77fad0a7ed157494cb744ea4ab9030ec2b5197738d7f59500f3ff4f2ee98986bbdb1a7aeaa361af56d6d694698b4

PGHOST=localhost
PGPORT=5432
PGUSER=ceddevs
PGPASSWORD=Jactlj01
PGDATABASE=gouyon-cedric

CLIENT_URL=http://localhost:5173

```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\server\.env.sample`

```
NODE_ENV=development
PORT=3310
APP_SECRET=Générer une key, coller dans le terminal bash cette commande en entière : node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"

PGHOST=localhost
PGPORT=5433
PGUSER=Your_user
PGPASSWORD=Your_password
PGDATABASE=Your_db_name

CLIENT_URL=http://localhost:5173
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\server\.gitignore`

```
# Dépendances
node_modules/

# Environnement
.env

# Build TypeScript
dist/
*.tsbuildinfo

# Logs
logs/
*.log
npm-debug.log*

# IDE / OS
.DS_Store
.vscode/
.idea/
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\server\database\init-db.js`

```javascript
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { Client } from "pg";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve("server/.env") });

const DB_NAME = process.env.PGDATABASE;

const SQL_SCRIPT_PATH = path.join(__dirname, "script", "schema.sql");

const baseConfig = {
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
  password: String(process.env.PGPASSWORD || ""),
};

async function initDb() {
  let tempClient;
  let finalClient;

  try {
    console.log(`Tentative de connexion à PostgreSQL pour vérifier/créer la DB "${DB_NAME}"...`);

    tempClient = new Client({ ...baseConfig, database: "postgres" });
    await tempClient.connect();

    const res = await tempClient.query(`SELECT 1 FROM pg_database WHERE datname = $1`, [DB_NAME]);

    if (res.rowCount === 0) {
      console.log(`Base de données "${DB_NAME}" non trouvée. Création...`);

      await tempClient.query(`CREATE DATABASE "${DB_NAME}"`);

      console.log(`🟢 Base de données "${DB_NAME}" créée avec succès.`);
    } else {
      console.log(`Base de données "${DB_NAME}" existe déjà. Initialisation des tables...`);
    }

    await tempClient.end();

    finalClient = new Client({ ...baseConfig, database: DB_NAME });
    await finalClient.connect();

    const sql = fs.readFileSync(SQL_SCRIPT_PATH, "utf8");
    await finalClient.query(sql);

    console.log("🟢 Tables et Types créés/mis à jour.");
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error(`🔴 Erreur init DB: Le fichier SQL est introuvable au chemin : ${SQL_SCRIPT_PATH}`);
    } else {
      console.error("🔴 Erreur init DB:", err.message);
    }
  } finally {
    if (finalClient) await finalClient.end();
  }
}

initDb();
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\server\database\script\schema.sql`

```
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_profiles (
  user_id INT PRIMARY KEY,
  address VARCHAR(255),
  city VARCHAR(100),
  postal_code VARCHAR(20),
  profile_photo VARCHAR(510),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'role_type') THEN
    CREATE TYPE role_type AS ENUM ('free', 'premium', 'admin');
  END IF;
END$$;

CREATE TABLE IF NOT EXISTS roles (
  id SERIAL PRIMARY KEY,
  role role_type NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS user_roles (
  user_id INT NOT NULL,
  role_id INT NOT NULL,
  PRIMARY KEY(user_id, role_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
);
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\server\package-lock.json`

```json
{
  "name": "server",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "server",
      "version": "1.0.0",
      "license": "ISC",
      "dependencies": {
        "@types/cookie-parser": "^1.4.10",
        "bcrypt": "^6.0.0",
        "cookie-parser": "^1.4.7",
        "cors": "^2.8.5",
        "dotenv": "^17.2.3",
        "express": "^5.2.1",
        "jsonwebtoken": "^9.0.3",
        "pg": "^8.16.3"
      },
      "devDependencies": {
        "@types/bcrypt": "^6.0.0",
        "@types/cors": "^2.8.19",
        "@types/express": "^5.0.6",
        "@types/jsonwebtoken": "^9.0.10",
        "@types/node": "^25.0.2",
        "@types/pg": "^8.16.0",
        "tsx": "^4.21.0",
        "typescript": "^5.9.3"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.27.1.tgz",
      "integrity": "sha512-HHB50pdsBX6k47S4u5g/CaLjqS3qwaOVE5ILsq64jyzgMhLuCuZ8rGzM9yhsAjfjkbgUPMzZEPa7DAp7yz6vuA==",
      "cpu": ["ppc64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["aix"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.27.1.tgz",
      "integrity": "sha512-kFqa6/UcaTbGm/NncN9kzVOODjhZW8e+FRdSeypWe6j33gzclHtwlANs26JrupOntlcWmB0u8+8HZo8s7thHvg==",
      "cpu": ["arm"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["android"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.27.1.tgz",
      "integrity": "sha512-45fuKmAJpxnQWixOGCrS+ro4Uvb4Re9+UTieUY2f8AEc+t7d4AaZ6eUJ3Hva7dtrxAAWHtlEFsXFMAgNnGU9uQ==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["android"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.27.1.tgz",
      "integrity": "sha512-LBEpOz0BsgMEeHgenf5aqmn/lLNTFXVfoWMUox8CtWWYK9X4jmQzWjoGoNb8lmAYml/tQ/Ysvm8q7szu7BoxRQ==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["android"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.27.1.tgz",
      "integrity": "sha512-veg7fL8eMSCVKL7IW4pxb54QERtedFDfY/ASrumK/SbFsXnRazxY4YykN/THYqFnFwJ0aVjiUrVG2PwcdAEqQQ==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["darwin"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.27.1.tgz",
      "integrity": "sha512-+3ELd+nTzhfWb07Vol7EZ+5PTbJ/u74nC6iv4/lwIU99Ip5uuY6QoIf0Hn4m2HoV0qcnRivN3KSqc+FyCHjoVQ==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["darwin"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.27.1.tgz",
      "integrity": "sha512-/8Rfgns4XD9XOSXlzUDepG8PX+AVWHliYlUkFI3K3GB6tqbdjYqdhcb4BKRd7C0BhZSoaCxhv8kTcBrcZWP+xg==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["freebsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.27.1.tgz",
      "integrity": "sha512-GITpD8dK9C+r+5yRT/UKVT36h/DQLOHdwGVwwoHidlnA168oD3uxA878XloXebK4Ul3gDBBIvEdL7go9gCUFzQ==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["freebsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.27.1.tgz",
      "integrity": "sha512-ieMID0JRZY/ZeCrsFQ3Y3NlHNCqIhTprJfDgSB3/lv5jJZ8FX3hqPyXWhe+gvS5ARMBJ242PM+VNz/ctNj//eA==",
      "cpu": ["arm"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.27.1.tgz",
      "integrity": "sha512-W9//kCrh/6in9rWIBdKaMtuTTzNj6jSeG/haWBADqLLa9P8O5YSRDzgD5y9QBok4AYlzS6ARHifAb75V6G670Q==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.27.1.tgz",
      "integrity": "sha512-VIUV4z8GD8rtSVMfAj1aXFahsi/+tcoXXNYmXgzISL+KB381vbSTNdeZHHHIYqFyXcoEhu9n5cT+05tRv13rlw==",
      "cpu": ["ia32"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.27.1.tgz",
      "integrity": "sha512-l4rfiiJRN7sTNI//ff65zJ9z8U+k6zcCg0LALU5iEWzY+a1mVZ8iWC1k5EsNKThZ7XCQ6YWtsZ8EWYm7r1UEsg==",
      "cpu": ["loong64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.27.1.tgz",
      "integrity": "sha512-U0bEuAOLvO/DWFdygTHWY8C067FXz+UbzKgxYhXC0fDieFa0kDIra1FAhsAARRJbvEyso8aAqvPdNxzWuStBnA==",
      "cpu": ["mips64el"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.27.1.tgz",
      "integrity": "sha512-NzdQ/Xwu6vPSf/GkdmRNsOfIeSGnh7muundsWItmBsVpMoNPVpM61qNzAVY3pZ1glzzAxLR40UyYM23eaDDbYQ==",
      "cpu": ["ppc64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.27.1.tgz",
      "integrity": "sha512-7zlw8p3IApcsN7mFw0O1Z1PyEk6PlKMu18roImfl3iQHTnr/yAfYv6s4hXPidbDoI2Q0pW+5xeoM4eTCC0UdrQ==",
      "cpu": ["riscv64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.27.1.tgz",
      "integrity": "sha512-cGj5wli+G+nkVQdZo3+7FDKC25Uh4ZVwOAK6A06Hsvgr8WqBBuOy/1s+PUEd/6Je+vjfm6stX0kmib5b/O2Ykw==",
      "cpu": ["s390x"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.27.1.tgz",
      "integrity": "sha512-z3H/HYI9MM0HTv3hQZ81f+AKb+yEoCRlUby1F80vbQ5XdzEMyY/9iNlAmhqiBKw4MJXwfgsh7ERGEOhrM1niMA==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["linux"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.27.1.tgz",
      "integrity": "sha512-wzC24DxAvk8Em01YmVXyjl96Mr+ecTPyOuADAvjGg+fyBpGmxmcr2E5ttf7Im8D0sXZihpxzO1isus8MdjMCXQ==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["netbsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.27.1.tgz",
      "integrity": "sha512-1YQ8ybGi2yIXswu6eNzJsrYIGFpnlzEWRl6iR5gMgmsrR0FcNoV1m9k9sc3PuP5rUBLshOZylc9nqSgymI+TYg==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["netbsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.27.1.tgz",
      "integrity": "sha512-5Z+DzLCrq5wmU7RDaMDe2DVXMRm2tTDvX2KU14JJVBN2CT/qov7XVix85QoJqHltpvAOZUAc3ndU56HSMWrv8g==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["openbsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.27.1.tgz",
      "integrity": "sha512-Q73ENzIdPF5jap4wqLtsfh8YbYSZ8Q0wnxplOlZUOyZy7B4ZKW8DXGWgTCZmF8VWD7Tciwv5F4NsRf6vYlZtqg==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["openbsd"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.27.1.tgz",
      "integrity": "sha512-ajbHrGM/XiK+sXM0JzEbJAen+0E+JMQZ2l4RR4VFwvV9JEERx+oxtgkpoKv1SevhjavK2z2ReHk32pjzktWbGg==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["openharmony"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.27.1.tgz",
      "integrity": "sha512-IPUW+y4VIjuDVn+OMzHc5FV4GubIwPnsz6ubkvN8cuhEqH81NovB53IUlrlBkPMEPxvNnf79MGBoz8rZ2iW8HA==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["sunos"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.27.1.tgz",
      "integrity": "sha512-RIVRWiljWA6CdVu8zkWcRmGP7iRRIIwvhDKem8UMBjPql2TXM5PkDVvvrzMtj1V+WFPB4K7zkIGM7VzRtFkjdg==",
      "cpu": ["arm64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.27.1.tgz",
      "integrity": "sha512-2BR5M8CPbptC1AK5JbJT1fWrHLvejwZidKx3UMSF0ecHMa+smhi16drIrCEggkgviBwLYd5nwrFLSl5Kho96RQ==",
      "cpu": ["ia32"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.27.1.tgz",
      "integrity": "sha512-d5X6RMYv6taIymSk8JBP+nxv8DQAMY6A51GPgusqLdK9wBz5wWIXy1KjTck6HnjE9hqJzJRdk+1p/t5soSbCtw==",
      "cpu": ["x64"],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": ["win32"],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@types/bcrypt": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/@types/bcrypt/-/bcrypt-6.0.0.tgz",
      "integrity": "sha512-/oJGukuH3D2+D+3H4JWLaAsJ/ji86dhRidzZ/Od7H/i8g+aCmvkeCc6Ni/f9uxGLSQVCRZkX2/lqEFG2BvWtlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/body-parser": {
      "version": "1.19.6",
      "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.6.tgz",
      "integrity": "sha512-HLFeCYgz89uk22N5Qg3dvGvsv46B8GLvKKo1zKG4NybA8U2DiEO3w9lqGg29t/tfLRJpJ6iQxnVw4OnB7MoM9g==",
      "license": "MIT",
      "dependencies": {
        "@types/connect": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/connect": {
      "version": "3.4.38",
      "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
      "integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/cookie-parser": {
      "version": "1.4.10",
      "resolved": "https://registry.npmjs.org/@types/cookie-parser/-/cookie-parser-1.4.10.tgz",
      "integrity": "sha512-B4xqkqfZ8Wek+rCOeRxsjMS9OgvzebEzzLYw7NHYuvzb7IdxOkI0ZHGgeEBX4PUM7QGVvNSK60T3OvWj3YfBRg==",
      "license": "MIT",
      "peerDependencies": {
        "@types/express": "*"
      }
    },
    "node_modules/@types/cors": {
      "version": "2.8.19",
      "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.19.tgz",
      "integrity": "sha512-mFNylyeyqN93lfe/9CSxOGREz8cpzAhH+E93xJ4xWQf62V8sQ/24reV2nyzUWM6H6Xji+GGHpkbLe7pVoUEskg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/express": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/@types/express/-/express-5.0.6.tgz",
      "integrity": "sha512-sKYVuV7Sv9fbPIt/442koC7+IIwK5olP1KWeD88e/idgoJqDm3JV/YUiPwkoKK92ylff2MGxSz1CSjsXelx0YA==",
      "license": "MIT",
      "dependencies": {
        "@types/body-parser": "*",
        "@types/express-serve-static-core": "^5.0.0",
        "@types/serve-static": "^2"
      }
    },
    "node_modules/@types/express-serve-static-core": {
      "version": "5.1.0",
      "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-5.1.0.tgz",
      "integrity": "sha512-jnHMsrd0Mwa9Cf4IdOzbz543y4XJepXrbia2T4b6+spXC2We3t1y6K44D3mR8XMFSXMCf3/l7rCgddfx7UNVBA==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@types/qs": "*",
        "@types/range-parser": "*",
        "@types/send": "*"
      }
    },
    "node_modules/@types/http-errors": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.5.tgz",
      "integrity": "sha512-r8Tayk8HJnX0FztbZN7oVqGccWgw98T/0neJphO91KkmOzug1KkofZURD4UaD5uH8AqcFLfdPErnBod0u71/qg==",
      "license": "MIT"
    },
    "node_modules/@types/jsonwebtoken": {
      "version": "9.0.10",
      "resolved": "https://registry.npmjs.org/@types/jsonwebtoken/-/jsonwebtoken-9.0.10.tgz",
      "integrity": "sha512-asx5hIG9Qmf/1oStypjanR7iKTv0gXQ1Ov/jfrX6kS/EO0OFni8orbmGCn0672NHR3kXHwpAwR+B368ZGN/2rA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/ms": "*",
        "@types/node": "*"
      }
    },
    "node_modules/@types/ms": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/@types/ms/-/ms-2.1.0.tgz",
      "integrity": "sha512-GsCCIZDE/p3i96vtEqx+7dBUGXrc7zeSK3wwPHIaRThS+9OhWIXRqzs4d6k1SVU8g91DrNRWxWUGhp5KXQb2VA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "25.0.2",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-25.0.2.tgz",
      "integrity": "sha512-gWEkeiyYE4vqjON/+Obqcoeffmk0NF15WSBwSs7zwVA2bAbTaE0SJ7P0WNGoJn8uE7fiaV5a7dKYIJriEqOrmA==",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~7.16.0"
      }
    },
    "node_modules/@types/pg": {
      "version": "8.16.0",
      "resolved": "https://registry.npmjs.org/@types/pg/-/pg-8.16.0.tgz",
      "integrity": "sha512-RmhMd/wD+CF8Dfo+cVIy3RR5cl8CyfXQ0tGgW6XBL8L4LM/UTEbNXYRbLwU6w+CgrKBNbrQWt4FUtTfaU5jSYQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "pg-protocol": "*",
        "pg-types": "^2.2.0"
      }
    },
    "node_modules/@types/qs": {
      "version": "6.14.0",
      "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.14.0.tgz",
      "integrity": "sha512-eOunJqu0K1923aExK6y8p6fsihYEn/BYuQ4g0CxAAgFc4b/ZLN4CrsRZ55srTdqoiLzU2B2evC+apEIxprEzkQ==",
      "license": "MIT"
    },
    "node_modules/@types/range-parser": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
      "integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
      "license": "MIT"
    },
    "node_modules/@types/send": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@types/send/-/send-1.2.1.tgz",
      "integrity": "sha512-arsCikDvlU99zl1g69TcAB3mzZPpxgw0UQnaHeC1Nwb015xp8bknZv5rIfri9xTOcMuaVgvabfIRA7PSZVuZIQ==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@types/serve-static": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-2.2.0.tgz",
      "integrity": "sha512-8mam4H1NHLtu7nmtalF7eyBH14QyOASmcxHhSfEoRyr0nP/YdoesEtU+uSRvMe96TW/HPTtkoKqQLl53N7UXMQ==",
      "license": "MIT",
      "dependencies": {
        "@types/http-errors": "*",
        "@types/node": "*"
      }
    },
    "node_modules/accepts": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
      "license": "MIT",
      "dependencies": {
        "mime-types": "^3.0.0",
        "negotiator": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/bcrypt": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/bcrypt/-/bcrypt-6.0.0.tgz",
      "integrity": "sha512-cU8v/EGSrnH+HnxV2z0J7/blxH8gq7Xh2JFT6Aroax7UohdmiJJlxApMxtKfuI7z68NvvVcmR78k2LbT6efhRg==",
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "node-addon-api": "^8.3.0",
        "node-gyp-build": "^4.8.4"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/body-parser": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.2.1.tgz",
      "integrity": "sha512-nfDwkulwiZYQIGwxdy0RUmowMhKcFVcYXUU7m4QlKYim1rUtg83xm2yjZ40QjDuc291AJjjeSc9b++AWHSgSHw==",
      "license": "MIT",
      "dependencies": {
        "bytes": "^3.1.2",
        "content-type": "^1.0.5",
        "debug": "^4.4.3",
        "http-errors": "^2.0.0",
        "iconv-lite": "^0.7.0",
        "on-finished": "^2.4.1",
        "qs": "^6.14.0",
        "raw-body": "^3.0.1",
        "type-is": "^2.0.1"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/buffer-equal-constant-time": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/buffer-equal-constant-time/-/buffer-equal-constant-time-1.0.1.tgz",
      "integrity": "sha512-zRpUiDwd/xk6ADqPMATG8vc9VPrkck7T07OIx0gnjmJAnHnTVXNQG3vfvWNuiZIkwu9KrKdA1iJKfsfTVxE6NA==",
      "license": "BSD-3-Clause"
    },
    "node_modules/bytes": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/content-disposition": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.0.1.tgz",
      "integrity": "sha512-oIXISMynqSqm241k6kcQ5UwttDILMK4BiurCfGEREw6+X9jkkpEe5T9FZaApyLGGOnFuyMWZpdolTXMtvEJ08Q==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/content-type": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cookie-parser": {
      "version": "1.4.7",
      "resolved": "https://registry.npmjs.org/cookie-parser/-/cookie-parser-1.4.7.tgz",
      "integrity": "sha512-nGUvgXnotP3BsjiLX2ypbQnWoGUPIIfHQNZkkC668ntrzGWEZVW70HDEB1qnNGMicPje6EttlIgzo51YSwNQGw==",
      "license": "MIT",
      "dependencies": {
        "cookie": "0.7.2",
        "cookie-signature": "1.0.6"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/cookie-parser/node_modules/cookie-signature": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha512-QADzlaHc8icV8I7vbaJXJwod9HWYp8uCqf1xa4OfNu1T7JVxQIrUgOWtHdNDtPiywmFbiS12VjotIXLrKM3orQ==",
      "license": "MIT"
    },
    "node_modules/cookie-signature": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
      "license": "MIT",
      "engines": {
        "node": ">=6.6.0"
      }
    },
    "node_modules/cors": {
      "version": "2.8.5",
      "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
      "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
      "license": "MIT",
      "dependencies": {
        "object-assign": "^4",
        "vary": "^1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/depd": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/dotenv": {
      "version": "17.2.3",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-17.2.3.tgz",
      "integrity": "sha512-JVUnt+DUIzu87TABbhPmNfVdBDt18BLOWjMUFJMSi/Qqg7NTYtabbvSNJGOJ7afbRuv9D/lngizHtP7QyLQ+9w==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/ecdsa-sig-formatter": {
      "version": "1.0.11",
      "resolved": "https://registry.npmjs.org/ecdsa-sig-formatter/-/ecdsa-sig-formatter-1.0.11.tgz",
      "integrity": "sha512-nagl3RYrbNv6kQkeJIpt6NJZy8twLB/2vtz6yN9Z4vRKHN4/QZJIEbqohALSgwKdnksuY3k5Addp5lg8sVoVcQ==",
      "license": "Apache-2.0",
      "dependencies": {
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/ee-first": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
      "license": "MIT"
    },
    "node_modules/encodeurl": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/esbuild": {
      "version": "0.27.1",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.1.tgz",
      "integrity": "sha512-yY35KZckJJuVVPXpvjgxiCuVEJT67F6zDeVTv4rizyPrfGBUpZQsvmxnN+C371c2esD/hNMjj4tpBhuueLN7aA==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.27.1",
        "@esbuild/android-arm": "0.27.1",
        "@esbuild/android-arm64": "0.27.1",
        "@esbuild/android-x64": "0.27.1",
        "@esbuild/darwin-arm64": "0.27.1",
        "@esbuild/darwin-x64": "0.27.1",
        "@esbuild/freebsd-arm64": "0.27.1",
        "@esbuild/freebsd-x64": "0.27.1",
        "@esbuild/linux-arm": "0.27.1",
        "@esbuild/linux-arm64": "0.27.1",
        "@esbuild/linux-ia32": "0.27.1",
        "@esbuild/linux-loong64": "0.27.1",
        "@esbuild/linux-mips64el": "0.27.1",
        "@esbuild/linux-ppc64": "0.27.1",
        "@esbuild/linux-riscv64": "0.27.1",
        "@esbuild/linux-s390x": "0.27.1",
        "@esbuild/linux-x64": "0.27.1",
        "@esbuild/netbsd-arm64": "0.27.1",
        "@esbuild/netbsd-x64": "0.27.1",
        "@esbuild/openbsd-arm64": "0.27.1",
        "@esbuild/openbsd-x64": "0.27.1",
        "@esbuild/openharmony-arm64": "0.27.1",
        "@esbuild/sunos-x64": "0.27.1",
        "@esbuild/win32-arm64": "0.27.1",
        "@esbuild/win32-ia32": "0.27.1",
        "@esbuild/win32-x64": "0.27.1"
      }
    },
    "node_modules/escape-html": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
      "license": "MIT"
    },
    "node_modules/etag": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/express": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",
      "integrity": "sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==",
      "license": "MIT",
      "dependencies": {
        "accepts": "^2.0.0",
        "body-parser": "^2.2.1",
        "content-disposition": "^1.0.0",
        "content-type": "^1.0.5",
        "cookie": "^0.7.1",
        "cookie-signature": "^1.2.1",
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "finalhandler": "^2.1.0",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "merge-descriptors": "^2.0.0",
        "mime-types": "^3.0.0",
        "on-finished": "^2.4.1",
        "once": "^1.4.0",
        "parseurl": "^1.3.3",
        "proxy-addr": "^2.0.7",
        "qs": "^6.14.0",
        "range-parser": "^1.2.1",
        "router": "^2.2.0",
        "send": "^1.1.0",
        "serve-static": "^2.2.0",
        "statuses": "^2.0.1",
        "type-is": "^2.0.1",
        "vary": "^1.1.2"
      },
      "engines": {
        "node": ">= 18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/finalhandler": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.1.tgz",
      "integrity": "sha512-S8KoZgRZN+a5rNwqTxlZZePjT/4cnm0ROV70LedRHZ0p8u9fRID0hJUZQpkKLzro8LfmC8sx23bY6tVNxv8pQA==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "on-finished": "^2.4.1",
        "parseurl": "^1.3.3",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/forwarded": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/fresh": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": ["darwin"],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.13.0.tgz",
      "integrity": "sha512-1VKTZJCwBrvbd+Wn3AOgQP/2Av+TfTCOlE4AcRJE72W1ksZXbAx8PPBR9RzgTeSPzlPMHrbANMH3LbltH73wxQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/http-errors": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
      "license": "MIT",
      "dependencies": {
        "depd": "~2.0.0",
        "inherits": "~2.0.4",
        "setprototypeof": "~1.2.0",
        "statuses": "~2.0.2",
        "toidentifier": "~1.0.1"
      },
      "engines": {
        "node": ">= 0.8"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.1.tgz",
      "integrity": "sha512-2Tth85cXwGFHfvRgZWszZSvdo+0Xsqmw8k8ZwxScfcBneNUraK+dxRxRm24nszx80Y0TVio8kKLt5sLE7ZCLlw==",
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "license": "ISC"
    },
    "node_modules/ipaddr.js": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/is-promise": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
      "license": "MIT"
    },
    "node_modules/jsonwebtoken": {
      "version": "9.0.3",
      "resolved": "https://registry.npmjs.org/jsonwebtoken/-/jsonwebtoken-9.0.3.tgz",
      "integrity": "sha512-MT/xP0CrubFRNLNKvxJ2BYfy53Zkm++5bX9dtuPbqAeQpTVe0MQTFhao8+Cp//EmJp244xt6Drw/GVEGCUj40g==",
      "license": "MIT",
      "dependencies": {
        "jws": "^4.0.1",
        "lodash.includes": "^4.3.0",
        "lodash.isboolean": "^3.0.3",
        "lodash.isinteger": "^4.0.4",
        "lodash.isnumber": "^3.0.3",
        "lodash.isplainobject": "^4.0.6",
        "lodash.isstring": "^4.0.1",
        "lodash.once": "^4.0.0",
        "ms": "^2.1.1",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": ">=12",
        "npm": ">=6"
      }
    },
    "node_modules/jwa": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/jwa/-/jwa-2.0.1.tgz",
      "integrity": "sha512-hRF04fqJIP8Abbkq5NKGN0Bbr3JxlQ+qhZufXVr0DvujKy93ZCbXZMHDL4EOtodSbCWxOqR8MS1tXA5hwqCXDg==",
      "license": "MIT",
      "dependencies": {
        "buffer-equal-constant-time": "^1.0.1",
        "ecdsa-sig-formatter": "1.0.11",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/jws": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/jws/-/jws-4.0.1.tgz",
      "integrity": "sha512-EKI/M/yqPncGUUh44xz0PxSidXFr/+r0pA70+gIYhjv+et7yxM+s29Y+VGDkovRofQem0fs7Uvf4+YmAdyRduA==",
      "license": "MIT",
      "dependencies": {
        "jwa": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "node_modules/lodash.includes": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.includes/-/lodash.includes-4.3.0.tgz",
      "integrity": "sha512-W3Bx6mdkRTGtlJISOvVD/lbqjTlPPUDTMnlXZFnVwi9NKJ6tiAk6LVdlhZMm17VZisqhKcgzpO5Wz91PCt5b0w==",
      "license": "MIT"
    },
    "node_modules/lodash.isboolean": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isboolean/-/lodash.isboolean-3.0.3.tgz",
      "integrity": "sha512-Bz5mupy2SVbPHURB98VAcw+aHh4vRV5IPNhILUCsOzRmsTmSQ17jIuqopAentWoehktxGd9e/hbIXq980/1QJg==",
      "license": "MIT"
    },
    "node_modules/lodash.isinteger": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/lodash.isinteger/-/lodash.isinteger-4.0.4.tgz",
      "integrity": "sha512-DBwtEWN2caHQ9/imiNeEA5ys1JoRtRfY3d7V9wkqtbycnAmTvRRmbHKDV4a0EYc678/dia0jrte4tjYwVBaZUA==",
      "license": "MIT"
    },
    "node_modules/lodash.isnumber": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/lodash.isnumber/-/lodash.isnumber-3.0.3.tgz",
      "integrity": "sha512-QYqzpfwO3/CWf3XP+Z+tkQsfaLL/EnUlXWVkIk5FUPc4sBdTehEqZONuyRt2P67PXAk+NXmTBcc97zw9t1FQrw==",
      "license": "MIT"
    },
    "node_modules/lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==",
      "license": "MIT"
    },
    "node_modules/lodash.isstring": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/lodash.isstring/-/lodash.isstring-4.0.1.tgz",
      "integrity": "sha512-0wJxfxH1wgO3GrbuP+dTTk7op+6L41QCXbGINEmD+ny/G/eCqGzxyCsh7159S+mgDDcoarnBw6PC1PS5+wUGgw==",
      "license": "MIT"
    },
    "node_modules/lodash.once": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.once/-/lodash.once-4.1.1.tgz",
      "integrity": "sha512-Sb487aTOCr9drQVL8pIxOzVhafOjZN9UU54hiN8PU3uAiSV7lx1yYNpbNmex2PK6dSJoNTSJUUswT651yww3Mg==",
      "license": "MIT"
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/media-typer": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/merge-descriptors": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/mime-db": {
      "version": "1.54.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz",
      "integrity": "sha512-Lbgzdk0h4juoQ9fCKXW4by0UJqj+nOOrI9MJ1sSj4nI8aI2eo1qmvQEie4VD1glsS250n15LsWsYtCugiStS5A==",
      "license": "MIT",
      "dependencies": {
        "mime-db": "^1.54.0"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "license": "MIT"
    },
    "node_modules/negotiator": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/node-addon-api": {
      "version": "8.5.0",
      "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-8.5.0.tgz",
      "integrity": "sha512-/bRZty2mXUIFY/xU5HLvveNHlswNJej+RnxBjOMkidWfwZzgTbPG1E3K5TOxRLOR+5hX7bSofy8yf1hZevMS8A==",
      "license": "MIT",
      "engines": {
        "node": "^18 || ^20 || >= 21"
      }
    },
    "node_modules/node-gyp-build": {
      "version": "4.8.4",
      "resolved": "https://registry.npmjs.org/node-gyp-build/-/node-gyp-build-4.8.4.tgz",
      "integrity": "sha512-LA4ZjwlnUblHVgq0oBF3Jl/6h/Nvs5fzBLwdEF4nuxnFdsfajde4WfxtJr3CaiH+F6ewcIB/q4jQ4UzPyid+CQ==",
      "license": "MIT",
      "bin": {
        "node-gyp-build": "bin.js",
        "node-gyp-build-optional": "optional.js",
        "node-gyp-build-test": "build-test.js"
      }
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/on-finished": {
      "version": "2.4.1",
      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
      "license": "MIT",
      "dependencies": {
        "ee-first": "1.1.1"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/parseurl": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/path-to-regexp": {
      "version": "8.3.0",
      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.3.0.tgz",
      "integrity": "sha512-7jdwVIRtsP8MYpdXSwOS0YdD0Du+qOoF/AEPIt88PcCFrZCzx41oxku1jD88hZBwbNUIEfpqvuhjFaMAqMTWnA==",
      "license": "MIT",
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/pg": {
      "version": "8.16.3",
      "resolved": "https://registry.npmjs.org/pg/-/pg-8.16.3.tgz",
      "integrity": "sha512-enxc1h0jA/aq5oSDMvqyW3q89ra6XIIDZgCX9vkMrnz5DFTw/Ny3Li2lFQ+pt3L6MCgm/5o2o8HW9hiJji+xvw==",
      "license": "MIT",
      "dependencies": {
        "pg-connection-string": "^2.9.1",
        "pg-pool": "^3.10.1",
        "pg-protocol": "^1.10.3",
        "pg-types": "2.2.0",
        "pgpass": "1.0.5"
      },
      "engines": {
        "node": ">= 16.0.0"
      },
      "optionalDependencies": {
        "pg-cloudflare": "^1.2.7"
      },
      "peerDependencies": {
        "pg-native": ">=3.0.1"
      },
      "peerDependenciesMeta": {
        "pg-native": {
          "optional": true
        }
      }
    },
    "node_modules/pg-cloudflare": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/pg-cloudflare/-/pg-cloudflare-1.2.7.tgz",
      "integrity": "sha512-YgCtzMH0ptvZJslLM1ffsY4EuGaU0cx4XSdXLRFae8bPP4dS5xL1tNB3k2o/N64cHJpwU7dxKli/nZ2lUa5fLg==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/pg-connection-string": {
      "version": "2.9.1",
      "resolved": "https://registry.npmjs.org/pg-connection-string/-/pg-connection-string-2.9.1.tgz",
      "integrity": "sha512-nkc6NpDcvPVpZXxrreI/FOtX3XemeLl8E0qFr6F2Lrm/I8WOnaWNhIPK2Z7OHpw7gh5XJThi6j6ppgNoaT1w4w==",
      "license": "MIT"
    },
    "node_modules/pg-int8": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/pg-int8/-/pg-int8-1.0.1.tgz",
      "integrity": "sha512-WCtabS6t3c8SkpDBUlb1kjOs7l66xsGdKpIPZsg4wR+B3+u9UAum2odSsF9tnvxg80h4ZxLWMy4pRjOsFIqQpw==",
      "license": "ISC",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/pg-pool": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/pg-pool/-/pg-pool-3.10.1.tgz",
      "integrity": "sha512-Tu8jMlcX+9d8+QVzKIvM/uJtp07PKr82IUOYEphaWcoBhIYkoHpLXN3qO59nAI11ripznDsEzEv8nUxBVWajGg==",
      "license": "MIT",
      "peerDependencies": {
        "pg": ">=8.0"
      }
    },
    "node_modules/pg-protocol": {
      "version": "1.10.3",
      "resolved": "https://registry.npmjs.org/pg-protocol/-/pg-protocol-1.10.3.tgz",
      "integrity": "sha512-6DIBgBQaTKDJyxnXaLiLR8wBpQQcGWuAESkRBX/t6OwA8YsqP+iVSiond2EDy6Y/dsGk8rh/jtax3js5NeV7JQ==",
      "license": "MIT"
    },
    "node_modules/pg-types": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/pg-types/-/pg-types-2.2.0.tgz",
      "integrity": "sha512-qTAAlrEsl8s4OiEQY69wDvcMIdQN6wdz5ojQiOy6YRMuynxenON0O5oCpJI6lshc6scgAY8qvJ2On/p+CXY0GA==",
      "license": "MIT",
      "dependencies": {
        "pg-int8": "1.0.1",
        "postgres-array": "~2.0.0",
        "postgres-bytea": "~1.0.0",
        "postgres-date": "~1.0.4",
        "postgres-interval": "^1.1.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/pgpass": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/pgpass/-/pgpass-1.0.5.tgz",
      "integrity": "sha512-FdW9r/jQZhSeohs1Z3sI1yxFQNFvMcnmfuj4WBMUTxOrAyLMaTcE1aAMBiTlbMNaXvBCQuVi0R7hd8udDSP7ug==",
      "license": "MIT",
      "dependencies": {
        "split2": "^4.1.0"
      }
    },
    "node_modules/postgres-array": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/postgres-array/-/postgres-array-2.0.0.tgz",
      "integrity": "sha512-VpZrUqU5A69eQyW2c5CA1jtLecCsN2U/bD6VilrFDWq5+5UIEVO7nazS3TEcHf1zuPYO/sqGvUvW62g86RXZuA==",
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/postgres-bytea": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/postgres-bytea/-/postgres-bytea-1.0.0.tgz",
      "integrity": "sha512-xy3pmLuQqRBZBXDULy7KbaitYqLcmxigw14Q5sj8QBVLqEwXfeybIKVWiqAXTlcvdvb0+xkOtDbfQMOf4lST1w==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/postgres-date": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/postgres-date/-/postgres-date-1.0.7.tgz",
      "integrity": "sha512-suDmjLVQg78nMK2UZ454hAG+OAW+HQPZ6n++TNDUX+L0+uUlLywnoxJKDou51Zm+zTCjrCl0Nq6J9C5hP9vK/Q==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/postgres-interval": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/postgres-interval/-/postgres-interval-1.2.0.tgz",
      "integrity": "sha512-9ZhXKM/rw350N1ovuWHbGxnGh/SNJ4cnxHiM0rxE4VN41wsg8P8zWn9hv/buK00RP4WvlOyr/RBDiptyxVbkZQ==",
      "license": "MIT",
      "dependencies": {
        "xtend": "^4.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/proxy-addr": {
      "version": "2.0.7",
      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
      "license": "MIT",
      "dependencies": {
        "forwarded": "0.2.0",
        "ipaddr.js": "1.9.1"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/qs": {
      "version": "6.14.0",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.14.0.tgz",
      "integrity": "sha512-YWWTjgABSKcvs/nWBi9PycY/JiPJqOD4JA6o9Sej2AtvSGarXxKC3OQSk4pAarbdQlKAh5D4FCQkJNkW+GAn3w==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/range-parser": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/raw-body": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz",
      "integrity": "sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==",
      "license": "MIT",
      "dependencies": {
        "bytes": "~3.1.2",
        "http-errors": "~2.0.1",
        "iconv-lite": "~0.7.0",
        "unpipe": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.10"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/router": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.4.0",
        "depd": "^2.0.0",
        "is-promise": "^4.0.0",
        "parseurl": "^1.3.3",
        "path-to-regexp": "^8.0.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/safe-buffer": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
      "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.7.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.3.tgz",
      "integrity": "sha512-SdsKMrI9TdgjdweUSR9MweHA4EJ8YxHn8DFaDisvhVlUOe4BF1tLD7GAj0lIqWVl+dPb/rExr0Btby5loQm20Q==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/send": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/send/-/send-1.2.0.tgz",
      "integrity": "sha512-uaW0WwXKpL9blXE2o0bRhoL2EGXIrZxQ2ZQ4mgcfoBxdFmQold+qWsD2jLrfZ0trjKL6vOw0j//eAwcALFjKSw==",
      "license": "MIT",
      "dependencies": {
        "debug": "^4.3.5",
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "etag": "^1.8.1",
        "fresh": "^2.0.0",
        "http-errors": "^2.0.0",
        "mime-types": "^3.0.1",
        "ms": "^2.1.3",
        "on-finished": "^2.4.1",
        "range-parser": "^1.2.1",
        "statuses": "^2.0.1"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/serve-static": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.0.tgz",
      "integrity": "sha512-61g9pCh0Vnh7IutZjtLGGpTA355+OPn2TyDv/6ivP2h/AdAVX9azsoxmg2/M6nZeQZNYBEwIcsne1mJd9oQItQ==",
      "license": "MIT",
      "dependencies": {
        "encodeurl": "^2.0.0",
        "escape-html": "^1.0.3",
        "parseurl": "^1.3.3",
        "send": "^1.2.0"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/setprototypeof": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
      "license": "ISC"
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/split2": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/split2/-/split2-4.2.0.tgz",
      "integrity": "sha512-UcjcJOWknrNkF6PLX83qcHM6KHgVKNkV62Y8a5uYDVv9ydGQVwAHMKqHdJje1VTWpljG0WYpCDhrCdAOYH4TWg==",
      "license": "ISC",
      "engines": {
        "node": ">= 10.x"
      }
    },
    "node_modules/statuses": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/toidentifier": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
      "license": "MIT",
      "engines": {
        "node": ">=0.6"
      }
    },
    "node_modules/tsx": {
      "version": "4.21.0",
      "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.21.0.tgz",
      "integrity": "sha512-5C1sg4USs1lfG0GFb2RLXsdpXqBSEhAaA/0kPL01wxzpMqLILNxIxIOKiILz+cdg/pLnOUxFYOR5yhHU666wbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "~0.27.0",
        "get-tsconfig": "^4.7.5"
      },
      "bin": {
        "tsx": "dist/cli.mjs"
      },
      "engines": {
        "node": ">=18.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      }
    },
    "node_modules/type-is": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.0.1.tgz",
      "integrity": "sha512-OZs6gsjF4vMp32qrCbiVSkrFmXtG/AZhY3t0iAMrMBiAZyV9oALtXO8hsrHbMXF9x6L3grlFuwW2oAz7cav+Gw==",
      "license": "MIT",
      "dependencies": {
        "content-type": "^1.0.5",
        "media-typer": "^1.1.0",
        "mime-types": "^3.0.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "7.16.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.16.0.tgz",
      "integrity": "sha512-Zz+aZWSj8LE6zoxD+xrjh4VfkIG8Ya6LvYkZqtUQGJPZjYl53ypCaUwWqo7eI0x66KBGeRo+mlBEkMSeSZ38Nw==",
      "license": "MIT"
    },
    "node_modules/unpipe": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/vary": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "license": "ISC"
    },
    "node_modules/xtend": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.4"
      }
    }
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\server\package.json`

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "tsx src/index.ts",
    "build": "tsc",
    "start": "ts-node --transpile-only src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/cookie-parser": "^1.4.10",
    "bcrypt": "^6.0.0",
    "cookie-parser": "^1.4.7",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "pg": "^8.16.3"
  },
  "devDependencies": {
    "@types/bcrypt": "^6.0.0",
    "@types/cors": "^2.8.19",
    "@types/express": "^5.0.6",
    "@types/jsonwebtoken": "^9.0.10",
    "@types/node": "^25.0.2",
    "@types/pg": "^8.16.0",
    "tsx": "^4.21.0",
    "typescript": "^5.9.3"
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\server\services\db\index.ts`

```typescript
import pkg from "pg";

const { Pool } = pkg;

const PGUSER = process.env.PGUSER || "postgres";
const PGPASSWORD = process.env.PGPASSWORD || "password";
const PGHOST = process.env.PGHOST || "localhost";
const PGPORT = process.env.PGPORT || "5432";
const PGDATABASE = process.env.PGDATABASE || "project name";

const connectionString = process.env.DATABASE_URL ? process.env.DATABASE_URL : `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`;

export const db = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

const dbName = process.env.DATABASE_URL ? new URL(process.env.DATABASE_URL).pathname.substring(1) : PGDATABASE;

console.log(`Using database ${dbName}`);
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\server\services\db\initDB.ts`

```typescript
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { db } from "./index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function initDB() {
  try {
    const schemaPath = path.resolve(__dirname, "../../database/script/schema.sql");

    const schema = readFileSync(schemaPath, "utf-8");

    const client = await db.connect();

    try {
      await client.query(schema);
      console.log("Base de données initialisée avec toutes les tables");
    } finally {
      client.release();
    }
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "42710") {
      console.log("Base de données initialisée avec toutes les tables (type ENUM déjà existant)");
      return;
    }
    console.error("Erreur lors de l'initialisation de la base :", error);
  }
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\server\services\index.ts`

```typescript
export { db } from "./db/index.js";
export { initDB } from "./db/initDB.js";
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\server\src\index.ts`

```typescript
import cors from "cors";
import "dotenv/config";
import type { NextFunction, Request, Response } from "express";
import express from "express";
import { db } from "../services/db/index.js";
import { initDB } from "../services/db/initDB.js";
import apiRoutes from "./routes/api.js";

const app = express();
const PORT = process.env.SERVER_PORT || 3310;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use("/api", apiRoutes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).send("Erreur serveur");
});

db.query("SELECT 1")
  .then(async () => {
    const dbName = process.env.DATABASE_URL ? new URL(process.env.DATABASE_URL).pathname.substring(1) : process.env.PGDATABASE;

    console.log(`
=========================
🟢 DATABASE
=========================
`);
    console.log(`Using database ${dbName}`);

    try {
      await initDB();

      console.log(`Connexion réussie à la base ${dbName}`);

      if (process.env.NODE_ENV === "development") {
        console.log("PGUSER:", process.env.PGUSER);
        console.log("PGDATABASE:", process.env.PGDATABASE);
        console.log("PGHOST:", process.env.PGHOST);
        console.log("PGPORT:", process.env.PGPORT);
        console.log("PGPASSWORD: 🔒");
      }

      app.listen(PORT, () => {
        console.log(`
=========================
🟢 SERVER
=========================
`);
        console.log(`Serveur lancé sur http://localhost:${PORT}`);
      });
    } catch (err: unknown) {
      console.error("🔴 Erreur init DB:", (err as Error).message);
      process.exit(1);
    }
  })
  .catch((err: unknown) => {
    console.error("Erreur de connexion PostgreSQL :", err);
    process.exit(1);
  });
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\server\src\routes\api.ts`

```typescript
import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "API prête" });
});

export default router;
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\server\tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "lib": ["ES2022"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "composite": true
  },
  "include": ["src", "services"]
}
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\setup\constants.ts`

```typescript
// Importez simplement `constants` où vous en avez besoin pour garantir une cohérence et faciliter la maintenance.
// import { constants } from "../../../../setup/constants"

export const constants = {
  ROOT_FOLDER_NAME: "GOUYON Cédric",
  APP_NAME: "GOUYON Cédric",

  DEFAULT_USER_NAME: "utilisateur",
  DEFAULT_AVATAR: "/images/avatar_profil.png",

  ROUTE_HOME: "/",
  ROUTE_LOGIN: "/login",
  ROUTE_AUTH: "/auth",
  ROUTE_DASHBOARD: "/dashboard",
  ROUTE_CONTACT: "/contact",

  TEXT_WELCOME: "Bienvenue",
  TEXT_LOGOUT: "Se déconnecter",
  TEXT_LOGIN: "Se connecter",
  TEXT_SEARCH_PLACEHOLDER: "Rechercher...",

  DEFAULT_LANGUAGE: "fr",
  DEFAULT_THEME: "light",
  DEFAULT_TIMEOUT: 10000,
  DEFAULT_PAGE_SIZE: 10,

  API_BASE_URL: "http://localhost:3310/api",
  API_AUTH_ENDPOINT: "/auth",
};
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\setup\update-package-name.js`

```javascript
import fs from "node:fs";
import path from "node:path";

const rootFolderName = path.basename(path.resolve());

const constantsPath = path.resolve("setup/constants.ts");
if (fs.existsSync(constantsPath)) {
  let constantsContent = fs.readFileSync(constantsPath, "utf8");

  if (constantsContent.includes("PENDING_GENERATION")) {
    constantsContent = constantsContent.replace(/PENDING_GENERATION/g, rootFolderName);
    fs.writeFileSync(constantsPath, constantsContent);
    console.log(`🟢 constants.ts mis à jour avec : ${rootFolderName}`);
  } else {
    console.log("🔴 Aucune occurrence 'PENDING_GENERATION' trouvée dans constants.ts");
  }
} else {
  console.log("🔴 Fichier constants.ts introuvable");
}

function updateEnv(envPath) {
  if (fs.existsSync(envPath)) {
    let envContent = fs.readFileSync(envPath, "utf8");

    if (/PGDATABASE=/.test(envContent)) {
      envContent = envContent.replace(/PGDATABASE=.*/, `PGDATABASE=${rootFolderName}`);
    } else {
      envContent += `\nPGDATABASE=${rootFolderName}`;
    }

    fs.writeFileSync(envPath, envContent);
    console.log(`🟢 ${envPath} mis à jour avec PGDATABASE=${rootFolderName}`);
  } else {
    console.log(`🔴 Aucun fichier .env trouvé à ${envPath}`);
  }
}

updateEnv(path.resolve("server/.env"));
updateEnv(path.resolve("client/.env"));
updateEnv(path.resolve(".env"));

console.log("🟢 Mise à jour terminée.");
```

### `C:\Users\Cédric\Desktop\LOCAL\gouyon-cedric\tsconfig.json`

```json
{
  "files": [],
  "references": [{ "path": "./client" }, { "path": "./server" }],
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "lib": ["ES2022"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": "."
  }
}
```
