export const openNewTab = (url: string) => {
  window.open(
    url,
    'title',
    'height=' + screen.height + ',width=' + screen.width + 'fullscreen=yes',
  );
};
