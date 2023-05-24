# Template React Native TypeScript

## Prerequisites

- Download extension **ESLint** and **Prettier ESLint** in your VSCode.
- Install **node** >= 16.13.0
- Install **pnpm** >= 7.17.0

- **(Required for MacOSX):** Run this to give permission husky to run pre-commit hook.

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```

- **(Optional):** Do this if you are using **nvm**.

```bash
nvm use # For MacOSX and Linux
nvm use $(cat .nvmrc) # For windows (Git Bash)
```

- Create `.env` file.
- and refer to the `<secret-name>.example` for the required variables.

- Install dependencies.

```bash
pnpm i
```

**Development Mode:**

```bash
pnpm dev:android | pnpm dev:ios
```
