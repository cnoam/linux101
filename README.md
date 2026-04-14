# Linux Basics & CLI Course

A self-paced introductory Linux course for complete beginners — primarily Windows/Mac users who have never used a command line.

**Estimated time:** 8–12 hours  
**Live site:** https://cnoam.github.io/linux101/

---

## Who Is This For?

Students who use Windows or Mac and have never used Linux or the command line. No prior experience required. By the end of the course, you will be able to connect to a Linux machine and run basic commands — and the fear will be gone.

---

## Course Structure

| Chapter | Topic |
|---------|-------|
| 1 | Introduction to Linux, WSL, boot process, virtual machines |
| 2 | Navigating the filesystem, the terminal/shell, environment variables |
| 3 | Working with files and directories, redirection and pipelines |
| 4 | File permissions and ownership |
| 5 | Basic Linux commands |
| 6 | Text processing and editing |
| 7 | Advanced text processing (awk, sed, etc.) |
| 8 | Users, groups, and permissions |
| 9 | Package management |
| 10 | Networking and remote access |
| Appendix | Regular expressions and glob patterns |

---

## Student Prerequisites

- A Windows or Mac computer
- No Linux or CLI experience needed
- In Chapter 1, you will set up either **VirtualBox** (with Alpine Linux) or **WSL2** to run Linux locally

---

## Conventions Used in the Course

| Emoji | Meaning |
|-------|---------|
| 🎥 | Video to watch |
| 💻 | Exercise to run on your computer |
| ✅ | Check yourself |
| ❔ | Question to think about |
| ⚠️ | Warning — you can cause damage |
| ℹ️ | More information |

---

## Running Locally (Contributors)

The site is built with [MkDocs](https://www.mkdocs.org/) and the [Material theme](https://squidtheme.github.io/mkdocs-material/).

```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Serve locally
mkdocs serve
# → http://127.0.0.1:8000

# Deploy to GitHub Pages
mkdocs gh-deploy --force
```

**Pre-commit hook:** copy `pre-commit` to `.git/hooks/` and make it executable. It runs a link checker before each commit.

---

## Languages

The course is available in **English** (default) and **Hebrew**. Hebrew translations use the `.he.md` file suffix.
