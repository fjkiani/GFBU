import React from "react"
import buffet from "../images/icons/buffet.png"
import terrace from "../images/icons/terrace.png"
import freeDelivery from "../images/icons/freeDelivery.png"
import mask from "../images/icons/mask.png"
import temp from "../images/icons/temp.png"
import curbside from "../images/icons/curbside.png"
import cooking from "../images/icons/cooking.png"




export default [
    {
      id: 1,
      icon: <img src={buffet} className="icon" />,
      label: "Catering",
      text:
        " Activated charcoal post-ironic unicorn flexitarian tumeric, direct trade man bun mumblecore kickstarter art party. ",
    },
    {
        id: 2,
        icon: <img src={terrace} className="icon" />,
        label: "Outdoor Heated Dining",
        text:
          " Brooklyn mustache polaroid neutra. Wolf subway tile gluten-free bushwick, godard letterpress pitchfork direct trade put a bird on",
      },
      {
        id: 3,
        icon: <img src={freeDelivery} className="icon" />,
        label: "Free Delivery",
        text:
          " Brooklyn mustache polaroid neutra. Wolf subway tile gluten-free bushwick, godard letterpress pitchfork direct trade put a bird on",
      },
      {
        id: 4,
        icon: <img src={mask} className="icon" />,
        label: "COVID-19 Pre-cautions",
        text:
          " Brooklyn mustache polaroid neutra. Wolf subway tile gluten-free bushwick, godard letterpress pitchfork direct trade put a bird on",
      },
      {
        id: 5,
        icon: <img src={cooking} className="icon" />,
        label: "Dine-in",
        text:
          " Brooklyn mustache polaroid neutra. Wolf subway tile gluten-free bushwick, godard letterpress pitchfork direct trade put a bird on",
      },
      {
        id: 6,
        icon: <img src={curbside} className="icon" />,
        label: "Curbside Pickup",
        text:
          " Brooklyn mustache polaroid neutra. Wolf subway tile gluten-free bushwick, godard letterpress pitchfork direct trade put a bird on",
      },
      
    ]