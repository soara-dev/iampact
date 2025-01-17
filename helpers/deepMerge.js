export default function deepMerge(target, source) {
  return Object.entries(source).reduce(
    (acc, [key, value]) => {
      acc[key] =
        value && typeof value === "object"
          ? deepMerge(acc[key] || {}, value)
          : value;
      return acc;
    },
    { ...target }
  );
}
