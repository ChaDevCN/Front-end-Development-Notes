/**
 *
 */

interface Props<T extends any> {
  time: number;
  key: string;
  startTime: number;
  data: T;
}
