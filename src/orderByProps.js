export default function orderByProps(obj, order = []) {
  if (obj === null || typeof obj !== 'object') {
    return [];
  }

  const result = [];

  for (let i = 0; i < order.length; i += 1) {
    const key = order[i];
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result.push({ key, value: obj[key] });
    }
  }

  const remaining = [];

  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      !order.includes(key)
    ) {
      remaining.push(key);
    }
  }

  remaining.sort();

  for (let i = 0; i < remaining.length; i += 1) {
    const key = remaining[i];
    result.push({ key, value: obj[key] });
  }

  return result;
}
