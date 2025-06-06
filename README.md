# ArthurNotes - Simple Note-Taking Application

ArthurNotes is a responsive and straightforward note-taking application built using pure HTML, CSS, and JavaScript. It allows users to easily create, manage, and organize their notes directly within the web browser, leveraging the browser's `localStorage` for data persistence.

## Features

* **Create Notes:** Quickly jot down your thoughts and ideas.
* **Pin Notes:** Highlight important notes by pinning them to the top.
* **Copy Notes:** Duplicate existing notes with a single click.
* **Delete Notes:** Remove unwanted notes.
* **Search Notes:** Efficiently find specific notes by searching their content.
* **Export to CSV:** Export all your notes in a comma-separated values format for easy backup or sharing.
* **Responsive Design:** Provides a seamless experience across various devices, including desktops and mobile phones.
* **Local Storage:** Notes are stored locally in your browser's `localStorage`, ensuring your data is private and accessible even offline.

## Screenshots

**Desktop View:**

![Desktop View of ArthurNotes](./assets/image2.png)

**Mobile View:**

![Mobile View of ArthurNotes](./assets/image1.png)

## Technologies Used

* HTML: For structuring the application's layout and elements.
* CSS: For styling the application, making it visually appealing and responsive.
* JavaScript: For implementing the core functionalities of note creation, manipulation, search, and export, as well as managing data in `localStorage`.

## How to Use

1.  **Open in Browser:** Simply open the `index.html` file in your preferred web browser.
2.  **Add New Note:** Type your note in the "What do you want to note?" input field and click the plus icon.
3.  **View Notes:** Your notes will be displayed in a grid below the input area.
4.  **Pin Note:** Click the pin icon at the bottom-left of a note to pin it to the top of the list. Click again to unpin.
5.  **Copy Note:** Click the duplicate icon (file with a plus) at the top-right of a note to create a copy.
6.  **Delete Note:** Click the "X" icon at the top-right of a note to delete it.
7.  **Search Notes:** Use the search bar at the top to type keywords and filter your notes.
8.  **Export to CSV:** Click the "Export CSV" button in the header to download all your notes as a `.csv` file.

## Local Storage

All notes are stored in your browser's `localStorage`. This means:

* Your notes are saved directly in your browser and are not stored on any external server.
* The data persists even if you close and reopen the browser.
* The storage is specific to your browser and device.

## Author

This note-taking application was created by Arthur Granito.

## License

This project is open-source. Feel free to use and modify it according to your needs. (You can add a specific license here if you have one, e.g., MIT License).