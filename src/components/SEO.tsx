import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title, 
  description = "Join NSS BITS Pilani in making a positive impact through community service, education support, health camps, environmental initiatives, and social responsibility programs. Not Me, But You.", 
  keywords = "NSS, BITS Pilani, National Service Scheme, community service, volunteering, social responsibility, education, health camps, environment", 
  image = "/logo/logo.svg", 
  url 
}: SEOProps) {
  const currentUrl = url || window.location.href;
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />

      {/* Open Graph tags */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={currentUrl} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content={image} />
      
      {/* Twitter Card tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
}
