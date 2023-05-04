export const checkDarkTheme = () => {
  if (document) {
    let html = document.querySelector('html');
    return html?.classList.contains('dark');
  } else {
    return false
  }
}

export const setDarkThemeObserver = (cb : any) => {
  let e: HTMLElement | any = document.querySelector("html");
    let observer = new MutationObserver((e: any) => {
      cb(e)
    });

    observer.observe(e, {
      attributes: true,
      attributeFilter: ["class"],
      childList: false,
      characterData: false,
    });
}