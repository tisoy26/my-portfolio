import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandLinkedin, IconBrandFacebook, IconMail } from "@tabler/icons-react";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // EmailJS configuration 
    const serviceId = 'service_x248zmc'; 
    const templateId = 'template_r5hihjl'; 
    const publicKey = 'ORgS-SLRSzbNw24c8';

    const templateParams = {
      from_name: `${formData.get('firstname')} ${formData.get('lastname')}`,
      reply_to: formData.get('email'),
      message: `Subject: ${formData.get('subject')}\n\nFrom: ${formData.get('email')}\n\n${formData.get('message')}`,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSubmitStatus('success');
      form.reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black py-20 px-4" id="contact">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="shadow-input rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-neutral-800 p-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Send me a message
            </h3>
            <p className="text-neutral-400 text-sm mb-8">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" name="firstname" placeholder="John" type="text" required />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" name="lastname" placeholder="Doe" type="text" required />
                </LabelInputContainer>
              </div>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  type="email"
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Discussion"
                  type="text"
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-6">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={7}
                  required
                  className={cn(
                    "shadow-input flex w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600 resize-none"
                  )}
                />
              </LabelInputContainer>

              {submitStatus === 'success' && (
                <div className="mb-4 rounded-lg bg-green-500/10 border border-green-500/20 p-3 text-sm text-green-400">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-sm text-red-400">
                  ✗ Failed to send message. Please try again or email me directly.
                </div>
              )}

              <button
                className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-blue-600 to-blue-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent! ✓' : 'Send Message'}
                <BottomGradient />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-neutral-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out
                through any of these channels.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <SocialLink
                icon={<IconMail className="h-5 w-5" />}
                label="Email"
                value="tisoydemaano13@gmail.com"
                href="mailto:tisoydemaano13@gmail.com"
              />
              <SocialLink
                icon={<IconBrandGithub className="h-5 w-5" />}
                label="GitHub"
                value="github.com/tisoy26"
                href="https://github.com/tisoy26"
              />
              <SocialLink
                icon={<IconBrandLinkedin className="h-5 w-5" />}
                label="LinkedIn"
                value="www.linkedin.com/in/joseph-dave-dema-ano-a4bb942ab"
                href="www.linkedin.com/in/joseph-dave-dema-ano-a4bb942ab"
              />
              <SocialLink
                icon={<IconBrandFacebook className="h-5 w-5" />}
                label="Facebook"
                value="facebook.com/josephdave.demaano.5"
                href="https://www.facebook.com/josephdave.demaano.5"
              />
            </div>

            {/* Availability Badge */}
            <div className="mt-8 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <h4 className="text-white font-semibold">Available for Work</h4>
              </div>
              <p className="text-neutral-400 text-sm">
                Currently available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const SocialLink = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-lg border border-neutral-800 bg-zinc-900/30 p-4 transition-all hover:border-neutral-700 hover:bg-zinc-900/50"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-blue-400 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-xs text-neutral-500">{label}</p>
        <p className="text-sm text-white group-hover:text-blue-400 transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
};
