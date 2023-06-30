export const setZoomScale = (area) => {
    let currentZoom;

    if (area < 1000) currentZoom = 10
    else if (area >= 1000 && area < 10000) currentZoom = 8
    else if (area >= 10000 && area < 100000) currentZoom = 6
    else if (area >= 100000 && area < 1000000) currentZoom = 5
    else if (area >= 1000000 && area < 10000000) currentZoom = 4
    else if (area >= 10000000 && area < 100000000) currentZoom = 3
    else currentZoom = 2

    return currentZoom;
}