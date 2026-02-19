export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/') {
      url.pathname = '/job.html';
    }
    return env.ASSETS.fetch(new Request(url.toString(), request));
  }
}
