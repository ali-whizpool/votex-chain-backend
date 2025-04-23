
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Voter
 * 
 */
export type Voter = $Result.DefaultSelection<Prisma.$VoterPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model GovernmentId
 * 
 */
export type GovernmentId = $Result.DefaultSelection<Prisma.$GovernmentIdPayload>
/**
 * Model BiometricData
 * 
 */
export type BiometricData = $Result.DefaultSelection<Prisma.$BiometricDataPayload>
/**
 * Model IdentityVerification
 * 
 */
export type IdentityVerification = $Result.DefaultSelection<Prisma.$IdentityVerificationPayload>
/**
 * Model EligibilityVerification
 * 
 */
export type EligibilityVerification = $Result.DefaultSelection<Prisma.$EligibilityVerificationPayload>
/**
 * Model Vote
 * 
 */
export type Vote = $Result.DefaultSelection<Prisma.$VotePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GovernmentIdType: {
  NATIONAL_ID: 'NATIONAL_ID',
  PASSPORT: 'PASSPORT',
  DRIVING_LICENSE: 'DRIVING_LICENSE'
};

export type GovernmentIdType = (typeof GovernmentIdType)[keyof typeof GovernmentIdType]


export const BiometricType: {
  FINGERPRINT: 'FINGERPRINT',
  FACIAL: 'FACIAL'
};

export type BiometricType = (typeof BiometricType)[keyof typeof BiometricType]


export const VerificationMethod: {
  AUTOMATIC: 'AUTOMATIC',
  MANUAL: 'MANUAL'
};

export type VerificationMethod = (typeof VerificationMethod)[keyof typeof VerificationMethod]


export const VerificationStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]

}

export type GovernmentIdType = $Enums.GovernmentIdType

export const GovernmentIdType: typeof $Enums.GovernmentIdType

export type BiometricType = $Enums.BiometricType

export const BiometricType: typeof $Enums.BiometricType

export type VerificationMethod = $Enums.VerificationMethod

