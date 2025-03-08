<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://www.nano-editor.org/">GNU nano</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/ahmadnassri/catppuccin-node/stargazers"><img src="https://img.shields.io/github/stars/ahmadnassri/catppuccin-node?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/ahmadnassri/catppuccin-node/issues"><img src="https://img.shields.io/github/issues/ahmadnassri/catppuccin-node?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/ahmadnassri/catppuccin-node/contributors"><img src="https://img.shields.io/github/contributors/ahmadnassri/catppuccin-node?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>


<p align="center">
	<img src="assets/preview.png"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="assets/latte.png"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="assets/frappe.png"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="assets/macchiato.png"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="assets/mocha.png"/>
</details>

## Usage

> [!WARNING]
> GNU nano version `6` or later is required!

### Quick Setup _(default syntax files)_

1. clone this repo locally

    ```shell
    git clone https://github.com/ahmadnassri/catppuccin-nano.git ~/.nano
    ```
1. use the included `.nanorc` config _(or edit your existing one to match)_

    ```shell
    ln -s ~/.nano/.nanorc ~/.nanorc
    ```

### Advanced Setup _(BYO-syntax files)_

> [!IMPORTANT]
> Node.js v23+ is required

1. clone this repo locally

    ```shell
    git clone https://github.com/ahmadnassri/catppuccin-nano.git /tmp/catppuccin-nano
    ```
1. setup the Node.js project

    ```shell
    cd catppuccin-nano
    npm install
    ```

1. run the builder while specifying path to your existing syntax files as `PATH_NANORC_SOURCE` and write destination as `PATH_NANORC_TARGET`

    ```shell
    export PATH_NANORC_SOURCE=/my/nano/syntax
    export PATH_NANORC_TARGET=./my/nano/catppuccin
    npm run build
    ```

1. use the included `.nanorc` config _(or edit your existing one to match)_

    ```shell
    ln -s /my/nano/catppuccin/.nanorc ~/.nanorc
    ```

> [!Note]
> only files with the extension `.nanorc` are considered

## 🙋 FAQ

- Q: **_"nano does not support custom color values, so how does this work?"_**\
  A: nano syntax highlighting options are very limited, so this approach overwrites all existing syntax files by replacing built-in color names with appropriate mappings as defined in [`color-map.json`](./src/color-map.json)

<!--
## 💝 Thanks to

- [Human](https://github.com/catppuccin)
-->
&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<!-- temporarily hidden, waiting to see if this repo will be adopted by the official org
<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>
-->
<p align="center">
	<a href="https://github.com/ahmadnassri/catppuccin-node/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
