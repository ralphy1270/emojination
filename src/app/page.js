import Image from "next/image";
import Hero from "@/src/components/Hero";
import Form from "@/src/components/Form";
import Features from "@/src/components/Features";
import Faq from "@/src/components/Faq";

export default function Home() {
  return (
    <>
    <Hero />
    <Form />
    <Features/>
    <Faq/>
    </>
  );
}
