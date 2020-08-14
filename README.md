# greenfield-starter

Starter kit for any green field project. It comes with

- [`strapi`](http://strapi.io/) backend
- `mongodb` database
- `react` frontend with [`antd`](https://ant.design/) and [`tailwindcss`](https://tailwindcss.com/) setup

Out of the box support for

- User authentication (both server and client)
- GraphQL support

## Prequisites

- [`docker`](https://docs.docker.com/engine/install/)
- [`docker-compose`](https://docs.docker.com/compose/install/)

## Setup

To start all the 3 dockers (database, server and client) use

```
[sudo] docker-compose up
```

To install any package in the `client`, start the `docker` shell

```
[sudo] docker-compose exec client sh
```

It would open the shell and you can then install any dependency using `npm` or `yarn`
