import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/data/articles';
import styles from '@/styles/ArticlesPage.module.css';

const ArticlesPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Articles</h1>
      <p className={styles.pageSubtitle}>
        Manually curated articles. Add your own articles in <code>data/articles.ts</code>.
      </p>
      <div className={styles.container}>
        {articles.length === 0 ? (
          <p>No articles yet. Add some in <code>data/articles.ts</code>.</p>
        ) : (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;
