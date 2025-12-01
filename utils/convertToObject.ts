/* eslint-disable @typescript-eslint/no-explicit-any */
export function convertToSerializableObject(leanDocument: any) {
  for (const key of Object.keys(leanDocument)) {
    if (leanDocument[key].toJSON && leanDocument[key].toString) {
      leanDocument[key] = leanDocument[key].toString();
    }
  }

  return leanDocument;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
