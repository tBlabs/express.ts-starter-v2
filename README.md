## This is good but...

I tried to make architecture of this app similar to typical .NET Core WebAPI and I believe I reached the goal some way:
- we have an `IoC Container` with `request scope`
- code is splitted into modules called functionalities (this is kind of `Project` in .NET `Solution`)
What's more:
- CQRS is default approach for API, this simplifies almost everything, testing especially
But:
- we are not able to write .NET style e2e tests with http client (but we don't need it anyway cause it's sufficient to test handlers unitly); but we still can write e2e tests (with running host)
And:
- few problems is still not solved, like: middlewares attaching etc (probably we just need to do it maually in a `Host` class)

## Project structure

- Write your buiseness logic in `Functionalities` folder
- Configure module in `Config` file - this is a place for MessageBus and Container configuration. (MessageBus need to be configured in a specific way because it's a Typescript and it has it's own limitations)
- Attach functionality Config to `Startup` file and Message Bus config to `Main.ConfigureMessageBus`



## Config

`.env` for host `PORT` is required.