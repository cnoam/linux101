To understand what is Linux and the differences from Windows, lets first ask "what is an operating system"?

# What is an Operating System?

An operating system (OS) is the foundational software that manages computer hardware and provides essential services for applications. It acts as a bridge between user programs and physical components such as the CPU, memory, and storage devices. The OS allocates resources, schedules tasks, and ensures system stability and security.

Is is possible to run a computer without an OS? <br>
Yes. Is is called *bare metal*. In this case all the burden of handling hardware is on the developer's shoulders.

---

# What is a Virtual Machine?

A virtual machine (VM) is a software emulation of a physical computer system. It allows you to run multiple operating systems on a single hardware host, each in its own isolated environment. For example, you can run Linux inside Windows using virtualization software like VirtualBox. 

VMs share the host's resources — CPU, memory, and disk — but remain isolated from the host and other VMs, making them ideal for testing and development.

This allow testing programs, running various development environments, or learning on a new OS without risking the main operating system.


---


### There are two main types of Virtual machines
The real computer you use is called "HOST".

The virtualized computer (e.g. a computer with 2 CPU and 4GB RAM) running is called "GUEST"

The software that enables this magic is the **Hypervisor**


#### 1. Hypervisor Type 1 – "Bare Metal"
- runs directly on the hardware without a hosting OS
- example: VMware ESXi, Microsoft Hyper-V
- More efficient, used in data centers

#### 2. Hypervisor Type 2 – "Hosted"
- run on (in?) the current OS
- example: VirtualBox, VMware Workstation.
- easy to use, suitable for development and personal users

---

### picture show the difference between Hypervisor Type 1 and Type 2:


![ ](https://miro.medium.com/v2/resize:fit:4800/format:webp/0*r7b1FbiZM3bdTZDf.png)

[more explanation here](https://medium.com/@ravipatel.it/understanding-hypervisors-exploring-type-1-vs-type-2-and-full-vs-para-virtualization-71b4dad9abd9)

⚠️ When installing VirtualBox, it can also install *Extension Pack*. This package is free for personal users but requires paid license for commercial/University usage.  You may install the extension pack on your personal laptop, but MUST NOT install the extension pack on Technion servers. 

For the purpose of this course, you do not need the extension pack.



Now go and install VirtualBox on your computer!



# Installing Linux in VirtualBox: 3 alternatives

## Watch the videos (alt1, alt2)
In these videos, we install two variants of linux (each in its own VM)

The first one is installing "linux lite" which has a GUI. It is pre-installed on a (virtual hard disk), so all we have to do is create the machine, and connect the hard disk. See it [🎥 here](https://panoptotech.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=98ca8b22-12aa-497e-b254-b2b000826174)

The second is "installing alpine linux" which is a tiny, no GUI version of linux. We create a machine as before, and then follow all the steps until there is an installed linux!
<br>This be used later, so don't skip!  See it [🎥 here](https://panoptotech.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=0e2f5dde-03a0-4a7e-bd73-b2b000826177)

## or, Take the shortcut (alt3)
Follow the instructions in [Installing Linux in VirtualBox in 3 steps](./using_VirtualBox_linux.pdf)

<br><br>
# Using Snapshots to Restore Your VM

VirtualBox snapshots let you save and restore the exact state of a VM, including its disk contents and settings. This enables you to:

- **Revert to a Working State:** If something breaks, (like a misconfigured boot file) return to the last snapshot.  
- **Experiment Safely:** Try changes without fear. If it fails, restore the snapshot.
- **Recover Quickly:** No need to reinstall the OS o

For more details, see the [VirtualBox snapshot documentation](https://docs.oracle.com/en/virtualization/virtualbox/6.0/user/snapshots.html).
