import { GetStaticProps } from 'next';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';
import hasher from 'md5';

import { DataProps } from '../@types/Data';
import { CharacterInfo } from '../@types/Character';

import Card from '../components/Card';

import styles from '../styles/Home.module.css';

export const getStaticProps: GetStaticProps = async () => {
  const private_key = process.env.PRIVATE_KEY;
  const public_key = process.env.PUBLIC_KEY;
  const url_base = process.env.URL_BASE;

  const timestamp = Math.floor(Date.now() / 100);
  const hash = hasher(`${timestamp}${private_key}${public_key}`);
  const limit = 100;

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
  const [characters, setCharacters] = useState<CharacterInfo[]>([]);

  const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const filteredResults = data.results.filter((item) =>
      item.name.toLocaleLowerCase().includes(e.target.value.toLowerCase())
    );

    setCharacters(filteredResults);
    console.log('QTD: ', characters);
  };

  return (
    <div className={styles.home}>
      <div className={styles.input_wrapper}>
        <div>
          <BiSearch size={24} />
          <input
            type="search"
            className={styles.input_input}
            onChange={filter}
            placeholder="Pesquisa"
          />
        </div>
        <button type="submit" className={styles.input_button}>
          Buscar
        </button>
      </div>
      <article className={styles.article}>
        <div>
          {characters.length !== 0
            ? characters.map((char) =>
                char.thumbnail.path.includes('image_not_available') ||
                char.thumbnail.path.includes('4c002e0305708') ? (
                  ''
                ) : (
                  <Card key={char.id} char={char} />
                )
              )
            : data.results.map((char) =>
                char.thumbnail.path.includes('image_not_available') ||
                char.thumbnail.path.includes('4c002e0305708') ? (
                  ''
                ) : (
                  <Card key={char.id} char={char} />
                )
              )}
        </div>
      </article>
    </div>
  );
}
