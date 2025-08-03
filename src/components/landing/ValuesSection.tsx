import Image from 'next/image';

export default function ValuesSection() {
  return (
    <section id="values" className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter leading-tight">
              Bring Vision
              <span 
                className="inline-block align-middle ml-2 w-28 h-12 rounded-full bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: "url('https://placehold.co/300x200.png')" }}
                data-ai-hint="modern chair"
              ></span>
              <br />
              <span 
                className="inline-block align-middle mr-2 w-28 h-12 rounded-full bg-cover bg-center overflow-hidden"
                style={{ backgroundImage: "url('https://placehold.co/300x200.png')" }}
                data-ai-hint="living room"
              ></span>
              <span className="font-serif-display italic">to Life</span>
              <br />
              with Built.
            </h2>
            
            <div className="space-y-4">
                <h3 className="text-2xl font-bold font-headline text-primary">Insight Tools</h3>
                <p className="text-muted-foreground">
                <span className="text-primary font-semibold">Gain</span> unparalleled insight into your operation, using the many standard dashboards and reports included with the indoor platform. Want to see more? You can easily create custom reports, forms and screens.
                </p>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="https://placehold.co/600x600.png"
              alt="Stylish orange and white cabinet in a well-lit room"
              data-ai-hint="stylish cabinet"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
