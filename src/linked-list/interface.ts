export interface NodeProps<T> {
  value: T | null;
  next: NodeProps<T> | null;
}