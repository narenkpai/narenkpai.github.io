import styles from '@/styles/ArticleCard.module.css';

interface MediumArticle {
  guid: string;
  title: string;
  link: string;
  pubDate: string;
  thumbnail?: string;
  description: string;
}

interface ArticleCardProps {
  article: MediumArticle;
}

const getExcerpt = (html: string, maxLength: number) => {
  // Remove HTML tags
  const text = html.replace(/<[^>]+>/g, '');
  if (text.length > maxLength) {
    return text.slice(0, maxLength).trim() + '...';
  }
  return text;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      {article.thumbnail && (
        <div className={styles.imageWrapper}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={article.thumbnail}
            alt={article.title}
            className={styles.image}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
      )}
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.description}>{getExcerpt(article.description, 250)}</p>
      </div>
    </a>
  );
};

export default ArticleCard;
