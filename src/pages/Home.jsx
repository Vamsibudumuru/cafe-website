import Hero from "../components/Hero";
import FeaturedMenu from "../components/FeaturedMenu";
import WhyChooseUs from "../components/WhyChooseUs";
import Reviews from "../components/Reviews";
import GalleryPreview from "../components/GalleryPreview";
import ReservationCTA from "../components/ReservationCTA";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <WhyChooseUs />
      <Reviews />
      <GalleryPreview />
      <ReservationCTA />
    </>
  );
}

export default Home;