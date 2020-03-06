import React from "react";

import "./scss/base.scss";
import { staff } from "./staff";

import { Accordion, AccordionItem } from "../../lib";

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

          {staff.map((obj) => <div className={"staff__card"}>
            <img width={200} height={200} src={obj.image} alt={"staff image of " + obj.name}/>
            <p className={"name"}>{obj.name}</p>
            <p className={"position"}>{obj.position}</p>
          </div>)}
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

        <h1>FAQ</h1>


        <Accordion title={"hello"} atomic={atomicState}>

          <AccordionItem title="General Policies" atomic={atomicState}>
            <h3>Past due accounts</h3>
            <p>Accounts that are past due will be put on hold until brought current or satisfactory arrangements are
              made for payment.</p>


            <h3>Damages to products incurred during transit</h3>
            <p>Purchaser is responsible for filing claims against the carrier for any loss or damage after signing
              receipt of the merchandise.</p>


            <h3>Claims for shortage in shipments</h3>
            <p>All claims must be made within 10 days of receipt of goods.</p>


            <h3>Returns</h3>
            <p>All returns must be approved by the management of Sturdy-Lite. Merchandise shipped in error by
              Sturdy-Lite will be allowed full credit.</p>

          </AccordionItem>
          <AccordionItem title="Ordering" atomic={atomicState}>


            <h3>
              Distributors
            </h3>
            <p>
              Authorized distributors may place orders by email, Phone: 800-251-7082 or Fax: 423-968-3820.
            </p>


          </AccordionItem>
          <AccordionItem title="General Questions" atomic={atomicState}>

            <h3>
              Do you sell for retail?
            </h3>
            <p>
              No. Sturdy-Lite functions as the original equipment manufacturer (OEM); therefore, we only sell to
              distributors. Please call or email us () and we will be happy to find a local distributor for you.
            </p>


            <h3>
              Can I order online?
            </h3>
            <p>Online ordering for distributors is not available at this time.</p>


            <h3>
              Where can I find hardcopies of your product literature?
            </h3>
            <p>You can find literature at a Sturdy-Lite distributor in your area, or you may call or email us, and we
              will mail you copies of literature upon request.</p>


          </AccordionItem>
          <AccordionItem title="Bulkheads/Headerboards" atomic={atomicState}>

            <h3>Why would I need a 22″ turnback wrap?</h3>
            <p>Storage space — All components of a standard side kit (panels, posts, bows, tarps, and accessories) can
              be stored within the area enclosed by a 22″ wrap turnback by securing several pieces of flat bar across
              the back side of the turnback to form a fourth wall.</p>

            <h3>Are all Sturdy-Lite Bulkheads D.O.T. rated?</h3>
            <p>All but one, which is a standard flat 4–post bulkhead that is specified as non–D.O.T. rated.</p>


          </AccordionItem>
          <AccordionItem title="Cab Racks" atomic={atomicState}>
          <h3>Can I order a custom-made rack?</h3>
          <p>Yes, Pending approval from a member of our technical staff. For more information about contact Phil Bays or James Massey.</p>

          <h3>How many different colors of edge detailing trim are available on Sturdy-Lite Cab Racks?</h3>
          <p>We have over 25 different colors to choose from.</p>



            <h3>What type of aluminum are your cab rack panels made of?</h3>
            <p>We only use the highest–strength premium aluminum alloy from 3000 or 5000-series sheet (depending on surface finish) 1/8″-thick, corrugated for extra strength and visual appeal.</p>

          </AccordionItem>
          <AccordionItem title="Loading Ramps" atomic={atomicState}>
            <h3>How do Sturdy-Lite Loading Ramps connect to a trailer?</h3>
            <p>Sturdy-Lite provides a bolt-on trailer receiver which mounts over the trailer’s back rub rail, and receives the ramp unit’s end adapter in a semi-cylindrical cradle/cusp, which is then pinned into place using supplied aluminum rods.</p>


            <h3>What is the highest loading capacity available for your ramp product offerings?</h3>
            <p>Sturdy–Lite’s 16’ Double Ramp Assembly can handle a vehicle which has up to a 20,000 lb load per axle; in other words, this ramp assembly can handle up to a 40,000 lb–GVW two–axle vehicle, so long as the front-to-rear-axle centerline spacing is at least 96″, and the weight distribution between the front and rear axles is no greater than a 3:2 ratio (60%-to-40% margin).</p>


          </AccordionItem>
          <AccordionItem title="Side-Kits" atomic={atomicState}>
            <h3>What roof bow heights are available?</h3>
            <p>Sturdy-Lite roof bows are available in pitches of 10″, 18″, 24″, 28″, 30″, 32″ or 36″ for 96″- and 102″-wide trailers.</p>


            <h3>Do you make side kits for gooseneck trailers?</h3>
            <p>Sorry, we do not make such kits at this time.</p>

            <h3>What panel colors are available?</h3>
            <p>Red, white, blue, burgundy, and black are stock color offerings. Other custom colors are available on a special-order basis.</p>

            <h3>Do you manufacture side kits for drop-deck trailers?</h3>
            <p>Yes; please call for more information. You will need to measure and record the dimensions requested in our side kit survey print–out; see the “Installation” portion of our Side Kits product category webpage to download a copy.</p>


          </AccordionItem>
          <AccordionItem title="Toolboxes" atomic={atomicState}>
            <h3>Do tool boxes with drop-down doors come with cables?</h3>
            <p>No, but they are available. Please make sure that you request cables when you order, if needed.</p>


            <h3>Do double-cabinet doors have a center divider post?</h3>
            <p>No.</p>

            <h3>What gauge thickness of aluminum does Sturdy-Lite use for box shells and lids?</h3>
            <p>As with all of our products, we use 1/8″-thick aluminum sheet at minimum, corrugated during the fabrication process to provide extra strength and load capacity.</p>


            <h3>Are your latches made of stainless steel?</h3>
            <p>Yes, as well as our hinges.</p>

          </AccordionItem>
          <AccordionItem title="Underbody Storage Racks (UBRs) for Sidekits" atomic={atomicState}>
            <h3>Are stainless steel doors available for Sturdy-Lite UBRs?</h3>
            <p>No, we do not offer stainless doors due to size issues. However, we do offer mirror-finish aluminum doors.</p>
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