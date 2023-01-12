import { GetStaticProps } from 'next';
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';
import hasher from 'md5';

import Card from '../components/Card';

import styles from '../styles/Home.module.css';
import { DataProps } from '../@types/Data';

export const getStaticProps: GetStaticProps = async () => {
  const private_key = process.env.PRIVATE_KEY;
  const public_key = process.env.PUBLIC_KEY;
  const url_base = process.env.URL_BASE;

  const timestamp = Math.floor(Date.now() / 100);
  const hash = hasher(`${timestamp}${private_key}${public_key}`);
  const limit = 50;

  const res = await axios.get(
    `${url_base}/characters?ts=${timestamp}&apikey=${public_key}&limit=${limit}&hash=${hash}`
  );

  const data = await res.data;

  return {
    props: {
      info: data,
    },
  };
};

export default function Home({ info }: DataProps) {
  const { data } = info;
  return (
    <div className={styles.home}>
      <div className={styles.input_wrapper}>
        <div>
          <BiSearch size={24} />
          <input
            type="search"
            className={styles.input_input}
            placeholder="Pesquisa"
          />
        </div>
        <button type="submit" className={styles.input_button}>
          Buscar
        </button>
      </div>
      <article className={styles.article}>
        <ul>
          {data.results.map((char) => (
            <Card key={char.id} char={char} />
          ))}
        </ul>
      </article>
    </div>
  );
}
