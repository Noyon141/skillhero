export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerLinks: FooterSection[] = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "/features" },
      { title: "Pricing", href: "/pricing" },
      { title: "Roadmap", href: "/roadmap" },
      { title: "API", href: "/api" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Documentation", href: "/docs" },
      { title: "Blog", href: "/blog" },
      { title: "Tutorials", href: "/tutorials" },
      { title: "Support", href: "/support" },
    ],
  },
  //   {
  //     title: "Company",
  //     links: [
  //       { title: "About", href: "/about" },
  //       { title: "Careers", href: "/careers" },
  //       { title: "Contact", href: "/contact" },
  //       { title: "Privacy", href: "/privacy" },
  //     ],
  //   },
  {
    title: "Legal",
    links: [
      { title: "Terms", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Cookie Policy", href: "/cookie-policy" },
      { title: "GDPR", href: "/gdpr" },
    ],
  },
];
