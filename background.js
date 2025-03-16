let currentTheme = "";

// DARK
// SKY = #4d586e
// DARK_SAND = #1a2334
// LIGHT_SAND = #495261
// HOVER = #efedeb
// STAR = #FF0
// =====================
// LIGHT
// SKY = #dbcebe
// DARK_SAND = #8a633a
// LIGHT_SAND = #c89e67

const themes = {
  day: {
    images: {
      theme_frame: "mojave_day.jpg",
    },
    colors: {
      frame: "#CF723F",
      tab_background_text: "#111",
    },
  },
  night: {
    images: {
      // theme_frame: "mojave_upscaled.png",
      // theme_frame: "mojave_sharp.png",
      theme_frame: "mojave_night.jpg",
      additional_backgrounds: ["1a2334.png"],
    },
    properties: {
      additional_backgrounds_alignment: ["top"],
      additional_backgrounds_tiling: ["no-repeat"],
    },
    colors: {
      //===============
      // Icon Colour
      //===============

      // color of buttons when you hover over
      button_background_hover: "#efedeb",

      // taskbar icons
      icons: "#1a2334",
      icons: "#efedeb",

      // bookmark star in searchbar
      icons_attention: "#FF0",

      //===============
      // Bookmark Colours
      //===============

      bookmark_text: "#efedeb",

      //===============
      // Tab Colours
      //===============

      // color of text of tab names and bookmarks (ig?)
      tab_background_text: "#efedeb",

      tab_loading: "#efedeb",
      tab_selected: "#1a2334",

      //===============
      // Pop-Up Colours
      //===============

      // hover tab popup color
      // popup: "#efedeb",
      popup: "#1a2334",

      // selected URL in searchbar
      popup_highlight: "#1a2334",

      // text color of items highlighted inside popups
      // searchbar recommended links text color
      popup_highlight_text: "#efedeb",

      // text color of when you hover over a tab
      popup_text: "#efedeb",

      // bookmarked item > the color of that menu border
      popup_border: "#efedeb",

      //===============
      // Searchbar Colours
      //===============

      toolbar_field: "#4d586e",

      // toolbar color
      // commenting this out reveals the img transparency
      // toolbar: "#4d586e",
      // toolbar: "#1a2334",

      //===============
      // Sidebar Border Colours
      //===============

      // bookmarks manager // history sidebar color
      sidebar: "#1a2334",
      sidebar_border: "#efedeb",

      sidebar_text: "#efedeb",

      sidebar_highlight: "#4d586e",
      sidebar_highlight_text: "#efedeb",

      //===============
      // New Tab Page
      //===============

      ntp_background: "#1a2334",
      ntp_card_background: "#4d586e",

      //===============
      // Random Shit
      //===============
    },
  },
};

function setTheme(theme) {
  if (currentTheme === theme) {
    // No point in changing the theme if it has already been set.
    return;
  }
  currentTheme = theme;
  browser.theme.update(themes[theme]);
}

function checkTime() {
  let date = new Date();
  let hours = date.getHours();
  // Will set the sun theme between 8am and 8pm.
  if (hours > 8 && hours < 19) {
    setTheme("day");
  } else {
    setTheme("night");
  }
}

// On start up, check the time to see what theme to show.
checkTime();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create("checkTime", { periodInMinutes: 5 });
