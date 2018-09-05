# node.ts

This a very basic startup project with `Node.js`, `ES7` and `Typescript`. Prepared for Linux environment.

Extra features:
- Dependency Injection (in `./src/IoC`) with samples
- Local environment variables (in `.env`)
- Command line arguments parser (`StartupArgs` class)
- Some convenient commands (look at `package.json` `scripts` section)
- Test samples (`jest` inside)
- `async/await` included, `axios` on board
- Extra services: `Logger`, `Environment` and `RunMode`

## Before start

Use `npm i` to install local packages. Use `npm run preinstall` to install global packages.

Add `.env`. You can based on `.env.example`.

## Where to start?

In `Main.ts`, `Run()` method. This is the place for your code. Put all dependencies in a constructor (don't forget to add them to IoC `./src/IoC/IoC.ts` and optionally to `Types.ts`).

Use `npm run serve` to build and run your code continuously.

## How to call program with args?

Just call it directly: `startup.js`
Don't do it by npm scripts like `npm run run -- --foo bar`. It may not work.

## How to make this program executable?

Add `#!/usr/bin/env node` at the very begining on main faile (`startup.ts`).
Then call `sudo chmod u+x ./bin/startup.js`.
Now you can use your script like regular program. You can call it with `./startup`. No `node startup.js` needed.