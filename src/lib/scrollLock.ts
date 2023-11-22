const isBrowser: boolean = typeof window !== "undefined";
const $body: HTMLBodyElement | null = isBrowser ? document.querySelector("body") : null;
let scrollPosition: number = 0;

const scrollLock = {
  enable(): void {
    if ($body) {
      scrollPosition = window.scrollY;
      $body.style.overflow = "hidden";
      $body.style.position = "fixed";
      $body.style.top = `-${scrollPosition}px`;
      $body.style.width = "100%";
    }
  },
  disable(): void {
    if ($body) {
      $body.style.removeProperty("overflow");
      $body.style.removeProperty("position");
      $body.style.removeProperty("top");
      $body.style.removeProperty("width");
      window.scrollTo(0, scrollPosition);
    }
  }
};

export default scrollLock;
