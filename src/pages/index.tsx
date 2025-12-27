import Headers from "@/components/header";
import CardMan from "@/components/card-man";
import CardIcons from "@/components/card-icons";
import CardPlans from "@/components/card-plans";

export default function Home() {
  return (
    <div>
      <Headers />
      <CardMan />
      <CardIcons />
      <CardPlans />
    </div>
  );
}
