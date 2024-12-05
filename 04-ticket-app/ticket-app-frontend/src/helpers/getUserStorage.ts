export const getUserStorage = (): {
  agent: string | null;
  desktop: string | null;
} => {
  return {
    agent: localStorage.getItem("agent") || null,
    desktop: localStorage.getItem("desktop") || null,
  };
};
