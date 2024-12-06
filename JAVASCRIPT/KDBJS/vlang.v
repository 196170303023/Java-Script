module main

import os

fn main() {
    println("What is your name?")
    name := os.stdin.read_line() or { panic(err) }
    println("Hello, " + name.trim() + "! Happy coding with Vlang!")
}
