import ArticleCard from '@/components/ArticleCard';
import styles from '@/styles/ArticlesPage.module.css';

interface MediumArticle {
  guid: string;
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  description: string;
  categories: string[];
}

interface ArticlesPageProps {
  articles: MediumArticle[];
}

const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Medium Articles</h1>
      <p className={styles.pageSubtitle}>
        Latest posts from <a href="https://medium.com/@narenkpai" target="_blank" rel="noopener noreferrer" className={styles.underline}>Medium</a>.
      </p>
      <div className={styles.container}>
        {articles.length === 0 ? (
          <p>No articles found.</p>
        ) : (
          articles.map((article) => (
            <ArticleCard key={article.guid} article={article} />
          ))
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  let articles: MediumArticle[] = [];
  try {
    const res = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@narenkpai'
    );
    const data = await res.json();
    if (data.items && Array.isArray(data.items)) {
      articles = data.items;
    }
  } catch (e) {
    // Optionally log error
  }
  return {
    props: { articles },
  };
}

export default ArticlesPage;
