export default function updateUniqueItems(mapObject) {
  if (!(mapObject instanceof Map)) {
    throw new Error('Cannot process');
  } else {
    for (const key of mapObject.keys()) {
      if (mapObject.get(key) === 1) {
        mapObject.set(key, 100);
      }
    }
  }
  return mapObject;
}
