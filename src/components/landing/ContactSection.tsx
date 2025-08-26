import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tight">
            Ready to Begin?
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Let's create something extraordinary together. Share your requirements and our team will reach out to schedule your free consultation.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
