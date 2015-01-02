kraken-devtools-jsx
===================

[![Build Status](https://travis-ci.org/samsel/kraken-devtools-jsx.svg)](https://travis-ci.org/samsel/kraken-devtools-jsx)

###### jsx plugin for kraken-devtools

Compile React's [jsx](http://facebook.github.io/react/docs/jsx-in-depth.html) on-the-fly when building kraken based express applications.
This kraken-devtools plugin, finds all the `.jsx` files in the given source directory and desugars them to simple Javascript to be used with React.

## Usage
in kraken middleware config file
```json
    "middleware": {
        "devtools": {
            "enabled": true,
            "priority": 35,
            "module": {
                "name": "kraken-devtools",
                "arguments": [
                    "path:./src_path",
                    "path:./destination_path",
                    {
                        "jsx": {
                            "module": "kraken-devtools-jsx",
                            "files": "destination_path_for_jsx/*.js"
                        }
                    }
                ]
            }
        }
    }
```
