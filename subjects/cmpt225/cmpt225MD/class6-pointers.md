# CMPT 225 - memory and pointers

## Summary

### Computer memory

- a sequence of locations
- indexed by addresses
- each location stores a data byte
- processor can read or write the byte at each address
- regions of memeory are allocated to processes as needed according to some scheme

In Unix the bottom of memory is for code and data for running the OS.
The top is space for coding data for running user processes
The middle is free memory

These sections change

### Variables and memory
A vairable is a named and typed collection of bytes.
At run timeeach variable has an address in memory.

In C, C++ we can
- Access the address of a variable
- access a variable or memory location by its address
- declare variables for storing addresses (pointers)

```c++
int i = 5; // creates a chunk of memory with the value 5
int *p;    // allocate space for an address
p = &i;    // store %i in p, so p becomes a pointer to i

cout << *p; // dereferences p, compiler needs to know p is an int
```

You can do arithmetic with pointers.

You can view memory, shown in the video [here](https://youtu.be/X6cAU6iPoog?t=1166).
