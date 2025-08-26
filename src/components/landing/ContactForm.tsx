'use client';

import { useRef, useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Layers, Soup, Hammer, Zap, AirVent, Shirt } from 'lucide-react';

const workRequirements = [
  { value: "False Ceiling", icon: <Layers className="h-4 w-4 mr-2" /> },
  { value: "Modular Kitchen", icon: <Soup className="h-4 w-4 mr-2" /> },
  { value: "Carpentry", icon: <Hammer className="h-4 w-4 mr-2" /> },
  { value: "Electrical", icon: <Zap className="h-4 w-4 mr-2" /> },
  { value: "AC Installation", icon: <AirVent className="h-4 w-4 mr-2" /> },
  { value: "Wardrobe", icon: <Shirt className="h-4 w-4 mr-2" /> },
];


export default function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [workRequirement, setWorkRequirement] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const message = formData.get('message') as string;
    const requirement = workRequirement;

    if (!name || !message || !requirement) {
        toast({
            title: 'Error',
            description: 'Please fill out all required fields.',
            variant: 'destructive',
        });
        setIsSubmitting(false);
        return;
    }

    const subject = `${requirement} work request by ${name}`;
    const body = message;
    
    const mailtoLink = `mailto:hello@isratdecor.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast({
        title: 'Success!',
        description: 'Your email app has been opened with the details.',
    });
    
    formRef.current?.reset();
    setWorkRequirement('');
    setIsSubmitting(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your Name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="Your Email (for reference)" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contactNumber">Contact Number</Label>
        <Input id="contactNumber" name="contactNumber" placeholder="Your Contact Number" required />
      </div>
       <div className="space-y-2">
        <Label htmlFor="workRequirement">Work Requirement</Label>
        <Select name="workRequirement" required onValueChange={setWorkRequirement} value={workRequirement}>
            <SelectTrigger id="workRequirement">
                <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
                {workRequirements.map((req) => (
                    <SelectItem key={req.value} value={req.value}>
                      <div className="flex items-center">
                        {req.icon}
                        {req.value}
                      </div>
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="How can we help you?" rows={5} required />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Preparing...' : 'Send Proposal'}
      </Button>
    </form>
  );
}
