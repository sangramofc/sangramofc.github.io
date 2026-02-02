const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="px-6 py-10">

        {/* About Section */}
        <section className="mb-10">
          <div className="flex gap-5 max-w-4xl mx-auto">
            <span className="section-label w-28 shrink-0 text-right ">
              about
            </span>

            <div className="body-text space-y-5 leading-relaxed">
              <p>
                20 y/o developer passionate about{" "}
                <b>backend system design</b>, <b>software architecture</b>,{" "}s
                <b>scalability</b>, <b>concurrency</b>, and{" "}
                <b>distributed systems</b> — with a strong focus on
                principled architectural trade-offs.
              </p>

              <p>
                I attend{" "}
                <span className="font-medium">
                  <i>Government College of Engineering and Leather Technology
                    (GCELT),Kolkata</i>
                </span>
                , where I will earn a{" "}
                <span className="font-medium">
                  B.Tech in Information Technology (IT)
                </span>
                . Previously completed a engineering-diploma (ug) in Computer Science and
                Technology (CST) , securing <u><i>2nd merit rank</i></u> in my department
                (3rd year), with strong performance in Machine Learning and Data
                Science modules.
              </p>

              <p>
                In my recent college major project, <u>I developed a{" "}
                  <strong><i>Java backends</i></strong> for an{" "}
                  <strong><i>E-Learning System</i></strong></u>, using functional programming
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
        <section className="mb-10">
          <div className="flex gap-5 max-w-4xl mx-auto">
            <span className="section-label w-28 shrink-0 text-right ">
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
        <section className="mb-10">
          <div className="flex gap-5 max-w-4xl mx-auto">
            <span className="section-label w-28 shrink-0 text-right ">
              education
            </span>

            <div className="space-y-4">

              <div>
                <p className="edu-title">
                  B.Tech in Information Technology
                </p>
                <p className="edu-meta">
                  Government College of Engineering and Leather Technology |
                  Dec’25 – Jun’28
                </p>
              </div>

              <div>
                <p className="edu-title">
                  UG Diploma in Computer Science & Technology
                </p>
                <p className="edu-meta">
                  The Calcutta Technical School — OGPA: 8.7 | Nov’22 – May’25
                </p>
              </div>


            </div>
          </div>
        </section>

        {/* Reach Out Section */}
        <section>
          <div className="flex gap-5 max-w-4xl mx-auto">
            <span className="section-label w-28 shrink-0 text-right ">
              reach out
            </span>

            <div className="body-text">
              <a
                href="mailto:sangramofc@gmail.com"
                className="subtle-link"
              >
                sangramofc@gmail.com
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Index;
