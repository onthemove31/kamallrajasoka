import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { cn } from '@/lib/utils';

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
            <h1 className="text-4xl font-bold mb-6 text-foreground">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold mt-8 mb-4 text-foreground">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold mt-6 mb-3 text-foreground">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-muted-foreground mb-4">{children}</p>
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
            <div className="my-6">
              <div>
                <img src={src} alt={alt} className="rounded-lg shadow-md w-full" />
                {alt && <p className="text-sm text-muted-foreground text-center mt-2 italic">{alt}</p>}
              </div>
            </div>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 pl-4 text-muted-foreground">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 pl-4 text-muted-foreground">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="mb-1 pl-2 text-muted-foreground">{children}</li>
          ),
          code: ({ children }) => (
            <code className="bg-muted text-foreground px-1.5 py-0.5 rounded transition-colors duration-300 hover:bg-primary/10">
              {children}
            </code>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic my-4">
              {children}
            </blockquote>
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