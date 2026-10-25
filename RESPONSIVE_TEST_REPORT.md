# Responsive verification report

Tested the local Next.js production build using the desktop app browser viewport controls. These are CSS viewport simulations, not physical-device or cross-browser certification.

## Results

All 84 viewport configurations passed these checks:

- No horizontal document overflow or links extending outside the viewport.
- Square portrait at every width.
- Profile, social navigation, bottom buttons, and footer retain their order.
- Both bottom buttons remain on the same row.
- Social links and bottom buttons meet the 44px minimum touch height.
- Checked text containers have no clipped or overflowing content.
- Desktop viewports at least 1024px wide and 640px tall fit the full page without scrolling.

The matrix includes every size in the responsive plan, widths immediately around the 480px, 768px, 1024px, 1200px and 1440px boundaries, and a 32px width sweep from 320px to 1920px. The 640 × 450 case also checks the narrower layout corresponding to a 1280 × 900 browser at 200% zoom; native browser zoom and text-only enlargement were not separately emulated.

## Additional verification

- Keyboard navigation moves between social links with a visible solid focus outline.
- The portrait loaded successfully.
- All seven destination URLs match the user-supplied URLs.
- Viewport metadata includes device width, initial scale 1, and viewport-fit=cover, without restricting zoom.
- Browser console returned no warnings or errors.
- Reduced-motion rules disable transitions and hover arrow movement. Safe-area padding uses CSS environment insets; a physical notch was not emulated.
- ESLint, TypeScript checking, and the production build passed.

## Viewport matrix

| Width | Height | Page height | Result |
| ---: | ---: | ---: | :--- |
| 320 | 568 | 1092 | PASS |
| 360 | 800 | 1028 | PASS |
| 375 | 812 | 988 | PASS |
| 390 | 844 | 988 | PASS |
| 430 | 932 | 988 | PASS |
| 844 | 390 | 564 | PASS |
| 600 | 960 | 992 | PASS |
| 768 | 1024 | 1024 | PASS |
| 820 | 1180 | 1180 | PASS |
| 1024 | 768 | 768 | PASS |
| 1180 | 820 | 820 | PASS |
| 1024 | 640 | 640 | PASS |
| 1280 | 720 | 720 | PASS |
| 1366 | 768 | 768 | PASS |
| 1440 | 900 | 900 | PASS |
| 1920 | 1080 | 1080 | PASS |
| 2560 | 1440 | 1440 | PASS |
| 3440 | 1440 | 1440 | PASS |
| 479 | 800 | 988 | PASS |
| 480 | 800 | 988 | PASS |
| 481 | 800 | 988 | PASS |
| 767 | 900 | 1005 | PASS |
| 769 | 900 | 900 | PASS |
| 1023 | 768 | 768 | PASS |
| 1025 | 768 | 768 | PASS |
| 1439 | 900 | 900 | PASS |
| 1441 | 900 | 900 | PASS |
| 1199 | 900 | 900 | PASS |
| 1200 | 900 | 900 | PASS |
| 1201 | 900 | 900 | PASS |
| 412 | 915 | 988 | PASS |
| 640 | 450 | 996 | PASS |
| 320 | 900 | 1092 | PASS |
| 320 | 900 | 1092 | PASS |
| 352 | 900 | 1028 | PASS |
| 384 | 900 | 988 | PASS |
| 416 | 900 | 988 | PASS |
| 448 | 900 | 988 | PASS |
| 480 | 900 | 988 | PASS |
| 512 | 900 | 988 | PASS |
| 544 | 900 | 988 | PASS |
| 576 | 900 | 991 | PASS |
| 608 | 900 | 993 | PASS |
| 640 | 900 | 996 | PASS |
| 672 | 900 | 998 | PASS |
| 704 | 900 | 1000 | PASS |
| 736 | 900 | 1003 | PASS |
| 768 | 900 | 900 | PASS |
| 800 | 900 | 900 | PASS |
| 832 | 900 | 900 | PASS |
| 864 | 900 | 900 | PASS |
| 896 | 900 | 900 | PASS |
| 928 | 900 | 900 | PASS |
| 960 | 900 | 900 | PASS |
| 992 | 900 | 900 | PASS |
| 1024 | 900 | 900 | PASS |
| 1056 | 900 | 900 | PASS |
| 1088 | 900 | 900 | PASS |
| 1120 | 900 | 900 | PASS |
| 1152 | 900 | 900 | PASS |
| 1184 | 900 | 900 | PASS |
| 1216 | 900 | 900 | PASS |
| 1248 | 900 | 900 | PASS |
| 1280 | 900 | 900 | PASS |
| 1312 | 900 | 900 | PASS |
| 1344 | 900 | 900 | PASS |
| 1376 | 900 | 900 | PASS |
| 1408 | 900 | 900 | PASS |
| 1440 | 900 | 900 | PASS |
| 1472 | 900 | 900 | PASS |
| 1504 | 900 | 900 | PASS |
| 1536 | 900 | 900 | PASS |
| 1568 | 900 | 900 | PASS |
| 1600 | 900 | 900 | PASS |
| 1632 | 900 | 900 | PASS |
| 1664 | 900 | 900 | PASS |
| 1696 | 900 | 900 | PASS |
| 1728 | 900 | 900 | PASS |
| 1760 | 900 | 900 | PASS |
| 1792 | 900 | 900 | PASS |
| 1824 | 900 | 900 | PASS |
| 1856 | 900 | 900 | PASS |
| 1888 | 900 | 900 | PASS |
| 1920 | 900 | 900 | PASS |

## Local logos and added destinations

- All seven logo images in the rendered links loaded successfully from the public folder through Next.js Image.
- Reddit preserves the exact supplied URL and its query parameters.
- Portfolio points to https://www.devkitmarket.com/about-me.
- At tablet and desktop widths the first four social links use two columns; the portfolio occupies the full next row. On mobile all five links stack. Both bottom buttons stay in one row.
