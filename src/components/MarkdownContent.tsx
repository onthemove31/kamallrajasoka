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
    <div className={cn('markdown-content prose prose-neutral dark:prose-invert max-w-none', className)}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1>{children}</h1>
          ),
          h2: ({ children }) => (
            <h2>{children}</h2>
          ),
          h3: ({ children }) => (
            <h3>{children}</h3>
          ),
          h4: ({ children }) => (
            <h4>{children}</h4>
          ),
          h5: ({ children }) => (
            <h5>{children}</h5>
          ),
          h6: ({ children }) => (
            <h6>{children}</h6>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside pl-6 mb-4">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside pl-6 mb-4">{children}</ol>
          ),
          li: ({ children }) => (
            <li>{children}</li>
          ),
          p: ({ children }) => (
            <p>{children}</p>
          ),
          a: ({ href, children }) => (
            <a href={href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>
          ),
          img: ({ src, alt }) => (
            <img src={src} alt={alt} className="rounded-lg shadow-md my-6 w-full" />
          ),
          code: ({ children, className, ...props }) => (
            <code className={cn(className, 'bg-muted text-foreground px-1.5 py-0.5 rounded')}>{children}</code>
          ),
          pre: ({ children }) => (
            <pre className="bg-muted p-4 rounded overflow-x-auto my-4"><code>{children}</code></pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic my-4">{children}</blockquote>
          ),
          hr: () => <hr className="my-8 border-t border-muted" />,
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