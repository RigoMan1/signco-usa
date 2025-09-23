import Hero from "@/components/sections/Hero";

const Index = () => {
  return (
    <main>
      <Hero
        eyebrow="Introducing SignCo"
        title={
          <>
            The modern way to create, manage, and send documents for signature
          </>
        }
        description={
          <>Build faster with a clean, accessible UI kit. Tailwind-powered and ready for production.</>
        }
        primaryAction={{ label: "Get Started", href: "#" }}
        secondaryAction={{ label: "Learn more", href: "#", variant: "outline" }}
      />
    </main>
  );
};

export default Index;
