import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Naren Pai is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
                  content="naren pai, naren, pai, web developer portfolio, naren web developer, naren developer, mern stack, naren pai portfolio, vscode-portfolio"
      />
              <meta property="og:title" content="Naren Pai's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
          title: 'Naren Pai',
};
