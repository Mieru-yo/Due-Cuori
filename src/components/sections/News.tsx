import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { newsItems } from "@/data/news";
import "./News.css";

export function News() {
  return (
    <section className="news" id="actualites">
      <div className="news-header reveal">
        <SectionLabel>// Actualités</SectionLabel>
        <SectionTitle>Journal du projet</SectionTitle>
      </div>
      <div className="news-timeline">
        {newsItems.map((item, i) => (
          <div key={i} className="news-item reveal">
            <div className="news-dot" />
            <div className="news-date-side">
              <span className="news-date">{item.date}</span>
            </div>
            <div className="news-content-side">
              <h3 className="news-title">{item.title}</h3>
              <p className="news-desc">{item.description}</p>
              <span className="news-tag">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
