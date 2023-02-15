const ERROR_RATIO = Number(process.env.ERROR_RATIO) || 0.01;

export function shouldEmulateError() {
  return Math.random() < ERROR_RATIO;
}

export class EmulatedError extends Error {
  constructor() {
    super(
      `This is error is emulated one and occurring at certain rate (${
        ERROR_RATIO * 100
      }%). Please handle this properly.`
    );
  }
}
