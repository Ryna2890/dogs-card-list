import React, { FC } from "react";
import { DogCard } from "../../features/dogs/dogs.models";
import styles from "./card.module.css";

interface CardProps {
  card: DogCard;
  onLike: (card: DogCard) => void;
  onDelete: (card: DogCard) => void;
}

export const Card: FC<CardProps> = ({ card, onLike, onDelete }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url("${card.favorite.image.url}")`,
        }}
      ></div>
      <div className={styles.infoWrapper}>
        <div className={styles.title}>{card?.breed?.name}</div>
        <div className={styles.card_like}>
          <div className={styles.button_like}>
            <div onClick={() => onLike(card)}>
              <svg
                className={
                  card.vote?.value ? styles.heart_active : styles.heart
                }
                viewBox="0 0 32 29.6"
              >
                <path
                  d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.info_temperament}>
            {card.breed?.temperament}
          </div>
          <ul>
            <li>
              <b>life span: </b> {card.breed?.life_span}
            </li>
            <li>
              <b>bred for: </b>
              {card.breed?.bred_for}
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.delete_button} onClick={() => onDelete(card)}>
        {" "}
        <svg
          className={styles.delete_icon}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 482.428 482.429"
        >
          <g>
            <g>
              <path
                d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
			c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
			h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
			C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
			C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
			c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
			c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
			V115.744z"
              />
              <path
                d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
			c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"
              />
              <path
                d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
			c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"
              />
              <path
                d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
			c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};
