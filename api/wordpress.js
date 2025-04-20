// WordPress API proxy for headless CMS integration

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  const baseUrl = process.env.WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2/posts?_embed';
  let url = baseUrl;
  if (req.query && req.query.slug) {
    // Add slug filter for single post fetch
    url = `${baseUrl.split('?')[0]}?slug=${encodeURIComponent(req.query.slug)}&_embed`;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch from WordPress');
    }
    const posts = await response.json();
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
