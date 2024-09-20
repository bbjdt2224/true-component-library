import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
    tag: 'true-icon-preview',
    styleUrl: 'icon-preview.scss',
    shadow: true
})
export class IconPreview {

    @Prop({ mutable: true }) icons: string;

    @State() selectedIcon: string;

    @State() searchText = '';
    @State() displayPlaceholder = false;

    private inputElement: HTMLInputElement;

    componentDidLoad() {
        this.inputElement.focus();
    }

    iconSelected = (ev) => {
        const icon = ev.target as HTMLSpanElement;
        const iconEl = icon.querySelector('true-icon');
        if (this.selectedIcon === iconEl.attributes.getNamedItem('name').value) {
            this.selectedIcon = undefined;
        } else {
            this.selectedIcon = iconEl.attributes.getNamedItem('name').value;
        }
    }

    copyToClipboard = () => {
        if (window.getSelection) {
            const selection = window.getSelection();
            if (selection) {
                document.execCommand('copy');
            }
        }
    }

    codeMouseOver = (ev) => {
        const text = ev.target.querySelector('span');
        if (window.getSelection) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    codeMouseLeave = () => {
        if (window.getSelection) {
            const selection = window.getSelection();
            selection.removeAllRanges();
        }
    }

    openSvg = () => {
        const host = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
        window.open(`${host}/true-components/icons/${this.selectedIcon}.svg`, '_blank');
    }

    searchIcons = () => {
        this.searchText = this.inputElement.value;
    }

    clearSearch = () => {
        this.searchText = '';
        this.inputElement.value = '';
    }

    renderPlaceholder() {
        if (this.displayPlaceholder && this.searchText.length > 0) {
            return (
                <div class='placeholder'>
                    <true-heading large>No results for "{this.searchText}"</true-heading>
                </div>
            );
        }
    }

    renderIcons() {
        const icons = [];
        this.icons.split(',').forEach(icon => {
            if (icon.includes(this.searchText.toLowerCase())) {
                icons.push(
                    <button type='button' class={{
                        icon: true,
                        active: this.selectedIcon === icon
                    }}
                        onClick={this.iconSelected}>
                        <true-icon name={icon}></true-icon>
                    </button>
                );
            }
        });
        // Causes a re-render of the component
        this.displayPlaceholder = icons.length === 0;
        return icons;
    }

    render() {
        return (
            <Host>
                <div class='search-input'>
                    <true-icon class='search' color='primary' name='search'></true-icon>
                    <input type='text'
                        autofocus
                        ref={ref => this.inputElement = ref}
                        onKeyUp={this.searchIcons}
                        placeholder='Search icons...' />
                    <button class={{
                        'clear-btn': true,
                        visible: this.searchText.length > 0
                    }} onClick={this.clearSearch}>
                        <true-icon name='x'></true-icon>
                    </button>
                </div>
                <div class='icons'>
                    {this.renderIcons()}
                </div>
                {this.renderPlaceholder()}
                <div class={{
                    'toast-bar': true,
                    active: this.selectedIcon != null
                }}>
                    <div class='toast-bar-inner'>
                        <true-text class='selected-icon'>{this.selectedIcon}</true-text>
                        <div class='actions'>
                            <div>
                                <true-subtext color='primary'>WEB COMPONENT CODE</true-subtext>
                                <code
                                    onMouseOver={this.codeMouseOver}
                                    onMouseLeave={this.codeMouseLeave}
                                    onClick={this.copyToClipboard}>
                                    <span class='hover-highlight'>
                                        &lt;
                                        <span class='blue'>true-icon</span>
                                        &nbsp;
                                        <span class='green'>name</span>
                                        =
                                        <span class='yellow'>"{this.selectedIcon}"</span>
                                        &gt;&lt;/
                                        <span class='blue'>true-icon</span>&gt;
                                    </span>
                                </code>
                            </div>
                            <div class='download-btn'>
                                <true-icon color='primary' name={this.selectedIcon}></true-icon>
                                <true-button color='true-primary-blue' onClick={this.openSvg}>
                                    <div class='svg-btn'>
                                        <svg width='20px' height='20px' viewBox='0 0 32 32'>
                                            <path d='M26 12.469h-5.712v-8.469h-8.575v8.469h-5.713l10 9.881 10-9.881zM6 25.175v2.825h20v-2.825h-20z'></path>
                                        </svg>
                                        SVG
                                    </div>
                                </true-button>
                            </div>
                        </div>
                    </div>
                </div>
            </Host>
        );
    }

}
