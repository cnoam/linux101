# Chapter NN Text Streams, Redirection, and Pipes in Linux

##  Why Do Linux Programs Use Text?

Linux programs often use **plain text** as input and output because:
- It's **simple** and **human-readable**
- Easy to **chain commands together**
- Works well with files, logs, and automation
- Text can be easily redirected or filtered

Most command-line tools follow a "do one thing well" philosophy and communicate by **reading and writing lines of text**.

---

## 📥📤 What Are stdin, stdout, and stderr?

Every Linux program gets **three standard data streams**:

| Stream   | Name            | Purpose                     |
|----------|------------------|-----------------------------|
| `stdin`  | Standard Input   | Where the program reads input (keyboard, file, or another command) |
| `stdout` | Standard Output  | Where the program writes normal output |
| `stderr` | Standard Error   | Where the program writes error messages |

You don’t usually see these streams directly — but you can control them with **redirection** and **pipes**.


ℹ️ The fact that the data streams are provided, does not mean that program use ! For example, a GUI program (e.g. file explorer, video player) will not use stdin. 

These are mostly used with **text based** content

---

## 🔄 Redirects (`>`, `>>`, `<`, `2>`)

Redirection lets you change where a command reads from or writes to:

| Symbol  | Meaning                                |
|---------|----------------------------------------|
| `>`     | Send stdout to a file (overwrite)       |
| `>>`    | Send stdout to a file (append)          |
| `<`     | Read stdin from a file                  |
| `2>`    | Send stderr to a file                   |
| `&>`    | Send stdout **and** stderr to a file    |

### 📘 Examples:
```bash
echo "hello" > out.txt      # Write to file
cat < out.txt               # Read from file
ls /fake/dir 2> error.txt   # Capture errors only
command &> all_output.txt   # Capture everything
```

---

## What Are Pipes (`|`)?

A **pipe** takes the **stdout of one command** and connects it to the **stdin of another**:

```bash
command1 | command2
```

This lets you build powerful chains of tools.

The Beuty of it is that the program itself is *not aware* to the redirection. It keeps reading from stdin and writing to stdout.



###  All piped commands Run Concurrently!
When you use a pipe:
- **Both commands run at the same time**
- Output from `command1` is sent **on the fly** to `command2`
- The shell handles this connection behind the scenes

### ✅ check yourself
1. how many commands can be piped? Can I run `ls | grep x | wc | sort` ?
1. if the second command (of four commands) fails, but the other succeeds, will the whole command fail or succeed?  What would you want it to be?


🎥 open the [video](sdf), and execute the commands below


###  Examples:
```bash
ls -l | less
cat file.txt | grep "error"
ps aux | grep firefox | wc -l
```

---

##  Example: Filter to stderr

Sometimes you want to **send only errors** to another command or to a file.

###  Example with `find`:
```bash
find / -name "*.conf" 2> errors.txt
```
- `find` may fail to read some directories
- `2>` redirects only **stderr** to `errors.txt`
- Normal results (stdout) still appear in the terminal

Or send both to separate places:
```bash
find / -name "*.conf" > results.txt 2> errors.txt
```

---

## ✅ Summary

- Linux programs use text to stay simple, flexible, and composable
- `stdin`, `stdout`, and `stderr` are standard ways to communicate
- Redirection (`>`, `<`, `2>`) lets you control input/output
- Pipes (`|`) connect programs together — and run **concurrently**
- You can separate normal output and errors when needed
