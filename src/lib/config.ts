export const config = {
  basePath: process.env.NODE_ENV === 'production' ? '/vvr-rice' : '',
  
  getAssetPath: (path: string): string => {
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${config.basePath}/${cleanPath}`;
  },
  
  getImagePath: (imageName: string): string => {
    return config.getAssetPath(imageName);
  }
};

export const getImagePath = config.getImagePath;
export const getAssetPath = config.getAssetPath;
