'use strict';

let offset = 0;
const sliderLine = document.querySelector('.partners__sliderLine');

document.querySelector('.partners__next').addEventListener('click', function() {
    offset += document.querySelector('.partners__partnerPic').width;
    if (offset > 3375) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.partners__prev').addEventListener('click', function() {
    offset -= document.querySelector('.partners__partnerPic').width;
    if (offset < 0) {
        offset = 3375;
    }
    sliderLine.style.left = -offset + 'px';
});


if (document.documentElement.clientWidth < 1440) {
    let offset = 0;
    const sliderLine = document.querySelector('.partners__sliderLine');

    document.querySelector('.partners__next').addEventListener('click', function() {
        offset += document.querySelector('.partners__partnerPic').width;
        if (offset > 2750) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });

    document.querySelector('.partners__prev').addEventListener('click', function() {
        offset -= document.querySelector('.partners__partnerPic').width;
        if (offset < 0) {
            offset = 2750;
        }
        sliderLine.style.left = -offset + 'px';
    });
}

if (document.documentElement.clientWidth < 1024) {
    let offset = 0;
    const sliderLine = document.querySelector('.partners__sliderLine');

    document.querySelector('.partners__next').addEventListener('click', function() {
        offset += document.querySelector('.partners__partnerPic').width;
        if (offset > 1530) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });

    document.querySelector('.partners__prev').addEventListener('click', function() {
        offset -= document.querySelector('.partners__partnerPic').width;
        if (offset < 0) {
            offset = 1530;
        }
        sliderLine.style.left = -offset + 'px';
    });
}