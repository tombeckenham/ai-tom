const snakeToCamel = (str: string) => {
  return str.replace(/^_+/, '').replace(/_([a-z])/g, (_, c) => c.toUpperCase())
}

export const snakeToCamelOptions = (obj: Record<string, unknown>) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      return [snakeToCamel(key), value]
    }),
  )
}
