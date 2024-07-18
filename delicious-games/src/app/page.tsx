import ProductsSlider from "./components/gamesSlider/productsSlider";
import SellOffer from "./components/sellOffer/sellOffer";
import SliderWrapper from "./components/slider/slider";
import PageHeading from "./components/UI/pageHeading/pageHeading";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <SliderWrapper />
      <SellOffer />
      <section className="w-full max-w-7xl py-10 px-5">
        <PageHeading
          title="OUR GAMES"
          headingLvl={3}
          styles={{ fontSize: "16px" }}
        />
        <ProductsSlider />
      </section>
    </section>
  );
}
