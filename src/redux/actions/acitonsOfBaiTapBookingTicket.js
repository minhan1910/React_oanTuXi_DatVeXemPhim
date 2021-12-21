import {
    DAT_GHE,
    HUY_GHE
} from "../constants/constantsOfBaiTapBookingTicket";

export const datGhe = (ghe) => {
    return {
        type: DAT_GHE,
        ghe
    }
}

export const huyGhe = (ghe) => {
    return {
        type: HUY_GHE,
        ghe 
    }
}