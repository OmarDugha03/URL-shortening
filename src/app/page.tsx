import {
  NavBar,
  Hero,
  Shorting,
  Advanced,
  CTA,
  Footer,
} from "@components/index";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="py-3 my-4 mb-[-50px]">
        {/* @ts-ignore */}
        <Shorting />
      </div>
      <Advanced />
      <CTA />
      <Footer />
    </>
  );
}
