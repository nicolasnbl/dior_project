import React from 'react'
import { useEffect, useState } from 'react';
import MarqueBlock from './marqueBlock';

const ListeMarque = () => {
  return (
      <ul className="listeMarque">

        <li>
            <MarqueBlock 
                path="M 46.416 84.2126 c 10.1342 0 18.373 2.5819 18.373 5.802 s -8.2195 5.802 -18.373 5.802 s -18.373 -2.5722 -18.373 -5.802 s 8.2098 -5.802 18.373 -5.802 M 6.2855 32.5458 a 5.802 5.802 90 0 0 1.4505 -0.2031 l 16.6614 56.6372 h 0 c 1.8566 6.3242 11.0625 11.1108 22.1346 11.1108 s 20.307 -4.835 22.1346 -11.1108 h 0 l 16.6421 -56.5888 a 5.8504 5.8504 90 1 0 -4.5836 -5.715 a 5.802 5.802 90 0 0 3.3265 5.2798 l -19.34 41.3683 L 67.8641 17.538 h 0.1354 a 5.802 5.802 90 1 0 -1.6342 -0.2321 l -12.8418 54.4808 L 47.383 11.794 a 5.8697 5.8697 90 1 0 -1.6439 0 l -6.1791 59.954 l -12.8127 -54.3647 A 5.802 5.802 90 1 0 25.142 17.538 h 0.0774 l 3.1041 55.7185 l -19.34 -41.4166 a 5.802 5.802 90 1 0 -2.6786 0.6576"
                name="bgd_rolex"
                id="1"
            />
        </li>

        <li>
            <MarqueBlock 
                path="M 94.26 16.18 H 84 c 0 10.32 -4 16.62 -14.82 21.62 V 16.18 h -10.34 V 41.6 c -2.54 0.78 -5.32 1.52 -8.34 2.28 h 0 q -3.4 0.82 -6.56 1.74 V 16.18 h -10.34 V 49 c -16 6.38 -25.08 15.88 -25.08 32.78 h 10.28 c 0 -10.32 4 -16.62 14.82 -21.62 v 21.62 H 44 V 56.46 c 2.54 -0.78 5.32 -1.52 8.34 -2.28 h 0 q 3.4 -0.82 6.56 -1.72 v 29.44 h 10.34 V 49 C 85.1 42.58 94.26 33 94.26 16.18 Z M 132.78 16.16 v 65.72 h 12.78 v -27.8 H 178.4 v 27.8 h 12.68 V 16.18 H 178.4 v 24.46 H 145.56 V 16.16 h -12.78 M 257 16.18 v 34.3 c 0 10 -1.02 20.54 -17.22 20.54 s -17.36 -10.34 -17.36 -20.54 V 16.18 h -12.7 v 35.1 c 0 15.68 4.34 32.42 30 32.42 s 30 -16.98 30 -32.42 V 16.18 H 257 M 363.18 16.18 v 65.68 h 44 v -13.3 H 376 v -52.4 Z M 321.68 69.88 H 299.52 v -16.5 h 22.24 c 6.58 0 9.44 2.58 9.44 8.48 c 0 4.42 -1.8 8 -9.52 8 Z m -2 -41.68 c 7.12 0 9.3 2.6 9.3 6.92 s -2 7.4 -9.04 7.4 H 299.52 v -14.34 Z m 16.88 19.22 a 16.14 16.14 90 0 0 6.2 -13.1 c 0 -5.46 -2.2 -18.16 -22.46 -18.16 H 286.84 v 65.7 h 35.64 c 14.34 0 22.58 -7.3 22.58 -20 A 16.22 16.22 90 0 0 336.6 47.42 Z M 446 70.7 a 21.88 21.88 90 1 1 22.14 -21.88 A 21.78 21.78 90 0 1 446 70.7 Z m 0 -56.4 a 34.54 34.54 90 1 0 34.94 34.54 A 34.38 34.38 90 0 0 446 14.3 Z M 486.24 16.18 v 13.36 h 20.5 v 52.34 h 12.78 V 29.54 h 20 v -13.36 Z"
                name="bgd_hublot"
                id="2"
            />
        </li>

        <li>
            <MarqueBlock 
                path="M 16.9169 37.6376 c 0 -16.7768 11.7918 -33.5535 30.3904 -33.5535 c 19.039 0 30.3904 15.8759 30.3904 33.5535 c 0 17.2372 -9.0691 30.8308 -22.2222 40.8208 l 0.4605 1.3614 h 30.03 l 6.3463 -12.6927 h -3.1832 l -4.004 6.3463 h -15.4154 a 43.4634 43.4634 0 0 0 19.4995 -34.9149 c 0 -24.024 -20.8608 -38.038 -42.1821 -38.038 s -42.1821 14.014 -42.1821 38.038 a 43.4634 43.4634 0 0 0 19.4995 34.9149 h -15.4154 l -4.004 -6.3463 h -3.1832 l 6.3463 12.6927 h 30.03 l 0.9009 -1.3614 C 26.026 68.4684 16.9169 54.4144 16.9169 37.6376 Z"
                name="bgd_omega"
                id="3"
            />
        </li>
      </ul>
  );
}

export default ListeMarque;