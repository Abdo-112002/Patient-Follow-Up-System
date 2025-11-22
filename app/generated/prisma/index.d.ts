
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
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Companion
 * 
 */
export type Companion = $Result.DefaultSelection<Prisma.$CompanionPayload>
/**
 * Model Visit
 * 
 */
export type Visit = $Result.DefaultSelection<Prisma.$VisitPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companion`: Exposes CRUD operations for the **Companion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companions
    * const companions = await prisma.companion.findMany()
    * ```
    */
  get companion(): Prisma.CompanionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visit`: Exposes CRUD operations for the **Visit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visits
    * const visits = await prisma.visit.findMany()
    * ```
    */
  get visit(): Prisma.VisitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Patient: 'Patient',
    Companion: 'Companion',
    Visit: 'Visit',
    Appointment: 'Appointment'
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
      modelProps: "user" | "patient" | "companion" | "visit" | "appointment"
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
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Companion: {
        payload: Prisma.$CompanionPayload<ExtArgs>
        fields: Prisma.CompanionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          findFirst: {
            args: Prisma.CompanionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          findMany: {
            args: Prisma.CompanionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>[]
          }
          create: {
            args: Prisma.CompanionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          createMany: {
            args: Prisma.CompanionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompanionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          update: {
            args: Prisma.CompanionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          deleteMany: {
            args: Prisma.CompanionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanionPayload>
          }
          aggregate: {
            args: Prisma.CompanionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanion>
          }
          groupBy: {
            args: Prisma.CompanionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanionCountArgs<ExtArgs>
            result: $Utils.Optional<CompanionCountAggregateOutputType> | number
          }
        }
      }
      Visit: {
        payload: Prisma.$VisitPayload<ExtArgs>
        fields: Prisma.VisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          findFirst: {
            args: Prisma.VisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          findMany: {
            args: Prisma.VisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>[]
          }
          create: {
            args: Prisma.VisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          createMany: {
            args: Prisma.VisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          update: {
            args: Prisma.VisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          deleteMany: {
            args: Prisma.VisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VisitPayload>
          }
          aggregate: {
            args: Prisma.VisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisit>
          }
          groupBy: {
            args: Prisma.VisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.VisitCountArgs<ExtArgs>
            result: $Utils.Optional<VisitCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    patient?: PatientOmit
    companion?: CompanionOmit
    visit?: VisitOmit
    appointment?: AppointmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    companions: number
    visits: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companions?: boolean | PatientCountOutputTypeCountCompanionsArgs
    visits?: boolean | PatientCountOutputTypeCountVisitsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountCompanionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput
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
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
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
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
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
    email: string
    password: string
    name: string | null
    role: $Enums.Role
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
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    id: number | null
    patientStatus: number | null
  }

  export type PatientSumAggregateOutputType = {
    id: number | null
    patientStatus: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: number | null
    patientName: string | null
    age: string | null
    patientStatus: number | null
    gender: string | null
    fileOpenDate: Date | null
    idNumber: string | null
    birthDate: Date | null
    phoneNumber: string | null
    address: string | null
    province: string | null
    maritalStatus: string | null
    salary: string | null
    occupation: string | null
    educationLevel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: number | null
    patientName: string | null
    age: string | null
    patientStatus: number | null
    gender: string | null
    fileOpenDate: Date | null
    idNumber: string | null
    birthDate: Date | null
    phoneNumber: string | null
    address: string | null
    province: string | null
    maritalStatus: string | null
    salary: string | null
    occupation: string | null
    educationLevel: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    patientName: number
    age: number
    patientStatus: number
    gender: number
    fileOpenDate: number
    idNumber: number
    birthDate: number
    phoneNumber: number
    address: number
    province: number
    maritalStatus: number
    salary: number
    occupation: number
    educationLevel: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    id?: true
    patientStatus?: true
  }

  export type PatientSumAggregateInputType = {
    id?: true
    patientStatus?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    patientName?: true
    age?: true
    patientStatus?: true
    gender?: true
    fileOpenDate?: true
    idNumber?: true
    birthDate?: true
    phoneNumber?: true
    address?: true
    province?: true
    maritalStatus?: true
    salary?: true
    occupation?: true
    educationLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    patientName?: true
    age?: true
    patientStatus?: true
    gender?: true
    fileOpenDate?: true
    idNumber?: true
    birthDate?: true
    phoneNumber?: true
    address?: true
    province?: true
    maritalStatus?: true
    salary?: true
    occupation?: true
    educationLevel?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    patientName?: true
    age?: true
    patientStatus?: true
    gender?: true
    fileOpenDate?: true
    idNumber?: true
    birthDate?: true
    phoneNumber?: true
    address?: true
    province?: true
    maritalStatus?: true
    salary?: true
    occupation?: true
    educationLevel?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: number
    patientName: string
    age: string
    patientStatus: number
    gender: string
    fileOpenDate: Date
    idNumber: string
    birthDate: Date
    phoneNumber: string
    address: string
    province: string
    maritalStatus: string
    salary: string | null
    occupation: string | null
    educationLevel: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientName?: boolean
    age?: boolean
    patientStatus?: boolean
    gender?: boolean
    fileOpenDate?: boolean
    idNumber?: boolean
    birthDate?: boolean
    phoneNumber?: boolean
    address?: boolean
    province?: boolean
    maritalStatus?: boolean
    salary?: boolean
    occupation?: boolean
    educationLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companions?: boolean | Patient$companionsArgs<ExtArgs>
    visits?: boolean | Patient$visitsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>



  export type PatientSelectScalar = {
    id?: boolean
    patientName?: boolean
    age?: boolean
    patientStatus?: boolean
    gender?: boolean
    fileOpenDate?: boolean
    idNumber?: boolean
    birthDate?: boolean
    phoneNumber?: boolean
    address?: boolean
    province?: boolean
    maritalStatus?: boolean
    salary?: boolean
    occupation?: boolean
    educationLevel?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientName" | "age" | "patientStatus" | "gender" | "fileOpenDate" | "idNumber" | "birthDate" | "phoneNumber" | "address" | "province" | "maritalStatus" | "salary" | "occupation" | "educationLevel" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companions?: boolean | Patient$companionsArgs<ExtArgs>
    visits?: boolean | Patient$visitsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      companions: Prisma.$CompanionPayload<ExtArgs>[]
      visits: Prisma.$VisitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      patientName: string
      age: string
      patientStatus: number
      gender: string
      fileOpenDate: Date
      idNumber: string
      birthDate: Date
      phoneNumber: string
      address: string
      province: string
      maritalStatus: string
      salary: string | null
      occupation: string | null
      educationLevel: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companions<T extends Patient$companionsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$companionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    visits<T extends Patient$visitsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$visitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'Int'>
    readonly patientName: FieldRef<"Patient", 'String'>
    readonly age: FieldRef<"Patient", 'String'>
    readonly patientStatus: FieldRef<"Patient", 'Int'>
    readonly gender: FieldRef<"Patient", 'String'>
    readonly fileOpenDate: FieldRef<"Patient", 'DateTime'>
    readonly idNumber: FieldRef<"Patient", 'String'>
    readonly birthDate: FieldRef<"Patient", 'DateTime'>
    readonly phoneNumber: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly province: FieldRef<"Patient", 'String'>
    readonly maritalStatus: FieldRef<"Patient", 'String'>
    readonly salary: FieldRef<"Patient", 'String'>
    readonly occupation: FieldRef<"Patient", 'String'>
    readonly educationLevel: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.companions
   */
  export type Patient$companionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    where?: CompanionWhereInput
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    cursor?: CompanionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanionScalarFieldEnum | CompanionScalarFieldEnum[]
  }

  /**
   * Patient.visits
   */
  export type Patient$visitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    where?: VisitWhereInput
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    cursor?: VisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Companion
   */

  export type AggregateCompanion = {
    _count: CompanionCountAggregateOutputType | null
    _avg: CompanionAvgAggregateOutputType | null
    _sum: CompanionSumAggregateOutputType | null
    _min: CompanionMinAggregateOutputType | null
    _max: CompanionMaxAggregateOutputType | null
  }

  export type CompanionAvgAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type CompanionSumAggregateOutputType = {
    id: number | null
    patientId: number | null
  }

  export type CompanionMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    relationship: string | null
    patientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    relationship: string | null
    patientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanionCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    relationship: number
    patientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanionAvgAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type CompanionSumAggregateInputType = {
    id?: true
    patientId?: true
  }

  export type CompanionMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    relationship?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanionMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    relationship?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanionCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    relationship?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companion to aggregate.
     */
    where?: CompanionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companions to fetch.
     */
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companions
    **/
    _count?: true | CompanionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanionMaxAggregateInputType
  }

  export type GetCompanionAggregateType<T extends CompanionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanion[P]>
      : GetScalarType<T[P], AggregateCompanion[P]>
  }




  export type CompanionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanionWhereInput
    orderBy?: CompanionOrderByWithAggregationInput | CompanionOrderByWithAggregationInput[]
    by: CompanionScalarFieldEnum[] | CompanionScalarFieldEnum
    having?: CompanionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanionCountAggregateInputType | true
    _avg?: CompanionAvgAggregateInputType
    _sum?: CompanionSumAggregateInputType
    _min?: CompanionMinAggregateInputType
    _max?: CompanionMaxAggregateInputType
  }

  export type CompanionGroupByOutputType = {
    id: number
    name: string
    phone: string
    relationship: string
    patientId: number
    createdAt: Date
    updatedAt: Date
    _count: CompanionCountAggregateOutputType | null
    _avg: CompanionAvgAggregateOutputType | null
    _sum: CompanionSumAggregateOutputType | null
    _min: CompanionMinAggregateOutputType | null
    _max: CompanionMaxAggregateOutputType | null
  }

  type GetCompanionGroupByPayload<T extends CompanionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanionGroupByOutputType[P]>
            : GetScalarType<T[P], CompanionGroupByOutputType[P]>
        }
      >
    >


  export type CompanionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    relationship?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companion"]>



  export type CompanionSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    relationship?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "relationship" | "patientId" | "createdAt" | "updatedAt", ExtArgs["result"]["companion"]>
  export type CompanionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $CompanionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Companion"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      relationship: string
      patientId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["companion"]>
    composites: {}
  }

  type CompanionGetPayload<S extends boolean | null | undefined | CompanionDefaultArgs> = $Result.GetResult<Prisma.$CompanionPayload, S>

  type CompanionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanionCountAggregateInputType | true
    }

  export interface CompanionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Companion'], meta: { name: 'Companion' } }
    /**
     * Find zero or one Companion that matches the filter.
     * @param {CompanionFindUniqueArgs} args - Arguments to find a Companion
     * @example
     * // Get one Companion
     * const companion = await prisma.companion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanionFindUniqueArgs>(args: SelectSubset<T, CompanionFindUniqueArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanionFindUniqueOrThrowArgs} args - Arguments to find a Companion
     * @example
     * // Get one Companion
     * const companion = await prisma.companion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionFindFirstArgs} args - Arguments to find a Companion
     * @example
     * // Get one Companion
     * const companion = await prisma.companion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanionFindFirstArgs>(args?: SelectSubset<T, CompanionFindFirstArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionFindFirstOrThrowArgs} args - Arguments to find a Companion
     * @example
     * // Get one Companion
     * const companion = await prisma.companion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companions
     * const companions = await prisma.companion.findMany()
     * 
     * // Get first 10 Companions
     * const companions = await prisma.companion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companionWithIdOnly = await prisma.companion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanionFindManyArgs>(args?: SelectSubset<T, CompanionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companion.
     * @param {CompanionCreateArgs} args - Arguments to create a Companion.
     * @example
     * // Create one Companion
     * const Companion = await prisma.companion.create({
     *   data: {
     *     // ... data to create a Companion
     *   }
     * })
     * 
     */
    create<T extends CompanionCreateArgs>(args: SelectSubset<T, CompanionCreateArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companions.
     * @param {CompanionCreateManyArgs} args - Arguments to create many Companions.
     * @example
     * // Create many Companions
     * const companion = await prisma.companion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanionCreateManyArgs>(args?: SelectSubset<T, CompanionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Companion.
     * @param {CompanionDeleteArgs} args - Arguments to delete one Companion.
     * @example
     * // Delete one Companion
     * const Companion = await prisma.companion.delete({
     *   where: {
     *     // ... filter to delete one Companion
     *   }
     * })
     * 
     */
    delete<T extends CompanionDeleteArgs>(args: SelectSubset<T, CompanionDeleteArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companion.
     * @param {CompanionUpdateArgs} args - Arguments to update one Companion.
     * @example
     * // Update one Companion
     * const companion = await prisma.companion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanionUpdateArgs>(args: SelectSubset<T, CompanionUpdateArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companions.
     * @param {CompanionDeleteManyArgs} args - Arguments to filter Companions to delete.
     * @example
     * // Delete a few Companions
     * const { count } = await prisma.companion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanionDeleteManyArgs>(args?: SelectSubset<T, CompanionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companions
     * const companion = await prisma.companion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanionUpdateManyArgs>(args: SelectSubset<T, CompanionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Companion.
     * @param {CompanionUpsertArgs} args - Arguments to update or create a Companion.
     * @example
     * // Update or create a Companion
     * const companion = await prisma.companion.upsert({
     *   create: {
     *     // ... data to create a Companion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companion we want to update
     *   }
     * })
     */
    upsert<T extends CompanionUpsertArgs>(args: SelectSubset<T, CompanionUpsertArgs<ExtArgs>>): Prisma__CompanionClient<$Result.GetResult<Prisma.$CompanionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionCountArgs} args - Arguments to filter Companions to count.
     * @example
     * // Count the number of Companions
     * const count = await prisma.companion.count({
     *   where: {
     *     // ... the filter for the Companions we want to count
     *   }
     * })
    **/
    count<T extends CompanionCountArgs>(
      args?: Subset<T, CompanionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanionAggregateArgs>(args: Subset<T, CompanionAggregateArgs>): Prisma.PrismaPromise<GetCompanionAggregateType<T>>

    /**
     * Group by Companion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanionGroupByArgs} args - Group by arguments.
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
      T extends CompanionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanionGroupByArgs['orderBy'] }
        : { orderBy?: CompanionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Companion model
   */
  readonly fields: CompanionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Companion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Companion model
   */
  interface CompanionFieldRefs {
    readonly id: FieldRef<"Companion", 'Int'>
    readonly name: FieldRef<"Companion", 'String'>
    readonly phone: FieldRef<"Companion", 'String'>
    readonly relationship: FieldRef<"Companion", 'String'>
    readonly patientId: FieldRef<"Companion", 'Int'>
    readonly createdAt: FieldRef<"Companion", 'DateTime'>
    readonly updatedAt: FieldRef<"Companion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Companion findUnique
   */
  export type CompanionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companion to fetch.
     */
    where: CompanionWhereUniqueInput
  }

  /**
   * Companion findUniqueOrThrow
   */
  export type CompanionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companion to fetch.
     */
    where: CompanionWhereUniqueInput
  }

  /**
   * Companion findFirst
   */
  export type CompanionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companion to fetch.
     */
    where?: CompanionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companions to fetch.
     */
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companions.
     */
    cursor?: CompanionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companions.
     */
    distinct?: CompanionScalarFieldEnum | CompanionScalarFieldEnum[]
  }

  /**
   * Companion findFirstOrThrow
   */
  export type CompanionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companion to fetch.
     */
    where?: CompanionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companions to fetch.
     */
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companions.
     */
    cursor?: CompanionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companions.
     */
    distinct?: CompanionScalarFieldEnum | CompanionScalarFieldEnum[]
  }

  /**
   * Companion findMany
   */
  export type CompanionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter, which Companions to fetch.
     */
    where?: CompanionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companions to fetch.
     */
    orderBy?: CompanionOrderByWithRelationInput | CompanionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companions.
     */
    cursor?: CompanionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companions.
     */
    skip?: number
    distinct?: CompanionScalarFieldEnum | CompanionScalarFieldEnum[]
  }

  /**
   * Companion create
   */
  export type CompanionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * The data needed to create a Companion.
     */
    data: XOR<CompanionCreateInput, CompanionUncheckedCreateInput>
  }

  /**
   * Companion createMany
   */
  export type CompanionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companions.
     */
    data: CompanionCreateManyInput | CompanionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Companion update
   */
  export type CompanionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * The data needed to update a Companion.
     */
    data: XOR<CompanionUpdateInput, CompanionUncheckedUpdateInput>
    /**
     * Choose, which Companion to update.
     */
    where: CompanionWhereUniqueInput
  }

  /**
   * Companion updateMany
   */
  export type CompanionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companions.
     */
    data: XOR<CompanionUpdateManyMutationInput, CompanionUncheckedUpdateManyInput>
    /**
     * Filter which Companions to update
     */
    where?: CompanionWhereInput
    /**
     * Limit how many Companions to update.
     */
    limit?: number
  }

  /**
   * Companion upsert
   */
  export type CompanionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * The filter to search for the Companion to update in case it exists.
     */
    where: CompanionWhereUniqueInput
    /**
     * In case the Companion found by the `where` argument doesn't exist, create a new Companion with this data.
     */
    create: XOR<CompanionCreateInput, CompanionUncheckedCreateInput>
    /**
     * In case the Companion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanionUpdateInput, CompanionUncheckedUpdateInput>
  }

  /**
   * Companion delete
   */
  export type CompanionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
    /**
     * Filter which Companion to delete.
     */
    where: CompanionWhereUniqueInput
  }

  /**
   * Companion deleteMany
   */
  export type CompanionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companions to delete
     */
    where?: CompanionWhereInput
    /**
     * Limit how many Companions to delete.
     */
    limit?: number
  }

  /**
   * Companion without action
   */
  export type CompanionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companion
     */
    select?: CompanionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companion
     */
    omit?: CompanionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanionInclude<ExtArgs> | null
  }


  /**
   * Model Visit
   */

  export type AggregateVisit = {
    _count: VisitCountAggregateOutputType | null
    _avg: VisitAvgAggregateOutputType | null
    _sum: VisitSumAggregateOutputType | null
    _min: VisitMinAggregateOutputType | null
    _max: VisitMaxAggregateOutputType | null
  }

  export type VisitAvgAggregateOutputType = {
    id: number | null
    painLevel: number | null
    fatigue: number | null
    drowsiness: number | null
    nausea: number | null
    appetiteLoss: number | null
    shortnessOfBreath: number | null
    depression: number | null
    generalHealth: number | null
    exhaustion: number | null
    patientId: number | null
  }

  export type VisitSumAggregateOutputType = {
    id: number | null
    painLevel: number | null
    fatigue: number | null
    drowsiness: number | null
    nausea: number | null
    appetiteLoss: number | null
    shortnessOfBreath: number | null
    depression: number | null
    generalHealth: number | null
    exhaustion: number | null
    patientId: number | null
  }

  export type VisitMinAggregateOutputType = {
    id: number | null
    visitDate: Date | null
    visitTime: string | null
    painLevel: number | null
    fatigue: number | null
    drowsiness: number | null
    nausea: number | null
    appetiteLoss: number | null
    shortnessOfBreath: number | null
    depression: number | null
    generalHealth: number | null
    exhaustion: number | null
    providedService: string | null
    serviceType: string | null
    psychologicalSupport: string | null
    nutrition: string | null
    mobilityStatus: string | null
    relationWithFamily: string | null
    need_psychological: boolean | null
    need_occupational_therapy: boolean | null
    need_hospital_transfer: boolean | null
    need_artificial_nutrition: boolean | null
    need_assistive_devices: boolean | null
    need_air_mattress: boolean | null
    need_physiotherapy: boolean | null
    need_specialist_consult: boolean | null
    need_hygiene_pads: boolean | null
    need_urinary_catheter: boolean | null
    need_oxygen_device: boolean | null
    need_social_support: string | null
    need_home_adaptation: string | null
    need_legal_consult: string | null
    need_caregiver_training: string | null
    notes: string | null
    improvedSinceLastVisit: string | null
    previousVisitRecommendations: string | null
    nextVisitDate: Date | null
    nextVisitType: string | null
    status: string | null
    patientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitMaxAggregateOutputType = {
    id: number | null
    visitDate: Date | null
    visitTime: string | null
    painLevel: number | null
    fatigue: number | null
    drowsiness: number | null
    nausea: number | null
    appetiteLoss: number | null
    shortnessOfBreath: number | null
    depression: number | null
    generalHealth: number | null
    exhaustion: number | null
    providedService: string | null
    serviceType: string | null
    psychologicalSupport: string | null
    nutrition: string | null
    mobilityStatus: string | null
    relationWithFamily: string | null
    need_psychological: boolean | null
    need_occupational_therapy: boolean | null
    need_hospital_transfer: boolean | null
    need_artificial_nutrition: boolean | null
    need_assistive_devices: boolean | null
    need_air_mattress: boolean | null
    need_physiotherapy: boolean | null
    need_specialist_consult: boolean | null
    need_hygiene_pads: boolean | null
    need_urinary_catheter: boolean | null
    need_oxygen_device: boolean | null
    need_social_support: string | null
    need_home_adaptation: string | null
    need_legal_consult: string | null
    need_caregiver_training: string | null
    notes: string | null
    improvedSinceLastVisit: string | null
    previousVisitRecommendations: string | null
    nextVisitDate: Date | null
    nextVisitType: string | null
    status: string | null
    patientId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VisitCountAggregateOutputType = {
    id: number
    visitDate: number
    visitTime: number
    painLevel: number
    fatigue: number
    drowsiness: number
    nausea: number
    appetiteLoss: number
    shortnessOfBreath: number
    depression: number
    generalHealth: number
    exhaustion: number
    providedService: number
    serviceType: number
    psychologicalSupport: number
    nutrition: number
    mobilityStatus: number
    relationWithFamily: number
    need_psychological: number
    need_occupational_therapy: number
    need_hospital_transfer: number
    need_artificial_nutrition: number
    need_assistive_devices: number
    need_air_mattress: number
    need_physiotherapy: number
    need_specialist_consult: number
    need_hygiene_pads: number
    need_urinary_catheter: number
    need_oxygen_device: number
    need_social_support: number
    need_home_adaptation: number
    need_legal_consult: number
    need_caregiver_training: number
    notes: number
    improvedSinceLastVisit: number
    previousVisitRecommendations: number
    nextVisitDate: number
    nextVisitType: number
    status: number
    patientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VisitAvgAggregateInputType = {
    id?: true
    painLevel?: true
    fatigue?: true
    drowsiness?: true
    nausea?: true
    appetiteLoss?: true
    shortnessOfBreath?: true
    depression?: true
    generalHealth?: true
    exhaustion?: true
    patientId?: true
  }

  export type VisitSumAggregateInputType = {
    id?: true
    painLevel?: true
    fatigue?: true
    drowsiness?: true
    nausea?: true
    appetiteLoss?: true
    shortnessOfBreath?: true
    depression?: true
    generalHealth?: true
    exhaustion?: true
    patientId?: true
  }

  export type VisitMinAggregateInputType = {
    id?: true
    visitDate?: true
    visitTime?: true
    painLevel?: true
    fatigue?: true
    drowsiness?: true
    nausea?: true
    appetiteLoss?: true
    shortnessOfBreath?: true
    depression?: true
    generalHealth?: true
    exhaustion?: true
    providedService?: true
    serviceType?: true
    psychologicalSupport?: true
    nutrition?: true
    mobilityStatus?: true
    relationWithFamily?: true
    need_psychological?: true
    need_occupational_therapy?: true
    need_hospital_transfer?: true
    need_artificial_nutrition?: true
    need_assistive_devices?: true
    need_air_mattress?: true
    need_physiotherapy?: true
    need_specialist_consult?: true
    need_hygiene_pads?: true
    need_urinary_catheter?: true
    need_oxygen_device?: true
    need_social_support?: true
    need_home_adaptation?: true
    need_legal_consult?: true
    need_caregiver_training?: true
    notes?: true
    improvedSinceLastVisit?: true
    previousVisitRecommendations?: true
    nextVisitDate?: true
    nextVisitType?: true
    status?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitMaxAggregateInputType = {
    id?: true
    visitDate?: true
    visitTime?: true
    painLevel?: true
    fatigue?: true
    drowsiness?: true
    nausea?: true
    appetiteLoss?: true
    shortnessOfBreath?: true
    depression?: true
    generalHealth?: true
    exhaustion?: true
    providedService?: true
    serviceType?: true
    psychologicalSupport?: true
    nutrition?: true
    mobilityStatus?: true
    relationWithFamily?: true
    need_psychological?: true
    need_occupational_therapy?: true
    need_hospital_transfer?: true
    need_artificial_nutrition?: true
    need_assistive_devices?: true
    need_air_mattress?: true
    need_physiotherapy?: true
    need_specialist_consult?: true
    need_hygiene_pads?: true
    need_urinary_catheter?: true
    need_oxygen_device?: true
    need_social_support?: true
    need_home_adaptation?: true
    need_legal_consult?: true
    need_caregiver_training?: true
    notes?: true
    improvedSinceLastVisit?: true
    previousVisitRecommendations?: true
    nextVisitDate?: true
    nextVisitType?: true
    status?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VisitCountAggregateInputType = {
    id?: true
    visitDate?: true
    visitTime?: true
    painLevel?: true
    fatigue?: true
    drowsiness?: true
    nausea?: true
    appetiteLoss?: true
    shortnessOfBreath?: true
    depression?: true
    generalHealth?: true
    exhaustion?: true
    providedService?: true
    serviceType?: true
    psychologicalSupport?: true
    nutrition?: true
    mobilityStatus?: true
    relationWithFamily?: true
    need_psychological?: true
    need_occupational_therapy?: true
    need_hospital_transfer?: true
    need_artificial_nutrition?: true
    need_assistive_devices?: true
    need_air_mattress?: true
    need_physiotherapy?: true
    need_specialist_consult?: true
    need_hygiene_pads?: true
    need_urinary_catheter?: true
    need_oxygen_device?: true
    need_social_support?: true
    need_home_adaptation?: true
    need_legal_consult?: true
    need_caregiver_training?: true
    notes?: true
    improvedSinceLastVisit?: true
    previousVisitRecommendations?: true
    nextVisitDate?: true
    nextVisitType?: true
    status?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visit to aggregate.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Visits
    **/
    _count?: true | VisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitMaxAggregateInputType
  }

  export type GetVisitAggregateType<T extends VisitAggregateArgs> = {
        [P in keyof T & keyof AggregateVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisit[P]>
      : GetScalarType<T[P], AggregateVisit[P]>
  }




  export type VisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VisitWhereInput
    orderBy?: VisitOrderByWithAggregationInput | VisitOrderByWithAggregationInput[]
    by: VisitScalarFieldEnum[] | VisitScalarFieldEnum
    having?: VisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitCountAggregateInputType | true
    _avg?: VisitAvgAggregateInputType
    _sum?: VisitSumAggregateInputType
    _min?: VisitMinAggregateInputType
    _max?: VisitMaxAggregateInputType
  }

  export type VisitGroupByOutputType = {
    id: number
    visitDate: Date
    visitTime: string | null
    painLevel: number | null
    fatigue: number | null
    drowsiness: number | null
    nausea: number | null
    appetiteLoss: number | null
    shortnessOfBreath: number | null
    depression: number | null
    generalHealth: number | null
    exhaustion: number | null
    providedService: string | null
    serviceType: string | null
    psychologicalSupport: string | null
    nutrition: string | null
    mobilityStatus: string | null
    relationWithFamily: string | null
    need_psychological: boolean | null
    need_occupational_therapy: boolean | null
    need_hospital_transfer: boolean | null
    need_artificial_nutrition: boolean | null
    need_assistive_devices: boolean | null
    need_air_mattress: boolean | null
    need_physiotherapy: boolean | null
    need_specialist_consult: boolean | null
    need_hygiene_pads: boolean | null
    need_urinary_catheter: boolean | null
    need_oxygen_device: boolean | null
    need_social_support: string | null
    need_home_adaptation: string | null
    need_legal_consult: string | null
    need_caregiver_training: string | null
    notes: string | null
    improvedSinceLastVisit: string | null
    previousVisitRecommendations: string | null
    nextVisitDate: Date | null
    nextVisitType: string | null
    status: string
    patientId: number
    createdAt: Date
    updatedAt: Date
    _count: VisitCountAggregateOutputType | null
    _avg: VisitAvgAggregateOutputType | null
    _sum: VisitSumAggregateOutputType | null
    _min: VisitMinAggregateOutputType | null
    _max: VisitMaxAggregateOutputType | null
  }

  type GetVisitGroupByPayload<T extends VisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitGroupByOutputType[P]>
            : GetScalarType<T[P], VisitGroupByOutputType[P]>
        }
      >
    >


  export type VisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    visitDate?: boolean
    visitTime?: boolean
    painLevel?: boolean
    fatigue?: boolean
    drowsiness?: boolean
    nausea?: boolean
    appetiteLoss?: boolean
    shortnessOfBreath?: boolean
    depression?: boolean
    generalHealth?: boolean
    exhaustion?: boolean
    providedService?: boolean
    serviceType?: boolean
    psychologicalSupport?: boolean
    nutrition?: boolean
    mobilityStatus?: boolean
    relationWithFamily?: boolean
    need_psychological?: boolean
    need_occupational_therapy?: boolean
    need_hospital_transfer?: boolean
    need_artificial_nutrition?: boolean
    need_assistive_devices?: boolean
    need_air_mattress?: boolean
    need_physiotherapy?: boolean
    need_specialist_consult?: boolean
    need_hygiene_pads?: boolean
    need_urinary_catheter?: boolean
    need_oxygen_device?: boolean
    need_social_support?: boolean
    need_home_adaptation?: boolean
    need_legal_consult?: boolean
    need_caregiver_training?: boolean
    notes?: boolean
    improvedSinceLastVisit?: boolean
    previousVisitRecommendations?: boolean
    nextVisitDate?: boolean
    nextVisitType?: boolean
    status?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["visit"]>



  export type VisitSelectScalar = {
    id?: boolean
    visitDate?: boolean
    visitTime?: boolean
    painLevel?: boolean
    fatigue?: boolean
    drowsiness?: boolean
    nausea?: boolean
    appetiteLoss?: boolean
    shortnessOfBreath?: boolean
    depression?: boolean
    generalHealth?: boolean
    exhaustion?: boolean
    providedService?: boolean
    serviceType?: boolean
    psychologicalSupport?: boolean
    nutrition?: boolean
    mobilityStatus?: boolean
    relationWithFamily?: boolean
    need_psychological?: boolean
    need_occupational_therapy?: boolean
    need_hospital_transfer?: boolean
    need_artificial_nutrition?: boolean
    need_assistive_devices?: boolean
    need_air_mattress?: boolean
    need_physiotherapy?: boolean
    need_specialist_consult?: boolean
    need_hygiene_pads?: boolean
    need_urinary_catheter?: boolean
    need_oxygen_device?: boolean
    need_social_support?: boolean
    need_home_adaptation?: boolean
    need_legal_consult?: boolean
    need_caregiver_training?: boolean
    notes?: boolean
    improvedSinceLastVisit?: boolean
    previousVisitRecommendations?: boolean
    nextVisitDate?: boolean
    nextVisitType?: boolean
    status?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VisitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "visitDate" | "visitTime" | "painLevel" | "fatigue" | "drowsiness" | "nausea" | "appetiteLoss" | "shortnessOfBreath" | "depression" | "generalHealth" | "exhaustion" | "providedService" | "serviceType" | "psychologicalSupport" | "nutrition" | "mobilityStatus" | "relationWithFamily" | "need_psychological" | "need_occupational_therapy" | "need_hospital_transfer" | "need_artificial_nutrition" | "need_assistive_devices" | "need_air_mattress" | "need_physiotherapy" | "need_specialist_consult" | "need_hygiene_pads" | "need_urinary_catheter" | "need_oxygen_device" | "need_social_support" | "need_home_adaptation" | "need_legal_consult" | "need_caregiver_training" | "notes" | "improvedSinceLastVisit" | "previousVisitRecommendations" | "nextVisitDate" | "nextVisitType" | "status" | "patientId" | "createdAt" | "updatedAt", ExtArgs["result"]["visit"]>
  export type VisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $VisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Visit"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      visitDate: Date
      visitTime: string | null
      painLevel: number | null
      fatigue: number | null
      drowsiness: number | null
      nausea: number | null
      appetiteLoss: number | null
      shortnessOfBreath: number | null
      depression: number | null
      generalHealth: number | null
      exhaustion: number | null
      providedService: string | null
      serviceType: string | null
      psychologicalSupport: string | null
      nutrition: string | null
      mobilityStatus: string | null
      relationWithFamily: string | null
      need_psychological: boolean | null
      need_occupational_therapy: boolean | null
      need_hospital_transfer: boolean | null
      need_artificial_nutrition: boolean | null
      need_assistive_devices: boolean | null
      need_air_mattress: boolean | null
      need_physiotherapy: boolean | null
      need_specialist_consult: boolean | null
      need_hygiene_pads: boolean | null
      need_urinary_catheter: boolean | null
      need_oxygen_device: boolean | null
      need_social_support: string | null
      need_home_adaptation: string | null
      need_legal_consult: string | null
      need_caregiver_training: string | null
      notes: string | null
      improvedSinceLastVisit: string | null
      previousVisitRecommendations: string | null
      nextVisitDate: Date | null
      nextVisitType: string | null
      status: string
      patientId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["visit"]>
    composites: {}
  }

  type VisitGetPayload<S extends boolean | null | undefined | VisitDefaultArgs> = $Result.GetResult<Prisma.$VisitPayload, S>

  type VisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VisitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitCountAggregateInputType | true
    }

  export interface VisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Visit'], meta: { name: 'Visit' } }
    /**
     * Find zero or one Visit that matches the filter.
     * @param {VisitFindUniqueArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VisitFindUniqueArgs>(args: SelectSubset<T, VisitFindUniqueArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VisitFindUniqueOrThrowArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VisitFindUniqueOrThrowArgs>(args: SelectSubset<T, VisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindFirstArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VisitFindFirstArgs>(args?: SelectSubset<T, VisitFindFirstArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindFirstOrThrowArgs} args - Arguments to find a Visit
     * @example
     * // Get one Visit
     * const visit = await prisma.visit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VisitFindFirstOrThrowArgs>(args?: SelectSubset<T, VisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visits
     * const visits = await prisma.visit.findMany()
     * 
     * // Get first 10 Visits
     * const visits = await prisma.visit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitWithIdOnly = await prisma.visit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VisitFindManyArgs>(args?: SelectSubset<T, VisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visit.
     * @param {VisitCreateArgs} args - Arguments to create a Visit.
     * @example
     * // Create one Visit
     * const Visit = await prisma.visit.create({
     *   data: {
     *     // ... data to create a Visit
     *   }
     * })
     * 
     */
    create<T extends VisitCreateArgs>(args: SelectSubset<T, VisitCreateArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visits.
     * @param {VisitCreateManyArgs} args - Arguments to create many Visits.
     * @example
     * // Create many Visits
     * const visit = await prisma.visit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VisitCreateManyArgs>(args?: SelectSubset<T, VisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Visit.
     * @param {VisitDeleteArgs} args - Arguments to delete one Visit.
     * @example
     * // Delete one Visit
     * const Visit = await prisma.visit.delete({
     *   where: {
     *     // ... filter to delete one Visit
     *   }
     * })
     * 
     */
    delete<T extends VisitDeleteArgs>(args: SelectSubset<T, VisitDeleteArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visit.
     * @param {VisitUpdateArgs} args - Arguments to update one Visit.
     * @example
     * // Update one Visit
     * const visit = await prisma.visit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VisitUpdateArgs>(args: SelectSubset<T, VisitUpdateArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visits.
     * @param {VisitDeleteManyArgs} args - Arguments to filter Visits to delete.
     * @example
     * // Delete a few Visits
     * const { count } = await prisma.visit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VisitDeleteManyArgs>(args?: SelectSubset<T, VisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visits
     * const visit = await prisma.visit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VisitUpdateManyArgs>(args: SelectSubset<T, VisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Visit.
     * @param {VisitUpsertArgs} args - Arguments to update or create a Visit.
     * @example
     * // Update or create a Visit
     * const visit = await prisma.visit.upsert({
     *   create: {
     *     // ... data to create a Visit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visit we want to update
     *   }
     * })
     */
    upsert<T extends VisitUpsertArgs>(args: SelectSubset<T, VisitUpsertArgs<ExtArgs>>): Prisma__VisitClient<$Result.GetResult<Prisma.$VisitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitCountArgs} args - Arguments to filter Visits to count.
     * @example
     * // Count the number of Visits
     * const count = await prisma.visit.count({
     *   where: {
     *     // ... the filter for the Visits we want to count
     *   }
     * })
    **/
    count<T extends VisitCountArgs>(
      args?: Subset<T, VisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitAggregateArgs>(args: Subset<T, VisitAggregateArgs>): Prisma.PrismaPromise<GetVisitAggregateType<T>>

    /**
     * Group by Visit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitGroupByArgs} args - Group by arguments.
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
      T extends VisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VisitGroupByArgs['orderBy'] }
        : { orderBy?: VisitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Visit model
   */
  readonly fields: VisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Visit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Visit model
   */
  interface VisitFieldRefs {
    readonly id: FieldRef<"Visit", 'Int'>
    readonly visitDate: FieldRef<"Visit", 'DateTime'>
    readonly visitTime: FieldRef<"Visit", 'String'>
    readonly painLevel: FieldRef<"Visit", 'Int'>
    readonly fatigue: FieldRef<"Visit", 'Int'>
    readonly drowsiness: FieldRef<"Visit", 'Int'>
    readonly nausea: FieldRef<"Visit", 'Int'>
    readonly appetiteLoss: FieldRef<"Visit", 'Int'>
    readonly shortnessOfBreath: FieldRef<"Visit", 'Int'>
    readonly depression: FieldRef<"Visit", 'Int'>
    readonly generalHealth: FieldRef<"Visit", 'Int'>
    readonly exhaustion: FieldRef<"Visit", 'Int'>
    readonly providedService: FieldRef<"Visit", 'String'>
    readonly serviceType: FieldRef<"Visit", 'String'>
    readonly psychologicalSupport: FieldRef<"Visit", 'String'>
    readonly nutrition: FieldRef<"Visit", 'String'>
    readonly mobilityStatus: FieldRef<"Visit", 'String'>
    readonly relationWithFamily: FieldRef<"Visit", 'String'>
    readonly need_psychological: FieldRef<"Visit", 'Boolean'>
    readonly need_occupational_therapy: FieldRef<"Visit", 'Boolean'>
    readonly need_hospital_transfer: FieldRef<"Visit", 'Boolean'>
    readonly need_artificial_nutrition: FieldRef<"Visit", 'Boolean'>
    readonly need_assistive_devices: FieldRef<"Visit", 'Boolean'>
    readonly need_air_mattress: FieldRef<"Visit", 'Boolean'>
    readonly need_physiotherapy: FieldRef<"Visit", 'Boolean'>
    readonly need_specialist_consult: FieldRef<"Visit", 'Boolean'>
    readonly need_hygiene_pads: FieldRef<"Visit", 'Boolean'>
    readonly need_urinary_catheter: FieldRef<"Visit", 'Boolean'>
    readonly need_oxygen_device: FieldRef<"Visit", 'Boolean'>
    readonly need_social_support: FieldRef<"Visit", 'String'>
    readonly need_home_adaptation: FieldRef<"Visit", 'String'>
    readonly need_legal_consult: FieldRef<"Visit", 'String'>
    readonly need_caregiver_training: FieldRef<"Visit", 'String'>
    readonly notes: FieldRef<"Visit", 'String'>
    readonly improvedSinceLastVisit: FieldRef<"Visit", 'String'>
    readonly previousVisitRecommendations: FieldRef<"Visit", 'String'>
    readonly nextVisitDate: FieldRef<"Visit", 'DateTime'>
    readonly nextVisitType: FieldRef<"Visit", 'String'>
    readonly status: FieldRef<"Visit", 'String'>
    readonly patientId: FieldRef<"Visit", 'Int'>
    readonly createdAt: FieldRef<"Visit", 'DateTime'>
    readonly updatedAt: FieldRef<"Visit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Visit findUnique
   */
  export type VisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit findUniqueOrThrow
   */
  export type VisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit findFirst
   */
  export type VisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visits.
     */
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Visit findFirstOrThrow
   */
  export type VisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visit to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Visits.
     */
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Visit findMany
   */
  export type VisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter, which Visits to fetch.
     */
    where?: VisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Visits to fetch.
     */
    orderBy?: VisitOrderByWithRelationInput | VisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Visits.
     */
    cursor?: VisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Visits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Visits.
     */
    skip?: number
    distinct?: VisitScalarFieldEnum | VisitScalarFieldEnum[]
  }

  /**
   * Visit create
   */
  export type VisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The data needed to create a Visit.
     */
    data: XOR<VisitCreateInput, VisitUncheckedCreateInput>
  }

  /**
   * Visit createMany
   */
  export type VisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Visits.
     */
    data: VisitCreateManyInput | VisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Visit update
   */
  export type VisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The data needed to update a Visit.
     */
    data: XOR<VisitUpdateInput, VisitUncheckedUpdateInput>
    /**
     * Choose, which Visit to update.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit updateMany
   */
  export type VisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Visits.
     */
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyInput>
    /**
     * Filter which Visits to update
     */
    where?: VisitWhereInput
    /**
     * Limit how many Visits to update.
     */
    limit?: number
  }

  /**
   * Visit upsert
   */
  export type VisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * The filter to search for the Visit to update in case it exists.
     */
    where: VisitWhereUniqueInput
    /**
     * In case the Visit found by the `where` argument doesn't exist, create a new Visit with this data.
     */
    create: XOR<VisitCreateInput, VisitUncheckedCreateInput>
    /**
     * In case the Visit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VisitUpdateInput, VisitUncheckedUpdateInput>
  }

  /**
   * Visit delete
   */
  export type VisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
    /**
     * Filter which Visit to delete.
     */
    where: VisitWhereUniqueInput
  }

  /**
   * Visit deleteMany
   */
  export type VisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Visits to delete
     */
    where?: VisitWhereInput
    /**
     * Limit how many Visits to delete.
     */
    limit?: number
  }

  /**
   * Visit without action
   */
  export type VisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Visit
     */
    select?: VisitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Visit
     */
    omit?: VisitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VisitInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    id: number | null
  }

  export type AppointmentSumAggregateOutputType = {
    id: number | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: number | null
    title: string | null
    date: Date | null
    time: string | null
    needSpecialist: boolean | null
    specialistType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: number | null
    title: string | null
    date: Date | null
    time: string | null
    needSpecialist: boolean | null
    specialistType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    title: number
    date: number
    time: number
    needSpecialist: number
    specialistType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    id?: true
  }

  export type AppointmentSumAggregateInputType = {
    id?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    time?: true
    needSpecialist?: true
    specialistType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    time?: true
    needSpecialist?: true
    specialistType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    time?: true
    needSpecialist?: true
    specialistType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: number
    title: string
    date: Date
    time: string
    needSpecialist: boolean
    specialistType: string | null
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    time?: boolean
    needSpecialist?: boolean
    specialistType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appointment"]>



  export type AppointmentSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    time?: boolean
    needSpecialist?: boolean
    specialistType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "time" | "needSpecialist" | "specialistType" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      date: Date
      time: string
      needSpecialist: boolean
      specialistType: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'Int'>
    readonly title: FieldRef<"Appointment", 'String'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly time: FieldRef<"Appointment", 'String'>
    readonly needSpecialist: FieldRef<"Appointment", 'Boolean'>
    readonly specialistType: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    patientName: 'patientName',
    age: 'age',
    patientStatus: 'patientStatus',
    gender: 'gender',
    fileOpenDate: 'fileOpenDate',
    idNumber: 'idNumber',
    birthDate: 'birthDate',
    phoneNumber: 'phoneNumber',
    address: 'address',
    province: 'province',
    maritalStatus: 'maritalStatus',
    salary: 'salary',
    occupation: 'occupation',
    educationLevel: 'educationLevel',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const CompanionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    relationship: 'relationship',
    patientId: 'patientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanionScalarFieldEnum = (typeof CompanionScalarFieldEnum)[keyof typeof CompanionScalarFieldEnum]


  export const VisitScalarFieldEnum: {
    id: 'id',
    visitDate: 'visitDate',
    visitTime: 'visitTime',
    painLevel: 'painLevel',
    fatigue: 'fatigue',
    drowsiness: 'drowsiness',
    nausea: 'nausea',
    appetiteLoss: 'appetiteLoss',
    shortnessOfBreath: 'shortnessOfBreath',
    depression: 'depression',
    generalHealth: 'generalHealth',
    exhaustion: 'exhaustion',
    providedService: 'providedService',
    serviceType: 'serviceType',
    psychologicalSupport: 'psychologicalSupport',
    nutrition: 'nutrition',
    mobilityStatus: 'mobilityStatus',
    relationWithFamily: 'relationWithFamily',
    need_psychological: 'need_psychological',
    need_occupational_therapy: 'need_occupational_therapy',
    need_hospital_transfer: 'need_hospital_transfer',
    need_artificial_nutrition: 'need_artificial_nutrition',
    need_assistive_devices: 'need_assistive_devices',
    need_air_mattress: 'need_air_mattress',
    need_physiotherapy: 'need_physiotherapy',
    need_specialist_consult: 'need_specialist_consult',
    need_hygiene_pads: 'need_hygiene_pads',
    need_urinary_catheter: 'need_urinary_catheter',
    need_oxygen_device: 'need_oxygen_device',
    need_social_support: 'need_social_support',
    need_home_adaptation: 'need_home_adaptation',
    need_legal_consult: 'need_legal_consult',
    need_caregiver_training: 'need_caregiver_training',
    notes: 'notes',
    improvedSinceLastVisit: 'improvedSinceLastVisit',
    previousVisitRecommendations: 'previousVisitRecommendations',
    nextVisitDate: 'nextVisitDate',
    nextVisitType: 'nextVisitType',
    status: 'status',
    patientId: 'patientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VisitScalarFieldEnum = (typeof VisitScalarFieldEnum)[keyof typeof VisitScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    time: 'time',
    needSpecialist: 'needSpecialist',
    specialistType: 'specialistType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


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


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    name: 'name'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const PatientOrderByRelevanceFieldEnum: {
    patientName: 'patientName',
    age: 'age',
    gender: 'gender',
    idNumber: 'idNumber',
    phoneNumber: 'phoneNumber',
    address: 'address',
    province: 'province',
    maritalStatus: 'maritalStatus',
    salary: 'salary',
    occupation: 'occupation',
    educationLevel: 'educationLevel'
  };

  export type PatientOrderByRelevanceFieldEnum = (typeof PatientOrderByRelevanceFieldEnum)[keyof typeof PatientOrderByRelevanceFieldEnum]


  export const CompanionOrderByRelevanceFieldEnum: {
    name: 'name',
    phone: 'phone',
    relationship: 'relationship'
  };

  export type CompanionOrderByRelevanceFieldEnum = (typeof CompanionOrderByRelevanceFieldEnum)[keyof typeof CompanionOrderByRelevanceFieldEnum]


  export const VisitOrderByRelevanceFieldEnum: {
    visitTime: 'visitTime',
    providedService: 'providedService',
    serviceType: 'serviceType',
    psychologicalSupport: 'psychologicalSupport',
    nutrition: 'nutrition',
    mobilityStatus: 'mobilityStatus',
    relationWithFamily: 'relationWithFamily',
    need_social_support: 'need_social_support',
    need_home_adaptation: 'need_home_adaptation',
    need_legal_consult: 'need_legal_consult',
    need_caregiver_training: 'need_caregiver_training',
    notes: 'notes',
    improvedSinceLastVisit: 'improvedSinceLastVisit',
    previousVisitRecommendations: 'previousVisitRecommendations',
    nextVisitType: 'nextVisitType',
    status: 'status'
  };

  export type VisitOrderByRelevanceFieldEnum = (typeof VisitOrderByRelevanceFieldEnum)[keyof typeof VisitOrderByRelevanceFieldEnum]


  export const AppointmentOrderByRelevanceFieldEnum: {
    title: 'title',
    time: 'time',
    specialistType: 'specialistType'
  };

  export type AppointmentOrderByRelevanceFieldEnum = (typeof AppointmentOrderByRelevanceFieldEnum)[keyof typeof AppointmentOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: IntFilter<"Patient"> | number
    patientName?: StringFilter<"Patient"> | string
    age?: StringFilter<"Patient"> | string
    patientStatus?: IntFilter<"Patient"> | number
    gender?: StringFilter<"Patient"> | string
    fileOpenDate?: DateTimeFilter<"Patient"> | Date | string
    idNumber?: StringFilter<"Patient"> | string
    birthDate?: DateTimeFilter<"Patient"> | Date | string
    phoneNumber?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    province?: StringFilter<"Patient"> | string
    maritalStatus?: StringFilter<"Patient"> | string
    salary?: StringNullableFilter<"Patient"> | string | null
    occupation?: StringNullableFilter<"Patient"> | string | null
    educationLevel?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    companions?: CompanionListRelationFilter
    visits?: VisitListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    patientName?: SortOrder
    age?: SortOrder
    patientStatus?: SortOrder
    gender?: SortOrder
    fileOpenDate?: SortOrder
    idNumber?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    province?: SortOrder
    maritalStatus?: SortOrder
    salary?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    educationLevel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companions?: CompanionOrderByRelationAggregateInput
    visits?: VisitOrderByRelationAggregateInput
    _relevance?: PatientOrderByRelevanceInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    patientName?: StringFilter<"Patient"> | string
    age?: StringFilter<"Patient"> | string
    patientStatus?: IntFilter<"Patient"> | number
    gender?: StringFilter<"Patient"> | string
    fileOpenDate?: DateTimeFilter<"Patient"> | Date | string
    idNumber?: StringFilter<"Patient"> | string
    birthDate?: DateTimeFilter<"Patient"> | Date | string
    phoneNumber?: StringFilter<"Patient"> | string
    address?: StringFilter<"Patient"> | string
    province?: StringFilter<"Patient"> | string
    maritalStatus?: StringFilter<"Patient"> | string
    salary?: StringNullableFilter<"Patient"> | string | null
    occupation?: StringNullableFilter<"Patient"> | string | null
    educationLevel?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    companions?: CompanionListRelationFilter
    visits?: VisitListRelationFilter
  }, "id">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    patientName?: SortOrder
    age?: SortOrder
    patientStatus?: SortOrder
    gender?: SortOrder
    fileOpenDate?: SortOrder
    idNumber?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    province?: SortOrder
    maritalStatus?: SortOrder
    salary?: SortOrderInput | SortOrder
    occupation?: SortOrderInput | SortOrder
    educationLevel?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Patient"> | number
    patientName?: StringWithAggregatesFilter<"Patient"> | string
    age?: StringWithAggregatesFilter<"Patient"> | string
    patientStatus?: IntWithAggregatesFilter<"Patient"> | number
    gender?: StringWithAggregatesFilter<"Patient"> | string
    fileOpenDate?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    idNumber?: StringWithAggregatesFilter<"Patient"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    phoneNumber?: StringWithAggregatesFilter<"Patient"> | string
    address?: StringWithAggregatesFilter<"Patient"> | string
    province?: StringWithAggregatesFilter<"Patient"> | string
    maritalStatus?: StringWithAggregatesFilter<"Patient"> | string
    salary?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    occupation?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    educationLevel?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type CompanionWhereInput = {
    AND?: CompanionWhereInput | CompanionWhereInput[]
    OR?: CompanionWhereInput[]
    NOT?: CompanionWhereInput | CompanionWhereInput[]
    id?: IntFilter<"Companion"> | number
    name?: StringFilter<"Companion"> | string
    phone?: StringFilter<"Companion"> | string
    relationship?: StringFilter<"Companion"> | string
    patientId?: IntFilter<"Companion"> | number
    createdAt?: DateTimeFilter<"Companion"> | Date | string
    updatedAt?: DateTimeFilter<"Companion"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type CompanionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    relationship?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    _relevance?: CompanionOrderByRelevanceInput
  }

  export type CompanionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanionWhereInput | CompanionWhereInput[]
    OR?: CompanionWhereInput[]
    NOT?: CompanionWhereInput | CompanionWhereInput[]
    name?: StringFilter<"Companion"> | string
    phone?: StringFilter<"Companion"> | string
    relationship?: StringFilter<"Companion"> | string
    patientId?: IntFilter<"Companion"> | number
    createdAt?: DateTimeFilter<"Companion"> | Date | string
    updatedAt?: DateTimeFilter<"Companion"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type CompanionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    relationship?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanionCountOrderByAggregateInput
    _avg?: CompanionAvgOrderByAggregateInput
    _max?: CompanionMaxOrderByAggregateInput
    _min?: CompanionMinOrderByAggregateInput
    _sum?: CompanionSumOrderByAggregateInput
  }

  export type CompanionScalarWhereWithAggregatesInput = {
    AND?: CompanionScalarWhereWithAggregatesInput | CompanionScalarWhereWithAggregatesInput[]
    OR?: CompanionScalarWhereWithAggregatesInput[]
    NOT?: CompanionScalarWhereWithAggregatesInput | CompanionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Companion"> | number
    name?: StringWithAggregatesFilter<"Companion"> | string
    phone?: StringWithAggregatesFilter<"Companion"> | string
    relationship?: StringWithAggregatesFilter<"Companion"> | string
    patientId?: IntWithAggregatesFilter<"Companion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Companion"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Companion"> | Date | string
  }

  export type VisitWhereInput = {
    AND?: VisitWhereInput | VisitWhereInput[]
    OR?: VisitWhereInput[]
    NOT?: VisitWhereInput | VisitWhereInput[]
    id?: IntFilter<"Visit"> | number
    visitDate?: DateTimeFilter<"Visit"> | Date | string
    visitTime?: StringNullableFilter<"Visit"> | string | null
    painLevel?: IntNullableFilter<"Visit"> | number | null
    fatigue?: IntNullableFilter<"Visit"> | number | null
    drowsiness?: IntNullableFilter<"Visit"> | number | null
    nausea?: IntNullableFilter<"Visit"> | number | null
    appetiteLoss?: IntNullableFilter<"Visit"> | number | null
    shortnessOfBreath?: IntNullableFilter<"Visit"> | number | null
    depression?: IntNullableFilter<"Visit"> | number | null
    generalHealth?: IntNullableFilter<"Visit"> | number | null
    exhaustion?: IntNullableFilter<"Visit"> | number | null
    providedService?: StringNullableFilter<"Visit"> | string | null
    serviceType?: StringNullableFilter<"Visit"> | string | null
    psychologicalSupport?: StringNullableFilter<"Visit"> | string | null
    nutrition?: StringNullableFilter<"Visit"> | string | null
    mobilityStatus?: StringNullableFilter<"Visit"> | string | null
    relationWithFamily?: StringNullableFilter<"Visit"> | string | null
    need_psychological?: BoolNullableFilter<"Visit"> | boolean | null
    need_occupational_therapy?: BoolNullableFilter<"Visit"> | boolean | null
    need_hospital_transfer?: BoolNullableFilter<"Visit"> | boolean | null
    need_artificial_nutrition?: BoolNullableFilter<"Visit"> | boolean | null
    need_assistive_devices?: BoolNullableFilter<"Visit"> | boolean | null
    need_air_mattress?: BoolNullableFilter<"Visit"> | boolean | null
    need_physiotherapy?: BoolNullableFilter<"Visit"> | boolean | null
    need_specialist_consult?: BoolNullableFilter<"Visit"> | boolean | null
    need_hygiene_pads?: BoolNullableFilter<"Visit"> | boolean | null
    need_urinary_catheter?: BoolNullableFilter<"Visit"> | boolean | null
    need_oxygen_device?: BoolNullableFilter<"Visit"> | boolean | null
    need_social_support?: StringNullableFilter<"Visit"> | string | null
    need_home_adaptation?: StringNullableFilter<"Visit"> | string | null
    need_legal_consult?: StringNullableFilter<"Visit"> | string | null
    need_caregiver_training?: StringNullableFilter<"Visit"> | string | null
    notes?: StringNullableFilter<"Visit"> | string | null
    improvedSinceLastVisit?: StringNullableFilter<"Visit"> | string | null
    previousVisitRecommendations?: StringNullableFilter<"Visit"> | string | null
    nextVisitDate?: DateTimeNullableFilter<"Visit"> | Date | string | null
    nextVisitType?: StringNullableFilter<"Visit"> | string | null
    status?: StringFilter<"Visit"> | string
    patientId?: IntFilter<"Visit"> | number
    createdAt?: DateTimeFilter<"Visit"> | Date | string
    updatedAt?: DateTimeFilter<"Visit"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type VisitOrderByWithRelationInput = {
    id?: SortOrder
    visitDate?: SortOrder
    visitTime?: SortOrderInput | SortOrder
    painLevel?: SortOrderInput | SortOrder
    fatigue?: SortOrderInput | SortOrder
    drowsiness?: SortOrderInput | SortOrder
    nausea?: SortOrderInput | SortOrder
    appetiteLoss?: SortOrderInput | SortOrder
    shortnessOfBreath?: SortOrderInput | SortOrder
    depression?: SortOrderInput | SortOrder
    generalHealth?: SortOrderInput | SortOrder
    exhaustion?: SortOrderInput | SortOrder
    providedService?: SortOrderInput | SortOrder
    serviceType?: SortOrderInput | SortOrder
    psychologicalSupport?: SortOrderInput | SortOrder
    nutrition?: SortOrderInput | SortOrder
    mobilityStatus?: SortOrderInput | SortOrder
    relationWithFamily?: SortOrderInput | SortOrder
    need_psychological?: SortOrderInput | SortOrder
    need_occupational_therapy?: SortOrderInput | SortOrder
    need_hospital_transfer?: SortOrderInput | SortOrder
    need_artificial_nutrition?: SortOrderInput | SortOrder
    need_assistive_devices?: SortOrderInput | SortOrder
    need_air_mattress?: SortOrderInput | SortOrder
    need_physiotherapy?: SortOrderInput | SortOrder
    need_specialist_consult?: SortOrderInput | SortOrder
    need_hygiene_pads?: SortOrderInput | SortOrder
    need_urinary_catheter?: SortOrderInput | SortOrder
    need_oxygen_device?: SortOrderInput | SortOrder
    need_social_support?: SortOrderInput | SortOrder
    need_home_adaptation?: SortOrderInput | SortOrder
    need_legal_consult?: SortOrderInput | SortOrder
    need_caregiver_training?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    improvedSinceLastVisit?: SortOrderInput | SortOrder
    previousVisitRecommendations?: SortOrderInput | SortOrder
    nextVisitDate?: SortOrderInput | SortOrder
    nextVisitType?: SortOrderInput | SortOrder
    status?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
    _relevance?: VisitOrderByRelevanceInput
  }

  export type VisitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VisitWhereInput | VisitWhereInput[]
    OR?: VisitWhereInput[]
    NOT?: VisitWhereInput | VisitWhereInput[]
    visitDate?: DateTimeFilter<"Visit"> | Date | string
    visitTime?: StringNullableFilter<"Visit"> | string | null
    painLevel?: IntNullableFilter<"Visit"> | number | null
    fatigue?: IntNullableFilter<"Visit"> | number | null
    drowsiness?: IntNullableFilter<"Visit"> | number | null
    nausea?: IntNullableFilter<"Visit"> | number | null
    appetiteLoss?: IntNullableFilter<"Visit"> | number | null
    shortnessOfBreath?: IntNullableFilter<"Visit"> | number | null
    depression?: IntNullableFilter<"Visit"> | number | null
    generalHealth?: IntNullableFilter<"Visit"> | number | null
    exhaustion?: IntNullableFilter<"Visit"> | number | null
    providedService?: StringNullableFilter<"Visit"> | string | null
    serviceType?: StringNullableFilter<"Visit"> | string | null
    psychologicalSupport?: StringNullableFilter<"Visit"> | string | null
    nutrition?: StringNullableFilter<"Visit"> | string | null
    mobilityStatus?: StringNullableFilter<"Visit"> | string | null
    relationWithFamily?: StringNullableFilter<"Visit"> | string | null
    need_psychological?: BoolNullableFilter<"Visit"> | boolean | null
    need_occupational_therapy?: BoolNullableFilter<"Visit"> | boolean | null
    need_hospital_transfer?: BoolNullableFilter<"Visit"> | boolean | null
    need_artificial_nutrition?: BoolNullableFilter<"Visit"> | boolean | null
    need_assistive_devices?: BoolNullableFilter<"Visit"> | boolean | null
    need_air_mattress?: BoolNullableFilter<"Visit"> | boolean | null
    need_physiotherapy?: BoolNullableFilter<"Visit"> | boolean | null
    need_specialist_consult?: BoolNullableFilter<"Visit"> | boolean | null
    need_hygiene_pads?: BoolNullableFilter<"Visit"> | boolean | null
    need_urinary_catheter?: BoolNullableFilter<"Visit"> | boolean | null
    need_oxygen_device?: BoolNullableFilter<"Visit"> | boolean | null
    need_social_support?: StringNullableFilter<"Visit"> | string | null
    need_home_adaptation?: StringNullableFilter<"Visit"> | string | null
    need_legal_consult?: StringNullableFilter<"Visit"> | string | null
    need_caregiver_training?: StringNullableFilter<"Visit"> | string | null
    notes?: StringNullableFilter<"Visit"> | string | null
    improvedSinceLastVisit?: StringNullableFilter<"Visit"> | string | null
    previousVisitRecommendations?: StringNullableFilter<"Visit"> | string | null
    nextVisitDate?: DateTimeNullableFilter<"Visit"> | Date | string | null
    nextVisitType?: StringNullableFilter<"Visit"> | string | null
    status?: StringFilter<"Visit"> | string
    patientId?: IntFilter<"Visit"> | number
    createdAt?: DateTimeFilter<"Visit"> | Date | string
    updatedAt?: DateTimeFilter<"Visit"> | Date | string
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type VisitOrderByWithAggregationInput = {
    id?: SortOrder
    visitDate?: SortOrder
    visitTime?: SortOrderInput | SortOrder
    painLevel?: SortOrderInput | SortOrder
    fatigue?: SortOrderInput | SortOrder
    drowsiness?: SortOrderInput | SortOrder
    nausea?: SortOrderInput | SortOrder
    appetiteLoss?: SortOrderInput | SortOrder
    shortnessOfBreath?: SortOrderInput | SortOrder
    depression?: SortOrderInput | SortOrder
    generalHealth?: SortOrderInput | SortOrder
    exhaustion?: SortOrderInput | SortOrder
    providedService?: SortOrderInput | SortOrder
    serviceType?: SortOrderInput | SortOrder
    psychologicalSupport?: SortOrderInput | SortOrder
    nutrition?: SortOrderInput | SortOrder
    mobilityStatus?: SortOrderInput | SortOrder
    relationWithFamily?: SortOrderInput | SortOrder
    need_psychological?: SortOrderInput | SortOrder
    need_occupational_therapy?: SortOrderInput | SortOrder
    need_hospital_transfer?: SortOrderInput | SortOrder
    need_artificial_nutrition?: SortOrderInput | SortOrder
    need_assistive_devices?: SortOrderInput | SortOrder
    need_air_mattress?: SortOrderInput | SortOrder
    need_physiotherapy?: SortOrderInput | SortOrder
    need_specialist_consult?: SortOrderInput | SortOrder
    need_hygiene_pads?: SortOrderInput | SortOrder
    need_urinary_catheter?: SortOrderInput | SortOrder
    need_oxygen_device?: SortOrderInput | SortOrder
    need_social_support?: SortOrderInput | SortOrder
    need_home_adaptation?: SortOrderInput | SortOrder
    need_legal_consult?: SortOrderInput | SortOrder
    need_caregiver_training?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    improvedSinceLastVisit?: SortOrderInput | SortOrder
    previousVisitRecommendations?: SortOrderInput | SortOrder
    nextVisitDate?: SortOrderInput | SortOrder
    nextVisitType?: SortOrderInput | SortOrder
    status?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VisitCountOrderByAggregateInput
    _avg?: VisitAvgOrderByAggregateInput
    _max?: VisitMaxOrderByAggregateInput
    _min?: VisitMinOrderByAggregateInput
    _sum?: VisitSumOrderByAggregateInput
  }

  export type VisitScalarWhereWithAggregatesInput = {
    AND?: VisitScalarWhereWithAggregatesInput | VisitScalarWhereWithAggregatesInput[]
    OR?: VisitScalarWhereWithAggregatesInput[]
    NOT?: VisitScalarWhereWithAggregatesInput | VisitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Visit"> | number
    visitDate?: DateTimeWithAggregatesFilter<"Visit"> | Date | string
    visitTime?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    painLevel?: IntNullableWithAggregatesFilter<"Visit"> | number | null
    fatigue?: IntNullableWithAggregatesFilter<"Visit"> | number | null
    drowsiness?: IntNullableWithAggregatesFilter<"Visit"> | number | null
    nausea?: IntNullableWithAggregatesFilter<"Visit"> | number | null
    appetiteLoss?: IntNullableWithAggregatesFilter<"Visit"> | number | null
    shortnessOfBreath?: IntNullableWithAggregatesFilter<"Visit"> | number | null
    depression?: IntNullableWithAggregatesFilter<"Visit"> | number | null
    generalHealth?: IntNullableWithAggregatesFilter<"Visit"> | number | null
    exhaustion?: IntNullableWithAggregatesFilter<"Visit"> | number | null
    providedService?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    serviceType?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    psychologicalSupport?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    nutrition?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    mobilityStatus?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    relationWithFamily?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    need_psychological?: BoolNullableWithAggregatesFilter<"Visit"> | boolean | null
    need_occupational_therapy?: BoolNullableWithAggregatesFilter<"Visit"> | boolean | null
    need_hospital_transfer?: BoolNullableWithAggregatesFilter<"Visit"> | boolean | null
    need_artificial_nutrition?: BoolNullableWithAggregatesFilter<"Visit"> | boolean | null
    need_assistive_devices?: BoolNullableWithAggregatesFilter<"Visit"> | boolean | null
    need_air_mattress?: BoolNullableWithAggregatesFilter<"Visit"> | boolean | null
    need_physiotherapy?: BoolNullableWithAggregatesFilter<"Visit"> | boolean | null
    need_specialist_consult?: BoolNullableWithAggregatesFilter<"Visit"> | boolean | null
    need_hygiene_pads?: BoolNullableWithAggregatesFilter<"Visit"> | boolean | null
    need_urinary_catheter?: BoolNullableWithAggregatesFilter<"Visit"> | boolean | null
    need_oxygen_device?: BoolNullableWithAggregatesFilter<"Visit"> | boolean | null
    need_social_support?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    need_home_adaptation?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    need_legal_consult?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    need_caregiver_training?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    improvedSinceLastVisit?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    previousVisitRecommendations?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    nextVisitDate?: DateTimeNullableWithAggregatesFilter<"Visit"> | Date | string | null
    nextVisitType?: StringNullableWithAggregatesFilter<"Visit"> | string | null
    status?: StringWithAggregatesFilter<"Visit"> | string
    patientId?: IntWithAggregatesFilter<"Visit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Visit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Visit"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: IntFilter<"Appointment"> | number
    title?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    time?: StringFilter<"Appointment"> | string
    needSpecialist?: BoolFilter<"Appointment"> | boolean
    specialistType?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    needSpecialist?: SortOrder
    specialistType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AppointmentOrderByRelevanceInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    title?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    time?: StringFilter<"Appointment"> | string
    needSpecialist?: BoolFilter<"Appointment"> | boolean
    specialistType?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    needSpecialist?: SortOrder
    specialistType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Appointment"> | number
    title?: StringWithAggregatesFilter<"Appointment"> | string
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    time?: StringWithAggregatesFilter<"Appointment"> | string
    needSpecialist?: BoolWithAggregatesFilter<"Appointment"> | boolean
    specialistType?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    patientName: string
    age: string
    patientStatus: number
    gender: string
    fileOpenDate: Date | string
    idNumber: string
    birthDate: Date | string
    phoneNumber: string
    address: string
    province: string
    maritalStatus: string
    salary?: string | null
    occupation?: string | null
    educationLevel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companions?: CompanionCreateNestedManyWithoutPatientInput
    visits?: VisitCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: number
    patientName: string
    age: string
    patientStatus: number
    gender: string
    fileOpenDate: Date | string
    idNumber: string
    birthDate: Date | string
    phoneNumber: string
    address: string
    province: string
    maritalStatus: string
    salary?: string | null
    occupation?: string | null
    educationLevel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companions?: CompanionUncheckedCreateNestedManyWithoutPatientInput
    visits?: VisitUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    patientName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    patientStatus?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    fileOpenDate?: DateTimeFieldUpdateOperationsInput | Date | string
    idNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companions?: CompanionUpdateManyWithoutPatientNestedInput
    visits?: VisitUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    patientStatus?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    fileOpenDate?: DateTimeFieldUpdateOperationsInput | Date | string
    idNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companions?: CompanionUncheckedUpdateManyWithoutPatientNestedInput
    visits?: VisitUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: number
    patientName: string
    age: string
    patientStatus: number
    gender: string
    fileOpenDate: Date | string
    idNumber: string
    birthDate: Date | string
    phoneNumber: string
    address: string
    province: string
    maritalStatus: string
    salary?: string | null
    occupation?: string | null
    educationLevel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    patientName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    patientStatus?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    fileOpenDate?: DateTimeFieldUpdateOperationsInput | Date | string
    idNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    patientStatus?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    fileOpenDate?: DateTimeFieldUpdateOperationsInput | Date | string
    idNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionCreateInput = {
    name: string
    phone: string
    relationship: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutCompanionsInput
  }

  export type CompanionUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    relationship: string
    patientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutCompanionsNestedInput
  }

  export type CompanionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionCreateManyInput = {
    id?: number
    name: string
    phone: string
    relationship: string
    patientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitCreateInput = {
    visitDate: Date | string
    visitTime?: string | null
    painLevel?: number | null
    fatigue?: number | null
    drowsiness?: number | null
    nausea?: number | null
    appetiteLoss?: number | null
    shortnessOfBreath?: number | null
    depression?: number | null
    generalHealth?: number | null
    exhaustion?: number | null
    providedService?: string | null
    serviceType?: string | null
    psychologicalSupport?: string | null
    nutrition?: string | null
    mobilityStatus?: string | null
    relationWithFamily?: string | null
    need_psychological?: boolean | null
    need_occupational_therapy?: boolean | null
    need_hospital_transfer?: boolean | null
    need_artificial_nutrition?: boolean | null
    need_assistive_devices?: boolean | null
    need_air_mattress?: boolean | null
    need_physiotherapy?: boolean | null
    need_specialist_consult?: boolean | null
    need_hygiene_pads?: boolean | null
    need_urinary_catheter?: boolean | null
    need_oxygen_device?: boolean | null
    need_social_support?: string | null
    need_home_adaptation?: string | null
    need_legal_consult?: string | null
    need_caregiver_training?: string | null
    notes?: string | null
    improvedSinceLastVisit?: string | null
    previousVisitRecommendations?: string | null
    nextVisitDate?: Date | string | null
    nextVisitType?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    patient: PatientCreateNestedOneWithoutVisitsInput
  }

  export type VisitUncheckedCreateInput = {
    id?: number
    visitDate: Date | string
    visitTime?: string | null
    painLevel?: number | null
    fatigue?: number | null
    drowsiness?: number | null
    nausea?: number | null
    appetiteLoss?: number | null
    shortnessOfBreath?: number | null
    depression?: number | null
    generalHealth?: number | null
    exhaustion?: number | null
    providedService?: string | null
    serviceType?: string | null
    psychologicalSupport?: string | null
    nutrition?: string | null
    mobilityStatus?: string | null
    relationWithFamily?: string | null
    need_psychological?: boolean | null
    need_occupational_therapy?: boolean | null
    need_hospital_transfer?: boolean | null
    need_artificial_nutrition?: boolean | null
    need_assistive_devices?: boolean | null
    need_air_mattress?: boolean | null
    need_physiotherapy?: boolean | null
    need_specialist_consult?: boolean | null
    need_hygiene_pads?: boolean | null
    need_urinary_catheter?: boolean | null
    need_oxygen_device?: boolean | null
    need_social_support?: string | null
    need_home_adaptation?: string | null
    need_legal_consult?: string | null
    need_caregiver_training?: string | null
    notes?: string | null
    improvedSinceLastVisit?: string | null
    previousVisitRecommendations?: string | null
    nextVisitDate?: Date | string | null
    nextVisitType?: string | null
    status?: string
    patientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitUpdateInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: NullableStringFieldUpdateOperationsInput | string | null
    painLevel?: NullableIntFieldUpdateOperationsInput | number | null
    fatigue?: NullableIntFieldUpdateOperationsInput | number | null
    drowsiness?: NullableIntFieldUpdateOperationsInput | number | null
    nausea?: NullableIntFieldUpdateOperationsInput | number | null
    appetiteLoss?: NullableIntFieldUpdateOperationsInput | number | null
    shortnessOfBreath?: NullableIntFieldUpdateOperationsInput | number | null
    depression?: NullableIntFieldUpdateOperationsInput | number | null
    generalHealth?: NullableIntFieldUpdateOperationsInput | number | null
    exhaustion?: NullableIntFieldUpdateOperationsInput | number | null
    providedService?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableStringFieldUpdateOperationsInput | string | null
    psychologicalSupport?: NullableStringFieldUpdateOperationsInput | string | null
    nutrition?: NullableStringFieldUpdateOperationsInput | string | null
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationWithFamily?: NullableStringFieldUpdateOperationsInput | string | null
    need_psychological?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_occupational_therapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hospital_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_artificial_nutrition?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_assistive_devices?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_air_mattress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_physiotherapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_specialist_consult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hygiene_pads?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_urinary_catheter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_oxygen_device?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_social_support?: NullableStringFieldUpdateOperationsInput | string | null
    need_home_adaptation?: NullableStringFieldUpdateOperationsInput | string | null
    need_legal_consult?: NullableStringFieldUpdateOperationsInput | string | null
    need_caregiver_training?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    improvedSinceLastVisit?: NullableStringFieldUpdateOperationsInput | string | null
    previousVisitRecommendations?: NullableStringFieldUpdateOperationsInput | string | null
    nextVisitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVisitType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutVisitsNestedInput
  }

  export type VisitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: NullableStringFieldUpdateOperationsInput | string | null
    painLevel?: NullableIntFieldUpdateOperationsInput | number | null
    fatigue?: NullableIntFieldUpdateOperationsInput | number | null
    drowsiness?: NullableIntFieldUpdateOperationsInput | number | null
    nausea?: NullableIntFieldUpdateOperationsInput | number | null
    appetiteLoss?: NullableIntFieldUpdateOperationsInput | number | null
    shortnessOfBreath?: NullableIntFieldUpdateOperationsInput | number | null
    depression?: NullableIntFieldUpdateOperationsInput | number | null
    generalHealth?: NullableIntFieldUpdateOperationsInput | number | null
    exhaustion?: NullableIntFieldUpdateOperationsInput | number | null
    providedService?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableStringFieldUpdateOperationsInput | string | null
    psychologicalSupport?: NullableStringFieldUpdateOperationsInput | string | null
    nutrition?: NullableStringFieldUpdateOperationsInput | string | null
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationWithFamily?: NullableStringFieldUpdateOperationsInput | string | null
    need_psychological?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_occupational_therapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hospital_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_artificial_nutrition?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_assistive_devices?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_air_mattress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_physiotherapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_specialist_consult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hygiene_pads?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_urinary_catheter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_oxygen_device?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_social_support?: NullableStringFieldUpdateOperationsInput | string | null
    need_home_adaptation?: NullableStringFieldUpdateOperationsInput | string | null
    need_legal_consult?: NullableStringFieldUpdateOperationsInput | string | null
    need_caregiver_training?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    improvedSinceLastVisit?: NullableStringFieldUpdateOperationsInput | string | null
    previousVisitRecommendations?: NullableStringFieldUpdateOperationsInput | string | null
    nextVisitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVisitType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitCreateManyInput = {
    id?: number
    visitDate: Date | string
    visitTime?: string | null
    painLevel?: number | null
    fatigue?: number | null
    drowsiness?: number | null
    nausea?: number | null
    appetiteLoss?: number | null
    shortnessOfBreath?: number | null
    depression?: number | null
    generalHealth?: number | null
    exhaustion?: number | null
    providedService?: string | null
    serviceType?: string | null
    psychologicalSupport?: string | null
    nutrition?: string | null
    mobilityStatus?: string | null
    relationWithFamily?: string | null
    need_psychological?: boolean | null
    need_occupational_therapy?: boolean | null
    need_hospital_transfer?: boolean | null
    need_artificial_nutrition?: boolean | null
    need_assistive_devices?: boolean | null
    need_air_mattress?: boolean | null
    need_physiotherapy?: boolean | null
    need_specialist_consult?: boolean | null
    need_hygiene_pads?: boolean | null
    need_urinary_catheter?: boolean | null
    need_oxygen_device?: boolean | null
    need_social_support?: string | null
    need_home_adaptation?: string | null
    need_legal_consult?: string | null
    need_caregiver_training?: string | null
    notes?: string | null
    improvedSinceLastVisit?: string | null
    previousVisitRecommendations?: string | null
    nextVisitDate?: Date | string | null
    nextVisitType?: string | null
    status?: string
    patientId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitUpdateManyMutationInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: NullableStringFieldUpdateOperationsInput | string | null
    painLevel?: NullableIntFieldUpdateOperationsInput | number | null
    fatigue?: NullableIntFieldUpdateOperationsInput | number | null
    drowsiness?: NullableIntFieldUpdateOperationsInput | number | null
    nausea?: NullableIntFieldUpdateOperationsInput | number | null
    appetiteLoss?: NullableIntFieldUpdateOperationsInput | number | null
    shortnessOfBreath?: NullableIntFieldUpdateOperationsInput | number | null
    depression?: NullableIntFieldUpdateOperationsInput | number | null
    generalHealth?: NullableIntFieldUpdateOperationsInput | number | null
    exhaustion?: NullableIntFieldUpdateOperationsInput | number | null
    providedService?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableStringFieldUpdateOperationsInput | string | null
    psychologicalSupport?: NullableStringFieldUpdateOperationsInput | string | null
    nutrition?: NullableStringFieldUpdateOperationsInput | string | null
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationWithFamily?: NullableStringFieldUpdateOperationsInput | string | null
    need_psychological?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_occupational_therapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hospital_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_artificial_nutrition?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_assistive_devices?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_air_mattress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_physiotherapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_specialist_consult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hygiene_pads?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_urinary_catheter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_oxygen_device?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_social_support?: NullableStringFieldUpdateOperationsInput | string | null
    need_home_adaptation?: NullableStringFieldUpdateOperationsInput | string | null
    need_legal_consult?: NullableStringFieldUpdateOperationsInput | string | null
    need_caregiver_training?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    improvedSinceLastVisit?: NullableStringFieldUpdateOperationsInput | string | null
    previousVisitRecommendations?: NullableStringFieldUpdateOperationsInput | string | null
    nextVisitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVisitType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: NullableStringFieldUpdateOperationsInput | string | null
    painLevel?: NullableIntFieldUpdateOperationsInput | number | null
    fatigue?: NullableIntFieldUpdateOperationsInput | number | null
    drowsiness?: NullableIntFieldUpdateOperationsInput | number | null
    nausea?: NullableIntFieldUpdateOperationsInput | number | null
    appetiteLoss?: NullableIntFieldUpdateOperationsInput | number | null
    shortnessOfBreath?: NullableIntFieldUpdateOperationsInput | number | null
    depression?: NullableIntFieldUpdateOperationsInput | number | null
    generalHealth?: NullableIntFieldUpdateOperationsInput | number | null
    exhaustion?: NullableIntFieldUpdateOperationsInput | number | null
    providedService?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableStringFieldUpdateOperationsInput | string | null
    psychologicalSupport?: NullableStringFieldUpdateOperationsInput | string | null
    nutrition?: NullableStringFieldUpdateOperationsInput | string | null
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationWithFamily?: NullableStringFieldUpdateOperationsInput | string | null
    need_psychological?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_occupational_therapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hospital_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_artificial_nutrition?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_assistive_devices?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_air_mattress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_physiotherapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_specialist_consult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hygiene_pads?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_urinary_catheter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_oxygen_device?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_social_support?: NullableStringFieldUpdateOperationsInput | string | null
    need_home_adaptation?: NullableStringFieldUpdateOperationsInput | string | null
    need_legal_consult?: NullableStringFieldUpdateOperationsInput | string | null
    need_caregiver_training?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    improvedSinceLastVisit?: NullableStringFieldUpdateOperationsInput | string | null
    previousVisitRecommendations?: NullableStringFieldUpdateOperationsInput | string | null
    nextVisitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVisitType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    patientId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    title: string
    date: Date | string
    time: string
    needSpecialist?: boolean
    specialistType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUncheckedCreateInput = {
    id?: number
    title: string
    date: Date | string
    time: string
    needSpecialist?: boolean
    specialistType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    needSpecialist?: BoolFieldUpdateOperationsInput | boolean
    specialistType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    needSpecialist?: BoolFieldUpdateOperationsInput | boolean
    specialistType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: number
    title: string
    date: Date | string
    time: string
    needSpecialist?: boolean
    specialistType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    needSpecialist?: BoolFieldUpdateOperationsInput | boolean
    specialistType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    needSpecialist?: BoolFieldUpdateOperationsInput | boolean
    specialistType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
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
    search?: string
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type CompanionListRelationFilter = {
    every?: CompanionWhereInput
    some?: CompanionWhereInput
    none?: CompanionWhereInput
  }

  export type VisitListRelationFilter = {
    every?: VisitWhereInput
    some?: VisitWhereInput
    none?: VisitWhereInput
  }

  export type CompanionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientOrderByRelevanceInput = {
    fields: PatientOrderByRelevanceFieldEnum | PatientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    patientName?: SortOrder
    age?: SortOrder
    patientStatus?: SortOrder
    gender?: SortOrder
    fileOpenDate?: SortOrder
    idNumber?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    province?: SortOrder
    maritalStatus?: SortOrder
    salary?: SortOrder
    occupation?: SortOrder
    educationLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    id?: SortOrder
    patientStatus?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    patientName?: SortOrder
    age?: SortOrder
    patientStatus?: SortOrder
    gender?: SortOrder
    fileOpenDate?: SortOrder
    idNumber?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    province?: SortOrder
    maritalStatus?: SortOrder
    salary?: SortOrder
    occupation?: SortOrder
    educationLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    patientName?: SortOrder
    age?: SortOrder
    patientStatus?: SortOrder
    gender?: SortOrder
    fileOpenDate?: SortOrder
    idNumber?: SortOrder
    birthDate?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    province?: SortOrder
    maritalStatus?: SortOrder
    salary?: SortOrder
    occupation?: SortOrder
    educationLevel?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    id?: SortOrder
    patientStatus?: SortOrder
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type CompanionOrderByRelevanceInput = {
    fields: CompanionOrderByRelevanceFieldEnum | CompanionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompanionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    relationship?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanionAvgOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
  }

  export type CompanionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    relationship?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    relationship?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanionSumOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type VisitOrderByRelevanceInput = {
    fields: VisitOrderByRelevanceFieldEnum | VisitOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VisitCountOrderByAggregateInput = {
    id?: SortOrder
    visitDate?: SortOrder
    visitTime?: SortOrder
    painLevel?: SortOrder
    fatigue?: SortOrder
    drowsiness?: SortOrder
    nausea?: SortOrder
    appetiteLoss?: SortOrder
    shortnessOfBreath?: SortOrder
    depression?: SortOrder
    generalHealth?: SortOrder
    exhaustion?: SortOrder
    providedService?: SortOrder
    serviceType?: SortOrder
    psychologicalSupport?: SortOrder
    nutrition?: SortOrder
    mobilityStatus?: SortOrder
    relationWithFamily?: SortOrder
    need_psychological?: SortOrder
    need_occupational_therapy?: SortOrder
    need_hospital_transfer?: SortOrder
    need_artificial_nutrition?: SortOrder
    need_assistive_devices?: SortOrder
    need_air_mattress?: SortOrder
    need_physiotherapy?: SortOrder
    need_specialist_consult?: SortOrder
    need_hygiene_pads?: SortOrder
    need_urinary_catheter?: SortOrder
    need_oxygen_device?: SortOrder
    need_social_support?: SortOrder
    need_home_adaptation?: SortOrder
    need_legal_consult?: SortOrder
    need_caregiver_training?: SortOrder
    notes?: SortOrder
    improvedSinceLastVisit?: SortOrder
    previousVisitRecommendations?: SortOrder
    nextVisitDate?: SortOrder
    nextVisitType?: SortOrder
    status?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitAvgOrderByAggregateInput = {
    id?: SortOrder
    painLevel?: SortOrder
    fatigue?: SortOrder
    drowsiness?: SortOrder
    nausea?: SortOrder
    appetiteLoss?: SortOrder
    shortnessOfBreath?: SortOrder
    depression?: SortOrder
    generalHealth?: SortOrder
    exhaustion?: SortOrder
    patientId?: SortOrder
  }

  export type VisitMaxOrderByAggregateInput = {
    id?: SortOrder
    visitDate?: SortOrder
    visitTime?: SortOrder
    painLevel?: SortOrder
    fatigue?: SortOrder
    drowsiness?: SortOrder
    nausea?: SortOrder
    appetiteLoss?: SortOrder
    shortnessOfBreath?: SortOrder
    depression?: SortOrder
    generalHealth?: SortOrder
    exhaustion?: SortOrder
    providedService?: SortOrder
    serviceType?: SortOrder
    psychologicalSupport?: SortOrder
    nutrition?: SortOrder
    mobilityStatus?: SortOrder
    relationWithFamily?: SortOrder
    need_psychological?: SortOrder
    need_occupational_therapy?: SortOrder
    need_hospital_transfer?: SortOrder
    need_artificial_nutrition?: SortOrder
    need_assistive_devices?: SortOrder
    need_air_mattress?: SortOrder
    need_physiotherapy?: SortOrder
    need_specialist_consult?: SortOrder
    need_hygiene_pads?: SortOrder
    need_urinary_catheter?: SortOrder
    need_oxygen_device?: SortOrder
    need_social_support?: SortOrder
    need_home_adaptation?: SortOrder
    need_legal_consult?: SortOrder
    need_caregiver_training?: SortOrder
    notes?: SortOrder
    improvedSinceLastVisit?: SortOrder
    previousVisitRecommendations?: SortOrder
    nextVisitDate?: SortOrder
    nextVisitType?: SortOrder
    status?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitMinOrderByAggregateInput = {
    id?: SortOrder
    visitDate?: SortOrder
    visitTime?: SortOrder
    painLevel?: SortOrder
    fatigue?: SortOrder
    drowsiness?: SortOrder
    nausea?: SortOrder
    appetiteLoss?: SortOrder
    shortnessOfBreath?: SortOrder
    depression?: SortOrder
    generalHealth?: SortOrder
    exhaustion?: SortOrder
    providedService?: SortOrder
    serviceType?: SortOrder
    psychologicalSupport?: SortOrder
    nutrition?: SortOrder
    mobilityStatus?: SortOrder
    relationWithFamily?: SortOrder
    need_psychological?: SortOrder
    need_occupational_therapy?: SortOrder
    need_hospital_transfer?: SortOrder
    need_artificial_nutrition?: SortOrder
    need_assistive_devices?: SortOrder
    need_air_mattress?: SortOrder
    need_physiotherapy?: SortOrder
    need_specialist_consult?: SortOrder
    need_hygiene_pads?: SortOrder
    need_urinary_catheter?: SortOrder
    need_oxygen_device?: SortOrder
    need_social_support?: SortOrder
    need_home_adaptation?: SortOrder
    need_legal_consult?: SortOrder
    need_caregiver_training?: SortOrder
    notes?: SortOrder
    improvedSinceLastVisit?: SortOrder
    previousVisitRecommendations?: SortOrder
    nextVisitDate?: SortOrder
    nextVisitType?: SortOrder
    status?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VisitSumOrderByAggregateInput = {
    id?: SortOrder
    painLevel?: SortOrder
    fatigue?: SortOrder
    drowsiness?: SortOrder
    nausea?: SortOrder
    appetiteLoss?: SortOrder
    shortnessOfBreath?: SortOrder
    depression?: SortOrder
    generalHealth?: SortOrder
    exhaustion?: SortOrder
    patientId?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AppointmentOrderByRelevanceInput = {
    fields: AppointmentOrderByRelevanceFieldEnum | AppointmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    needSpecialist?: SortOrder
    specialistType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    needSpecialist?: SortOrder
    specialistType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    time?: SortOrder
    needSpecialist?: SortOrder
    specialistType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompanionCreateNestedManyWithoutPatientInput = {
    create?: XOR<CompanionCreateWithoutPatientInput, CompanionUncheckedCreateWithoutPatientInput> | CompanionCreateWithoutPatientInput[] | CompanionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CompanionCreateOrConnectWithoutPatientInput | CompanionCreateOrConnectWithoutPatientInput[]
    createMany?: CompanionCreateManyPatientInputEnvelope
    connect?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
  }

  export type VisitCreateNestedManyWithoutPatientInput = {
    create?: XOR<VisitCreateWithoutPatientInput, VisitUncheckedCreateWithoutPatientInput> | VisitCreateWithoutPatientInput[] | VisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutPatientInput | VisitCreateOrConnectWithoutPatientInput[]
    createMany?: VisitCreateManyPatientInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type CompanionUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<CompanionCreateWithoutPatientInput, CompanionUncheckedCreateWithoutPatientInput> | CompanionCreateWithoutPatientInput[] | CompanionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CompanionCreateOrConnectWithoutPatientInput | CompanionCreateOrConnectWithoutPatientInput[]
    createMany?: CompanionCreateManyPatientInputEnvelope
    connect?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
  }

  export type VisitUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<VisitCreateWithoutPatientInput, VisitUncheckedCreateWithoutPatientInput> | VisitCreateWithoutPatientInput[] | VisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutPatientInput | VisitCreateOrConnectWithoutPatientInput[]
    createMany?: VisitCreateManyPatientInputEnvelope
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
  }

  export type CompanionUpdateManyWithoutPatientNestedInput = {
    create?: XOR<CompanionCreateWithoutPatientInput, CompanionUncheckedCreateWithoutPatientInput> | CompanionCreateWithoutPatientInput[] | CompanionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CompanionCreateOrConnectWithoutPatientInput | CompanionCreateOrConnectWithoutPatientInput[]
    upsert?: CompanionUpsertWithWhereUniqueWithoutPatientInput | CompanionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: CompanionCreateManyPatientInputEnvelope
    set?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    disconnect?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    delete?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    connect?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    update?: CompanionUpdateWithWhereUniqueWithoutPatientInput | CompanionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: CompanionUpdateManyWithWhereWithoutPatientInput | CompanionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: CompanionScalarWhereInput | CompanionScalarWhereInput[]
  }

  export type VisitUpdateManyWithoutPatientNestedInput = {
    create?: XOR<VisitCreateWithoutPatientInput, VisitUncheckedCreateWithoutPatientInput> | VisitCreateWithoutPatientInput[] | VisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutPatientInput | VisitCreateOrConnectWithoutPatientInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutPatientInput | VisitUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: VisitCreateManyPatientInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutPatientInput | VisitUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutPatientInput | VisitUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type CompanionUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<CompanionCreateWithoutPatientInput, CompanionUncheckedCreateWithoutPatientInput> | CompanionCreateWithoutPatientInput[] | CompanionUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: CompanionCreateOrConnectWithoutPatientInput | CompanionCreateOrConnectWithoutPatientInput[]
    upsert?: CompanionUpsertWithWhereUniqueWithoutPatientInput | CompanionUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: CompanionCreateManyPatientInputEnvelope
    set?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    disconnect?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    delete?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    connect?: CompanionWhereUniqueInput | CompanionWhereUniqueInput[]
    update?: CompanionUpdateWithWhereUniqueWithoutPatientInput | CompanionUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: CompanionUpdateManyWithWhereWithoutPatientInput | CompanionUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: CompanionScalarWhereInput | CompanionScalarWhereInput[]
  }

  export type VisitUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<VisitCreateWithoutPatientInput, VisitUncheckedCreateWithoutPatientInput> | VisitCreateWithoutPatientInput[] | VisitUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VisitCreateOrConnectWithoutPatientInput | VisitCreateOrConnectWithoutPatientInput[]
    upsert?: VisitUpsertWithWhereUniqueWithoutPatientInput | VisitUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: VisitCreateManyPatientInputEnvelope
    set?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    disconnect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    delete?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    connect?: VisitWhereUniqueInput | VisitWhereUniqueInput[]
    update?: VisitUpdateWithWhereUniqueWithoutPatientInput | VisitUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: VisitUpdateManyWithWhereWithoutPatientInput | VisitUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: VisitScalarWhereInput | VisitScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutCompanionsInput = {
    create?: XOR<PatientCreateWithoutCompanionsInput, PatientUncheckedCreateWithoutCompanionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutCompanionsInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneRequiredWithoutCompanionsNestedInput = {
    create?: XOR<PatientCreateWithoutCompanionsInput, PatientUncheckedCreateWithoutCompanionsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutCompanionsInput
    upsert?: PatientUpsertWithoutCompanionsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutCompanionsInput, PatientUpdateWithoutCompanionsInput>, PatientUncheckedUpdateWithoutCompanionsInput>
  }

  export type PatientCreateNestedOneWithoutVisitsInput = {
    create?: XOR<PatientCreateWithoutVisitsInput, PatientUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVisitsInput
    connect?: PatientWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PatientUpdateOneRequiredWithoutVisitsNestedInput = {
    create?: XOR<PatientCreateWithoutVisitsInput, PatientUncheckedCreateWithoutVisitsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVisitsInput
    upsert?: PatientUpsertWithoutVisitsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutVisitsInput, PatientUpdateWithoutVisitsInput>, PatientUncheckedUpdateWithoutVisitsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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
    search?: string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    search?: string
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
    search?: string
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CompanionCreateWithoutPatientInput = {
    name: string
    phone: string
    relationship: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionUncheckedCreateWithoutPatientInput = {
    id?: number
    name: string
    phone: string
    relationship: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionCreateOrConnectWithoutPatientInput = {
    where: CompanionWhereUniqueInput
    create: XOR<CompanionCreateWithoutPatientInput, CompanionUncheckedCreateWithoutPatientInput>
  }

  export type CompanionCreateManyPatientInputEnvelope = {
    data: CompanionCreateManyPatientInput | CompanionCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type VisitCreateWithoutPatientInput = {
    visitDate: Date | string
    visitTime?: string | null
    painLevel?: number | null
    fatigue?: number | null
    drowsiness?: number | null
    nausea?: number | null
    appetiteLoss?: number | null
    shortnessOfBreath?: number | null
    depression?: number | null
    generalHealth?: number | null
    exhaustion?: number | null
    providedService?: string | null
    serviceType?: string | null
    psychologicalSupport?: string | null
    nutrition?: string | null
    mobilityStatus?: string | null
    relationWithFamily?: string | null
    need_psychological?: boolean | null
    need_occupational_therapy?: boolean | null
    need_hospital_transfer?: boolean | null
    need_artificial_nutrition?: boolean | null
    need_assistive_devices?: boolean | null
    need_air_mattress?: boolean | null
    need_physiotherapy?: boolean | null
    need_specialist_consult?: boolean | null
    need_hygiene_pads?: boolean | null
    need_urinary_catheter?: boolean | null
    need_oxygen_device?: boolean | null
    need_social_support?: string | null
    need_home_adaptation?: string | null
    need_legal_consult?: string | null
    need_caregiver_training?: string | null
    notes?: string | null
    improvedSinceLastVisit?: string | null
    previousVisitRecommendations?: string | null
    nextVisitDate?: Date | string | null
    nextVisitType?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitUncheckedCreateWithoutPatientInput = {
    id?: number
    visitDate: Date | string
    visitTime?: string | null
    painLevel?: number | null
    fatigue?: number | null
    drowsiness?: number | null
    nausea?: number | null
    appetiteLoss?: number | null
    shortnessOfBreath?: number | null
    depression?: number | null
    generalHealth?: number | null
    exhaustion?: number | null
    providedService?: string | null
    serviceType?: string | null
    psychologicalSupport?: string | null
    nutrition?: string | null
    mobilityStatus?: string | null
    relationWithFamily?: string | null
    need_psychological?: boolean | null
    need_occupational_therapy?: boolean | null
    need_hospital_transfer?: boolean | null
    need_artificial_nutrition?: boolean | null
    need_assistive_devices?: boolean | null
    need_air_mattress?: boolean | null
    need_physiotherapy?: boolean | null
    need_specialist_consult?: boolean | null
    need_hygiene_pads?: boolean | null
    need_urinary_catheter?: boolean | null
    need_oxygen_device?: boolean | null
    need_social_support?: string | null
    need_home_adaptation?: string | null
    need_legal_consult?: string | null
    need_caregiver_training?: string | null
    notes?: string | null
    improvedSinceLastVisit?: string | null
    previousVisitRecommendations?: string | null
    nextVisitDate?: Date | string | null
    nextVisitType?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitCreateOrConnectWithoutPatientInput = {
    where: VisitWhereUniqueInput
    create: XOR<VisitCreateWithoutPatientInput, VisitUncheckedCreateWithoutPatientInput>
  }

  export type VisitCreateManyPatientInputEnvelope = {
    data: VisitCreateManyPatientInput | VisitCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type CompanionUpsertWithWhereUniqueWithoutPatientInput = {
    where: CompanionWhereUniqueInput
    update: XOR<CompanionUpdateWithoutPatientInput, CompanionUncheckedUpdateWithoutPatientInput>
    create: XOR<CompanionCreateWithoutPatientInput, CompanionUncheckedCreateWithoutPatientInput>
  }

  export type CompanionUpdateWithWhereUniqueWithoutPatientInput = {
    where: CompanionWhereUniqueInput
    data: XOR<CompanionUpdateWithoutPatientInput, CompanionUncheckedUpdateWithoutPatientInput>
  }

  export type CompanionUpdateManyWithWhereWithoutPatientInput = {
    where: CompanionScalarWhereInput
    data: XOR<CompanionUpdateManyMutationInput, CompanionUncheckedUpdateManyWithoutPatientInput>
  }

  export type CompanionScalarWhereInput = {
    AND?: CompanionScalarWhereInput | CompanionScalarWhereInput[]
    OR?: CompanionScalarWhereInput[]
    NOT?: CompanionScalarWhereInput | CompanionScalarWhereInput[]
    id?: IntFilter<"Companion"> | number
    name?: StringFilter<"Companion"> | string
    phone?: StringFilter<"Companion"> | string
    relationship?: StringFilter<"Companion"> | string
    patientId?: IntFilter<"Companion"> | number
    createdAt?: DateTimeFilter<"Companion"> | Date | string
    updatedAt?: DateTimeFilter<"Companion"> | Date | string
  }

  export type VisitUpsertWithWhereUniqueWithoutPatientInput = {
    where: VisitWhereUniqueInput
    update: XOR<VisitUpdateWithoutPatientInput, VisitUncheckedUpdateWithoutPatientInput>
    create: XOR<VisitCreateWithoutPatientInput, VisitUncheckedCreateWithoutPatientInput>
  }

  export type VisitUpdateWithWhereUniqueWithoutPatientInput = {
    where: VisitWhereUniqueInput
    data: XOR<VisitUpdateWithoutPatientInput, VisitUncheckedUpdateWithoutPatientInput>
  }

  export type VisitUpdateManyWithWhereWithoutPatientInput = {
    where: VisitScalarWhereInput
    data: XOR<VisitUpdateManyMutationInput, VisitUncheckedUpdateManyWithoutPatientInput>
  }

  export type VisitScalarWhereInput = {
    AND?: VisitScalarWhereInput | VisitScalarWhereInput[]
    OR?: VisitScalarWhereInput[]
    NOT?: VisitScalarWhereInput | VisitScalarWhereInput[]
    id?: IntFilter<"Visit"> | number
    visitDate?: DateTimeFilter<"Visit"> | Date | string
    visitTime?: StringNullableFilter<"Visit"> | string | null
    painLevel?: IntNullableFilter<"Visit"> | number | null
    fatigue?: IntNullableFilter<"Visit"> | number | null
    drowsiness?: IntNullableFilter<"Visit"> | number | null
    nausea?: IntNullableFilter<"Visit"> | number | null
    appetiteLoss?: IntNullableFilter<"Visit"> | number | null
    shortnessOfBreath?: IntNullableFilter<"Visit"> | number | null
    depression?: IntNullableFilter<"Visit"> | number | null
    generalHealth?: IntNullableFilter<"Visit"> | number | null
    exhaustion?: IntNullableFilter<"Visit"> | number | null
    providedService?: StringNullableFilter<"Visit"> | string | null
    serviceType?: StringNullableFilter<"Visit"> | string | null
    psychologicalSupport?: StringNullableFilter<"Visit"> | string | null
    nutrition?: StringNullableFilter<"Visit"> | string | null
    mobilityStatus?: StringNullableFilter<"Visit"> | string | null
    relationWithFamily?: StringNullableFilter<"Visit"> | string | null
    need_psychological?: BoolNullableFilter<"Visit"> | boolean | null
    need_occupational_therapy?: BoolNullableFilter<"Visit"> | boolean | null
    need_hospital_transfer?: BoolNullableFilter<"Visit"> | boolean | null
    need_artificial_nutrition?: BoolNullableFilter<"Visit"> | boolean | null
    need_assistive_devices?: BoolNullableFilter<"Visit"> | boolean | null
    need_air_mattress?: BoolNullableFilter<"Visit"> | boolean | null
    need_physiotherapy?: BoolNullableFilter<"Visit"> | boolean | null
    need_specialist_consult?: BoolNullableFilter<"Visit"> | boolean | null
    need_hygiene_pads?: BoolNullableFilter<"Visit"> | boolean | null
    need_urinary_catheter?: BoolNullableFilter<"Visit"> | boolean | null
    need_oxygen_device?: BoolNullableFilter<"Visit"> | boolean | null
    need_social_support?: StringNullableFilter<"Visit"> | string | null
    need_home_adaptation?: StringNullableFilter<"Visit"> | string | null
    need_legal_consult?: StringNullableFilter<"Visit"> | string | null
    need_caregiver_training?: StringNullableFilter<"Visit"> | string | null
    notes?: StringNullableFilter<"Visit"> | string | null
    improvedSinceLastVisit?: StringNullableFilter<"Visit"> | string | null
    previousVisitRecommendations?: StringNullableFilter<"Visit"> | string | null
    nextVisitDate?: DateTimeNullableFilter<"Visit"> | Date | string | null
    nextVisitType?: StringNullableFilter<"Visit"> | string | null
    status?: StringFilter<"Visit"> | string
    patientId?: IntFilter<"Visit"> | number
    createdAt?: DateTimeFilter<"Visit"> | Date | string
    updatedAt?: DateTimeFilter<"Visit"> | Date | string
  }

  export type PatientCreateWithoutCompanionsInput = {
    patientName: string
    age: string
    patientStatus: number
    gender: string
    fileOpenDate: Date | string
    idNumber: string
    birthDate: Date | string
    phoneNumber: string
    address: string
    province: string
    maritalStatus: string
    salary?: string | null
    occupation?: string | null
    educationLevel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visits?: VisitCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutCompanionsInput = {
    id?: number
    patientName: string
    age: string
    patientStatus: number
    gender: string
    fileOpenDate: Date | string
    idNumber: string
    birthDate: Date | string
    phoneNumber: string
    address: string
    province: string
    maritalStatus: string
    salary?: string | null
    occupation?: string | null
    educationLevel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    visits?: VisitUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutCompanionsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutCompanionsInput, PatientUncheckedCreateWithoutCompanionsInput>
  }

  export type PatientUpsertWithoutCompanionsInput = {
    update: XOR<PatientUpdateWithoutCompanionsInput, PatientUncheckedUpdateWithoutCompanionsInput>
    create: XOR<PatientCreateWithoutCompanionsInput, PatientUncheckedCreateWithoutCompanionsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutCompanionsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutCompanionsInput, PatientUncheckedUpdateWithoutCompanionsInput>
  }

  export type PatientUpdateWithoutCompanionsInput = {
    patientName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    patientStatus?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    fileOpenDate?: DateTimeFieldUpdateOperationsInput | Date | string
    idNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: VisitUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutCompanionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    patientStatus?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    fileOpenDate?: DateTimeFieldUpdateOperationsInput | Date | string
    idNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    visits?: VisitUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutVisitsInput = {
    patientName: string
    age: string
    patientStatus: number
    gender: string
    fileOpenDate: Date | string
    idNumber: string
    birthDate: Date | string
    phoneNumber: string
    address: string
    province: string
    maritalStatus: string
    salary?: string | null
    occupation?: string | null
    educationLevel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companions?: CompanionCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutVisitsInput = {
    id?: number
    patientName: string
    age: string
    patientStatus: number
    gender: string
    fileOpenDate: Date | string
    idNumber: string
    birthDate: Date | string
    phoneNumber: string
    address: string
    province: string
    maritalStatus: string
    salary?: string | null
    occupation?: string | null
    educationLevel?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    companions?: CompanionUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutVisitsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutVisitsInput, PatientUncheckedCreateWithoutVisitsInput>
  }

  export type PatientUpsertWithoutVisitsInput = {
    update: XOR<PatientUpdateWithoutVisitsInput, PatientUncheckedUpdateWithoutVisitsInput>
    create: XOR<PatientCreateWithoutVisitsInput, PatientUncheckedCreateWithoutVisitsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutVisitsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutVisitsInput, PatientUncheckedUpdateWithoutVisitsInput>
  }

  export type PatientUpdateWithoutVisitsInput = {
    patientName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    patientStatus?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    fileOpenDate?: DateTimeFieldUpdateOperationsInput | Date | string
    idNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companions?: CompanionUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutVisitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    patientName?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    patientStatus?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    fileOpenDate?: DateTimeFieldUpdateOperationsInput | Date | string
    idNumber?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    occupation?: NullableStringFieldUpdateOperationsInput | string | null
    educationLevel?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companions?: CompanionUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type CompanionCreateManyPatientInput = {
    id?: number
    name: string
    phone: string
    relationship: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VisitCreateManyPatientInput = {
    id?: number
    visitDate: Date | string
    visitTime?: string | null
    painLevel?: number | null
    fatigue?: number | null
    drowsiness?: number | null
    nausea?: number | null
    appetiteLoss?: number | null
    shortnessOfBreath?: number | null
    depression?: number | null
    generalHealth?: number | null
    exhaustion?: number | null
    providedService?: string | null
    serviceType?: string | null
    psychologicalSupport?: string | null
    nutrition?: string | null
    mobilityStatus?: string | null
    relationWithFamily?: string | null
    need_psychological?: boolean | null
    need_occupational_therapy?: boolean | null
    need_hospital_transfer?: boolean | null
    need_artificial_nutrition?: boolean | null
    need_assistive_devices?: boolean | null
    need_air_mattress?: boolean | null
    need_physiotherapy?: boolean | null
    need_specialist_consult?: boolean | null
    need_hygiene_pads?: boolean | null
    need_urinary_catheter?: boolean | null
    need_oxygen_device?: boolean | null
    need_social_support?: string | null
    need_home_adaptation?: string | null
    need_legal_consult?: string | null
    need_caregiver_training?: string | null
    notes?: string | null
    improvedSinceLastVisit?: string | null
    previousVisitRecommendations?: string | null
    nextVisitDate?: Date | string | null
    nextVisitType?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanionUpdateWithoutPatientInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanionUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitUpdateWithoutPatientInput = {
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: NullableStringFieldUpdateOperationsInput | string | null
    painLevel?: NullableIntFieldUpdateOperationsInput | number | null
    fatigue?: NullableIntFieldUpdateOperationsInput | number | null
    drowsiness?: NullableIntFieldUpdateOperationsInput | number | null
    nausea?: NullableIntFieldUpdateOperationsInput | number | null
    appetiteLoss?: NullableIntFieldUpdateOperationsInput | number | null
    shortnessOfBreath?: NullableIntFieldUpdateOperationsInput | number | null
    depression?: NullableIntFieldUpdateOperationsInput | number | null
    generalHealth?: NullableIntFieldUpdateOperationsInput | number | null
    exhaustion?: NullableIntFieldUpdateOperationsInput | number | null
    providedService?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableStringFieldUpdateOperationsInput | string | null
    psychologicalSupport?: NullableStringFieldUpdateOperationsInput | string | null
    nutrition?: NullableStringFieldUpdateOperationsInput | string | null
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationWithFamily?: NullableStringFieldUpdateOperationsInput | string | null
    need_psychological?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_occupational_therapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hospital_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_artificial_nutrition?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_assistive_devices?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_air_mattress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_physiotherapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_specialist_consult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hygiene_pads?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_urinary_catheter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_oxygen_device?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_social_support?: NullableStringFieldUpdateOperationsInput | string | null
    need_home_adaptation?: NullableStringFieldUpdateOperationsInput | string | null
    need_legal_consult?: NullableStringFieldUpdateOperationsInput | string | null
    need_caregiver_training?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    improvedSinceLastVisit?: NullableStringFieldUpdateOperationsInput | string | null
    previousVisitRecommendations?: NullableStringFieldUpdateOperationsInput | string | null
    nextVisitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVisitType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitUncheckedUpdateWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: NullableStringFieldUpdateOperationsInput | string | null
    painLevel?: NullableIntFieldUpdateOperationsInput | number | null
    fatigue?: NullableIntFieldUpdateOperationsInput | number | null
    drowsiness?: NullableIntFieldUpdateOperationsInput | number | null
    nausea?: NullableIntFieldUpdateOperationsInput | number | null
    appetiteLoss?: NullableIntFieldUpdateOperationsInput | number | null
    shortnessOfBreath?: NullableIntFieldUpdateOperationsInput | number | null
    depression?: NullableIntFieldUpdateOperationsInput | number | null
    generalHealth?: NullableIntFieldUpdateOperationsInput | number | null
    exhaustion?: NullableIntFieldUpdateOperationsInput | number | null
    providedService?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableStringFieldUpdateOperationsInput | string | null
    psychologicalSupport?: NullableStringFieldUpdateOperationsInput | string | null
    nutrition?: NullableStringFieldUpdateOperationsInput | string | null
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationWithFamily?: NullableStringFieldUpdateOperationsInput | string | null
    need_psychological?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_occupational_therapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hospital_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_artificial_nutrition?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_assistive_devices?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_air_mattress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_physiotherapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_specialist_consult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hygiene_pads?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_urinary_catheter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_oxygen_device?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_social_support?: NullableStringFieldUpdateOperationsInput | string | null
    need_home_adaptation?: NullableStringFieldUpdateOperationsInput | string | null
    need_legal_consult?: NullableStringFieldUpdateOperationsInput | string | null
    need_caregiver_training?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    improvedSinceLastVisit?: NullableStringFieldUpdateOperationsInput | string | null
    previousVisitRecommendations?: NullableStringFieldUpdateOperationsInput | string | null
    nextVisitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVisitType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VisitUncheckedUpdateManyWithoutPatientInput = {
    id?: IntFieldUpdateOperationsInput | number
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: NullableStringFieldUpdateOperationsInput | string | null
    painLevel?: NullableIntFieldUpdateOperationsInput | number | null
    fatigue?: NullableIntFieldUpdateOperationsInput | number | null
    drowsiness?: NullableIntFieldUpdateOperationsInput | number | null
    nausea?: NullableIntFieldUpdateOperationsInput | number | null
    appetiteLoss?: NullableIntFieldUpdateOperationsInput | number | null
    shortnessOfBreath?: NullableIntFieldUpdateOperationsInput | number | null
    depression?: NullableIntFieldUpdateOperationsInput | number | null
    generalHealth?: NullableIntFieldUpdateOperationsInput | number | null
    exhaustion?: NullableIntFieldUpdateOperationsInput | number | null
    providedService?: NullableStringFieldUpdateOperationsInput | string | null
    serviceType?: NullableStringFieldUpdateOperationsInput | string | null
    psychologicalSupport?: NullableStringFieldUpdateOperationsInput | string | null
    nutrition?: NullableStringFieldUpdateOperationsInput | string | null
    mobilityStatus?: NullableStringFieldUpdateOperationsInput | string | null
    relationWithFamily?: NullableStringFieldUpdateOperationsInput | string | null
    need_psychological?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_occupational_therapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hospital_transfer?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_artificial_nutrition?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_assistive_devices?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_air_mattress?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_physiotherapy?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_specialist_consult?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_hygiene_pads?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_urinary_catheter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_oxygen_device?: NullableBoolFieldUpdateOperationsInput | boolean | null
    need_social_support?: NullableStringFieldUpdateOperationsInput | string | null
    need_home_adaptation?: NullableStringFieldUpdateOperationsInput | string | null
    need_legal_consult?: NullableStringFieldUpdateOperationsInput | string | null
    need_caregiver_training?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    improvedSinceLastVisit?: NullableStringFieldUpdateOperationsInput | string | null
    previousVisitRecommendations?: NullableStringFieldUpdateOperationsInput | string | null
    nextVisitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nextVisitType?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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