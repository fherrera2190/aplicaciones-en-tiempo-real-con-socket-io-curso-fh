export const getLasts = async () => {
  const resp = await fetch("http://localhost:8080/last");
  const data = await resp.json();
  return data;
};
