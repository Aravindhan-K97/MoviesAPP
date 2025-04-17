import Header from "./Movies/Header";
import MoviesContainerPage from "./Movies/MoviesContainerPage";

const Home = () => {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Movies Container Section */}
      <section className="mt-[4rem] max-w-7xl mx-auto px-4">
        <MoviesContainerPage />
      </section>
    </>
  );
};

export default Home;
