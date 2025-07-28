### 为什么需要TypeScript

在` JavaScript`中我们编写一段代码，如果不运行，就不知道会不会发生错误，因为`JavaScript`仅提供了动态类型，只有先运行了代码才能报漏出一些错误。

而`TypeScript`在代码执行前就能发现一些潜在的问题，也称之为静态类型检查。

类型决定了变量的内存大小和可以对它进行的操作，保证对什么类型只做什么操作就叫做类型安全，而保证类型安全的方式就是类型检查。

动态类型可能隐藏在代码里的隐患太多了，bug率比较高，所以大型项目注定会用静态语言来开发。

### TypeScript类型

基本类型

- number、boolean、string、object、bigint、symbol、undefined、null

包装类型

- Number、Boolean、String、Object、Symbol

复合类型

- class 、Array、 元祖（Tuple）、接口（interface）、枚举（Enum）

特殊类型

- void、never、any、unknown
  - **never** 代表不可达，比如函数抛异常的时候，返回值就是 never。
  - **void** 代表空，可以是 undefined 或 never。
  - **any** 是任意类型，任何类型都可以赋值给它，它也可以赋值给任何类型（除了 never）。
  - **unknown** 是未知类型，任何类型都可以赋值给它，但是它不可以赋值给别的类型。

字面量类型

- "aa"、 `aaa${string}` 、{a: 1}等

### 装饰的类型

- 只读

  ```typescript
  interface Iperson {
  	readonly name: string;
    age?: number;
  };
  
  type tuple = [string, number?];
  ```

- 条件 

  ```typescript
  type isTwo<T> = T extends 2 ? true : false;
  ```

- 推导 

  ```typescript
  type S<Tuple extends unknown[]> = Tuple extends [infer A, ...infer B]
    ? A
    : never;
  ```

