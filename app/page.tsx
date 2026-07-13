import Hero from "@/app/components/Hero";
import OperationalMetrics from "@/app/components/OperationalMetrics";
import StructuralThesis from "@/app/components/StructuralThesis";
import AccessRequestForm from "@/app/components/AccessRequestForm";
import ComplianceFooter from "@/app/components/ComplianceFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <OperationalMetrics />
      <StructuralThesis />
      <AccessRequestForm />
      <ComplianceFooter />
    </main>
  );
}
