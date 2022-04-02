# Robodex API

Backend API for the [Robodex web app](https://github.com/jhainavarro/robodex)

---

## Tech Stack / Libraries

- TypeScript
- NestJS
- TypeORM
- PostgreSQL

---

## Usage

### Get all robots

```
GET /robots
```

_Response:_

```js
[
  {
    guid: string;
    name: string;
    purpose: string;
    avatarUrl: string;
  },
  ...
]
```

### Get a single robot

```
GET /robots/:guid
```

_Response:_

```js
{
  guid: string;
  name: string;
  purpose: string;
  avatarUrl: string;
}
```

### Add a new robot

```
POST /robots
```

_Request:_

```js
{
  name: string;
  purpose: string;
  avatarUrl: string;
}
```

_Response:_

```js
{
  guid: string;
  name: string;
  purpose: string;
  avatarUrl: string;
}
```

### Update robot's details

```
PATCH /robots/:guid
```

_Request:_

```js
{
  guid: string;
  name: string;
  purpose: string;
  avatarUrl: string;
}
```

_Response:_

```js
{
  guid: string;
  name: string;
  purpose: string;
  avatarUrl: string;
}
```

### Delete a single robot

```
DELETE /robots/:guid
```

---

## Contributing

### Setup

**To avoid conflicts, please use `yarn` as your package manager.**

```bash
$ yarn install
```

### Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

### Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

---

## To Do

- [ ] Validation + error handling
- [ ] Docs
- [ ] Authentication
- [ ] Unit tests
- [ ] Deployment pipeline
- [ ] ...
