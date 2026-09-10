import { useEffect } from 'react';

export default function SeoMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | PetaBytz Technologies` : 'Digital Transformation & IT Consulting | PetaBytz Technologies';
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
}
