import { createDefaultPreset } from 'ts-jest';

/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default createDefaultPreset({
  testEnvironment: 'node',
  transform: {
    '^.+.tsx?$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.json',
      },
    ],
  },
});
