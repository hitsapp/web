export const metadata = (url: string) => {
  const formattedURL = new URL(url);

  const isGitHubURL =
    formattedURL.hostname === "github.com" && formattedURL.pathname.length > 1;

  const [repoOrUser, repoOrUser2] = formattedURL.pathname
    .split("/")
    .filter(Boolean);

  const pathname = repoOrUser2
    ? `${repoOrUser}/${repoOrUser2}`
    : `@${repoOrUser}`;

  return {
    pathname: isGitHubURL ? pathname : formattedURL.hostname,
    image: isGitHubURL
      ? `https://github.com/${repoOrUser}.png`
      : `https://api.faviconkit.com/${formattedURL.hostname}/40`,
  };
};
