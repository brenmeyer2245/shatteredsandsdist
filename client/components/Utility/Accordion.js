import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

const ShatteredSandsAccordion = (props) => {
    return (
    <div className="accordion-container">
     <Accordion>
      {props.children}
     </Accordion>
    </div>)
}

export default ShatteredSandsAccordion;
