import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  //   const [blogs, setBlogs] = useState([
  //     { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  //     { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  //     {
  //       title: "Web dev top tips",
  //       body: "lorem ipsum...",
  //       author: "mario",
  //       id: 3,
  //     },
  //   ]);

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  //   const [name, setName] = useState("mario");

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  //   function fires on every render
  //   useEffect(() => {
  //     console.log("use effect ran");
  //     console.log(name);
  //   }, [name]);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            // error comes back from the server
            throw Error("Can't fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* <BlogList
        blogs={blogs.filter((blogs) => blogs.author === "mario")}
        title="Mario's Blogs"
      /> */}
      {/* <button onClick={() => setName("luigi")}>change name</button> */}
    </div>
  );
};

export default Home;
