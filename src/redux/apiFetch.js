export const fetchHandler = async () => {
  try {
    let response = await fetch(
      "https://my-json-server.typicode.com/tiendev123/answers/db"
    );

    let posts = await response.json();
    console.log(posts.data);
    if (!response.ok) {
      const error = new Error("An Error Occured");
      error.details = posts;
      throw error;
    }
    return posts;
  } catch (e) {
    console.log(e.message);
    console.log(e.details);
  }
};
