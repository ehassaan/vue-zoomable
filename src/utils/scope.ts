

// export function updateScope() {
//     let main = this.mainSPZ;
//     let thumb = this.thumbnailSPZ;
//     if (!main || !thumb) return;
//     let mainPanX = main.getPan().x,
//         mainPanY = main.getPan().y,
//         mainWidth = main.getSizes().width,
//         mainHeight = main.getSizes().height,
//         mainZoom = main.getSizes().realZoom,
//         thumbPanX = thumb.getPan().x,
//         thumbPanY = thumb.getPan().y,
//         thumbZoom = thumb.getSizes().realZoom;
//     let thumByMainZoomRatio = thumbZoom / mainZoom;
//     let scopeX = thumbPanX - mainPanX * thumByMainZoomRatio;
//     let scopeY = thumbPanY - mainPanY * thumByMainZoomRatio;
//     let scopeWidth = mainWidth * thumByMainZoomRatio;
//     let scopeHeight = mainHeight * thumByMainZoomRatio;
//     this.x = scopeX + 1;
//     this.y = scopeY + 1;
//     this.width = scopeWidth - 2;
//     this.height = scopeHeight - 2;
// }

// export function updateMainViewPan(evt: any) {
//     if (evt.which == 0 && evt.button == 0) {
//         return false;
//     }
//     let main = this.mainSPZ;
//     let thumb = this.thumbnailSPZ;
//     let dim = this.$el.getBoundingClientRect(),
//         mainWidth = main.getSizes().width,
//         mainHeight = main.getSizes().height,
//         mainZoom = main.getSizes().realZoom,
//         thumbWidth = thumb.getSizes().width,
//         thumbHeight = thumb.getSizes().height,
//         thumbZoom = thumb.getSizes().realZoom;
//     var thumbPanX = evt.clientX - dim.left - thumbWidth / 2;
//     var thumbPanY = evt.clientY - dim.top - thumbHeight / 2;
//     var mainPanX = (-thumbPanX * mainZoom) / thumbZoom;
//     var mainPanY = (-thumbPanY * mainZoom) / thumbZoom;
//     main.pan({ x: mainPanX, y: mainPanY });
// }
