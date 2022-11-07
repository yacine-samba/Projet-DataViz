/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4charts.XYChart);
chart.padding(40, 40, 40, 40);
if(chart.logo) {
  chart.logo.disabled =true;
}

chart.numberFormatter.bigNumberPrefixes = [
  { "number": 1e+3, "suffix": "K" },
  { "number": 1e+6, "suffix": "M" },
  { "number": 1e+9, "suffix": "B" }
];

var label = chart.plotContainer.createChild(am4core.Label);
label.x = am4core.percent(97);
label.y = am4core.percent(95);
label.horizontalCenter = "right";
label.verticalCenter = "middle";
label.dx = -15;
label.fontSize = 50;

var playButton = chart.plotContainer.createChild(am4core.PlayButton);
playButton.x = am4core.percent(97);
playButton.y = am4core.percent(95);
playButton.dy = -2;
playButton.verticalCenter = "middle";
playButton.events.on("toggled", function(event) {
  if (event.target.isActive) {
    play();
  }
  else {
    stop();
  }
})

var stepDuration = 4000;

var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.dataFields.category = "manga";
categoryAxis.renderer.minGridDistance = 1;
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.disabled = true;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.min = 0;
valueAxis.rangeChangeEasing = am4core.ease.linear;
valueAxis.rangeChangeDuration = stepDuration;
valueAxis.extraMax = 0.1;

var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.categoryY = "manga";
series.dataFields.valueX = "ventes";
series.tooltipText = "{valueX.value}"
series.columns.template.strokeOpacity = 0;
series.columns.template.column.cornerRadiusBottomRight = 5;
series.columns.template.column.cornerRadiusTopRight = 5;
series.interpolationDuration = stepDuration;
series.interpolationEasing = am4core.ease.linear;

var labelBullet = series.bullets.push(new am4charts.LabelBullet())
labelBullet.label.horizontalCenter = "right";
labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
labelBullet.label.textAlign = "end";
labelBullet.label.dx = -10;

chart.zoomOutButton.disabled = true;

// as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
series.columns.template.adapter.add("fill", function(fill, target){
  return chart.colors.getIndex(target.dataItem.index);
});

var year = 1997;
label.text = year.toString();

var interval;

function play() {
  interval = setInterval(function(){
    nextYear();
  }, stepDuration)
  nextYear();
}

function stop() {
  if (interval) {
    clearInterval(interval);
  }
}

function nextYear() {
  year++

  if (year > 2021) {
    year = 1997;
  }

  var newData = allData[year];
  var itemsWithNonZero = 0;
  for (var i = 0; i < chart.data.length; i++) {
    chart.data[i].ventes = newData[i].ventes;
    if (chart.data[i].ventes > 0) {
      itemsWithNonZero++;
    }
  }

  if (year == 1997) {
    series.interpolationDuration = stepDuration / 4;
    valueAxis.rangeChangeDuration = stepDuration / 4;
  }
  else {
    series.interpolationDuration = stepDuration;
    valueAxis.rangeChangeDuration = stepDuration;
  }

  chart.invalidateRawData();
  label.text = year.toString();

  categoryAxis.zoom({ start: 0, end: itemsWithNonZero / categoryAxis.dataItems.length });
}


categoryAxis.sortBySeries = series;

