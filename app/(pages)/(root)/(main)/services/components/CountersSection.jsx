const counters = [
  {
    stop: 6203,
    label: "project complete",
    delay: "delay-0-2s",
  },
  {
    stop: 456,
    label: "Expert Members",
    delay: "delay-0-4s",
  },
  {
    stop: 35,
    label: "Years Experience",
    delay: "delay-0-6s",
  },
  {
    stop: 7563,
    label: "Satisfied Clients",
    delay: "delay-0-8s",
  },
];

export default function CounterSection() {
  return (
    <div className="counter-section text-white bg-yellow pt-60 pb-30">
      <div className="container">
        <div className="row">
          {counters.map((c, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className={`counter-item wow fadeInUp ${c.delay}`}>
                <span
                  className="count-text Mont"
                  data-speed="5000"
                  data-stop={c.stop}
                >
                  {c.stop}
                </span>
                <p style={{ fontSize: "20px" }}>{c.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
