const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-8 py-24 md:py-32">
        
        {/* About Section */}
        <section className="mb-20">
          <div className="flex gap-8 md:gap-16">
            <span className="section-label w-20 md:w-24 shrink-0 text-right">about</span>
            <div className="body-text max-w-xl space-y-6">
              <p>
                20 y/o developer, B.Tech Information Technology undergrad with a strong foundation in data structures, system design, and core computer science concepts. My primary interests lie in backend system design and software architecture, with a focus on scalability, concurrency, and architectural trade-offs in distributed systems.
              </p>
              <p>
                I am particularly interested in implementing and understanding low-level system mechanisms such as socket-based communication, multithreading, and basic scheduling constructs. I actively practice both LLD and HLD by modeling real-world systems such as Parking Lot, Splitwise, BookMyShow, Hotstar, and IRCTC.
              </p>
              <p>
                Through these design exercises, I focus on API design, data modeling, scalability strategies, and evaluating architectural trade-offs in large-scale backend systems.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <div className="flex gap-8 md:gap-16">
            <span className="section-label w-20 md:w-24 shrink-0 text-right">education</span>
            <div className="max-w-xl space-y-6">
              <div>
                <p className="edu-title">UG Diploma in Computer Science & Technology</p>
                <p className="edu-meta">The Calcutta Technical School — OGPA: 8.7</p>
                <p className="edu-meta">Nov 2022 – May 2025</p>
              </div>
              <div>
                <p className="edu-title">B.Tech in Information Technology</p>
                <p className="edu-meta">Government College of Engineering and Leather Technology</p>
                <p className="edu-meta">Dec 2025 – Jun 2028 (Expected)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reach Out Section */}
        <section>
          <div className="flex gap-8 md:gap-16">
            <span className="section-label w-20 md:w-24 shrink-0 text-right">reach out</span>
            <div className="body-text space-y-2">
              <p>
                <span className="text-muted-foreground">mail: </span>
                <a href="mailto:sangramofc@gmail.com" className="subtle-link">
                  sangramofc@gmail.com
                </a>
              </p>
              <p>
                <span className="text-muted-foreground">linkedin: </span>
                <a 
                  href="https://linkedin.com/in/sangramofc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="subtle-link"
                >
                  linkedin.com/in/sangramofc
                </a>
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Index;
