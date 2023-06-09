import './App.css';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Card from './components/Card';
import Footer from './components/Footer';
import BlogList from './components/BlogList';

function App() {
  return (
    <div className="App">
      {/* <!-- navigation --> */}
      <Navbar />

      {/* <!-- search --> */}
      <Search />

      <section
        className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
      >
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <BlogList />
        {/*     <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2
              className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
            >
              ALL BLOGS ARE HERE
            </h2>
            <p
              className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ipsa libero labore natus atque, ducimus sed.
            </p>
          </div>

          <div
            className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
          >
            <Card />
          </div>
        </div>
         */}
      </section>
      <Footer />
    </div>
  );
}

export default App;
