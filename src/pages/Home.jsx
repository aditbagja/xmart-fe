import QRReader from "../components/QRReader";

const Home = () => {
  return (
    <section className="w-full py-32">
      <div className="container mx-auto">
        <h1 className="font-bold text-2xl lg:text-4xl text-center">
          Scan Your QRCode Here
        </h1>
        <div className="flex justify-center mt-10">
          <QRReader />
        </div>
      </div>
    </section>
  );
};

export default Home;
