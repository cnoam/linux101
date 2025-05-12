# glob: Using wildcards ( '*', '?' ) for file names

Using pattern such as `ls a*` may seem similar to regular expression, but it is different. This kind of usage is called *globbing* ( "global match" in ancient unix) and is used by the **shell** to expand name pattern to a list of files. The shell *expands* the pattern to a list of files before the command is run.


| Pattern   | Matches                                                       | Example Use                                                                    |
| --------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `*`       | **Zero or more characters** (excluding `/`)                   | `*.txt` → all `.txt` files                                                     |
| `?`       | **Exactly one character**                                     | `file?.txt` → `file1.txt`, not `file10.txt`                                    |
| `[abc]`   | **Any one character** from the list                           | `file[123].txt` → `file1.txt` etc.                                             |
| `[a-z]`   | Any one **character in a range**                              | `file[a-c].txt` → `filea.txt`, `fileb.txt`, etc.                               |
| `[!abc]`  | Any one character **not in the list**                         | `file[!0-9].txt` → not ending with digit                                       |
| `{a,b,c}` | **Brace expansion**: matches any of the comma-separated terms | `{foo,bar}.txt` → `foo.txt`, `bar.txt`                                         |
| `**`      | Matches **files and directories recursively** (if enabled)    | `**/*.py` → all Python files in all subdirs (Bash 4+ with `shopt -s globstar`) |

<br><br>



## 💻 Exercise --- how many arguments?

Let's say there are three files `a1`, `a2`, `a3` in the current directory.

when running `ls a*`, how many arguments the command receives?

1. Create a temporary directory
1. create 3 files with the above names
1. write a program (C or python) that prints the number of args it receives.
1. run `my_command a*`

# cool examples of using glob

## Use Braces {} for Multiple Alternatives
`cp file{1,2,3}.txt backup/` <br>
`mv {draft,final}/report.txt ./`

## Character Ranges and Negation
`ls file[0-3].txt    # Matches file0.txt, file1.txt, file2.txt, file3.txt`

`ls file[!0-9].txt    # Matches files NOT ending with a digit`


## Rename Multiple Files with Globs and a Loop
`for f in *.JPG; do mv "$f" "${f%.JPG}.jpg"; done`

<hr>
<br><br>

## Compare with regex:

| Feature              | **Globbing**                           | **Regex (Regular Expressions)**                        |
| -------------------- | -------------------------------------- | ------------------------------------------------------ |
| **Purpose**          | Filename/path pattern matching         | General pattern matching in text (not just filenames)  |
| **Complexity**       | Simple and limited                     | Complex and powerful                                   |
| **Syntax**           | Uses wildcards (`*`, `?`, `[abc]`)     | Uses full regex syntax (`.`, `*`, `+`, `^`, `$`, etc.) |
| **Use Case**         | Mostly used in shells and file systems | Used in programming, text processing, grep, sed etc.   |
| **Examples**         | `*.txt`, `file?.c`, `[a-z]*.sh`        | `^file\d+\.c$`, `.*\.txt`, `[A-Z]{2,}`                 |
| **Who Processes It** | Shell (bash, zsh, etc.)                | Tools like `grep`, `sed`, Python `re`, etc.            |

<hr>