// src/pages/Insights.jsx
import { useState, useEffect } from "react";
import { Reveal } from "../hooks/useReveal";

/**
 * Helper to proxy any URL through CodeTabs (no CORS issues).
 * Returns raw text.
 */
async function fetchProxy(url) {
  const proxyUrl =
    "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent(url);
  const res = await fetch(proxyUrl);
  if (!res.ok) throw new Error(`Proxy fetch failed for ${url}`);
  return res.text();
}

export default function Insights() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // 1) Load and parse the RSS feed from Medium
        const rssXmlString = await fetchProxy(
          "https://medium.com/feed/@apex_analytica"
        );
        const parser = new DOMParser();
        const rssDoc = parser.parseFromString(rssXmlString, "text/xml");
        const items = Array.from(rssDoc.querySelectorAll("item")).slice(0, 6);

        // 2) Extract basic info + short description
        const basic = items.map((item) => {
          const title = item.querySelector("title")?.textContent || "";
          const link = item.querySelector("link")?.textContent || "";
          const pubDate = item.querySelector("pubDate")?.textContent || "";

          const rawHtml =
            item.querySelector("content\\:encoded")?.textContent ||
            item.querySelector("description")?.textContent ||
            "";
          const textOnly = rawHtml.replace(/<[^>]+>/g, "").trim();
          const description =
            textOnly.length > 150
              ? textOnly.slice(0, 150).trim() + "..."
              : textOnly;

          return { title, link, pubDate, description, descHtml: rawHtml };
        });

        // 3) For each post, fetch its HTML via proxy and pull og:image / fallback to RSS <img>
        const withImages = await Promise.all(
          basic.map(async (post) => {
            let image = null;
            try {
              const htmlString = await fetchProxy(post.link);
              const doc = parser.parseFromString(htmlString, "text/html");
              image =
                doc
                  .querySelector('meta[property="og:image"]')
                  ?.getAttribute("content") ||
                doc
                  .querySelector('meta[name="twitter:image"]')
                  ?.getAttribute("content") ||
                doc.querySelector('link[rel="image_src"]')?.href ||
                null;
            } catch {
              // ignore
            }
            if (!image) {
              const m = post.descHtml.match(/<img[^>]+src="([^">]+)"/);
              image = m ? m[1] : null;
            }
            return { ...post, image };
          })
        );

        setPosts(withImages);
      } catch (e) {
        console.error(e);
        setError("Load failed");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="mx-auto max-w-5xl space-y-12 px-4 py-24">
      <Reveal>
        <h1 className="text-4xl font-bold text-center">Insights</h1>
      </Reveal>

      {loading && (
        <p className="text-center text-lg text-slate-300">Loading articles…</p>
      )}
      {error && (
        <p className="text-center text-red-500">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.link} delay={0.1 + i * 0.1}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl bg-primary-light shadow hover:shadow-lg transition overflow-hidden"
              >
                {post.image && (
                  <div className="h-56 w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-200 mb-4">
                    {post.description}
                  </p>
                  <p className="text-xs text-slate-400">
                    {new Date(post.pubDate).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </section>
  );
}
