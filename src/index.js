export default {
  async fetch(request, env, ctx) {
    return new Response("✅ Hello from MCP Outlook Worker!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
