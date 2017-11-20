# Web Assembly Rust demo

__add rustup target__
```
rustup target add wasm32-unknown-emscripten
```

__install Emscripten__
```
cd ~
wget https://s3.amazonaws.com/mozilla-games/emscripten/releases/emsdk-portable.tar.gz
tar -xvf emsdk-portable.tar.gz
cd emsdk-portable
./emsdk update
./emsdk install sdk-incoming-64bit
```

__start__

```
npm start
```

## Resources

- https://medium.com/@ianjsikes/get-started-with-rust-webassembly-and-webpack-58d28e219635