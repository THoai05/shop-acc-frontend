"use client";
import Tilt from "react-parallax-tilt";

export default function Logo() {
    return (
        <Tilt
            glareEnable={true}          // bật glare
            glareMaxOpacity={0.3}       // độ trong suốt của glare
            glareColor="#ffffff"        // màu glare
            glarePosition="all"         // vị trí glare (top, bottom, all)
            glareBorderRadius="8px"     // bo góc glare nếu cần
            tiltMaxAngleX={10}          // độ nghiêng tối đa theo X
            tiltMaxAngleY={10}          // độ nghiêng tối đa theo Y
            transitionSpeed={400}       // tốc độ animation
        >
            <img
                src="/images/logo.png"
                alt="Logo"
                className="w-[80px] h-[45px] object-contain"
            />
        </Tilt>

    );
}
