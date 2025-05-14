
👍

# Chapter 10: Networking & Remote Access

This chapter introduces key command-line tools to inspect your network setup, download files from the internet, and connect securely to remote machines. These tools are essential for system administration, software development, and working with remote servers or cloud environments.

---

##  Checking Network Settings

### `ip a` – View Network Interfaces
Displays IP addresses and the status of each network interface (Ethernet, Wi-Fi, loopback).

```bash
ip a
```

Look for:
- `inet` for IPv4 addresses
- `inet6` for IPv6 addresses
- `lo` for the loopback (local) interface

**To modify IP settings (such as changing address), you need to be root**

ℹ️ just do `cheat ip` like I do!

> NOTE:<br> 
In older systems, `ifconfig`  (standing for INterface CONFIGuration) was used. There are still web tutorials using it, but by default it is not installed. You can install it with `sudo apt install net-tools`


### `ping` – Check Network Reachability
Tests if a host is reachable by sending special packets (ICMP) echo requests. 

```bash
ping google.com
```

To stop: press `Ctrl + C`.

> NOTE: If a server answered, it is alive and willing to reply, but if you get no answer, you cannot know if the server is offline or simply does not want to answer!



##  Downloading Files

### `wget` – Download via HTTP/HTTPS/FTP
Simple tool to fetch files from URLs. It is built to handle slow/unstable connection and can even be used to download a whole site. The downloaded URL is saved into a file.

```bash
wget https://example.com/file.txt
```

### `curl` – Flexible Data Transfer Tool
More powerful than `wget`, supports APIs, headers, and POST data. <br>
By default it writes the contents to stdout.


```bash
curl https://example.com
```

Download to file:
```bash
curl -o output.html https://example.com
```


---

##  SSH: Secure Remote Access

SSH (Secure Shell) allows you to log into a remote machine securely.

```bash
ssh yourname@192.168.1.5
```

This opens a shell on the remote computer if:

- It is running an SSH server.
- You have network access to it.
- You know the login credentials or have a key pair configured.

You can also copy files:
```bash
scp file.txt user@host:/path/to/destination/
```

Or copy from remote:
```bash
scp user@host:/remote/file.txt .
```

NOTE: *WinScp* implements this command.
---

## 💻 Exercises

### 1. Check your IP address
Run the following and note your active IP:
```bash
ip a
```
Look for your interface (usually `eth0` or `wlan0`), and the `inet` line.

### 2. Connect to a remote server via SSH
If you have access to a remote machine:

```bash
ssh your_username@remote_ip
```

If using a private SSH key:
```bash
ssh -i ~/.ssh/your_key.pem your_username@remote_ip
```

### 3. connect to a remote server, run a command there
You don't have to open a shell if you want a single command. Simply run

`ssh your_username@remote_ip command`

⚠️ In the following code, which $USER is printed?<br>
`ssh remote_server echo $USER`

Tip: If you don’t have access to a server, try setting up a test VM (and make sure the ssh server runs on it!).



# Summary

In this chapter, you explored key commands for networking:

- `ip a` and `ping` to check and debug connectivity
- `wget` and `curl` to fetch files or interact with websites
- `ssh` for secure remote access

These tools give you powerful control over networking and remote work—foundational skills for server admins, developers, and DevOps engineers.
