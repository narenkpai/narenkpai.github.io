import styles from '@/styles/AboutPage.module.css';
import { useEffect } from 'react';

const AboutPage = () => {
  useEffect(() => {
    const links = document.querySelectorAll(`.${styles.highlight}`);
    
    const handleMouseMove = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains(styles.highlight)) {
        const mouseEvent = e as MouseEvent;
        const rect = target.getBoundingClientRect();
        const x = ((mouseEvent.clientX - rect.left) / rect.width) * 100;
        const y = ((mouseEvent.clientY - rect.top) / rect.height) * 100;
        target.style.setProperty('--mouse-x', `${x}%`);
        target.style.setProperty('--mouse-y', `${y}%`);
      }
    };

    links.forEach(link => {
      link.addEventListener('mousemove', handleMouseMove);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Naren Pai</h1>
        <div className={styles.subtitle}>Software Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a Highschool student from North Carolina, USA. I am a passionate
              developer who worsk on hardware and software projects. I focus on IOT and edge projects, and 
              love solving problems and building things.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on hardware development with Arduino, Raspberry Pi, and ESP32.
              you&apos;ll also find me working with Python, C++, and Java while working on other projects
              involving AI and machine learning.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently interning at <span className={styles.highlight}>NASA</span>, working in a 
              team of 6 to publish our UAV research paper in the NASA journal. Check back in August for the paper!
            </p>
            <p className={styles.paragraph}>
              I&apos;ve been leading the development efforts for a project called
              Prescription Protectors. We&apos;ve built a device and phone app that reminds users 
              to take their medication at the right time, and in the right dosages. Check us out 
              at <a 
                href="https://prescriptionprotectors.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.highlight}
              >
                prescriptionprotectors.org
              </a>!
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Aircraft</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of flying and building autonmous drones and aircraft. Checkout my youtube
              channel at {' '}
              <a 
                href="https://www.youtube.com/@narenpai" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.highlight}
              >
                https://www.youtube.com/@narenpai
              </a>,{' '}
              to view some flights.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and engineering, I am also truly passionate about
              an artform known as Origami. From making the paper to folding complex models,
              I take pride in my work and love to share my creations with others. Checkout my flicker: <a 
                href="https://www.flickr.com/people/203193758@N08/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.highlight}
              >
                https://www.flickr.com/people/203193758@N08/
              </a>,{' '}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
