const backgroundSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="378" height="816" viewBox="0 0 378 816">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" y1="1.04" x2="0.5" y2="0.004" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#02023a"/>
      <stop offset="0.143" stop-color="#040c4c"/>
      <stop offset="0.498" stop-color="#0a257a"/>
      <stop offset="1" stop-color="#0e3599"/>
    </linearGradient>
  </defs>
  <rect id="Background" width="377" height="815" transform="translate(0.5 0.5)" stroke="#e8a3a3" stroke-miterlimit="10" stroke-width="1" fill="url(#linear-gradient)"/>
</svg>
`;
const loginButton = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="147.588" height="55.388" viewBox="0 0 147.588 55.388">
<defs>
  <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
    <stop offset="0" stop-color="#5a1c94"/>
    <stop offset="1" stop-color="#0e3599"/>
  </linearGradient>
  <filter id="Rectangle_12" x="0" y="0" width="147.588" height="55.388" filterUnits="userSpaceOnUse">
    <feOffset dx="4" dy="5" input="SourceAlpha"/>
    <feGaussianBlur stdDeviation="3" result="blur"/>
    <feFlood flood-opacity="0.161"/>
    <feComposite operator="in" in2="blur"/>
    <feComposite in="SourceGraphic"/>
  </filter>
</defs>
<g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Rectangle_12)">
  <path id="Rectangle_12-2" data-name="Rectangle 12" d="M0,0H110.891a18.7,18.7,0,0,1,18.7,18.7v0A18.691,18.691,0,0,1,110.9,37.388H18.945A18.945,18.945,0,0,1,0,18.443V0A0,0,0,0,1,0,0Z" transform="translate(5 4)" fill="url(#linear-gradient)"/>
</g>
<text id="Sign-in" transform="translate(46.651 26.769)" fill="rgba(255,255,255,0.63)" font-size="13" font-family="Helvetica-Bold, Helvetica" font-weight="700"><tspan x="0" y="0">Sign-in</tspan></text>
</svg>
`;
const loginForm = `<svg xmlns="http://www.w3.org/2000/svg" width="217" height="79" viewBox="0 0 217 79">
<rect id="Rectangle_10" data-name="Rectangle 10" width="217" height="33" rx="16.5" fill="#fff"/>
<rect id="Rectangle_11" data-name="Rectangle 11" width="217" height="33" rx="16.5" transform="translate(0 46)" fill="#fff"/>
</svg>
`;
const sideItem = `<svg xmlns="http://www.w3.org/2000/svg" width="616.165" height="738.257" viewBox="0 0 616.165 738.257">
<path id="Path_8" data-name="Path 8" d="M2657.06,300.235s-26.174,238.632-270.216,234.553-281.2,152.122-281.2,152.122-11.139,94.046,58.8,146.048,153.2-179.7,376.268,87.986,176.386-5.56,176.386-5.56Z" transform="translate(-2104.997 -300.235)" fill="#fff"/>
</svg>
`;
const logo = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="385" height="385" viewBox="0 0 385 385">
<defs>
  <pattern id="pattern" width="1" height="1" viewBox="8.483 -99.897 385 385">
    <image preserveAspectRatio="none" width="385" height="385" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAPoCAYAAABNo9TkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMTItMDVUMjM6Mzc6NDYrMDc6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTEyLTA2VDA5OjQxOjQyKzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEyLTA2VDA5OjQxOjQyKzA3OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg0NjZkZjcxLTNiOGItNDM3NC05Nzc4LWVlODU2YzZlMWMwMiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJlNTA2ZjlkLTdlY2ItZDQ0YS05NmQzLWIxOWJhNjMyNzk3YSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmFkM2M2N2NkLTdmMTEtNGZmYS05YjAzLTAwNDM3NTVlOTYwNCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YWQzYzY3Y2QtN2YxMS00ZmZhLTliMDMtMDA0Mzc1NWU5NjA0IiBzdEV2dDp3aGVuPSIyMDIxLTEyLTA1VDIzOjM3OjQ2KzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODQ2NmRmNzEtM2I4Yi00Mzc0LTk3NzgtZWU4NTZjNmUxYzAyIiBzdEV2dDp3aGVuPSIyMDIxLTEyLTA2VDA5OjQxOjQyKzA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7f7E/yAABYtUlEQVR4nO39X0ycd6Lwef56+9wN6Ty9kXawlG1XSHj3JpsCfLGjHdnlA1ftV2PcJMe5ahfG0q5mFFMxZy/a7TfwQr9ut0aK3UVyawycvTnumAaPxrmCl7L3FgNRZjQ6dqrL2Uh4LjKunLC7M6/Uyl4Y0sSxMfWP+mE+Hylqt03V84P6Q32f3+95np989913AQAAAGiu/12zBwAAAAAIdAAAAIiCQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIjA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iIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAICHQAAACIgEAHAACACAh0AAAAiIBABwAAgAgIdAAAAIiAQAcAAIAI/P8BYbtLdRM/Yh8AAAAASUVORK5CYII="/>
  </pattern>
</defs>
<rect id="Logo" width="385" height="385" fill="url(#pattern)"/>
</svg>
`;
module.exports = {
  backgroundSvg,
  logo,
  loginButton,
  loginForm,
  sideItem,
};
