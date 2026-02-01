const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-10">

        {/* About Section */}
        <section className="mb-8">
          <div className="flex gap-6 md:gap-6">
            <span className="section-label w-24 shrink-0 text-right text-lg font-semibold">
              about
            </span>

            <div className="body-text space-y-6 leading-relaxed">
              <p>
                20 y/o developer passionate about{" "}
                <b>backend system design</b>, <b>software architecture</b>,{" "}
                <b>scalability</b>, <b>concurrency</b>, and{" "}
                <b>distributed systems</b> — with a strong focus on
                principled architectural trade-offs.
              </p>

              <p>
                I attend{" "}
                <span className="font-medium">
                  Government College of Engineering and Leather Technology
                  (GCELT), Kolkata
                </span>
                , where I will earn a{" "}
                <span className="font-medium">
                  B.Tech in Information Technology
                </span>
                . Previously completed a diploma in Computer Science and
                Technology (CST), securing <b>2nd merit rank</b> in my department
                (3rd year), with strong performance in Machine Learning and Data
                Science modules.
              </p>

              <p>
                In my recent college major project, I developed a{" "}
                <strong>Java backend</strong> for an{" "}
                <strong>E-Learning System</strong>, using functional programming
                (lambdas, streams), Spring annotations (<code>@Autowired</code>,{" "}
                <code>@Entity</code>, <code>@Service</code>), the Java Collections
                Framework, and <strong>Hibernate (JPA)</strong> for database
                integration and transaction management.
              </p>

              <p>
                I focus on <span className="font-medium">API design</span>,{" "}
                <span className="font-medium">data modeling</span>, scalability
                strategies, and evaluating architectural trade-offs in
                large-scale backend systems.
              </p>
            </div>
          </div>
        </section>

        {/* Tech / Skills Section */}
        <section className="mb-8">
          <div className="flex gap-6 md:gap-6">
            <span className="section-label w-24 shrink-0 text-right text-lg font-semibold">
              techs
            </span>

            <div className="body-text space-y-2 leading-snug">
              <p>
                <span className="font-medium">DSA:</span>{" "}
                Recursion, Dynamic Programming, Graphs
              </p>

              <p>
                <span className="font-medium">Core CS:</span>{" "}
                DBMS, Operating Systems, Computer Networks
              </p>

              <p>
                Sockets, <span className="font-medium">multithreading</span>,
                basic schedulers
              </p>

              <p>
                <span className="font-medium">
                  System Design Case Studies (LLD / HLD):
                </span>{" "}
                Tic-Tac-Toe, Parking Lot, Splitwise, BookMyShow, Hotstar, IRCTC
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <div className="flex gap-6 md:gap-6">
            <span className="section-label w-24 shrink-0 text-right text-lg font-semibold">
              education
            </span>

            <div className="space-y-4">
              <div>
                <p className="edu-title">
                  UG Diploma in Computer Science & Technology
                </p>
                <p className="edu-meta">
                  The Calcutta Technical School — OGPA: 8.7 | Nov’22 – May’25
                </p>
              </div>

              <div>
                <p className="edu-title">
                  B.Tech in Information Technology
                </p>
                <p className="edu-meta">
                  Government College of Engineering and Leather Technology |
                  Dec’25 – Jun’28
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reach Out Section */}
        <section>
          <div className="flex gap-6 md:gap-6">
            <span className="section-label w-24 shrink-0 text-right text-lg font-semibold">
              reach out
            </span>

            <div className="body-text space-y-1">
              <p>
                <a
                  href="mailto:sangramofc@gmail.com"
                  className="subtle-link"
                >
                  sangramofc@gmail.com
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
