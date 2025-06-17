// src/pages/Insights.jsx
import { useState, useEffect } from "react";
import { Reveal } from "../hooks/useReveal";

/**
 * Helper to fetch via AllOrigins, either as JSON (raw=false)
 * or as plain text (raw=true).
 */
function fetchViaAllOrigins(url, raw = false) {
  const endpoint = raw
    ? "https://api.allorigins.win/raw?url="
    : "https://api.allorigins.win/get?url=";
  return fetch(endpoint + encodeURIComponent(url)).then((res) => {
    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
    return raw ? res.text() : res.json();
  });
}

export default function Insights() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // 1) Fetch the Medium RSS feed
        const rssResponse = await fetchViaAllOrigins(
          "https://medium.com/feed/@apex_analytica"
        );
        const parser = new DOMParser();
        const rssXml = parser.parseFromString(rssResponse.contents, "text/xml");
        const items = Array.from(rssXml.querySelectorAll("item")).slice(0, 6);

        // 2) Extract basic info
        const basicPosts = items.map((item) => {
          const title = item.querySelector("title")?.textContent || "";
          const link = item.querySelector("link")?.textContent || "";
          const pubDate = item.querySelector("pubDate")?.textContent || "";

          // Grab a short description (strip HTML)
          const rawHtml =
            item.querySelector("content\\:encoded")?.textContent ||
            item.querySelector("description")?.textContent ||
            "";
          const text = rawHtml.replace(/<[^>]+>/g, "").trim();
          const description =
            text.length > 150 ? text.slice(0, 150).trim() + "..." : text;

          return { title, link, pubDate, description };
        });

        // 3) For each post, try to fetch its HTML and pull og:image / fall back to RSS <img>
        const postsWithImages = await Promise.all(
          basicPosts.map(async (post) => {
            let image = null;
            try {
              const html = await fetchViaAllOrigins(post.link, true);
              const doc = parser.parseFromString(html, "text/html");

              // Priority: og:image, twitter:image, link[rel=image_src]
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
              // ignore fetch errors, we'll try RSS fallback next
              image = null;
            }

            // 4) If still no image, fall back to first <img> in RSS description
            if (!image) {
              const descHtml =
                items
                  .find((it) => it.querySelector("link")?.textContent === post.link)
                  ?.querySelector("description")?.textContent || "";
              const match = descHtml.match(/<img[^>]+src="([^">]+)"/);
              image = match ? match[1] : null;
            }

            return { ...post, image };
          })
        );

        setPosts(postsWithImages);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section className="mx-auto max-w-5xl space-y-12 px-4 py-24">
      {/* Page Title */}
      <Reveal>
        <h1 className="text-4xl font-bold text-center">Insights</h1>
      </Reveal>

      {/* Loading & Error */}
      {loading && (
        <p className="text-center text-lg text-slate-300">Loading articles…</p>
      )}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      {/* Articles Grid */}
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
                {/* Cover Image */}
                {post.image && (
                  <div className="h-56 w-full overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                {/* Text Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-slate-200 mb-4">{post.description}</p>
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
