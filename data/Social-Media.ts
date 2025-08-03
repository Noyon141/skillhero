import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export interface SocialMediaItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const socialMediaData: SocialMediaItem[] = [
  {
    title: "Facebook",
    href: "https://facebook.com/skillhero",
    icon: Facebook,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/skillhero",
    icon: Twitter,
  },
  {
    title: "Instagram",
    href: "https://instagram.com/skillhero",
    icon: Instagram,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/company/skillhero",
    icon: Linkedin,
  },
];
