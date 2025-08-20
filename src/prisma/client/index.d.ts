
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Registration
 * 
 */
export type Registration = $Result.DefaultSelection<Prisma.$RegistrationPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model PaymentLog
 * 
 */
export type PaymentLog = $Result.DefaultSelection<Prisma.$PaymentLogPayload>
/**
 * Model CheckIn
 * 
 */
export type CheckIn = $Result.DefaultSelection<Prisma.$CheckInPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TicketType: {
  REGULAR: 'REGULAR',
  VIP: 'VIP'
};

export type TicketType = (typeof TicketType)[keyof typeof TicketType]


export const PaymentStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const AdminRole: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  VERIFIER: 'VERIFIER'
};

export type AdminRole = (typeof AdminRole)[keyof typeof AdminRole]


export const PaymentAction: {
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type PaymentAction = (typeof PaymentAction)[keyof typeof PaymentAction]


export const CheckInMethod: {
  QR_SCAN: 'QR_SCAN',
  MANUAL: 'MANUAL'
};

export type CheckInMethod = (typeof CheckInMethod)[keyof typeof CheckInMethod]

}

export type TicketType = $Enums.TicketType

export const TicketType: typeof $Enums.TicketType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type AdminRole = $Enums.AdminRole

export const AdminRole: typeof $Enums.AdminRole

export type PaymentAction = $Enums.PaymentAction

export const PaymentAction: typeof $Enums.PaymentAction

export type CheckInMethod = $Enums.CheckInMethod

