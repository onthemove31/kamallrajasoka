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

const MarkdownContent: FC<MarkdownContentProps> = ({ content, className }) => (
  <div
    className={cn(
      'markdown-content prose-hashnode dark:prose-invert max-w-none',
      className
    )}
  >
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, rehypeSanitize]}
      components={{
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-primary hover:underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        img: ({ src, alt }) => (
          <img src={src} alt={alt} className="rounded-lg shadow-md my-6 w-full" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  </div>
);

export default MarkdownContent;