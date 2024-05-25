import { Link } from "react-router-dom";

const NotFound = () => {
  return <section className="not-found dark:bg-black dark:text-white text-center min-h-screen max-w-4xl mx-auto">
    <div className="container">
      <div className="not-found-row mt-60 mb-36">
        <h1 className="font-medium text-[110px]">404 Not Found</h1>
        <p className="mt-10 mb-20 font-normal ">Your visited page not found. You may go home page.</p>
        <Link to={"/"}  className="py-4 px-12 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 hover:">
          Back to home page
        </Link>
      </div>
    </div>
  </section>;
};

export default NotFound;
