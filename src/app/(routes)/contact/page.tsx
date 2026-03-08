import type { Metadata } from "next";
import ContactUsPage from "@/component/sections/Contact/ContactUsPage";

export const metadata: Metadata = {
  title: "Contact Us | The TechNova Summit",
  description:
    "Get in touch with the TechNova Summit team. We're here to answer any questions about the conference, sponsorships, or speaking opportunities.",
};

const ContactUs = () => {
  return <ContactUsPage />;
};

export default ContactUs;
