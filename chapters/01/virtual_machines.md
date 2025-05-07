

כדי להבין מה זה לינוקס[ ומה ההבדל בינו לwindows]  נסתכל קודם מהי מערכת הפעלה.

# מהי מערכת הפעלה?

מערכת הפעלה (OS) היא התוכנה הבסיסית המנהלת את חומרת המחשב ומספקת שירותים חיוניים לתוכניות מחשב. היא פועלת כגשר בין יישומי המשתמש לרכיבים הפיזיים כגון המעבד, הזיכרון ומכשירי האחסון. מערכת ההפעלה מקצה משאבים, מתזמנת מטלות ומבקרת התקנים היקפיים תוך הבטחת יציבות ואבטחת המערכת. היא מפשטת את מורכבות החומרה, ומאפשרת למשתמשים לבצע משימות ללא דאגה לפרטים הטכניים הבסיסיים. בנוסף, מערכת ההפעלה מציעה ממשק עקבי לפיתוח תוכנה ואינטראקציה עם המשתמש, ומאפשרת ריבוי משימות יעיל, ניהול תהליכים וטיפול בנתונים בסביבות מחשוב שונות. היא חיונית לשימוש יומיומי.

האם אפשר להפעיל מחשב ללא מערכת הפעלה?
כן . זה נקרא bare metal.
במקרה זה כל העול של טיפול בחומרה נופל על המפתח.



### מהי מכונה וירטואלית (Virtual Machine)?

מכונה וירטואלית (VM) היא מערכת המדמה מחשב פיזי שלם בתוך מחשב אחר. ניתן להריץ עליה מערכות הפעלה שונות ולהריץ יישומים כאילו היו על מחשב נפרד. לדוגמה, בעזרת תוכנה כמו **VirtualBox**, ניתן להריץ לינוקס בתוך מחשב שמריץ ווינדוס, או ההפך.

המכונה הווירטואלית משתמשת במשאבים של המחשב הפיזי – כמו מעבד, זיכרון ודיסק – אך היא מבודדת מהמערכת המארחת. זה מאפשר לבדוק תוכנות, להריץ סביבות שונות, או ללמוד על מערכות הפעלה – ללא סיכון למערכת הראשית.

---

### שני סוגים עיקריים של מכונות וירטואליות:

#### 1. Hypervisor Type 1 – "Bare Metal"
- רץ ישירות על החומרה, בלי מערכת הפעלה מארחת.
- דוגמה: VMware ESXi, Microsoft Hyper-V (בשרתים).
- יעיל יותר, משמש בדאטה סנטרים.

#### 2. Hypervisor Type 2 – "Hosted"
- רץ על גבי מערכת הפעלה קיימת.
- דוגמה: VirtualBox, VMware Workstation.
- פשוט לשימוש, מתאים למשתמשים אישיים ולפיתוח.

---

### איור המדגים את ההבדל בין Hypervisor Type 1 ל-Type 2:


![ ](https://miro.medium.com/v2/resize:fit:4800/format:webp/0*r7b1FbiZM3bdTZDf.png)

https://medium.com/@ravipatel.it/understanding-hypervisors-exploring-type-1-vs-type-2-and-full-vs-para-virtualization-71b4dad9abd9


Now go and install VirtualBox on your computer.


# Installing Linux in VirtualBox: 3 alternatives

## Watch the videos (alt1, alt2)
In these videos, we install two variants of linux (each in its own VM)

The first one is installing "linux lite" which has a GUI. It is pre-installed on a (virtual hard disk), so all we have to do is create the machine, and connect the hard disk. See it [🎥 here](https://panoptotech.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=98ca8b22-12aa-497e-b254-b2b000826174)

The second is "installing alpine linux" which is a tiny, no GUI version of linux. We create a machine as before, and then follow all the steps until there is an installed linux!
<br>This be used later, so don't skip!  See it [🎥 here](https://panoptotech.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=0e2f5dde-03a0-4a7e-bd73-b2b000826177)

## or, Take the shortcut (alt3)
Follow the instructions in [Installing Linux in VirtualBox in 3 steps](./using_VirtualBox_linux.pdf)

<br><br>

# Snapshots -- how to go back to a good state
VirtualBox snapshots are useful because they let you save the exact state of a virtual machine, including:

* Disk contents
* Memory (RAM)
* Settings

This means you can:

🕒 Go back in time — If something breaks (like a misconfigured boot file), you can quickly revert to the last working state.

🧪 Experiment safely — Try changes without fear. If it fails, restore the snapshot.

💡 Fast recovery — No need to reinstall or reconfigure your system.

In short: Snapshots = undo button for your VM.

[**snapshot in Oracle site**](https://docs.oracle.com/en/virtualization/virtualbox/6.0/user/snapshots.html)