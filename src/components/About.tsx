import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Senior AI Engineer and independent consultant with 8+ years architecting and
          shipping enterprise-scale AI products at Fortune 500 companies and global
          clients. I designed Lowe's flagship multi-agent AI platform, MyLow
          Companion, entirely from scratch — before LangGraph or Google ADK existed
          — now live across ~1,900 US stores handling 50,000+ daily queries. My
          deep hands-on expertise spans Generative AI, agentic orchestration, MCP
          server design, RAG pipelines, and high-performance vector retrieval.
          With a proven track record across the full project lifecycle — from
          whiteboard to production — I am currently open to freelance, contract,
          and advisory engagements.
        </p>
      </div>
    </div>
  );
};

export default About;
