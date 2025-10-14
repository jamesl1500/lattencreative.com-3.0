'use client';

interface SocialShareButtonsProps {
  title: string;
  description: string;
  url?: string;
}

export default function SocialShareButtons({ title, description, url }: SocialShareButtonsProps) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  
  const shareOnTwitter = () => {
    const text = `${title} - ${description}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="share-buttons">
      <button 
        className="share-btn twitter"
        onClick={shareOnTwitter}
      >
        Share on Twitter
      </button>
      <button 
        className="share-btn linkedin"
        onClick={shareOnLinkedIn}
      >
        Share on LinkedIn
      </button>
      <button 
        className="share-btn facebook"
        onClick={shareOnFacebook}
      >
        Share on Facebook
      </button>
    </div>
  );
}