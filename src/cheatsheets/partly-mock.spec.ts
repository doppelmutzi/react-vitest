import { describe, it, expect, vi } from 'vitest';
import * as myModule from './myModule';

// Partially mock the module

/*
vi.mock('./myModule', () => { ... }): This allows you to provide a factory function that returns an object with the desired mock implementations.
Partial Mocking: You can mock specific functions while leaving the rest of the module's implementation intact by using vi.importActual to import the original module and then spreading its properties.
*/
vi.mock('./myModule', async () => {
  const originalModule = await vi.importActual<typeof myModule>('./myModule');
  return {
    ...originalModule,
    myFunction: vi.fn().mockReturnValue('mocked value'),
  };
});

describe('Partially mock module with vi.mock', () => {
  it('should mock myFunction and leave anotherFunction intact', () => {
    const result1 = myModule.myFunction('test');
    const result2 = myModule.anotherFunction();

     // Verify that the functions are mock functions
     expect(vi.isMockFunction(myModule.myFunction)).toBe(true);
     expect(vi.isMockFunction(myModule.anotherFunction)).toBe(false);

    expect(result1).toBe('mocked value');
    expect(result2).toBe('Another original value');
    expect(myModule.myFunction).toHaveBeenCalledTimes(1);
    expect(myModule.myFunction).toHaveBeenCalledWith('test');
  });
});