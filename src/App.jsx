import "./App.css";
import BlogCard from "./component/Card/BlogCard";
import BookCard from "./component/Card/BookCard";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";

function App() {
  return (
    <>
      {/* <NavbarComponent />
      <CardBook /> */}
      <Login />
      <Register />
      <BlogCard />
      <BookCard />
    </>
  );
}

export default App;
