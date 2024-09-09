export declare class IconPreview {
  icons: string;
  selectedIcon: string;
  searchText: string;
  displayPlaceholder: boolean;
  private inputElement;
  componentDidLoad(): void;
  iconSelected: (ev: any) => void;
  copyToClipboard: () => void;
  codeMouseOver: (ev: any) => void;
  codeMouseLeave: () => void;
  openSvg: () => void;
  searchIcons: () => void;
  clearSearch: () => void;
  renderPlaceholder(): any;
  renderIcons(): any[];
  render(): any;
}
