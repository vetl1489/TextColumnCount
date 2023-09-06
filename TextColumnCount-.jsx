// TextColumnCount-
// © vetl1489
// vetl1489@gmail.com
// Adobe InDesign script. Скрипт для декремента количества колонок текстовых фрейма.

app.scriptPreferences.enableRedraw = false;

for (var i = 0; app.selection.length > i;  i++) {
  if (app.selection[i].constructor.name === "TextFrame") {
    var count = app.selection[i].textFramePreferences.textColumnCount;
    if (count < MAX_COLUMN && count > 1) {
      app.selection[i].textFramePreferences.textColumnCount--;
    }
  }
}
