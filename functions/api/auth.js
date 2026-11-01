export async function onRequestGet(context) {
  const clientId = context.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    const keys = Object.keys(context.env || {});
    return new Response(JSON.stringify({
      error: "GITHUB_CLIENT_ID is not set in Cloudflare Environment Variables",
      available_keys: keys
    }, null, 2), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  const url = new URL(context.request.url);
  const redirectUri = `${url.origin}/api/callback`;
  
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo,user`;

  return Response.redirect(githubAuthUrl, 302);
}

// Trigger deployment for env vars
