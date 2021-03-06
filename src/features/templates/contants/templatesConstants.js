import React from "react";
import nanoid from "nanoid";

import Card from "../assets/illustrations/Card";
import Profile from "../assets/illustrations/Profile";
import Folio from "../assets/illustrations/Folio";

export const CATEGORIES = [
  { id: nanoid(), text: "Featured", path: "/templates/featured" },
  { id: nanoid(), text: "Book", path: "/templates/book" },
  { id: nanoid(), text: "Newsletter", path: "/templates/newsletter" },
  { id: nanoid(), text: "Payments", path: "/templates/payments" },
  { id: nanoid(), text: "Podcast", path: "/templates/podcast" },
  { id: nanoid(), text: "Portfolio", path: "/templates/portfolio" },
  { id: nanoid(), text: "Product", path: "/templates/product" },
  { id: nanoid(), text: "Profile", path: "/templates/profile" },
  { id: nanoid(), text: "Service", path: "/templates/service" },
  { id: nanoid(), text: "Video", path: "/templates/video" }
];

export const PROFILE = [
  {
    id: nanoid(),
    title: "Card",
    template: "card",
    description:
      "Create a website/card for your profile and links. The perfect solution for content creators.",
    coverPhoto: <Card />
  },
  {
    id: nanoid(),
    title: "Profile",
    template: "profile",
    description:
      "Create a website for your profile, text, links & newsletter... perfect for content creators.",
    coverPhoto: <Profile />
  },
  {
    id: nanoid(),
    title: "Folio",
    template: "folio",
    description:
      "Create a website for your portfolio. Add images, descriptions & links.",
    coverPhoto: <Folio />
  }
];

export default {
  CATEGORIES
};
