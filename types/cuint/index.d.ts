declare module 'cuint' {
    export class UINT32 {
        constructor(l: number | string, h?: number);

        public add(other: UINT32): UINT32;

        public and(other: UINT32): UINT32;

        public clone(): UINT32;

        public div(other: UINT32): UINT32;

        public eq(other: UINT32): boolean;

        public equals(other: UINT32): boolean;

        public fromBits(l: number, h: number): UINT32;

        public fromNumber(value: number): UINT32;

        public fromString(s: string, radix?: number): UINT32;

        public greaterThan(other: UINT32): boolean;

        public gt(other: UINT32): boolean;

        public lessThan(other: UINT32): boolean;

        public lt(other: UINT32): boolean;

        public multiply(other: UINT32): UINT32;

        public negate(): UINT32;

        public not(): UINT32;

        public or(other: UINT32): UINT32;

        public rotateLeft(n: number): UINT32;

        public rotateRight(n: number): UINT32;

        public rotl(n: number): UINT32;

        public rotr(n: number): UINT32;

        public shiftLeft(n: number, allowOverflow: boolean): UINT32;

        public shiftRight(n: number): UINT32;

        public shiftl(n: number, allowOverflow: boolean): UINT32;

        public shiftr(n: number): UINT32;

        public subtract(other: UINT32): UINT32;

        public toNumber(): number;

        public toString(radix?: number): string;

        public xor(other: UINT32): UINT32;

    }

    export class UINT64 {
        constructor(a00: string | number, a16?: number, a32?: number, a48?: number, ...args: any[]);

        public add(other: UINT64): UINT64;

        public and(other: UINT64): UINT64;

        public clone(): UINT64;

        public div(other: UINT64): UINT64;

        public eq(other: UINT64): boolean;

        public equals(other: UINT64): boolean;

        public fromBits(a00: number, a16: number, a32?: number, a48?: number): UINT64;

        public fromNumber(value: number): UINT64;

        public fromString(s: string, radix?: number): UINT64;

        public greaterThan(other: UINT64): boolean;

        public gt(other: UINT64): boolean;

        public lessThan(other: UINT64): boolean;

        public lt(other: UINT64): boolean;

        public multiply(other: UINT64): UINT64;

        public negate(): UINT64;

        public not(): UINT64;

        public or(other: UINT64): UINT64;

        public rotateLeft(n: number): UINT64;

        public rotateRight(n: number): UINT64;

        public rotl(n: number): UINT64;

        public rotr(n: number): UINT64;

        public shiftLeft(n: number, allowOverflow: boolean): UINT64;

        public shiftRight(n: number): UINT64;

        public shiftl(n: number, allowOverflow: boolean): UINT64;

        public shiftr(n: number): UINT64;

        public subtract(other: UINT64): UINT64;

        public toNumber(): number;

        public toString(radix?: number): string;

        public xor(other: UINT64): UINT64;
    }
}
