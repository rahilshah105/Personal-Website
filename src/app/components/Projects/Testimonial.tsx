// Testimonial.tsx
import React from "react";

interface TestimonialProps {
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <section id="Testimonial" className="w-full pb-12 text-center text-foreground md:leading-tight">
      <h2 className="font-prata text-[3vw]">"{testimonial.quote}"</h2>
      <div className="flex w-full justify-between">
        <p className="text-[2vw]">{testimonial.name}</p>
        <p className="text-[2vw]">{testimonial.role}</p>
      </div>
    </section>
  );
};

export default Testimonial;
