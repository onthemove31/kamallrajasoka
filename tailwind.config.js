/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        border: 'rgb(38, 38, 38)', // Custom border color for border-border utility
        background: 'rgb(17, 17, 17)', // Custom background color for bg-background utility
        foreground: 'rgb(243, 244, 246)', // Custom foreground color for text-foreground utility
        primary: {
          DEFAULT: '#6366f1', // Primary color for from-primary, to-primary, border-primary, etc.
        },
        secondary: {
          DEFAULT: '#a1a1aa',
        },
        'primary-foreground': '#fff',
        'secondary-foreground': '#222',
        'muted-foreground': '#888',
        'accent': '#2dd4bf',
        'accent-foreground': '#fff',
        'popover': '#222',
        'popover-foreground': '#fff',
        'destructive': '#ef4444',
        'destructive-foreground': '#fff',
        'ring': '#6366f1',
        'input': '#222',
        'sidebar': '#18181b',
        'sidebar-border': '#27272a',
        'sidebar-foreground': '#e4e4e7',
        'sidebar-accent': '#6366f1',
        'sidebar-accent-foreground': '#fff',
      },
      fontFamily: {
        inter: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      typography: ({ theme }) => ({
        hashnode: {
          css: {
            color: theme('colors.gray.100'),
            maxWidth: '100%',
            fontSize: '1.1rem',
            fontFamily: theme('fontFamily.inter').join(','),
            h1: {
              fontWeight: '800',
              fontSize: theme('fontSize.3xl'),
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            h2: {
              fontWeight: '700',
              fontSize: theme('fontSize.2xl'),
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              fontWeight: '600',
              fontSize: theme('fontSize.xl'),
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            'ul, ol': {
              paddingLeft: '1.5em',
              marginTop: '1em',
              marginBottom: '1em',
            },
            li: {
              marginBottom: '0.5em',
              color: theme('colors.gray.300'),
              fontSize: theme('fontSize.base'),
            },
            strong: {
              fontWeight: '700',
              color: theme('colors.gray.100'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
              color: theme('colors.green.300'),
              fontSize: theme('fontSize.sm'),
              borderRadius: theme('borderRadius.md'),
              padding: '0.2em 0.4em',
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
              color: theme('colors.gray.100'),
              borderRadius: theme('borderRadius.lg'),
              padding: '1em',
            },
            blockquote: {
              borderLeftColor: theme('colors.primary.DEFAULT'),
              fontStyle: 'italic',
              color: theme('colors.gray.300'),
            },
            hr: {
              borderColor: theme('colors.gray.700'),
              margin: '2em 0',
            },
            a: {
              color: theme('colors.blue.400'),
              textDecoration: 'underline',
              fontWeight: '500',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
