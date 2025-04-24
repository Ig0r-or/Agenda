var app = SpreadsheetApp;
var calendar = CalendarApp.getOwnedCalendarById("c_9f4b75d6b03e692c69b857a22e05bd19fafa56390ac6c9af9804478f2489deca@group.calendar.google.com");
var sheet = app.getActiveSheet();

function Calendario() {
    var range = sheet.getRange("A4:D").getValues(); // Inclui a coluna D
    range.map(function(elem, ind, obj) {
        if (elem[0] != "") {
            var title = elem[0];
            var startTime = elem[1] ? new Date(elem[1]) : null;
            var endTime = elem[2] ? new Date(elem[2]) : null;
            var description = elem[3];

            if (startTime && endTime && startTime < endTime) {
                calendar.createEvent(title, startTime, endTime, {description: description});
            } else if (startTime && !endTime) {
                calendar.createAllDayEvent(title, startTime, {description: description});
            } else if (!startTime && endTime) {
                calendar.createAllDayEvent(title, endTime, {description: description});
            } else {
                Logger.log("Erro: Não foi possível criar o evento " + title + " devido a datas inválidas ou ausentes.");
            }
        }
    });
}
