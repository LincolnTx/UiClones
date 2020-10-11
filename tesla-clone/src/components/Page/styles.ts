import styled from 'styled-components';

import DeathNoteBanner from '../../assets/images/DeathNote.png';
import HunterHunterBanner from '../../assets/images/HunterHunter.jpg';
import KimetsuNoYaibaBanner from '../../assets/images/KimetsuNoYaiba.jpg';
import NarutoBanner from '../../assets/images/Naruto.jpg';
import NoGameNoLifeBanner from '../../assets/images/NoGameNoLife.jpg';
import ShinguekiBanner from '../../assets/images/Shingueki.jpg';
import TokyoGhoulBanner from '../../assets/images/TokyoGhoul.jpg';

export const Container = styled.div`
    .colored:nth-child(1) {
        background: url(${DeathNoteBanner});
        background-position: center;
        background-size: cover;
    }
    .colored:nth-child(2) {
        background: url(${HunterHunterBanner});
        background-position: center;
        background-size: cover;
    }
    .colored:nth-child(3) {
        background: url(${KimetsuNoYaibaBanner});
        background-position: center;
        background-size: cover;
    }
    .colored:nth-child(4) {
        background: url(${NarutoBanner});
        background-position: center;
        background-size: cover;
    }
    .colored:nth-child(5) {
        background: url(${NoGameNoLifeBanner});
        background-position: center;
        background-size: cover;
    }
    .colored:nth-child(6) {
        background: url(${ShinguekiBanner});
        background-position: center;
        background-size: cover;
    }
    .colored:nth-child(7) {
        background: url(${TokyoGhoulBanner});
        background-position: center;
        background-size: cover;
    }
`;
