import { Helmet } from 'react-helmet-async';
import { seo, site } from '@/content/site';

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

export const Seo = ({ title, description, path }: SeoProps) => {
  const url = `${seo.baseUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site.company} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
