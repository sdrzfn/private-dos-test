# Welcome to my private dos test repo 👋
![Version](https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000)

> This project is my personal project for a private test of dos attack. The whole script and syntax use a javascript, feel free to edit it in another language. Have fun!

## Install

### Linux User
#### Debian/Ubuntu

```sh
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://://ubuntu.com --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://k6.io stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```

#### Fedora/CentOS

```sh
sudo dnf install k6
```

### Windows User

```sh
winget k6
```

### macOS User

```sh
winget k6
```

### Docker

```sh
docker run --rm -i grafana/k6 run - <script.js
```

## Usage

```sh
k6.exe
```

## Run Tests

```sh
k6 run script.js
```

## Author

👤 **Sadrakh Z. P.**

* Github: [@sdrzfn](https://github.com/sdrzfn)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
