import Hero from "@/components/Hero";
import About from "@/components/About";
import Criteria from "@/components/Criteria";
import NominationForm from "@/components/NominationForm";
import PageInfo from "@/components/PageInfo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Criteria />
      <NominationForm />
      <PageInfo />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
