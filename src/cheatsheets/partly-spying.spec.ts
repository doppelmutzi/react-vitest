import { describe, it, expect, vi } from 'vitest';
import * as myModule from './myModule';

/* 
Spy on one export and change implementation, spy on the other import by leaving the implementation intact
*/
describe('Spy on and change implementation with vi.spyOn', () => {
  it('should spy on myFunction and change its implementation', () => {
    const spy = vi.spyOn(myModule, 'anotherFunction');
    const spyAndMock = vi.spyOn(myModule, 'myFunction').mockImplementation((arg) => {
      return `spied value: ${arg}`;
    });

    const resultMock = myModule.myFunction('test');
    const resultSpy = myModule.anotherFunction();

    expect(vi.isMockFunction(myModule.myFunction)).toBe(true);
    expect(vi.isMockFunction(myModule.anotherFunction)).toBe(true);

    expect(resultSpy).toBe('Another original value');
    expect(spy).toHaveBeenCalledTimes(1);

    expect(resultMock).toBe('spied value: test');
    expect(spyAndMock).toHaveBeenCalledTimes(1);
    expect(spyAndMock).toHaveBeenCalledWith('test');
  });
});