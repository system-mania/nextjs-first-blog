import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import homeStyles from '@/styles/Home.module.css';
import { GetStaticProps } from 'next';
import { getSortedPostsData } from '@/lib/post';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] });

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>system-mania</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[시스매]</p>
        <p>안녕하세요. 저는 웹 프론트엔드 개발자입니다.</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={homeStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