export const CheckInMethod: typeof $Enums.CheckInMethod

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.registration`: Exposes CRUD operations for the **Registration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registrations
    * const registrations = await prisma.registration.findMany()
    * ```
    */
  get registration(): Prisma.RegistrationDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.paymentLog`: Exposes CRUD operations for the **PaymentLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentLogs
    * const paymentLogs = await prisma.paymentLog.findMany()
    * ```
    */
  get paymentLog(): Prisma.PaymentLogDelegate<ExtArgs>;

  /**
   * `prisma.checkIn`: Exposes CRUD operations for the **CheckIn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckIns
    * const checkIns = await prisma.checkIn.findMany()
    * ```
    */
  get checkIn(): Prisma.CheckInDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Registration: 'Registration',
    Admin: 'Admin',
    PaymentLog: 'PaymentLog',
    CheckIn: 'CheckIn'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "registration" | "admin" | "paymentLog" | "checkIn"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Registration: {
        payload: Prisma.$RegistrationPayload<ExtArgs>
        fields: Prisma.RegistrationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistrationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistrationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findFirst: {
            args: Prisma.RegistrationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistrationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          findMany: {
            args: Prisma.RegistrationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>[]
          }
          create: {
            args: Prisma.RegistrationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          createMany: {
            args: Prisma.RegistrationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RegistrationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          update: {
            args: Prisma.RegistrationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          deleteMany: {
            args: Prisma.RegistrationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistrationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RegistrationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistrationPayload>
          }
          aggregate: {
            args: Prisma.RegistrationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistration>
          }
          groupBy: {
            args: Prisma.RegistrationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistrationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistrationCountArgs<ExtArgs>
            result: $Utils.Optional<RegistrationCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      PaymentLog: {
        payload: Prisma.$PaymentLogPayload<ExtArgs>
        fields: Prisma.PaymentLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>
          }
          findFirst: {
            args: Prisma.PaymentLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>
          }
          findMany: {
            args: Prisma.PaymentLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>[]
          }
          create: {
            args: Prisma.PaymentLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>
          }
          createMany: {
            args: Prisma.PaymentLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>
          }
          update: {
            args: Prisma.PaymentLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>
          }
          deleteMany: {
            args: Prisma.PaymentLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>
          }
          aggregate: {
            args: Prisma.PaymentLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentLog>
          }
          groupBy: {
            args: Prisma.PaymentLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentLogCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentLogCountAggregateOutputType> | number
          }
        }
      }
      CheckIn: {
        payload: Prisma.$CheckInPayload<ExtArgs>
        fields: Prisma.CheckInFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckInFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckInFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findFirst: {
            args: Prisma.CheckInFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckInFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          findMany: {
            args: Prisma.CheckInFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>[]
          }
          create: {
            args: Prisma.CheckInCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          createMany: {
            args: Prisma.CheckInCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CheckInDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          update: {
            args: Prisma.CheckInUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          deleteMany: {
            args: Prisma.CheckInDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckInUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CheckInUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInPayload>
          }
          aggregate: {
            args: Prisma.CheckInAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckIn>
          }
          groupBy: {
            args: Prisma.CheckInGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckInGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckInCountArgs<ExtArgs>
            result: $Utils.Optional<CheckInCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    registrations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | UserCountOutputTypeCountRegistrationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
  }


  /**
   * Count Type RegistrationCountOutputType
   */

  export type RegistrationCountOutputType = {
    paymentLogs: number
    checkIns: number
  }

  export type RegistrationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentLogs?: boolean | RegistrationCountOutputTypeCountPaymentLogsArgs
    checkIns?: boolean | RegistrationCountOutputTypeCountCheckInsArgs
  }

  // Custom InputTypes
  /**
   * RegistrationCountOutputType without action
   */
  export type RegistrationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistrationCountOutputType
     */
    select?: RegistrationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegistrationCountOutputType without action
   */
  export type RegistrationCountOutputTypeCountPaymentLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentLogWhereInput
  }

  /**
   * RegistrationCountOutputType without action
   */
  export type RegistrationCountOutputTypeCountCheckInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    verifiedRegistrations: number
    paymentLogs: number
    checkIns: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verifiedRegistrations?: boolean | AdminCountOutputTypeCountVerifiedRegistrationsArgs
    paymentLogs?: boolean | AdminCountOutputTypeCountPaymentLogsArgs
    checkIns?: boolean | AdminCountOutputTypeCountCheckInsArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountVerifiedRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountPaymentLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentLogWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountCheckInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    city: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    city: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    city: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    city?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    city?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    city?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    city: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registrations?: boolean | User$registrationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      registrations: Prisma.$RegistrationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      city: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registrations<T extends User$registrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$registrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.registrations
   */
  export type User$registrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    cursor?: RegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Registration
   */

  export type AggregateRegistration = {
    _count: RegistrationCountAggregateOutputType | null
    _avg: RegistrationAvgAggregateOutputType | null
    _sum: RegistrationSumAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  export type RegistrationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    ticketPrice: Decimal | null
    verifiedBy: number | null
  }

  export type RegistrationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    ticketPrice: Decimal | null
    verifiedBy: number | null
  }

  export type RegistrationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    ticketType: $Enums.TicketType | null
    ticketPrice: Decimal | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentProofPath: string | null
    qrCode: string | null
    qrCodePath: string | null
    registrationDate: Date | null
    paymentVerifiedAt: Date | null
    verifiedBy: number | null
    rejectionReason: string | null
    checkedIn: boolean | null
    checkedInAt: Date | null
  }

  export type RegistrationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    ticketType: $Enums.TicketType | null
    ticketPrice: Decimal | null
    paymentStatus: $Enums.PaymentStatus | null
    paymentProofPath: string | null
    qrCode: string | null
    qrCodePath: string | null
    registrationDate: Date | null
    paymentVerifiedAt: Date | null
    verifiedBy: number | null
    rejectionReason: string | null
    checkedIn: boolean | null
    checkedInAt: Date | null
  }

  export type RegistrationCountAggregateOutputType = {
    id: number
    userId: number
    ticketType: number
    ticketPrice: number
    paymentStatus: number
    paymentProofPath: number
    qrCode: number
    qrCodePath: number
    registrationDate: number
    paymentVerifiedAt: number
    verifiedBy: number
    rejectionReason: number
    checkedIn: number
    checkedInAt: number
    _all: number
  }


  export type RegistrationAvgAggregateInputType = {
    id?: true
    userId?: true
    ticketPrice?: true
    verifiedBy?: true
  }

  export type RegistrationSumAggregateInputType = {
    id?: true
    userId?: true
    ticketPrice?: true
    verifiedBy?: true
  }

  export type RegistrationMinAggregateInputType = {
    id?: true
    userId?: true
    ticketType?: true
    ticketPrice?: true
    paymentStatus?: true
    paymentProofPath?: true
    qrCode?: true
    qrCodePath?: true
    registrationDate?: true
    paymentVerifiedAt?: true
    verifiedBy?: true
    rejectionReason?: true
    checkedIn?: true
    checkedInAt?: true
  }

  export type RegistrationMaxAggregateInputType = {
    id?: true
    userId?: true
    ticketType?: true
    ticketPrice?: true
    paymentStatus?: true
    paymentProofPath?: true
    qrCode?: true
    qrCodePath?: true
    registrationDate?: true
    paymentVerifiedAt?: true
    verifiedBy?: true
    rejectionReason?: true
    checkedIn?: true
    checkedInAt?: true
  }

  export type RegistrationCountAggregateInputType = {
    id?: true
    userId?: true
    ticketType?: true
    ticketPrice?: true
    paymentStatus?: true
    paymentProofPath?: true
    qrCode?: true
    qrCodePath?: true
    registrationDate?: true
    paymentVerifiedAt?: true
    verifiedBy?: true
    rejectionReason?: true
    checkedIn?: true
    checkedInAt?: true
    _all?: true
  }

  export type RegistrationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registration to aggregate.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registrations
    **/
    _count?: true | RegistrationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistrationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistrationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistrationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistrationMaxAggregateInputType
  }

  export type GetRegistrationAggregateType<T extends RegistrationAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistration[P]>
      : GetScalarType<T[P], AggregateRegistration[P]>
  }




  export type RegistrationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithAggregationInput | RegistrationOrderByWithAggregationInput[]
    by: RegistrationScalarFieldEnum[] | RegistrationScalarFieldEnum
    having?: RegistrationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistrationCountAggregateInputType | true
    _avg?: RegistrationAvgAggregateInputType
    _sum?: RegistrationSumAggregateInputType
    _min?: RegistrationMinAggregateInputType
    _max?: RegistrationMaxAggregateInputType
  }

  export type RegistrationGroupByOutputType = {
    id: number
    userId: number
    ticketType: $Enums.TicketType
    ticketPrice: Decimal
    paymentStatus: $Enums.PaymentStatus
    paymentProofPath: string | null
    qrCode: string
    qrCodePath: string | null
    registrationDate: Date
    paymentVerifiedAt: Date | null
    verifiedBy: number | null
    rejectionReason: string | null
    checkedIn: boolean
    checkedInAt: Date | null
    _count: RegistrationCountAggregateOutputType | null
    _avg: RegistrationAvgAggregateOutputType | null
    _sum: RegistrationSumAggregateOutputType | null
    _min: RegistrationMinAggregateOutputType | null
    _max: RegistrationMaxAggregateOutputType | null
  }

  type GetRegistrationGroupByPayload<T extends RegistrationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistrationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistrationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
            : GetScalarType<T[P], RegistrationGroupByOutputType[P]>
        }
      >
    >


  export type RegistrationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    ticketType?: boolean
    ticketPrice?: boolean
    paymentStatus?: boolean
    paymentProofPath?: boolean
    qrCode?: boolean
    qrCodePath?: boolean
    registrationDate?: boolean
    paymentVerifiedAt?: boolean
    verifiedBy?: boolean
    rejectionReason?: boolean
    checkedIn?: boolean
    checkedInAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Registration$verifierArgs<ExtArgs>
    paymentLogs?: boolean | Registration$paymentLogsArgs<ExtArgs>
    checkIns?: boolean | Registration$checkInsArgs<ExtArgs>
    _count?: boolean | RegistrationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registration"]>


  export type RegistrationSelectScalar = {
    id?: boolean
    userId?: boolean
    ticketType?: boolean
    ticketPrice?: boolean
    paymentStatus?: boolean
    paymentProofPath?: boolean
    qrCode?: boolean
    qrCodePath?: boolean
    registrationDate?: boolean
    paymentVerifiedAt?: boolean
    verifiedBy?: boolean
    rejectionReason?: boolean
    checkedIn?: boolean
    checkedInAt?: boolean
  }

  export type RegistrationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    verifier?: boolean | Registration$verifierArgs<ExtArgs>
    paymentLogs?: boolean | Registration$paymentLogsArgs<ExtArgs>
    checkIns?: boolean | Registration$checkInsArgs<ExtArgs>
    _count?: boolean | RegistrationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RegistrationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registration"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      verifier: Prisma.$AdminPayload<ExtArgs> | null
      paymentLogs: Prisma.$PaymentLogPayload<ExtArgs>[]
      checkIns: Prisma.$CheckInPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      ticketType: $Enums.TicketType
      ticketPrice: Prisma.Decimal
      paymentStatus: $Enums.PaymentStatus
      paymentProofPath: string | null
      qrCode: string
      qrCodePath: string | null
      registrationDate: Date
      paymentVerifiedAt: Date | null
      verifiedBy: number | null
      rejectionReason: string | null
      checkedIn: boolean
      checkedInAt: Date | null
    }, ExtArgs["result"]["registration"]>
    composites: {}
  }

  type RegistrationGetPayload<S extends boolean | null | undefined | RegistrationDefaultArgs> = $Result.GetResult<Prisma.$RegistrationPayload, S>

  type RegistrationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RegistrationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RegistrationCountAggregateInputType | true
    }

  export interface RegistrationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registration'], meta: { name: 'Registration' } }
    /**
     * Find zero or one Registration that matches the filter.
     * @param {RegistrationFindUniqueArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistrationFindUniqueArgs>(args: SelectSubset<T, RegistrationFindUniqueArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Registration that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RegistrationFindUniqueOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistrationFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Registration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistrationFindFirstArgs>(args?: SelectSubset<T, RegistrationFindFirstArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Registration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindFirstOrThrowArgs} args - Arguments to find a Registration
     * @example
     * // Get one Registration
     * const registration = await prisma.registration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistrationFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistrationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Registrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registrations
     * const registrations = await prisma.registration.findMany()
     * 
     * // Get first 10 Registrations
     * const registrations = await prisma.registration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registrationWithIdOnly = await prisma.registration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistrationFindManyArgs>(args?: SelectSubset<T, RegistrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Registration.
     * @param {RegistrationCreateArgs} args - Arguments to create a Registration.
     * @example
     * // Create one Registration
     * const Registration = await prisma.registration.create({
     *   data: {
     *     // ... data to create a Registration
     *   }
     * })
     * 
     */
    create<T extends RegistrationCreateArgs>(args: SelectSubset<T, RegistrationCreateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Registrations.
     * @param {RegistrationCreateManyArgs} args - Arguments to create many Registrations.
     * @example
     * // Create many Registrations
     * const registration = await prisma.registration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistrationCreateManyArgs>(args?: SelectSubset<T, RegistrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Registration.
     * @param {RegistrationDeleteArgs} args - Arguments to delete one Registration.
     * @example
     * // Delete one Registration
     * const Registration = await prisma.registration.delete({
     *   where: {
     *     // ... filter to delete one Registration
     *   }
     * })
     * 
     */
    delete<T extends RegistrationDeleteArgs>(args: SelectSubset<T, RegistrationDeleteArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Registration.
     * @param {RegistrationUpdateArgs} args - Arguments to update one Registration.
     * @example
     * // Update one Registration
     * const registration = await prisma.registration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistrationUpdateArgs>(args: SelectSubset<T, RegistrationUpdateArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Registrations.
     * @param {RegistrationDeleteManyArgs} args - Arguments to filter Registrations to delete.
     * @example
     * // Delete a few Registrations
     * const { count } = await prisma.registration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistrationDeleteManyArgs>(args?: SelectSubset<T, RegistrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registrations
     * const registration = await prisma.registration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistrationUpdateManyArgs>(args: SelectSubset<T, RegistrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Registration.
     * @param {RegistrationUpsertArgs} args - Arguments to update or create a Registration.
     * @example
     * // Update or create a Registration
     * const registration = await prisma.registration.upsert({
     *   create: {
     *     // ... data to create a Registration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registration we want to update
     *   }
     * })
     */
    upsert<T extends RegistrationUpsertArgs>(args: SelectSubset<T, RegistrationUpsertArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Registrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationCountArgs} args - Arguments to filter Registrations to count.
     * @example
     * // Count the number of Registrations
     * const count = await prisma.registration.count({
     *   where: {
     *     // ... the filter for the Registrations we want to count
     *   }
     * })
    **/
    count<T extends RegistrationCountArgs>(
      args?: Subset<T, RegistrationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistrationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistrationAggregateArgs>(args: Subset<T, RegistrationAggregateArgs>): Prisma.PrismaPromise<GetRegistrationAggregateType<T>>

    /**
     * Group by Registration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistrationGroupByArgs} args - Group by arguments.
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
      T extends RegistrationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistrationGroupByArgs['orderBy'] }
        : { orderBy?: RegistrationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registration model
   */
  readonly fields: RegistrationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistrationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    verifier<T extends Registration$verifierArgs<ExtArgs> = {}>(args?: Subset<T, Registration$verifierArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    paymentLogs<T extends Registration$paymentLogsArgs<ExtArgs> = {}>(args?: Subset<T, Registration$paymentLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findMany"> | Null>
    checkIns<T extends Registration$checkInsArgs<ExtArgs> = {}>(args?: Subset<T, Registration$checkInsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Registration model
   */ 
  interface RegistrationFieldRefs {
    readonly id: FieldRef<"Registration", 'Int'>
    readonly userId: FieldRef<"Registration", 'Int'>
    readonly ticketType: FieldRef<"Registration", 'TicketType'>
    readonly ticketPrice: FieldRef<"Registration", 'Decimal'>
    readonly paymentStatus: FieldRef<"Registration", 'PaymentStatus'>
    readonly paymentProofPath: FieldRef<"Registration", 'String'>
    readonly qrCode: FieldRef<"Registration", 'String'>
    readonly qrCodePath: FieldRef<"Registration", 'String'>
    readonly registrationDate: FieldRef<"Registration", 'DateTime'>
    readonly paymentVerifiedAt: FieldRef<"Registration", 'DateTime'>
    readonly verifiedBy: FieldRef<"Registration", 'Int'>
    readonly rejectionReason: FieldRef<"Registration", 'String'>
    readonly checkedIn: FieldRef<"Registration", 'Boolean'>
    readonly checkedInAt: FieldRef<"Registration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Registration findUnique
   */
  export type RegistrationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findUniqueOrThrow
   */
  export type RegistrationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration findFirst
   */
  export type RegistrationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findFirstOrThrow
   */
  export type RegistrationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registration to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registrations.
     */
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration findMany
   */
  export type RegistrationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter, which Registrations to fetch.
     */
    where?: RegistrationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registrations to fetch.
     */
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registrations.
     */
    cursor?: RegistrationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registrations.
     */
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Registration create
   */
  export type RegistrationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to create a Registration.
     */
    data: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
  }

  /**
   * Registration createMany
   */
  export type RegistrationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registrations.
     */
    data: RegistrationCreateManyInput | RegistrationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registration update
   */
  export type RegistrationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The data needed to update a Registration.
     */
    data: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
    /**
     * Choose, which Registration to update.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration updateMany
   */
  export type RegistrationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registrations.
     */
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyInput>
    /**
     * Filter which Registrations to update
     */
    where?: RegistrationWhereInput
  }

  /**
   * Registration upsert
   */
  export type RegistrationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * The filter to search for the Registration to update in case it exists.
     */
    where: RegistrationWhereUniqueInput
    /**
     * In case the Registration found by the `where` argument doesn't exist, create a new Registration with this data.
     */
    create: XOR<RegistrationCreateInput, RegistrationUncheckedCreateInput>
    /**
     * In case the Registration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistrationUpdateInput, RegistrationUncheckedUpdateInput>
  }

  /**
   * Registration delete
   */
  export type RegistrationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    /**
     * Filter which Registration to delete.
     */
    where: RegistrationWhereUniqueInput
  }

  /**
   * Registration deleteMany
   */
  export type RegistrationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registrations to delete
     */
    where?: RegistrationWhereInput
  }

  /**
   * Registration.verifier
   */
  export type Registration$verifierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Registration.paymentLogs
   */
  export type Registration$paymentLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    where?: PaymentLogWhereInput
    orderBy?: PaymentLogOrderByWithRelationInput | PaymentLogOrderByWithRelationInput[]
    cursor?: PaymentLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentLogScalarFieldEnum | PaymentLogScalarFieldEnum[]
  }

  /**
   * Registration.checkIns
   */
  export type Registration$checkInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    cursor?: CheckInWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * Registration without action
   */
  export type RegistrationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.AdminRole | null
    createdAt: Date | null
    lastLogin: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.AdminRole | null
    createdAt: Date | null
    lastLogin: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    lastLogin: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    lastLogin?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    lastLogin?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    lastLogin?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.AdminRole
    createdAt: Date
    lastLogin: Date | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    verifiedRegistrations?: boolean | Admin$verifiedRegistrationsArgs<ExtArgs>
    paymentLogs?: boolean | Admin$paymentLogsArgs<ExtArgs>
    checkIns?: boolean | Admin$checkInsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>


  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    lastLogin?: boolean
  }

  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    verifiedRegistrations?: boolean | Admin$verifiedRegistrationsArgs<ExtArgs>
    paymentLogs?: boolean | Admin$paymentLogsArgs<ExtArgs>
    checkIns?: boolean | Admin$checkInsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      verifiedRegistrations: Prisma.$RegistrationPayload<ExtArgs>[]
      paymentLogs: Prisma.$PaymentLogPayload<ExtArgs>[]
      checkIns: Prisma.$CheckInPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      passwordHash: string
      role: $Enums.AdminRole
      createdAt: Date
      lastLogin: Date | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    verifiedRegistrations<T extends Admin$verifiedRegistrationsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$verifiedRegistrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findMany"> | Null>
    paymentLogs<T extends Admin$paymentLogsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$paymentLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findMany"> | Null>
    checkIns<T extends Admin$checkInsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$checkInsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly passwordHash: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'AdminRole'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly lastLogin: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin.verifiedRegistrations
   */
  export type Admin$verifiedRegistrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registration
     */
    select?: RegistrationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistrationInclude<ExtArgs> | null
    where?: RegistrationWhereInput
    orderBy?: RegistrationOrderByWithRelationInput | RegistrationOrderByWithRelationInput[]
    cursor?: RegistrationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistrationScalarFieldEnum | RegistrationScalarFieldEnum[]
  }

  /**
   * Admin.paymentLogs
   */
  export type Admin$paymentLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    where?: PaymentLogWhereInput
    orderBy?: PaymentLogOrderByWithRelationInput | PaymentLogOrderByWithRelationInput[]
    cursor?: PaymentLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentLogScalarFieldEnum | PaymentLogScalarFieldEnum[]
  }

  /**
   * Admin.checkIns
   */
  export type Admin$checkInsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    cursor?: CheckInWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model PaymentLog
   */

  export type AggregatePaymentLog = {
    _count: PaymentLogCountAggregateOutputType | null
    _avg: PaymentLogAvgAggregateOutputType | null
    _sum: PaymentLogSumAggregateOutputType | null
    _min: PaymentLogMinAggregateOutputType | null
    _max: PaymentLogMaxAggregateOutputType | null
  }

  export type PaymentLogAvgAggregateOutputType = {
    id: number | null
    registrationId: number | null
    adminId: number | null
  }

  export type PaymentLogSumAggregateOutputType = {
    id: number | null
    registrationId: number | null
    adminId: number | null
  }

  export type PaymentLogMinAggregateOutputType = {
    id: number | null
    registrationId: number | null
    adminId: number | null
    action: $Enums.PaymentAction | null
    reason: string | null
    timestamp: Date | null
  }

  export type PaymentLogMaxAggregateOutputType = {
    id: number | null
    registrationId: number | null
    adminId: number | null
    action: $Enums.PaymentAction | null
    reason: string | null
    timestamp: Date | null
  }

  export type PaymentLogCountAggregateOutputType = {
    id: number
    registrationId: number
    adminId: number
    action: number
    reason: number
    timestamp: number
    _all: number
  }


  export type PaymentLogAvgAggregateInputType = {
    id?: true
    registrationId?: true
    adminId?: true
  }

  export type PaymentLogSumAggregateInputType = {
    id?: true
    registrationId?: true
    adminId?: true
  }

  export type PaymentLogMinAggregateInputType = {
    id?: true
    registrationId?: true
    adminId?: true
    action?: true
    reason?: true
    timestamp?: true
  }

  export type PaymentLogMaxAggregateInputType = {
    id?: true
    registrationId?: true
    adminId?: true
    action?: true
    reason?: true
    timestamp?: true
  }

  export type PaymentLogCountAggregateInputType = {
    id?: true
    registrationId?: true
    adminId?: true
    action?: true
    reason?: true
    timestamp?: true
    _all?: true
  }

  export type PaymentLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentLog to aggregate.
     */
    where?: PaymentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLogs to fetch.
     */
    orderBy?: PaymentLogOrderByWithRelationInput | PaymentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentLogs
    **/
    _count?: true | PaymentLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentLogMaxAggregateInputType
  }

  export type GetPaymentLogAggregateType<T extends PaymentLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentLog[P]>
      : GetScalarType<T[P], AggregatePaymentLog[P]>
  }




  export type PaymentLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentLogWhereInput
    orderBy?: PaymentLogOrderByWithAggregationInput | PaymentLogOrderByWithAggregationInput[]
    by: PaymentLogScalarFieldEnum[] | PaymentLogScalarFieldEnum
    having?: PaymentLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentLogCountAggregateInputType | true
    _avg?: PaymentLogAvgAggregateInputType
    _sum?: PaymentLogSumAggregateInputType
    _min?: PaymentLogMinAggregateInputType
    _max?: PaymentLogMaxAggregateInputType
  }

  export type PaymentLogGroupByOutputType = {
    id: number
    registrationId: number
    adminId: number
    action: $Enums.PaymentAction
    reason: string | null
    timestamp: Date
    _count: PaymentLogCountAggregateOutputType | null
    _avg: PaymentLogAvgAggregateOutputType | null
    _sum: PaymentLogSumAggregateOutputType | null
    _min: PaymentLogMinAggregateOutputType | null
    _max: PaymentLogMaxAggregateOutputType | null
  }

  type GetPaymentLogGroupByPayload<T extends PaymentLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentLogGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentLogGroupByOutputType[P]>
        }
      >
    >


  export type PaymentLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationId?: boolean
    adminId?: boolean
    action?: boolean
    reason?: boolean
    timestamp?: boolean
    registration?: boolean | RegistrationDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentLog"]>


  export type PaymentLogSelectScalar = {
    id?: boolean
    registrationId?: boolean
    adminId?: boolean
    action?: boolean
    reason?: boolean
    timestamp?: boolean
  }

  export type PaymentLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registration?: boolean | RegistrationDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $PaymentLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentLog"
    objects: {
      registration: Prisma.$RegistrationPayload<ExtArgs>
      admin: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      registrationId: number
      adminId: number
      action: $Enums.PaymentAction
      reason: string | null
      timestamp: Date
    }, ExtArgs["result"]["paymentLog"]>
    composites: {}
  }

  type PaymentLogGetPayload<S extends boolean | null | undefined | PaymentLogDefaultArgs> = $Result.GetResult<Prisma.$PaymentLogPayload, S>

  type PaymentLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentLogCountAggregateInputType | true
    }

  export interface PaymentLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentLog'], meta: { name: 'PaymentLog' } }
    /**
     * Find zero or one PaymentLog that matches the filter.
     * @param {PaymentLogFindUniqueArgs} args - Arguments to find a PaymentLog
     * @example
     * // Get one PaymentLog
     * const paymentLog = await prisma.paymentLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentLogFindUniqueArgs>(args: SelectSubset<T, PaymentLogFindUniqueArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentLogFindUniqueOrThrowArgs} args - Arguments to find a PaymentLog
     * @example
     * // Get one PaymentLog
     * const paymentLog = await prisma.paymentLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogFindFirstArgs} args - Arguments to find a PaymentLog
     * @example
     * // Get one PaymentLog
     * const paymentLog = await prisma.paymentLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentLogFindFirstArgs>(args?: SelectSubset<T, PaymentLogFindFirstArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogFindFirstOrThrowArgs} args - Arguments to find a PaymentLog
     * @example
     * // Get one PaymentLog
     * const paymentLog = await prisma.paymentLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentLogs
     * const paymentLogs = await prisma.paymentLog.findMany()
     * 
     * // Get first 10 PaymentLogs
     * const paymentLogs = await prisma.paymentLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentLogWithIdOnly = await prisma.paymentLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentLogFindManyArgs>(args?: SelectSubset<T, PaymentLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentLog.
     * @param {PaymentLogCreateArgs} args - Arguments to create a PaymentLog.
     * @example
     * // Create one PaymentLog
     * const PaymentLog = await prisma.paymentLog.create({
     *   data: {
     *     // ... data to create a PaymentLog
     *   }
     * })
     * 
     */
    create<T extends PaymentLogCreateArgs>(args: SelectSubset<T, PaymentLogCreateArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentLogs.
     * @param {PaymentLogCreateManyArgs} args - Arguments to create many PaymentLogs.
     * @example
     * // Create many PaymentLogs
     * const paymentLog = await prisma.paymentLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentLogCreateManyArgs>(args?: SelectSubset<T, PaymentLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentLog.
     * @param {PaymentLogDeleteArgs} args - Arguments to delete one PaymentLog.
     * @example
     * // Delete one PaymentLog
     * const PaymentLog = await prisma.paymentLog.delete({
     *   where: {
     *     // ... filter to delete one PaymentLog
     *   }
     * })
     * 
     */
    delete<T extends PaymentLogDeleteArgs>(args: SelectSubset<T, PaymentLogDeleteArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentLog.
     * @param {PaymentLogUpdateArgs} args - Arguments to update one PaymentLog.
     * @example
     * // Update one PaymentLog
     * const paymentLog = await prisma.paymentLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentLogUpdateArgs>(args: SelectSubset<T, PaymentLogUpdateArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentLogs.
     * @param {PaymentLogDeleteManyArgs} args - Arguments to filter PaymentLogs to delete.
     * @example
     * // Delete a few PaymentLogs
     * const { count } = await prisma.paymentLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentLogDeleteManyArgs>(args?: SelectSubset<T, PaymentLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentLogs
     * const paymentLog = await prisma.paymentLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentLogUpdateManyArgs>(args: SelectSubset<T, PaymentLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentLog.
     * @param {PaymentLogUpsertArgs} args - Arguments to update or create a PaymentLog.
     * @example
     * // Update or create a PaymentLog
     * const paymentLog = await prisma.paymentLog.upsert({
     *   create: {
     *     // ... data to create a PaymentLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentLog we want to update
     *   }
     * })
     */
    upsert<T extends PaymentLogUpsertArgs>(args: SelectSubset<T, PaymentLogUpsertArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogCountArgs} args - Arguments to filter PaymentLogs to count.
     * @example
     * // Count the number of PaymentLogs
     * const count = await prisma.paymentLog.count({
     *   where: {
     *     // ... the filter for the PaymentLogs we want to count
     *   }
     * })
    **/
    count<T extends PaymentLogCountArgs>(
      args?: Subset<T, PaymentLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentLogAggregateArgs>(args: Subset<T, PaymentLogAggregateArgs>): Prisma.PrismaPromise<GetPaymentLogAggregateType<T>>

    /**
     * Group by PaymentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogGroupByArgs} args - Group by arguments.
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
      T extends PaymentLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentLogGroupByArgs['orderBy'] }
        : { orderBy?: PaymentLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentLog model
   */
  readonly fields: PaymentLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registration<T extends RegistrationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegistrationDefaultArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PaymentLog model
   */ 
  interface PaymentLogFieldRefs {
    readonly id: FieldRef<"PaymentLog", 'Int'>
    readonly registrationId: FieldRef<"PaymentLog", 'Int'>
    readonly adminId: FieldRef<"PaymentLog", 'Int'>
    readonly action: FieldRef<"PaymentLog", 'PaymentAction'>
    readonly reason: FieldRef<"PaymentLog", 'String'>
    readonly timestamp: FieldRef<"PaymentLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentLog findUnique
   */
  export type PaymentLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLog to fetch.
     */
    where: PaymentLogWhereUniqueInput
  }

  /**
   * PaymentLog findUniqueOrThrow
   */
  export type PaymentLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLog to fetch.
     */
    where: PaymentLogWhereUniqueInput
  }

  /**
   * PaymentLog findFirst
   */
  export type PaymentLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLog to fetch.
     */
    where?: PaymentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLogs to fetch.
     */
    orderBy?: PaymentLogOrderByWithRelationInput | PaymentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentLogs.
     */
    cursor?: PaymentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentLogs.
     */
    distinct?: PaymentLogScalarFieldEnum | PaymentLogScalarFieldEnum[]
  }

  /**
   * PaymentLog findFirstOrThrow
   */
  export type PaymentLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLog to fetch.
     */
    where?: PaymentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLogs to fetch.
     */
    orderBy?: PaymentLogOrderByWithRelationInput | PaymentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentLogs.
     */
    cursor?: PaymentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentLogs.
     */
    distinct?: PaymentLogScalarFieldEnum | PaymentLogScalarFieldEnum[]
  }

  /**
   * PaymentLog findMany
   */
  export type PaymentLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLogs to fetch.
     */
    where?: PaymentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLogs to fetch.
     */
    orderBy?: PaymentLogOrderByWithRelationInput | PaymentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentLogs.
     */
    cursor?: PaymentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLogs.
     */
    skip?: number
    distinct?: PaymentLogScalarFieldEnum | PaymentLogScalarFieldEnum[]
  }

  /**
   * PaymentLog create
   */
  export type PaymentLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentLog.
     */
    data: XOR<PaymentLogCreateInput, PaymentLogUncheckedCreateInput>
  }

  /**
   * PaymentLog createMany
   */
  export type PaymentLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentLogs.
     */
    data: PaymentLogCreateManyInput | PaymentLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentLog update
   */
  export type PaymentLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentLog.
     */
    data: XOR<PaymentLogUpdateInput, PaymentLogUncheckedUpdateInput>
    /**
     * Choose, which PaymentLog to update.
     */
    where: PaymentLogWhereUniqueInput
  }

  /**
   * PaymentLog updateMany
   */
  export type PaymentLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentLogs.
     */
    data: XOR<PaymentLogUpdateManyMutationInput, PaymentLogUncheckedUpdateManyInput>
    /**
     * Filter which PaymentLogs to update
     */
    where?: PaymentLogWhereInput
  }

  /**
   * PaymentLog upsert
   */
  export type PaymentLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentLog to update in case it exists.
     */
    where: PaymentLogWhereUniqueInput
    /**
     * In case the PaymentLog found by the `where` argument doesn't exist, create a new PaymentLog with this data.
     */
    create: XOR<PaymentLogCreateInput, PaymentLogUncheckedCreateInput>
    /**
     * In case the PaymentLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentLogUpdateInput, PaymentLogUncheckedUpdateInput>
  }

  /**
   * PaymentLog delete
   */
  export type PaymentLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * Filter which PaymentLog to delete.
     */
    where: PaymentLogWhereUniqueInput
  }

  /**
   * PaymentLog deleteMany
   */
  export type PaymentLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentLogs to delete
     */
    where?: PaymentLogWhereInput
  }

  /**
   * PaymentLog without action
   */
  export type PaymentLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
  }


  /**
   * Model CheckIn
   */

  export type AggregateCheckIn = {
    _count: CheckInCountAggregateOutputType | null
    _avg: CheckInAvgAggregateOutputType | null
    _sum: CheckInSumAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  export type CheckInAvgAggregateOutputType = {
    id: number | null
    registrationId: number | null
    adminId: number | null
  }

  export type CheckInSumAggregateOutputType = {
    id: number | null
    registrationId: number | null
    adminId: number | null
  }

  export type CheckInMinAggregateOutputType = {
    id: number | null
    registrationId: number | null
    adminId: number | null
    checkInTime: Date | null
    checkInMethod: $Enums.CheckInMethod | null
    notes: string | null
  }

  export type CheckInMaxAggregateOutputType = {
    id: number | null
    registrationId: number | null
    adminId: number | null
    checkInTime: Date | null
    checkInMethod: $Enums.CheckInMethod | null
    notes: string | null
  }

  export type CheckInCountAggregateOutputType = {
    id: number
    registrationId: number
    adminId: number
    checkInTime: number
    checkInMethod: number
    notes: number
    _all: number
  }


  export type CheckInAvgAggregateInputType = {
    id?: true
    registrationId?: true
    adminId?: true
  }

  export type CheckInSumAggregateInputType = {
    id?: true
    registrationId?: true
    adminId?: true
  }

  export type CheckInMinAggregateInputType = {
    id?: true
    registrationId?: true
    adminId?: true
    checkInTime?: true
    checkInMethod?: true
    notes?: true
  }

  export type CheckInMaxAggregateInputType = {
    id?: true
    registrationId?: true
    adminId?: true
    checkInTime?: true
    checkInMethod?: true
    notes?: true
  }

  export type CheckInCountAggregateInputType = {
    id?: true
    registrationId?: true
    adminId?: true
    checkInTime?: true
    checkInMethod?: true
    notes?: true
    _all?: true
  }

  export type CheckInAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIn to aggregate.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckIns
    **/
    _count?: true | CheckInCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CheckInAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CheckInSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckInMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckInMaxAggregateInputType
  }

  export type GetCheckInAggregateType<T extends CheckInAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckIn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckIn[P]>
      : GetScalarType<T[P], AggregateCheckIn[P]>
  }




  export type CheckInGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInWhereInput
    orderBy?: CheckInOrderByWithAggregationInput | CheckInOrderByWithAggregationInput[]
    by: CheckInScalarFieldEnum[] | CheckInScalarFieldEnum
    having?: CheckInScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckInCountAggregateInputType | true
    _avg?: CheckInAvgAggregateInputType
    _sum?: CheckInSumAggregateInputType
    _min?: CheckInMinAggregateInputType
    _max?: CheckInMaxAggregateInputType
  }

  export type CheckInGroupByOutputType = {
    id: number
    registrationId: number
    adminId: number
    checkInTime: Date
    checkInMethod: $Enums.CheckInMethod
    notes: string | null
    _count: CheckInCountAggregateOutputType | null
    _avg: CheckInAvgAggregateOutputType | null
    _sum: CheckInSumAggregateOutputType | null
    _min: CheckInMinAggregateOutputType | null
    _max: CheckInMaxAggregateOutputType | null
  }

  type GetCheckInGroupByPayload<T extends CheckInGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckInGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckInGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckInGroupByOutputType[P]>
            : GetScalarType<T[P], CheckInGroupByOutputType[P]>
        }
      >
    >


  export type CheckInSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationId?: boolean
    adminId?: boolean
    checkInTime?: boolean
    checkInMethod?: boolean
    notes?: boolean
    registration?: boolean | RegistrationDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkIn"]>


  export type CheckInSelectScalar = {
    id?: boolean
    registrationId?: boolean
    adminId?: boolean
    checkInTime?: boolean
    checkInMethod?: boolean
    notes?: boolean
  }

  export type CheckInInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registration?: boolean | RegistrationDefaultArgs<ExtArgs>
    admin?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $CheckInPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckIn"
    objects: {
      registration: Prisma.$RegistrationPayload<ExtArgs>
      admin: Prisma.$AdminPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      registrationId: number
      adminId: number
      checkInTime: Date
      checkInMethod: $Enums.CheckInMethod
      notes: string | null
    }, ExtArgs["result"]["checkIn"]>
    composites: {}
  }

  type CheckInGetPayload<S extends boolean | null | undefined | CheckInDefaultArgs> = $Result.GetResult<Prisma.$CheckInPayload, S>

  type CheckInCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CheckInFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CheckInCountAggregateInputType | true
    }

  export interface CheckInDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckIn'], meta: { name: 'CheckIn' } }
    /**
     * Find zero or one CheckIn that matches the filter.
     * @param {CheckInFindUniqueArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckInFindUniqueArgs>(args: SelectSubset<T, CheckInFindUniqueArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CheckIn that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CheckInFindUniqueOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckInFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckInFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CheckIn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckInFindFirstArgs>(args?: SelectSubset<T, CheckInFindFirstArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CheckIn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindFirstOrThrowArgs} args - Arguments to find a CheckIn
     * @example
     * // Get one CheckIn
     * const checkIn = await prisma.checkIn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckInFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckInFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CheckIns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckIns
     * const checkIns = await prisma.checkIn.findMany()
     * 
     * // Get first 10 CheckIns
     * const checkIns = await prisma.checkIn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkInWithIdOnly = await prisma.checkIn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckInFindManyArgs>(args?: SelectSubset<T, CheckInFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CheckIn.
     * @param {CheckInCreateArgs} args - Arguments to create a CheckIn.
     * @example
     * // Create one CheckIn
     * const CheckIn = await prisma.checkIn.create({
     *   data: {
     *     // ... data to create a CheckIn
     *   }
     * })
     * 
     */
    create<T extends CheckInCreateArgs>(args: SelectSubset<T, CheckInCreateArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CheckIns.
     * @param {CheckInCreateManyArgs} args - Arguments to create many CheckIns.
     * @example
     * // Create many CheckIns
     * const checkIn = await prisma.checkIn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckInCreateManyArgs>(args?: SelectSubset<T, CheckInCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CheckIn.
     * @param {CheckInDeleteArgs} args - Arguments to delete one CheckIn.
     * @example
     * // Delete one CheckIn
     * const CheckIn = await prisma.checkIn.delete({
     *   where: {
     *     // ... filter to delete one CheckIn
     *   }
     * })
     * 
     */
    delete<T extends CheckInDeleteArgs>(args: SelectSubset<T, CheckInDeleteArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CheckIn.
     * @param {CheckInUpdateArgs} args - Arguments to update one CheckIn.
     * @example
     * // Update one CheckIn
     * const checkIn = await prisma.checkIn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckInUpdateArgs>(args: SelectSubset<T, CheckInUpdateArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CheckIns.
     * @param {CheckInDeleteManyArgs} args - Arguments to filter CheckIns to delete.
     * @example
     * // Delete a few CheckIns
     * const { count } = await prisma.checkIn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckInDeleteManyArgs>(args?: SelectSubset<T, CheckInDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckIns
     * const checkIn = await prisma.checkIn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckInUpdateManyArgs>(args: SelectSubset<T, CheckInUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CheckIn.
     * @param {CheckInUpsertArgs} args - Arguments to update or create a CheckIn.
     * @example
     * // Update or create a CheckIn
     * const checkIn = await prisma.checkIn.upsert({
     *   create: {
     *     // ... data to create a CheckIn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckIn we want to update
     *   }
     * })
     */
    upsert<T extends CheckInUpsertArgs>(args: SelectSubset<T, CheckInUpsertArgs<ExtArgs>>): Prisma__CheckInClient<$Result.GetResult<Prisma.$CheckInPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CheckIns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInCountArgs} args - Arguments to filter CheckIns to count.
     * @example
     * // Count the number of CheckIns
     * const count = await prisma.checkIn.count({
     *   where: {
     *     // ... the filter for the CheckIns we want to count
     *   }
     * })
    **/
    count<T extends CheckInCountArgs>(
      args?: Subset<T, CheckInCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckInCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckInAggregateArgs>(args: Subset<T, CheckInAggregateArgs>): Prisma.PrismaPromise<GetCheckInAggregateType<T>>

    /**
     * Group by CheckIn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInGroupByArgs} args - Group by arguments.
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
      T extends CheckInGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckInGroupByArgs['orderBy'] }
        : { orderBy?: CheckInGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckInGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckInGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckIn model
   */
  readonly fields: CheckInFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckIn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckInClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    registration<T extends RegistrationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegistrationDefaultArgs<ExtArgs>>): Prisma__RegistrationClient<$Result.GetResult<Prisma.$RegistrationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CheckIn model
   */ 
  interface CheckInFieldRefs {
    readonly id: FieldRef<"CheckIn", 'Int'>
    readonly registrationId: FieldRef<"CheckIn", 'Int'>
    readonly adminId: FieldRef<"CheckIn", 'Int'>
    readonly checkInTime: FieldRef<"CheckIn", 'DateTime'>
    readonly checkInMethod: FieldRef<"CheckIn", 'CheckInMethod'>
    readonly notes: FieldRef<"CheckIn", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CheckIn findUnique
   */
  export type CheckInFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findUniqueOrThrow
   */
  export type CheckInFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn findFirst
   */
  export type CheckInFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findFirstOrThrow
   */
  export type CheckInFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIn to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckIns.
     */
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn findMany
   */
  export type CheckInFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter, which CheckIns to fetch.
     */
    where?: CheckInWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckIns to fetch.
     */
    orderBy?: CheckInOrderByWithRelationInput | CheckInOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckIns.
     */
    cursor?: CheckInWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckIns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckIns.
     */
    skip?: number
    distinct?: CheckInScalarFieldEnum | CheckInScalarFieldEnum[]
  }

  /**
   * CheckIn create
   */
  export type CheckInCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckIn.
     */
    data: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
  }

  /**
   * CheckIn createMany
   */
  export type CheckInCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckIns.
     */
    data: CheckInCreateManyInput | CheckInCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CheckIn update
   */
  export type CheckInUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckIn.
     */
    data: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
    /**
     * Choose, which CheckIn to update.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn updateMany
   */
  export type CheckInUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckIns.
     */
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyInput>
    /**
     * Filter which CheckIns to update
     */
    where?: CheckInWhereInput
  }

  /**
   * CheckIn upsert
   */
  export type CheckInUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckIn to update in case it exists.
     */
    where: CheckInWhereUniqueInput
    /**
     * In case the CheckIn found by the `where` argument doesn't exist, create a new CheckIn with this data.
     */
    create: XOR<CheckInCreateInput, CheckInUncheckedCreateInput>
    /**
     * In case the CheckIn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckInUpdateInput, CheckInUncheckedUpdateInput>
  }

  /**
   * CheckIn delete
   */
  export type CheckInDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
    /**
     * Filter which CheckIn to delete.
     */
    where: CheckInWhereUniqueInput
  }

  /**
   * CheckIn deleteMany
   */
  export type CheckInDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckIns to delete
     */
    where?: CheckInWhereInput
  }

  /**
   * CheckIn without action
   */
  export type CheckInDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckIn
     */
    select?: CheckInSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    city: 'city',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RegistrationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    ticketType: 'ticketType',
    ticketPrice: 'ticketPrice',
    paymentStatus: 'paymentStatus',
    paymentProofPath: 'paymentProofPath',
    qrCode: 'qrCode',
    qrCodePath: 'qrCodePath',
    registrationDate: 'registrationDate',
    paymentVerifiedAt: 'paymentVerifiedAt',
    verifiedBy: 'verifiedBy',
    rejectionReason: 'rejectionReason',
    checkedIn: 'checkedIn',
    checkedInAt: 'checkedInAt'
  };

  export type RegistrationScalarFieldEnum = (typeof RegistrationScalarFieldEnum)[keyof typeof RegistrationScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    lastLogin: 'lastLogin'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const PaymentLogScalarFieldEnum: {
    id: 'id',
    registrationId: 'registrationId',
    adminId: 'adminId',
    action: 'action',
    reason: 'reason',
    timestamp: 'timestamp'
  };

  export type PaymentLogScalarFieldEnum = (typeof PaymentLogScalarFieldEnum)[keyof typeof PaymentLogScalarFieldEnum]


  export const CheckInScalarFieldEnum: {
    id: 'id',
    registrationId: 'registrationId',
    adminId: 'adminId',
    checkInTime: 'checkInTime',
    checkInMethod: 'checkInMethod',
    notes: 'notes'
  };

  export type CheckInScalarFieldEnum = (typeof CheckInScalarFieldEnum)[keyof typeof CheckInScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TicketType'
   */
  export type EnumTicketTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketType'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AdminRole'
   */
  export type EnumAdminRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminRole'>
    


  /**
   * Reference to a field of type 'PaymentAction'
   */
  export type EnumPaymentActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentAction'>
    


  /**
   * Reference to a field of type 'CheckInMethod'
   */
  export type EnumCheckInMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckInMethod'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    city?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    registrations?: RegistrationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    registrations?: RegistrationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    city?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    registrations?: RegistrationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RegistrationWhereInput = {
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    id?: IntFilter<"Registration"> | number
    userId?: IntFilter<"Registration"> | number
    ticketType?: EnumTicketTypeFilter<"Registration"> | $Enums.TicketType
    ticketPrice?: DecimalFilter<"Registration"> | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFilter<"Registration"> | $Enums.PaymentStatus
    paymentProofPath?: StringNullableFilter<"Registration"> | string | null
    qrCode?: StringFilter<"Registration"> | string
    qrCodePath?: StringNullableFilter<"Registration"> | string | null
    registrationDate?: DateTimeFilter<"Registration"> | Date | string
    paymentVerifiedAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
    verifiedBy?: IntNullableFilter<"Registration"> | number | null
    rejectionReason?: StringNullableFilter<"Registration"> | string | null
    checkedIn?: BoolFilter<"Registration"> | boolean
    checkedInAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    verifier?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    paymentLogs?: PaymentLogListRelationFilter
    checkIns?: CheckInListRelationFilter
  }

  export type RegistrationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    ticketType?: SortOrder
    ticketPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentProofPath?: SortOrderInput | SortOrder
    qrCode?: SortOrder
    qrCodePath?: SortOrderInput | SortOrder
    registrationDate?: SortOrder
    paymentVerifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    checkedIn?: SortOrder
    checkedInAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    verifier?: AdminOrderByWithRelationInput
    paymentLogs?: PaymentLogOrderByRelationAggregateInput
    checkIns?: CheckInOrderByRelationAggregateInput
  }

  export type RegistrationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    qrCode?: string
    AND?: RegistrationWhereInput | RegistrationWhereInput[]
    OR?: RegistrationWhereInput[]
    NOT?: RegistrationWhereInput | RegistrationWhereInput[]
    userId?: IntFilter<"Registration"> | number
    ticketType?: EnumTicketTypeFilter<"Registration"> | $Enums.TicketType
    ticketPrice?: DecimalFilter<"Registration"> | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFilter<"Registration"> | $Enums.PaymentStatus
    paymentProofPath?: StringNullableFilter<"Registration"> | string | null
    qrCodePath?: StringNullableFilter<"Registration"> | string | null
    registrationDate?: DateTimeFilter<"Registration"> | Date | string
    paymentVerifiedAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
    verifiedBy?: IntNullableFilter<"Registration"> | number | null
    rejectionReason?: StringNullableFilter<"Registration"> | string | null
    checkedIn?: BoolFilter<"Registration"> | boolean
    checkedInAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    verifier?: XOR<AdminNullableRelationFilter, AdminWhereInput> | null
    paymentLogs?: PaymentLogListRelationFilter
    checkIns?: CheckInListRelationFilter
  }, "id" | "qrCode">

  export type RegistrationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    ticketType?: SortOrder
    ticketPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentProofPath?: SortOrderInput | SortOrder
    qrCode?: SortOrder
    qrCodePath?: SortOrderInput | SortOrder
    registrationDate?: SortOrder
    paymentVerifiedAt?: SortOrderInput | SortOrder
    verifiedBy?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    checkedIn?: SortOrder
    checkedInAt?: SortOrderInput | SortOrder
    _count?: RegistrationCountOrderByAggregateInput
    _avg?: RegistrationAvgOrderByAggregateInput
    _max?: RegistrationMaxOrderByAggregateInput
    _min?: RegistrationMinOrderByAggregateInput
    _sum?: RegistrationSumOrderByAggregateInput
  }

  export type RegistrationScalarWhereWithAggregatesInput = {
    AND?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    OR?: RegistrationScalarWhereWithAggregatesInput[]
    NOT?: RegistrationScalarWhereWithAggregatesInput | RegistrationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Registration"> | number
    userId?: IntWithAggregatesFilter<"Registration"> | number
    ticketType?: EnumTicketTypeWithAggregatesFilter<"Registration"> | $Enums.TicketType
    ticketPrice?: DecimalWithAggregatesFilter<"Registration"> | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Registration"> | $Enums.PaymentStatus
    paymentProofPath?: StringNullableWithAggregatesFilter<"Registration"> | string | null
    qrCode?: StringWithAggregatesFilter<"Registration"> | string
    qrCodePath?: StringNullableWithAggregatesFilter<"Registration"> | string | null
    registrationDate?: DateTimeWithAggregatesFilter<"Registration"> | Date | string
    paymentVerifiedAt?: DateTimeNullableWithAggregatesFilter<"Registration"> | Date | string | null
    verifiedBy?: IntNullableWithAggregatesFilter<"Registration"> | number | null
    rejectionReason?: StringNullableWithAggregatesFilter<"Registration"> | string | null
    checkedIn?: BoolWithAggregatesFilter<"Registration"> | boolean
    checkedInAt?: DateTimeNullableWithAggregatesFilter<"Registration"> | Date | string | null
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    passwordHash?: StringFilter<"Admin"> | string
    role?: EnumAdminRoleFilter<"Admin"> | $Enums.AdminRole
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    lastLogin?: DateTimeNullableFilter<"Admin"> | Date | string | null
    verifiedRegistrations?: RegistrationListRelationFilter
    paymentLogs?: PaymentLogListRelationFilter
    checkIns?: CheckInListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    verifiedRegistrations?: RegistrationOrderByRelationAggregateInput
    paymentLogs?: PaymentLogOrderByRelationAggregateInput
    checkIns?: CheckInOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    passwordHash?: StringFilter<"Admin"> | string
    role?: EnumAdminRoleFilter<"Admin"> | $Enums.AdminRole
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    lastLogin?: DateTimeNullableFilter<"Admin"> | Date | string | null
    verifiedRegistrations?: RegistrationListRelationFilter
    paymentLogs?: PaymentLogListRelationFilter
    checkIns?: CheckInListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    passwordHash?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumAdminRoleWithAggregatesFilter<"Admin"> | $Enums.AdminRole
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
  }

  export type PaymentLogWhereInput = {
    AND?: PaymentLogWhereInput | PaymentLogWhereInput[]
    OR?: PaymentLogWhereInput[]
    NOT?: PaymentLogWhereInput | PaymentLogWhereInput[]
    id?: IntFilter<"PaymentLog"> | number
    registrationId?: IntFilter<"PaymentLog"> | number
    adminId?: IntFilter<"PaymentLog"> | number
    action?: EnumPaymentActionFilter<"PaymentLog"> | $Enums.PaymentAction
    reason?: StringNullableFilter<"PaymentLog"> | string | null
    timestamp?: DateTimeFilter<"PaymentLog"> | Date | string
    registration?: XOR<RegistrationRelationFilter, RegistrationWhereInput>
    admin?: XOR<AdminRelationFilter, AdminWhereInput>
  }

  export type PaymentLogOrderByWithRelationInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    reason?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    registration?: RegistrationOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type PaymentLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentLogWhereInput | PaymentLogWhereInput[]
    OR?: PaymentLogWhereInput[]
    NOT?: PaymentLogWhereInput | PaymentLogWhereInput[]
    registrationId?: IntFilter<"PaymentLog"> | number
    adminId?: IntFilter<"PaymentLog"> | number
    action?: EnumPaymentActionFilter<"PaymentLog"> | $Enums.PaymentAction
    reason?: StringNullableFilter<"PaymentLog"> | string | null
    timestamp?: DateTimeFilter<"PaymentLog"> | Date | string
    registration?: XOR<RegistrationRelationFilter, RegistrationWhereInput>
    admin?: XOR<AdminRelationFilter, AdminWhereInput>
  }, "id">

  export type PaymentLogOrderByWithAggregationInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    reason?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: PaymentLogCountOrderByAggregateInput
    _avg?: PaymentLogAvgOrderByAggregateInput
    _max?: PaymentLogMaxOrderByAggregateInput
    _min?: PaymentLogMinOrderByAggregateInput
    _sum?: PaymentLogSumOrderByAggregateInput
  }

  export type PaymentLogScalarWhereWithAggregatesInput = {
    AND?: PaymentLogScalarWhereWithAggregatesInput | PaymentLogScalarWhereWithAggregatesInput[]
    OR?: PaymentLogScalarWhereWithAggregatesInput[]
    NOT?: PaymentLogScalarWhereWithAggregatesInput | PaymentLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentLog"> | number
    registrationId?: IntWithAggregatesFilter<"PaymentLog"> | number
    adminId?: IntWithAggregatesFilter<"PaymentLog"> | number
    action?: EnumPaymentActionWithAggregatesFilter<"PaymentLog"> | $Enums.PaymentAction
    reason?: StringNullableWithAggregatesFilter<"PaymentLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"PaymentLog"> | Date | string
  }

  export type CheckInWhereInput = {
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    id?: IntFilter<"CheckIn"> | number
    registrationId?: IntFilter<"CheckIn"> | number
    adminId?: IntFilter<"CheckIn"> | number
    checkInTime?: DateTimeFilter<"CheckIn"> | Date | string
    checkInMethod?: EnumCheckInMethodFilter<"CheckIn"> | $Enums.CheckInMethod
    notes?: StringNullableFilter<"CheckIn"> | string | null
    registration?: XOR<RegistrationRelationFilter, RegistrationWhereInput>
    admin?: XOR<AdminRelationFilter, AdminWhereInput>
  }

  export type CheckInOrderByWithRelationInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
    checkInTime?: SortOrder
    checkInMethod?: SortOrder
    notes?: SortOrderInput | SortOrder
    registration?: RegistrationOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type CheckInWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CheckInWhereInput | CheckInWhereInput[]
    OR?: CheckInWhereInput[]
    NOT?: CheckInWhereInput | CheckInWhereInput[]
    registrationId?: IntFilter<"CheckIn"> | number
    adminId?: IntFilter<"CheckIn"> | number
    checkInTime?: DateTimeFilter<"CheckIn"> | Date | string
    checkInMethod?: EnumCheckInMethodFilter<"CheckIn"> | $Enums.CheckInMethod
    notes?: StringNullableFilter<"CheckIn"> | string | null
    registration?: XOR<RegistrationRelationFilter, RegistrationWhereInput>
    admin?: XOR<AdminRelationFilter, AdminWhereInput>
  }, "id">

  export type CheckInOrderByWithAggregationInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
    checkInTime?: SortOrder
    checkInMethod?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: CheckInCountOrderByAggregateInput
    _avg?: CheckInAvgOrderByAggregateInput
    _max?: CheckInMaxOrderByAggregateInput
    _min?: CheckInMinOrderByAggregateInput
    _sum?: CheckInSumOrderByAggregateInput
  }

  export type CheckInScalarWhereWithAggregatesInput = {
    AND?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    OR?: CheckInScalarWhereWithAggregatesInput[]
    NOT?: CheckInScalarWhereWithAggregatesInput | CheckInScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CheckIn"> | number
    registrationId?: IntWithAggregatesFilter<"CheckIn"> | number
    adminId?: IntWithAggregatesFilter<"CheckIn"> | number
    checkInTime?: DateTimeWithAggregatesFilter<"CheckIn"> | Date | string
    checkInMethod?: EnumCheckInMethodWithAggregatesFilter<"CheckIn"> | $Enums.CheckInMethod
    notes?: StringNullableWithAggregatesFilter<"CheckIn"> | string | null
  }

  export type UserCreateInput = {
    name: string
    email: string
    phone: string
    city?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: RegistrationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    city?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    registrations?: RegistrationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    registrations?: RegistrationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    city?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegistrationCreateInput = {
    ticketType: $Enums.TicketType
    ticketPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentProofPath?: string | null
    qrCode: string
    qrCodePath?: string | null
    registrationDate?: Date | string
    paymentVerifiedAt?: Date | string | null
    rejectionReason?: string | null
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    user: UserCreateNestedOneWithoutRegistrationsInput
    verifier?: AdminCreateNestedOneWithoutVerifiedRegistrationsInput
    paymentLogs?: PaymentLogCreateNestedManyWithoutRegistrationInput
    checkIns?: CheckInCreateNestedManyWithoutRegistrationInput
  }

  export type RegistrationUncheckedCreateInput = {
    id?: number
    userId: number
    ticketType: $Enums.TicketType
    ticketPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentProofPath?: string | null
    qrCode: string
    qrCodePath?: string | null
    registrationDate?: Date | string
    paymentVerifiedAt?: Date | string | null
    verifiedBy?: number | null
    rejectionReason?: string | null
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    paymentLogs?: PaymentLogUncheckedCreateNestedManyWithoutRegistrationInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type RegistrationUpdateInput = {
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
    verifier?: AdminUpdateOneWithoutVerifiedRegistrationsNestedInput
    paymentLogs?: PaymentLogUpdateManyWithoutRegistrationNestedInput
    checkIns?: CheckInUpdateManyWithoutRegistrationNestedInput
  }

  export type RegistrationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentLogs?: PaymentLogUncheckedUpdateManyWithoutRegistrationNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type RegistrationCreateManyInput = {
    id?: number
    userId: number
    ticketType: $Enums.TicketType
    ticketPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentProofPath?: string | null
    qrCode: string
    qrCodePath?: string | null
    registrationDate?: Date | string
    paymentVerifiedAt?: Date | string | null
    verifiedBy?: number | null
    rejectionReason?: string | null
    checkedIn?: boolean
    checkedInAt?: Date | string | null
  }

  export type RegistrationUpdateManyMutationInput = {
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RegistrationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminCreateInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
    verifiedRegistrations?: RegistrationCreateNestedManyWithoutVerifierInput
    paymentLogs?: PaymentLogCreateNestedManyWithoutAdminInput
    checkIns?: CheckInCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
    verifiedRegistrations?: RegistrationUncheckedCreateNestedManyWithoutVerifierInput
    paymentLogs?: PaymentLogUncheckedCreateNestedManyWithoutAdminInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedRegistrations?: RegistrationUpdateManyWithoutVerifierNestedInput
    paymentLogs?: PaymentLogUpdateManyWithoutAdminNestedInput
    checkIns?: CheckInUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedRegistrations?: RegistrationUncheckedUpdateManyWithoutVerifierNestedInput
    paymentLogs?: PaymentLogUncheckedUpdateManyWithoutAdminNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
  }

  export type AdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentLogCreateInput = {
    action: $Enums.PaymentAction
    reason?: string | null
    timestamp?: Date | string
    registration: RegistrationCreateNestedOneWithoutPaymentLogsInput
    admin: AdminCreateNestedOneWithoutPaymentLogsInput
  }

  export type PaymentLogUncheckedCreateInput = {
    id?: number
    registrationId: number
    adminId: number
    action: $Enums.PaymentAction
    reason?: string | null
    timestamp?: Date | string
  }

  export type PaymentLogUpdateInput = {
    action?: EnumPaymentActionFieldUpdateOperationsInput | $Enums.PaymentAction
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    registration?: RegistrationUpdateOneRequiredWithoutPaymentLogsNestedInput
    admin?: AdminUpdateOneRequiredWithoutPaymentLogsNestedInput
  }

  export type PaymentLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    action?: EnumPaymentActionFieldUpdateOperationsInput | $Enums.PaymentAction
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLogCreateManyInput = {
    id?: number
    registrationId: number
    adminId: number
    action: $Enums.PaymentAction
    reason?: string | null
    timestamp?: Date | string
  }

  export type PaymentLogUpdateManyMutationInput = {
    action?: EnumPaymentActionFieldUpdateOperationsInput | $Enums.PaymentAction
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    action?: EnumPaymentActionFieldUpdateOperationsInput | $Enums.PaymentAction
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInCreateInput = {
    checkInTime?: Date | string
    checkInMethod: $Enums.CheckInMethod
    notes?: string | null
    registration: RegistrationCreateNestedOneWithoutCheckInsInput
    admin: AdminCreateNestedOneWithoutCheckInsInput
  }

  export type CheckInUncheckedCreateInput = {
    id?: number
    registrationId: number
    adminId: number
    checkInTime?: Date | string
    checkInMethod: $Enums.CheckInMethod
    notes?: string | null
  }

  export type CheckInUpdateInput = {
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInMethod?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    registration?: RegistrationUpdateOneRequiredWithoutCheckInsNestedInput
    admin?: AdminUpdateOneRequiredWithoutCheckInsNestedInput
  }

  export type CheckInUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInMethod?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckInCreateManyInput = {
    id?: number
    registrationId: number
    adminId: number
    checkInTime?: Date | string
    checkInMethod: $Enums.CheckInMethod
    notes?: string | null
  }

  export type CheckInUpdateManyMutationInput = {
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInMethod?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckInUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationId?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInMethod?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RegistrationListRelationFilter = {
    every?: RegistrationWhereInput
    some?: RegistrationWhereInput
    none?: RegistrationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RegistrationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTicketTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketType | EnumTicketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TicketType[]
    notIn?: $Enums.TicketType[]
    not?: NestedEnumTicketTypeFilter<$PrismaModel> | $Enums.TicketType
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AdminNullableRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type PaymentLogListRelationFilter = {
    every?: PaymentLogWhereInput
    some?: PaymentLogWhereInput
    none?: PaymentLogWhereInput
  }

  export type CheckInListRelationFilter = {
    every?: CheckInWhereInput
    some?: CheckInWhereInput
    none?: CheckInWhereInput
  }

  export type PaymentLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CheckInOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistrationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ticketType?: SortOrder
    ticketPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentProofPath?: SortOrder
    qrCode?: SortOrder
    qrCodePath?: SortOrder
    registrationDate?: SortOrder
    paymentVerifiedAt?: SortOrder
    verifiedBy?: SortOrder
    rejectionReason?: SortOrder
    checkedIn?: SortOrder
    checkedInAt?: SortOrder
  }

  export type RegistrationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ticketPrice?: SortOrder
    verifiedBy?: SortOrder
  }

  export type RegistrationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ticketType?: SortOrder
    ticketPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentProofPath?: SortOrder
    qrCode?: SortOrder
    qrCodePath?: SortOrder
    registrationDate?: SortOrder
    paymentVerifiedAt?: SortOrder
    verifiedBy?: SortOrder
    rejectionReason?: SortOrder
    checkedIn?: SortOrder
    checkedInAt?: SortOrder
  }

  export type RegistrationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ticketType?: SortOrder
    ticketPrice?: SortOrder
    paymentStatus?: SortOrder
    paymentProofPath?: SortOrder
    qrCode?: SortOrder
    qrCodePath?: SortOrder
    registrationDate?: SortOrder
    paymentVerifiedAt?: SortOrder
    verifiedBy?: SortOrder
    rejectionReason?: SortOrder
    checkedIn?: SortOrder
    checkedInAt?: SortOrder
  }

  export type RegistrationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ticketPrice?: SortOrder
    verifiedBy?: SortOrder
  }

  export type EnumTicketTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketType | EnumTicketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TicketType[]
    notIn?: $Enums.TicketType[]
    not?: NestedEnumTicketTypeWithAggregatesFilter<$PrismaModel> | $Enums.TicketType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketTypeFilter<$PrismaModel>
    _max?: NestedEnumTicketTypeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[]
    notIn?: $Enums.AdminRole[]
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[]
    notIn?: $Enums.AdminRole[]
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type EnumPaymentActionFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentAction | EnumPaymentActionFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentAction[]
    notIn?: $Enums.PaymentAction[]
    not?: NestedEnumPaymentActionFilter<$PrismaModel> | $Enums.PaymentAction
  }

  export type RegistrationRelationFilter = {
    is?: RegistrationWhereInput
    isNot?: RegistrationWhereInput
  }

  export type AdminRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type PaymentLogCountOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
  }

  export type PaymentLogAvgOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
  }

  export type PaymentLogMaxOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
  }

  export type PaymentLogMinOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
    action?: SortOrder
    reason?: SortOrder
    timestamp?: SortOrder
  }

  export type PaymentLogSumOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
  }

  export type EnumPaymentActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentAction | EnumPaymentActionFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentAction[]
    notIn?: $Enums.PaymentAction[]
    not?: NestedEnumPaymentActionWithAggregatesFilter<$PrismaModel> | $Enums.PaymentAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentActionFilter<$PrismaModel>
    _max?: NestedEnumPaymentActionFilter<$PrismaModel>
  }

  export type EnumCheckInMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInMethod | EnumCheckInMethodFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInMethod[]
    notIn?: $Enums.CheckInMethod[]
    not?: NestedEnumCheckInMethodFilter<$PrismaModel> | $Enums.CheckInMethod
  }

  export type CheckInCountOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
    checkInTime?: SortOrder
    checkInMethod?: SortOrder
    notes?: SortOrder
  }

  export type CheckInAvgOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
  }

  export type CheckInMaxOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
    checkInTime?: SortOrder
    checkInMethod?: SortOrder
    notes?: SortOrder
  }

  export type CheckInMinOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
    checkInTime?: SortOrder
    checkInMethod?: SortOrder
    notes?: SortOrder
  }

  export type CheckInSumOrderByAggregateInput = {
    id?: SortOrder
    registrationId?: SortOrder
    adminId?: SortOrder
  }

  export type EnumCheckInMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInMethod | EnumCheckInMethodFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInMethod[]
    notIn?: $Enums.CheckInMethod[]
    not?: NestedEnumCheckInMethodWithAggregatesFilter<$PrismaModel> | $Enums.CheckInMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckInMethodFilter<$PrismaModel>
    _max?: NestedEnumCheckInMethodFilter<$PrismaModel>
  }

  export type RegistrationCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type RegistrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RegistrationUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutUserInput | RegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutUserInput | RegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutUserInput | RegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RegistrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput> | RegistrationCreateWithoutUserInput[] | RegistrationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutUserInput | RegistrationCreateOrConnectWithoutUserInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutUserInput | RegistrationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegistrationCreateManyUserInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutUserInput | RegistrationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutUserInput | RegistrationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRegistrationsInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutVerifiedRegistrationsInput = {
    create?: XOR<AdminCreateWithoutVerifiedRegistrationsInput, AdminUncheckedCreateWithoutVerifiedRegistrationsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutVerifiedRegistrationsInput
    connect?: AdminWhereUniqueInput
  }

  export type PaymentLogCreateNestedManyWithoutRegistrationInput = {
    create?: XOR<PaymentLogCreateWithoutRegistrationInput, PaymentLogUncheckedCreateWithoutRegistrationInput> | PaymentLogCreateWithoutRegistrationInput[] | PaymentLogUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: PaymentLogCreateOrConnectWithoutRegistrationInput | PaymentLogCreateOrConnectWithoutRegistrationInput[]
    createMany?: PaymentLogCreateManyRegistrationInputEnvelope
    connect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
  }

  export type CheckInCreateNestedManyWithoutRegistrationInput = {
    create?: XOR<CheckInCreateWithoutRegistrationInput, CheckInUncheckedCreateWithoutRegistrationInput> | CheckInCreateWithoutRegistrationInput[] | CheckInUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutRegistrationInput | CheckInCreateOrConnectWithoutRegistrationInput[]
    createMany?: CheckInCreateManyRegistrationInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type PaymentLogUncheckedCreateNestedManyWithoutRegistrationInput = {
    create?: XOR<PaymentLogCreateWithoutRegistrationInput, PaymentLogUncheckedCreateWithoutRegistrationInput> | PaymentLogCreateWithoutRegistrationInput[] | PaymentLogUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: PaymentLogCreateOrConnectWithoutRegistrationInput | PaymentLogCreateOrConnectWithoutRegistrationInput[]
    createMany?: PaymentLogCreateManyRegistrationInputEnvelope
    connect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
  }

  export type CheckInUncheckedCreateNestedManyWithoutRegistrationInput = {
    create?: XOR<CheckInCreateWithoutRegistrationInput, CheckInUncheckedCreateWithoutRegistrationInput> | CheckInCreateWithoutRegistrationInput[] | CheckInUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutRegistrationInput | CheckInCreateOrConnectWithoutRegistrationInput[]
    createMany?: CheckInCreateManyRegistrationInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type EnumTicketTypeFieldUpdateOperationsInput = {
    set?: $Enums.TicketType
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRegistrationsNestedInput = {
    create?: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegistrationsInput
    upsert?: UserUpsertWithoutRegistrationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegistrationsInput, UserUpdateWithoutRegistrationsInput>, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type AdminUpdateOneWithoutVerifiedRegistrationsNestedInput = {
    create?: XOR<AdminCreateWithoutVerifiedRegistrationsInput, AdminUncheckedCreateWithoutVerifiedRegistrationsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutVerifiedRegistrationsInput
    upsert?: AdminUpsertWithoutVerifiedRegistrationsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutVerifiedRegistrationsInput, AdminUpdateWithoutVerifiedRegistrationsInput>, AdminUncheckedUpdateWithoutVerifiedRegistrationsInput>
  }

  export type PaymentLogUpdateManyWithoutRegistrationNestedInput = {
    create?: XOR<PaymentLogCreateWithoutRegistrationInput, PaymentLogUncheckedCreateWithoutRegistrationInput> | PaymentLogCreateWithoutRegistrationInput[] | PaymentLogUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: PaymentLogCreateOrConnectWithoutRegistrationInput | PaymentLogCreateOrConnectWithoutRegistrationInput[]
    upsert?: PaymentLogUpsertWithWhereUniqueWithoutRegistrationInput | PaymentLogUpsertWithWhereUniqueWithoutRegistrationInput[]
    createMany?: PaymentLogCreateManyRegistrationInputEnvelope
    set?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    disconnect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    delete?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    connect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    update?: PaymentLogUpdateWithWhereUniqueWithoutRegistrationInput | PaymentLogUpdateWithWhereUniqueWithoutRegistrationInput[]
    updateMany?: PaymentLogUpdateManyWithWhereWithoutRegistrationInput | PaymentLogUpdateManyWithWhereWithoutRegistrationInput[]
    deleteMany?: PaymentLogScalarWhereInput | PaymentLogScalarWhereInput[]
  }

  export type CheckInUpdateManyWithoutRegistrationNestedInput = {
    create?: XOR<CheckInCreateWithoutRegistrationInput, CheckInUncheckedCreateWithoutRegistrationInput> | CheckInCreateWithoutRegistrationInput[] | CheckInUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutRegistrationInput | CheckInCreateOrConnectWithoutRegistrationInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutRegistrationInput | CheckInUpsertWithWhereUniqueWithoutRegistrationInput[]
    createMany?: CheckInCreateManyRegistrationInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutRegistrationInput | CheckInUpdateWithWhereUniqueWithoutRegistrationInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutRegistrationInput | CheckInUpdateManyWithWhereWithoutRegistrationInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PaymentLogUncheckedUpdateManyWithoutRegistrationNestedInput = {
    create?: XOR<PaymentLogCreateWithoutRegistrationInput, PaymentLogUncheckedCreateWithoutRegistrationInput> | PaymentLogCreateWithoutRegistrationInput[] | PaymentLogUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: PaymentLogCreateOrConnectWithoutRegistrationInput | PaymentLogCreateOrConnectWithoutRegistrationInput[]
    upsert?: PaymentLogUpsertWithWhereUniqueWithoutRegistrationInput | PaymentLogUpsertWithWhereUniqueWithoutRegistrationInput[]
    createMany?: PaymentLogCreateManyRegistrationInputEnvelope
    set?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    disconnect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    delete?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    connect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    update?: PaymentLogUpdateWithWhereUniqueWithoutRegistrationInput | PaymentLogUpdateWithWhereUniqueWithoutRegistrationInput[]
    updateMany?: PaymentLogUpdateManyWithWhereWithoutRegistrationInput | PaymentLogUpdateManyWithWhereWithoutRegistrationInput[]
    deleteMany?: PaymentLogScalarWhereInput | PaymentLogScalarWhereInput[]
  }

  export type CheckInUncheckedUpdateManyWithoutRegistrationNestedInput = {
    create?: XOR<CheckInCreateWithoutRegistrationInput, CheckInUncheckedCreateWithoutRegistrationInput> | CheckInCreateWithoutRegistrationInput[] | CheckInUncheckedCreateWithoutRegistrationInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutRegistrationInput | CheckInCreateOrConnectWithoutRegistrationInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutRegistrationInput | CheckInUpsertWithWhereUniqueWithoutRegistrationInput[]
    createMany?: CheckInCreateManyRegistrationInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutRegistrationInput | CheckInUpdateWithWhereUniqueWithoutRegistrationInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutRegistrationInput | CheckInUpdateManyWithWhereWithoutRegistrationInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type RegistrationCreateNestedManyWithoutVerifierInput = {
    create?: XOR<RegistrationCreateWithoutVerifierInput, RegistrationUncheckedCreateWithoutVerifierInput> | RegistrationCreateWithoutVerifierInput[] | RegistrationUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutVerifierInput | RegistrationCreateOrConnectWithoutVerifierInput[]
    createMany?: RegistrationCreateManyVerifierInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type PaymentLogCreateNestedManyWithoutAdminInput = {
    create?: XOR<PaymentLogCreateWithoutAdminInput, PaymentLogUncheckedCreateWithoutAdminInput> | PaymentLogCreateWithoutAdminInput[] | PaymentLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PaymentLogCreateOrConnectWithoutAdminInput | PaymentLogCreateOrConnectWithoutAdminInput[]
    createMany?: PaymentLogCreateManyAdminInputEnvelope
    connect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
  }

  export type CheckInCreateNestedManyWithoutAdminInput = {
    create?: XOR<CheckInCreateWithoutAdminInput, CheckInUncheckedCreateWithoutAdminInput> | CheckInCreateWithoutAdminInput[] | CheckInUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutAdminInput | CheckInCreateOrConnectWithoutAdminInput[]
    createMany?: CheckInCreateManyAdminInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type RegistrationUncheckedCreateNestedManyWithoutVerifierInput = {
    create?: XOR<RegistrationCreateWithoutVerifierInput, RegistrationUncheckedCreateWithoutVerifierInput> | RegistrationCreateWithoutVerifierInput[] | RegistrationUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutVerifierInput | RegistrationCreateOrConnectWithoutVerifierInput[]
    createMany?: RegistrationCreateManyVerifierInputEnvelope
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
  }

  export type PaymentLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<PaymentLogCreateWithoutAdminInput, PaymentLogUncheckedCreateWithoutAdminInput> | PaymentLogCreateWithoutAdminInput[] | PaymentLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PaymentLogCreateOrConnectWithoutAdminInput | PaymentLogCreateOrConnectWithoutAdminInput[]
    createMany?: PaymentLogCreateManyAdminInputEnvelope
    connect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
  }

  export type CheckInUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<CheckInCreateWithoutAdminInput, CheckInUncheckedCreateWithoutAdminInput> | CheckInCreateWithoutAdminInput[] | CheckInUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutAdminInput | CheckInCreateOrConnectWithoutAdminInput[]
    createMany?: CheckInCreateManyAdminInputEnvelope
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
  }

  export type EnumAdminRoleFieldUpdateOperationsInput = {
    set?: $Enums.AdminRole
  }

  export type RegistrationUpdateManyWithoutVerifierNestedInput = {
    create?: XOR<RegistrationCreateWithoutVerifierInput, RegistrationUncheckedCreateWithoutVerifierInput> | RegistrationCreateWithoutVerifierInput[] | RegistrationUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutVerifierInput | RegistrationCreateOrConnectWithoutVerifierInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutVerifierInput | RegistrationUpsertWithWhereUniqueWithoutVerifierInput[]
    createMany?: RegistrationCreateManyVerifierInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutVerifierInput | RegistrationUpdateWithWhereUniqueWithoutVerifierInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutVerifierInput | RegistrationUpdateManyWithWhereWithoutVerifierInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type PaymentLogUpdateManyWithoutAdminNestedInput = {
    create?: XOR<PaymentLogCreateWithoutAdminInput, PaymentLogUncheckedCreateWithoutAdminInput> | PaymentLogCreateWithoutAdminInput[] | PaymentLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PaymentLogCreateOrConnectWithoutAdminInput | PaymentLogCreateOrConnectWithoutAdminInput[]
    upsert?: PaymentLogUpsertWithWhereUniqueWithoutAdminInput | PaymentLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: PaymentLogCreateManyAdminInputEnvelope
    set?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    disconnect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    delete?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    connect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    update?: PaymentLogUpdateWithWhereUniqueWithoutAdminInput | PaymentLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: PaymentLogUpdateManyWithWhereWithoutAdminInput | PaymentLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: PaymentLogScalarWhereInput | PaymentLogScalarWhereInput[]
  }

  export type CheckInUpdateManyWithoutAdminNestedInput = {
    create?: XOR<CheckInCreateWithoutAdminInput, CheckInUncheckedCreateWithoutAdminInput> | CheckInCreateWithoutAdminInput[] | CheckInUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutAdminInput | CheckInCreateOrConnectWithoutAdminInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutAdminInput | CheckInUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: CheckInCreateManyAdminInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutAdminInput | CheckInUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutAdminInput | CheckInUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type RegistrationUncheckedUpdateManyWithoutVerifierNestedInput = {
    create?: XOR<RegistrationCreateWithoutVerifierInput, RegistrationUncheckedCreateWithoutVerifierInput> | RegistrationCreateWithoutVerifierInput[] | RegistrationUncheckedCreateWithoutVerifierInput[]
    connectOrCreate?: RegistrationCreateOrConnectWithoutVerifierInput | RegistrationCreateOrConnectWithoutVerifierInput[]
    upsert?: RegistrationUpsertWithWhereUniqueWithoutVerifierInput | RegistrationUpsertWithWhereUniqueWithoutVerifierInput[]
    createMany?: RegistrationCreateManyVerifierInputEnvelope
    set?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    disconnect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    delete?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    connect?: RegistrationWhereUniqueInput | RegistrationWhereUniqueInput[]
    update?: RegistrationUpdateWithWhereUniqueWithoutVerifierInput | RegistrationUpdateWithWhereUniqueWithoutVerifierInput[]
    updateMany?: RegistrationUpdateManyWithWhereWithoutVerifierInput | RegistrationUpdateManyWithWhereWithoutVerifierInput[]
    deleteMany?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
  }

  export type PaymentLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<PaymentLogCreateWithoutAdminInput, PaymentLogUncheckedCreateWithoutAdminInput> | PaymentLogCreateWithoutAdminInput[] | PaymentLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PaymentLogCreateOrConnectWithoutAdminInput | PaymentLogCreateOrConnectWithoutAdminInput[]
    upsert?: PaymentLogUpsertWithWhereUniqueWithoutAdminInput | PaymentLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: PaymentLogCreateManyAdminInputEnvelope
    set?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    disconnect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    delete?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    connect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    update?: PaymentLogUpdateWithWhereUniqueWithoutAdminInput | PaymentLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: PaymentLogUpdateManyWithWhereWithoutAdminInput | PaymentLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: PaymentLogScalarWhereInput | PaymentLogScalarWhereInput[]
  }

  export type CheckInUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<CheckInCreateWithoutAdminInput, CheckInUncheckedCreateWithoutAdminInput> | CheckInCreateWithoutAdminInput[] | CheckInUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CheckInCreateOrConnectWithoutAdminInput | CheckInCreateOrConnectWithoutAdminInput[]
    upsert?: CheckInUpsertWithWhereUniqueWithoutAdminInput | CheckInUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: CheckInCreateManyAdminInputEnvelope
    set?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    disconnect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    delete?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    connect?: CheckInWhereUniqueInput | CheckInWhereUniqueInput[]
    update?: CheckInUpdateWithWhereUniqueWithoutAdminInput | CheckInUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: CheckInUpdateManyWithWhereWithoutAdminInput | CheckInUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
  }

  export type RegistrationCreateNestedOneWithoutPaymentLogsInput = {
    create?: XOR<RegistrationCreateWithoutPaymentLogsInput, RegistrationUncheckedCreateWithoutPaymentLogsInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutPaymentLogsInput
    connect?: RegistrationWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutPaymentLogsInput = {
    create?: XOR<AdminCreateWithoutPaymentLogsInput, AdminUncheckedCreateWithoutPaymentLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutPaymentLogsInput
    connect?: AdminWhereUniqueInput
  }

  export type EnumPaymentActionFieldUpdateOperationsInput = {
    set?: $Enums.PaymentAction
  }

  export type RegistrationUpdateOneRequiredWithoutPaymentLogsNestedInput = {
    create?: XOR<RegistrationCreateWithoutPaymentLogsInput, RegistrationUncheckedCreateWithoutPaymentLogsInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutPaymentLogsInput
    upsert?: RegistrationUpsertWithoutPaymentLogsInput
    connect?: RegistrationWhereUniqueInput
    update?: XOR<XOR<RegistrationUpdateToOneWithWhereWithoutPaymentLogsInput, RegistrationUpdateWithoutPaymentLogsInput>, RegistrationUncheckedUpdateWithoutPaymentLogsInput>
  }

  export type AdminUpdateOneRequiredWithoutPaymentLogsNestedInput = {
    create?: XOR<AdminCreateWithoutPaymentLogsInput, AdminUncheckedCreateWithoutPaymentLogsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutPaymentLogsInput
    upsert?: AdminUpsertWithoutPaymentLogsInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutPaymentLogsInput, AdminUpdateWithoutPaymentLogsInput>, AdminUncheckedUpdateWithoutPaymentLogsInput>
  }

  export type RegistrationCreateNestedOneWithoutCheckInsInput = {
    create?: XOR<RegistrationCreateWithoutCheckInsInput, RegistrationUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutCheckInsInput
    connect?: RegistrationWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutCheckInsInput = {
    create?: XOR<AdminCreateWithoutCheckInsInput, AdminUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCheckInsInput
    connect?: AdminWhereUniqueInput
  }

  export type EnumCheckInMethodFieldUpdateOperationsInput = {
    set?: $Enums.CheckInMethod
  }

  export type RegistrationUpdateOneRequiredWithoutCheckInsNestedInput = {
    create?: XOR<RegistrationCreateWithoutCheckInsInput, RegistrationUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: RegistrationCreateOrConnectWithoutCheckInsInput
    upsert?: RegistrationUpsertWithoutCheckInsInput
    connect?: RegistrationWhereUniqueInput
    update?: XOR<XOR<RegistrationUpdateToOneWithWhereWithoutCheckInsInput, RegistrationUpdateWithoutCheckInsInput>, RegistrationUncheckedUpdateWithoutCheckInsInput>
  }

  export type AdminUpdateOneRequiredWithoutCheckInsNestedInput = {
    create?: XOR<AdminCreateWithoutCheckInsInput, AdminUncheckedCreateWithoutCheckInsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCheckInsInput
    upsert?: AdminUpsertWithoutCheckInsInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutCheckInsInput, AdminUpdateWithoutCheckInsInput>, AdminUncheckedUpdateWithoutCheckInsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTicketTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketType | EnumTicketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TicketType[]
    notIn?: $Enums.TicketType[]
    not?: NestedEnumTicketTypeFilter<$PrismaModel> | $Enums.TicketType
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTicketTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketType | EnumTicketTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TicketType[]
    notIn?: $Enums.TicketType[]
    not?: NestedEnumTicketTypeWithAggregatesFilter<$PrismaModel> | $Enums.TicketType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketTypeFilter<$PrismaModel>
    _max?: NestedEnumTicketTypeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAdminRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[]
    notIn?: $Enums.AdminRole[]
    not?: NestedEnumAdminRoleFilter<$PrismaModel> | $Enums.AdminRole
  }

  export type NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminRole | EnumAdminRoleFieldRefInput<$PrismaModel>
    in?: $Enums.AdminRole[]
    notIn?: $Enums.AdminRole[]
    not?: NestedEnumAdminRoleWithAggregatesFilter<$PrismaModel> | $Enums.AdminRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminRoleFilter<$PrismaModel>
    _max?: NestedEnumAdminRoleFilter<$PrismaModel>
  }

  export type NestedEnumPaymentActionFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentAction | EnumPaymentActionFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentAction[]
    notIn?: $Enums.PaymentAction[]
    not?: NestedEnumPaymentActionFilter<$PrismaModel> | $Enums.PaymentAction
  }

  export type NestedEnumPaymentActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentAction | EnumPaymentActionFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentAction[]
    notIn?: $Enums.PaymentAction[]
    not?: NestedEnumPaymentActionWithAggregatesFilter<$PrismaModel> | $Enums.PaymentAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentActionFilter<$PrismaModel>
    _max?: NestedEnumPaymentActionFilter<$PrismaModel>
  }

  export type NestedEnumCheckInMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInMethod | EnumCheckInMethodFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInMethod[]
    notIn?: $Enums.CheckInMethod[]
    not?: NestedEnumCheckInMethodFilter<$PrismaModel> | $Enums.CheckInMethod
  }

  export type NestedEnumCheckInMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInMethod | EnumCheckInMethodFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInMethod[]
    notIn?: $Enums.CheckInMethod[]
    not?: NestedEnumCheckInMethodWithAggregatesFilter<$PrismaModel> | $Enums.CheckInMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckInMethodFilter<$PrismaModel>
    _max?: NestedEnumCheckInMethodFilter<$PrismaModel>
  }

  export type RegistrationCreateWithoutUserInput = {
    ticketType: $Enums.TicketType
    ticketPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentProofPath?: string | null
    qrCode: string
    qrCodePath?: string | null
    registrationDate?: Date | string
    paymentVerifiedAt?: Date | string | null
    rejectionReason?: string | null
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    verifier?: AdminCreateNestedOneWithoutVerifiedRegistrationsInput
    paymentLogs?: PaymentLogCreateNestedManyWithoutRegistrationInput
    checkIns?: CheckInCreateNestedManyWithoutRegistrationInput
  }

  export type RegistrationUncheckedCreateWithoutUserInput = {
    id?: number
    ticketType: $Enums.TicketType
    ticketPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentProofPath?: string | null
    qrCode: string
    qrCodePath?: string | null
    registrationDate?: Date | string
    paymentVerifiedAt?: Date | string | null
    verifiedBy?: number | null
    rejectionReason?: string | null
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    paymentLogs?: PaymentLogUncheckedCreateNestedManyWithoutRegistrationInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type RegistrationCreateOrConnectWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
  }

  export type RegistrationCreateManyUserInputEnvelope = {
    data: RegistrationCreateManyUserInput | RegistrationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RegistrationUpsertWithWhereUniqueWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    update: XOR<RegistrationUpdateWithoutUserInput, RegistrationUncheckedUpdateWithoutUserInput>
    create: XOR<RegistrationCreateWithoutUserInput, RegistrationUncheckedCreateWithoutUserInput>
  }

  export type RegistrationUpdateWithWhereUniqueWithoutUserInput = {
    where: RegistrationWhereUniqueInput
    data: XOR<RegistrationUpdateWithoutUserInput, RegistrationUncheckedUpdateWithoutUserInput>
  }

  export type RegistrationUpdateManyWithWhereWithoutUserInput = {
    where: RegistrationScalarWhereInput
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyWithoutUserInput>
  }

  export type RegistrationScalarWhereInput = {
    AND?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
    OR?: RegistrationScalarWhereInput[]
    NOT?: RegistrationScalarWhereInput | RegistrationScalarWhereInput[]
    id?: IntFilter<"Registration"> | number
    userId?: IntFilter<"Registration"> | number
    ticketType?: EnumTicketTypeFilter<"Registration"> | $Enums.TicketType
    ticketPrice?: DecimalFilter<"Registration"> | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFilter<"Registration"> | $Enums.PaymentStatus
    paymentProofPath?: StringNullableFilter<"Registration"> | string | null
    qrCode?: StringFilter<"Registration"> | string
    qrCodePath?: StringNullableFilter<"Registration"> | string | null
    registrationDate?: DateTimeFilter<"Registration"> | Date | string
    paymentVerifiedAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
    verifiedBy?: IntNullableFilter<"Registration"> | number | null
    rejectionReason?: StringNullableFilter<"Registration"> | string | null
    checkedIn?: BoolFilter<"Registration"> | boolean
    checkedInAt?: DateTimeNullableFilter<"Registration"> | Date | string | null
  }

  export type UserCreateWithoutRegistrationsInput = {
    name: string
    email: string
    phone: string
    city?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutRegistrationsInput = {
    id?: number
    name: string
    email: string
    phone: string
    city?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutRegistrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
  }

  export type AdminCreateWithoutVerifiedRegistrationsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
    paymentLogs?: PaymentLogCreateNestedManyWithoutAdminInput
    checkIns?: CheckInCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutVerifiedRegistrationsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
    paymentLogs?: PaymentLogUncheckedCreateNestedManyWithoutAdminInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutVerifiedRegistrationsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutVerifiedRegistrationsInput, AdminUncheckedCreateWithoutVerifiedRegistrationsInput>
  }

  export type PaymentLogCreateWithoutRegistrationInput = {
    action: $Enums.PaymentAction
    reason?: string | null
    timestamp?: Date | string
    admin: AdminCreateNestedOneWithoutPaymentLogsInput
  }

  export type PaymentLogUncheckedCreateWithoutRegistrationInput = {
    id?: number
    adminId: number
    action: $Enums.PaymentAction
    reason?: string | null
    timestamp?: Date | string
  }

  export type PaymentLogCreateOrConnectWithoutRegistrationInput = {
    where: PaymentLogWhereUniqueInput
    create: XOR<PaymentLogCreateWithoutRegistrationInput, PaymentLogUncheckedCreateWithoutRegistrationInput>
  }

  export type PaymentLogCreateManyRegistrationInputEnvelope = {
    data: PaymentLogCreateManyRegistrationInput | PaymentLogCreateManyRegistrationInput[]
    skipDuplicates?: boolean
  }

  export type CheckInCreateWithoutRegistrationInput = {
    checkInTime?: Date | string
    checkInMethod: $Enums.CheckInMethod
    notes?: string | null
    admin: AdminCreateNestedOneWithoutCheckInsInput
  }

  export type CheckInUncheckedCreateWithoutRegistrationInput = {
    id?: number
    adminId: number
    checkInTime?: Date | string
    checkInMethod: $Enums.CheckInMethod
    notes?: string | null
  }

  export type CheckInCreateOrConnectWithoutRegistrationInput = {
    where: CheckInWhereUniqueInput
    create: XOR<CheckInCreateWithoutRegistrationInput, CheckInUncheckedCreateWithoutRegistrationInput>
  }

  export type CheckInCreateManyRegistrationInputEnvelope = {
    data: CheckInCreateManyRegistrationInput | CheckInCreateManyRegistrationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRegistrationsInput = {
    update: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
    create: XOR<UserCreateWithoutRegistrationsInput, UserUncheckedCreateWithoutRegistrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegistrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegistrationsInput, UserUncheckedUpdateWithoutRegistrationsInput>
  }

  export type UserUpdateWithoutRegistrationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUpsertWithoutVerifiedRegistrationsInput = {
    update: XOR<AdminUpdateWithoutVerifiedRegistrationsInput, AdminUncheckedUpdateWithoutVerifiedRegistrationsInput>
    create: XOR<AdminCreateWithoutVerifiedRegistrationsInput, AdminUncheckedCreateWithoutVerifiedRegistrationsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutVerifiedRegistrationsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutVerifiedRegistrationsInput, AdminUncheckedUpdateWithoutVerifiedRegistrationsInput>
  }

  export type AdminUpdateWithoutVerifiedRegistrationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentLogs?: PaymentLogUpdateManyWithoutAdminNestedInput
    checkIns?: CheckInUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutVerifiedRegistrationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentLogs?: PaymentLogUncheckedUpdateManyWithoutAdminNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type PaymentLogUpsertWithWhereUniqueWithoutRegistrationInput = {
    where: PaymentLogWhereUniqueInput
    update: XOR<PaymentLogUpdateWithoutRegistrationInput, PaymentLogUncheckedUpdateWithoutRegistrationInput>
    create: XOR<PaymentLogCreateWithoutRegistrationInput, PaymentLogUncheckedCreateWithoutRegistrationInput>
  }

  export type PaymentLogUpdateWithWhereUniqueWithoutRegistrationInput = {
    where: PaymentLogWhereUniqueInput
    data: XOR<PaymentLogUpdateWithoutRegistrationInput, PaymentLogUncheckedUpdateWithoutRegistrationInput>
  }

  export type PaymentLogUpdateManyWithWhereWithoutRegistrationInput = {
    where: PaymentLogScalarWhereInput
    data: XOR<PaymentLogUpdateManyMutationInput, PaymentLogUncheckedUpdateManyWithoutRegistrationInput>
  }

  export type PaymentLogScalarWhereInput = {
    AND?: PaymentLogScalarWhereInput | PaymentLogScalarWhereInput[]
    OR?: PaymentLogScalarWhereInput[]
    NOT?: PaymentLogScalarWhereInput | PaymentLogScalarWhereInput[]
    id?: IntFilter<"PaymentLog"> | number
    registrationId?: IntFilter<"PaymentLog"> | number
    adminId?: IntFilter<"PaymentLog"> | number
    action?: EnumPaymentActionFilter<"PaymentLog"> | $Enums.PaymentAction
    reason?: StringNullableFilter<"PaymentLog"> | string | null
    timestamp?: DateTimeFilter<"PaymentLog"> | Date | string
  }

  export type CheckInUpsertWithWhereUniqueWithoutRegistrationInput = {
    where: CheckInWhereUniqueInput
    update: XOR<CheckInUpdateWithoutRegistrationInput, CheckInUncheckedUpdateWithoutRegistrationInput>
    create: XOR<CheckInCreateWithoutRegistrationInput, CheckInUncheckedCreateWithoutRegistrationInput>
  }

  export type CheckInUpdateWithWhereUniqueWithoutRegistrationInput = {
    where: CheckInWhereUniqueInput
    data: XOR<CheckInUpdateWithoutRegistrationInput, CheckInUncheckedUpdateWithoutRegistrationInput>
  }

  export type CheckInUpdateManyWithWhereWithoutRegistrationInput = {
    where: CheckInScalarWhereInput
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyWithoutRegistrationInput>
  }

  export type CheckInScalarWhereInput = {
    AND?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
    OR?: CheckInScalarWhereInput[]
    NOT?: CheckInScalarWhereInput | CheckInScalarWhereInput[]
    id?: IntFilter<"CheckIn"> | number
    registrationId?: IntFilter<"CheckIn"> | number
    adminId?: IntFilter<"CheckIn"> | number
    checkInTime?: DateTimeFilter<"CheckIn"> | Date | string
    checkInMethod?: EnumCheckInMethodFilter<"CheckIn"> | $Enums.CheckInMethod
    notes?: StringNullableFilter<"CheckIn"> | string | null
  }

  export type RegistrationCreateWithoutVerifierInput = {
    ticketType: $Enums.TicketType
    ticketPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentProofPath?: string | null
    qrCode: string
    qrCodePath?: string | null
    registrationDate?: Date | string
    paymentVerifiedAt?: Date | string | null
    rejectionReason?: string | null
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    user: UserCreateNestedOneWithoutRegistrationsInput
    paymentLogs?: PaymentLogCreateNestedManyWithoutRegistrationInput
    checkIns?: CheckInCreateNestedManyWithoutRegistrationInput
  }

  export type RegistrationUncheckedCreateWithoutVerifierInput = {
    id?: number
    userId: number
    ticketType: $Enums.TicketType
    ticketPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentProofPath?: string | null
    qrCode: string
    qrCodePath?: string | null
    registrationDate?: Date | string
    paymentVerifiedAt?: Date | string | null
    rejectionReason?: string | null
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    paymentLogs?: PaymentLogUncheckedCreateNestedManyWithoutRegistrationInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type RegistrationCreateOrConnectWithoutVerifierInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutVerifierInput, RegistrationUncheckedCreateWithoutVerifierInput>
  }

  export type RegistrationCreateManyVerifierInputEnvelope = {
    data: RegistrationCreateManyVerifierInput | RegistrationCreateManyVerifierInput[]
    skipDuplicates?: boolean
  }

  export type PaymentLogCreateWithoutAdminInput = {
    action: $Enums.PaymentAction
    reason?: string | null
    timestamp?: Date | string
    registration: RegistrationCreateNestedOneWithoutPaymentLogsInput
  }

  export type PaymentLogUncheckedCreateWithoutAdminInput = {
    id?: number
    registrationId: number
    action: $Enums.PaymentAction
    reason?: string | null
    timestamp?: Date | string
  }

  export type PaymentLogCreateOrConnectWithoutAdminInput = {
    where: PaymentLogWhereUniqueInput
    create: XOR<PaymentLogCreateWithoutAdminInput, PaymentLogUncheckedCreateWithoutAdminInput>
  }

  export type PaymentLogCreateManyAdminInputEnvelope = {
    data: PaymentLogCreateManyAdminInput | PaymentLogCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type CheckInCreateWithoutAdminInput = {
    checkInTime?: Date | string
    checkInMethod: $Enums.CheckInMethod
    notes?: string | null
    registration: RegistrationCreateNestedOneWithoutCheckInsInput
  }

  export type CheckInUncheckedCreateWithoutAdminInput = {
    id?: number
    registrationId: number
    checkInTime?: Date | string
    checkInMethod: $Enums.CheckInMethod
    notes?: string | null
  }

  export type CheckInCreateOrConnectWithoutAdminInput = {
    where: CheckInWhereUniqueInput
    create: XOR<CheckInCreateWithoutAdminInput, CheckInUncheckedCreateWithoutAdminInput>
  }

  export type CheckInCreateManyAdminInputEnvelope = {
    data: CheckInCreateManyAdminInput | CheckInCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type RegistrationUpsertWithWhereUniqueWithoutVerifierInput = {
    where: RegistrationWhereUniqueInput
    update: XOR<RegistrationUpdateWithoutVerifierInput, RegistrationUncheckedUpdateWithoutVerifierInput>
    create: XOR<RegistrationCreateWithoutVerifierInput, RegistrationUncheckedCreateWithoutVerifierInput>
  }

  export type RegistrationUpdateWithWhereUniqueWithoutVerifierInput = {
    where: RegistrationWhereUniqueInput
    data: XOR<RegistrationUpdateWithoutVerifierInput, RegistrationUncheckedUpdateWithoutVerifierInput>
  }

  export type RegistrationUpdateManyWithWhereWithoutVerifierInput = {
    where: RegistrationScalarWhereInput
    data: XOR<RegistrationUpdateManyMutationInput, RegistrationUncheckedUpdateManyWithoutVerifierInput>
  }

  export type PaymentLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: PaymentLogWhereUniqueInput
    update: XOR<PaymentLogUpdateWithoutAdminInput, PaymentLogUncheckedUpdateWithoutAdminInput>
    create: XOR<PaymentLogCreateWithoutAdminInput, PaymentLogUncheckedCreateWithoutAdminInput>
  }

  export type PaymentLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: PaymentLogWhereUniqueInput
    data: XOR<PaymentLogUpdateWithoutAdminInput, PaymentLogUncheckedUpdateWithoutAdminInput>
  }

  export type PaymentLogUpdateManyWithWhereWithoutAdminInput = {
    where: PaymentLogScalarWhereInput
    data: XOR<PaymentLogUpdateManyMutationInput, PaymentLogUncheckedUpdateManyWithoutAdminInput>
  }

  export type CheckInUpsertWithWhereUniqueWithoutAdminInput = {
    where: CheckInWhereUniqueInput
    update: XOR<CheckInUpdateWithoutAdminInput, CheckInUncheckedUpdateWithoutAdminInput>
    create: XOR<CheckInCreateWithoutAdminInput, CheckInUncheckedCreateWithoutAdminInput>
  }

  export type CheckInUpdateWithWhereUniqueWithoutAdminInput = {
    where: CheckInWhereUniqueInput
    data: XOR<CheckInUpdateWithoutAdminInput, CheckInUncheckedUpdateWithoutAdminInput>
  }

  export type CheckInUpdateManyWithWhereWithoutAdminInput = {
    where: CheckInScalarWhereInput
    data: XOR<CheckInUpdateManyMutationInput, CheckInUncheckedUpdateManyWithoutAdminInput>
  }

  export type RegistrationCreateWithoutPaymentLogsInput = {
    ticketType: $Enums.TicketType
    ticketPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentProofPath?: string | null
    qrCode: string
    qrCodePath?: string | null
    registrationDate?: Date | string
    paymentVerifiedAt?: Date | string | null
    rejectionReason?: string | null
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    user: UserCreateNestedOneWithoutRegistrationsInput
    verifier?: AdminCreateNestedOneWithoutVerifiedRegistrationsInput
    checkIns?: CheckInCreateNestedManyWithoutRegistrationInput
  }

  export type RegistrationUncheckedCreateWithoutPaymentLogsInput = {
    id?: number
    userId: number
    ticketType: $Enums.TicketType
    ticketPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentProofPath?: string | null
    qrCode: string
    qrCodePath?: string | null
    registrationDate?: Date | string
    paymentVerifiedAt?: Date | string | null
    verifiedBy?: number | null
    rejectionReason?: string | null
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    checkIns?: CheckInUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type RegistrationCreateOrConnectWithoutPaymentLogsInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutPaymentLogsInput, RegistrationUncheckedCreateWithoutPaymentLogsInput>
  }

  export type AdminCreateWithoutPaymentLogsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
    verifiedRegistrations?: RegistrationCreateNestedManyWithoutVerifierInput
    checkIns?: CheckInCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutPaymentLogsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
    verifiedRegistrations?: RegistrationUncheckedCreateNestedManyWithoutVerifierInput
    checkIns?: CheckInUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutPaymentLogsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutPaymentLogsInput, AdminUncheckedCreateWithoutPaymentLogsInput>
  }

  export type RegistrationUpsertWithoutPaymentLogsInput = {
    update: XOR<RegistrationUpdateWithoutPaymentLogsInput, RegistrationUncheckedUpdateWithoutPaymentLogsInput>
    create: XOR<RegistrationCreateWithoutPaymentLogsInput, RegistrationUncheckedCreateWithoutPaymentLogsInput>
    where?: RegistrationWhereInput
  }

  export type RegistrationUpdateToOneWithWhereWithoutPaymentLogsInput = {
    where?: RegistrationWhereInput
    data: XOR<RegistrationUpdateWithoutPaymentLogsInput, RegistrationUncheckedUpdateWithoutPaymentLogsInput>
  }

  export type RegistrationUpdateWithoutPaymentLogsInput = {
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
    verifier?: AdminUpdateOneWithoutVerifiedRegistrationsNestedInput
    checkIns?: CheckInUpdateManyWithoutRegistrationNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutPaymentLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkIns?: CheckInUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type AdminUpsertWithoutPaymentLogsInput = {
    update: XOR<AdminUpdateWithoutPaymentLogsInput, AdminUncheckedUpdateWithoutPaymentLogsInput>
    create: XOR<AdminCreateWithoutPaymentLogsInput, AdminUncheckedCreateWithoutPaymentLogsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutPaymentLogsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutPaymentLogsInput, AdminUncheckedUpdateWithoutPaymentLogsInput>
  }

  export type AdminUpdateWithoutPaymentLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedRegistrations?: RegistrationUpdateManyWithoutVerifierNestedInput
    checkIns?: CheckInUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutPaymentLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedRegistrations?: RegistrationUncheckedUpdateManyWithoutVerifierNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type RegistrationCreateWithoutCheckInsInput = {
    ticketType: $Enums.TicketType
    ticketPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentProofPath?: string | null
    qrCode: string
    qrCodePath?: string | null
    registrationDate?: Date | string
    paymentVerifiedAt?: Date | string | null
    rejectionReason?: string | null
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    user: UserCreateNestedOneWithoutRegistrationsInput
    verifier?: AdminCreateNestedOneWithoutVerifiedRegistrationsInput
    paymentLogs?: PaymentLogCreateNestedManyWithoutRegistrationInput
  }

  export type RegistrationUncheckedCreateWithoutCheckInsInput = {
    id?: number
    userId: number
    ticketType: $Enums.TicketType
    ticketPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentProofPath?: string | null
    qrCode: string
    qrCodePath?: string | null
    registrationDate?: Date | string
    paymentVerifiedAt?: Date | string | null
    verifiedBy?: number | null
    rejectionReason?: string | null
    checkedIn?: boolean
    checkedInAt?: Date | string | null
    paymentLogs?: PaymentLogUncheckedCreateNestedManyWithoutRegistrationInput
  }

  export type RegistrationCreateOrConnectWithoutCheckInsInput = {
    where: RegistrationWhereUniqueInput
    create: XOR<RegistrationCreateWithoutCheckInsInput, RegistrationUncheckedCreateWithoutCheckInsInput>
  }

  export type AdminCreateWithoutCheckInsInput = {
    name: string
    email: string
    passwordHash: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
    verifiedRegistrations?: RegistrationCreateNestedManyWithoutVerifierInput
    paymentLogs?: PaymentLogCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutCheckInsInput = {
    id?: number
    name: string
    email: string
    passwordHash: string
    role: $Enums.AdminRole
    createdAt?: Date | string
    lastLogin?: Date | string | null
    verifiedRegistrations?: RegistrationUncheckedCreateNestedManyWithoutVerifierInput
    paymentLogs?: PaymentLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutCheckInsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutCheckInsInput, AdminUncheckedCreateWithoutCheckInsInput>
  }

  export type RegistrationUpsertWithoutCheckInsInput = {
    update: XOR<RegistrationUpdateWithoutCheckInsInput, RegistrationUncheckedUpdateWithoutCheckInsInput>
    create: XOR<RegistrationCreateWithoutCheckInsInput, RegistrationUncheckedCreateWithoutCheckInsInput>
    where?: RegistrationWhereInput
  }

  export type RegistrationUpdateToOneWithWhereWithoutCheckInsInput = {
    where?: RegistrationWhereInput
    data: XOR<RegistrationUpdateWithoutCheckInsInput, RegistrationUncheckedUpdateWithoutCheckInsInput>
  }

  export type RegistrationUpdateWithoutCheckInsInput = {
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
    verifier?: AdminUpdateOneWithoutVerifiedRegistrationsNestedInput
    paymentLogs?: PaymentLogUpdateManyWithoutRegistrationNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutCheckInsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentLogs?: PaymentLogUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type AdminUpsertWithoutCheckInsInput = {
    update: XOR<AdminUpdateWithoutCheckInsInput, AdminUncheckedUpdateWithoutCheckInsInput>
    create: XOR<AdminCreateWithoutCheckInsInput, AdminUncheckedCreateWithoutCheckInsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutCheckInsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutCheckInsInput, AdminUncheckedUpdateWithoutCheckInsInput>
  }

  export type AdminUpdateWithoutCheckInsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedRegistrations?: RegistrationUpdateManyWithoutVerifierNestedInput
    paymentLogs?: PaymentLogUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutCheckInsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumAdminRoleFieldUpdateOperationsInput | $Enums.AdminRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedRegistrations?: RegistrationUncheckedUpdateManyWithoutVerifierNestedInput
    paymentLogs?: PaymentLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type RegistrationCreateManyUserInput = {
    id?: number
    ticketType: $Enums.TicketType
    ticketPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentProofPath?: string | null
    qrCode: string
    qrCodePath?: string | null
    registrationDate?: Date | string
    paymentVerifiedAt?: Date | string | null
    verifiedBy?: number | null
    rejectionReason?: string | null
    checkedIn?: boolean
    checkedInAt?: Date | string | null
  }

  export type RegistrationUpdateWithoutUserInput = {
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifier?: AdminUpdateOneWithoutVerifiedRegistrationsNestedInput
    paymentLogs?: PaymentLogUpdateManyWithoutRegistrationNestedInput
    checkIns?: CheckInUpdateManyWithoutRegistrationNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentLogs?: PaymentLogUncheckedUpdateManyWithoutRegistrationNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type RegistrationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    verifiedBy?: NullableIntFieldUpdateOperationsInput | number | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentLogCreateManyRegistrationInput = {
    id?: number
    adminId: number
    action: $Enums.PaymentAction
    reason?: string | null
    timestamp?: Date | string
  }

  export type CheckInCreateManyRegistrationInput = {
    id?: number
    adminId: number
    checkInTime?: Date | string
    checkInMethod: $Enums.CheckInMethod
    notes?: string | null
  }

  export type PaymentLogUpdateWithoutRegistrationInput = {
    action?: EnumPaymentActionFieldUpdateOperationsInput | $Enums.PaymentAction
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutPaymentLogsNestedInput
  }

  export type PaymentLogUncheckedUpdateWithoutRegistrationInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    action?: EnumPaymentActionFieldUpdateOperationsInput | $Enums.PaymentAction
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLogUncheckedUpdateManyWithoutRegistrationInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    action?: EnumPaymentActionFieldUpdateOperationsInput | $Enums.PaymentAction
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUpdateWithoutRegistrationInput = {
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInMethod?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    admin?: AdminUpdateOneRequiredWithoutCheckInsNestedInput
  }

  export type CheckInUncheckedUpdateWithoutRegistrationInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInMethod?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckInUncheckedUpdateManyWithoutRegistrationInput = {
    id?: IntFieldUpdateOperationsInput | number
    adminId?: IntFieldUpdateOperationsInput | number
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInMethod?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistrationCreateManyVerifierInput = {
    id?: number
    userId: number
    ticketType: $Enums.TicketType
    ticketPrice: Decimal | DecimalJsLike | number | string
    paymentStatus?: $Enums.PaymentStatus
    paymentProofPath?: string | null
    qrCode: string
    qrCodePath?: string | null
    registrationDate?: Date | string
    paymentVerifiedAt?: Date | string | null
    rejectionReason?: string | null
    checkedIn?: boolean
    checkedInAt?: Date | string | null
  }

  export type PaymentLogCreateManyAdminInput = {
    id?: number
    registrationId: number
    action: $Enums.PaymentAction
    reason?: string | null
    timestamp?: Date | string
  }

  export type CheckInCreateManyAdminInput = {
    id?: number
    registrationId: number
    checkInTime?: Date | string
    checkInMethod: $Enums.CheckInMethod
    notes?: string | null
  }

  export type RegistrationUpdateWithoutVerifierInput = {
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutRegistrationsNestedInput
    paymentLogs?: PaymentLogUpdateManyWithoutRegistrationNestedInput
    checkIns?: CheckInUpdateManyWithoutRegistrationNestedInput
  }

  export type RegistrationUncheckedUpdateWithoutVerifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentLogs?: PaymentLogUncheckedUpdateManyWithoutRegistrationNestedInput
    checkIns?: CheckInUncheckedUpdateManyWithoutRegistrationNestedInput
  }

  export type RegistrationUncheckedUpdateManyWithoutVerifierInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ticketType?: EnumTicketTypeFieldUpdateOperationsInput | $Enums.TicketType
    ticketPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentProofPath?: NullableStringFieldUpdateOperationsInput | string | null
    qrCode?: StringFieldUpdateOperationsInput | string
    qrCodePath?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    checkedIn?: BoolFieldUpdateOperationsInput | boolean
    checkedInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentLogUpdateWithoutAdminInput = {
    action?: EnumPaymentActionFieldUpdateOperationsInput | $Enums.PaymentAction
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    registration?: RegistrationUpdateOneRequiredWithoutPaymentLogsNestedInput
  }

  export type PaymentLogUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationId?: IntFieldUpdateOperationsInput | number
    action?: EnumPaymentActionFieldUpdateOperationsInput | $Enums.PaymentAction
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLogUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationId?: IntFieldUpdateOperationsInput | number
    action?: EnumPaymentActionFieldUpdateOperationsInput | $Enums.PaymentAction
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInUpdateWithoutAdminInput = {
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInMethod?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    registration?: RegistrationUpdateOneRequiredWithoutCheckInsNestedInput
  }

  export type CheckInUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationId?: IntFieldUpdateOperationsInput | number
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInMethod?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CheckInUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    registrationId?: IntFieldUpdateOperationsInput | number
    checkInTime?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInMethod?: EnumCheckInMethodFieldUpdateOperationsInput | $Enums.CheckInMethod
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegistrationCountOutputTypeDefaultArgs instead
     */
    export type RegistrationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegistrationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminCountOutputTypeDefaultArgs instead
     */
    export type AdminCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RegistrationDefaultArgs instead
     */
    export type RegistrationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RegistrationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentLogDefaultArgs instead
     */
    export type PaymentLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CheckInDefaultArgs instead
     */
    export type CheckInArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CheckInDefaultArgs<ExtArgs>

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