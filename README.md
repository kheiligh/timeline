# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@1.7.0 create --template minimal --types ts --install npm .
```

## Adding features

Add features to your project with `sv add`:

```sh
npx sv add
```

For example, to add Tailwind CSS:

```sh
npx sv add tailwindcss
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Testing

```sh
npm run test:unit   # Vitest: data lookups, history rules, page metadata (fast)
npm run test:e2e    # Playwright: builds the site, then drives it at desktop and phone sizes
npm test            # both
npm run check       # type check
```

Unit tests sit next to the code they cover (`*.test.ts` under `src/`); browser tests are in `tests/`.
If Playwright's own browser isn't installed, point it at another Chromium with
`PLAYWRIGHT_CHROMIUM_PATH=/path/to/chrome npm run test:e2e`.

## Event links

Every event has a shareable address, `/event/<id>`, where the id is the one in `src/lib/data/events/`.
Those ids are now public: if one ever has to change, add the old id to `src/lib/data/redirects.ts`
so existing links keep working.
