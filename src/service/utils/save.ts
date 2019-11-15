export function save<T>(key: string, data: T) {
  window.localStorage.setItem(key, JSON.stringify(data));
}
