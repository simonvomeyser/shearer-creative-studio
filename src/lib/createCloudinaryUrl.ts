const baseCloudinaryUrl = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`;

export function createCloudinaryUrl(
  url: string,
  width: number,
  height: number
): string {
  const useCloudinary = !(process.env.NEXT_PUBLIC_USE_CLOUDINARY === 'false');
  const looksLikeFullUrl = url.startsWith('http');

  if (!useCloudinary) {
    if (!looksLikeFullUrl) {
      console.warn(
        'It looks like you are trying to use Cloudinary ids while not using Cloudinary (NEXT_PUBLIC_USE_CLOUDINARY=false).'
      );
    }
    return url;
  }

  if (looksLikeFullUrl) {
    console.warn(
      'It looks like you are trying to use fully qualified urls with Cloudinary (NEXT_PUBLIC_USE_CLOUDINARY=true or not set).'
    );
  }

  const transformations = `c_fill,g_custom:face,h_${height},w_${width}/q_auto`;

  // Remove leading and trailing slashes the url and join all url parts together.
  return [baseCloudinaryUrl, transformations, trimSlash(url)].join('/');
}

function trimSlash(str: string) {
  return str.replace(/^\/|\/$/g, '');
}