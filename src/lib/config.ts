export const config = {
  // For GitHub Pages, we need to handle routing differently
  // Static assets use assetPrefix, but we need to handle the base path for navigation
  basePath: process.env.NODE_ENV === 'production' ? '/tmp-testing' : '',
  
  getAssetPath: (path: string): string => {
    // For static assets, we don't need the basePath since assetPrefix handles it
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${cleanPath}`;
  },
  
  getImagePath: (imageName: string): string => {
    return config.getAssetPath(imageName);
  },
  
  // Helper for navigation links that need the base path
  getPagePath: (path: string): string => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${config.basePath}/${cleanPath}`;
  }
};

export const getImagePath = config.getImagePath;
export const getAssetPath = config.getAssetPath;
export const getPagePath = config.getPagePath;
