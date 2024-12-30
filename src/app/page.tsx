import Main from "@/components/test/Main";
import NavBar from "@/components/test/NavBar";

const Home = () => {
  return (
    // <div className="flex flex-col">
    //   <header className="fixed left-0 bottom-0 flex">
    //     <NavBar />
    //   </header>
    //   <main className="text-vastsea-black">
    //     <Test />
    //   </main>
    //   <footer></footer>
    // </div>
    <div className="flex flex-col">
      <header className="fixed left-0 top-0 flex">
        <NavBar />
      </header>
      <main className="pt-64 text-vastsea-white">
        <Main />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
