/* tslint:disable object-literal-sort-keys */

import test from 'ava';

import {
    ChatInstanceFlags,
    fromAccountID,
    ID,
    Instance,
    Type,
    Universe,
} from 'lib';

const gaben = {
    id64: '76561197960287930',
    accountid: 22202,
    steam2: {
        universe0: 'STEAM_0:0:11101',
        universe1: 'STEAM_1:0:11101',
    },
    steam3: '[U:1:22202]',
};

interface BaseCheckObject {
    universe: Universe;
    type: Type;
    instance: Instance;
    accountid: number;
    format: string;
}

test('Parameterless construction', (t) => {
    const should: BaseCheckObject = {
        universe:  Universe.INVALID,
        type:      Type.INVALID,
        instance:  Instance.ALL,
        accountid: 0,
        format:    'none',
    };

    const id = new ID();

    const object: BaseCheckObject = {
        universe:  id.universe,
        type:      id.type,
        instance:  id.instance,
        accountid: id.accountid,
        format:    id.format,
    };

    t.deepEqual(object, should);
    t.false(id.isValid(), 'ID should not be valid');
});

test('fromAcccountID construction', (t) => {
    const should: BaseCheckObject = {
        universe:  Universe.PUBLIC,
        type:      Type.INDIVIDUAL,
        instance:  Instance.DESKTOP,
        accountid: gaben.accountid,
        format:    'accountid',
    };

    const id = fromAccountID(gaben.accountid);

    const object: BaseCheckObject = {
        universe:  id.universe,
        type:      id.type,
        instance:  id.instance,
        accountid: id.accountid,
        format:    id.format,
    };

    t.deepEqual(object, should);
    t.true(id.isValid(), 'ID should be valid');
});

test('Steam2ID construction | Universe 0', (t) => {
    const should: BaseCheckObject = {
        universe:  Universe.PUBLIC,
        type:      Type.INDIVIDUAL,
        instance:  Instance.DESKTOP,
        accountid: gaben.accountid,
        format:    'steam2',
    };

    const id = new ID(gaben.steam2.universe0);

    const object: BaseCheckObject = {
        universe:  id.universe,
        type:      id.type,
        instance:  id.instance,
        accountid: id.accountid,
        format:    id.format,
    };

    t.deepEqual(object, should);
    t.true(id.isValid(), 'ID should be valid');
});

test('Steam2ID construction | Universe 1', (t) => {
    const should: BaseCheckObject = {
        universe:  Universe.PUBLIC,
        type:      Type.INDIVIDUAL,
        instance:  Instance.DESKTOP,
        accountid: gaben.accountid,
        format:    'steam2',
    };

    const id = new ID(gaben.steam2.universe1);

    const object: BaseCheckObject = {
        universe:  id.universe,
        type:      id.type,
        instance:  id.instance,
        accountid: id.accountid,
        format:    id.format,
    };

    t.deepEqual(object, should);
    t.true(id.isValid(), 'ID should be valid');
});

test('Steam3ID construction | Individual', (t) => {
    const should: BaseCheckObject = {
        universe:  Universe.PUBLIC,
        type:      Type.INDIVIDUAL,
        instance:  Instance.DESKTOP,
        accountid: gaben.accountid,
        format:    'steam3',
    };

    const id = new ID(gaben.steam3);

    const object: BaseCheckObject = {
        universe:  id.universe,
        type:      id.type,
        instance:  id.instance,
        accountid: id.accountid,
        format:    id.format,
    };

    t.deepEqual(object, should);
    t.true(id.isValid(), 'ID should be valid');
});

test('Steam3ID construction | Gameserver', (t) => {
    const should: BaseCheckObject = {
        universe:  Universe.PUBLIC,
        type:      Type.GAMESERVER,
        instance:  Instance.ALL,
        accountid: 31,
        format:    'steam3',
    };

    const id = new ID('[G:1:31]');

    const object: BaseCheckObject = {
        universe:  id.universe,
        type:      id.type,
        instance:  id.instance,
        accountid: id.accountid,
        format:    id.format,
    };

    t.deepEqual(object, should);
    t.true(id.isValid(), 'ID should be valid');
});

