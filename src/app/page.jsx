import Principal from "@/components/Website/Sections/Principal";
import Services from "@/components/Website/Sections/Services";
import CapaoLab from "@/components/Website/Sections/CapaoLab";

export default function Home() {
  return (
    <main className="w-full h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section id="1" className="snap-always snap-start">
        <Principal />
      </section>
      <div id="2" className="snap-always snap-start">
        <Services />
      </div>
      <div id="3" className="snap-always snap-start">
        <CapaoLab />
      </div>
    </main>
  );
}
