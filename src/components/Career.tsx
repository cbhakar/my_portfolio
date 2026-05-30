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
              <h3>2024–NOW</h3>
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
                <h4>Senior GenAI Consultant</h4>
                <h5>SeenTech Enterprise Solutions · Global</h5>
              </div>
              <h3>2024–NOW</h3>
            </div>
            <p>
              Led complete architecture and development of Tapp (tipping app) integrating 
              Generative AI & payment gateways. Delivered multi-agent workflows, RAG pipelines, 
              and AI strategy consulting for diverse clients across USA, Germany, KSA, and South Africa.
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
                <h4>Golang Consultant</h4>
                <h5>IOCO Digital (MTN) · Bengaluru</h5>
              </div>
              <h3>2021–23</h3>
            </div>
            <p>
              Developed backend microservices for MTN's subscriber-facing mobile app 
              serving millions of users across Africa. Designed scalable REST APIs and 
              gRPC services for high-concurrency telecom workloads using Golang & PostgreSQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
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
                <h4>Assoc. Software Engineer</h4>
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
