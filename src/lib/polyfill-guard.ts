if (typeof window !== 'undefined') {
  const hasModernFeatures =
    'at' in Array.prototype &&
    'flat' in Array.prototype &&
    'flatMap' in Array.prototype &&
    'fromEntries' in Object &&
    'hasOwn' in Object &&
    'trimStart' in String.prototype &&
    'trimEnd' in String.prototype;

  if (hasModernFeatures) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Otimização] Navegador moderno detectado - polyfills reduzidos');
    }
  }
}

export { };

