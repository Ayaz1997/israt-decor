const stats = [
  {
    value: '10+',
    label: 'Stunning Spaces Designed',
  },
  {
    value: '5+',
    label: 'Years of Experience',
  },
  {
    value: '20+',
    label: 'Happy Clients Served',
  },
];

export default function StatsSection() {
  return (
    <section className="pb-12 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="bg-secondary rounded-2xl p-8">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3 md:divide-x md:divide-primary/50">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center text-center px-4">
                  <p className="text-4xl md:text-5xl font-bold font-headline text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}