use std::thread;

fn main() {
  println!("Hello, world!");
}

#[no_mangle]
pub fn multiply(a: i32, b: i32) -> i32 {
  a * b
}

// This is not supported yet
#[no_mangle]
pub fn thread_multiply(a: i32, b: i32) -> i32 {
  let child = thread::spawn(move || {
    a * b
  });
  let res = child.join();
  res.unwrap()
}