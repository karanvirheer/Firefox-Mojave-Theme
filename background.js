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
// DARKER_SAND = #735939
// DARK_ESPRESSO = #3E2F2F

const themes = {
  day: {
    images: {
      theme_frame: "mojave_day.png",
    },

    colors: {
      //===============
      // Icon Colour
      //===============

      // colour of taskbar items when you hover over
      button_background_hover: "#c5a675",

      // taskbar icons
      icons: "#3E2F2F",

      // bookmark star in searchbar
      icons_attention: "#FF0",

      //===============
      // Bookmark Colours
      //===============

      bookmark_text: "#F5F5F5",

      //===============
      // Tab Colours
      //===============

      // colour of text of tab names and bookmarks (ig?)
      tab_background_text: "#F5F5F5",

      tab_loading: "#F5F5F5",
      tab_selected: "#8a633a",

      //===============
      // Pop-Up Colours
      //===============

      // hover tab popup colour
      popup: "#8a633a",

      // selected URL in searchbar
      popup_highlight: "#8a633a",

      // text colour of items highlighted inside popups
      // searchbar recommended links text colour
      popup_highlight_text: "#F5F5F5",

      // text colour of when you hover over a tab
      popup_text: "#F5F5F5",

      // bookmarked item > the colour of that menu border
      popup_border: "#F5F5F5",

      //===============
      // Searchbar Colours
      //===============

      // toolbar colour
      toolbar: [0, 0, 0, 0], // Fully transparent toolbar

      // colour of the text in the toolbar (not typing)
      toolbar_field_text: "#F5F5F5",

      // colour of the text in the toolbar (when typing)
      toolbar_field_text_focus: "#F5F5F5",

      // searchbar colour
      toolbar_field: "#dbcebe",

      // searchbar border colour (when not typing)
      toolbar_field_border: "#c89e67",

      // searchbar border colour (when typing)
      toolbar_field_border_focus: "#F5F5F5",

      // searchbar colour (when typing)
      toolbar_field_focus: "#dbcebe",

      // searchbar highlight colour
      toolbar_field_highlight: "#F5F5F5",

      // searchbar highlight text colour
      toolbar_field_highlight_text: "#8a633a",

      //===============
      // Sidebar Border Colours
      //===============

      // bookmarks manager // history sidebar colour
      sidebar: "#8a633a",
      sidebar_border: "#F5F5F5",

      sidebar_text: "#F5F5F5",

      sidebar_highlight: "#c89e67",
      sidebar_highlight_text: "#F5F5F5",

      //===============
      // New Tab Page
      //===============

      ntp_background: "#8a633a",
      ntp_card_background: "#dbcebe",
    },
  },
  night: {
    images: {
      theme_frame: "mojave_night.png",
    },
    colors: {
      //===============
      // Icon Colour
      //===============

      // taskbar icons
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

      // colour of text of tab names and bookmarks (ig?)
      tab_background_text: "#efedeb",

      tab_loading: "#efedeb",
      tab_selected: "#1a2334",

      //===============
      // Pop-Up Colours
      //===============

      // hover tab popup colour
      popup: "#1a2334",

      // selected URL in searchbar
      popup_highlight: "#1a2334",

      // text colour of items highlighted inside popups
      // searchbar recommended links text colour
      popup_highlight_text: "#efedeb",

      // text colour of when you hover over a tab
      popup_text: "#efedeb",

      // bookmarked item > the colour of that menu border
      popup_border: "#efedeb",

      //===============
      // Searchbar Colours
      //===============

      // toolbar colour
      toolbar: [0, 0, 0, 0], // Fully transparent toolbar

      // colour of the text in the toolbar (not typing)
      toolbar_field_text: "#efedeb",

      // colour of the text in the toolbar (when typing)
      toolbar_field_text_focus: "#efedeb",

      // searchbar colour
      toolbar_field: "#4d586e",

      // searchbar border colour (when not typing)
      toolbar_field_border: "#495261",

      // searchbar border colour (when typing)
      toolbar_field_border_focus: "#efedeb",

      // searchbar colour (when typing)
      toolbar_field_focus: "#4d586e",

      // searchbar highlight colour
      toolbar_field_highlight: "#efedeb",

      // searchbar highlight text colour
      toolbar_field_highlight_text: "#1a2334",

      //===============
      // Sidebar Border Colours
      //===============

      // bookmarks manager // history sidebar colour
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
  setTheme("night");
  // if (hours > 8 && hours < 19) {
  //   setTheme("day");
  // } else {
  //   setTheme("night");
  // }
}

// On start up, check the time to see what theme to show.
checkTime();

// Set up an alarm to check this regularly.
browser.alarms.onAlarm.addListener(checkTime);
browser.alarms.create("checkTime", { periodInMinutes: 5 });
