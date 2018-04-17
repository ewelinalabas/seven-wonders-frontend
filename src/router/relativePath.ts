export function relativePath(basePath: string, targetPath: string): string {
  if (0 !== targetPath.indexOf(basePath)) {
    throw new Error(
      `Cannot compute path "${targetPath}" relative to "${basePath}"` +
        `- target path should start from base path`
    );
  }

  return targetPath.substring(basePath.length);
}

export function createRelativePath(basePath: string): (targetPath: string) => string {
  return targetPath => relativePath(basePath, targetPath);
}