export const VerificationMethod: typeof $Enums.VerificationMethod

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Voters
 * const voters = await prisma.voter.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Voters
   * const voters = await prisma.voter.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.voter`: Exposes CRUD operations for the **Voter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voters
    * const voters = await prisma.voter.findMany()
    * ```
    */
  get voter(): Prisma.VoterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.governmentId`: Exposes CRUD operations for the **GovernmentId** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GovernmentIds
    * const governmentIds = await prisma.governmentId.findMany()
    * ```
    */
  get governmentId(): Prisma.GovernmentIdDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.biometricData`: Exposes CRUD operations for the **BiometricData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BiometricData
    * const biometricData = await prisma.biometricData.findMany()
    * ```
    */
  get biometricData(): Prisma.BiometricDataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.identityVerification`: Exposes CRUD operations for the **IdentityVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdentityVerifications
    * const identityVerifications = await prisma.identityVerification.findMany()
    * ```
    */
  get identityVerification(): Prisma.IdentityVerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eligibilityVerification`: Exposes CRUD operations for the **EligibilityVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EligibilityVerifications
    * const eligibilityVerifications = await prisma.eligibilityVerification.findMany()
    * ```
    */
  get eligibilityVerification(): Prisma.EligibilityVerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vote`: Exposes CRUD operations for the **Vote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.vote.findMany()
    * ```
    */
  get vote(): Prisma.VoteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Voter: 'Voter',
    Address: 'Address',
    GovernmentId: 'GovernmentId',
    BiometricData: 'BiometricData',
    IdentityVerification: 'IdentityVerification',
    EligibilityVerification: 'EligibilityVerification',
    Vote: 'Vote'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "voter" | "address" | "governmentId" | "biometricData" | "identityVerification" | "eligibilityVerification" | "vote"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Voter: {
        payload: Prisma.$VoterPayload<ExtArgs>
        fields: Prisma.VoterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          findFirst: {
            args: Prisma.VoterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          findMany: {
            args: Prisma.VoterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>[]
          }
          create: {
            args: Prisma.VoterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          createMany: {
            args: Prisma.VoterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>[]
          }
          delete: {
            args: Prisma.VoterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          update: {
            args: Prisma.VoterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          deleteMany: {
            args: Prisma.VoterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>[]
          }
          upsert: {
            args: Prisma.VoterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoterPayload>
          }
          aggregate: {
            args: Prisma.VoterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoter>
          }
          groupBy: {
            args: Prisma.VoterGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoterGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoterCountArgs<ExtArgs>
            result: $Utils.Optional<VoterCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      GovernmentId: {
        payload: Prisma.$GovernmentIdPayload<ExtArgs>
        fields: Prisma.GovernmentIdFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GovernmentIdFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentIdPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GovernmentIdFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentIdPayload>
          }
          findFirst: {
            args: Prisma.GovernmentIdFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentIdPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GovernmentIdFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentIdPayload>
          }
          findMany: {
            args: Prisma.GovernmentIdFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentIdPayload>[]
          }
          create: {
            args: Prisma.GovernmentIdCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentIdPayload>
          }
          createMany: {
            args: Prisma.GovernmentIdCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GovernmentIdCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentIdPayload>[]
          }
          delete: {
            args: Prisma.GovernmentIdDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentIdPayload>
          }
          update: {
            args: Prisma.GovernmentIdUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentIdPayload>
          }
          deleteMany: {
            args: Prisma.GovernmentIdDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GovernmentIdUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GovernmentIdUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentIdPayload>[]
          }
          upsert: {
            args: Prisma.GovernmentIdUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GovernmentIdPayload>
          }
          aggregate: {
            args: Prisma.GovernmentIdAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGovernmentId>
          }
          groupBy: {
            args: Prisma.GovernmentIdGroupByArgs<ExtArgs>
            result: $Utils.Optional<GovernmentIdGroupByOutputType>[]
          }
          count: {
            args: Prisma.GovernmentIdCountArgs<ExtArgs>
            result: $Utils.Optional<GovernmentIdCountAggregateOutputType> | number
          }
        }
      }
      BiometricData: {
        payload: Prisma.$BiometricDataPayload<ExtArgs>
        fields: Prisma.BiometricDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BiometricDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BiometricDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDataPayload>
          }
          findFirst: {
            args: Prisma.BiometricDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BiometricDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDataPayload>
          }
          findMany: {
            args: Prisma.BiometricDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDataPayload>[]
          }
          create: {
            args: Prisma.BiometricDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDataPayload>
          }
          createMany: {
            args: Prisma.BiometricDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BiometricDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDataPayload>[]
          }
          delete: {
            args: Prisma.BiometricDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDataPayload>
          }
          update: {
            args: Prisma.BiometricDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDataPayload>
          }
          deleteMany: {
            args: Prisma.BiometricDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BiometricDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BiometricDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDataPayload>[]
          }
          upsert: {
            args: Prisma.BiometricDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometricDataPayload>
          }
          aggregate: {
            args: Prisma.BiometricDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBiometricData>
          }
          groupBy: {
            args: Prisma.BiometricDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<BiometricDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.BiometricDataCountArgs<ExtArgs>
            result: $Utils.Optional<BiometricDataCountAggregateOutputType> | number
          }
        }
      }
      IdentityVerification: {
        payload: Prisma.$IdentityVerificationPayload<ExtArgs>
        fields: Prisma.IdentityVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdentityVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdentityVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityVerificationPayload>
          }
          findFirst: {
            args: Prisma.IdentityVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdentityVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityVerificationPayload>
          }
          findMany: {
            args: Prisma.IdentityVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityVerificationPayload>[]
          }
          create: {
            args: Prisma.IdentityVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityVerificationPayload>
          }
          createMany: {
            args: Prisma.IdentityVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdentityVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityVerificationPayload>[]
          }
          delete: {
            args: Prisma.IdentityVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityVerificationPayload>
          }
          update: {
            args: Prisma.IdentityVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityVerificationPayload>
          }
          deleteMany: {
            args: Prisma.IdentityVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdentityVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdentityVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityVerificationPayload>[]
          }
          upsert: {
            args: Prisma.IdentityVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityVerificationPayload>
          }
          aggregate: {
            args: Prisma.IdentityVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdentityVerification>
          }
          groupBy: {
            args: Prisma.IdentityVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdentityVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdentityVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<IdentityVerificationCountAggregateOutputType> | number
          }
        }
      }
      EligibilityVerification: {
        payload: Prisma.$EligibilityVerificationPayload<ExtArgs>
        fields: Prisma.EligibilityVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EligibilityVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EligibilityVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityVerificationPayload>
          }
          findFirst: {
            args: Prisma.EligibilityVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EligibilityVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityVerificationPayload>
          }
          findMany: {
            args: Prisma.EligibilityVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityVerificationPayload>[]
          }
          create: {
            args: Prisma.EligibilityVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityVerificationPayload>
          }
          createMany: {
            args: Prisma.EligibilityVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EligibilityVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityVerificationPayload>[]
          }
          delete: {
            args: Prisma.EligibilityVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityVerificationPayload>
          }
          update: {
            args: Prisma.EligibilityVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityVerificationPayload>
          }
          deleteMany: {
            args: Prisma.EligibilityVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EligibilityVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EligibilityVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityVerificationPayload>[]
          }
          upsert: {
            args: Prisma.EligibilityVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EligibilityVerificationPayload>
          }
          aggregate: {
            args: Prisma.EligibilityVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEligibilityVerification>
          }
          groupBy: {
            args: Prisma.EligibilityVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EligibilityVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EligibilityVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<EligibilityVerificationCountAggregateOutputType> | number
          }
        }
      }
      Vote: {
        payload: Prisma.$VotePayload<ExtArgs>
        fields: Prisma.VoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findFirst: {
            args: Prisma.VoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          findMany: {
            args: Prisma.VoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          create: {
            args: Prisma.VoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          createMany: {
            args: Prisma.VoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          delete: {
            args: Prisma.VoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          update: {
            args: Prisma.VoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          deleteMany: {
            args: Prisma.VoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>[]
          }
          upsert: {
            args: Prisma.VoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VotePayload>
          }
          aggregate: {
            args: Prisma.VoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVote>
          }
          groupBy: {
            args: Prisma.VoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoteCountArgs<ExtArgs>
            result: $Utils.Optional<VoteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    voter?: VoterOmit
    address?: AddressOmit
    governmentId?: GovernmentIdOmit
    biometricData?: BiometricDataOmit
    identityVerification?: IdentityVerificationOmit
    eligibilityVerification?: EligibilityVerificationOmit
    vote?: VoteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VoterCountOutputType
   */

  export type VoterCountOutputType = {
    votes: number
  }

  export type VoterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    votes?: boolean | VoterCountOutputTypeCountVotesArgs
  }

  // Custom InputTypes
  /**
   * VoterCountOutputType without action
   */
  export type VoterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoterCountOutputType
     */
    select?: VoterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoterCountOutputType without action
   */
  export type VoterCountOutputTypeCountVotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Voter
   */

  export type AggregateVoter = {
    _count: VoterCountAggregateOutputType | null
    _min: VoterMinAggregateOutputType | null
    _max: VoterMaxAggregateOutputType | null
  }

  export type VoterMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    nationality: string | null
    phoneNumber: string | null
    isVerified: boolean | null
    verificationStatus: $Enums.VerificationStatus | null
    mfaEnabled: boolean | null
    mfaSecret: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoterMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    nationality: string | null
    phoneNumber: string | null
    isVerified: boolean | null
    verificationStatus: $Enums.VerificationStatus | null
    mfaEnabled: boolean | null
    mfaSecret: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VoterCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    dateOfBirth: number
    nationality: number
    phoneNumber: number
    isVerified: number
    verificationStatus: number
    mfaEnabled: number
    mfaSecret: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VoterMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    nationality?: true
    phoneNumber?: true
    isVerified?: true
    verificationStatus?: true
    mfaEnabled?: true
    mfaSecret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoterMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    nationality?: true
    phoneNumber?: true
    isVerified?: true
    verificationStatus?: true
    mfaEnabled?: true
    mfaSecret?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VoterCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    nationality?: true
    phoneNumber?: true
    isVerified?: true
    verificationStatus?: true
    mfaEnabled?: true
    mfaSecret?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VoterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voter to aggregate.
     */
    where?: VoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voters to fetch.
     */
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Voters
    **/
    _count?: true | VoterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoterMaxAggregateInputType
  }

  export type GetVoterAggregateType<T extends VoterAggregateArgs> = {
        [P in keyof T & keyof AggregateVoter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoter[P]>
      : GetScalarType<T[P], AggregateVoter[P]>
  }




  export type VoterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoterWhereInput
    orderBy?: VoterOrderByWithAggregationInput | VoterOrderByWithAggregationInput[]
    by: VoterScalarFieldEnum[] | VoterScalarFieldEnum
    having?: VoterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoterCountAggregateInputType | true
    _min?: VoterMinAggregateInputType
    _max?: VoterMaxAggregateInputType
  }

  export type VoterGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date
    nationality: string
    phoneNumber: string
    isVerified: boolean
    verificationStatus: $Enums.VerificationStatus
    mfaEnabled: boolean
    mfaSecret: string | null
    createdAt: Date
    updatedAt: Date
    _count: VoterCountAggregateOutputType | null
    _min: VoterMinAggregateOutputType | null
    _max: VoterMaxAggregateOutputType | null
  }

  type GetVoterGroupByPayload<T extends VoterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoterGroupByOutputType[P]>
            : GetScalarType<T[P], VoterGroupByOutputType[P]>
        }
      >
    >


  export type VoterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    phoneNumber?: boolean
    isVerified?: boolean
    verificationStatus?: boolean
    mfaEnabled?: boolean
    mfaSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    address?: boolean | Voter$addressArgs<ExtArgs>
    governmentId?: boolean | Voter$governmentIdArgs<ExtArgs>
    biometricData?: boolean | Voter$biometricDataArgs<ExtArgs>
    identityVerification?: boolean | Voter$identityVerificationArgs<ExtArgs>
    eligibilityVerification?: boolean | Voter$eligibilityVerificationArgs<ExtArgs>
    votes?: boolean | Voter$votesArgs<ExtArgs>
    _count?: boolean | VoterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voter"]>

  export type VoterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    phoneNumber?: boolean
    isVerified?: boolean
    verificationStatus?: boolean
    mfaEnabled?: boolean
    mfaSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["voter"]>

  export type VoterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    phoneNumber?: boolean
    isVerified?: boolean
    verificationStatus?: boolean
    mfaEnabled?: boolean
    mfaSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["voter"]>

  export type VoterSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    nationality?: boolean
    phoneNumber?: boolean
    isVerified?: boolean
    verificationStatus?: boolean
    mfaEnabled?: boolean
    mfaSecret?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VoterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "dateOfBirth" | "nationality" | "phoneNumber" | "isVerified" | "verificationStatus" | "mfaEnabled" | "mfaSecret" | "createdAt" | "updatedAt", ExtArgs["result"]["voter"]>
  export type VoterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | Voter$addressArgs<ExtArgs>
    governmentId?: boolean | Voter$governmentIdArgs<ExtArgs>
    biometricData?: boolean | Voter$biometricDataArgs<ExtArgs>
    identityVerification?: boolean | Voter$identityVerificationArgs<ExtArgs>
    eligibilityVerification?: boolean | Voter$eligibilityVerificationArgs<ExtArgs>
    votes?: boolean | Voter$votesArgs<ExtArgs>
    _count?: boolean | VoterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VoterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VoterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VoterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voter"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs> | null
      governmentId: Prisma.$GovernmentIdPayload<ExtArgs> | null
      biometricData: Prisma.$BiometricDataPayload<ExtArgs> | null
      identityVerification: Prisma.$IdentityVerificationPayload<ExtArgs> | null
      eligibilityVerification: Prisma.$EligibilityVerificationPayload<ExtArgs> | null
      votes: Prisma.$VotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      dateOfBirth: Date
      nationality: string
      phoneNumber: string
      isVerified: boolean
      verificationStatus: $Enums.VerificationStatus
      mfaEnabled: boolean
      mfaSecret: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["voter"]>
    composites: {}
  }

  type VoterGetPayload<S extends boolean | null | undefined | VoterDefaultArgs> = $Result.GetResult<Prisma.$VoterPayload, S>

  type VoterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoterCountAggregateInputType | true
    }

  export interface VoterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voter'], meta: { name: 'Voter' } }
    /**
     * Find zero or one Voter that matches the filter.
     * @param {VoterFindUniqueArgs} args - Arguments to find a Voter
     * @example
     * // Get one Voter
     * const voter = await prisma.voter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoterFindUniqueArgs>(args: SelectSubset<T, VoterFindUniqueArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoterFindUniqueOrThrowArgs} args - Arguments to find a Voter
     * @example
     * // Get one Voter
     * const voter = await prisma.voter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoterFindUniqueOrThrowArgs>(args: SelectSubset<T, VoterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterFindFirstArgs} args - Arguments to find a Voter
     * @example
     * // Get one Voter
     * const voter = await prisma.voter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoterFindFirstArgs>(args?: SelectSubset<T, VoterFindFirstArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterFindFirstOrThrowArgs} args - Arguments to find a Voter
     * @example
     * // Get one Voter
     * const voter = await prisma.voter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoterFindFirstOrThrowArgs>(args?: SelectSubset<T, VoterFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voters
     * const voters = await prisma.voter.findMany()
     * 
     * // Get first 10 Voters
     * const voters = await prisma.voter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voterWithIdOnly = await prisma.voter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoterFindManyArgs>(args?: SelectSubset<T, VoterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voter.
     * @param {VoterCreateArgs} args - Arguments to create a Voter.
     * @example
     * // Create one Voter
     * const Voter = await prisma.voter.create({
     *   data: {
     *     // ... data to create a Voter
     *   }
     * })
     * 
     */
    create<T extends VoterCreateArgs>(args: SelectSubset<T, VoterCreateArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voters.
     * @param {VoterCreateManyArgs} args - Arguments to create many Voters.
     * @example
     * // Create many Voters
     * const voter = await prisma.voter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoterCreateManyArgs>(args?: SelectSubset<T, VoterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Voters and returns the data saved in the database.
     * @param {VoterCreateManyAndReturnArgs} args - Arguments to create many Voters.
     * @example
     * // Create many Voters
     * const voter = await prisma.voter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Voters and only return the `id`
     * const voterWithIdOnly = await prisma.voter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoterCreateManyAndReturnArgs>(args?: SelectSubset<T, VoterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voter.
     * @param {VoterDeleteArgs} args - Arguments to delete one Voter.
     * @example
     * // Delete one Voter
     * const Voter = await prisma.voter.delete({
     *   where: {
     *     // ... filter to delete one Voter
     *   }
     * })
     * 
     */
    delete<T extends VoterDeleteArgs>(args: SelectSubset<T, VoterDeleteArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voter.
     * @param {VoterUpdateArgs} args - Arguments to update one Voter.
     * @example
     * // Update one Voter
     * const voter = await prisma.voter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoterUpdateArgs>(args: SelectSubset<T, VoterUpdateArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voters.
     * @param {VoterDeleteManyArgs} args - Arguments to filter Voters to delete.
     * @example
     * // Delete a few Voters
     * const { count } = await prisma.voter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoterDeleteManyArgs>(args?: SelectSubset<T, VoterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voters
     * const voter = await prisma.voter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoterUpdateManyArgs>(args: SelectSubset<T, VoterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voters and returns the data updated in the database.
     * @param {VoterUpdateManyAndReturnArgs} args - Arguments to update many Voters.
     * @example
     * // Update many Voters
     * const voter = await prisma.voter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Voters and only return the `id`
     * const voterWithIdOnly = await prisma.voter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoterUpdateManyAndReturnArgs>(args: SelectSubset<T, VoterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voter.
     * @param {VoterUpsertArgs} args - Arguments to update or create a Voter.
     * @example
     * // Update or create a Voter
     * const voter = await prisma.voter.upsert({
     *   create: {
     *     // ... data to create a Voter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voter we want to update
     *   }
     * })
     */
    upsert<T extends VoterUpsertArgs>(args: SelectSubset<T, VoterUpsertArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterCountArgs} args - Arguments to filter Voters to count.
     * @example
     * // Count the number of Voters
     * const count = await prisma.voter.count({
     *   where: {
     *     // ... the filter for the Voters we want to count
     *   }
     * })
    **/
    count<T extends VoterCountArgs>(
      args?: Subset<T, VoterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoterAggregateArgs>(args: Subset<T, VoterAggregateArgs>): Prisma.PrismaPromise<GetVoterAggregateType<T>>

    /**
     * Group by Voter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoterGroupByArgs['orderBy'] }
        : { orderBy?: VoterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voter model
   */
  readonly fields: VoterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends Voter$addressArgs<ExtArgs> = {}>(args?: Subset<T, Voter$addressArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    governmentId<T extends Voter$governmentIdArgs<ExtArgs> = {}>(args?: Subset<T, Voter$governmentIdArgs<ExtArgs>>): Prisma__GovernmentIdClient<$Result.GetResult<Prisma.$GovernmentIdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    biometricData<T extends Voter$biometricDataArgs<ExtArgs> = {}>(args?: Subset<T, Voter$biometricDataArgs<ExtArgs>>): Prisma__BiometricDataClient<$Result.GetResult<Prisma.$BiometricDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    identityVerification<T extends Voter$identityVerificationArgs<ExtArgs> = {}>(args?: Subset<T, Voter$identityVerificationArgs<ExtArgs>>): Prisma__IdentityVerificationClient<$Result.GetResult<Prisma.$IdentityVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    eligibilityVerification<T extends Voter$eligibilityVerificationArgs<ExtArgs> = {}>(args?: Subset<T, Voter$eligibilityVerificationArgs<ExtArgs>>): Prisma__EligibilityVerificationClient<$Result.GetResult<Prisma.$EligibilityVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    votes<T extends Voter$votesArgs<ExtArgs> = {}>(args?: Subset<T, Voter$votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Voter model
   */
  interface VoterFieldRefs {
    readonly id: FieldRef<"Voter", 'String'>
    readonly email: FieldRef<"Voter", 'String'>
    readonly password: FieldRef<"Voter", 'String'>
    readonly firstName: FieldRef<"Voter", 'String'>
    readonly lastName: FieldRef<"Voter", 'String'>
    readonly dateOfBirth: FieldRef<"Voter", 'DateTime'>
    readonly nationality: FieldRef<"Voter", 'String'>
    readonly phoneNumber: FieldRef<"Voter", 'String'>
    readonly isVerified: FieldRef<"Voter", 'Boolean'>
    readonly verificationStatus: FieldRef<"Voter", 'VerificationStatus'>
    readonly mfaEnabled: FieldRef<"Voter", 'Boolean'>
    readonly mfaSecret: FieldRef<"Voter", 'String'>
    readonly createdAt: FieldRef<"Voter", 'DateTime'>
    readonly updatedAt: FieldRef<"Voter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Voter findUnique
   */
  export type VoterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voter to fetch.
     */
    where: VoterWhereUniqueInput
  }

  /**
   * Voter findUniqueOrThrow
   */
  export type VoterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voter to fetch.
     */
    where: VoterWhereUniqueInput
  }

  /**
   * Voter findFirst
   */
  export type VoterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voter to fetch.
     */
    where?: VoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voters to fetch.
     */
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voters.
     */
    cursor?: VoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voters.
     */
    distinct?: VoterScalarFieldEnum | VoterScalarFieldEnum[]
  }

  /**
   * Voter findFirstOrThrow
   */
  export type VoterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voter to fetch.
     */
    where?: VoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voters to fetch.
     */
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Voters.
     */
    cursor?: VoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Voters.
     */
    distinct?: VoterScalarFieldEnum | VoterScalarFieldEnum[]
  }

  /**
   * Voter findMany
   */
  export type VoterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter, which Voters to fetch.
     */
    where?: VoterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Voters to fetch.
     */
    orderBy?: VoterOrderByWithRelationInput | VoterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Voters.
     */
    cursor?: VoterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Voters.
     */
    skip?: number
    distinct?: VoterScalarFieldEnum | VoterScalarFieldEnum[]
  }

  /**
   * Voter create
   */
  export type VoterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * The data needed to create a Voter.
     */
    data: XOR<VoterCreateInput, VoterUncheckedCreateInput>
  }

  /**
   * Voter createMany
   */
  export type VoterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Voters.
     */
    data: VoterCreateManyInput | VoterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voter createManyAndReturn
   */
  export type VoterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * The data used to create many Voters.
     */
    data: VoterCreateManyInput | VoterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voter update
   */
  export type VoterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * The data needed to update a Voter.
     */
    data: XOR<VoterUpdateInput, VoterUncheckedUpdateInput>
    /**
     * Choose, which Voter to update.
     */
    where: VoterWhereUniqueInput
  }

  /**
   * Voter updateMany
   */
  export type VoterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Voters.
     */
    data: XOR<VoterUpdateManyMutationInput, VoterUncheckedUpdateManyInput>
    /**
     * Filter which Voters to update
     */
    where?: VoterWhereInput
    /**
     * Limit how many Voters to update.
     */
    limit?: number
  }

  /**
   * Voter updateManyAndReturn
   */
  export type VoterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * The data used to update Voters.
     */
    data: XOR<VoterUpdateManyMutationInput, VoterUncheckedUpdateManyInput>
    /**
     * Filter which Voters to update
     */
    where?: VoterWhereInput
    /**
     * Limit how many Voters to update.
     */
    limit?: number
  }

  /**
   * Voter upsert
   */
  export type VoterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * The filter to search for the Voter to update in case it exists.
     */
    where: VoterWhereUniqueInput
    /**
     * In case the Voter found by the `where` argument doesn't exist, create a new Voter with this data.
     */
    create: XOR<VoterCreateInput, VoterUncheckedCreateInput>
    /**
     * In case the Voter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoterUpdateInput, VoterUncheckedUpdateInput>
  }

  /**
   * Voter delete
   */
  export type VoterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
    /**
     * Filter which Voter to delete.
     */
    where: VoterWhereUniqueInput
  }

  /**
   * Voter deleteMany
   */
  export type VoterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voters to delete
     */
    where?: VoterWhereInput
    /**
     * Limit how many Voters to delete.
     */
    limit?: number
  }

  /**
   * Voter.address
   */
  export type Voter$addressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
  }

  /**
   * Voter.governmentId
   */
  export type Voter$governmentIdArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentId
     */
    select?: GovernmentIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentId
     */
    omit?: GovernmentIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentIdInclude<ExtArgs> | null
    where?: GovernmentIdWhereInput
  }

  /**
   * Voter.biometricData
   */
  export type Voter$biometricDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricData
     */
    select?: BiometricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricData
     */
    omit?: BiometricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDataInclude<ExtArgs> | null
    where?: BiometricDataWhereInput
  }

  /**
   * Voter.identityVerification
   */
  export type Voter$identityVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityVerification
     */
    select?: IdentityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityVerification
     */
    omit?: IdentityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityVerificationInclude<ExtArgs> | null
    where?: IdentityVerificationWhereInput
  }

  /**
   * Voter.eligibilityVerification
   */
  export type Voter$eligibilityVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityVerification
     */
    select?: EligibilityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityVerification
     */
    omit?: EligibilityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityVerificationInclude<ExtArgs> | null
    where?: EligibilityVerificationWhereInput
  }

  /**
   * Voter.votes
   */
  export type Voter$votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    cursor?: VoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Voter without action
   */
  export type VoterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voter
     */
    select?: VoterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voter
     */
    omit?: VoterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoterInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    voterId: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    voterId: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    street: number
    city: number
    state: number
    country: number
    postalCode: number
    voterId: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    voterId?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    voterId?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    voterId?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    street: string
    city: string
    state: string
    country: string
    postalCode: string
    voterId: string
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    voterId?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    voterId?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    voterId?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    voterId?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "street" | "city" | "state" | "country" | "postalCode" | "voterId", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      voter: Prisma.$VoterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      street: string
      city: string
      state: string
      country: string
      postalCode: string
      voterId: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voter<T extends VoterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoterDefaultArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly street: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly postalCode: FieldRef<"Address", 'String'>
    readonly voterId: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model GovernmentId
   */

  export type AggregateGovernmentId = {
    _count: GovernmentIdCountAggregateOutputType | null
    _min: GovernmentIdMinAggregateOutputType | null
    _max: GovernmentIdMaxAggregateOutputType | null
  }

  export type GovernmentIdMinAggregateOutputType = {
    id: string | null
    type: $Enums.GovernmentIdType | null
    number: string | null
    expiryDate: Date | null
    voterId: string | null
  }

  export type GovernmentIdMaxAggregateOutputType = {
    id: string | null
    type: $Enums.GovernmentIdType | null
    number: string | null
    expiryDate: Date | null
    voterId: string | null
  }

  export type GovernmentIdCountAggregateOutputType = {
    id: number
    type: number
    number: number
    expiryDate: number
    voterId: number
    _all: number
  }


  export type GovernmentIdMinAggregateInputType = {
    id?: true
    type?: true
    number?: true
    expiryDate?: true
    voterId?: true
  }

  export type GovernmentIdMaxAggregateInputType = {
    id?: true
    type?: true
    number?: true
    expiryDate?: true
    voterId?: true
  }

  export type GovernmentIdCountAggregateInputType = {
    id?: true
    type?: true
    number?: true
    expiryDate?: true
    voterId?: true
    _all?: true
  }

  export type GovernmentIdAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GovernmentId to aggregate.
     */
    where?: GovernmentIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GovernmentIds to fetch.
     */
    orderBy?: GovernmentIdOrderByWithRelationInput | GovernmentIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GovernmentIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GovernmentIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GovernmentIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GovernmentIds
    **/
    _count?: true | GovernmentIdCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GovernmentIdMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GovernmentIdMaxAggregateInputType
  }

  export type GetGovernmentIdAggregateType<T extends GovernmentIdAggregateArgs> = {
        [P in keyof T & keyof AggregateGovernmentId]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGovernmentId[P]>
      : GetScalarType<T[P], AggregateGovernmentId[P]>
  }




  export type GovernmentIdGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GovernmentIdWhereInput
    orderBy?: GovernmentIdOrderByWithAggregationInput | GovernmentIdOrderByWithAggregationInput[]
    by: GovernmentIdScalarFieldEnum[] | GovernmentIdScalarFieldEnum
    having?: GovernmentIdScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GovernmentIdCountAggregateInputType | true
    _min?: GovernmentIdMinAggregateInputType
    _max?: GovernmentIdMaxAggregateInputType
  }

  export type GovernmentIdGroupByOutputType = {
    id: string
    type: $Enums.GovernmentIdType
    number: string
    expiryDate: Date
    voterId: string
    _count: GovernmentIdCountAggregateOutputType | null
    _min: GovernmentIdMinAggregateOutputType | null
    _max: GovernmentIdMaxAggregateOutputType | null
  }

  type GetGovernmentIdGroupByPayload<T extends GovernmentIdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GovernmentIdGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GovernmentIdGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GovernmentIdGroupByOutputType[P]>
            : GetScalarType<T[P], GovernmentIdGroupByOutputType[P]>
        }
      >
    >


  export type GovernmentIdSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    number?: boolean
    expiryDate?: boolean
    voterId?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["governmentId"]>

  export type GovernmentIdSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    number?: boolean
    expiryDate?: boolean
    voterId?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["governmentId"]>

  export type GovernmentIdSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    number?: boolean
    expiryDate?: boolean
    voterId?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["governmentId"]>

  export type GovernmentIdSelectScalar = {
    id?: boolean
    type?: boolean
    number?: boolean
    expiryDate?: boolean
    voterId?: boolean
  }

  export type GovernmentIdOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "number" | "expiryDate" | "voterId", ExtArgs["result"]["governmentId"]>
  export type GovernmentIdInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }
  export type GovernmentIdIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }
  export type GovernmentIdIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }

  export type $GovernmentIdPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GovernmentId"
    objects: {
      voter: Prisma.$VoterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.GovernmentIdType
      number: string
      expiryDate: Date
      voterId: string
    }, ExtArgs["result"]["governmentId"]>
    composites: {}
  }

  type GovernmentIdGetPayload<S extends boolean | null | undefined | GovernmentIdDefaultArgs> = $Result.GetResult<Prisma.$GovernmentIdPayload, S>

  type GovernmentIdCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GovernmentIdFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GovernmentIdCountAggregateInputType | true
    }

  export interface GovernmentIdDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GovernmentId'], meta: { name: 'GovernmentId' } }
    /**
     * Find zero or one GovernmentId that matches the filter.
     * @param {GovernmentIdFindUniqueArgs} args - Arguments to find a GovernmentId
     * @example
     * // Get one GovernmentId
     * const governmentId = await prisma.governmentId.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GovernmentIdFindUniqueArgs>(args: SelectSubset<T, GovernmentIdFindUniqueArgs<ExtArgs>>): Prisma__GovernmentIdClient<$Result.GetResult<Prisma.$GovernmentIdPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GovernmentId that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GovernmentIdFindUniqueOrThrowArgs} args - Arguments to find a GovernmentId
     * @example
     * // Get one GovernmentId
     * const governmentId = await prisma.governmentId.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GovernmentIdFindUniqueOrThrowArgs>(args: SelectSubset<T, GovernmentIdFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GovernmentIdClient<$Result.GetResult<Prisma.$GovernmentIdPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GovernmentId that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentIdFindFirstArgs} args - Arguments to find a GovernmentId
     * @example
     * // Get one GovernmentId
     * const governmentId = await prisma.governmentId.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GovernmentIdFindFirstArgs>(args?: SelectSubset<T, GovernmentIdFindFirstArgs<ExtArgs>>): Prisma__GovernmentIdClient<$Result.GetResult<Prisma.$GovernmentIdPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GovernmentId that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentIdFindFirstOrThrowArgs} args - Arguments to find a GovernmentId
     * @example
     * // Get one GovernmentId
     * const governmentId = await prisma.governmentId.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GovernmentIdFindFirstOrThrowArgs>(args?: SelectSubset<T, GovernmentIdFindFirstOrThrowArgs<ExtArgs>>): Prisma__GovernmentIdClient<$Result.GetResult<Prisma.$GovernmentIdPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GovernmentIds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentIdFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GovernmentIds
     * const governmentIds = await prisma.governmentId.findMany()
     * 
     * // Get first 10 GovernmentIds
     * const governmentIds = await prisma.governmentId.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const governmentIdWithIdOnly = await prisma.governmentId.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GovernmentIdFindManyArgs>(args?: SelectSubset<T, GovernmentIdFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GovernmentIdPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GovernmentId.
     * @param {GovernmentIdCreateArgs} args - Arguments to create a GovernmentId.
     * @example
     * // Create one GovernmentId
     * const GovernmentId = await prisma.governmentId.create({
     *   data: {
     *     // ... data to create a GovernmentId
     *   }
     * })
     * 
     */
    create<T extends GovernmentIdCreateArgs>(args: SelectSubset<T, GovernmentIdCreateArgs<ExtArgs>>): Prisma__GovernmentIdClient<$Result.GetResult<Prisma.$GovernmentIdPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GovernmentIds.
     * @param {GovernmentIdCreateManyArgs} args - Arguments to create many GovernmentIds.
     * @example
     * // Create many GovernmentIds
     * const governmentId = await prisma.governmentId.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GovernmentIdCreateManyArgs>(args?: SelectSubset<T, GovernmentIdCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GovernmentIds and returns the data saved in the database.
     * @param {GovernmentIdCreateManyAndReturnArgs} args - Arguments to create many GovernmentIds.
     * @example
     * // Create many GovernmentIds
     * const governmentId = await prisma.governmentId.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GovernmentIds and only return the `id`
     * const governmentIdWithIdOnly = await prisma.governmentId.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GovernmentIdCreateManyAndReturnArgs>(args?: SelectSubset<T, GovernmentIdCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GovernmentIdPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GovernmentId.
     * @param {GovernmentIdDeleteArgs} args - Arguments to delete one GovernmentId.
     * @example
     * // Delete one GovernmentId
     * const GovernmentId = await prisma.governmentId.delete({
     *   where: {
     *     // ... filter to delete one GovernmentId
     *   }
     * })
     * 
     */
    delete<T extends GovernmentIdDeleteArgs>(args: SelectSubset<T, GovernmentIdDeleteArgs<ExtArgs>>): Prisma__GovernmentIdClient<$Result.GetResult<Prisma.$GovernmentIdPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GovernmentId.
     * @param {GovernmentIdUpdateArgs} args - Arguments to update one GovernmentId.
     * @example
     * // Update one GovernmentId
     * const governmentId = await prisma.governmentId.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GovernmentIdUpdateArgs>(args: SelectSubset<T, GovernmentIdUpdateArgs<ExtArgs>>): Prisma__GovernmentIdClient<$Result.GetResult<Prisma.$GovernmentIdPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GovernmentIds.
     * @param {GovernmentIdDeleteManyArgs} args - Arguments to filter GovernmentIds to delete.
     * @example
     * // Delete a few GovernmentIds
     * const { count } = await prisma.governmentId.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GovernmentIdDeleteManyArgs>(args?: SelectSubset<T, GovernmentIdDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GovernmentIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentIdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GovernmentIds
     * const governmentId = await prisma.governmentId.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GovernmentIdUpdateManyArgs>(args: SelectSubset<T, GovernmentIdUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GovernmentIds and returns the data updated in the database.
     * @param {GovernmentIdUpdateManyAndReturnArgs} args - Arguments to update many GovernmentIds.
     * @example
     * // Update many GovernmentIds
     * const governmentId = await prisma.governmentId.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GovernmentIds and only return the `id`
     * const governmentIdWithIdOnly = await prisma.governmentId.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GovernmentIdUpdateManyAndReturnArgs>(args: SelectSubset<T, GovernmentIdUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GovernmentIdPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GovernmentId.
     * @param {GovernmentIdUpsertArgs} args - Arguments to update or create a GovernmentId.
     * @example
     * // Update or create a GovernmentId
     * const governmentId = await prisma.governmentId.upsert({
     *   create: {
     *     // ... data to create a GovernmentId
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GovernmentId we want to update
     *   }
     * })
     */
    upsert<T extends GovernmentIdUpsertArgs>(args: SelectSubset<T, GovernmentIdUpsertArgs<ExtArgs>>): Prisma__GovernmentIdClient<$Result.GetResult<Prisma.$GovernmentIdPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GovernmentIds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentIdCountArgs} args - Arguments to filter GovernmentIds to count.
     * @example
     * // Count the number of GovernmentIds
     * const count = await prisma.governmentId.count({
     *   where: {
     *     // ... the filter for the GovernmentIds we want to count
     *   }
     * })
    **/
    count<T extends GovernmentIdCountArgs>(
      args?: Subset<T, GovernmentIdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GovernmentIdCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GovernmentId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentIdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GovernmentIdAggregateArgs>(args: Subset<T, GovernmentIdAggregateArgs>): Prisma.PrismaPromise<GetGovernmentIdAggregateType<T>>

    /**
     * Group by GovernmentId.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GovernmentIdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GovernmentIdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GovernmentIdGroupByArgs['orderBy'] }
        : { orderBy?: GovernmentIdGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GovernmentIdGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGovernmentIdGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GovernmentId model
   */
  readonly fields: GovernmentIdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GovernmentId.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GovernmentIdClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voter<T extends VoterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoterDefaultArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GovernmentId model
   */
  interface GovernmentIdFieldRefs {
    readonly id: FieldRef<"GovernmentId", 'String'>
    readonly type: FieldRef<"GovernmentId", 'GovernmentIdType'>
    readonly number: FieldRef<"GovernmentId", 'String'>
    readonly expiryDate: FieldRef<"GovernmentId", 'DateTime'>
    readonly voterId: FieldRef<"GovernmentId", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GovernmentId findUnique
   */
  export type GovernmentIdFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentId
     */
    select?: GovernmentIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentId
     */
    omit?: GovernmentIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentIdInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentId to fetch.
     */
    where: GovernmentIdWhereUniqueInput
  }

  /**
   * GovernmentId findUniqueOrThrow
   */
  export type GovernmentIdFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentId
     */
    select?: GovernmentIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentId
     */
    omit?: GovernmentIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentIdInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentId to fetch.
     */
    where: GovernmentIdWhereUniqueInput
  }

  /**
   * GovernmentId findFirst
   */
  export type GovernmentIdFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentId
     */
    select?: GovernmentIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentId
     */
    omit?: GovernmentIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentIdInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentId to fetch.
     */
    where?: GovernmentIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GovernmentIds to fetch.
     */
    orderBy?: GovernmentIdOrderByWithRelationInput | GovernmentIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GovernmentIds.
     */
    cursor?: GovernmentIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GovernmentIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GovernmentIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GovernmentIds.
     */
    distinct?: GovernmentIdScalarFieldEnum | GovernmentIdScalarFieldEnum[]
  }

  /**
   * GovernmentId findFirstOrThrow
   */
  export type GovernmentIdFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentId
     */
    select?: GovernmentIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentId
     */
    omit?: GovernmentIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentIdInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentId to fetch.
     */
    where?: GovernmentIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GovernmentIds to fetch.
     */
    orderBy?: GovernmentIdOrderByWithRelationInput | GovernmentIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GovernmentIds.
     */
    cursor?: GovernmentIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GovernmentIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GovernmentIds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GovernmentIds.
     */
    distinct?: GovernmentIdScalarFieldEnum | GovernmentIdScalarFieldEnum[]
  }

  /**
   * GovernmentId findMany
   */
  export type GovernmentIdFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentId
     */
    select?: GovernmentIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentId
     */
    omit?: GovernmentIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentIdInclude<ExtArgs> | null
    /**
     * Filter, which GovernmentIds to fetch.
     */
    where?: GovernmentIdWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GovernmentIds to fetch.
     */
    orderBy?: GovernmentIdOrderByWithRelationInput | GovernmentIdOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GovernmentIds.
     */
    cursor?: GovernmentIdWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GovernmentIds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GovernmentIds.
     */
    skip?: number
    distinct?: GovernmentIdScalarFieldEnum | GovernmentIdScalarFieldEnum[]
  }

  /**
   * GovernmentId create
   */
  export type GovernmentIdCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentId
     */
    select?: GovernmentIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentId
     */
    omit?: GovernmentIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentIdInclude<ExtArgs> | null
    /**
     * The data needed to create a GovernmentId.
     */
    data: XOR<GovernmentIdCreateInput, GovernmentIdUncheckedCreateInput>
  }

  /**
   * GovernmentId createMany
   */
  export type GovernmentIdCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GovernmentIds.
     */
    data: GovernmentIdCreateManyInput | GovernmentIdCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GovernmentId createManyAndReturn
   */
  export type GovernmentIdCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentId
     */
    select?: GovernmentIdSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentId
     */
    omit?: GovernmentIdOmit<ExtArgs> | null
    /**
     * The data used to create many GovernmentIds.
     */
    data: GovernmentIdCreateManyInput | GovernmentIdCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentIdIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GovernmentId update
   */
  export type GovernmentIdUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentId
     */
    select?: GovernmentIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentId
     */
    omit?: GovernmentIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentIdInclude<ExtArgs> | null
    /**
     * The data needed to update a GovernmentId.
     */
    data: XOR<GovernmentIdUpdateInput, GovernmentIdUncheckedUpdateInput>
    /**
     * Choose, which GovernmentId to update.
     */
    where: GovernmentIdWhereUniqueInput
  }

  /**
   * GovernmentId updateMany
   */
  export type GovernmentIdUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GovernmentIds.
     */
    data: XOR<GovernmentIdUpdateManyMutationInput, GovernmentIdUncheckedUpdateManyInput>
    /**
     * Filter which GovernmentIds to update
     */
    where?: GovernmentIdWhereInput
    /**
     * Limit how many GovernmentIds to update.
     */
    limit?: number
  }

  /**
   * GovernmentId updateManyAndReturn
   */
  export type GovernmentIdUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentId
     */
    select?: GovernmentIdSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentId
     */
    omit?: GovernmentIdOmit<ExtArgs> | null
    /**
     * The data used to update GovernmentIds.
     */
    data: XOR<GovernmentIdUpdateManyMutationInput, GovernmentIdUncheckedUpdateManyInput>
    /**
     * Filter which GovernmentIds to update
     */
    where?: GovernmentIdWhereInput
    /**
     * Limit how many GovernmentIds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentIdIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GovernmentId upsert
   */
  export type GovernmentIdUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentId
     */
    select?: GovernmentIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentId
     */
    omit?: GovernmentIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentIdInclude<ExtArgs> | null
    /**
     * The filter to search for the GovernmentId to update in case it exists.
     */
    where: GovernmentIdWhereUniqueInput
    /**
     * In case the GovernmentId found by the `where` argument doesn't exist, create a new GovernmentId with this data.
     */
    create: XOR<GovernmentIdCreateInput, GovernmentIdUncheckedCreateInput>
    /**
     * In case the GovernmentId was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GovernmentIdUpdateInput, GovernmentIdUncheckedUpdateInput>
  }

  /**
   * GovernmentId delete
   */
  export type GovernmentIdDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentId
     */
    select?: GovernmentIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentId
     */
    omit?: GovernmentIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentIdInclude<ExtArgs> | null
    /**
     * Filter which GovernmentId to delete.
     */
    where: GovernmentIdWhereUniqueInput
  }

  /**
   * GovernmentId deleteMany
   */
  export type GovernmentIdDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GovernmentIds to delete
     */
    where?: GovernmentIdWhereInput
    /**
     * Limit how many GovernmentIds to delete.
     */
    limit?: number
  }

  /**
   * GovernmentId without action
   */
  export type GovernmentIdDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GovernmentId
     */
    select?: GovernmentIdSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GovernmentId
     */
    omit?: GovernmentIdOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GovernmentIdInclude<ExtArgs> | null
  }


  /**
   * Model BiometricData
   */

  export type AggregateBiometricData = {
    _count: BiometricDataCountAggregateOutputType | null
    _min: BiometricDataMinAggregateOutputType | null
    _max: BiometricDataMaxAggregateOutputType | null
  }

  export type BiometricDataMinAggregateOutputType = {
    id: string | null
    type: $Enums.BiometricType | null
    hash: string | null
    voterId: string | null
  }

  export type BiometricDataMaxAggregateOutputType = {
    id: string | null
    type: $Enums.BiometricType | null
    hash: string | null
    voterId: string | null
  }

  export type BiometricDataCountAggregateOutputType = {
    id: number
    type: number
    hash: number
    voterId: number
    _all: number
  }


  export type BiometricDataMinAggregateInputType = {
    id?: true
    type?: true
    hash?: true
    voterId?: true
  }

  export type BiometricDataMaxAggregateInputType = {
    id?: true
    type?: true
    hash?: true
    voterId?: true
  }

  export type BiometricDataCountAggregateInputType = {
    id?: true
    type?: true
    hash?: true
    voterId?: true
    _all?: true
  }

  export type BiometricDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiometricData to aggregate.
     */
    where?: BiometricDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricData to fetch.
     */
    orderBy?: BiometricDataOrderByWithRelationInput | BiometricDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BiometricDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BiometricData
    **/
    _count?: true | BiometricDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BiometricDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BiometricDataMaxAggregateInputType
  }

  export type GetBiometricDataAggregateType<T extends BiometricDataAggregateArgs> = {
        [P in keyof T & keyof AggregateBiometricData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBiometricData[P]>
      : GetScalarType<T[P], AggregateBiometricData[P]>
  }




  export type BiometricDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BiometricDataWhereInput
    orderBy?: BiometricDataOrderByWithAggregationInput | BiometricDataOrderByWithAggregationInput[]
    by: BiometricDataScalarFieldEnum[] | BiometricDataScalarFieldEnum
    having?: BiometricDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BiometricDataCountAggregateInputType | true
    _min?: BiometricDataMinAggregateInputType
    _max?: BiometricDataMaxAggregateInputType
  }

  export type BiometricDataGroupByOutputType = {
    id: string
    type: $Enums.BiometricType
    hash: string
    voterId: string
    _count: BiometricDataCountAggregateOutputType | null
    _min: BiometricDataMinAggregateOutputType | null
    _max: BiometricDataMaxAggregateOutputType | null
  }

  type GetBiometricDataGroupByPayload<T extends BiometricDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BiometricDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BiometricDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BiometricDataGroupByOutputType[P]>
            : GetScalarType<T[P], BiometricDataGroupByOutputType[P]>
        }
      >
    >


  export type BiometricDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    hash?: boolean
    voterId?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biometricData"]>

  export type BiometricDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    hash?: boolean
    voterId?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biometricData"]>

  export type BiometricDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    hash?: boolean
    voterId?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["biometricData"]>

  export type BiometricDataSelectScalar = {
    id?: boolean
    type?: boolean
    hash?: boolean
    voterId?: boolean
  }

  export type BiometricDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "hash" | "voterId", ExtArgs["result"]["biometricData"]>
  export type BiometricDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }
  export type BiometricDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }
  export type BiometricDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }

  export type $BiometricDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BiometricData"
    objects: {
      voter: Prisma.$VoterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.BiometricType
      hash: string
      voterId: string
    }, ExtArgs["result"]["biometricData"]>
    composites: {}
  }

  type BiometricDataGetPayload<S extends boolean | null | undefined | BiometricDataDefaultArgs> = $Result.GetResult<Prisma.$BiometricDataPayload, S>

  type BiometricDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BiometricDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BiometricDataCountAggregateInputType | true
    }

  export interface BiometricDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BiometricData'], meta: { name: 'BiometricData' } }
    /**
     * Find zero or one BiometricData that matches the filter.
     * @param {BiometricDataFindUniqueArgs} args - Arguments to find a BiometricData
     * @example
     * // Get one BiometricData
     * const biometricData = await prisma.biometricData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BiometricDataFindUniqueArgs>(args: SelectSubset<T, BiometricDataFindUniqueArgs<ExtArgs>>): Prisma__BiometricDataClient<$Result.GetResult<Prisma.$BiometricDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BiometricData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BiometricDataFindUniqueOrThrowArgs} args - Arguments to find a BiometricData
     * @example
     * // Get one BiometricData
     * const biometricData = await prisma.biometricData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BiometricDataFindUniqueOrThrowArgs>(args: SelectSubset<T, BiometricDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BiometricDataClient<$Result.GetResult<Prisma.$BiometricDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BiometricData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDataFindFirstArgs} args - Arguments to find a BiometricData
     * @example
     * // Get one BiometricData
     * const biometricData = await prisma.biometricData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BiometricDataFindFirstArgs>(args?: SelectSubset<T, BiometricDataFindFirstArgs<ExtArgs>>): Prisma__BiometricDataClient<$Result.GetResult<Prisma.$BiometricDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BiometricData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDataFindFirstOrThrowArgs} args - Arguments to find a BiometricData
     * @example
     * // Get one BiometricData
     * const biometricData = await prisma.biometricData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BiometricDataFindFirstOrThrowArgs>(args?: SelectSubset<T, BiometricDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__BiometricDataClient<$Result.GetResult<Prisma.$BiometricDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BiometricData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BiometricData
     * const biometricData = await prisma.biometricData.findMany()
     * 
     * // Get first 10 BiometricData
     * const biometricData = await prisma.biometricData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const biometricDataWithIdOnly = await prisma.biometricData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BiometricDataFindManyArgs>(args?: SelectSubset<T, BiometricDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BiometricData.
     * @param {BiometricDataCreateArgs} args - Arguments to create a BiometricData.
     * @example
     * // Create one BiometricData
     * const BiometricData = await prisma.biometricData.create({
     *   data: {
     *     // ... data to create a BiometricData
     *   }
     * })
     * 
     */
    create<T extends BiometricDataCreateArgs>(args: SelectSubset<T, BiometricDataCreateArgs<ExtArgs>>): Prisma__BiometricDataClient<$Result.GetResult<Prisma.$BiometricDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BiometricData.
     * @param {BiometricDataCreateManyArgs} args - Arguments to create many BiometricData.
     * @example
     * // Create many BiometricData
     * const biometricData = await prisma.biometricData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BiometricDataCreateManyArgs>(args?: SelectSubset<T, BiometricDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BiometricData and returns the data saved in the database.
     * @param {BiometricDataCreateManyAndReturnArgs} args - Arguments to create many BiometricData.
     * @example
     * // Create many BiometricData
     * const biometricData = await prisma.biometricData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BiometricData and only return the `id`
     * const biometricDataWithIdOnly = await prisma.biometricData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BiometricDataCreateManyAndReturnArgs>(args?: SelectSubset<T, BiometricDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BiometricData.
     * @param {BiometricDataDeleteArgs} args - Arguments to delete one BiometricData.
     * @example
     * // Delete one BiometricData
     * const BiometricData = await prisma.biometricData.delete({
     *   where: {
     *     // ... filter to delete one BiometricData
     *   }
     * })
     * 
     */
    delete<T extends BiometricDataDeleteArgs>(args: SelectSubset<T, BiometricDataDeleteArgs<ExtArgs>>): Prisma__BiometricDataClient<$Result.GetResult<Prisma.$BiometricDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BiometricData.
     * @param {BiometricDataUpdateArgs} args - Arguments to update one BiometricData.
     * @example
     * // Update one BiometricData
     * const biometricData = await prisma.biometricData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BiometricDataUpdateArgs>(args: SelectSubset<T, BiometricDataUpdateArgs<ExtArgs>>): Prisma__BiometricDataClient<$Result.GetResult<Prisma.$BiometricDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BiometricData.
     * @param {BiometricDataDeleteManyArgs} args - Arguments to filter BiometricData to delete.
     * @example
     * // Delete a few BiometricData
     * const { count } = await prisma.biometricData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BiometricDataDeleteManyArgs>(args?: SelectSubset<T, BiometricDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BiometricData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BiometricData
     * const biometricData = await prisma.biometricData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BiometricDataUpdateManyArgs>(args: SelectSubset<T, BiometricDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BiometricData and returns the data updated in the database.
     * @param {BiometricDataUpdateManyAndReturnArgs} args - Arguments to update many BiometricData.
     * @example
     * // Update many BiometricData
     * const biometricData = await prisma.biometricData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BiometricData and only return the `id`
     * const biometricDataWithIdOnly = await prisma.biometricData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BiometricDataUpdateManyAndReturnArgs>(args: SelectSubset<T, BiometricDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometricDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BiometricData.
     * @param {BiometricDataUpsertArgs} args - Arguments to update or create a BiometricData.
     * @example
     * // Update or create a BiometricData
     * const biometricData = await prisma.biometricData.upsert({
     *   create: {
     *     // ... data to create a BiometricData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BiometricData we want to update
     *   }
     * })
     */
    upsert<T extends BiometricDataUpsertArgs>(args: SelectSubset<T, BiometricDataUpsertArgs<ExtArgs>>): Prisma__BiometricDataClient<$Result.GetResult<Prisma.$BiometricDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BiometricData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDataCountArgs} args - Arguments to filter BiometricData to count.
     * @example
     * // Count the number of BiometricData
     * const count = await prisma.biometricData.count({
     *   where: {
     *     // ... the filter for the BiometricData we want to count
     *   }
     * })
    **/
    count<T extends BiometricDataCountArgs>(
      args?: Subset<T, BiometricDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BiometricDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BiometricData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BiometricDataAggregateArgs>(args: Subset<T, BiometricDataAggregateArgs>): Prisma.PrismaPromise<GetBiometricDataAggregateType<T>>

    /**
     * Group by BiometricData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometricDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BiometricDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BiometricDataGroupByArgs['orderBy'] }
        : { orderBy?: BiometricDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BiometricDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBiometricDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BiometricData model
   */
  readonly fields: BiometricDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BiometricData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BiometricDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voter<T extends VoterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoterDefaultArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BiometricData model
   */
  interface BiometricDataFieldRefs {
    readonly id: FieldRef<"BiometricData", 'String'>
    readonly type: FieldRef<"BiometricData", 'BiometricType'>
    readonly hash: FieldRef<"BiometricData", 'String'>
    readonly voterId: FieldRef<"BiometricData", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BiometricData findUnique
   */
  export type BiometricDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricData
     */
    select?: BiometricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricData
     */
    omit?: BiometricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDataInclude<ExtArgs> | null
    /**
     * Filter, which BiometricData to fetch.
     */
    where: BiometricDataWhereUniqueInput
  }

  /**
   * BiometricData findUniqueOrThrow
   */
  export type BiometricDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricData
     */
    select?: BiometricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricData
     */
    omit?: BiometricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDataInclude<ExtArgs> | null
    /**
     * Filter, which BiometricData to fetch.
     */
    where: BiometricDataWhereUniqueInput
  }

  /**
   * BiometricData findFirst
   */
  export type BiometricDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricData
     */
    select?: BiometricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricData
     */
    omit?: BiometricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDataInclude<ExtArgs> | null
    /**
     * Filter, which BiometricData to fetch.
     */
    where?: BiometricDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricData to fetch.
     */
    orderBy?: BiometricDataOrderByWithRelationInput | BiometricDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiometricData.
     */
    cursor?: BiometricDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiometricData.
     */
    distinct?: BiometricDataScalarFieldEnum | BiometricDataScalarFieldEnum[]
  }

  /**
   * BiometricData findFirstOrThrow
   */
  export type BiometricDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricData
     */
    select?: BiometricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricData
     */
    omit?: BiometricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDataInclude<ExtArgs> | null
    /**
     * Filter, which BiometricData to fetch.
     */
    where?: BiometricDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricData to fetch.
     */
    orderBy?: BiometricDataOrderByWithRelationInput | BiometricDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BiometricData.
     */
    cursor?: BiometricDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BiometricData.
     */
    distinct?: BiometricDataScalarFieldEnum | BiometricDataScalarFieldEnum[]
  }

  /**
   * BiometricData findMany
   */
  export type BiometricDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricData
     */
    select?: BiometricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricData
     */
    omit?: BiometricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDataInclude<ExtArgs> | null
    /**
     * Filter, which BiometricData to fetch.
     */
    where?: BiometricDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BiometricData to fetch.
     */
    orderBy?: BiometricDataOrderByWithRelationInput | BiometricDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BiometricData.
     */
    cursor?: BiometricDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BiometricData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BiometricData.
     */
    skip?: number
    distinct?: BiometricDataScalarFieldEnum | BiometricDataScalarFieldEnum[]
  }

  /**
   * BiometricData create
   */
  export type BiometricDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricData
     */
    select?: BiometricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricData
     */
    omit?: BiometricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDataInclude<ExtArgs> | null
    /**
     * The data needed to create a BiometricData.
     */
    data: XOR<BiometricDataCreateInput, BiometricDataUncheckedCreateInput>
  }

  /**
   * BiometricData createMany
   */
  export type BiometricDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BiometricData.
     */
    data: BiometricDataCreateManyInput | BiometricDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BiometricData createManyAndReturn
   */
  export type BiometricDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricData
     */
    select?: BiometricDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricData
     */
    omit?: BiometricDataOmit<ExtArgs> | null
    /**
     * The data used to create many BiometricData.
     */
    data: BiometricDataCreateManyInput | BiometricDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BiometricData update
   */
  export type BiometricDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricData
     */
    select?: BiometricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricData
     */
    omit?: BiometricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDataInclude<ExtArgs> | null
    /**
     * The data needed to update a BiometricData.
     */
    data: XOR<BiometricDataUpdateInput, BiometricDataUncheckedUpdateInput>
    /**
     * Choose, which BiometricData to update.
     */
    where: BiometricDataWhereUniqueInput
  }

  /**
   * BiometricData updateMany
   */
  export type BiometricDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BiometricData.
     */
    data: XOR<BiometricDataUpdateManyMutationInput, BiometricDataUncheckedUpdateManyInput>
    /**
     * Filter which BiometricData to update
     */
    where?: BiometricDataWhereInput
    /**
     * Limit how many BiometricData to update.
     */
    limit?: number
  }

  /**
   * BiometricData updateManyAndReturn
   */
  export type BiometricDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricData
     */
    select?: BiometricDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricData
     */
    omit?: BiometricDataOmit<ExtArgs> | null
    /**
     * The data used to update BiometricData.
     */
    data: XOR<BiometricDataUpdateManyMutationInput, BiometricDataUncheckedUpdateManyInput>
    /**
     * Filter which BiometricData to update
     */
    where?: BiometricDataWhereInput
    /**
     * Limit how many BiometricData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BiometricData upsert
   */
  export type BiometricDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricData
     */
    select?: BiometricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricData
     */
    omit?: BiometricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDataInclude<ExtArgs> | null
    /**
     * The filter to search for the BiometricData to update in case it exists.
     */
    where: BiometricDataWhereUniqueInput
    /**
     * In case the BiometricData found by the `where` argument doesn't exist, create a new BiometricData with this data.
     */
    create: XOR<BiometricDataCreateInput, BiometricDataUncheckedCreateInput>
    /**
     * In case the BiometricData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BiometricDataUpdateInput, BiometricDataUncheckedUpdateInput>
  }

  /**
   * BiometricData delete
   */
  export type BiometricDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricData
     */
    select?: BiometricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricData
     */
    omit?: BiometricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDataInclude<ExtArgs> | null
    /**
     * Filter which BiometricData to delete.
     */
    where: BiometricDataWhereUniqueInput
  }

  /**
   * BiometricData deleteMany
   */
  export type BiometricDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BiometricData to delete
     */
    where?: BiometricDataWhereInput
    /**
     * Limit how many BiometricData to delete.
     */
    limit?: number
  }

  /**
   * BiometricData without action
   */
  export type BiometricDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BiometricData
     */
    select?: BiometricDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BiometricData
     */
    omit?: BiometricDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometricDataInclude<ExtArgs> | null
  }


  /**
   * Model IdentityVerification
   */

  export type AggregateIdentityVerification = {
    _count: IdentityVerificationCountAggregateOutputType | null
    _min: IdentityVerificationMinAggregateOutputType | null
    _max: IdentityVerificationMaxAggregateOutputType | null
  }

  export type IdentityVerificationMinAggregateOutputType = {
    id: string | null
    documentType: $Enums.GovernmentIdType | null
    documentNumber: string | null
    documentImage: string | null
    selfieImage: string | null
    verificationMethod: $Enums.VerificationMethod | null
    verificationProvider: string | null
    status: $Enums.VerificationStatus | null
    voterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IdentityVerificationMaxAggregateOutputType = {
    id: string | null
    documentType: $Enums.GovernmentIdType | null
    documentNumber: string | null
    documentImage: string | null
    selfieImage: string | null
    verificationMethod: $Enums.VerificationMethod | null
    verificationProvider: string | null
    status: $Enums.VerificationStatus | null
    voterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IdentityVerificationCountAggregateOutputType = {
    id: number
    documentType: number
    documentNumber: number
    documentImage: number
    selfieImage: number
    verificationMethod: number
    verificationProvider: number
    status: number
    voterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IdentityVerificationMinAggregateInputType = {
    id?: true
    documentType?: true
    documentNumber?: true
    documentImage?: true
    selfieImage?: true
    verificationMethod?: true
    verificationProvider?: true
    status?: true
    voterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IdentityVerificationMaxAggregateInputType = {
    id?: true
    documentType?: true
    documentNumber?: true
    documentImage?: true
    selfieImage?: true
    verificationMethod?: true
    verificationProvider?: true
    status?: true
    voterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IdentityVerificationCountAggregateInputType = {
    id?: true
    documentType?: true
    documentNumber?: true
    documentImage?: true
    selfieImage?: true
    verificationMethod?: true
    verificationProvider?: true
    status?: true
    voterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IdentityVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdentityVerification to aggregate.
     */
    where?: IdentityVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityVerifications to fetch.
     */
    orderBy?: IdentityVerificationOrderByWithRelationInput | IdentityVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdentityVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdentityVerifications
    **/
    _count?: true | IdentityVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdentityVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdentityVerificationMaxAggregateInputType
  }

  export type GetIdentityVerificationAggregateType<T extends IdentityVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateIdentityVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdentityVerification[P]>
      : GetScalarType<T[P], AggregateIdentityVerification[P]>
  }




  export type IdentityVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentityVerificationWhereInput
    orderBy?: IdentityVerificationOrderByWithAggregationInput | IdentityVerificationOrderByWithAggregationInput[]
    by: IdentityVerificationScalarFieldEnum[] | IdentityVerificationScalarFieldEnum
    having?: IdentityVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdentityVerificationCountAggregateInputType | true
    _min?: IdentityVerificationMinAggregateInputType
    _max?: IdentityVerificationMaxAggregateInputType
  }

  export type IdentityVerificationGroupByOutputType = {
    id: string
    documentType: $Enums.GovernmentIdType
    documentNumber: string
    documentImage: string
    selfieImage: string
    verificationMethod: $Enums.VerificationMethod
    verificationProvider: string | null
    status: $Enums.VerificationStatus
    voterId: string
    createdAt: Date
    updatedAt: Date
    _count: IdentityVerificationCountAggregateOutputType | null
    _min: IdentityVerificationMinAggregateOutputType | null
    _max: IdentityVerificationMaxAggregateOutputType | null
  }

  type GetIdentityVerificationGroupByPayload<T extends IdentityVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdentityVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdentityVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdentityVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], IdentityVerificationGroupByOutputType[P]>
        }
      >
    >


  export type IdentityVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentType?: boolean
    documentNumber?: boolean
    documentImage?: boolean
    selfieImage?: boolean
    verificationMethod?: boolean
    verificationProvider?: boolean
    status?: boolean
    voterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identityVerification"]>

  export type IdentityVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentType?: boolean
    documentNumber?: boolean
    documentImage?: boolean
    selfieImage?: boolean
    verificationMethod?: boolean
    verificationProvider?: boolean
    status?: boolean
    voterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identityVerification"]>

  export type IdentityVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentType?: boolean
    documentNumber?: boolean
    documentImage?: boolean
    selfieImage?: boolean
    verificationMethod?: boolean
    verificationProvider?: boolean
    status?: boolean
    voterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identityVerification"]>

  export type IdentityVerificationSelectScalar = {
    id?: boolean
    documentType?: boolean
    documentNumber?: boolean
    documentImage?: boolean
    selfieImage?: boolean
    verificationMethod?: boolean
    verificationProvider?: boolean
    status?: boolean
    voterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IdentityVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentType" | "documentNumber" | "documentImage" | "selfieImage" | "verificationMethod" | "verificationProvider" | "status" | "voterId" | "createdAt" | "updatedAt", ExtArgs["result"]["identityVerification"]>
  export type IdentityVerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }
  export type IdentityVerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }
  export type IdentityVerificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }

  export type $IdentityVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdentityVerification"
    objects: {
      voter: Prisma.$VoterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentType: $Enums.GovernmentIdType
      documentNumber: string
      documentImage: string
      selfieImage: string
      verificationMethod: $Enums.VerificationMethod
      verificationProvider: string | null
      status: $Enums.VerificationStatus
      voterId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["identityVerification"]>
    composites: {}
  }

  type IdentityVerificationGetPayload<S extends boolean | null | undefined | IdentityVerificationDefaultArgs> = $Result.GetResult<Prisma.$IdentityVerificationPayload, S>

  type IdentityVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdentityVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdentityVerificationCountAggregateInputType | true
    }

  export interface IdentityVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdentityVerification'], meta: { name: 'IdentityVerification' } }
    /**
     * Find zero or one IdentityVerification that matches the filter.
     * @param {IdentityVerificationFindUniqueArgs} args - Arguments to find a IdentityVerification
     * @example
     * // Get one IdentityVerification
     * const identityVerification = await prisma.identityVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdentityVerificationFindUniqueArgs>(args: SelectSubset<T, IdentityVerificationFindUniqueArgs<ExtArgs>>): Prisma__IdentityVerificationClient<$Result.GetResult<Prisma.$IdentityVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdentityVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdentityVerificationFindUniqueOrThrowArgs} args - Arguments to find a IdentityVerification
     * @example
     * // Get one IdentityVerification
     * const identityVerification = await prisma.identityVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdentityVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, IdentityVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdentityVerificationClient<$Result.GetResult<Prisma.$IdentityVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdentityVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityVerificationFindFirstArgs} args - Arguments to find a IdentityVerification
     * @example
     * // Get one IdentityVerification
     * const identityVerification = await prisma.identityVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdentityVerificationFindFirstArgs>(args?: SelectSubset<T, IdentityVerificationFindFirstArgs<ExtArgs>>): Prisma__IdentityVerificationClient<$Result.GetResult<Prisma.$IdentityVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdentityVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityVerificationFindFirstOrThrowArgs} args - Arguments to find a IdentityVerification
     * @example
     * // Get one IdentityVerification
     * const identityVerification = await prisma.identityVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdentityVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, IdentityVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdentityVerificationClient<$Result.GetResult<Prisma.$IdentityVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdentityVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdentityVerifications
     * const identityVerifications = await prisma.identityVerification.findMany()
     * 
     * // Get first 10 IdentityVerifications
     * const identityVerifications = await prisma.identityVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const identityVerificationWithIdOnly = await prisma.identityVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdentityVerificationFindManyArgs>(args?: SelectSubset<T, IdentityVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdentityVerification.
     * @param {IdentityVerificationCreateArgs} args - Arguments to create a IdentityVerification.
     * @example
     * // Create one IdentityVerification
     * const IdentityVerification = await prisma.identityVerification.create({
     *   data: {
     *     // ... data to create a IdentityVerification
     *   }
     * })
     * 
     */
    create<T extends IdentityVerificationCreateArgs>(args: SelectSubset<T, IdentityVerificationCreateArgs<ExtArgs>>): Prisma__IdentityVerificationClient<$Result.GetResult<Prisma.$IdentityVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdentityVerifications.
     * @param {IdentityVerificationCreateManyArgs} args - Arguments to create many IdentityVerifications.
     * @example
     * // Create many IdentityVerifications
     * const identityVerification = await prisma.identityVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdentityVerificationCreateManyArgs>(args?: SelectSubset<T, IdentityVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdentityVerifications and returns the data saved in the database.
     * @param {IdentityVerificationCreateManyAndReturnArgs} args - Arguments to create many IdentityVerifications.
     * @example
     * // Create many IdentityVerifications
     * const identityVerification = await prisma.identityVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IdentityVerifications and only return the `id`
     * const identityVerificationWithIdOnly = await prisma.identityVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdentityVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, IdentityVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IdentityVerification.
     * @param {IdentityVerificationDeleteArgs} args - Arguments to delete one IdentityVerification.
     * @example
     * // Delete one IdentityVerification
     * const IdentityVerification = await prisma.identityVerification.delete({
     *   where: {
     *     // ... filter to delete one IdentityVerification
     *   }
     * })
     * 
     */
    delete<T extends IdentityVerificationDeleteArgs>(args: SelectSubset<T, IdentityVerificationDeleteArgs<ExtArgs>>): Prisma__IdentityVerificationClient<$Result.GetResult<Prisma.$IdentityVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdentityVerification.
     * @param {IdentityVerificationUpdateArgs} args - Arguments to update one IdentityVerification.
     * @example
     * // Update one IdentityVerification
     * const identityVerification = await prisma.identityVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdentityVerificationUpdateArgs>(args: SelectSubset<T, IdentityVerificationUpdateArgs<ExtArgs>>): Prisma__IdentityVerificationClient<$Result.GetResult<Prisma.$IdentityVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdentityVerifications.
     * @param {IdentityVerificationDeleteManyArgs} args - Arguments to filter IdentityVerifications to delete.
     * @example
     * // Delete a few IdentityVerifications
     * const { count } = await prisma.identityVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdentityVerificationDeleteManyArgs>(args?: SelectSubset<T, IdentityVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdentityVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdentityVerifications
     * const identityVerification = await prisma.identityVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdentityVerificationUpdateManyArgs>(args: SelectSubset<T, IdentityVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdentityVerifications and returns the data updated in the database.
     * @param {IdentityVerificationUpdateManyAndReturnArgs} args - Arguments to update many IdentityVerifications.
     * @example
     * // Update many IdentityVerifications
     * const identityVerification = await prisma.identityVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IdentityVerifications and only return the `id`
     * const identityVerificationWithIdOnly = await prisma.identityVerification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IdentityVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, IdentityVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IdentityVerification.
     * @param {IdentityVerificationUpsertArgs} args - Arguments to update or create a IdentityVerification.
     * @example
     * // Update or create a IdentityVerification
     * const identityVerification = await prisma.identityVerification.upsert({
     *   create: {
     *     // ... data to create a IdentityVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdentityVerification we want to update
     *   }
     * })
     */
    upsert<T extends IdentityVerificationUpsertArgs>(args: SelectSubset<T, IdentityVerificationUpsertArgs<ExtArgs>>): Prisma__IdentityVerificationClient<$Result.GetResult<Prisma.$IdentityVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdentityVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityVerificationCountArgs} args - Arguments to filter IdentityVerifications to count.
     * @example
     * // Count the number of IdentityVerifications
     * const count = await prisma.identityVerification.count({
     *   where: {
     *     // ... the filter for the IdentityVerifications we want to count
     *   }
     * })
    **/
    count<T extends IdentityVerificationCountArgs>(
      args?: Subset<T, IdentityVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdentityVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdentityVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IdentityVerificationAggregateArgs>(args: Subset<T, IdentityVerificationAggregateArgs>): Prisma.PrismaPromise<GetIdentityVerificationAggregateType<T>>

    /**
     * Group by IdentityVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityVerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IdentityVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdentityVerificationGroupByArgs['orderBy'] }
        : { orderBy?: IdentityVerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IdentityVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdentityVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdentityVerification model
   */
  readonly fields: IdentityVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdentityVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdentityVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voter<T extends VoterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoterDefaultArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IdentityVerification model
   */
  interface IdentityVerificationFieldRefs {
    readonly id: FieldRef<"IdentityVerification", 'String'>
    readonly documentType: FieldRef<"IdentityVerification", 'GovernmentIdType'>
    readonly documentNumber: FieldRef<"IdentityVerification", 'String'>
    readonly documentImage: FieldRef<"IdentityVerification", 'String'>
    readonly selfieImage: FieldRef<"IdentityVerification", 'String'>
    readonly verificationMethod: FieldRef<"IdentityVerification", 'VerificationMethod'>
    readonly verificationProvider: FieldRef<"IdentityVerification", 'String'>
    readonly status: FieldRef<"IdentityVerification", 'VerificationStatus'>
    readonly voterId: FieldRef<"IdentityVerification", 'String'>
    readonly createdAt: FieldRef<"IdentityVerification", 'DateTime'>
    readonly updatedAt: FieldRef<"IdentityVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IdentityVerification findUnique
   */
  export type IdentityVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityVerification
     */
    select?: IdentityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityVerification
     */
    omit?: IdentityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityVerificationInclude<ExtArgs> | null
    /**
     * Filter, which IdentityVerification to fetch.
     */
    where: IdentityVerificationWhereUniqueInput
  }

  /**
   * IdentityVerification findUniqueOrThrow
   */
  export type IdentityVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityVerification
     */
    select?: IdentityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityVerification
     */
    omit?: IdentityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityVerificationInclude<ExtArgs> | null
    /**
     * Filter, which IdentityVerification to fetch.
     */
    where: IdentityVerificationWhereUniqueInput
  }

  /**
   * IdentityVerification findFirst
   */
  export type IdentityVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityVerification
     */
    select?: IdentityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityVerification
     */
    omit?: IdentityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityVerificationInclude<ExtArgs> | null
    /**
     * Filter, which IdentityVerification to fetch.
     */
    where?: IdentityVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityVerifications to fetch.
     */
    orderBy?: IdentityVerificationOrderByWithRelationInput | IdentityVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdentityVerifications.
     */
    cursor?: IdentityVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdentityVerifications.
     */
    distinct?: IdentityVerificationScalarFieldEnum | IdentityVerificationScalarFieldEnum[]
  }

  /**
   * IdentityVerification findFirstOrThrow
   */
  export type IdentityVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityVerification
     */
    select?: IdentityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityVerification
     */
    omit?: IdentityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityVerificationInclude<ExtArgs> | null
    /**
     * Filter, which IdentityVerification to fetch.
     */
    where?: IdentityVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityVerifications to fetch.
     */
    orderBy?: IdentityVerificationOrderByWithRelationInput | IdentityVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdentityVerifications.
     */
    cursor?: IdentityVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdentityVerifications.
     */
    distinct?: IdentityVerificationScalarFieldEnum | IdentityVerificationScalarFieldEnum[]
  }

  /**
   * IdentityVerification findMany
   */
  export type IdentityVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityVerification
     */
    select?: IdentityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityVerification
     */
    omit?: IdentityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityVerificationInclude<ExtArgs> | null
    /**
     * Filter, which IdentityVerifications to fetch.
     */
    where?: IdentityVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityVerifications to fetch.
     */
    orderBy?: IdentityVerificationOrderByWithRelationInput | IdentityVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdentityVerifications.
     */
    cursor?: IdentityVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityVerifications.
     */
    skip?: number
    distinct?: IdentityVerificationScalarFieldEnum | IdentityVerificationScalarFieldEnum[]
  }

  /**
   * IdentityVerification create
   */
  export type IdentityVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityVerification
     */
    select?: IdentityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityVerification
     */
    omit?: IdentityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityVerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a IdentityVerification.
     */
    data: XOR<IdentityVerificationCreateInput, IdentityVerificationUncheckedCreateInput>
  }

  /**
   * IdentityVerification createMany
   */
  export type IdentityVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdentityVerifications.
     */
    data: IdentityVerificationCreateManyInput | IdentityVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdentityVerification createManyAndReturn
   */
  export type IdentityVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityVerification
     */
    select?: IdentityVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityVerification
     */
    omit?: IdentityVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many IdentityVerifications.
     */
    data: IdentityVerificationCreateManyInput | IdentityVerificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityVerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdentityVerification update
   */
  export type IdentityVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityVerification
     */
    select?: IdentityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityVerification
     */
    omit?: IdentityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityVerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a IdentityVerification.
     */
    data: XOR<IdentityVerificationUpdateInput, IdentityVerificationUncheckedUpdateInput>
    /**
     * Choose, which IdentityVerification to update.
     */
    where: IdentityVerificationWhereUniqueInput
  }

  /**
   * IdentityVerification updateMany
   */
  export type IdentityVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdentityVerifications.
     */
    data: XOR<IdentityVerificationUpdateManyMutationInput, IdentityVerificationUncheckedUpdateManyInput>
    /**
     * Filter which IdentityVerifications to update
     */
    where?: IdentityVerificationWhereInput
    /**
     * Limit how many IdentityVerifications to update.
     */
    limit?: number
  }

  /**
   * IdentityVerification updateManyAndReturn
   */
  export type IdentityVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityVerification
     */
    select?: IdentityVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityVerification
     */
    omit?: IdentityVerificationOmit<ExtArgs> | null
    /**
     * The data used to update IdentityVerifications.
     */
    data: XOR<IdentityVerificationUpdateManyMutationInput, IdentityVerificationUncheckedUpdateManyInput>
    /**
     * Filter which IdentityVerifications to update
     */
    where?: IdentityVerificationWhereInput
    /**
     * Limit how many IdentityVerifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityVerificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdentityVerification upsert
   */
  export type IdentityVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityVerification
     */
    select?: IdentityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityVerification
     */
    omit?: IdentityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityVerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the IdentityVerification to update in case it exists.
     */
    where: IdentityVerificationWhereUniqueInput
    /**
     * In case the IdentityVerification found by the `where` argument doesn't exist, create a new IdentityVerification with this data.
     */
    create: XOR<IdentityVerificationCreateInput, IdentityVerificationUncheckedCreateInput>
    /**
     * In case the IdentityVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdentityVerificationUpdateInput, IdentityVerificationUncheckedUpdateInput>
  }

  /**
   * IdentityVerification delete
   */
  export type IdentityVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityVerification
     */
    select?: IdentityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityVerification
     */
    omit?: IdentityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityVerificationInclude<ExtArgs> | null
    /**
     * Filter which IdentityVerification to delete.
     */
    where: IdentityVerificationWhereUniqueInput
  }

  /**
   * IdentityVerification deleteMany
   */
  export type IdentityVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdentityVerifications to delete
     */
    where?: IdentityVerificationWhereInput
    /**
     * Limit how many IdentityVerifications to delete.
     */
    limit?: number
  }

  /**
   * IdentityVerification without action
   */
  export type IdentityVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityVerification
     */
    select?: IdentityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityVerification
     */
    omit?: IdentityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityVerificationInclude<ExtArgs> | null
  }


  /**
   * Model EligibilityVerification
   */

  export type AggregateEligibilityVerification = {
    _count: EligibilityVerificationCountAggregateOutputType | null
    _min: EligibilityVerificationMinAggregateOutputType | null
    _max: EligibilityVerificationMaxAggregateOutputType | null
  }

  export type EligibilityVerificationMinAggregateOutputType = {
    id: string | null
    ageVerified: boolean | null
    citizenshipVerified: boolean | null
    residencyVerified: boolean | null
    duplicateCheck: boolean | null
    status: $Enums.VerificationStatus | null
    voterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EligibilityVerificationMaxAggregateOutputType = {
    id: string | null
    ageVerified: boolean | null
    citizenshipVerified: boolean | null
    residencyVerified: boolean | null
    duplicateCheck: boolean | null
    status: $Enums.VerificationStatus | null
    voterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EligibilityVerificationCountAggregateOutputType = {
    id: number
    ageVerified: number
    citizenshipVerified: number
    residencyVerified: number
    duplicateCheck: number
    status: number
    voterId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EligibilityVerificationMinAggregateInputType = {
    id?: true
    ageVerified?: true
    citizenshipVerified?: true
    residencyVerified?: true
    duplicateCheck?: true
    status?: true
    voterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EligibilityVerificationMaxAggregateInputType = {
    id?: true
    ageVerified?: true
    citizenshipVerified?: true
    residencyVerified?: true
    duplicateCheck?: true
    status?: true
    voterId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EligibilityVerificationCountAggregateInputType = {
    id?: true
    ageVerified?: true
    citizenshipVerified?: true
    residencyVerified?: true
    duplicateCheck?: true
    status?: true
    voterId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EligibilityVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EligibilityVerification to aggregate.
     */
    where?: EligibilityVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibilityVerifications to fetch.
     */
    orderBy?: EligibilityVerificationOrderByWithRelationInput | EligibilityVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EligibilityVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibilityVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibilityVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EligibilityVerifications
    **/
    _count?: true | EligibilityVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EligibilityVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EligibilityVerificationMaxAggregateInputType
  }

  export type GetEligibilityVerificationAggregateType<T extends EligibilityVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEligibilityVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEligibilityVerification[P]>
      : GetScalarType<T[P], AggregateEligibilityVerification[P]>
  }




  export type EligibilityVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EligibilityVerificationWhereInput
    orderBy?: EligibilityVerificationOrderByWithAggregationInput | EligibilityVerificationOrderByWithAggregationInput[]
    by: EligibilityVerificationScalarFieldEnum[] | EligibilityVerificationScalarFieldEnum
    having?: EligibilityVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EligibilityVerificationCountAggregateInputType | true
    _min?: EligibilityVerificationMinAggregateInputType
    _max?: EligibilityVerificationMaxAggregateInputType
  }

  export type EligibilityVerificationGroupByOutputType = {
    id: string
    ageVerified: boolean
    citizenshipVerified: boolean
    residencyVerified: boolean
    duplicateCheck: boolean
    status: $Enums.VerificationStatus
    voterId: string
    createdAt: Date
    updatedAt: Date
    _count: EligibilityVerificationCountAggregateOutputType | null
    _min: EligibilityVerificationMinAggregateOutputType | null
    _max: EligibilityVerificationMaxAggregateOutputType | null
  }

  type GetEligibilityVerificationGroupByPayload<T extends EligibilityVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EligibilityVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EligibilityVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EligibilityVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], EligibilityVerificationGroupByOutputType[P]>
        }
      >
    >


  export type EligibilityVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ageVerified?: boolean
    citizenshipVerified?: boolean
    residencyVerified?: boolean
    duplicateCheck?: boolean
    status?: boolean
    voterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eligibilityVerification"]>

  export type EligibilityVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ageVerified?: boolean
    citizenshipVerified?: boolean
    residencyVerified?: boolean
    duplicateCheck?: boolean
    status?: boolean
    voterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eligibilityVerification"]>

  export type EligibilityVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ageVerified?: boolean
    citizenshipVerified?: boolean
    residencyVerified?: boolean
    duplicateCheck?: boolean
    status?: boolean
    voterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eligibilityVerification"]>

  export type EligibilityVerificationSelectScalar = {
    id?: boolean
    ageVerified?: boolean
    citizenshipVerified?: boolean
    residencyVerified?: boolean
    duplicateCheck?: boolean
    status?: boolean
    voterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EligibilityVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ageVerified" | "citizenshipVerified" | "residencyVerified" | "duplicateCheck" | "status" | "voterId" | "createdAt" | "updatedAt", ExtArgs["result"]["eligibilityVerification"]>
  export type EligibilityVerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }
  export type EligibilityVerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }
  export type EligibilityVerificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }

  export type $EligibilityVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EligibilityVerification"
    objects: {
      voter: Prisma.$VoterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ageVerified: boolean
      citizenshipVerified: boolean
      residencyVerified: boolean
      duplicateCheck: boolean
      status: $Enums.VerificationStatus
      voterId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eligibilityVerification"]>
    composites: {}
  }

  type EligibilityVerificationGetPayload<S extends boolean | null | undefined | EligibilityVerificationDefaultArgs> = $Result.GetResult<Prisma.$EligibilityVerificationPayload, S>

  type EligibilityVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EligibilityVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EligibilityVerificationCountAggregateInputType | true
    }

  export interface EligibilityVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EligibilityVerification'], meta: { name: 'EligibilityVerification' } }
    /**
     * Find zero or one EligibilityVerification that matches the filter.
     * @param {EligibilityVerificationFindUniqueArgs} args - Arguments to find a EligibilityVerification
     * @example
     * // Get one EligibilityVerification
     * const eligibilityVerification = await prisma.eligibilityVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EligibilityVerificationFindUniqueArgs>(args: SelectSubset<T, EligibilityVerificationFindUniqueArgs<ExtArgs>>): Prisma__EligibilityVerificationClient<$Result.GetResult<Prisma.$EligibilityVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EligibilityVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EligibilityVerificationFindUniqueOrThrowArgs} args - Arguments to find a EligibilityVerification
     * @example
     * // Get one EligibilityVerification
     * const eligibilityVerification = await prisma.eligibilityVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EligibilityVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, EligibilityVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EligibilityVerificationClient<$Result.GetResult<Prisma.$EligibilityVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EligibilityVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityVerificationFindFirstArgs} args - Arguments to find a EligibilityVerification
     * @example
     * // Get one EligibilityVerification
     * const eligibilityVerification = await prisma.eligibilityVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EligibilityVerificationFindFirstArgs>(args?: SelectSubset<T, EligibilityVerificationFindFirstArgs<ExtArgs>>): Prisma__EligibilityVerificationClient<$Result.GetResult<Prisma.$EligibilityVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EligibilityVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityVerificationFindFirstOrThrowArgs} args - Arguments to find a EligibilityVerification
     * @example
     * // Get one EligibilityVerification
     * const eligibilityVerification = await prisma.eligibilityVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EligibilityVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, EligibilityVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EligibilityVerificationClient<$Result.GetResult<Prisma.$EligibilityVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EligibilityVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EligibilityVerifications
     * const eligibilityVerifications = await prisma.eligibilityVerification.findMany()
     * 
     * // Get first 10 EligibilityVerifications
     * const eligibilityVerifications = await prisma.eligibilityVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eligibilityVerificationWithIdOnly = await prisma.eligibilityVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EligibilityVerificationFindManyArgs>(args?: SelectSubset<T, EligibilityVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EligibilityVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EligibilityVerification.
     * @param {EligibilityVerificationCreateArgs} args - Arguments to create a EligibilityVerification.
     * @example
     * // Create one EligibilityVerification
     * const EligibilityVerification = await prisma.eligibilityVerification.create({
     *   data: {
     *     // ... data to create a EligibilityVerification
     *   }
     * })
     * 
     */
    create<T extends EligibilityVerificationCreateArgs>(args: SelectSubset<T, EligibilityVerificationCreateArgs<ExtArgs>>): Prisma__EligibilityVerificationClient<$Result.GetResult<Prisma.$EligibilityVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EligibilityVerifications.
     * @param {EligibilityVerificationCreateManyArgs} args - Arguments to create many EligibilityVerifications.
     * @example
     * // Create many EligibilityVerifications
     * const eligibilityVerification = await prisma.eligibilityVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EligibilityVerificationCreateManyArgs>(args?: SelectSubset<T, EligibilityVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EligibilityVerifications and returns the data saved in the database.
     * @param {EligibilityVerificationCreateManyAndReturnArgs} args - Arguments to create many EligibilityVerifications.
     * @example
     * // Create many EligibilityVerifications
     * const eligibilityVerification = await prisma.eligibilityVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EligibilityVerifications and only return the `id`
     * const eligibilityVerificationWithIdOnly = await prisma.eligibilityVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EligibilityVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, EligibilityVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EligibilityVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EligibilityVerification.
     * @param {EligibilityVerificationDeleteArgs} args - Arguments to delete one EligibilityVerification.
     * @example
     * // Delete one EligibilityVerification
     * const EligibilityVerification = await prisma.eligibilityVerification.delete({
     *   where: {
     *     // ... filter to delete one EligibilityVerification
     *   }
     * })
     * 
     */
    delete<T extends EligibilityVerificationDeleteArgs>(args: SelectSubset<T, EligibilityVerificationDeleteArgs<ExtArgs>>): Prisma__EligibilityVerificationClient<$Result.GetResult<Prisma.$EligibilityVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EligibilityVerification.
     * @param {EligibilityVerificationUpdateArgs} args - Arguments to update one EligibilityVerification.
     * @example
     * // Update one EligibilityVerification
     * const eligibilityVerification = await prisma.eligibilityVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EligibilityVerificationUpdateArgs>(args: SelectSubset<T, EligibilityVerificationUpdateArgs<ExtArgs>>): Prisma__EligibilityVerificationClient<$Result.GetResult<Prisma.$EligibilityVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EligibilityVerifications.
     * @param {EligibilityVerificationDeleteManyArgs} args - Arguments to filter EligibilityVerifications to delete.
     * @example
     * // Delete a few EligibilityVerifications
     * const { count } = await prisma.eligibilityVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EligibilityVerificationDeleteManyArgs>(args?: SelectSubset<T, EligibilityVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EligibilityVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EligibilityVerifications
     * const eligibilityVerification = await prisma.eligibilityVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EligibilityVerificationUpdateManyArgs>(args: SelectSubset<T, EligibilityVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EligibilityVerifications and returns the data updated in the database.
     * @param {EligibilityVerificationUpdateManyAndReturnArgs} args - Arguments to update many EligibilityVerifications.
     * @example
     * // Update many EligibilityVerifications
     * const eligibilityVerification = await prisma.eligibilityVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EligibilityVerifications and only return the `id`
     * const eligibilityVerificationWithIdOnly = await prisma.eligibilityVerification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EligibilityVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, EligibilityVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EligibilityVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EligibilityVerification.
     * @param {EligibilityVerificationUpsertArgs} args - Arguments to update or create a EligibilityVerification.
     * @example
     * // Update or create a EligibilityVerification
     * const eligibilityVerification = await prisma.eligibilityVerification.upsert({
     *   create: {
     *     // ... data to create a EligibilityVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EligibilityVerification we want to update
     *   }
     * })
     */
    upsert<T extends EligibilityVerificationUpsertArgs>(args: SelectSubset<T, EligibilityVerificationUpsertArgs<ExtArgs>>): Prisma__EligibilityVerificationClient<$Result.GetResult<Prisma.$EligibilityVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EligibilityVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityVerificationCountArgs} args - Arguments to filter EligibilityVerifications to count.
     * @example
     * // Count the number of EligibilityVerifications
     * const count = await prisma.eligibilityVerification.count({
     *   where: {
     *     // ... the filter for the EligibilityVerifications we want to count
     *   }
     * })
    **/
    count<T extends EligibilityVerificationCountArgs>(
      args?: Subset<T, EligibilityVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EligibilityVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EligibilityVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EligibilityVerificationAggregateArgs>(args: Subset<T, EligibilityVerificationAggregateArgs>): Prisma.PrismaPromise<GetEligibilityVerificationAggregateType<T>>

    /**
     * Group by EligibilityVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EligibilityVerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EligibilityVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EligibilityVerificationGroupByArgs['orderBy'] }
        : { orderBy?: EligibilityVerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EligibilityVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEligibilityVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EligibilityVerification model
   */
  readonly fields: EligibilityVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EligibilityVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EligibilityVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voter<T extends VoterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoterDefaultArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EligibilityVerification model
   */
  interface EligibilityVerificationFieldRefs {
    readonly id: FieldRef<"EligibilityVerification", 'String'>
    readonly ageVerified: FieldRef<"EligibilityVerification", 'Boolean'>
    readonly citizenshipVerified: FieldRef<"EligibilityVerification", 'Boolean'>
    readonly residencyVerified: FieldRef<"EligibilityVerification", 'Boolean'>
    readonly duplicateCheck: FieldRef<"EligibilityVerification", 'Boolean'>
    readonly status: FieldRef<"EligibilityVerification", 'VerificationStatus'>
    readonly voterId: FieldRef<"EligibilityVerification", 'String'>
    readonly createdAt: FieldRef<"EligibilityVerification", 'DateTime'>
    readonly updatedAt: FieldRef<"EligibilityVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EligibilityVerification findUnique
   */
  export type EligibilityVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityVerification
     */
    select?: EligibilityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityVerification
     */
    omit?: EligibilityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityVerification to fetch.
     */
    where: EligibilityVerificationWhereUniqueInput
  }

  /**
   * EligibilityVerification findUniqueOrThrow
   */
  export type EligibilityVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityVerification
     */
    select?: EligibilityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityVerification
     */
    omit?: EligibilityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityVerification to fetch.
     */
    where: EligibilityVerificationWhereUniqueInput
  }

  /**
   * EligibilityVerification findFirst
   */
  export type EligibilityVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityVerification
     */
    select?: EligibilityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityVerification
     */
    omit?: EligibilityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityVerification to fetch.
     */
    where?: EligibilityVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibilityVerifications to fetch.
     */
    orderBy?: EligibilityVerificationOrderByWithRelationInput | EligibilityVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EligibilityVerifications.
     */
    cursor?: EligibilityVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibilityVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibilityVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EligibilityVerifications.
     */
    distinct?: EligibilityVerificationScalarFieldEnum | EligibilityVerificationScalarFieldEnum[]
  }

  /**
   * EligibilityVerification findFirstOrThrow
   */
  export type EligibilityVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityVerification
     */
    select?: EligibilityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityVerification
     */
    omit?: EligibilityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityVerification to fetch.
     */
    where?: EligibilityVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibilityVerifications to fetch.
     */
    orderBy?: EligibilityVerificationOrderByWithRelationInput | EligibilityVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EligibilityVerifications.
     */
    cursor?: EligibilityVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibilityVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibilityVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EligibilityVerifications.
     */
    distinct?: EligibilityVerificationScalarFieldEnum | EligibilityVerificationScalarFieldEnum[]
  }

  /**
   * EligibilityVerification findMany
   */
  export type EligibilityVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityVerification
     */
    select?: EligibilityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityVerification
     */
    omit?: EligibilityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityVerificationInclude<ExtArgs> | null
    /**
     * Filter, which EligibilityVerifications to fetch.
     */
    where?: EligibilityVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EligibilityVerifications to fetch.
     */
    orderBy?: EligibilityVerificationOrderByWithRelationInput | EligibilityVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EligibilityVerifications.
     */
    cursor?: EligibilityVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EligibilityVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EligibilityVerifications.
     */
    skip?: number
    distinct?: EligibilityVerificationScalarFieldEnum | EligibilityVerificationScalarFieldEnum[]
  }

  /**
   * EligibilityVerification create
   */
  export type EligibilityVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityVerification
     */
    select?: EligibilityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityVerification
     */
    omit?: EligibilityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityVerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a EligibilityVerification.
     */
    data: XOR<EligibilityVerificationCreateInput, EligibilityVerificationUncheckedCreateInput>
  }

  /**
   * EligibilityVerification createMany
   */
  export type EligibilityVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EligibilityVerifications.
     */
    data: EligibilityVerificationCreateManyInput | EligibilityVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EligibilityVerification createManyAndReturn
   */
  export type EligibilityVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityVerification
     */
    select?: EligibilityVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityVerification
     */
    omit?: EligibilityVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many EligibilityVerifications.
     */
    data: EligibilityVerificationCreateManyInput | EligibilityVerificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityVerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EligibilityVerification update
   */
  export type EligibilityVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityVerification
     */
    select?: EligibilityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityVerification
     */
    omit?: EligibilityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityVerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a EligibilityVerification.
     */
    data: XOR<EligibilityVerificationUpdateInput, EligibilityVerificationUncheckedUpdateInput>
    /**
     * Choose, which EligibilityVerification to update.
     */
    where: EligibilityVerificationWhereUniqueInput
  }

  /**
   * EligibilityVerification updateMany
   */
  export type EligibilityVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EligibilityVerifications.
     */
    data: XOR<EligibilityVerificationUpdateManyMutationInput, EligibilityVerificationUncheckedUpdateManyInput>
    /**
     * Filter which EligibilityVerifications to update
     */
    where?: EligibilityVerificationWhereInput
    /**
     * Limit how many EligibilityVerifications to update.
     */
    limit?: number
  }

  /**
   * EligibilityVerification updateManyAndReturn
   */
  export type EligibilityVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityVerification
     */
    select?: EligibilityVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityVerification
     */
    omit?: EligibilityVerificationOmit<ExtArgs> | null
    /**
     * The data used to update EligibilityVerifications.
     */
    data: XOR<EligibilityVerificationUpdateManyMutationInput, EligibilityVerificationUncheckedUpdateManyInput>
    /**
     * Filter which EligibilityVerifications to update
     */
    where?: EligibilityVerificationWhereInput
    /**
     * Limit how many EligibilityVerifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityVerificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EligibilityVerification upsert
   */
  export type EligibilityVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityVerification
     */
    select?: EligibilityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityVerification
     */
    omit?: EligibilityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityVerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the EligibilityVerification to update in case it exists.
     */
    where: EligibilityVerificationWhereUniqueInput
    /**
     * In case the EligibilityVerification found by the `where` argument doesn't exist, create a new EligibilityVerification with this data.
     */
    create: XOR<EligibilityVerificationCreateInput, EligibilityVerificationUncheckedCreateInput>
    /**
     * In case the EligibilityVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EligibilityVerificationUpdateInput, EligibilityVerificationUncheckedUpdateInput>
  }

  /**
   * EligibilityVerification delete
   */
  export type EligibilityVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityVerification
     */
    select?: EligibilityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityVerification
     */
    omit?: EligibilityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityVerificationInclude<ExtArgs> | null
    /**
     * Filter which EligibilityVerification to delete.
     */
    where: EligibilityVerificationWhereUniqueInput
  }

  /**
   * EligibilityVerification deleteMany
   */
  export type EligibilityVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EligibilityVerifications to delete
     */
    where?: EligibilityVerificationWhereInput
    /**
     * Limit how many EligibilityVerifications to delete.
     */
    limit?: number
  }

  /**
   * EligibilityVerification without action
   */
  export type EligibilityVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EligibilityVerification
     */
    select?: EligibilityVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EligibilityVerification
     */
    omit?: EligibilityVerificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EligibilityVerificationInclude<ExtArgs> | null
  }


  /**
   * Model Vote
   */

  export type AggregateVote = {
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  export type VoteMinAggregateOutputType = {
    id: string | null
    voterId: string | null
    candidate: string | null
    timestamp: Date | null
  }

  export type VoteMaxAggregateOutputType = {
    id: string | null
    voterId: string | null
    candidate: string | null
    timestamp: Date | null
  }

  export type VoteCountAggregateOutputType = {
    id: number
    voterId: number
    candidate: number
    timestamp: number
    _all: number
  }


  export type VoteMinAggregateInputType = {
    id?: true
    voterId?: true
    candidate?: true
    timestamp?: true
  }

  export type VoteMaxAggregateInputType = {
    id?: true
    voterId?: true
    candidate?: true
    timestamp?: true
  }

  export type VoteCountAggregateInputType = {
    id?: true
    voterId?: true
    candidate?: true
    timestamp?: true
    _all?: true
  }

  export type VoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vote to aggregate.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Votes
    **/
    _count?: true | VoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoteMaxAggregateInputType
  }

  export type GetVoteAggregateType<T extends VoteAggregateArgs> = {
        [P in keyof T & keyof AggregateVote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVote[P]>
      : GetScalarType<T[P], AggregateVote[P]>
  }




  export type VoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoteWhereInput
    orderBy?: VoteOrderByWithAggregationInput | VoteOrderByWithAggregationInput[]
    by: VoteScalarFieldEnum[] | VoteScalarFieldEnum
    having?: VoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoteCountAggregateInputType | true
    _min?: VoteMinAggregateInputType
    _max?: VoteMaxAggregateInputType
  }

  export type VoteGroupByOutputType = {
    id: string
    voterId: string
    candidate: string
    timestamp: Date
    _count: VoteCountAggregateOutputType | null
    _min: VoteMinAggregateOutputType | null
    _max: VoteMaxAggregateOutputType | null
  }

  type GetVoteGroupByPayload<T extends VoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoteGroupByOutputType[P]>
            : GetScalarType<T[P], VoteGroupByOutputType[P]>
        }
      >
    >


  export type VoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voterId?: boolean
    candidate?: boolean
    timestamp?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voterId?: boolean
    candidate?: boolean
    timestamp?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voterId?: boolean
    candidate?: boolean
    timestamp?: boolean
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vote"]>

  export type VoteSelectScalar = {
    id?: boolean
    voterId?: boolean
    candidate?: boolean
    timestamp?: boolean
  }

  export type VoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "voterId" | "candidate" | "timestamp", ExtArgs["result"]["vote"]>
  export type VoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }
  export type VoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }
  export type VoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    voter?: boolean | VoterDefaultArgs<ExtArgs>
  }

  export type $VotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vote"
    objects: {
      voter: Prisma.$VoterPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      voterId: string
      candidate: string
      timestamp: Date
    }, ExtArgs["result"]["vote"]>
    composites: {}
  }

  type VoteGetPayload<S extends boolean | null | undefined | VoteDefaultArgs> = $Result.GetResult<Prisma.$VotePayload, S>

  type VoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoteCountAggregateInputType | true
    }

  export interface VoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vote'], meta: { name: 'Vote' } }
    /**
     * Find zero or one Vote that matches the filter.
     * @param {VoteFindUniqueArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoteFindUniqueArgs>(args: SelectSubset<T, VoteFindUniqueArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoteFindUniqueOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoteFindUniqueOrThrowArgs>(args: SelectSubset<T, VoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoteFindFirstArgs>(args?: SelectSubset<T, VoteFindFirstArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindFirstOrThrowArgs} args - Arguments to find a Vote
     * @example
     * // Get one Vote
     * const vote = await prisma.vote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoteFindFirstOrThrowArgs>(args?: SelectSubset<T, VoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.vote.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.vote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voteWithIdOnly = await prisma.vote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoteFindManyArgs>(args?: SelectSubset<T, VoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vote.
     * @param {VoteCreateArgs} args - Arguments to create a Vote.
     * @example
     * // Create one Vote
     * const Vote = await prisma.vote.create({
     *   data: {
     *     // ... data to create a Vote
     *   }
     * })
     * 
     */
    create<T extends VoteCreateArgs>(args: SelectSubset<T, VoteCreateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {VoteCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoteCreateManyArgs>(args?: SelectSubset<T, VoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Votes and returns the data saved in the database.
     * @param {VoteCreateManyAndReturnArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const vote = await prisma.vote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoteCreateManyAndReturnArgs>(args?: SelectSubset<T, VoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vote.
     * @param {VoteDeleteArgs} args - Arguments to delete one Vote.
     * @example
     * // Delete one Vote
     * const Vote = await prisma.vote.delete({
     *   where: {
     *     // ... filter to delete one Vote
     *   }
     * })
     * 
     */
    delete<T extends VoteDeleteArgs>(args: SelectSubset<T, VoteDeleteArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vote.
     * @param {VoteUpdateArgs} args - Arguments to update one Vote.
     * @example
     * // Update one Vote
     * const vote = await prisma.vote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoteUpdateArgs>(args: SelectSubset<T, VoteUpdateArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {VoteDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.vote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoteDeleteManyArgs>(args?: SelectSubset<T, VoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoteUpdateManyArgs>(args: SelectSubset<T, VoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes and returns the data updated in the database.
     * @param {VoteUpdateManyAndReturnArgs} args - Arguments to update many Votes.
     * @example
     * // Update many Votes
     * const vote = await prisma.vote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Votes and only return the `id`
     * const voteWithIdOnly = await prisma.vote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoteUpdateManyAndReturnArgs>(args: SelectSubset<T, VoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vote.
     * @param {VoteUpsertArgs} args - Arguments to update or create a Vote.
     * @example
     * // Update or create a Vote
     * const vote = await prisma.vote.upsert({
     *   create: {
     *     // ... data to create a Vote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vote we want to update
     *   }
     * })
     */
    upsert<T extends VoteUpsertArgs>(args: SelectSubset<T, VoteUpsertArgs<ExtArgs>>): Prisma__VoteClient<$Result.GetResult<Prisma.$VotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.vote.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends VoteCountArgs>(
      args?: Subset<T, VoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VoteAggregateArgs>(args: Subset<T, VoteAggregateArgs>): Prisma.PrismaPromise<GetVoteAggregateType<T>>

    /**
     * Group by Vote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoteGroupByArgs['orderBy'] }
        : { orderBy?: VoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vote model
   */
  readonly fields: VoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    voter<T extends VoterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VoterDefaultArgs<ExtArgs>>): Prisma__VoterClient<$Result.GetResult<Prisma.$VoterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vote model
   */
  interface VoteFieldRefs {
    readonly id: FieldRef<"Vote", 'String'>
    readonly voterId: FieldRef<"Vote", 'String'>
    readonly candidate: FieldRef<"Vote", 'String'>
    readonly timestamp: FieldRef<"Vote", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vote findUnique
   */
  export type VoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findUniqueOrThrow
   */
  export type VoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote findFirst
   */
  export type VoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findFirstOrThrow
   */
  export type VoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Vote to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Votes.
     */
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote findMany
   */
  export type VoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter, which Votes to fetch.
     */
    where?: VoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Votes to fetch.
     */
    orderBy?: VoteOrderByWithRelationInput | VoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Votes.
     */
    cursor?: VoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Votes.
     */
    skip?: number
    distinct?: VoteScalarFieldEnum | VoteScalarFieldEnum[]
  }

  /**
   * Vote create
   */
  export type VoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Vote.
     */
    data: XOR<VoteCreateInput, VoteUncheckedCreateInput>
  }

  /**
   * Vote createMany
   */
  export type VoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vote createManyAndReturn
   */
  export type VoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to create many Votes.
     */
    data: VoteCreateManyInput | VoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote update
   */
  export type VoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Vote.
     */
    data: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
    /**
     * Choose, which Vote to update.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote updateMany
   */
  export type VoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
  }

  /**
   * Vote updateManyAndReturn
   */
  export type VoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * The data used to update Votes.
     */
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyInput>
    /**
     * Filter which Votes to update
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vote upsert
   */
  export type VoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Vote to update in case it exists.
     */
    where: VoteWhereUniqueInput
    /**
     * In case the Vote found by the `where` argument doesn't exist, create a new Vote with this data.
     */
    create: XOR<VoteCreateInput, VoteUncheckedCreateInput>
    /**
     * In case the Vote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoteUpdateInput, VoteUncheckedUpdateInput>
  }

  /**
   * Vote delete
   */
  export type VoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
    /**
     * Filter which Vote to delete.
     */
    where: VoteWhereUniqueInput
  }

  /**
   * Vote deleteMany
   */
  export type VoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Votes to delete
     */
    where?: VoteWhereInput
    /**
     * Limit how many Votes to delete.
     */
    limit?: number
  }

  /**
   * Vote without action
   */
  export type VoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vote
     */
    select?: VoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vote
     */
    omit?: VoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VoterScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth',
    nationality: 'nationality',
    phoneNumber: 'phoneNumber',
    isVerified: 'isVerified',
    verificationStatus: 'verificationStatus',
    mfaEnabled: 'mfaEnabled',
    mfaSecret: 'mfaSecret',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VoterScalarFieldEnum = (typeof VoterScalarFieldEnum)[keyof typeof VoterScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    street: 'street',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode',
    voterId: 'voterId'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const GovernmentIdScalarFieldEnum: {
    id: 'id',
    type: 'type',
    number: 'number',
    expiryDate: 'expiryDate',
    voterId: 'voterId'
  };

  export type GovernmentIdScalarFieldEnum = (typeof GovernmentIdScalarFieldEnum)[keyof typeof GovernmentIdScalarFieldEnum]


  export const BiometricDataScalarFieldEnum: {
    id: 'id',
    type: 'type',
    hash: 'hash',
    voterId: 'voterId'
  };

  export type BiometricDataScalarFieldEnum = (typeof BiometricDataScalarFieldEnum)[keyof typeof BiometricDataScalarFieldEnum]


  export const IdentityVerificationScalarFieldEnum: {
    id: 'id',
    documentType: 'documentType',
    documentNumber: 'documentNumber',
    documentImage: 'documentImage',
    selfieImage: 'selfieImage',
    verificationMethod: 'verificationMethod',
    verificationProvider: 'verificationProvider',
    status: 'status',
    voterId: 'voterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IdentityVerificationScalarFieldEnum = (typeof IdentityVerificationScalarFieldEnum)[keyof typeof IdentityVerificationScalarFieldEnum]


  export const EligibilityVerificationScalarFieldEnum: {
    id: 'id',
    ageVerified: 'ageVerified',
    citizenshipVerified: 'citizenshipVerified',
    residencyVerified: 'residencyVerified',
    duplicateCheck: 'duplicateCheck',
    status: 'status',
    voterId: 'voterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EligibilityVerificationScalarFieldEnum = (typeof EligibilityVerificationScalarFieldEnum)[keyof typeof EligibilityVerificationScalarFieldEnum]


  export const VoteScalarFieldEnum: {
    id: 'id',
    voterId: 'voterId',
    candidate: 'candidate',
    timestamp: 'timestamp'
  };

  export type VoteScalarFieldEnum = (typeof VoteScalarFieldEnum)[keyof typeof VoteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'VerificationStatus[]'
   */
  export type ListEnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus[]'>
    


  /**
   * Reference to a field of type 'GovernmentIdType'
   */
  export type EnumGovernmentIdTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GovernmentIdType'>
    


  /**
   * Reference to a field of type 'GovernmentIdType[]'
   */
  export type ListEnumGovernmentIdTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GovernmentIdType[]'>
    


  /**
   * Reference to a field of type 'BiometricType'
   */
  export type EnumBiometricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BiometricType'>
    


  /**
   * Reference to a field of type 'BiometricType[]'
   */
  export type ListEnumBiometricTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BiometricType[]'>
    


  /**
   * Reference to a field of type 'VerificationMethod'
   */
  export type EnumVerificationMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationMethod'>
    


  /**
   * Reference to a field of type 'VerificationMethod[]'
   */
  export type ListEnumVerificationMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationMethod[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type VoterWhereInput = {
    AND?: VoterWhereInput | VoterWhereInput[]
    OR?: VoterWhereInput[]
    NOT?: VoterWhereInput | VoterWhereInput[]
    id?: StringFilter<"Voter"> | string
    email?: StringFilter<"Voter"> | string
    password?: StringFilter<"Voter"> | string
    firstName?: StringFilter<"Voter"> | string
    lastName?: StringFilter<"Voter"> | string
    dateOfBirth?: DateTimeFilter<"Voter"> | Date | string
    nationality?: StringFilter<"Voter"> | string
    phoneNumber?: StringFilter<"Voter"> | string
    isVerified?: BoolFilter<"Voter"> | boolean
    verificationStatus?: EnumVerificationStatusFilter<"Voter"> | $Enums.VerificationStatus
    mfaEnabled?: BoolFilter<"Voter"> | boolean
    mfaSecret?: StringNullableFilter<"Voter"> | string | null
    createdAt?: DateTimeFilter<"Voter"> | Date | string
    updatedAt?: DateTimeFilter<"Voter"> | Date | string
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    governmentId?: XOR<GovernmentIdNullableScalarRelationFilter, GovernmentIdWhereInput> | null
    biometricData?: XOR<BiometricDataNullableScalarRelationFilter, BiometricDataWhereInput> | null
    identityVerification?: XOR<IdentityVerificationNullableScalarRelationFilter, IdentityVerificationWhereInput> | null
    eligibilityVerification?: XOR<EligibilityVerificationNullableScalarRelationFilter, EligibilityVerificationWhereInput> | null
    votes?: VoteListRelationFilter
  }

  export type VoterOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    phoneNumber?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    mfaEnabled?: SortOrder
    mfaSecret?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    address?: AddressOrderByWithRelationInput
    governmentId?: GovernmentIdOrderByWithRelationInput
    biometricData?: BiometricDataOrderByWithRelationInput
    identityVerification?: IdentityVerificationOrderByWithRelationInput
    eligibilityVerification?: EligibilityVerificationOrderByWithRelationInput
    votes?: VoteOrderByRelationAggregateInput
  }

  export type VoterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: VoterWhereInput | VoterWhereInput[]
    OR?: VoterWhereInput[]
    NOT?: VoterWhereInput | VoterWhereInput[]
    password?: StringFilter<"Voter"> | string
    firstName?: StringFilter<"Voter"> | string
    lastName?: StringFilter<"Voter"> | string
    dateOfBirth?: DateTimeFilter<"Voter"> | Date | string
    nationality?: StringFilter<"Voter"> | string
    phoneNumber?: StringFilter<"Voter"> | string
    isVerified?: BoolFilter<"Voter"> | boolean
    verificationStatus?: EnumVerificationStatusFilter<"Voter"> | $Enums.VerificationStatus
    mfaEnabled?: BoolFilter<"Voter"> | boolean
    mfaSecret?: StringNullableFilter<"Voter"> | string | null
    createdAt?: DateTimeFilter<"Voter"> | Date | string
    updatedAt?: DateTimeFilter<"Voter"> | Date | string
    address?: XOR<AddressNullableScalarRelationFilter, AddressWhereInput> | null
    governmentId?: XOR<GovernmentIdNullableScalarRelationFilter, GovernmentIdWhereInput> | null
    biometricData?: XOR<BiometricDataNullableScalarRelationFilter, BiometricDataWhereInput> | null
    identityVerification?: XOR<IdentityVerificationNullableScalarRelationFilter, IdentityVerificationWhereInput> | null
    eligibilityVerification?: XOR<EligibilityVerificationNullableScalarRelationFilter, EligibilityVerificationWhereInput> | null
    votes?: VoteListRelationFilter
  }, "id" | "email">

  export type VoterOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    phoneNumber?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    mfaEnabled?: SortOrder
    mfaSecret?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VoterCountOrderByAggregateInput
    _max?: VoterMaxOrderByAggregateInput
    _min?: VoterMinOrderByAggregateInput
  }

  export type VoterScalarWhereWithAggregatesInput = {
    AND?: VoterScalarWhereWithAggregatesInput | VoterScalarWhereWithAggregatesInput[]
    OR?: VoterScalarWhereWithAggregatesInput[]
    NOT?: VoterScalarWhereWithAggregatesInput | VoterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Voter"> | string
    email?: StringWithAggregatesFilter<"Voter"> | string
    password?: StringWithAggregatesFilter<"Voter"> | string
    firstName?: StringWithAggregatesFilter<"Voter"> | string
    lastName?: StringWithAggregatesFilter<"Voter"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Voter"> | Date | string
    nationality?: StringWithAggregatesFilter<"Voter"> | string
    phoneNumber?: StringWithAggregatesFilter<"Voter"> | string
    isVerified?: BoolWithAggregatesFilter<"Voter"> | boolean
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"Voter"> | $Enums.VerificationStatus
    mfaEnabled?: BoolWithAggregatesFilter<"Voter"> | boolean
    mfaSecret?: StringNullableWithAggregatesFilter<"Voter"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Voter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Voter"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    postalCode?: StringFilter<"Address"> | string
    voterId?: StringFilter<"Address"> | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    voterId?: SortOrder
    voter?: VoterOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    voterId?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    street?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    country?: StringFilter<"Address"> | string
    postalCode?: StringFilter<"Address"> | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
  }, "id" | "voterId">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    voterId?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    street?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    country?: StringWithAggregatesFilter<"Address"> | string
    postalCode?: StringWithAggregatesFilter<"Address"> | string
    voterId?: StringWithAggregatesFilter<"Address"> | string
  }

  export type GovernmentIdWhereInput = {
    AND?: GovernmentIdWhereInput | GovernmentIdWhereInput[]
    OR?: GovernmentIdWhereInput[]
    NOT?: GovernmentIdWhereInput | GovernmentIdWhereInput[]
    id?: StringFilter<"GovernmentId"> | string
    type?: EnumGovernmentIdTypeFilter<"GovernmentId"> | $Enums.GovernmentIdType
    number?: StringFilter<"GovernmentId"> | string
    expiryDate?: DateTimeFilter<"GovernmentId"> | Date | string
    voterId?: StringFilter<"GovernmentId"> | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
  }

  export type GovernmentIdOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    expiryDate?: SortOrder
    voterId?: SortOrder
    voter?: VoterOrderByWithRelationInput
  }

  export type GovernmentIdWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    voterId?: string
    AND?: GovernmentIdWhereInput | GovernmentIdWhereInput[]
    OR?: GovernmentIdWhereInput[]
    NOT?: GovernmentIdWhereInput | GovernmentIdWhereInput[]
    type?: EnumGovernmentIdTypeFilter<"GovernmentId"> | $Enums.GovernmentIdType
    number?: StringFilter<"GovernmentId"> | string
    expiryDate?: DateTimeFilter<"GovernmentId"> | Date | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
  }, "id" | "voterId">

  export type GovernmentIdOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    expiryDate?: SortOrder
    voterId?: SortOrder
    _count?: GovernmentIdCountOrderByAggregateInput
    _max?: GovernmentIdMaxOrderByAggregateInput
    _min?: GovernmentIdMinOrderByAggregateInput
  }

  export type GovernmentIdScalarWhereWithAggregatesInput = {
    AND?: GovernmentIdScalarWhereWithAggregatesInput | GovernmentIdScalarWhereWithAggregatesInput[]
    OR?: GovernmentIdScalarWhereWithAggregatesInput[]
    NOT?: GovernmentIdScalarWhereWithAggregatesInput | GovernmentIdScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GovernmentId"> | string
    type?: EnumGovernmentIdTypeWithAggregatesFilter<"GovernmentId"> | $Enums.GovernmentIdType
    number?: StringWithAggregatesFilter<"GovernmentId"> | string
    expiryDate?: DateTimeWithAggregatesFilter<"GovernmentId"> | Date | string
    voterId?: StringWithAggregatesFilter<"GovernmentId"> | string
  }

  export type BiometricDataWhereInput = {
    AND?: BiometricDataWhereInput | BiometricDataWhereInput[]
    OR?: BiometricDataWhereInput[]
    NOT?: BiometricDataWhereInput | BiometricDataWhereInput[]
    id?: StringFilter<"BiometricData"> | string
    type?: EnumBiometricTypeFilter<"BiometricData"> | $Enums.BiometricType
    hash?: StringFilter<"BiometricData"> | string
    voterId?: StringFilter<"BiometricData"> | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
  }

  export type BiometricDataOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    hash?: SortOrder
    voterId?: SortOrder
    voter?: VoterOrderByWithRelationInput
  }

  export type BiometricDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    voterId?: string
    AND?: BiometricDataWhereInput | BiometricDataWhereInput[]
    OR?: BiometricDataWhereInput[]
    NOT?: BiometricDataWhereInput | BiometricDataWhereInput[]
    type?: EnumBiometricTypeFilter<"BiometricData"> | $Enums.BiometricType
    hash?: StringFilter<"BiometricData"> | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
  }, "id" | "voterId">

  export type BiometricDataOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    hash?: SortOrder
    voterId?: SortOrder
    _count?: BiometricDataCountOrderByAggregateInput
    _max?: BiometricDataMaxOrderByAggregateInput
    _min?: BiometricDataMinOrderByAggregateInput
  }

  export type BiometricDataScalarWhereWithAggregatesInput = {
    AND?: BiometricDataScalarWhereWithAggregatesInput | BiometricDataScalarWhereWithAggregatesInput[]
    OR?: BiometricDataScalarWhereWithAggregatesInput[]
    NOT?: BiometricDataScalarWhereWithAggregatesInput | BiometricDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BiometricData"> | string
    type?: EnumBiometricTypeWithAggregatesFilter<"BiometricData"> | $Enums.BiometricType
    hash?: StringWithAggregatesFilter<"BiometricData"> | string
    voterId?: StringWithAggregatesFilter<"BiometricData"> | string
  }

  export type IdentityVerificationWhereInput = {
    AND?: IdentityVerificationWhereInput | IdentityVerificationWhereInput[]
    OR?: IdentityVerificationWhereInput[]
    NOT?: IdentityVerificationWhereInput | IdentityVerificationWhereInput[]
    id?: StringFilter<"IdentityVerification"> | string
    documentType?: EnumGovernmentIdTypeFilter<"IdentityVerification"> | $Enums.GovernmentIdType
    documentNumber?: StringFilter<"IdentityVerification"> | string
    documentImage?: StringFilter<"IdentityVerification"> | string
    selfieImage?: StringFilter<"IdentityVerification"> | string
    verificationMethod?: EnumVerificationMethodFilter<"IdentityVerification"> | $Enums.VerificationMethod
    verificationProvider?: StringNullableFilter<"IdentityVerification"> | string | null
    status?: EnumVerificationStatusFilter<"IdentityVerification"> | $Enums.VerificationStatus
    voterId?: StringFilter<"IdentityVerification"> | string
    createdAt?: DateTimeFilter<"IdentityVerification"> | Date | string
    updatedAt?: DateTimeFilter<"IdentityVerification"> | Date | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
  }

  export type IdentityVerificationOrderByWithRelationInput = {
    id?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    documentImage?: SortOrder
    selfieImage?: SortOrder
    verificationMethod?: SortOrder
    verificationProvider?: SortOrderInput | SortOrder
    status?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    voter?: VoterOrderByWithRelationInput
  }

  export type IdentityVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    voterId?: string
    AND?: IdentityVerificationWhereInput | IdentityVerificationWhereInput[]
    OR?: IdentityVerificationWhereInput[]
    NOT?: IdentityVerificationWhereInput | IdentityVerificationWhereInput[]
    documentType?: EnumGovernmentIdTypeFilter<"IdentityVerification"> | $Enums.GovernmentIdType
    documentNumber?: StringFilter<"IdentityVerification"> | string
    documentImage?: StringFilter<"IdentityVerification"> | string
    selfieImage?: StringFilter<"IdentityVerification"> | string
    verificationMethod?: EnumVerificationMethodFilter<"IdentityVerification"> | $Enums.VerificationMethod
    verificationProvider?: StringNullableFilter<"IdentityVerification"> | string | null
    status?: EnumVerificationStatusFilter<"IdentityVerification"> | $Enums.VerificationStatus
    createdAt?: DateTimeFilter<"IdentityVerification"> | Date | string
    updatedAt?: DateTimeFilter<"IdentityVerification"> | Date | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
  }, "id" | "voterId">

  export type IdentityVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    documentImage?: SortOrder
    selfieImage?: SortOrder
    verificationMethod?: SortOrder
    verificationProvider?: SortOrderInput | SortOrder
    status?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IdentityVerificationCountOrderByAggregateInput
    _max?: IdentityVerificationMaxOrderByAggregateInput
    _min?: IdentityVerificationMinOrderByAggregateInput
  }

  export type IdentityVerificationScalarWhereWithAggregatesInput = {
    AND?: IdentityVerificationScalarWhereWithAggregatesInput | IdentityVerificationScalarWhereWithAggregatesInput[]
    OR?: IdentityVerificationScalarWhereWithAggregatesInput[]
    NOT?: IdentityVerificationScalarWhereWithAggregatesInput | IdentityVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IdentityVerification"> | string
    documentType?: EnumGovernmentIdTypeWithAggregatesFilter<"IdentityVerification"> | $Enums.GovernmentIdType
    documentNumber?: StringWithAggregatesFilter<"IdentityVerification"> | string
    documentImage?: StringWithAggregatesFilter<"IdentityVerification"> | string
    selfieImage?: StringWithAggregatesFilter<"IdentityVerification"> | string
    verificationMethod?: EnumVerificationMethodWithAggregatesFilter<"IdentityVerification"> | $Enums.VerificationMethod
    verificationProvider?: StringNullableWithAggregatesFilter<"IdentityVerification"> | string | null
    status?: EnumVerificationStatusWithAggregatesFilter<"IdentityVerification"> | $Enums.VerificationStatus
    voterId?: StringWithAggregatesFilter<"IdentityVerification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IdentityVerification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IdentityVerification"> | Date | string
  }

  export type EligibilityVerificationWhereInput = {
    AND?: EligibilityVerificationWhereInput | EligibilityVerificationWhereInput[]
    OR?: EligibilityVerificationWhereInput[]
    NOT?: EligibilityVerificationWhereInput | EligibilityVerificationWhereInput[]
    id?: StringFilter<"EligibilityVerification"> | string
    ageVerified?: BoolFilter<"EligibilityVerification"> | boolean
    citizenshipVerified?: BoolFilter<"EligibilityVerification"> | boolean
    residencyVerified?: BoolFilter<"EligibilityVerification"> | boolean
    duplicateCheck?: BoolFilter<"EligibilityVerification"> | boolean
    status?: EnumVerificationStatusFilter<"EligibilityVerification"> | $Enums.VerificationStatus
    voterId?: StringFilter<"EligibilityVerification"> | string
    createdAt?: DateTimeFilter<"EligibilityVerification"> | Date | string
    updatedAt?: DateTimeFilter<"EligibilityVerification"> | Date | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
  }

  export type EligibilityVerificationOrderByWithRelationInput = {
    id?: SortOrder
    ageVerified?: SortOrder
    citizenshipVerified?: SortOrder
    residencyVerified?: SortOrder
    duplicateCheck?: SortOrder
    status?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    voter?: VoterOrderByWithRelationInput
  }

  export type EligibilityVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    voterId?: string
    AND?: EligibilityVerificationWhereInput | EligibilityVerificationWhereInput[]
    OR?: EligibilityVerificationWhereInput[]
    NOT?: EligibilityVerificationWhereInput | EligibilityVerificationWhereInput[]
    ageVerified?: BoolFilter<"EligibilityVerification"> | boolean
    citizenshipVerified?: BoolFilter<"EligibilityVerification"> | boolean
    residencyVerified?: BoolFilter<"EligibilityVerification"> | boolean
    duplicateCheck?: BoolFilter<"EligibilityVerification"> | boolean
    status?: EnumVerificationStatusFilter<"EligibilityVerification"> | $Enums.VerificationStatus
    createdAt?: DateTimeFilter<"EligibilityVerification"> | Date | string
    updatedAt?: DateTimeFilter<"EligibilityVerification"> | Date | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
  }, "id" | "voterId">

  export type EligibilityVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    ageVerified?: SortOrder
    citizenshipVerified?: SortOrder
    residencyVerified?: SortOrder
    duplicateCheck?: SortOrder
    status?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EligibilityVerificationCountOrderByAggregateInput
    _max?: EligibilityVerificationMaxOrderByAggregateInput
    _min?: EligibilityVerificationMinOrderByAggregateInput
  }

  export type EligibilityVerificationScalarWhereWithAggregatesInput = {
    AND?: EligibilityVerificationScalarWhereWithAggregatesInput | EligibilityVerificationScalarWhereWithAggregatesInput[]
    OR?: EligibilityVerificationScalarWhereWithAggregatesInput[]
    NOT?: EligibilityVerificationScalarWhereWithAggregatesInput | EligibilityVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EligibilityVerification"> | string
    ageVerified?: BoolWithAggregatesFilter<"EligibilityVerification"> | boolean
    citizenshipVerified?: BoolWithAggregatesFilter<"EligibilityVerification"> | boolean
    residencyVerified?: BoolWithAggregatesFilter<"EligibilityVerification"> | boolean
    duplicateCheck?: BoolWithAggregatesFilter<"EligibilityVerification"> | boolean
    status?: EnumVerificationStatusWithAggregatesFilter<"EligibilityVerification"> | $Enums.VerificationStatus
    voterId?: StringWithAggregatesFilter<"EligibilityVerification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EligibilityVerification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EligibilityVerification"> | Date | string
  }

  export type VoteWhereInput = {
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    id?: StringFilter<"Vote"> | string
    voterId?: StringFilter<"Vote"> | string
    candidate?: StringFilter<"Vote"> | string
    timestamp?: DateTimeFilter<"Vote"> | Date | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
  }

  export type VoteOrderByWithRelationInput = {
    id?: SortOrder
    voterId?: SortOrder
    candidate?: SortOrder
    timestamp?: SortOrder
    voter?: VoterOrderByWithRelationInput
  }

  export type VoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VoteWhereInput | VoteWhereInput[]
    OR?: VoteWhereInput[]
    NOT?: VoteWhereInput | VoteWhereInput[]
    voterId?: StringFilter<"Vote"> | string
    candidate?: StringFilter<"Vote"> | string
    timestamp?: DateTimeFilter<"Vote"> | Date | string
    voter?: XOR<VoterScalarRelationFilter, VoterWhereInput>
  }, "id">

  export type VoteOrderByWithAggregationInput = {
    id?: SortOrder
    voterId?: SortOrder
    candidate?: SortOrder
    timestamp?: SortOrder
    _count?: VoteCountOrderByAggregateInput
    _max?: VoteMaxOrderByAggregateInput
    _min?: VoteMinOrderByAggregateInput
  }

  export type VoteScalarWhereWithAggregatesInput = {
    AND?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    OR?: VoteScalarWhereWithAggregatesInput[]
    NOT?: VoteScalarWhereWithAggregatesInput | VoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vote"> | string
    voterId?: StringWithAggregatesFilter<"Vote"> | string
    candidate?: StringWithAggregatesFilter<"Vote"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Vote"> | Date | string
  }

  export type VoterCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutVoterInput
    governmentId?: GovernmentIdCreateNestedOneWithoutVoterInput
    biometricData?: BiometricDataCreateNestedOneWithoutVoterInput
    identityVerification?: IdentityVerificationCreateNestedOneWithoutVoterInput
    eligibilityVerification?: EligibilityVerificationCreateNestedOneWithoutVoterInput
    votes?: VoteCreateNestedManyWithoutVoterInput
  }

  export type VoterUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutVoterInput
    governmentId?: GovernmentIdUncheckedCreateNestedOneWithoutVoterInput
    biometricData?: BiometricDataUncheckedCreateNestedOneWithoutVoterInput
    identityVerification?: IdentityVerificationUncheckedCreateNestedOneWithoutVoterInput
    eligibilityVerification?: EligibilityVerificationUncheckedCreateNestedOneWithoutVoterInput
    votes?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type VoterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutVoterNestedInput
    governmentId?: GovernmentIdUpdateOneWithoutVoterNestedInput
    biometricData?: BiometricDataUpdateOneWithoutVoterNestedInput
    identityVerification?: IdentityVerificationUpdateOneWithoutVoterNestedInput
    eligibilityVerification?: EligibilityVerificationUpdateOneWithoutVoterNestedInput
    votes?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutVoterNestedInput
    governmentId?: GovernmentIdUncheckedUpdateOneWithoutVoterNestedInput
    biometricData?: BiometricDataUncheckedUpdateOneWithoutVoterNestedInput
    identityVerification?: IdentityVerificationUncheckedUpdateOneWithoutVoterNestedInput
    eligibilityVerification?: EligibilityVerificationUncheckedUpdateOneWithoutVoterNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type VoterCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VoterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    id?: string
    street: string
    city: string
    state: string
    country: string
    postalCode: string
    voter: VoterCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    street: string
    city: string
    state: string
    country: string
    postalCode: string
    voterId: string
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    voter?: VoterUpdateOneRequiredWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
  }

  export type AddressCreateManyInput = {
    id?: string
    street: string
    city: string
    state: string
    country: string
    postalCode: string
    voterId: string
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
  }

  export type GovernmentIdCreateInput = {
    id?: string
    type: $Enums.GovernmentIdType
    number: string
    expiryDate: Date | string
    voter: VoterCreateNestedOneWithoutGovernmentIdInput
  }

  export type GovernmentIdUncheckedCreateInput = {
    id?: string
    type: $Enums.GovernmentIdType
    number: string
    expiryDate: Date | string
    voterId: string
  }

  export type GovernmentIdUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGovernmentIdTypeFieldUpdateOperationsInput | $Enums.GovernmentIdType
    number?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: VoterUpdateOneRequiredWithoutGovernmentIdNestedInput
  }

  export type GovernmentIdUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGovernmentIdTypeFieldUpdateOperationsInput | $Enums.GovernmentIdType
    number?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    voterId?: StringFieldUpdateOperationsInput | string
  }

  export type GovernmentIdCreateManyInput = {
    id?: string
    type: $Enums.GovernmentIdType
    number: string
    expiryDate: Date | string
    voterId: string
  }

  export type GovernmentIdUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGovernmentIdTypeFieldUpdateOperationsInput | $Enums.GovernmentIdType
    number?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GovernmentIdUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGovernmentIdTypeFieldUpdateOperationsInput | $Enums.GovernmentIdType
    number?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    voterId?: StringFieldUpdateOperationsInput | string
  }

  export type BiometricDataCreateInput = {
    id?: string
    type: $Enums.BiometricType
    hash: string
    voter: VoterCreateNestedOneWithoutBiometricDataInput
  }

  export type BiometricDataUncheckedCreateInput = {
    id?: string
    type: $Enums.BiometricType
    hash: string
    voterId: string
  }

  export type BiometricDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBiometricTypeFieldUpdateOperationsInput | $Enums.BiometricType
    hash?: StringFieldUpdateOperationsInput | string
    voter?: VoterUpdateOneRequiredWithoutBiometricDataNestedInput
  }

  export type BiometricDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBiometricTypeFieldUpdateOperationsInput | $Enums.BiometricType
    hash?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
  }

  export type BiometricDataCreateManyInput = {
    id?: string
    type: $Enums.BiometricType
    hash: string
    voterId: string
  }

  export type BiometricDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBiometricTypeFieldUpdateOperationsInput | $Enums.BiometricType
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type BiometricDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBiometricTypeFieldUpdateOperationsInput | $Enums.BiometricType
    hash?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
  }

  export type IdentityVerificationCreateInput = {
    id?: string
    documentType: $Enums.GovernmentIdType
    documentNumber: string
    documentImage: string
    selfieImage: string
    verificationMethod: $Enums.VerificationMethod
    verificationProvider?: string | null
    status?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    voter: VoterCreateNestedOneWithoutIdentityVerificationInput
  }

  export type IdentityVerificationUncheckedCreateInput = {
    id?: string
    documentType: $Enums.GovernmentIdType
    documentNumber: string
    documentImage: string
    selfieImage: string
    verificationMethod: $Enums.VerificationMethod
    verificationProvider?: string | null
    status?: $Enums.VerificationStatus
    voterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumGovernmentIdTypeFieldUpdateOperationsInput | $Enums.GovernmentIdType
    documentNumber?: StringFieldUpdateOperationsInput | string
    documentImage?: StringFieldUpdateOperationsInput | string
    selfieImage?: StringFieldUpdateOperationsInput | string
    verificationMethod?: EnumVerificationMethodFieldUpdateOperationsInput | $Enums.VerificationMethod
    verificationProvider?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: VoterUpdateOneRequiredWithoutIdentityVerificationNestedInput
  }

  export type IdentityVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumGovernmentIdTypeFieldUpdateOperationsInput | $Enums.GovernmentIdType
    documentNumber?: StringFieldUpdateOperationsInput | string
    documentImage?: StringFieldUpdateOperationsInput | string
    selfieImage?: StringFieldUpdateOperationsInput | string
    verificationMethod?: EnumVerificationMethodFieldUpdateOperationsInput | $Enums.VerificationMethod
    verificationProvider?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityVerificationCreateManyInput = {
    id?: string
    documentType: $Enums.GovernmentIdType
    documentNumber: string
    documentImage: string
    selfieImage: string
    verificationMethod: $Enums.VerificationMethod
    verificationProvider?: string | null
    status?: $Enums.VerificationStatus
    voterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumGovernmentIdTypeFieldUpdateOperationsInput | $Enums.GovernmentIdType
    documentNumber?: StringFieldUpdateOperationsInput | string
    documentImage?: StringFieldUpdateOperationsInput | string
    selfieImage?: StringFieldUpdateOperationsInput | string
    verificationMethod?: EnumVerificationMethodFieldUpdateOperationsInput | $Enums.VerificationMethod
    verificationProvider?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumGovernmentIdTypeFieldUpdateOperationsInput | $Enums.GovernmentIdType
    documentNumber?: StringFieldUpdateOperationsInput | string
    documentImage?: StringFieldUpdateOperationsInput | string
    selfieImage?: StringFieldUpdateOperationsInput | string
    verificationMethod?: EnumVerificationMethodFieldUpdateOperationsInput | $Enums.VerificationMethod
    verificationProvider?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EligibilityVerificationCreateInput = {
    id?: string
    ageVerified?: boolean
    citizenshipVerified?: boolean
    residencyVerified?: boolean
    duplicateCheck?: boolean
    status?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    voter: VoterCreateNestedOneWithoutEligibilityVerificationInput
  }

  export type EligibilityVerificationUncheckedCreateInput = {
    id?: string
    ageVerified?: boolean
    citizenshipVerified?: boolean
    residencyVerified?: boolean
    duplicateCheck?: boolean
    status?: $Enums.VerificationStatus
    voterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EligibilityVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ageVerified?: BoolFieldUpdateOperationsInput | boolean
    citizenshipVerified?: BoolFieldUpdateOperationsInput | boolean
    residencyVerified?: BoolFieldUpdateOperationsInput | boolean
    duplicateCheck?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: VoterUpdateOneRequiredWithoutEligibilityVerificationNestedInput
  }

  export type EligibilityVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ageVerified?: BoolFieldUpdateOperationsInput | boolean
    citizenshipVerified?: BoolFieldUpdateOperationsInput | boolean
    residencyVerified?: BoolFieldUpdateOperationsInput | boolean
    duplicateCheck?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EligibilityVerificationCreateManyInput = {
    id?: string
    ageVerified?: boolean
    citizenshipVerified?: boolean
    residencyVerified?: boolean
    duplicateCheck?: boolean
    status?: $Enums.VerificationStatus
    voterId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EligibilityVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ageVerified?: BoolFieldUpdateOperationsInput | boolean
    citizenshipVerified?: BoolFieldUpdateOperationsInput | boolean
    residencyVerified?: BoolFieldUpdateOperationsInput | boolean
    duplicateCheck?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EligibilityVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ageVerified?: BoolFieldUpdateOperationsInput | boolean
    citizenshipVerified?: BoolFieldUpdateOperationsInput | boolean
    residencyVerified?: BoolFieldUpdateOperationsInput | boolean
    duplicateCheck?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    voterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateInput = {
    id?: string
    candidate: string
    timestamp?: Date | string
    voter: VoterCreateNestedOneWithoutVotesInput
  }

  export type VoteUncheckedCreateInput = {
    id?: string
    voterId: string
    candidate: string
    timestamp?: Date | string
  }

  export type VoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidate?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    voter?: VoterUpdateOneRequiredWithoutVotesNestedInput
  }

  export type VoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    candidate?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteCreateManyInput = {
    id?: string
    voterId: string
    candidate: string
    timestamp?: Date | string
  }

  export type VoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidate?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    voterId?: StringFieldUpdateOperationsInput | string
    candidate?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AddressNullableScalarRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type GovernmentIdNullableScalarRelationFilter = {
    is?: GovernmentIdWhereInput | null
    isNot?: GovernmentIdWhereInput | null
  }

  export type BiometricDataNullableScalarRelationFilter = {
    is?: BiometricDataWhereInput | null
    isNot?: BiometricDataWhereInput | null
  }

  export type IdentityVerificationNullableScalarRelationFilter = {
    is?: IdentityVerificationWhereInput | null
    isNot?: IdentityVerificationWhereInput | null
  }

  export type EligibilityVerificationNullableScalarRelationFilter = {
    is?: EligibilityVerificationWhereInput | null
    isNot?: EligibilityVerificationWhereInput | null
  }

  export type VoteListRelationFilter = {
    every?: VoteWhereInput
    some?: VoteWhereInput
    none?: VoteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoterCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    phoneNumber?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    mfaEnabled?: SortOrder
    mfaSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoterMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    phoneNumber?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    mfaEnabled?: SortOrder
    mfaSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoterMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    nationality?: SortOrder
    phoneNumber?: SortOrder
    isVerified?: SortOrder
    verificationStatus?: SortOrder
    mfaEnabled?: SortOrder
    mfaSecret?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type VoterScalarRelationFilter = {
    is?: VoterWhereInput
    isNot?: VoterWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    voterId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    voterId?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    voterId?: SortOrder
  }

  export type EnumGovernmentIdTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GovernmentIdType | EnumGovernmentIdTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GovernmentIdType[] | ListEnumGovernmentIdTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GovernmentIdType[] | ListEnumGovernmentIdTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGovernmentIdTypeFilter<$PrismaModel> | $Enums.GovernmentIdType
  }

  export type GovernmentIdCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    expiryDate?: SortOrder
    voterId?: SortOrder
  }

  export type GovernmentIdMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    expiryDate?: SortOrder
    voterId?: SortOrder
  }

  export type GovernmentIdMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    expiryDate?: SortOrder
    voterId?: SortOrder
  }

  export type EnumGovernmentIdTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GovernmentIdType | EnumGovernmentIdTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GovernmentIdType[] | ListEnumGovernmentIdTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GovernmentIdType[] | ListEnumGovernmentIdTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGovernmentIdTypeWithAggregatesFilter<$PrismaModel> | $Enums.GovernmentIdType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGovernmentIdTypeFilter<$PrismaModel>
    _max?: NestedEnumGovernmentIdTypeFilter<$PrismaModel>
  }

  export type EnumBiometricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BiometricType | EnumBiometricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BiometricType[] | ListEnumBiometricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BiometricType[] | ListEnumBiometricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBiometricTypeFilter<$PrismaModel> | $Enums.BiometricType
  }

  export type BiometricDataCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    hash?: SortOrder
    voterId?: SortOrder
  }

  export type BiometricDataMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    hash?: SortOrder
    voterId?: SortOrder
  }

  export type BiometricDataMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    hash?: SortOrder
    voterId?: SortOrder
  }

  export type EnumBiometricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BiometricType | EnumBiometricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BiometricType[] | ListEnumBiometricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BiometricType[] | ListEnumBiometricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBiometricTypeWithAggregatesFilter<$PrismaModel> | $Enums.BiometricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBiometricTypeFilter<$PrismaModel>
    _max?: NestedEnumBiometricTypeFilter<$PrismaModel>
  }

  export type EnumVerificationMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationMethod | EnumVerificationMethodFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationMethod[] | ListEnumVerificationMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationMethod[] | ListEnumVerificationMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationMethodFilter<$PrismaModel> | $Enums.VerificationMethod
  }

  export type IdentityVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    documentImage?: SortOrder
    selfieImage?: SortOrder
    verificationMethod?: SortOrder
    verificationProvider?: SortOrder
    status?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdentityVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    documentImage?: SortOrder
    selfieImage?: SortOrder
    verificationMethod?: SortOrder
    verificationProvider?: SortOrder
    status?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdentityVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    documentType?: SortOrder
    documentNumber?: SortOrder
    documentImage?: SortOrder
    selfieImage?: SortOrder
    verificationMethod?: SortOrder
    verificationProvider?: SortOrder
    status?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumVerificationMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationMethod | EnumVerificationMethodFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationMethod[] | ListEnumVerificationMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationMethod[] | ListEnumVerificationMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationMethodWithAggregatesFilter<$PrismaModel> | $Enums.VerificationMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationMethodFilter<$PrismaModel>
    _max?: NestedEnumVerificationMethodFilter<$PrismaModel>
  }

  export type EligibilityVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    ageVerified?: SortOrder
    citizenshipVerified?: SortOrder
    residencyVerified?: SortOrder
    duplicateCheck?: SortOrder
    status?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EligibilityVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    ageVerified?: SortOrder
    citizenshipVerified?: SortOrder
    residencyVerified?: SortOrder
    duplicateCheck?: SortOrder
    status?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EligibilityVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    ageVerified?: SortOrder
    citizenshipVerified?: SortOrder
    residencyVerified?: SortOrder
    duplicateCheck?: SortOrder
    status?: SortOrder
    voterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VoteCountOrderByAggregateInput = {
    id?: SortOrder
    voterId?: SortOrder
    candidate?: SortOrder
    timestamp?: SortOrder
  }

  export type VoteMaxOrderByAggregateInput = {
    id?: SortOrder
    voterId?: SortOrder
    candidate?: SortOrder
    timestamp?: SortOrder
  }

  export type VoteMinOrderByAggregateInput = {
    id?: SortOrder
    voterId?: SortOrder
    candidate?: SortOrder
    timestamp?: SortOrder
  }

  export type AddressCreateNestedOneWithoutVoterInput = {
    create?: XOR<AddressCreateWithoutVoterInput, AddressUncheckedCreateWithoutVoterInput>
    connectOrCreate?: AddressCreateOrConnectWithoutVoterInput
    connect?: AddressWhereUniqueInput
  }

  export type GovernmentIdCreateNestedOneWithoutVoterInput = {
    create?: XOR<GovernmentIdCreateWithoutVoterInput, GovernmentIdUncheckedCreateWithoutVoterInput>
    connectOrCreate?: GovernmentIdCreateOrConnectWithoutVoterInput
    connect?: GovernmentIdWhereUniqueInput
  }

  export type BiometricDataCreateNestedOneWithoutVoterInput = {
    create?: XOR<BiometricDataCreateWithoutVoterInput, BiometricDataUncheckedCreateWithoutVoterInput>
    connectOrCreate?: BiometricDataCreateOrConnectWithoutVoterInput
    connect?: BiometricDataWhereUniqueInput
  }

  export type IdentityVerificationCreateNestedOneWithoutVoterInput = {
    create?: XOR<IdentityVerificationCreateWithoutVoterInput, IdentityVerificationUncheckedCreateWithoutVoterInput>
    connectOrCreate?: IdentityVerificationCreateOrConnectWithoutVoterInput
    connect?: IdentityVerificationWhereUniqueInput
  }

  export type EligibilityVerificationCreateNestedOneWithoutVoterInput = {
    create?: XOR<EligibilityVerificationCreateWithoutVoterInput, EligibilityVerificationUncheckedCreateWithoutVoterInput>
    connectOrCreate?: EligibilityVerificationCreateOrConnectWithoutVoterInput
    connect?: EligibilityVerificationWhereUniqueInput
  }

  export type VoteCreateNestedManyWithoutVoterInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedOneWithoutVoterInput = {
    create?: XOR<AddressCreateWithoutVoterInput, AddressUncheckedCreateWithoutVoterInput>
    connectOrCreate?: AddressCreateOrConnectWithoutVoterInput
    connect?: AddressWhereUniqueInput
  }

  export type GovernmentIdUncheckedCreateNestedOneWithoutVoterInput = {
    create?: XOR<GovernmentIdCreateWithoutVoterInput, GovernmentIdUncheckedCreateWithoutVoterInput>
    connectOrCreate?: GovernmentIdCreateOrConnectWithoutVoterInput
    connect?: GovernmentIdWhereUniqueInput
  }

  export type BiometricDataUncheckedCreateNestedOneWithoutVoterInput = {
    create?: XOR<BiometricDataCreateWithoutVoterInput, BiometricDataUncheckedCreateWithoutVoterInput>
    connectOrCreate?: BiometricDataCreateOrConnectWithoutVoterInput
    connect?: BiometricDataWhereUniqueInput
  }

  export type IdentityVerificationUncheckedCreateNestedOneWithoutVoterInput = {
    create?: XOR<IdentityVerificationCreateWithoutVoterInput, IdentityVerificationUncheckedCreateWithoutVoterInput>
    connectOrCreate?: IdentityVerificationCreateOrConnectWithoutVoterInput
    connect?: IdentityVerificationWhereUniqueInput
  }

  export type EligibilityVerificationUncheckedCreateNestedOneWithoutVoterInput = {
    create?: XOR<EligibilityVerificationCreateWithoutVoterInput, EligibilityVerificationUncheckedCreateWithoutVoterInput>
    connectOrCreate?: EligibilityVerificationCreateOrConnectWithoutVoterInput
    connect?: EligibilityVerificationWhereUniqueInput
  }

  export type VoteUncheckedCreateNestedManyWithoutVoterInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AddressUpdateOneWithoutVoterNestedInput = {
    create?: XOR<AddressCreateWithoutVoterInput, AddressUncheckedCreateWithoutVoterInput>
    connectOrCreate?: AddressCreateOrConnectWithoutVoterInput
    upsert?: AddressUpsertWithoutVoterInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutVoterInput, AddressUpdateWithoutVoterInput>, AddressUncheckedUpdateWithoutVoterInput>
  }

  export type GovernmentIdUpdateOneWithoutVoterNestedInput = {
    create?: XOR<GovernmentIdCreateWithoutVoterInput, GovernmentIdUncheckedCreateWithoutVoterInput>
    connectOrCreate?: GovernmentIdCreateOrConnectWithoutVoterInput
    upsert?: GovernmentIdUpsertWithoutVoterInput
    disconnect?: GovernmentIdWhereInput | boolean
    delete?: GovernmentIdWhereInput | boolean
    connect?: GovernmentIdWhereUniqueInput
    update?: XOR<XOR<GovernmentIdUpdateToOneWithWhereWithoutVoterInput, GovernmentIdUpdateWithoutVoterInput>, GovernmentIdUncheckedUpdateWithoutVoterInput>
  }

  export type BiometricDataUpdateOneWithoutVoterNestedInput = {
    create?: XOR<BiometricDataCreateWithoutVoterInput, BiometricDataUncheckedCreateWithoutVoterInput>
    connectOrCreate?: BiometricDataCreateOrConnectWithoutVoterInput
    upsert?: BiometricDataUpsertWithoutVoterInput
    disconnect?: BiometricDataWhereInput | boolean
    delete?: BiometricDataWhereInput | boolean
    connect?: BiometricDataWhereUniqueInput
    update?: XOR<XOR<BiometricDataUpdateToOneWithWhereWithoutVoterInput, BiometricDataUpdateWithoutVoterInput>, BiometricDataUncheckedUpdateWithoutVoterInput>
  }

  export type IdentityVerificationUpdateOneWithoutVoterNestedInput = {
    create?: XOR<IdentityVerificationCreateWithoutVoterInput, IdentityVerificationUncheckedCreateWithoutVoterInput>
    connectOrCreate?: IdentityVerificationCreateOrConnectWithoutVoterInput
    upsert?: IdentityVerificationUpsertWithoutVoterInput
    disconnect?: IdentityVerificationWhereInput | boolean
    delete?: IdentityVerificationWhereInput | boolean
    connect?: IdentityVerificationWhereUniqueInput
    update?: XOR<XOR<IdentityVerificationUpdateToOneWithWhereWithoutVoterInput, IdentityVerificationUpdateWithoutVoterInput>, IdentityVerificationUncheckedUpdateWithoutVoterInput>
  }

  export type EligibilityVerificationUpdateOneWithoutVoterNestedInput = {
    create?: XOR<EligibilityVerificationCreateWithoutVoterInput, EligibilityVerificationUncheckedCreateWithoutVoterInput>
    connectOrCreate?: EligibilityVerificationCreateOrConnectWithoutVoterInput
    upsert?: EligibilityVerificationUpsertWithoutVoterInput
    disconnect?: EligibilityVerificationWhereInput | boolean
    delete?: EligibilityVerificationWhereInput | boolean
    connect?: EligibilityVerificationWhereUniqueInput
    update?: XOR<XOR<EligibilityVerificationUpdateToOneWithWhereWithoutVoterInput, EligibilityVerificationUpdateWithoutVoterInput>, EligibilityVerificationUncheckedUpdateWithoutVoterInput>
  }

  export type VoteUpdateManyWithoutVoterNestedInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVoterInput | VoteUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVoterInput | VoteUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVoterInput | VoteUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type AddressUncheckedUpdateOneWithoutVoterNestedInput = {
    create?: XOR<AddressCreateWithoutVoterInput, AddressUncheckedCreateWithoutVoterInput>
    connectOrCreate?: AddressCreateOrConnectWithoutVoterInput
    upsert?: AddressUpsertWithoutVoterInput
    disconnect?: AddressWhereInput | boolean
    delete?: AddressWhereInput | boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutVoterInput, AddressUpdateWithoutVoterInput>, AddressUncheckedUpdateWithoutVoterInput>
  }

  export type GovernmentIdUncheckedUpdateOneWithoutVoterNestedInput = {
    create?: XOR<GovernmentIdCreateWithoutVoterInput, GovernmentIdUncheckedCreateWithoutVoterInput>
    connectOrCreate?: GovernmentIdCreateOrConnectWithoutVoterInput
    upsert?: GovernmentIdUpsertWithoutVoterInput
    disconnect?: GovernmentIdWhereInput | boolean
    delete?: GovernmentIdWhereInput | boolean
    connect?: GovernmentIdWhereUniqueInput
    update?: XOR<XOR<GovernmentIdUpdateToOneWithWhereWithoutVoterInput, GovernmentIdUpdateWithoutVoterInput>, GovernmentIdUncheckedUpdateWithoutVoterInput>
  }

  export type BiometricDataUncheckedUpdateOneWithoutVoterNestedInput = {
    create?: XOR<BiometricDataCreateWithoutVoterInput, BiometricDataUncheckedCreateWithoutVoterInput>
    connectOrCreate?: BiometricDataCreateOrConnectWithoutVoterInput
    upsert?: BiometricDataUpsertWithoutVoterInput
    disconnect?: BiometricDataWhereInput | boolean
    delete?: BiometricDataWhereInput | boolean
    connect?: BiometricDataWhereUniqueInput
    update?: XOR<XOR<BiometricDataUpdateToOneWithWhereWithoutVoterInput, BiometricDataUpdateWithoutVoterInput>, BiometricDataUncheckedUpdateWithoutVoterInput>
  }

  export type IdentityVerificationUncheckedUpdateOneWithoutVoterNestedInput = {
    create?: XOR<IdentityVerificationCreateWithoutVoterInput, IdentityVerificationUncheckedCreateWithoutVoterInput>
    connectOrCreate?: IdentityVerificationCreateOrConnectWithoutVoterInput
    upsert?: IdentityVerificationUpsertWithoutVoterInput
    disconnect?: IdentityVerificationWhereInput | boolean
    delete?: IdentityVerificationWhereInput | boolean
    connect?: IdentityVerificationWhereUniqueInput
    update?: XOR<XOR<IdentityVerificationUpdateToOneWithWhereWithoutVoterInput, IdentityVerificationUpdateWithoutVoterInput>, IdentityVerificationUncheckedUpdateWithoutVoterInput>
  }

  export type EligibilityVerificationUncheckedUpdateOneWithoutVoterNestedInput = {
    create?: XOR<EligibilityVerificationCreateWithoutVoterInput, EligibilityVerificationUncheckedCreateWithoutVoterInput>
    connectOrCreate?: EligibilityVerificationCreateOrConnectWithoutVoterInput
    upsert?: EligibilityVerificationUpsertWithoutVoterInput
    disconnect?: EligibilityVerificationWhereInput | boolean
    delete?: EligibilityVerificationWhereInput | boolean
    connect?: EligibilityVerificationWhereUniqueInput
    update?: XOR<XOR<EligibilityVerificationUpdateToOneWithWhereWithoutVoterInput, EligibilityVerificationUpdateWithoutVoterInput>, EligibilityVerificationUncheckedUpdateWithoutVoterInput>
  }

  export type VoteUncheckedUpdateManyWithoutVoterNestedInput = {
    create?: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput> | VoteCreateWithoutVoterInput[] | VoteUncheckedCreateWithoutVoterInput[]
    connectOrCreate?: VoteCreateOrConnectWithoutVoterInput | VoteCreateOrConnectWithoutVoterInput[]
    upsert?: VoteUpsertWithWhereUniqueWithoutVoterInput | VoteUpsertWithWhereUniqueWithoutVoterInput[]
    createMany?: VoteCreateManyVoterInputEnvelope
    set?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    disconnect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    delete?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    connect?: VoteWhereUniqueInput | VoteWhereUniqueInput[]
    update?: VoteUpdateWithWhereUniqueWithoutVoterInput | VoteUpdateWithWhereUniqueWithoutVoterInput[]
    updateMany?: VoteUpdateManyWithWhereWithoutVoterInput | VoteUpdateManyWithWhereWithoutVoterInput[]
    deleteMany?: VoteScalarWhereInput | VoteScalarWhereInput[]
  }

  export type VoterCreateNestedOneWithoutAddressInput = {
    create?: XOR<VoterCreateWithoutAddressInput, VoterUncheckedCreateWithoutAddressInput>
    connectOrCreate?: VoterCreateOrConnectWithoutAddressInput
    connect?: VoterWhereUniqueInput
  }

  export type VoterUpdateOneRequiredWithoutAddressNestedInput = {
    create?: XOR<VoterCreateWithoutAddressInput, VoterUncheckedCreateWithoutAddressInput>
    connectOrCreate?: VoterCreateOrConnectWithoutAddressInput
    upsert?: VoterUpsertWithoutAddressInput
    connect?: VoterWhereUniqueInput
    update?: XOR<XOR<VoterUpdateToOneWithWhereWithoutAddressInput, VoterUpdateWithoutAddressInput>, VoterUncheckedUpdateWithoutAddressInput>
  }

  export type VoterCreateNestedOneWithoutGovernmentIdInput = {
    create?: XOR<VoterCreateWithoutGovernmentIdInput, VoterUncheckedCreateWithoutGovernmentIdInput>
    connectOrCreate?: VoterCreateOrConnectWithoutGovernmentIdInput
    connect?: VoterWhereUniqueInput
  }

  export type EnumGovernmentIdTypeFieldUpdateOperationsInput = {
    set?: $Enums.GovernmentIdType
  }

  export type VoterUpdateOneRequiredWithoutGovernmentIdNestedInput = {
    create?: XOR<VoterCreateWithoutGovernmentIdInput, VoterUncheckedCreateWithoutGovernmentIdInput>
    connectOrCreate?: VoterCreateOrConnectWithoutGovernmentIdInput
    upsert?: VoterUpsertWithoutGovernmentIdInput
    connect?: VoterWhereUniqueInput
    update?: XOR<XOR<VoterUpdateToOneWithWhereWithoutGovernmentIdInput, VoterUpdateWithoutGovernmentIdInput>, VoterUncheckedUpdateWithoutGovernmentIdInput>
  }

  export type VoterCreateNestedOneWithoutBiometricDataInput = {
    create?: XOR<VoterCreateWithoutBiometricDataInput, VoterUncheckedCreateWithoutBiometricDataInput>
    connectOrCreate?: VoterCreateOrConnectWithoutBiometricDataInput
    connect?: VoterWhereUniqueInput
  }

  export type EnumBiometricTypeFieldUpdateOperationsInput = {
    set?: $Enums.BiometricType
  }

  export type VoterUpdateOneRequiredWithoutBiometricDataNestedInput = {
    create?: XOR<VoterCreateWithoutBiometricDataInput, VoterUncheckedCreateWithoutBiometricDataInput>
    connectOrCreate?: VoterCreateOrConnectWithoutBiometricDataInput
    upsert?: VoterUpsertWithoutBiometricDataInput
    connect?: VoterWhereUniqueInput
    update?: XOR<XOR<VoterUpdateToOneWithWhereWithoutBiometricDataInput, VoterUpdateWithoutBiometricDataInput>, VoterUncheckedUpdateWithoutBiometricDataInput>
  }

  export type VoterCreateNestedOneWithoutIdentityVerificationInput = {
    create?: XOR<VoterCreateWithoutIdentityVerificationInput, VoterUncheckedCreateWithoutIdentityVerificationInput>
    connectOrCreate?: VoterCreateOrConnectWithoutIdentityVerificationInput
    connect?: VoterWhereUniqueInput
  }

  export type EnumVerificationMethodFieldUpdateOperationsInput = {
    set?: $Enums.VerificationMethod
  }

  export type VoterUpdateOneRequiredWithoutIdentityVerificationNestedInput = {
    create?: XOR<VoterCreateWithoutIdentityVerificationInput, VoterUncheckedCreateWithoutIdentityVerificationInput>
    connectOrCreate?: VoterCreateOrConnectWithoutIdentityVerificationInput
    upsert?: VoterUpsertWithoutIdentityVerificationInput
    connect?: VoterWhereUniqueInput
    update?: XOR<XOR<VoterUpdateToOneWithWhereWithoutIdentityVerificationInput, VoterUpdateWithoutIdentityVerificationInput>, VoterUncheckedUpdateWithoutIdentityVerificationInput>
  }

  export type VoterCreateNestedOneWithoutEligibilityVerificationInput = {
    create?: XOR<VoterCreateWithoutEligibilityVerificationInput, VoterUncheckedCreateWithoutEligibilityVerificationInput>
    connectOrCreate?: VoterCreateOrConnectWithoutEligibilityVerificationInput
    connect?: VoterWhereUniqueInput
  }

  export type VoterUpdateOneRequiredWithoutEligibilityVerificationNestedInput = {
    create?: XOR<VoterCreateWithoutEligibilityVerificationInput, VoterUncheckedCreateWithoutEligibilityVerificationInput>
    connectOrCreate?: VoterCreateOrConnectWithoutEligibilityVerificationInput
    upsert?: VoterUpsertWithoutEligibilityVerificationInput
    connect?: VoterWhereUniqueInput
    update?: XOR<XOR<VoterUpdateToOneWithWhereWithoutEligibilityVerificationInput, VoterUpdateWithoutEligibilityVerificationInput>, VoterUncheckedUpdateWithoutEligibilityVerificationInput>
  }

  export type VoterCreateNestedOneWithoutVotesInput = {
    create?: XOR<VoterCreateWithoutVotesInput, VoterUncheckedCreateWithoutVotesInput>
    connectOrCreate?: VoterCreateOrConnectWithoutVotesInput
    connect?: VoterWhereUniqueInput
  }

  export type VoterUpdateOneRequiredWithoutVotesNestedInput = {
    create?: XOR<VoterCreateWithoutVotesInput, VoterUncheckedCreateWithoutVotesInput>
    connectOrCreate?: VoterCreateOrConnectWithoutVotesInput
    upsert?: VoterUpsertWithoutVotesInput
    connect?: VoterWhereUniqueInput
    update?: XOR<XOR<VoterUpdateToOneWithWhereWithoutVotesInput, VoterUpdateWithoutVotesInput>, VoterUncheckedUpdateWithoutVotesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationStatus[] | ListEnumVerificationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGovernmentIdTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.GovernmentIdType | EnumGovernmentIdTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GovernmentIdType[] | ListEnumGovernmentIdTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GovernmentIdType[] | ListEnumGovernmentIdTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGovernmentIdTypeFilter<$PrismaModel> | $Enums.GovernmentIdType
  }

  export type NestedEnumGovernmentIdTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GovernmentIdType | EnumGovernmentIdTypeFieldRefInput<$PrismaModel>
    in?: $Enums.GovernmentIdType[] | ListEnumGovernmentIdTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.GovernmentIdType[] | ListEnumGovernmentIdTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumGovernmentIdTypeWithAggregatesFilter<$PrismaModel> | $Enums.GovernmentIdType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGovernmentIdTypeFilter<$PrismaModel>
    _max?: NestedEnumGovernmentIdTypeFilter<$PrismaModel>
  }

  export type NestedEnumBiometricTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BiometricType | EnumBiometricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BiometricType[] | ListEnumBiometricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BiometricType[] | ListEnumBiometricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBiometricTypeFilter<$PrismaModel> | $Enums.BiometricType
  }

  export type NestedEnumBiometricTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BiometricType | EnumBiometricTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BiometricType[] | ListEnumBiometricTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BiometricType[] | ListEnumBiometricTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBiometricTypeWithAggregatesFilter<$PrismaModel> | $Enums.BiometricType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBiometricTypeFilter<$PrismaModel>
    _max?: NestedEnumBiometricTypeFilter<$PrismaModel>
  }

  export type NestedEnumVerificationMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationMethod | EnumVerificationMethodFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationMethod[] | ListEnumVerificationMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationMethod[] | ListEnumVerificationMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationMethodFilter<$PrismaModel> | $Enums.VerificationMethod
  }

  export type NestedEnumVerificationMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationMethod | EnumVerificationMethodFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationMethod[] | ListEnumVerificationMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationMethod[] | ListEnumVerificationMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationMethodWithAggregatesFilter<$PrismaModel> | $Enums.VerificationMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationMethodFilter<$PrismaModel>
    _max?: NestedEnumVerificationMethodFilter<$PrismaModel>
  }

  export type AddressCreateWithoutVoterInput = {
    id?: string
    street: string
    city: string
    state: string
    country: string
    postalCode: string
  }

  export type AddressUncheckedCreateWithoutVoterInput = {
    id?: string
    street: string
    city: string
    state: string
    country: string
    postalCode: string
  }

  export type AddressCreateOrConnectWithoutVoterInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutVoterInput, AddressUncheckedCreateWithoutVoterInput>
  }

  export type GovernmentIdCreateWithoutVoterInput = {
    id?: string
    type: $Enums.GovernmentIdType
    number: string
    expiryDate: Date | string
  }

  export type GovernmentIdUncheckedCreateWithoutVoterInput = {
    id?: string
    type: $Enums.GovernmentIdType
    number: string
    expiryDate: Date | string
  }

  export type GovernmentIdCreateOrConnectWithoutVoterInput = {
    where: GovernmentIdWhereUniqueInput
    create: XOR<GovernmentIdCreateWithoutVoterInput, GovernmentIdUncheckedCreateWithoutVoterInput>
  }

  export type BiometricDataCreateWithoutVoterInput = {
    id?: string
    type: $Enums.BiometricType
    hash: string
  }

  export type BiometricDataUncheckedCreateWithoutVoterInput = {
    id?: string
    type: $Enums.BiometricType
    hash: string
  }

  export type BiometricDataCreateOrConnectWithoutVoterInput = {
    where: BiometricDataWhereUniqueInput
    create: XOR<BiometricDataCreateWithoutVoterInput, BiometricDataUncheckedCreateWithoutVoterInput>
  }

  export type IdentityVerificationCreateWithoutVoterInput = {
    id?: string
    documentType: $Enums.GovernmentIdType
    documentNumber: string
    documentImage: string
    selfieImage: string
    verificationMethod: $Enums.VerificationMethod
    verificationProvider?: string | null
    status?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityVerificationUncheckedCreateWithoutVoterInput = {
    id?: string
    documentType: $Enums.GovernmentIdType
    documentNumber: string
    documentImage: string
    selfieImage: string
    verificationMethod: $Enums.VerificationMethod
    verificationProvider?: string | null
    status?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityVerificationCreateOrConnectWithoutVoterInput = {
    where: IdentityVerificationWhereUniqueInput
    create: XOR<IdentityVerificationCreateWithoutVoterInput, IdentityVerificationUncheckedCreateWithoutVoterInput>
  }

  export type EligibilityVerificationCreateWithoutVoterInput = {
    id?: string
    ageVerified?: boolean
    citizenshipVerified?: boolean
    residencyVerified?: boolean
    duplicateCheck?: boolean
    status?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EligibilityVerificationUncheckedCreateWithoutVoterInput = {
    id?: string
    ageVerified?: boolean
    citizenshipVerified?: boolean
    residencyVerified?: boolean
    duplicateCheck?: boolean
    status?: $Enums.VerificationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EligibilityVerificationCreateOrConnectWithoutVoterInput = {
    where: EligibilityVerificationWhereUniqueInput
    create: XOR<EligibilityVerificationCreateWithoutVoterInput, EligibilityVerificationUncheckedCreateWithoutVoterInput>
  }

  export type VoteCreateWithoutVoterInput = {
    id?: string
    candidate: string
    timestamp?: Date | string
  }

  export type VoteUncheckedCreateWithoutVoterInput = {
    id?: string
    candidate: string
    timestamp?: Date | string
  }

  export type VoteCreateOrConnectWithoutVoterInput = {
    where: VoteWhereUniqueInput
    create: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput>
  }

  export type VoteCreateManyVoterInputEnvelope = {
    data: VoteCreateManyVoterInput | VoteCreateManyVoterInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutVoterInput = {
    update: XOR<AddressUpdateWithoutVoterInput, AddressUncheckedUpdateWithoutVoterInput>
    create: XOR<AddressCreateWithoutVoterInput, AddressUncheckedCreateWithoutVoterInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutVoterInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutVoterInput, AddressUncheckedUpdateWithoutVoterInput>
  }

  export type AddressUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type GovernmentIdUpsertWithoutVoterInput = {
    update: XOR<GovernmentIdUpdateWithoutVoterInput, GovernmentIdUncheckedUpdateWithoutVoterInput>
    create: XOR<GovernmentIdCreateWithoutVoterInput, GovernmentIdUncheckedCreateWithoutVoterInput>
    where?: GovernmentIdWhereInput
  }

  export type GovernmentIdUpdateToOneWithWhereWithoutVoterInput = {
    where?: GovernmentIdWhereInput
    data: XOR<GovernmentIdUpdateWithoutVoterInput, GovernmentIdUncheckedUpdateWithoutVoterInput>
  }

  export type GovernmentIdUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGovernmentIdTypeFieldUpdateOperationsInput | $Enums.GovernmentIdType
    number?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GovernmentIdUncheckedUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumGovernmentIdTypeFieldUpdateOperationsInput | $Enums.GovernmentIdType
    number?: StringFieldUpdateOperationsInput | string
    expiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BiometricDataUpsertWithoutVoterInput = {
    update: XOR<BiometricDataUpdateWithoutVoterInput, BiometricDataUncheckedUpdateWithoutVoterInput>
    create: XOR<BiometricDataCreateWithoutVoterInput, BiometricDataUncheckedCreateWithoutVoterInput>
    where?: BiometricDataWhereInput
  }

  export type BiometricDataUpdateToOneWithWhereWithoutVoterInput = {
    where?: BiometricDataWhereInput
    data: XOR<BiometricDataUpdateWithoutVoterInput, BiometricDataUncheckedUpdateWithoutVoterInput>
  }

  export type BiometricDataUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBiometricTypeFieldUpdateOperationsInput | $Enums.BiometricType
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type BiometricDataUncheckedUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumBiometricTypeFieldUpdateOperationsInput | $Enums.BiometricType
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type IdentityVerificationUpsertWithoutVoterInput = {
    update: XOR<IdentityVerificationUpdateWithoutVoterInput, IdentityVerificationUncheckedUpdateWithoutVoterInput>
    create: XOR<IdentityVerificationCreateWithoutVoterInput, IdentityVerificationUncheckedCreateWithoutVoterInput>
    where?: IdentityVerificationWhereInput
  }

  export type IdentityVerificationUpdateToOneWithWhereWithoutVoterInput = {
    where?: IdentityVerificationWhereInput
    data: XOR<IdentityVerificationUpdateWithoutVoterInput, IdentityVerificationUncheckedUpdateWithoutVoterInput>
  }

  export type IdentityVerificationUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumGovernmentIdTypeFieldUpdateOperationsInput | $Enums.GovernmentIdType
    documentNumber?: StringFieldUpdateOperationsInput | string
    documentImage?: StringFieldUpdateOperationsInput | string
    selfieImage?: StringFieldUpdateOperationsInput | string
    verificationMethod?: EnumVerificationMethodFieldUpdateOperationsInput | $Enums.VerificationMethod
    verificationProvider?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityVerificationUncheckedUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumGovernmentIdTypeFieldUpdateOperationsInput | $Enums.GovernmentIdType
    documentNumber?: StringFieldUpdateOperationsInput | string
    documentImage?: StringFieldUpdateOperationsInput | string
    selfieImage?: StringFieldUpdateOperationsInput | string
    verificationMethod?: EnumVerificationMethodFieldUpdateOperationsInput | $Enums.VerificationMethod
    verificationProvider?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EligibilityVerificationUpsertWithoutVoterInput = {
    update: XOR<EligibilityVerificationUpdateWithoutVoterInput, EligibilityVerificationUncheckedUpdateWithoutVoterInput>
    create: XOR<EligibilityVerificationCreateWithoutVoterInput, EligibilityVerificationUncheckedCreateWithoutVoterInput>
    where?: EligibilityVerificationWhereInput
  }

  export type EligibilityVerificationUpdateToOneWithWhereWithoutVoterInput = {
    where?: EligibilityVerificationWhereInput
    data: XOR<EligibilityVerificationUpdateWithoutVoterInput, EligibilityVerificationUncheckedUpdateWithoutVoterInput>
  }

  export type EligibilityVerificationUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    ageVerified?: BoolFieldUpdateOperationsInput | boolean
    citizenshipVerified?: BoolFieldUpdateOperationsInput | boolean
    residencyVerified?: BoolFieldUpdateOperationsInput | boolean
    duplicateCheck?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EligibilityVerificationUncheckedUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    ageVerified?: BoolFieldUpdateOperationsInput | boolean
    citizenshipVerified?: BoolFieldUpdateOperationsInput | boolean
    residencyVerified?: BoolFieldUpdateOperationsInput | boolean
    duplicateCheck?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUpsertWithWhereUniqueWithoutVoterInput = {
    where: VoteWhereUniqueInput
    update: XOR<VoteUpdateWithoutVoterInput, VoteUncheckedUpdateWithoutVoterInput>
    create: XOR<VoteCreateWithoutVoterInput, VoteUncheckedCreateWithoutVoterInput>
  }

  export type VoteUpdateWithWhereUniqueWithoutVoterInput = {
    where: VoteWhereUniqueInput
    data: XOR<VoteUpdateWithoutVoterInput, VoteUncheckedUpdateWithoutVoterInput>
  }

  export type VoteUpdateManyWithWhereWithoutVoterInput = {
    where: VoteScalarWhereInput
    data: XOR<VoteUpdateManyMutationInput, VoteUncheckedUpdateManyWithoutVoterInput>
  }

  export type VoteScalarWhereInput = {
    AND?: VoteScalarWhereInput | VoteScalarWhereInput[]
    OR?: VoteScalarWhereInput[]
    NOT?: VoteScalarWhereInput | VoteScalarWhereInput[]
    id?: StringFilter<"Vote"> | string
    voterId?: StringFilter<"Vote"> | string
    candidate?: StringFilter<"Vote"> | string
    timestamp?: DateTimeFilter<"Vote"> | Date | string
  }

  export type VoterCreateWithoutAddressInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    governmentId?: GovernmentIdCreateNestedOneWithoutVoterInput
    biometricData?: BiometricDataCreateNestedOneWithoutVoterInput
    identityVerification?: IdentityVerificationCreateNestedOneWithoutVoterInput
    eligibilityVerification?: EligibilityVerificationCreateNestedOneWithoutVoterInput
    votes?: VoteCreateNestedManyWithoutVoterInput
  }

  export type VoterUncheckedCreateWithoutAddressInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    governmentId?: GovernmentIdUncheckedCreateNestedOneWithoutVoterInput
    biometricData?: BiometricDataUncheckedCreateNestedOneWithoutVoterInput
    identityVerification?: IdentityVerificationUncheckedCreateNestedOneWithoutVoterInput
    eligibilityVerification?: EligibilityVerificationUncheckedCreateNestedOneWithoutVoterInput
    votes?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type VoterCreateOrConnectWithoutAddressInput = {
    where: VoterWhereUniqueInput
    create: XOR<VoterCreateWithoutAddressInput, VoterUncheckedCreateWithoutAddressInput>
  }

  export type VoterUpsertWithoutAddressInput = {
    update: XOR<VoterUpdateWithoutAddressInput, VoterUncheckedUpdateWithoutAddressInput>
    create: XOR<VoterCreateWithoutAddressInput, VoterUncheckedCreateWithoutAddressInput>
    where?: VoterWhereInput
  }

  export type VoterUpdateToOneWithWhereWithoutAddressInput = {
    where?: VoterWhereInput
    data: XOR<VoterUpdateWithoutAddressInput, VoterUncheckedUpdateWithoutAddressInput>
  }

  export type VoterUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    governmentId?: GovernmentIdUpdateOneWithoutVoterNestedInput
    biometricData?: BiometricDataUpdateOneWithoutVoterNestedInput
    identityVerification?: IdentityVerificationUpdateOneWithoutVoterNestedInput
    eligibilityVerification?: EligibilityVerificationUpdateOneWithoutVoterNestedInput
    votes?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    governmentId?: GovernmentIdUncheckedUpdateOneWithoutVoterNestedInput
    biometricData?: BiometricDataUncheckedUpdateOneWithoutVoterNestedInput
    identityVerification?: IdentityVerificationUncheckedUpdateOneWithoutVoterNestedInput
    eligibilityVerification?: EligibilityVerificationUncheckedUpdateOneWithoutVoterNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type VoterCreateWithoutGovernmentIdInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutVoterInput
    biometricData?: BiometricDataCreateNestedOneWithoutVoterInput
    identityVerification?: IdentityVerificationCreateNestedOneWithoutVoterInput
    eligibilityVerification?: EligibilityVerificationCreateNestedOneWithoutVoterInput
    votes?: VoteCreateNestedManyWithoutVoterInput
  }

  export type VoterUncheckedCreateWithoutGovernmentIdInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutVoterInput
    biometricData?: BiometricDataUncheckedCreateNestedOneWithoutVoterInput
    identityVerification?: IdentityVerificationUncheckedCreateNestedOneWithoutVoterInput
    eligibilityVerification?: EligibilityVerificationUncheckedCreateNestedOneWithoutVoterInput
    votes?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type VoterCreateOrConnectWithoutGovernmentIdInput = {
    where: VoterWhereUniqueInput
    create: XOR<VoterCreateWithoutGovernmentIdInput, VoterUncheckedCreateWithoutGovernmentIdInput>
  }

  export type VoterUpsertWithoutGovernmentIdInput = {
    update: XOR<VoterUpdateWithoutGovernmentIdInput, VoterUncheckedUpdateWithoutGovernmentIdInput>
    create: XOR<VoterCreateWithoutGovernmentIdInput, VoterUncheckedCreateWithoutGovernmentIdInput>
    where?: VoterWhereInput
  }

  export type VoterUpdateToOneWithWhereWithoutGovernmentIdInput = {
    where?: VoterWhereInput
    data: XOR<VoterUpdateWithoutGovernmentIdInput, VoterUncheckedUpdateWithoutGovernmentIdInput>
  }

  export type VoterUpdateWithoutGovernmentIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutVoterNestedInput
    biometricData?: BiometricDataUpdateOneWithoutVoterNestedInput
    identityVerification?: IdentityVerificationUpdateOneWithoutVoterNestedInput
    eligibilityVerification?: EligibilityVerificationUpdateOneWithoutVoterNestedInput
    votes?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateWithoutGovernmentIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutVoterNestedInput
    biometricData?: BiometricDataUncheckedUpdateOneWithoutVoterNestedInput
    identityVerification?: IdentityVerificationUncheckedUpdateOneWithoutVoterNestedInput
    eligibilityVerification?: EligibilityVerificationUncheckedUpdateOneWithoutVoterNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type VoterCreateWithoutBiometricDataInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutVoterInput
    governmentId?: GovernmentIdCreateNestedOneWithoutVoterInput
    identityVerification?: IdentityVerificationCreateNestedOneWithoutVoterInput
    eligibilityVerification?: EligibilityVerificationCreateNestedOneWithoutVoterInput
    votes?: VoteCreateNestedManyWithoutVoterInput
  }

  export type VoterUncheckedCreateWithoutBiometricDataInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutVoterInput
    governmentId?: GovernmentIdUncheckedCreateNestedOneWithoutVoterInput
    identityVerification?: IdentityVerificationUncheckedCreateNestedOneWithoutVoterInput
    eligibilityVerification?: EligibilityVerificationUncheckedCreateNestedOneWithoutVoterInput
    votes?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type VoterCreateOrConnectWithoutBiometricDataInput = {
    where: VoterWhereUniqueInput
    create: XOR<VoterCreateWithoutBiometricDataInput, VoterUncheckedCreateWithoutBiometricDataInput>
  }

  export type VoterUpsertWithoutBiometricDataInput = {
    update: XOR<VoterUpdateWithoutBiometricDataInput, VoterUncheckedUpdateWithoutBiometricDataInput>
    create: XOR<VoterCreateWithoutBiometricDataInput, VoterUncheckedCreateWithoutBiometricDataInput>
    where?: VoterWhereInput
  }

  export type VoterUpdateToOneWithWhereWithoutBiometricDataInput = {
    where?: VoterWhereInput
    data: XOR<VoterUpdateWithoutBiometricDataInput, VoterUncheckedUpdateWithoutBiometricDataInput>
  }

  export type VoterUpdateWithoutBiometricDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutVoterNestedInput
    governmentId?: GovernmentIdUpdateOneWithoutVoterNestedInput
    identityVerification?: IdentityVerificationUpdateOneWithoutVoterNestedInput
    eligibilityVerification?: EligibilityVerificationUpdateOneWithoutVoterNestedInput
    votes?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateWithoutBiometricDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutVoterNestedInput
    governmentId?: GovernmentIdUncheckedUpdateOneWithoutVoterNestedInput
    identityVerification?: IdentityVerificationUncheckedUpdateOneWithoutVoterNestedInput
    eligibilityVerification?: EligibilityVerificationUncheckedUpdateOneWithoutVoterNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type VoterCreateWithoutIdentityVerificationInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutVoterInput
    governmentId?: GovernmentIdCreateNestedOneWithoutVoterInput
    biometricData?: BiometricDataCreateNestedOneWithoutVoterInput
    eligibilityVerification?: EligibilityVerificationCreateNestedOneWithoutVoterInput
    votes?: VoteCreateNestedManyWithoutVoterInput
  }

  export type VoterUncheckedCreateWithoutIdentityVerificationInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutVoterInput
    governmentId?: GovernmentIdUncheckedCreateNestedOneWithoutVoterInput
    biometricData?: BiometricDataUncheckedCreateNestedOneWithoutVoterInput
    eligibilityVerification?: EligibilityVerificationUncheckedCreateNestedOneWithoutVoterInput
    votes?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type VoterCreateOrConnectWithoutIdentityVerificationInput = {
    where: VoterWhereUniqueInput
    create: XOR<VoterCreateWithoutIdentityVerificationInput, VoterUncheckedCreateWithoutIdentityVerificationInput>
  }

  export type VoterUpsertWithoutIdentityVerificationInput = {
    update: XOR<VoterUpdateWithoutIdentityVerificationInput, VoterUncheckedUpdateWithoutIdentityVerificationInput>
    create: XOR<VoterCreateWithoutIdentityVerificationInput, VoterUncheckedCreateWithoutIdentityVerificationInput>
    where?: VoterWhereInput
  }

  export type VoterUpdateToOneWithWhereWithoutIdentityVerificationInput = {
    where?: VoterWhereInput
    data: XOR<VoterUpdateWithoutIdentityVerificationInput, VoterUncheckedUpdateWithoutIdentityVerificationInput>
  }

  export type VoterUpdateWithoutIdentityVerificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutVoterNestedInput
    governmentId?: GovernmentIdUpdateOneWithoutVoterNestedInput
    biometricData?: BiometricDataUpdateOneWithoutVoterNestedInput
    eligibilityVerification?: EligibilityVerificationUpdateOneWithoutVoterNestedInput
    votes?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateWithoutIdentityVerificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutVoterNestedInput
    governmentId?: GovernmentIdUncheckedUpdateOneWithoutVoterNestedInput
    biometricData?: BiometricDataUncheckedUpdateOneWithoutVoterNestedInput
    eligibilityVerification?: EligibilityVerificationUncheckedUpdateOneWithoutVoterNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type VoterCreateWithoutEligibilityVerificationInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutVoterInput
    governmentId?: GovernmentIdCreateNestedOneWithoutVoterInput
    biometricData?: BiometricDataCreateNestedOneWithoutVoterInput
    identityVerification?: IdentityVerificationCreateNestedOneWithoutVoterInput
    votes?: VoteCreateNestedManyWithoutVoterInput
  }

  export type VoterUncheckedCreateWithoutEligibilityVerificationInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutVoterInput
    governmentId?: GovernmentIdUncheckedCreateNestedOneWithoutVoterInput
    biometricData?: BiometricDataUncheckedCreateNestedOneWithoutVoterInput
    identityVerification?: IdentityVerificationUncheckedCreateNestedOneWithoutVoterInput
    votes?: VoteUncheckedCreateNestedManyWithoutVoterInput
  }

  export type VoterCreateOrConnectWithoutEligibilityVerificationInput = {
    where: VoterWhereUniqueInput
    create: XOR<VoterCreateWithoutEligibilityVerificationInput, VoterUncheckedCreateWithoutEligibilityVerificationInput>
  }

  export type VoterUpsertWithoutEligibilityVerificationInput = {
    update: XOR<VoterUpdateWithoutEligibilityVerificationInput, VoterUncheckedUpdateWithoutEligibilityVerificationInput>
    create: XOR<VoterCreateWithoutEligibilityVerificationInput, VoterUncheckedCreateWithoutEligibilityVerificationInput>
    where?: VoterWhereInput
  }

  export type VoterUpdateToOneWithWhereWithoutEligibilityVerificationInput = {
    where?: VoterWhereInput
    data: XOR<VoterUpdateWithoutEligibilityVerificationInput, VoterUncheckedUpdateWithoutEligibilityVerificationInput>
  }

  export type VoterUpdateWithoutEligibilityVerificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutVoterNestedInput
    governmentId?: GovernmentIdUpdateOneWithoutVoterNestedInput
    biometricData?: BiometricDataUpdateOneWithoutVoterNestedInput
    identityVerification?: IdentityVerificationUpdateOneWithoutVoterNestedInput
    votes?: VoteUpdateManyWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateWithoutEligibilityVerificationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutVoterNestedInput
    governmentId?: GovernmentIdUncheckedUpdateOneWithoutVoterNestedInput
    biometricData?: BiometricDataUncheckedUpdateOneWithoutVoterNestedInput
    identityVerification?: IdentityVerificationUncheckedUpdateOneWithoutVoterNestedInput
    votes?: VoteUncheckedUpdateManyWithoutVoterNestedInput
  }

  export type VoterCreateWithoutVotesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressCreateNestedOneWithoutVoterInput
    governmentId?: GovernmentIdCreateNestedOneWithoutVoterInput
    biometricData?: BiometricDataCreateNestedOneWithoutVoterInput
    identityVerification?: IdentityVerificationCreateNestedOneWithoutVoterInput
    eligibilityVerification?: EligibilityVerificationCreateNestedOneWithoutVoterInput
  }

  export type VoterUncheckedCreateWithoutVotesInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    dateOfBirth: Date | string
    nationality: string
    phoneNumber: string
    isVerified?: boolean
    verificationStatus?: $Enums.VerificationStatus
    mfaEnabled?: boolean
    mfaSecret?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    address?: AddressUncheckedCreateNestedOneWithoutVoterInput
    governmentId?: GovernmentIdUncheckedCreateNestedOneWithoutVoterInput
    biometricData?: BiometricDataUncheckedCreateNestedOneWithoutVoterInput
    identityVerification?: IdentityVerificationUncheckedCreateNestedOneWithoutVoterInput
    eligibilityVerification?: EligibilityVerificationUncheckedCreateNestedOneWithoutVoterInput
  }

  export type VoterCreateOrConnectWithoutVotesInput = {
    where: VoterWhereUniqueInput
    create: XOR<VoterCreateWithoutVotesInput, VoterUncheckedCreateWithoutVotesInput>
  }

  export type VoterUpsertWithoutVotesInput = {
    update: XOR<VoterUpdateWithoutVotesInput, VoterUncheckedUpdateWithoutVotesInput>
    create: XOR<VoterCreateWithoutVotesInput, VoterUncheckedCreateWithoutVotesInput>
    where?: VoterWhereInput
  }

  export type VoterUpdateToOneWithWhereWithoutVotesInput = {
    where?: VoterWhereInput
    data: XOR<VoterUpdateWithoutVotesInput, VoterUncheckedUpdateWithoutVotesInput>
  }

  export type VoterUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneWithoutVoterNestedInput
    governmentId?: GovernmentIdUpdateOneWithoutVoterNestedInput
    biometricData?: BiometricDataUpdateOneWithoutVoterNestedInput
    identityVerification?: IdentityVerificationUpdateOneWithoutVoterNestedInput
    eligibilityVerification?: EligibilityVerificationUpdateOneWithoutVoterNestedInput
  }

  export type VoterUncheckedUpdateWithoutVotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    mfaEnabled?: BoolFieldUpdateOperationsInput | boolean
    mfaSecret?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUncheckedUpdateOneWithoutVoterNestedInput
    governmentId?: GovernmentIdUncheckedUpdateOneWithoutVoterNestedInput
    biometricData?: BiometricDataUncheckedUpdateOneWithoutVoterNestedInput
    identityVerification?: IdentityVerificationUncheckedUpdateOneWithoutVoterNestedInput
    eligibilityVerification?: EligibilityVerificationUncheckedUpdateOneWithoutVoterNestedInput
  }

  export type VoteCreateManyVoterInput = {
    id?: string
    candidate: string
    timestamp?: Date | string
  }

  export type VoteUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidate?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidate?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoteUncheckedUpdateManyWithoutVoterInput = {
    id?: StringFieldUpdateOperationsInput | string
    candidate?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}