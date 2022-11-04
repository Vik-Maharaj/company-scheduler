import HeaderSection from "../../components/HeaderSection";
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <HeaderSection page="about" title="About Us" />
      <AboutSection />
      <Footer />
    </>
  );
}