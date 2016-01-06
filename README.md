gh-rtfm
=======

A command-line tool that writes the README content of a GitHub repository to
stdout.

## Usage

```sh
gh-rtfm <user>/<repo>
```

## Installation

```sh
npm install gh-rtfm -g
```

## Examples

Save to file:

```sh
gh-rtfm substack/node-browserify > browserify.md
```

Works great with [vmd](https://github.com/yoshuawuyts/vmd):

```sh
gh-rtfm substack/node-browserify | vmd
```

Read about vmd in vmd:

```sh
gh-rtfm yoshuawuyts/vmd | vmd
```

## License

MIT
