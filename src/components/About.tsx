import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Senior AI Engineer with 8+ years of full-stack software engineering
          and AI product delivery in Fortune 500 environments. I started my
          career building enterprise backend systems, REST APIs, and
          microservices with Golang and Python — then transitioned into AI,
          where I architected Lowe's flagship platform, MyLow Companion, from
          scratch and scaled it to ~1,900 US stores handling 50,000+ daily
          queries. My expertise spans multi-agent orchestration, MCP server
          design, RAG pipelines, vector databases, and high-performance
          distributed systems — consistently driving outcomes like 90% cost
          reduction and 500+ deployed AI assistants across enterprise teams.
        </p>
      </div>
    </div>
  );
};

export default About;
