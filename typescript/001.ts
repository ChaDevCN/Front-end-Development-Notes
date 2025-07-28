type isTwo<T> = T extends 2 ? true : false;
type S<Tuple extends unknown[]> = Tuple extends [infer A, ...infer B]
  ? A
  : never;
type res = S<[1, 2, 3]>;
