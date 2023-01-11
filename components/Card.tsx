import Image from 'next/image';

import Avatar from '../public/images/sinistro.png';

import styles from '../styles/Card.module.css';

export default function Card() {
  return (
    <div className={styles.card_character}>
      <div className={styles.card_title}>
        <span>2023bb</span>
        <h3>Sr. Sinistro</h3>
      </div>
      <figure className={styles.card_figure}>
        <Image src={Avatar} width="200" height="100" alt="avatar personagem" />
      </figure>
      <div className={styles.card_details}>
        <div>
          Sr. Sinistro é o alter-ego de Nathaniel Essex. Ele faz parte do
          Universo Marvel.
        </div>
        <div>Criadores: Chris Claremont, Marc Silvestri</div>
        <div>Editora(s): Marvel Comics</div>
        <div>Outro(s) nome(s): Nathaniell Essex</div>
      </div>
    </div>
  );
}
