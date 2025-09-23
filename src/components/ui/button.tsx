import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, Loader2, Sparkles } from "lucide-react";

/**
 * Button design inspired by modern print/merch sites (Vistaprint, MOO, Printful…)
 * — crisp focus rings, gentle elevation, micro-interactions, and a versatile API.
 */

const buttonVariants = cva(
  [
    // base
    "inline-flex items-center justify-center gap-2 select-none whitespace-nowrap",
    "rounded-full text-sm font-medium transition-all",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    // icon sizing
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4",
    // tactile press + smooth hover
    "active:translate-y-[1px]",
  ].join(" "),
  {
    variants: {
      variant: {
        // Solid primary CTA
        default: "bg-primary text-primary-foreground hover:brightness-95",
        // Softer, brand-tinted background (great for secondary CTAs)
        soft: "bg-primary/10 text-primary hover:bg-primary/15",
        // Neutral outline; fills slightly on hover
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        // Quiet, surface-level
        ghost: "hover:bg-accent hover:text-accent-foreground",
        // Inline textual action
        link: "text-primary underline-offset-4 hover:underline",
        // Statusful variants
        destructive: "bg-destructive text-destructive-foreground hover:brightness-95",
        success: "bg-emerald-600 text-white hover:brightness-95",
        warning: "bg-amber-500 text-black hover:brightness-95",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        default: "h-10 px-4",
        lg: "h-11 px-6 text-base",
        xl: "h-12 px-7 text-base",
        icon: "h-10 w-10",
      },
      shape: {
        default: "rounded-full",
        pill: "rounded-full",
      },
      elevation: {
        flat: "shadow-none",
        elevated: "shadow-md hover:shadow-lg",
      },
      fullWidth: {
        false: "",
        true: "w-full",
      },
    },
    compoundVariants: [
      // Make soft/destructive/success/warning work with elevation nicely
      { elevation: "elevated", variant: ["default", "soft", "destructive", "success", "warning"], class: "shadow-primary/20" },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
      elevation: "flat",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /** Show a spinner and disable the button. */
  isLoading?: boolean;
  /** Optional leading visual. */
  leftIcon?: React.ReactNode;
  /** Optional trailing visual. */
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      shape,
      elevation,
      fullWidth,
      asChild = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, shape, elevation, fullWidth }),
          // Smooth color + shadow transitions
          "transition-[background-color,box-shadow,filter,transform] duration-150",
          // Subtle ring when elevated
          elevation === "elevated" && "focus-visible:ring-offset-2",
          className
        )}
        data-state={isLoading ? "loading" : undefined}
        aria-busy={isLoading || undefined}
        disabled={disabled || isLoading}
        {...props}
      >
        {/* Left icon / spinner */}
        {isLoading ? (
          <Loader2 aria-hidden className="animate-spin" />
        ) : (
          leftIcon ?? null
        )}

        {/* Label */}
        <span className={cn(isLoading && "opacity-0")}>{children}</span>

        {/* Right icon */}
        {!isLoading && rightIcon ? rightIcon : null}
      </Comp>
    );
  }
);
Button.displayName = "Button";

/**
 * Preview: A simple showroom for quick visual testing.
 * (You can remove this default export in your production bundle.)
 */
export default function ButtonShowcase() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">Primary CTAs</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Button elevation="elevated">Add to cart</Button>
          <Button elevation="elevated" rightIcon={<ArrowRight />}>
            Continue
          </Button>
          <Button isLoading elevation="elevated">
            Processing
          </Button>
          <Button size="xl" shape="pill" elevation="elevated" leftIcon={<Sparkles />}>
            Start designing
          </Button>
          <Button variant="soft" shape="pill" rightIcon={<ArrowRight />}>
            Explore templates
          </Button>
          <Button variant="outline">Learn more</Button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">States / Feedback</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Button variant="success" elevation="elevated" leftIcon={<Check />}>
            Saved
          </Button>
          <Button variant="warning" elevation="elevated">Low stock</Button>
          <Button variant="destructive" elevation="elevated">Delete</Button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Utilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Button size="icon" aria-label="Settings">
            <Sparkles />
          </Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link" rightIcon={<ArrowRight />}>Learn about paper</Button>
          <Button fullWidth>Full width CTA</Button>
        </div>
      </div>
    </div>
  );
}