import { BriefcaseBusiness, CalendarClock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    icon: <BriefcaseBusiness className="h-8 w-8 text-primary" />,
    value: '150+',
    label: 'Projects Completed',
  },
  {
    icon: <CalendarClock className="h-8 w-8 text-primary" />,
    value: '10+',
    label: 'Years of Experience',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: '99%',
    label: 'Client Satisfaction',
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-12 duration-1000" style={{ animationDelay: `${index * 200}ms` }}>
              {stat.icon}
              <p className="text-4xl md:text-5xl font-bold font-headline text-primary mt-4">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
