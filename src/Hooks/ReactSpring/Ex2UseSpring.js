import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Ex2UseSpring() {

    //Có thể bốc tách ra và spread ra phần còn lại
    const {color, ...propsUseSpring} = useSpring({
        color: [131, 111, 255], //Màu sắc sau animation
        from: {
            //Có thể chỉnh màu từ backend từ trang admin 
            //ko nên dùng chuỗi như 'rgb(238, 99, 99)' 
            //xử lý chuỗi phức tạp còn dùng mảng thì động
            color: [238, 99, 99], //Màu sắc bắt đầu
        },
        fontSize: 100,
        config: {
            duration: 2000,
            delay: 0,
        },
        a: 100
    });

    //Tăng font chữ tăng độ dài
    let propsAnimation = useSpring({
        from: {
            width: '0%',
            height: '0%',
            fontSize: '10px',
        },
        to: async (next, cancel) => {
            await next({ width: '100%', height: '100%', fontSize: '50px'})
            await next({ width: '50%', height: '50%', fontSize: '10px)'})
            await next({ width: '100%', height: '100%', fontSize: '50px'})
        },
        //Này 5s cho từng thằng await
        config: {duration: 5000},
    });

    return (
        <div>
            <animated.div style={{
                // Biến cái mảng thành chuỗi theo cái interpolate
                //Đổi cái interpolate thành to
                color: color.to((r, g, b) => { return `rgb(${r}, ${g}, ${b})`;}),
                fontSize: propsUseSpring.fontSize
            }}>
                Hello MinAn
            </animated.div>

            <animated.span style={propsAnimation} className='bg-dark text-white'>
                <span>
                    Hello MinAn 2
                </span>
                <p>
                    Học Animation Thật Dễ
                </p>
            </animated.span>
        </div>
    )
}
