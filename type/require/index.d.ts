declare module '*.scss' {
  const style: any;
  export = style;
}

declare module '*.svg' {
  const url: string;
  export = url;
}

declare module '*.png' {
  const url: string;
  export = url;
}

declare module 'responsive-loader!*' {
  const mod: {
    srcSet: string;
    src: string;
  };
  export = mod;
}
