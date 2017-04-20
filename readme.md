[![Chat](https://img.shields.io/gitter/room/node-steam/id.svg?style=flat-square)](https://gitter.im/node-steam/id)
[![Travis CI](https://img.shields.io/travis/node-steam/id.svg?style=flat-square)](https://travis-ci.org/node-steam/id)
[![Dependencies](https://img.shields.io/david/node-steam/id.svg?style=flat-square)](https://david-dm.org/node-steam/id)
[![Version](https://img.shields.io/npm/v/@node-steam/id.svg?style=flat-square)](https://www.npmjs.com/package/@node-steam/id)
[![Downloads](https://img.shields.io/npm/dt/@node-steam/id.svg?style=flat-square)](https://www.npmjs.com/package/@node-steam/id)
[![License](https://img.shields.io/github/license/node-steam/id.svg?style=flat-square)](https://www.npmjs.com/package/@node-steam/id)
[![Runkit](https://img.shields.io/badge/try%20on%20runkit-id-blue.svg?style=flat-square)](https://runkit.com/npm/@node-steam/id)

[![npm statistics](https://nodei.co/npm/@node-steam/id.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@node-steam/id)

**ID** is a module to make [SteamID](https://developer.valvesoftware.com/wiki/SteamID) usage and conversion easy using Typescript.

> Heavily inspired by [node-steamid](https://github.com/DoctorMcKay/node-steamid)
>
> (`<= v1.0.0` can be used as a drop-in replacement)

## Overview

A SteamID is made up of four parts: it's **Universe**, it's **Type**, it's **Instance**, and it's **Account ID**.

- **Universe**: Currently, there are 5 universes. A universe is a unique instance of Steam. You'll probably only be interacting with the public universe, which is the regular Steam. Only Valve employees can access non-public universes.
  > We provide a **[enum](src/enums.ts#L4-L10)**  for all available universes

- **Type**: A SteamID's type determines what it identifies. The most common type is `INDIVIDUAL`, for user accounts. There are also other types such as `CLAN` (Steam groups), `GAMESERVER`, and more.
  > We provide a **[enum](src/enums.ts#L15-L27)**  for all available types

- **Instance**: The instance ID isn't usually used.
  > We provide a **[enum](src/enums.ts#L32-L37)**  for all available instances

- **Account ID**: This represents a unique account of the persona

## Installation

You can install **ID** through the command line by using the following command:

```
yarn add @node-steam/id
```

## Usage:

```javascript
import * as SteamID from '@node-steam/id';

// or

import {
    fromAccountID,
    ID,
    Instance,
    Type,
    Universe,
} from '@node-steam/id';
```

## Creation
You can create a SteamID object from a SteamID2, a SteamID3, a SteamID64, a Account ID or from the four parts that make up a SteamID:


#### SteamID2

```javascript
const id = new ID('STEAM_0:0:11101');
```

#### SteamID3

```javascript
const id = new ID('[U:1:22202]');
```

#### SteamID64

```javascript
const id = new ID('76561197960287930');
```

#### Parts

```javascript
const id     = new ID();
id.universe  = Universe.PUBLIC;
id.type      = Type.INDIVIDUAL;
id.instance  = Instance.DESKTOP;
id.accountid = 22202;
```

#### AccountID

```js
const id = fromAccountID(22202);
```

## Documentation:

> **[Generated Documentation](https://node-steam.github.io/id/)**

#### `new ID(id?: string)`
> API class

#### `ID.isValid()`
> Check whether the ID is valid or not

```javascript
const id = new ID('76561197960287930');

id.isValid();

> true
```

#### `ID.isGroupChat()`
> Check whether the ID is tied to a steam groupchat or not

```javascript
const id = new ID('76561197960287930');

id.isGroupChat();

> false
```

#### `ID.isLobby()`
> Check whether the ID is a steam lobby or not

```javascript
const id = new ID('76561197960287930');

id.isLobby();

> false
```

#### `ID.getSteamID2(format?: boolean)`
> Render the ID in the Steam2 format
>
> Aliases: `get2, steam2, getSteam2RenderedID`

```javascript
const id = new ID('76561197960287930');

id.getSteamID2();

> 'STEAM_0:0:11101'
```

#### `ID.getSteamID3()`
> Render the ID in the Steam3 format
>
> Aliases: `get3, steam3, getSteam3RenderedID`

```javascript
const id = new ID('76561197960287930');

id.getSteamID3();

> '[U:1:22202]'
```

#### `ID.getSteamID64()`
> Render the ID in the 64-bit format
>
> Aliases: `get64, steam64`

```javascript
const id = new ID('STEAM_0:0:11101');

id.getSteamID64();

> '76561197960287930'
```

#### `fromAccountID(id: number)`
> Create a ID object from an individual account ID
>
> Aliases: `fromIndividualAccountID`

```javascript
const id = fromAccountID(22202);

id.getSteamID64();

> '76561197960287930'
```

#### `ID.getUniverse()`
> Returns the Universe of the current ID

```javascript
const id = new ID('76561197960287930');

id.getUniverse();

> 'PUBLIC'
```

#### `ID.getType()`
> Returns the Type of the current ID

```javascript
const id = new ID('76561197960287930');

id.getType();

> 'INDIVIDUAL'
```

#### `ID.getInstance()`
> Returns the Instance of the current ID

```javascript
const id = new ID('76561197960287930');

id.getInstance();

> 'DESKTOP'
```

#### `ID.getUniverseID() | ID.universe`
> Returns the Universe ID of the current ID

```javascript
const id = new ID('76561197960287930');

id.getUniverseID();

// or

id.universe;

> 1
```

#### `ID.getTypeID() | ID.type`
> Returns the Type ID of the current ID

```javascript
const id = new ID('76561197960287930');

id.getTypeID();

// or

id.type;

> 1
```

#### `ID.getInstanceID() | ID.instance`
> Returns the Instance ID of the current ID

```javascript
const id = new ID('76561197960287930');

id.getInstanceID();

// or

id.instance;

> 1
```

#### `ID.getAccountID() | ID.accountid`
> Returns the Account ID of the current ID

```javascript
const id = new ID('76561197960287930');

id.getAccountID();

// or

id.accountid;

> 22202
```

#### `ID.getFormat() | ID.format`
> Returns the format that was used to generate the current ID

```javascript
const id = new ID('76561197960287930');

id.getFormat();

// or

id.format;

> 'steam64'
```

## Differences from [node-steam](https://github.com/DoctorMcKay/node-steamid)

 - ES6 // Typescript syntax
 - Typescript definitions
 - `cuint` definitions
 - More `getters`
 - Modern ES6 tests

> (Basically there is no real need to switch - the definitions were just needed for other related projects)
>
> It is currently backward-compatible // works as drop-in replacement but the compatibility code will be removed in future versions!

## Contributors

- Silas Rech aka. **[lenovouser](mailto:silas.rech@protonmail.com)**

## Contributing:

Interested in contributing to **ID**? Contributions are welcome, and are accepted via pull requests. Please [review these guidelines](contributing.md) before submitting any pull requests.

### Help:

**Installing dependencies:**

```
yarn
```

**Compile:**

```
yarn compile
```

**Test:**

```
yarn test
```

**Generate Docs:**

```
yarn docs
```

## Tests:

This module is thoroughly tested with **[ava](https://github.com/avajs/ava)**

## License:
Code licensed under [MIT](license.md), documentation under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
