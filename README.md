# Sample repository for reproducing issue described in [facebook/relay#3770](https://github.com/facebook/relay/issues/3770)

Run `npx relay-compiler@13.0.1` in the root to see the error (same thing happens if `relay-compiler` is installed). 
```
[default] compiling...
thread 'main' panicked at 'no entry found for key', crates/relay-compiler/src/build_project/build_schema.rs:37:17
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```