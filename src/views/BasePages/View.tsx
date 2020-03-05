import React from "react";

import "./scss/base.scss";
import { staff } from "./staff";

import { Accordion,  AccordionItem} from '../../lib';

export const About = () => {


  return (
    <div className={"About__Page"}>
      <div className={"container"}>
        <div className={"Text__Section"}>

          <h1>About</h1>
          <p>
            Sturdy-Lite was founded in Bristol, TN in September of 1979, in a 30×50 block building, with one part-time
            employee who manufactured aluminum side stakes and roof bows for conversion trailer side-kits. In 1980, a
            new
            plant was built at 2100 Industrial Blvd, which allowed for the cutting and painting operations necessary to
            complete the side-kit construction process. Using the company’s “road warriors,” sales quickly reached up to
            the six figures.
          </p>
          <p>
            Sturdy-Lite began to establish relationships with trailer dealers that pointed out the need to provide side
            kit storage racks, trailer bulkheads and storage boxes. The original building was expanded in 1986 to allow
            for production of these new products, and sales quickly followed, taking the company into the multi-million
            dollar sales range. In 1990, the decision was made to enter into the “headache rack” business. This decision
            turned out to be a very strong springboard for Sturdy-Lite.
          </p>
          <p>
            As sales and respect for products grew, a new facility with state-of-the-art production equipment was built
            in
            1998. New products followed as production capacities increased, allowing production of portable loading
            ramps,
            load levelers, and sliding tarp systems. Today, Sturdy-Lite employs approximately 40 people and manufactures
            in excess of 6,000 Cab Racks and Vaults, 5,000 Toolboxes, and thousands of trailer Bulkheads, Sidekits and
            Loading Ramps annually.
          </p>
          <p>
            Thank you for visiting our web site. We are sure that you’ll find a customer-friendly company with quality
            products at a fair price.
          </p>

        </div>
        <div className="Staff__Section">
          <h2>Our Staff</h2>

          {staff.map( (obj) => <div className={"staff__card"}>
            <img src={obj.image} alt={"staff image of "+obj.name}/>
            <p className={"name"}>{obj.name}</p>
            <p className={"position"}>{obj.position}</p>
          </div> )}
        </div>
      </div>
    </div>
  );
};

export const FAQ = () => {
  // Atomic state means wether or not more than 1 accodion can be open at a time
  const atomicState = false;
  return (
    <div className={"FAQ__Section pt-5"}>
      <div className={"container"}>

        <h2>FAQ</h2>


        <Accordion title={"hello"} atomic={atomicState}>

          <AccordionItem title="Title 1" atomic={atomicState}>
            DER!
          </AccordionItem>
          <AccordionItem title="Title 2" atomic={atomicState}>
            DER! not
          </AccordionItem>

        </Accordion>

      </div>
    </div>
  );
};



export const Contact = () => {
  return (
    <div className={"Contact__Section pt-5"}>
      <div className={"container"}>

        <h2>FAQ</h2>
      </div>
    </div>
  );
};