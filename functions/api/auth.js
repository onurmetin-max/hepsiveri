export async function onRequestGet(context) {
  // Client ID açık bir kimliktir, doğrudan koda tanımlandı
  const clientId = context.env.GITHUB_CLIENT_ID || "Ov23li7VR1WfBnOe07nt";
  const url = new URL(context.request.url);
  const redirectUri = `${url.origin}/api/callback`;
  
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo,user`;

  return Response.redirect(githubAuthUrl, 302);
}

// Trigger deployment for env vars
