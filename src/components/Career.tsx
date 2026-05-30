import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior AI Engineer</h4>
                <h5>Lowe's India · Bengaluru</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Pioneered MyLow Companion — Lowe's enterprise multi-agent AI
              platform — deployed across ~1,900 US stores with 50,000+ daily
              queries. Designed centralized Memory MCP server, drove 90% cost
              reduction via GenAI Contact Center, and enabled 500+ RAG assistants
              across 100+ teams.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Lowe's India · Bengaluru</h5>
              </div>
              <h3>2021–24</h3>
            </div>
            <p>
              Built self-service data profiling (ADP), anomaly detection (ADA),
              and continuous ingestion (ACI) platforms as sole/lead engineer
              using Golang, Kafka, Druid, and REST schedulers for enterprise
              forecasting workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Nokia Networks · Bengaluru</h5>
              </div>
              <h3>2020–21</h3>
            </div>
            <p>
              Built cloud-based network management (FCAPS); led microservices
              monorepo migration and configuration consistency validation in a
              TDD/Agile environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assoc. Sf Engineer</h4>
                <h5>TELUS International · Noida</h5>
              </div>
              <h3>2018–20</h3>
            </div>
            <p>
              Designed virtual assistant APIs, Visual IVR platforms, and
              real-time mobile number portability services using Golang, Python,
              Oracle SOA, and PostgreSQL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
