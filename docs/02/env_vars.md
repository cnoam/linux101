👍

# Linux Environment Variables

## What is an Environment Variable?

An **environment variable** is a named key-value pair that the operating system and any process running under it can use to configure behavior. When you launch a program, it inherits a copy of your shell’s environment — i.e. all the variables you’ve **exported** in your shell session.

- Stored in memory by the kernel and by each process in its own copy of the environment.
- Commonly used to tell programs where to find files, how to format output, which language to use, and so on.

# Using env vars
Environment variables are useful because they *decouple configuration from code*, allowing the same scripts or applications to run in different contexts simply by changing a few key-value pairs rather than editing source files.

They let you override defaults (e.g. database URLs, API keys, file paths) on a per-environment basis (development, testing, production) without touching code, and they make it easy to share settings between a parent shell and all the processes it launches.

## Example
Your (python) script need to access a host server, using an API key. 

The host name can change, so you don't want to hardcode it in the file. 

The API key not only changes, but is secret, so you MUST NOT write it in the script.

Here is how to use env vars for this:

```python
import os
import sys

def get_env_var(name: str) -> str:
    """Retrieve environment variable or exit with error if undefined or empty."""
    value = os.getenv(name)
    if not value:
        sys.stderr.write(f"Error: required environment variable '{name}' is not set or is empty.\n")
        sys.exit(1)
    return value

def main():
    # Read and validate environment variables
    host = get_env_var("HOST")
    api_key = get_env_var("API_KEY")

    # If we reach here, both HOST and API_KEY are defined and non-empty
    print(f"Connecting to {host} with provided API key…")
    # …rest of your application logic…

if __name__ == "__main__":
    main()

```
<hr>

## Shell Variables vs. Environment Variables
- A **shell variable** exists only in the shell where it’s defined.  
- An **environment variable** is a shell variable that has been marked for export, making it visible to any subprocess you launch.


| Feature            | Shell Variable            | Environment Variable        |
|--------------------|---------------------------|-----------------------------|
| Scope              | Current shell only        | Current shell + child processes |
| Creation           | `VAR=value`               | `export VAR=value`          |
| Visibility to apps | No                        | Yes                         |
| Persistence        | Lost on shell exit        | Lost on shell exit (unless in startup files) |



###  💻 Exercise -- what variable are already defined?
In a terminal (a shell): type `env`. This shows all the existing env vars. (see [the man page](https://www.man7.org/linux/man-pages/man1/env.1.html))



## Common Environment Variables

Here are a few you’ll see in almost every Linux system:

| Variable | Meaning                                                    |
|----------|------------------------------------------------------------|
| `PATH`   | Colon-separated list of directories in which to search for executables (e.g. `/usr/bin:/home/user/bin`) |
| `HOME`   | Your user’s home directory (e.g. `/home/user`)             |
| `USER`   | Your login name                                            |
| `SHELL`  | The program that runs your shell (e.g. `/bin/bash`)        |
| `LANG`   | Default locale and character-set (e.g. `en_US.UTF-8`)      |

You can inspect all exported variables with:
```bash
printenv
# or
env
```


###  💻 Exercise -- where is this var hiding?
open a terminal and create a new var:

`$ badmonky = 1` <br> (without the "$" sign. It is just to remind you that this is the shell prompt)<br>
This will fail with `sh: badmonkey: not found` . Why?

Now write it correctly: `badmonkey=1` and in the next line show it using `echo $badmonkey`.  Ok?

This is a *shell variable*. It lives in the current shell and is **not** passed to subprocessess (program launched from this shell)

To create an environment variable: `export badmonkey=1` . Now programs run from this shell will see it. 

What will happen when this shell is closed? try it!

Write a program (myecho.sh) that will print the value of badmonkey:

```sh
echo $badmonkey
```
`chmod +x myecho.sh` and run it. surprised?

# Scope 
In this line `badmonkey=22 command` , the variable is defined only for this line!

in this line `badmonkey=33`, the variable is defined in the current shell, but not for subprocesses

In this line `export badmonkey=44`, the variable is defined in the current shell, and for subprocesses. When the shell is closed, the variable is lost.

If you want to keep an (env) var persistent, put it in a command file that will run *before* a shell is opened. See the file `.bashrc` that does exactly this.

To unset an env var: `unset the-var-name`, e.g. `unset badmonkey` (without the "$" !)

# Undefined vars?
What happens if we reference undefined variable? 

**by default, undefined var is treated as empty string.**
so `echo $mycat` will simply print empty string.

This behavior was defined in the previous millennium and is now considered BAD habit!

## Maybe True horror story

You run this script as root:
```sh
# bla bla
#... more stuff to hide the next line
rm -rf $SOURCE_FOLDER/$DATA_FOLDER
# ... some more lines
```

The `rm -rf` means "delete the file/path without questions, recursively"

What happens if these env vars are not defined?
(hint: don't try it on your computer): `rm -rf /`

How can you protect your script against such disaster?

Add `set -u` which tells the shell to stop with an error if reading undefined var:
```sh
#!/bin/sh -u
# or 
set -u
# bla bla
#... more stuff to hide the next line
rm -rf $SOURCE_FOLDER/$DATA_FOLDER
# ... some more lines
```

PS: A variable can be defined and have empty value, so the above is not a complete guard.


# Summary

Environment variables provide a simple, standardized way to pass configuration and secret data to shells and applications without hard-coding values into scripts or source code.

By exporting only the values that differ between environments - such as file paths, API endpoints, or credentials - you make your workflows more portable, secure, and maintainable.

Shell variables let you customize the current shell session, while exporting them turns them into environment variables that child processes can inherit. Adopting best practices like `set -u`, quoting your expansions, and validating required variables at startup helps prevent silent failures.