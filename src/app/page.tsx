import NavBar from "@/components/NavBar";
import Test from "@/components/Test";

const Home = () => {
  return (
    <div className="flex flex-col">
      <header className="fixed left-0 bottom-0 flex">
        <NavBar />
      </header>
      <main className="text-vastsea-black">
        <Test />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
