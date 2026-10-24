export type VisitLike = { status: string };
export type OperationLike = { id: string };

/** A completed visit is pending again only when it has a separate open task. */
export function isPendingVisit(status: string, hasOutstandingTask = false) {
  return status !== 'Done' || hasOutstandingTask;
}

export function getVisitCounts(records: VisitLike[]) {
  return {
    done: records.filter((r) => r.status === 'Done').length,
    firstVisit: records.filter((r) => ['Not visited', 'Needs verification', 'Self-enumeration reported'].includes(r.status)).length,
    revisit: records.filter((r) => r.status === 'Revisit required').length,
    attention: records.filter((r) => r.status === 'Absent' || r.status === 'Locked').length,
  };
}

export function operationsToProcess<T extends OperationLike>(operations: T[], processedIds: string[]) {
  const seen = new Set(processedIds);
  return operations.filter((operation) => {
    if (seen.has(operation.id)) return false;
    seen.add(operation.id);
    return true;
  });
}
