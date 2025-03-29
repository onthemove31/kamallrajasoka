"use client"
import { memo } from "react"
import Link from "next/link"
import { Github, Twitter } from "lucide-react"

const SocialLink = memo(({ href, label, icon: Icon }: {
  href: string;
  label: string;
  icon: typeof Github | typeof Twitter;
}) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground transition-colors hover:text-foreground"
    aria-label={label}
  >
    <Icon className="h-5 w-5" aria-hidden="true" />
  </Link>
));
SocialLink.displayName = 'SocialLink';

export default memo(function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} · Built with Next.js + Tailwind
        </p>
        <nav className="flex items-center gap-4" aria-label="Social links">
          <SocialLink
            href="https://github.com"
            label="Visit GitHub profile"
            icon={Github}
          />
          <SocialLink
            href="https://twitter.com"
            label="Visit Twitter profile"
            icon={Twitter}
          />
        </nav>
      </div>
    </footer>
  )
});

