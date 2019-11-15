export function loadOrDefault<T>(key: string, defaultData: T): T {
  const stored = window.localStorage.getItem(key);
  if (stored) {
    try {
      return JSON.parse(stored) as T;
    } catch (e) {
      return defaultData;
    }
  } else {
    return defaultData;
  }
}
