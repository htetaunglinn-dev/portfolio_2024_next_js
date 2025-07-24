/**
 * Security utilities for safe external link handling and URL validation
 */

// List of allowed domains for external links
const ALLOWED_DOMAINS = [
  'github.com',
  'linkedin.com', 
  'x.com',
  'twitter.com',
  'facebook.com',
  'web.facebook.com',
  'vercel.app',
  'air-bnb-sooty-gamma.vercel.app',
  'dev-env-five.vercel.app',
  'global-supply.vercel.app',
  'smilaxglobal.com',
  'thitsaworks.com',
  'gofive.co.th'
];

/**
 * Validates if a URL is safe for external linking
 * @param url - The URL to validate
 * @returns boolean - Whether the URL is safe
 */
export const isUrlSafe = (url: string): boolean => {
  try {
    const urlObj = new URL(url);
    
    // Only allow HTTPS protocol (except for localhost in development)
    if (urlObj.protocol !== 'https:' && urlObj.protocol !== 'http:') {
      return false;
    }
    
    // Check if domain is in allowed list
    const hostname = urlObj.hostname.toLowerCase();
    return ALLOWED_DOMAINS.some(domain => 
      hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
};

/**
 * Sanitizes external link attributes for security
 * @param url - The URL to link to
 * @returns Object with secure link attributes
 */
export const getSecureLinkProps = (url: string) => {
  if (!isUrlSafe(url)) {
    console.warn(`Potentially unsafe URL blocked: ${url}`);
    return {
      href: '#',
      target: '_self',
      rel: 'nofollow'
    };
  }

  return {
    href: url,
    target: '_blank',
    rel: 'noopener noreferrer nofollow'
  };
};

/**
 * Validates email addresses
 * @param email - Email to validate
 * @returns boolean - Whether email is valid
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Safely opens external URLs with security measures
 * @param url - URL to open
 */
export const safeWindowOpen = (url: string): void => {
  if (!isUrlSafe(url)) {
    console.error(`Blocked attempt to open unsafe URL: ${url}`);
    return;
  }

  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) {
    newWindow.opener = null;
  }
};

/**
 * Sanitizes string to prevent XSS attacks
 * @param str - String to sanitize
 * @returns Sanitized string
 */
export const sanitizeString = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Rate limiting for actions like form submissions
 */
class RateLimiter {
  private timestamps: Map<string, number[]> = new Map();

  /**
   * Check if action is rate limited
   * @param key - Unique key for the action
   * @param limit - Maximum actions allowed
   * @param windowMs - Time window in milliseconds
   * @returns boolean - Whether action is allowed
   */
  isAllowed(key: string, limit: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const timestamps = this.timestamps.get(key) || [];
    
    // Remove old timestamps outside the window
    const validTimestamps = timestamps.filter(timestamp => now - timestamp < windowMs);
    
    if (validTimestamps.length >= limit) {
      return false;
    }

    validTimestamps.push(now);
    this.timestamps.set(key, validTimestamps);
    return true;
  }
}

export const rateLimiter = new RateLimiter();