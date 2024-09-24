import React, { useEffect, useRef } from "react";
import "./testimonial.css";

const Testimonial = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    const slideWidth = container.clientWidth / 1;

    const autoSlide = () => {
      scrollAmount += slideWidth;

      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    };
    const slideInterval = setInterval(autoSlide, 2000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="main_div_testimonial_section">
      <div className="div_1_testominial_child">
        <h1 className="Testimonials_heading">Testimonials</h1>
        <h2 className="Testimonials_sub_heading">
          Kind words from our clients
        </h2>
        <p className="testimonial_paragraph">
          We’re more than just service providers; <br />
          we’re your partners, and we stand by that promise.
        </p>
      </div>
      <div className="div_2_testominial_child" ref={containerRef}>
        <div className="slider_div_testimonial_1">
          <img className="img_logos_testimonial" src="./slider_1.png" alt="" />
          <p className="pharagraph_testimonial">
            Collaborating with Jigsaw was like discovering the secret sauce to
            mobile & web design. They turned our Startech. Awards vision into
            blending creativity with a dash of humor that made the whole process
            a delightful adventure. Working with them felt less like a business
            transaction and more like jamming with friends who happen to be
            design geniuses. Big cheers to the team
          </p>
          <h1 className="last_heading_testimonial">Liza Tikher</h1>
          <span className="last_span_testimonial">CMO Startech</span>
        </div>
        <div className="slider_div_testimonial_1">
          {" "}
          <img className="img_logos_testimonial" src="./slider_6.png" alt="" />
          <p className="pharagraph_testimonial">
            Working with Jigsaw team is a great pleasure for me. By now we have
            collaborated on 4 different projects for 4 years. Everyone from the
            team is extremely proactive and they’ve been exactly on time and
            have a fast turnaround time. Jigsaw approached all of our projects
            thoughtfully and delivered unique solutions according to our needs.
            It is my pleasure to recommend Jigsaw team to other companies.
          </p>
          <h1 className="last_heading_testimonial">Liza Tikher</h1>
          <span className="last_span_testimonial">CMO Startech</span>
        </div>
        <div className="slider_div_testimonial_1">
          {" "}
          <img className="img_logos_testimonial" src="./slider_11.png" alt="" />
          <p className="pharagraph_testimonial">
            We at Binge! are thoroughly impressed with the landing page designed
            by Jigsaw. Their creative approach and attention to detail have
            resulted in a seamless and engaging online experience that perfectly
            encapsulates our brand's ethos. Jigsaw's team was professional and
            responsive, making the entire process efficient and enjoyable. We
            highly appreciate their expertise in web design and would recommend
            their services to anyone looking to enhance their digital presence.
          </p>
          <h1 className="last_heading_testimonial">Diana Alieva</h1>
          <span className="last_span_testimonial">
            Fashion & beauty marketing expert
          </span>
        </div>
        <div className="slider_div_testimonial_1">
          <img className="img_logos_testimonial" src="./Group.png" alt="" />
          <p className="pharagraph_testimonial">
            Collaborating with Jigsaw was like discovering the secret sauce to
            mobile & web design. They turned our Startech. Awards vision into
            blending creativity with a dash of humor that made the whole process
            a delightful adventure. Working with them felt less like a business
            transaction and more like jamming with friends who happen to be
            design geniuses. Big cheers to the team
          </p>
          <h1 className="last_heading_testimonial">Liza Tikher</h1>
          <span className="last_span_testimonial">CMO Startech</span>
        </div>
        <div className="slider_div_testimonial_1">
          <img className="img_logos_testimonial" src="./slider_5.png" alt="" />
          <p className="pharagraph_testimonial">
            Working with Jigsaw team is a great pleasure for me. By now we have
            collaborated on 4 different projects for 4 years. Everyone from the
            team is extremely proactive and they’ve been exactly on time and
            have a fast turnaround time. Jigsaw approached all of our projects
            thoughtfully and delivered unique solutions according to our needs.
            It is my pleasure to recommend Jigsaw team to other companies.
          </p>
          <h1 className="last_heading_testimonial">Liza Tikher</h1>
          <span className="last_span_testimonial">CMO Startech</span>
        </div>
        <div className="slider_div_testimonial_1">
          {" "}
          <img className="img_logos_testimonial" src="./slider_6.png" alt="" />
          <p className="pharagraph_testimonial">
            We at Binge! are thoroughly impressed with the landing page designed
            by Jigsaw. Their creative approach and attention to detail have
            resulted in a seamless and engaging online experience that perfectly
            encapsulates our brand's ethos. Jigsaw's team was professional and
            responsive, making the entire process efficient and enjoyable. We
            highly appreciate their expertise in web design and would recommend
            their services to anyone looking to enhance their digital presence.
          </p>
          <h1 className="last_heading_testimonial">Diana Alievar</h1>
          <span className="last_span_testimonial">
            Fashion & beauty marketing expert
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
