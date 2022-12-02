declare module "@box/languages" {
  type Language = {
    id: number;
    bcp47Tag: string;
    cldrTag: string;
    name: string;
    localizedName: string;
  };

  const boxLanguages: { [key: string]: Language };

  const boxLanguageKeys: string[];

  export default boxLanguageKeys;

  export { boxLanguages };
}
