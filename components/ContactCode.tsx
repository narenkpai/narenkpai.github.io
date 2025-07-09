import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'narenpai.com',
    href: 'https://narenpai.com',
  },
  {
    social: 'email',
    link: 'narenkpai@gmail.com',
    href: 'mailto:narenkpai@gmail.com',
  },
  {
    social: 'github',
    link: 'narenkpai',
    href: 'https://github.com/narenkpai',
  },
  {
    social: 'linkedin',
    link: 'narenpai',
    href: 'https://www.linkedin.com/in/naren-pai/',
  },
  {
    social: 'flickr',
    link: 'narenpai',
    href: 'https://www.flickr.com/people/203193758@N08/',
  },
  {
    social: 'Medium',
    link: 'narenpai',
    href: 'http://narenkpai.medium.com/',
  },
  {
    social: 'Youtube',
    link: 'narenpai',
    href: 'https://www.youtube.com/@narenpai',
  },
  {
    social: 'Devpost',
    link: 'narenpai',
    href: 'https://devpost.com/narenkpai',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
