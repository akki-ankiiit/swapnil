import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ParallaxImage from "@/components/ParallaxImage";

const teamMembers = [
  { name: "Eshika Parwani", role: "Head Interior Designer", dept: "Design", image: "https://www.swapniljaggiarchitects.com/admin/uploads/team_section/2.%20ESHIKA%20PARWANI_HEAD%20INTERIOR%20DESIGNER.jpeg", quote: "Design is not just what it looks like, it's how it works." },
  { name: "Sabiya Walyani", role: "Interior Designer", dept: "Design", image: "https://www.swapniljaggiarchitects.com/admin/uploads/team_section/3.SABIYA%20WALYANI_INTERIOR%20DESIGNER.jpeg", quote: "Great design lives in the flawless details." },
  { name: "Kripa Pujara", role: "Architect", dept: "Execution", image: "https://www.swapniljaggiarchitects.com/admin/uploads/team_section/4.KRIPA%20PUJARA_ARCHITECT.jpeg", quote: "Building the foundation for visionary ideas." },
  { name: "Sakshi Shadija", role: "Architect", dept: "Execution", image: "https://www.swapniljaggiarchitects.com/admin/uploads/team_section/5.SAKSHI%20SHADIJA_ARCHITECT.jpeg", quote: "Architecture is the thoughtful making of space." },
  { name: "Vartika Agrawal", role: "Architect", dept: "Design", image: "https://www.swapniljaggiarchitects.com/admin/uploads/team_section/6.VARTIKA%20AGRAWAL_ARCHITECT.jpeg", quote: "Translating imagination into visual reality." },
  { name: "Attul Agrawal", role: "Architect", dept: "Execution", image: "https://www.swapniljaggiarchitects.com/admin/uploads/team_section/7.ATTUL%20AGRAWAL_ARCHITECT.jpeg", quote: "Sourcing the world for unique elements." },
  { name: "Somesh Krishnani", role: "Interior Designer", dept: "Design", image: "https://www.swapniljaggiarchitects.com/admin/uploads/team_section/8.SOMESH%20KRISHNANI_INTERIOR%20DESIGNER.jpeg", quote: "Styling is about telling a space's story." },
];

