// TextColumnCount+
// © vetl1489
// vetl1489@gmail.com
// Adobe InDesign script. Скрипт для инкремента количества колонок текстовых фреймов.

var MAX_COLUMN = 40; // максимальное количество колонок фрейма в InDesign

app.scriptPreferences.enableRedraw = false;

for (var i = 0; app.selection.length > i;  i++) {
  if (app.selection[i].constructor.name === "TextFrame") {
    var count = app.selection[i].textFramePreferences.textColumnCount;
    if (count < MAX_COLUMN) {
      app.selection[i].textFramePreferences.textColumnCount++;
    }
  }
}
