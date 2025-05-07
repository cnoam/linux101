# Demystifying the terminal

The terminal is a text-based tool that lets you control your computer by typing commands. It's a fast, powerful alternative to using the mouse and menus.

It allows you to do what you can do from the GUI, but faster, *repeatable* and scriptable.

**Example**: move a file from /path/to/file1 to /path/to/other/file2.

Using the File Manager, You can open two windows, open the relevant directories, and drag from source to destination.

Using the terminal, you type this *command line* `mv /path/to/file1 /path/to/other/file2`

There are tasks which are easier using the GUI such as selecting muplitple files with no common name, or based on visual cues (picture thumbnails). Don't be fanatic. Use what works best.

**Example**: Move all files with extension DOCX to another folder

ℹ️  *folder* and *directory* are synonims.

**Using File Manager:** set to list view, sort by extension, scroll down until the first file, select it, scroll down until the last one, SHIFT select it, drag to the destination folder which you already prepared, release the mouse button.

**Using command line:** `mv *.docx path/to/destination`

# Is it a SHELL or a TERMINAL?!

## Shell: <br>
The shell is the program that actually interprets your commands and talks to the operating system. It's running inside the terminal.

## A terminal (or terminal emulator)
is the program you use to interact with the shell. It provides the window and text interface where you type commands.

Examples: gnome-terminal, xterm, konsole, Windows Terminal

Think of it like the TV screen and keyboard.

In practice, we use these name interchangably.
<br><br>


## Common commands
```
pwd            # Show where you are (Present Working Directory)
ls             # List files and folders
ls -l          # Long listing (details)
cd /           # Go to root (Change Directory)
cd ~           # Go to home
cd Documents   # Go to Documents (if it exists)
cd ..          # Go up one level
```

📝 Tip: Use Tab to auto-complete folder names!


🎥 open the [video](), and execute the commands below

### 💻 Excercise -- copying a file 
Open a terminal. <br>
If using Alpine, it is already open.<br>
If using Windows WSL, open the Ubuntu, and this is the terminal.<br>
If using a linux with GUI, type `Ctrl+Alt+t` <br>

You are now in the home directory (`/home/your-name`).

Last time to say it: at the end of each line, press `Enter` (`Return` on some keyboards)

>  NOTE: the `#` means start a comment, so no need to type it!

```
touch notes.txt              # Create an empty file
cp notes.txt notes_backup.txt  # Copy file
cp notes.txt Documents/       # Copy into a folder
```
ℹ️ Almost all commands have optional *flags* that affect the command's operation.  Try `cp --help` and `man cp`

ℹ️ The 'Documents' directory exists in Ubuntu but not in Alpine.


### 💻 Excercise -- moving and renaming a file 
```shell
mv notes.txt archive.txt     # Rename
mv archive.txt Documents/    # Move to folder
```

⚠️ the `mv` command (like most others) will NOT ask for confirmation before overwriting file!<br>
`mv some_file existing_file` will silently replace `existing_file` with `some_file`

ℹ️ mv works for both **moving** and **renaming**

✅ Check yourself

Let's say you have a large file and you need to move it to another directory. Will the file be copied to the destination and then the source file be deleted?

Now the destination directory is on another hard-drive.<br>
will the underlying operation be changed?<br>
Will the command syntax be changed?


### 💻 Excercise -- deleting files and directories

```
rm notes_backup.txt         # Delete a file
rm -i archive.txt           # Delete with confirmation
rm -i Documents/archive.txt 
```
⚠️  rm is permanent — no Trash/Recycle Bin.<br>
A deleted file is gone forever. Yes really. you can mess things up. Use git!

⚠️ By default, the `rm` just does its job without confirmation. 

`rm Documents/`

Don't worry - to delete a directory you need to use `rmdir` (safety, anyone?).  Try `rmdir Documents`. Why the fail?


<br><br>
ℹ️  Closing the terminal<Br>
If it is the only terminal (such as in Alpine), it will sign you out ('log off').

type `exit` or press `ctrl-d`