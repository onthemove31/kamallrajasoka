import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { cn } from '@/lib/utils';
import AnimatedSection from './animated-section';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

const MarkdownContent: FC<MarkdownContentProps> = ({ content, className }) => {
  return (
    <div className={cn('markdown-content', className)}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <AnimatedSection>
              <h1 className="text-4xl font-bold mb-6 text-foreground">{children}</h1>
            </AnimatedSection>
          ),
          h2: ({ children }) => (
            <AnimatedSection delay={100}>
              <h2 className="text-3xl font-semibold mt-8 mb-4 text-foreground">{children}</h2>
            </AnimatedSection>
          ),
          h3: ({ children }) => (
            <AnimatedSection delay={200}>
              <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground">{children}</h3>
            </AnimatedSection>
          ),
          p: ({ children }) => (
            <AnimatedSection delay={300}>
              <p className="text-muted-foreground mb-4">{children}</p>
            </AnimatedSection>
          ),
          a: ({ href, children }) => (
            <a 
              href={href} 
              className="text-primary hover:underline transition-colors duration-300" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <div className="my-6 animate-fade-in">
              <div className="transform transition-all duration-500 hover:scale-[1.02]">
                <img src={src} alt={alt} className="rounded-lg shadow-md w-full" />
                {alt && <p className="text-sm text-muted-foreground text-center mt-2 italic">{alt}</p>}
              </div>
            </div>
          ),
          ul: ({ children }) => (
            <AnimatedSection delay={500}>
              <ul className="list-disc list-inside mb-4 text-muted-foreground">{children}</ul>
            </AnimatedSection>
          ),
          ol: ({ children }) => (
            <AnimatedSection delay={600}>
              <ol className="list-decimal list-inside mb-4 text-muted-foreground">{children}</ol>
            </AnimatedSection>
          ),
          li: ({ children }) => (
            <li className="mb-2 transform transition-all duration-300 hover:translate-x-1">{children}</li>
          ),
          code: ({ children }) => (
            <code className="bg-muted text-foreground px-1.5 py-0.5 rounded transition-colors duration-300 hover:bg-primary/10">
              {children}
            </code>
          ),
          blockquote: ({ children }) => (
            <AnimatedSection delay={700}>
              <blockquote className="border-l-4 border-primary pl-4 italic my-4 transform transition-all duration-300 hover:translate-x-1">
                {children}
              </blockquote>
            </AnimatedSection>
          ),
        }}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownContent; 