test('Steam3ID construction | Anonymous Gameserver', (t) => {
    const should: BaseCheckObject = {
        universe:  Universe.PUBLIC,
        type:      Type.ANON_GAMESERVER,
        instance:  11245,
        accountid: 46124,
        format:    'steam3',
    };

    const id = new ID('[A:1:46124:11245]');

    const object: BaseCheckObject = {
        universe:  id.universe,
        type:      id.type,
        instance:  id.instance,
        accountid: id.accountid,
        format:    id.format,
    };

    t.deepEqual(object, should);
    t.true(id.isValid(), 'ID should be valid');
});

test('Steam3ID construction | Lobby', (t) => {
    const should: BaseCheckObject = {
        universe:  Universe.PUBLIC,
        type:      Type.CHAT,
        instance:  ChatInstanceFlags.Lobby,
        accountid: 12345,
        format:    'steam3',
    };

    const id = new ID('[L:1:12345]');

    const object: BaseCheckObject = {
        universe:  id.universe,
        type:      id.type,
        instance:  id.instance,
        accountid: id.accountid,
        format:    id.format,
    };

    t.deepEqual(object, should);
    t.true(id.isValid(), 'ID should be valid');
});

test('Steam3ID construction | Lobby Instance', (t) => {
    const should: BaseCheckObject = {
        universe:  Universe.PUBLIC,
        type:      Type.CHAT,
        instance:  ChatInstanceFlags.Lobby | 55,
        accountid: 12345,
        format:    'steam3',
    };

    const id = new ID('[L:1:12345:55]');

    const object: BaseCheckObject = {
        universe:  id.universe,
        type:      id.type,
        instance:  id.instance,
        accountid: id.accountid,
        format:    id.format,
    };

    t.deepEqual(object, should);
    t.true(id.isValid(), 'ID should be valid');
});

test('SteamID64 construction | Individual', (t) => {
    const should: BaseCheckObject = {
        universe:  Universe.PUBLIC,
        type:      Type.INDIVIDUAL,
        instance:  Instance.DESKTOP,
        accountid: gaben.accountid,
        format:    'steam64',
    };

    const id = new ID(gaben.id64);

    const object: BaseCheckObject = {
        universe:  id.universe,
        type:      id.type,
        instance:  id.instance,
        accountid: id.accountid,
        format:    id.format,
    };

    t.deepEqual(object, should);
    t.true(id.isValid(), 'ID should be valid');
});

test('SteamID64 construction | Clan', (t) => {
    const should: BaseCheckObject = {
        universe:  Universe.PUBLIC,
        type:      Type.CLAN,
        instance:  Instance.ALL,
        accountid: 4,
        format:    'steam64',
    };

    const id = new ID('103582791429521412');

    const object: BaseCheckObject = {
        universe:  id.universe,
        type:      id.type,
        instance:  id.instance,
        accountid: id.accountid,
        format:    id.format,
    };

    t.deepEqual(object, should);
    t.true(id.isValid(), 'ID should be valid');
});

test('Invalid construction', (t) => {
    const id = t.throws(() => {
        return new ID('Invalid input');
    });

    t.is(id.message, 'Unknown SteamID input format "Invalid input"');
});

test('Steam2ID rendering | Universe 0', (t) => {
    const id = new ID();

    id.universe  = Universe.PUBLIC;
    id.type      = Type.INDIVIDUAL;
    id.instance  = Instance.DESKTOP;
    id.accountid = gaben.accountid;

    t.is(id.getSteamID2(), gaben.steam2.universe0);
    t.true(id.isValid(), 'ID should be valid');
});

