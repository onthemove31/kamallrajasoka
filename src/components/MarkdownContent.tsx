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
      'markdown-content prose prose-neutral dark:prose-invert max-w-none',
      // Custom blog-like tweaks:
      '[&_.prose-h2]:text-2xl [&_.prose-h2]:font-bold [&_.prose-h2]:mt-10 [&_.prose-h2]:mb-4',
      '[&_.prose-h3]:text-xl [&_.prose-h3]:font-semibold [&_.prose-h3]:mt-8 [&_.prose-h3]:mb-3',
      '[&_.prose-strong]:font-bold',
      '[&_.prose-ul]:pl-6 [&_.prose-ul]:list-disc [&_.prose-ul]:text-gray-400 dark:[&_.prose-ul]:text-gray-500',
      '[&_.prose-li]:mb-2 [&_.prose-li]:text-base',
      '[&_.prose-code]:bg-gray-100 dark:[&_.prose-code]:bg-gray-800 [&_.prose-code]:px-1.5 [&_.prose-code]:py-0.5 [&_.prose-code]:rounded [&_.prose-code]:text-sm',
      '[&_.prose-pre]:bg-gray-100 dark:[&_.prose-pre]:bg-gray-800 [&_.prose-pre]:p-4 [&_.prose-pre]:rounded [&_.prose-pre]:overflow-x-auto',
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
        code: ({ children, className, ...props }) => (
          <code className={cn(className, 'bg-muted text-foreground px-1.5 py-0.5 rounded text-sm')}>
            {children}
          </code>
        ),
        pre: ({ children }) => (
          <pre className="bg-muted p-4 rounded overflow-x-auto my-4">
            <code>{children}</code>
          </pre>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary pl-4 italic my-4">
            {children}
          </blockquote>
        ),
        hr: () => <hr className="my-8 border-t border-muted" />,
      }}
    >
      {content}
    </ReactMarkdown>
  </div>
);

export default MarkdownContent;