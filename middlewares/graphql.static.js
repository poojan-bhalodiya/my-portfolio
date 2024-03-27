export const getStaticData = async () => {
  try {
    const res = await axios.post("http://localhost:4000/graphql", {
      query: "{ static-json }",
    });
    const detail = res.data.data.language;
    console.log(detail);
  } catch (e) {
    console.log("err", e);
  }
};
