const setUser = (data) => {
  return {
    type: "setUser",
    payload: data,
  };
};
export { setUser };