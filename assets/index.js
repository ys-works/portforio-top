(function () {
    const lText = document.querySelectorAll('.main-ttl');
    lText.forEach(target => {
        let newText = '';
        const text = target.textContent;
        const result = text.split('');
        for (let i = 0; i < result.length; i++) {
            newText += '<span>' + result[i] + '</span>';
        }
        target.innerHTML = newText;
    });
})();

window.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    document.querySelectorAll(".word").forEach((word) => {
        tl.add(createChildTimeline(word), "-=90%");
    });

    function createChildTimeline(element) {
        const elText = element.querySelector(".rect");
        const tl = gsap
            .timeline()
            .from(element, {
                opacity: 0,
                duration: 2,
                ease: "power4.out",
            })
            .set(elText, { opacity: 0 })
            .to(
                elText,
                {
                    x: "105%",
                    duration: 2,
                    ease: "power4.out",
                },
                "-=50%",
            );
        return tl;
    }
});



(function () {

    const mTtl = '.main-ttl > span';

    gsap.set(
        [
            mTtl,
            "title-wrap",
            ".sec1-inner",
            ".sec2-inner"
        ],
        {
            opacity: 0,
        }
    );
    gsap.set(
        ".sec1-inner", {
        scale: 0.1,
        y: 200,
    }
    );
    gsap.set(
        ".sec2-inner", {
        scale: 0.1,
        y: 100,
    }
    );
    gsap.set(
        ".g-item1", {
        x: -100,
        opacity: 0,
    }
    );
    gsap.set(
        ".g-item2", {
        x: 100,
        opacity: 0,
    }
    );


    const tl = gsap.timeline();

    tl.to(
        [mTtl, "title-wrap"], {
        opacity: 1,
        duration: 0.5,
        stagger: {
            amount: 1.2,
            ease: "slow(0.4, 0.9, false)"
        }
    },
    ).to(
        ".sec1-inner", {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 1.2,
        rotation: 360,
        ease: 'power4.inOut'

    },
        '<'
    ).to(
        ".sec2-inner", {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 1.2,
        rotation: 360,
        ease: 'power4.inOut'
    },
        '<'
    ).to(
        ".g-item1", {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power4.inOut"
    },
        '>'
    ).to(
        ".g-item2", {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power4.inOut",
        stagger: {
            amount: 0.5,
            from: "random"
        }
    }
    );


})();