test('Steam2ID rendering | Universe 1', (t) => {
    const id = new ID();

    id.universe  = Universe.PUBLIC;
    id.type      = Type.INDIVIDUAL;
    id.instance  = Instance.DESKTOP;
    id.accountid = gaben.accountid;

    t.is(id.getSteamID2(true), gaben.steam2.universe1);
    t.true(id.isValid(), 'ID should be valid');
});

test('Steam2ID rendering | Non-Individual', (t) => {
    const id = new ID();

    id.universe  = Universe.PUBLIC;
    id.type      = Type.CLAN;
    id.instance  = Instance.DESKTOP;
    id.accountid = 4;

    const result = t.throws(() => {
        return id.getSteamID2();
    });

    t.is(result.message, `Can't get Steam2 rendered ID for non-individual ID`);
    t.false(id.isValid(), 'ID should not be valid');
});

test('Steam3ID rendering | Individual', (t) => {
    const id = new ID();

    id.universe  = Universe.PUBLIC;
    id.type      = Type.INDIVIDUAL;
    id.instance  = Instance.DESKTOP;
    id.accountid = gaben.accountid;

    t.is(id.getSteamID3(), gaben.steam3);
    t.true(id.isValid(), 'ID should be valid');
});

test('Steam3ID rendering | Anonymous Gameserver', (t) => {
    const id = new ID();

    id.universe  = Universe.PUBLIC;
    id.type      = Type.ANON_GAMESERVER;
    id.instance  = 41511;
    id.accountid = 43253156;

    t.is(id.getSteamID3(), '[A:1:43253156:41511]');
    t.true(id.isValid(), 'ID should be valid');
});

test('Steam3ID rendering | Lobby', (t) => {
    const id = new ID();

    id.universe  = Universe.PUBLIC;
    id.type      = Type.CHAT;
    id.instance  = ChatInstanceFlags.Lobby;
    id.accountid = 451932;

    t.is(id.getSteamID3(), '[L:1:451932]');
    t.true(id.isValid(), 'ID should be valid');
});

test('SteamID64 rendering | Individual', (t) => {
    const id = new ID();

    id.universe  = Universe.PUBLIC;
    id.type      = Type.INDIVIDUAL;
    id.instance  = Instance.DESKTOP;
    id.accountid = gaben.accountid;

    t.is(id.getSteamID64(), gaben.id64);
    t.true(id.isValid(), 'ID should be valid');
});

test('SteamID64 rendering | Anonymous Gameserver', (t) => {
    const id = new ID();

    id.universe  = Universe.PUBLIC;
    id.type      = Type.ANON_GAMESERVER;
    id.instance  = 188991;
    id.accountid = 42135013;

    t.is(id.getSteamID64(), '90883702753783269');
    t.true(id.isValid(), 'ID should be valid');
});

test('Universe rendering', (t) => {
    const id = new ID(gaben.id64);

    t.is(id.getUniverse(), 'PUBLIC');
    t.true(id.isValid(), 'ID should be valid');
});

test('Type rendering', (t) => {
    const id = new ID(gaben.id64);

    t.is(id.getType(), 'INDIVIDUAL');
    t.true(id.isValid(), 'ID should be valid');
});

test('Instance rendering', (t) => {
    const id = new ID(gaben.id64);

    t.is(id.getInstance(), 'DESKTOP');
    t.true(id.isValid(), 'ID should be valid');
});

test('Invalid new ID', (t) => {
    const id = new ID();

    t.false(id.isValid(), 'ID should not be valid');
});

test('Invalid individual instance', (t) => {
    const id = new ID('[U:1:46143802:10]');

    t.false(id.isValid(), 'Expected individual ID with instance 10 to be invalid');
});

test('Invalid non-all clan instance', (t) => {
    const id = new ID('[g:1:4681548:2]');

    t.false(id.isValid(), 'Expected clan ID with instance 2 to be invalid');
});

test('Invalid gameserver ID with accountid 0', (t) => {
    const id = new ID('[G:1:0]');

    t.false(id.isValid(), 'Expected gameserver ID with accountid 0 to be invalid');
});
