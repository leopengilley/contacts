import React, { Component } from 'react';
import '../list.css';
import 'animate.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


const List = (props) => {
  return (
    <Accordion allowZeroExpanded>
      <h1> Contacts </h1>
      <div class="underline"> </div>
      { props.contacts.map( (user) =>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <h2> { user.username } </h2>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel class="animate__animated animate__fadeIn">
          <h4> Name </h4>
          <p> { user.name } </p>
          <h4> Phone </h4>
          <p> { user.phone } </p>
          <h4> Email </h4>
          <p> { user.email } </p>
          <h4> Website </h4>
          <a target="_blank" href={"https://" + user.website }> { user.website } </a>
          <h4> Company </h4>
          <p> { user.company.name } </p>
          <h4> Catch Phrase </h4>
          <p> "{ user.company.catchPhrase }" </p>
          <h4> What They Do </h4>
          <p> { user.company.bs } </p>
        </AccordionItemPanel>
      </AccordionItem>

      )}
    </Accordion>
  );
};

export default List;
