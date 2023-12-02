
## React Electron Llamafile Starter

###  Build Cross-platform [Llamafile](https://github.com/Mozilla-Ocho/llamafile) Apps with [Electron](https://www.electronjs.org) and [React](https://react.dev) 


- #### !!! Requires a llamafile to run !!!
  Download a llamafile from the [llamafile repo](https://github.com/Mozilla-Ocho/llamafile) and place it in the 'assets/llamafile' directory then linked by changing the 'exec' command file path in 'src/main/main.ts'.  The 'mistral-7b-instruct-v0.1-Q4_K_M-main.llamafile' is recommended and is the current default.

 Or build your own llamafile from any llama-variant model and link it the same way.

 This starter app is based on [Electron React Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate.git) with minimal changes to create a simple chat interface.

 Thanks to the Electron React Boilerplate, Electron, React, Llamafile, llama.cpp, and all the other open source projects that make this one possible.
<br>

## Install

Clone the repo and install dependencies:

```bash

### Clone this repository
git clone --depth 1 --branch main https://github.com/swkidd/react-electron-llamafile-starter.git
cd your-project-name
npm install

### Install a llamafile and place it in the assets/llamafile directory

### !!!!
### NOTE: Any llamafile can be used, but the filepath for the exec command in 
###       src/main/main.ts must be changed to match the location of the llamafile
###       you want to use.
###       The default llamafile is mistral-7b-instruct-v0.1-Q4_K_M-main.llamafile
### !!!!

### Download the llamafile (default)
curl -L -o ./assets/llamafile/mistral-7b-instruct-v0.1-Q4_K_M-main.llamafile https://huggingface.co/jartine/mistral-7b.llamafile/resolve/main/mistral-7b-instruct-v0.1-Q4_K_M-main.llamafile?download=true 
```

## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```

## Maintainers

- [Steve Kidd](https://github.com/swkidd)

## License

MIT
