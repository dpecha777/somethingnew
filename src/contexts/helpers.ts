const CTX_ERR_MSG = 'Context Not Available. Forgot to use Context Provider?';
export function assertIsDefined<T>(
  val: T,
  msg = `Expected 'val' to be defined, but received ${val}`,
): asserts val is NonNullable<T> {
  if (val == null) {
    throw new Error(msg);
  }
}

export function assertContext<T>(
  context: T,
  contextName: string,
): asserts context is NonNullable<T> {
  assertIsDefined(context, `${contextName}: ${CTX_ERR_MSG}`);
}
