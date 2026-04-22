import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Ingredients from '@/components/Ingredients';
import Product from '@/components/Product';
import Hotel from '@/components/Hotel';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Story />
        <Ingredients />
        <Product />
        <Hotel />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
