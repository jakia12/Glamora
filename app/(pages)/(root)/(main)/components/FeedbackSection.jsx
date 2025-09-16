export default function FeedbackSection() {
  return (
    <div className="feedback-section rel z-1 bg-butter">
      <div className="container-fluid p-0">
        <div className="row">
          {/* Left background image */}
          <div className="col-xl-6">
            <div
              className="feedback-left-image bgs-cover h-100 wow fadeInLeft delay-0-2s"
              style={{
                backgroundImage: "url(/images/testimonial-left.webp)",
              }}
            />
          </div>

          {/* Right content */}
          <div className="col-xl-6">
            <div className="feedback-wrap rel my-145 rm-100 text-center wow fadeInRight delay-0-2s">
              <span className="bg-text danR">Feedback</span>

              <div className="feedback-item-wrap mb-35">
                <div className="feedback-content-item">
                  “An absolutely relaxing experience!{" "}
                  <span className="font-weight-bold">
                    {" "}
                    From the moment I walked in, I felt at ease.
                  </span>{" "}
                  My skin has never felt this refreshed, and the staff were so
                  welcoming.”{" "}
                  <span className="font-weight-normal">– Sophia R.</span>
                </div>
              </div>

              <div className="feedback-logo-wrap">
                <img src="/images/lg1.webp" alt="Feedback" />
                <img src="/images/lg2.webp" alt="Feedback" />
                <img src="/images/lg3.webp" alt="Feedback" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative leaf */}
      {/* <div className="feedback-leaf">
        <img
          src="/assets/images/shapes/feedback-leaf.png"
          alt="Feedback Leaf"
        />
      </div> */}
    </div>
  );
}
