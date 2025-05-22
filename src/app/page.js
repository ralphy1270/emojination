import Image from "next/image";
import Hero from "@/src/components/Hero";
import Form from "@/src/components/Form";
import Features from "@/src/components/Features";
import Faq from "@/src/components/Faq";
import Footer from "@/src/components/Footer";

export default function Home() {
  console.log("5:22");
  return (
    <>
    <Hero />
    <Form />
    <Features/>
    <Faq/>
    <Footer/>
    </>
  );
}
