import { useState } from "react";

const Index = () => {
  const [active, setActive] = useState(0);

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* ================= TOP NAV ================= */}
<header className="px-6 pt-6 fixed top-0 left-0 w-full bg-background z-50">
  <div className="max-w-5xl mx-auto flex items-center justify-between">
    {/* Left side - Navigation links */}
    <nav className="flex flex-wrap gap-5 sm:gap-6 body-text text-sm">
      <span
        onClick={() => setActive(0)}
        className={`cursor-pointer transition-colors ${
          active === 0 ? "font-medium" : "text-muted-foreground"
        } hover:text-foreground/80`}
      >
        whoami
      </span>
      <span
        onClick={() => setActive(1)}
        className={`cursor-pointer transition-colors ${
          active === 1 ? "font-medium" : "text-muted-foreground"
        } hover:text-foreground/80`}
      >
        projects
      </span>
      <span
        onClick={() => setActive(2)}
        className={`cursor-pointer transition-colors ${
          active === 2 ? "font-medium" : "text-muted-foreground"
        } hover:text-foreground/80`}
      >
        system-design case studies
      </span>
      <span
        onClick={() => setActive(3)}
        className={`cursor-pointer transition-colors ${
          active === 3 ? "font-medium" : "text-muted-foreground"
        } hover:text-foreground/80`}
      >
        blogs
      </span>
    </nav>

    {/* Right side - Resume link only */}
    <a
      href="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"  // ← replace with your actual Google Drive share link
      target="_blank"
      rel="noopener noreferrer"
      className="body-text text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-md hover:bg-muted/50"
    >
      resume
    </a>
  </div>

  <div className="max-w-5xl mx-auto mt-4 border-t border-border" />
