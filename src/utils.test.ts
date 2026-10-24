import {describe, expect, it} from 'vitest';
import {getVisitCounts, isPendingVisit, operationsToProcess} from './utils';

describe('fieldwork calculations', () => {
  it('groups visit outcomes without double counting', () => {
    expect(getVisitCounts([
      {status:'Done'}, {status:'Not visited'}, {status:'Needs verification'},
      {status:'Absent'}, {status:'Locked'}, {status:'Revisit required'},
    ])).toEqual({done:1,firstVisit:2,revisit:1,attention:2});
  });

  it('does not process already-synced or repeated operation IDs twice', () => {
    const operations = [{id:'a'}, {id:'b'}, {id:'b'}, {id:'c'}];
    expect(operationsToProcess(operations, ['a'])).toEqual([{id:'b'}, {id:'c'}]);
  });

  it('keeps incomplete outcomes in the planner queue and completed ones out', () => {
    for (const status of ['Not visited', 'Pending', 'Revisit required', 'Locked', 'Absent', 'Needs verification']) {
      expect(isPendingVisit(status), status).toBe(true);
    }
    expect(isPendingVisit('Done')).toBe(false);
    expect(isPendingVisit('Done', true)).toBe(true);
  });
});
