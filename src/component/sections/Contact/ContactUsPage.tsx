import ContactSection from "./ContactSection";

const ContactUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-bricolage-grotesque">
      <div className="flex flex-col items-center gap-6 justify-center py-32 px-4 md:px-8">
        <h1 className="text-4xl xl:text-6xl font-bold">Contact Us</h1>
        <p>
          Have questions? Want to get involved? We&apos;d love to hear from you!
        </p>
        <div className="mt-6 py-5 mx-auto max-w-6xl w-full">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