</header>
      {/* ================= SLIDER – no global paddingTop anymore ================= */}
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${active * 100}vh)`,
        }}
      >
        {/* ================= WHOAMI ================= */}
<section className="min-h-screen pt-20">
  <div className="px-6 py-10">
    {/* About */}
    <section className="mb-10">
      <div className="flex flex-col sm:flex-row gap-5 max-w-4xl mx-auto">
        <span className="section-label w-28 shrink-0 text-right sm:text-right">
          about
        </span>

        <div className="body-text space-y-4 leading-snug">
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
              <i>
                Government College of Engineering and Leather Technology
                (GCELT),Kolkata
              </i>
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
              <strong>Java backend</strong> for an{" "}
              <strong>E-Learning System</strong></u>, using functional programming
            (lambdas, streams), Spring annotations (<code>@Autowired</code>,{" "}
            <code>@Entity</code>, <code>@Service</code>), the Java Collections
            Framework, and <strong>Hibernate</strong> (JPA) for database
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

    {/* Tech */}
    <section className="mb-10">
      <div className="flex flex-col sm:flex-row gap-5 max-w-4xl mx-auto">
        <span className="section-label w-28 shrink-0 text-right">
          techs
        </span>

        <div className="body-text space-y-2.5 leading-snug">
          <p><span className="font-medium">Languages:</span> Java, SQL</p>
          <p><span className="font-medium">Frameworks:</span> Spring Boot, Hibernate/JPA, Spring Security, Spring Cloud</p>
          <p><span className="font-medium">Tools & Infra:</span> Redis, Kafka, ElasticSearch, AWS (EC2/RDS/Beanstalk)</p>
          <p><span className="font-medium">Core CS & Concepts:</span> OOP, SOLID, Design Patterns, Multithreading, Concurrency, REST, Microservices</p>
          <p><span className="font-medium">DSA:</span> Arrays, Strings, Trees, Graphs, DP, Greedy, Backtracking, Binary Search, Hashing</p>
        </div>
      </div>
    </section>

    {/* Education */}
    <section className="mb-10">
      <div className="flex flex-col sm:flex-row gap-5 max-w-4xl mx-auto">
        <span className="section-label w-28 shrink-0 text-right">
          education
        </span>

        <div className="space-y-3">
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

    {/* Reach Out */}
    <section>
      <div className="flex flex-col sm:flex-row gap-5 max-w-4xl mx-auto">
        <span className="section-label w-28 shrink-0 text-right">
          reach out
        </span>

        <div className="body-text flex flex-wrap items-center gap-4">
          <a
            href="mailto:sangramofc@gmail.com"
            className="subtle-link hover:underline text-foreground"
          >
            sangramofc@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/sangramofc/" // ← replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="subtle-link hover:underline text-foreground"
          >
            linkedin
          </a>
          <a
            href="https://x.com/sangramofc" // ← replace with your X handle
            target="_blank"
            rel="noopener noreferrer"
            className="subtle-link hover:underline text-foreground"
          >
            x
          </a>
        </div>
      </div>
    </section>
  </div>
</section>
        {/* ================= PROJECTS ================= */}
        <section className="min-h-screen pt-20 flex items-center justify-center px-6">
          <p className="body-text text-muted-foreground text-center max-w-xl">
            Projects not disclosed due to some versioning and ongoing updates.
          </p>
        </section>

       {/* ================= SYSTEM DESIGN ================= */}
<section className="min-h-screen pt-20 overflow-y-auto px-6 py-10">
  <div className="max-w-4xl mx-auto space-y-8">
    {/* 1 */}
    <div className="space-y-1.5">
      <h3 className="text-xl font-medium text-foreground underline decoration-border/60 underline-offset-4 decoration-1">
        1. Tic-Tac-Toe | <span className="italic text-xs opacity-70">Low-Level Design</span>
      </h3>
      <ul className="list-disc ml-5 space-y-1 text-muted-foreground text-sm leading-tight">
        <li>Implemented complete game logic with board representation and win condition checks.</li>
        <li>Applied clean object-oriented design with separation of concerns.</li>
      </ul>
    </div>

    {/* 2 */}
    <div className="space-y-1.5">
      <h3 className="text-xl font-medium text-foreground underline decoration-border/60 underline-offset-4 decoration-1">
        2. Parking Lot | <span className="italic text-xs opacity-70">Low-Level Design</span>
      </h3>
      <ul className="list-disc ml-5 space-y-1 text-muted-foreground text-sm leading-tight">
        <li>Engineered architecture using SOLID principles and design patterns (Factory, Strategy, Observer) for scalable slot allocation.</li>
        <li>Implemented thread-safe booking system ensuring consistency via database transactions.</li>
      </ul>
    </div>

    {/* 3 */}
    <div className="space-y-1.5">
      <h3 className="text-xl font-medium text-foreground underline decoration-border/60 underline-offset-4 decoration-1">
        3. BookMyShow | <span className="italic text-xs opacity-70">Low-Level Design</span>
      </h3>
      <ul className="list-disc ml-5 space-y-1 text-muted-foreground text-sm leading-tight">
        <li>Designed seat booking system with concurrency control and transaction management.</li>
        <li>Handled showtimes, theatres, movies and user preferences in clean domain model.</li>
      </ul>
    </div>

    {/* 4 */}
    <div className="space-y-1.5">
      <h3 className="text-xl font-medium text-foreground underline decoration-border/60 underline-offset-4 decoration-1">
        4. Splitwise | <span className="italic text-xs opacity-70">Low-Level Design</span>
      </h3>
      <ul className="list-disc ml-5 space-y-1 text-muted-foreground text-sm leading-tight">
        <li>Built algorithmic backend for expense splitting and debt optimization using advanced data structures.</li>
        <li>Enabled multi-method payments and real-time notifications via event-driven patterns.</li>
      </ul>
    </div>

    {/* 5 */}
    <div className="space-y-1.5">
      <h3 className="text-xl font-medium text-foreground underline decoration-border/60 underline-offset-4 decoration-1">
        5. Hotstar Video Streaming Platform | <span className="italic text-xs opacity-70">High-Level Design</span>
      </h3>
      <ul className="list-disc ml-5 space-y-1 text-muted-foreground text-sm leading-tight">
        <li>Architected CDN-based streaming with edge caching and adaptive bitrate for millions of users.</li>
        <li>Integrated real-time analytics and ML pipelines for user behavior analysis.</li>
      </ul>
    </div>

    {/* 6 */}
    <div className="space-y-1.5">
      <h3 className="text-xl font-medium text-foreground underline decoration-border/60 underline-offset-4 decoration-1">
        6. IRCTC Railway Booking System | <span className="italic text-xs opacity-70">High-Level Design</span>
      </h3>
      <ul className="list-disc ml-5 space-y-1 text-muted-foreground text-sm leading-tight">
        <li>Designed distributed system with load balancing, database sharding, and caching for high-concurrency access.</li>
        <li>Developed microservices architecture with API gateway for zero-downtime deployments.</li>
      </ul>
    </div>
  </div>
</section>

        {/* ================= BLOGS ================= */}
        <section className="min-h-screen pt-20 flex items-center justify-center px-6">
          <p className="body-text text-muted-foreground">
            Blogs will be posted soon.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Index;