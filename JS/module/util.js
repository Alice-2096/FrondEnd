export function average(...numbers) {
  let total = 0;

  for (const iter of numbers) {
    total += iter;
  }
  return total;
}
