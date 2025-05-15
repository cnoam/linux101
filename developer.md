This file contains Noam's comments during development.


# Detect broken links
2025-05-07

To detect broken links in the MD files: "is there a tool that will recursively check each MD file for broken links"

I chose Rust lychee. 
```
# install via cargo
cargo install lychee

# check every .md in your tree
lychee  chapters
```
but cargo failed because it cannot find openssl lib 
you need to `sudo apt install libssl-dev pkg-config`

After build is finished:
```
cd linux_course
lychee chapters
```

MD readers behaved differently, so link resolving (for example) behaves differently on each.
Solution: create static site (html). There are a few options:mkdocs, hugo, zola, docusaurus.

Will try zola (single binary, no deps)  
```
flatpak install flathub org.getzola.zola
flatpak run org.getzola.zola <some command>
```

also installed mkdocs, forcing into the global system:

`pip install mkdocs --break-system-packages`
then `mkdocs serve` and watch the magic.

To create a static site (not as good looking as the served one): `mkdocks build`

[NC 2025-05-15] : currently use venv with requirements.txt

# git pre-commit hook
always run the link checker before commit. 
Copy the pre-commit file to .git/hooks. Make it executable


# The web site

To serve locally (it shows different output than the VScode preview):
(don't forget `source venv/bin/activate`)

 `mkdocs serve` 
The site is hosted in github pages.
When pushing a commit to github, it automatically updated the website (recreating it from scratch).

The `push` tries to build the site, but fails due to bad keys config.

however, running `mkdocs gh-deploy --force` works ok.

The output is at https://cnoam.github.io/linux101/

<hr>


# Translation to Hebrew
[NC 2025-05-12] no matter what I did, gpt 4o failed badly: omitting words, paragraphs, links.

how should I correctly tell you to perform exact translation, without summarization?


ChatGPT said:
When you want a verbatim, line-by-line translation—no cuts, no paraphrasing—make your prompt explicit about a one-to-one mapping. For example:

“Please translate the following Markdown exactly as-is into English, preserving every sentence, paragraph, code snippet, formatting, and side-note (no summarization or omission).”

Or even more prescriptive:

“I want a literal translation of this text. Do not remove, condense, or paraphrase anything—translate every word and markup element in place.”

Key points to include:

“literal” or “verbatim” translation

“no summarization”, “no omission”

“preserve formatting and code blocks”

Optionally, “provide output as a downloadable MD file” if you need the file written for you.

---




