import Hero from "@/app/components/Hero";
import OperationalMetrics from "@/app/components/OperationalMetrics";
import StructuralThesis from "@/app/components/StructuralThesis";
import HowItWorks from "@/app/components/HowItWorks";
import AccessRequestForm from "@/app/components/AccessRequestForm";
import ComplianceFooter from "@/app/components/ComplianceFooter";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function Home() {
  return (
    <main>
      <Hero />
      <OperationalMetrics />
      <StructuralThesis />
      <div className="bg-[var(--color-canvas)] py-[var(--space-80)] flex items-center justify-center overflow-hidden">
        <ProjectImage
          id="social_proof"
          className="w-full max-w-[var(--breakpoints-container)] h-auto px-[var(--space-32)]"
        />
      </div>
      <HowItWorks />
      <AccessRequestForm />
      <ComplianceFooter />
    </main>
  );
}