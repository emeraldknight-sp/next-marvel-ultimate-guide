import Image from 'next/image';
import { CharProps } from '../@types/Card';

import styles from '../styles/Card.module.css';

export default function Card({ char }: CharProps) {
  const [year, month, day] = char.modified.slice(0, 10).split('-');
  const avatar = `${char.thumbnail.path}.${char.thumbnail.extension}`;
  const date = `${day}/${month}/${year}`;

  return (
    <div className={styles.card_character}>
      <div className={styles.card_title}>
        <span>{char.id}</span>
        <h3>{char.name}</h3>
      </div>
      <figure className={styles.card_figure}>
        <Image src={avatar} width="200" height="200" alt="avatar personagem" />
      </figure>
      <div className={styles.card_details}>
        {/* <p>{char.description || 'Não possui descrição.'}</p> */}
        <p>Quadrinhos: {char.comics.available}</p>
        <p>Séries: {char.series.available}</p>
        <p>Histórias: {char.stories.available}</p>
        <p>Eventos: {char.events.available}</p>
        <p>Editora(s): Marvel Comics</p>
        <p>Atualização: {date}</p>
      </div>
    </div>
  );
}
