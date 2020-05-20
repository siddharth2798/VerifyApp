# VerifyApp

A decentralised way of storing evidences on IPFS and verifying it's authenticity using blockchain. A javascript implementation of blockchain has been used in this proof of concept.

## Prerequisite

Install [IPFS](https://ipfs.io) on your local machine. I have used the go-ipfs implementation. Follow the steps [here](https://docs-beta.ipfs.io/how-to/command-line-quick-start/#install-ipfs) to check successful installation.

## Implementation

A javascript implementation of the blockchain has been used to demonstrate the behavious of the decentralised netwok. This app can be used to add evidences to IPFS and save the file hashes to blockchain. This app can retrieve ipfs hashes which when compared with file hash to prove its authenticity.

App uses a parameter Case ID to uniquely identify cases and to retrieve the corresponsing hashes.


## Getting Started

Clone the app
```bash
https://github.com/siddharth2798/VerifyApp.git
```

Run the ipfs daemon

```bash
ipfs daemon
```

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
