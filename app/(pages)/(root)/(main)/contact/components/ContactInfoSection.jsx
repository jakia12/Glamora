import Link from "next/link";

const contactInfos = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Location",
    content: "55 Main Street, 2nd Block, New York City",
    delay: "delay-0-2s",
  },
  {
    icon: "fa fa-envelope-open-text",
    title: "Email Us",
    content: (
      <>
        hotlineinfo@gmail.com <br />
        www.beautyinfo.net
      </>
    ),
    delay: "delay-0-4s",
  },
  {
    icon: "fa fa-phone-alt",
    title: "Hotline",
    content: (
      <>
        Call : <Link href="callto:+012(345)7899">+012 (345) 7899</Link>
      </>
    ),
    delay: "delay-0-6s",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="contact-info-section pt-150 rpt-100 pb-120 rpb-70">
      <div className="container">
        <div className="row justify-content-center">
          {contactInfos.map((info, i) => (
            <div key={i} className="col-lg-4 col-sm-6">
              <div className={`contact-info-item wow fadeInUp ${info.delay}`}>
                <i className={info.icon}></i>
                <h4 className="Mont">{info.title}</h4>
                <p>{info.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
