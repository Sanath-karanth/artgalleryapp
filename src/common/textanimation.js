import React, { useEffect, Fragment } from 'react';
import anime from "animejs";

const TextAnimation = ( props ) => {

    const indiamapanimation = () => {
        var textWrapper1 = document.querySelector('.indiamaptext');
        textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        anime.timeline({loop: true})
        .add({
          targets: '.indiamaptext .letter',
          scale: [4,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 1000,
          delay: (el, i) => 70*i
        }).add({
          targets: '.indiamaptext',
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });
    }

    const armymananimation = () => {
        var textWrapper2 = document.querySelector('.armymantext .letters');
        textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
        .add({
            targets: '.armymantext .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 1000,
            delay: (el, i) => 50 * i
        }).add({
            targets: '.armymantext',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    }

    useEffect(() => {
        indiamapanimation();
        armymananimation();
    }, []);
    return (<Fragment></Fragment>);
}

export default TextAnimation;