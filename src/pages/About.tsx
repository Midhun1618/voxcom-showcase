import { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, Send, MapPin, Code2 } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Midhun1618',
      color: 'hover:bg-gray-800 hover:text-white',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/midhunvox',
      color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/midhun-kp',
      color: 'hover:bg-blue-600 hover:text-white',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary">
                <Code2 className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl font-bold md:text-5xl">
                Hi, I'm the creator of
                <span className="block text-gradient">Voxcom</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                A passionate developer dedicated to building innovative digital solutions.
                From voice assistants to mobile apps, I love creating tools that make life easier.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <Card>
                <CardHeader>
                  <CardTitle>About Develpoer</CardTitle>
                  <CardDescription>The story behind Voxcom</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    I'm an Engineering student with a passion for creating meaningful digital experiences.
                    With expertise spanning voice technology, mobile development, and web applications,
                    I enjoy tackling diverse challenges and bringing ideas to life.
                  </p>
                  <p>
                    Voxcom represents my journey as a developer - a showcase of projects that reflect
                    my curiosity, skills, and dedication to continuous learning. Each project here
                    is a labor of love, built to solve real problems or explore new technologies.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to
                    open-source projects, or sharing knowledge with the developer community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="border-y bg-muted/50 py-16">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-bold md:text-3xl">Let's Connect</h2>
              <p className="mt-2 text-muted-foreground">
                Find me on social media or send me a message
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="grid gap-6 sm:grid-cols-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex flex-col items-center gap-4 rounded-xl border bg-card p-6 transition-all duration-300 ${social.color}`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-transparent">
                      <social.icon className="h-7 w-7" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold">{social.label}</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-inherit">
                        {social.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container">
            <div className="mx-auto max-w-2xl">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Mail className="h-5 w-5" />
                    Send a Message
                  </CardTitle>
                  <CardDescription>
                    Have a question or want to work together? Drop me a message!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
