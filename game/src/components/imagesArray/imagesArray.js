import p1 from '../../images/p1.jpg'
import p2 from '../../images/p2.jpg'
import p3 from '../../images/p3.jpg'
import p4 from '../../images/p4.jpg'
import p5 from '../../images/p5.jpg'
import p6 from '../../images/p6.jpg'
import DS1 from '../../images/DS1.jpg'
import DS2 from '../../images/DS2.jpg'
import DS2_1 from '../../images/DS2-1.jpg'
import DS3 from '../../images/DS3.jpg'
import DS3_1 from '../../images/DS-3.jpg'
import DS4 from '../../images/DS4.jpg'
import DS5 from '../../images/DS5.jpg'
import DS6 from '../../images/DS3.jpg'
import JK1 from '../../images/JK1.jpg'
import JK3 from '../../images/JK3.jpg'
import JK2 from '../../images/JK2.jpg'






let images = [
    { type: 1, img: p5, state: 'false', id: 0 },
    { type: 1, img: p5, state: 'false', id: 1 },
    { type: 2, img: DS1, state: 'false', id: 2 },
    { type: 2, img: DS1, state: 'false', id: 3 },
    { type: 3, img: DS2, state: 'false', id: 4 },
    { type: 3, img: DS2, state: 'false', id: 5 },
    { type: 4, img: DS6, state: 'false', id: 6 },
    { type: 4, img: DS6, state: 'false', id: 7 },
    { type: 5, img: JK1, state: 'false', id: 8 },
    { type: 5, img: JK1, state: 'false', id: 9 },
    { type: 6, img: JK3, state: 'false', id: 10 },
    { type: 6, img: JK3, state: 'false', id: 11 },
    { type: 7, img: p1, state: 'false', id: 12 },
    { type: 7, img: p1, state: 'false', id: 13 },
    { type: 8, img: p2, state: 'false', id: 14 },
    { type: 8, img: p2, state: 'false', id: 15 },
    { type: 9, img: p3, state: 'false', id: 16 },
    { type: 9, img: p3, state: 'false', id: 17 },
    { type: 10, img: DS2_1, state: 'false', id: 18 },
    { type: 10, img: DS2_1, state: 'false', id: 19 },
    { type: 11, img: DS3, state: 'false', id: 20 },
    { type: 11, img: DS3, state: 'false', id: 21 },
    { type: 12, img: DS4, state: 'false', id: 22 },
    { type: 12, img: DS4, state: 'false', id: 23 },
    { type: 13, img: DS5, state: 'false', id: 24 },
    { type: 13, img: DS5, state: 'false', id: 25 },
    { type: 14, img: JK2, state: 'false', id: 26 },
    { type: 14, img: JK2, state: 'false', id: 27 },
    { type: 15, img: p6, state: 'false', id: 28 },
    { type: 15, img: p6, state: 'false', id: 29 },
    { type: 16, img: DS3_1, state: 'false', id: 30 },
    { type: 16, img: DS3_1, state: 'false', id: 31 },
    { type: 17, img: DS6, state: 'false', id: 32 },
    { type: 17, img: DS6, state: 'false', id: 33 },
    { type: 18, img: JK1, state: 'false', id: 34 },
    { type: 18, img: JK1, state: 'false', id: 35 },
    { type: 19, img: JK3, state: 'false', id: 36 },
    { type: 19, img: JK3, state: 'false', id: 37 },
    { type: 20, img: p4, state: 'false', id: 29 },
    { type: 20, img: p4, state: 'false', id: 30},
]
    //slice images according to tiles number
    const getImages = (tiles)=>{
        let sliceImages = images.slice(0,tiles);
        return sliceImages
    }
    
export default getImages