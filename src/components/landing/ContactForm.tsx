'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { submitContactForm, type FormState } from '@/app/actions';
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

const initialState: FormState = {
  message: '',
  success: false,
};

const workRequirements = [
  { value: "False Ceiling", icon: <Layers className="h-4 w-4 mr-2" /> },
  { value: "Modular Kitchen", icon: <Soup className="h-4 w-4 mr-2" /> },
  { value: "Carpentry", icon: <Hammer className="h-4 w-4 mr-2" /> },
  { value: "Electrical", icon: <Zap className="h-4 w-4 mr-2" /> },
  { value: "AC Installation", icon: <AirVent className="h-4 w-4 mr-2" /> },
  { value: "Wardrobe", icon: <Shirt className="h-4 w-4 mr-2" /> },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Sending...' : 'Send Proposal'}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Error',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
      if (state.success) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your Name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="Your Email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="contactNumber">Contact Number</Label>
        <Input id="contactNumber" name="contactNumber" placeholder="Your Contact Number" required />
      </div>
       <div className="space-y-2">
        <Label htmlFor="workRequirement">Work Requirement</Label>
        <Select name="workRequirement" required>
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
      <SubmitButton />
    </form>
  );
}
