# Template React Native TypeScript

## Prerequisites

- Download extension **ESLint** and **Prettier - Code formatter** in your VSCode.

- **(Required for MacOSX):** Run this to give permission husky to run pre-commit hook.

```bash
$ chmod ug+x .husky/*
$ chmod ug+x .git/hooks/*
```

- **(Optional):** Do this if you are using `nvm`.

```bash
$ nvm use
```

- Install Dependencies.

```bash
$ yarn
```

- Create `.env` file for environment variables. `.env-sample` are the required environment variables.
- Run in **development** mode.

Run in **android**

```bash
$ yarn android
```

Run in **ios**

```bash
$ yarn ios
```