export default function Team() {
  return (
    <PageTransition>
      <Header theme="light" />
      <main className="min-h-screen bg-porcelain">

        {/* Hero */}
        <section className="relative min-h-[80vh] w-full flex flex-col justify-end pt-32 lg:pt-40 pb-16 md:pb-24 overflow-hidden bg-ink">
          <div className="absolute inset-0 z-0">
            <ParallaxImage
              src="https://www.swapniljaggiarchitects.com/pis_assets/images/TEAM%20PHOTO.jpeg"
              alt="The Team"
              speed={0.6}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20 mix-blend-normal" />
          </div>

          <div className="relative z-10 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto w-full text-porcelain flex flex-col md:flex-row justify-between items-end">
            <div className="max-w-4xl">
              <p className="font-script text-3xl md:text-4xl mb-6 opacity-90 capitalize">Our Team</p>
              <h1 className="text-5xl md:text-[6vw] lg:text-[7vw] leading-[1.1] font-serif mb-6 tracking-tight text-porcelain/95">
                A collective of <br className="hidden md:block" />
                <span className="font-script text-[1.2em] font-normal lowercase pr-8 pb-4 -mb-4 pt-2 -mt-2 pl-4 -ml-4 inline-block opacity-90">creatives.</span>
              </h1>
              <p className="text-sm md:text-lg font-sans opacity-80 max-w-xl font-light tracking-wide mb-10 leading-relaxed">
                Designers, architects, and project managers working together to realise spaces of distinct character and uncompromising quality.
              </p>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="py-16 md:py-24 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto">
          {/* Founder */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-24">
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] w-full overflow-hidden">
                <ParallaxImage
                  src="../images/image.png"
                  alt="Swapnil Jaggi"
                />
              </div>
              <p className="font-script text-5xl text-ink absolute -bottom-6 -right-6 lg:-right-12 z-10">Swapnil Jaggi</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center text-ink">
              <h2 className="text-3xl font-serif mb-2">Swapnil Jaggi</h2>
              <p className="font-serif text-xl md:text-xl opacity-80 mb-8 capitalize">Principal Architect & Founder</p>

              <div className="text-base font-sans text-ink/80 leading-relaxed space-y-6">
                <p>
                  Swapnil brings a refined eye for composition, detail and material relationships to the studio’s work. His approach balances creative expression with the practical realities of how a space must function and endure.
                </p>
                <p>
                  He leads the conceptual direction of Swapnil Jaggi Architects’ high-end residential and hospitality projects, ensuring that every design decision serves the overarching narrative of the space.
                </p>
                <div className="pt-6 mt-6 border-t border-ink/10">
                  <p className="text-sm italic opacity-80">
                    “A beautiful space should never feel intimidating. It should feel like an elevated version of everyday life.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-16 md:py-24 px-5 md:px-8 xl:px-18 bg-ink text-porcelain">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-12 md:mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Many disciplines. One vision.</h2>
              <p className="font-script text-2xl md:text-3xl opacity-80 capitalize">Design · Execution · Coordination · Styling</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
              {teamMembers.map((member, idx) => {
                const nameParts = member.name.split(' ');
                const firstName = nameParts.slice(0, -1).join(' ');
                const lastName = nameParts[nameParts.length - 1];

                return (
                  <div key={idx} className="cursor-pointer [perspective:1000px]">
                    <div className="group relative aspect-[3/4] w-full mb-6 shadow-lg hover:shadow-2xl transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">

                      {/* Front Side */}
                      <div className="absolute inset-0 bg-bone overflow-hidden [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
                        <ParallaxImage
                          src={member.image}
                          alt={member.name}
                          speed={0.15}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-90 mix-blend-multiply" />
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                          <h3 className="text-xl sm:text-2xl font-serif mb-2 text-porcelain">{member.name}</h3>
                          <p className="text-[10px] sm:text-xs font-sans text-porcelain/80 uppercase tracking-widest">{member.role}</p>
                        </div>
                        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms] mix-blend-multiply pointer-events-none" />
                      </div>

                      {/* Back Side */}
                      <div className="absolute inset-0 bg-stone text-ink p-6 flex flex-col items-center justify-center text-center [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:rotateY(180deg)] shadow-inner">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-4 border border-ink/10 p-1 bg-porcelain">
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-full filter grayscale opacity-90" />
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl mb-1">{member.name}</h3>
                        <p className="text-[9px] sm:text-[10px] font-sans uppercase tracking-widest text-ink/50 mb-4 sm:mb-6">{member.role}</p>

                        <p className="font-sans text-xs sm:text-sm font-light italic leading-relaxed text-ink/80 mb-6 sm:mb-8 px-2 relative">
                          <span className="absolute -top-3 -left-2 text-3xl opacity-20 font-serif">"</span>
                          {member.quote}
                          <span className="absolute -bottom-4 -right-2 text-3xl opacity-20 font-serif">"</span>
                        </p>

                        <p className="font-script text-3xl text-ink/80 capitalize">{firstName}</p>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Studio Culture */}
        <section className="py-16 md:py-24 px-5 md:px-8 xl:px-18 max-w-[1440px] mx-auto text-ink text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed">
            “Good design is rarely a <span className="font-script text-[1.2em] font-normal lowercase">solitary act.</span>”
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="aspect-square bg-bone overflow-hidden">
              <ParallaxImage src="https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=600" alt="Culture 1" speed={0.1} />
            </div>
            <div className="aspect-square bg-bone overflow-hidden mt-8 md:mt-16">
              <ParallaxImage src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600" alt="Culture 2" speed={0.1} />
            </div>
            <div className="aspect-square bg-bone overflow-hidden mt-4 md:mt-8">
              <ParallaxImage src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600" alt="Culture 3" speed={0.1} />
            </div>
            <div className="aspect-square bg-bone overflow-hidden mt-12 md:mt-24">
              <ParallaxImage src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600" alt="Culture 4" speed={0.1} />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </PageTransition>
  );
}
