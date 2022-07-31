export const fetcher = async (key: keyof Pick<Window["api"], "getAllData">) => {
  const res = await window.api[key]();
  return res;
};
