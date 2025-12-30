import Headers from "@/components/header";
import CardMan from "@/components/card-man";
import CardIcons from "@/components/card-icons";
import CardPlans from "@/components/card-plans";
import CardObjections from "@/components/card-objections";
import Footer from "@/components/footer";
import Button from "@/components/button";

export default function Home() {
  return (
    <div className="xl:w-[50%] m-auto">
      <Headers />
      <CardMan />
      <CardIcons />
      <CardPlans />
      <div className="bg-[var(--main-text)] text-[var(--background)]">
        <h1 className="font-bold text-[3rem] text-center p-5">Dúvidas Frequentes</h1>
        <p className="text-center pb-5">Acabe com suas dúvidas, comece sua transformação hoje!</p>
      </div>
      <div id="card-line"></div>
      <CardObjections />
      <Button />
      <Footer />
    </div>
  );
}
