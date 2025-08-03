import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
            Are You Prepared To
            <br />
            Collaborate With Us?
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Ready to start your design journey? Fill out the form below and we'll contact you to schedule a consultation.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
