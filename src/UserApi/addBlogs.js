export const addBlogs = async (blogInfo) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/blogs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blogInfo),
  });
  const data = await res.json();
  return data;
};
