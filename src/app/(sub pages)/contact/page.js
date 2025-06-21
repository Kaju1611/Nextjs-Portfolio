import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"
import Form from "@/components/contact/Form";



export default function Contact() {
  return (
    <>
      <Image src={bg} alt="background-image"  className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-centre opacity-25"/>

      
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          Pour One & Ping Me 
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Step into the Circle of Insights and Shape the Future with Data. Whether you're looking to collaborate on AI innovations, explore data-driven solutions, or brainstorm web development ideas, your messages are valuable queries in this ever-evolving algorithm of possibilities. Use the form below to transmit your insights through the digital pipeline, and await a response as precise as a well-tuned model.
          </p>
        </div>
        <Form/>
      </article>
         
        
 
    </>
  );
}
