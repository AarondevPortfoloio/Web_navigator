# Web_navigator

This project simulates basic web browser navigation using the Stack and Linked List data structures. Users can:
	•Open a new web page
	•	Navigate back to the previous page
	•	Navigate forward to the next page
	•	Quit the application

### How it works
- `backPages` — stack of pages visited before the current one  
- `nextPages` — stack of pages that can be revisited (after going back)  

Navigation logic:

- Visiting a **new page** pushes the current page onto `backPages` and clears `nextPages`.  
- Going **back** pushes the current page onto `nextPages` and sets the top of `backPages` as the new current page.  
- Going **forward** pushes the current page onto `backPages` and sets the top of `nextPages` as the current page.  

---

### How to Run
1. **Install Node.js**  
   Make sure Node.js is installed on your system.

2. **Install required packages**  
   In your project folder, run:
   ```bash
   npm install prompt-sync

3. **Run the program**
   node main.js
   Replace main.js with your actual file name if different.

### License

   This project is for educational use and learning purposes.












