# LinkedIn Profile Picture Modifier Chrome Extension

## Overview

The LinkedIn Profile Picture Modifier is a Chrome extension designed to change the profile pictures of all posts on the LinkedIn homepage to a single image of your choice. This extension demonstrates the ability to interact with a dynamic webpage and manipulate its elements using JavaScript and Chrome Extension APIs.

## Features

*   Replaces all profile pictures in LinkedIn posts with a specified image.
*   Automatically updates profile pictures as new posts load dynamically.
*   Lightweight and efficient.

## Installation

### Prerequisites

*   Google Chrome browser

### Steps

1.  Clone the Repository:

``` bash
git clone https://github.com/AyushBarai/LinkedIn_Profile_Picture_Modifier.git
```


2.  Navigate to the Project Directory:

``` bash
cd LinkedIn_Profile_Picture_Modifier
```


3.  Open Chrome Extensions Page:
    *   Open Chrome and navigate to chrome://extensions/.
    *   Enable "Developer mode" using the toggle switch at the top right.
4.  Load Unpacked Extension:
    *   Click "Load unpacked" and select the project directory (linkedin-profile-modifier).

## Usage

1.  Open LinkedIn:
    *   Navigate to [https://www.linkedin.com/feed/](https://www.linkedin.com/feed/).
2.  Verify Profile Picture Replacement:
    *   The profile pictures in all posts on the LinkedIn feed should be replaced with the specified image.

## File Structure

LinkedIn_Profile_Picture_Modifier

├── manifest.json

├── content.js


*   `manifest.json`: Defines the extension's metadata and permissions.
*   `content.js`: Contains the script that manipulates the LinkedIn feed to replace profile pictures.

## Customization

To change the image used for replacing profile pictures:

1.  Open `content.js`:

```javascript
const newProfilePictureUrl = 'https://path-to-your-image.com/image.png';
```

2.  Replace the URL in `content.js` with the URL of your desired image.
