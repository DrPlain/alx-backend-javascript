export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value);
  } catch (err) {
    queue.push(err);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