let allData = {

    "1997": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 194568
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 243569
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 480548
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 245232
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 235987
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 201036
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 0
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 230256
        },
        {
          "manga": "One Piece",
          "ventes": 0
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 500686
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 800324
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 197156
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "1998": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 102574
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 550835
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 35402
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 375278
        },
        {
          "manga": "H2",
          "ventes": 251281
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 241200
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 210776
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 0
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 52281
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 350557
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 353882
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "1999": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 126272
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 353141
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 113141
        },
        {
          "manga": "H2",
          "ventes": 126272
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 75335
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 121729
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 0
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 76145
        },
        {
          "manga": "One Piece",
          "ventes": 153147
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 204474
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 101588
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2000": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 124227
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 239122
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 56579
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 103815
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 82244
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 187901
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 102334
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 0
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 400825
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 84264
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 185630
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2001": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 356559
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 70611
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 645663
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 232340
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 106510
        },
        {
          "manga": "Naruto",
          "ventes": 257599
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 875731
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 262880
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 236194
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 405622
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2002": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 505991
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 949094
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 554899
        },
        {
          "manga": "Naruto",
          "ventes": 605879
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 1507493
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 504623
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 476895
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 654423
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 754850
        },
        {
          "manga": "Yuukan Club",
          "ventes": 419153
        }
      ],

    
    "2003": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 350380
        },
        {
          "manga": "Bleach",
          "ventes": 419484
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 859524
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 754122
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 1253409
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 1028759
        },
        {
          "manga": "Naruto",
          "ventes": 977323
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 2287542
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 773973
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 815739
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2004": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 520218
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 655617
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 875794
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 752990
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 976268
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 970904
        },
        {
          "manga": "Naruto",
          "ventes": 1041892
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 1462986
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 810236
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 705539
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2005": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 939637
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 448014
        },
        {
          "manga": "Death Note",
          "ventes": 952502
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 1094589
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 1420467
        },
        {
          "manga": "Naruto",
          "ventes": 1122979
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 1426966
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 926810
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 451286
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 605915
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2006": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 957323
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 1324124
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 831933
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 952279
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 829221
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 959767
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 0
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 1140634
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 1221307
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2007": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 1324953
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 930069
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 901057
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 856157
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 986232
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 809616
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 1333176
        },
        {
          "manga": "Naruto",
          "ventes": 1503843
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 1453357
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 2046596
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2008": [
        {
          "manga": "20th Century Boys",
          "ventes": 1597299
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 1504253
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 1368960
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 1617963
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 1545987
        },
        {
          "manga": "Naruto",
          "ventes": 2788860
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 1857865
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 3806522
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 953022
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 919577
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2009": [
        {
          "manga": "20th Century Boys",
          "ventes": 13838120
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 4040247
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 901494
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 2721783
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 2838983
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 2619722
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 896972
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 4467819
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 7574486
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 898672
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2010": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 3597296
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 3895758
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 3813406
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 2483218
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 2702794
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 3737944
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 6164529
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 1928181
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 959396
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 17004313
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2011": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 1349541
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 3218921
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 2074011
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 3412234
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 1571989
        },
        {
          "manga": "Gintama",
          "ventes": 3350308
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 3012279
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 5583737
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 24003216
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 1378671
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2012": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 2047715
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 2942354
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 2084999
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 3013364
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 4892142
        },
        {
          "manga": "Magi",
          "ventes": 1133541
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 5015477
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 17580239
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 0
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 1184459
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 2364029
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2013": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 2047747
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 2823491
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 0
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 3187382
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 7597771
        },
        {
          "manga": "Magi",
          "ventes": 6021876
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 4564972
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 10352519
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 8721011
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 3705363
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 1275857
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2014": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 2556256
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 3543126
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 4953515
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 0
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 5975503
        },
        {
          "manga": "Magi",
          "ventes": 3358950
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 4549156
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 9264867
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 9095509
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 2678876
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 5107258
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2015": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 7447583
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 5384663
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 5861240
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 0
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 0
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 9496690
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 1917984
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 7419559
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 1856011
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 3063415
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 7707841
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 2696916
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2016": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 5646663
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 5370442
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 5517167
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 3064852
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 0
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 9247597
        },
        {
          "manga": "One Punch Man",
          "ventes": 2036909
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 5566977
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 2264952
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 4564961
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 3038878
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2017": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 3920529
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 5034410
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 1623341
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 5316342
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 0
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 9164872
        },
        {
          "manga": "One Punch Man",
          "ventes": 2714019
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 5570983
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 1710529
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 2465797
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 4229053
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2018": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 4227712
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 4020714
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 5758826
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 0
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 7246241
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 4274000
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 2954325
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 2423002
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 4145487
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 2312091
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 1441055
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2019": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 0
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 2316996
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 0
        },
        {
          "manga": "Kaguya-sama: Love Is War",
          "ventes": 2071133
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 3689718
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 2787791
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 0
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 4647791
        },
        {
          "manga": "One Punch Man",
          "ventes": 1566757
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 2744837
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 0
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 3829534
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 1982097
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 2463988
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2020": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 0
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 82345447
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 7212099
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 6702736
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 8251058
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 6003589
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 0
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 7709667
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki no Kyojin",
          "ventes": 4306012
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 4541589
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 6368445
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 6145591
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 0
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],

    
    "2021": [
        {
          "manga": "20th Century Boys",
          "ventes": 0
        },
        {
          "manga": "Ace of Diamond",
          "ventes": 0
        },
        {
          "manga": "Assassination Classroom",
          "ventes": 0
        },
        {
          "manga": "Baby & Me",
          "ventes": 0
        },
        {
          "manga": "Bakuman",
          "ventes": 0
        },
        {
          "manga": "Bastard!",
          "ventes": 0
        },
        {
          "manga": "Black Cat",
          "ventes": 0
        },
        {
          "manga": "Bleach",
          "ventes": 0
        },
        {
          "manga": "Blue Exorcist",
          "ventes": 0
        },
        {
          "manga": "Boys Over Flowers",
          "ventes": 0
        },
        {
          "manga": "Chainsaw Man",
          "ventes": 5212578
        },
        {
          "manga": "D.Gray Man",
          "ventes": 0
        },
        {
          "manga": "Death Note",
          "ventes": 0
        },
        {
          "manga": "Demon Slayer",
          "ventes": 29511021
        },
        {
          "manga": "Detective Conan",
          "ventes": 0
        },
        {
          "manga": "Eyeshield 21",
          "ventes": 0
        },
        {
          "manga": "Fairy Tail",
          "ventes": 0
        },
        {
          "manga": "Flame of Recca",
          "ventes": 0
        },
        {
          "manga": "Fullmetal Alchemist",
          "ventes": 0
        },
        {
          "manga": "Gantz",
          "ventes": 0
        },
        {
          "manga": "Gintama",
          "ventes": 0
        },
        {
          "manga": "Great Teacher Onizuka",
          "ventes": 0
        },
        {
          "manga": "H2",
          "ventes": 0
        },
        {
          "manga": "Haikyū!!",
          "ventes": 4345443
        },
        {
          "manga": "Hajime no Ippo",
          "ventes": 0
        },
        {
          "manga": "Hikaru no Go",
          "ventes": 0
        },
        {
          "manga": "Honey and Clover",
          "ventes": 0
        },
        {
          "manga": "Hoshin Engi",
          "ventes": 0
        },
        {
          "manga": "Hunter x Hunter",
          "ventes": 0
        },
        {
          "manga": "Initial D",
          "ventes": 0
        },
        {
          "manga": "Inuyasha",
          "ventes": 0
        },
        {
          "manga": "Jujutsu Kaisen",
          "ventes": 30917746
        },
        {
          "manga": "Kaguya-sama Love Is War",
          "ventes": 0
        },
        {
          "manga": "Katekyo Hitman Reborn!",
          "ventes": 0
        },
        {
          "manga": "Kimi ni Todoke",
          "ventes": 0
        },
        {
          "manga": "Kimi no Todoke",
          "ventes": 0
        },
        {
          "manga": "Kingdom",
          "ventes": 4672612
        },
        {
          "manga": "Kuroko no Basket",
          "ventes": 0
        },
        {
          "manga": "Magi",
          "ventes": 0
        },
        {
          "manga": "Major",
          "ventes": 0
        },
        {
          "manga": "Mei-chan no Shitsuji",
          "ventes": 0
        },
        {
          "manga": "My Hero Academia",
          "ventes": 7020361
        },
        {
          "manga": "Nana",
          "ventes": 0
        },
        {
          "manga": "Naruto",
          "ventes": 0
        },
        {
          "manga": "Nodame Cantabile",
          "ventes": 0
        },
        {
          "manga": "Nura: Rise of the Yokai Clan",
          "ventes": 0
        },
        {
          "manga": "Oishinbo",
          "ventes": 0
        },
        {
          "manga": "One Piece",
          "ventes": 7002583
        },
        {
          "manga": "One Punch Man",
          "ventes": 0
        },
        {
          "manga": "Prison School",
          "ventes": 0
        },
        {
          "manga": "REAL",
          "ventes": 0
        },
        {
          "manga": "Rookies",
          "ventes": 0
        },
        {
          "manga": "Saint Young Men",
          "ventes": 0
        },
        {
          "manga": "Samurai X",
          "ventes": 0
        },
        {
          "manga": "Shaman King",
          "ventes": 0
        },
        {
          "manga": "Shingeki No Kyojin",
          "ventes": 7332398
        },
        {
          "manga": "Shokugeki no Soma",
          "ventes": 0
        },
        {
          "manga": "Silver Spoon",
          "ventes": 0
        },
        {
          "manga": "SlamDunk",
          "ventes": 0
        },
        {
          "manga": "Soul Eater",
          "ventes": 0
        },
        {
          "manga": "Space Brothers",
          "ventes": 0
        },
        {
          "manga": "Spy x Family",
          "ventes": 4973402
        },
        {
          "manga": "Tenjou Tenge",
          "ventes": 0
        },
        {
          "manga": "Terra Formars",
          "ventes": 0
        },
        {
          "manga": "The Kindaichi Case Files",
          "ventes": 0
        },
        {
          "manga": "The Ping-Pong Club",
          "ventes": 0
        },
        {
          "manga": "The Prince of Tennis",
          "ventes": 0
        },
        {
          "manga": "The Promised Neverland",
          "ventes": 0
        },
        {
          "manga": "The Quintessential Quintuplets",
          "ventes": 0
        },
        {
          "manga": "The Seven Deadly Sins",
          "ventes": 0
        },
        {
          "manga": "Tokyo Ghoul",
          "ventes": 0
        },
        {
          "manga": "Tokyo Revengers",
          "ventes": 24981486
        },
        {
          "manga": "Toriko",
          "ventes": 0
        },
        {
          "manga": "TTIG Reincarnated as a Slime",
          "ventes": 0
        },
        {
          "manga": "Vagabond",
          "ventes": 0
        },
        {
          "manga": "Yuukan Club",
          "ventes": 0
        }
      ],
}

chart.data = JSON.parse(JSON.stringify(allData[year]));
categoryAxis.zoom({ start: 0, end: 1 / chart.data.length });

series.events.on("inited", function() {
  setTimeout(function() {
    playButton.isActive = true; // this starts interval
  }, 2000)
})
